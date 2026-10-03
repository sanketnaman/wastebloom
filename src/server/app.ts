import express from 'express';
import type { Request, Response, NextFunction, RequestHandler } from 'express';
import type { AIServerConfig } from './aiConfig.ts';
import { clientIp, createRateLimiter } from './rateLimit.ts';
import { validateImagePayload } from './imageValidation.ts';
import { scanResultSchema, troubleshootSchema } from './aiSchemas.ts';
import { buildSitemapXml } from '../data/sitemap.ts';

export interface AIGenerateResult {
  text?: string;
}

export interface AIClientLike {
  models: {
    generateContent: (args: Record<string, unknown>) => Promise<AIGenerateResult>;
  };
}

export interface CreateAppOptions {
  config: AIServerConfig;
  aiClient?: AIClientLike | null;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const withTimeout = <T>(promise: Promise<T>, timeoutMs: number): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Operation timed out after ${timeoutMs}ms`)), timeoutMs);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });

const SYSTEM_PROMPT = `You are the master horticulturalist and soil scientist at WasteBloom, an educational organic gardening platform.
Analyze the user's kitchen scrap or household waste item for composting and gardening upcycling.

CRITICAL RULES:
1. Distinguish between evidence-based gardening advice and common gardening myths.
2. Never claim every organic waste item is a complete fertilizer or instant plant food.
3. Distinguish between raw direct soil application vs hot composting vs processed amendments.
4. Do not invent exact NPK numbers unless scientifically standard.
5. If the item could carry pests, pathogens, molds, or weed seeds, explicitly flag it.
6. Clearly warn against applying unknown or contaminated substances to edible crops.

You must output strictly a JSON object with this exact structure:
{
  "identifiedMaterial": "String (e.g., Banana Peels)",
  "confidence": "High" | "Medium" | "Low",
  "possibleAlternative": "String or null",
  "compostSuitability": "Suitable" | "Suitable with preparation" | "Not recommended",
  "gardeningApplications": [
    "String 1 (e.g. Compost nitrogen booster)",
    "String 2 (e.g. Worm bin food in moderation)"
  ],
  "preparation": [
    "Step 1 (e.g. Wash to remove non-organic citrus wax)",
    "Step 2 (e.g. Chop into 1/2-inch pieces to accelerate decomposition)"
  ],
  "usageGuidance": "Detailed practical instructions for application rate, depth, or compost layering.",
  "precautions": [
    "Warning 1 (e.g. High moisture can attract fruit flies if left exposed)",
    "Warning 2 (e.g. Do not bury whole peels next to shallow roots)"
  ],
  "mythsBusted": "Explanation busting common internet myths (e.g., banana peel water is NOT a complete balanced fertilizer and does not replace balanced compost).",
  "cToNRatio": "Estimated C:N ratio (e.g., 30:1 Browns or 15:1 Greens)",
  "relatedGuides": ["banana-peels-for-plants", "vegetable-scraps-for-compost"]
}`;

export const createApp = ({ config, aiClient = null }: CreateAppOptions): express.Express => {
  const app = express();
  app.disable('x-powered-by');
  if (config.trustProxy) app.set('trust proxy', true);

  app.use(express.json({ limit: config.jsonLimit }));

  const ipOf = (req: Request): string => clientIp(req, config.trustProxy);
  const aiWindowLimiter = createRateLimiter(
    { windowMs: config.aiRateWindowMs, max: config.aiRateMax },
    ipOf
  );
  const aiDailyLimiter = createRateLimiter(
    { windowMs: 24 * 60 * 60 * 1000, max: config.aiDailyMaxPerIp },
    ipOf
  );
  const newsletterLimiter = createRateLimiter(
    { windowMs: config.newsletterRateWindowMs, max: config.newsletterRateMax },
    ipOf
  );
  const aiGuards: RequestHandler[] = [aiDailyLimiter, aiWindowLimiter];

  app.get('/api/ai/status', (_req: Request, res: Response) => {
    res.json({
      enabled: config.aiEnabled && Boolean(aiClient),
      provider: config.aiEnabled && aiClient ? config.provider : null,
      model: config.aiEnabled && aiClient ? config.model : null,
      message:
        config.aiEnabled && aiClient
          ? 'AI image analysis is active and ready to analyze your garden waste.'
          : 'AI image analysis is not configured on this server. Sample items and all guides still work.',
    });
  });

  app.post('/api/ai/scan-waste', ...aiGuards, async (req: Request, res: Response) => {
    if (!config.aiEnabled || !aiClient) {
      res.json({
        available: false,
        message: 'AI image analysis is not configured on this server.',
      });
      return;
    }

    const body = (req.body ?? {}) as { imageBase64?: unknown; mimeType?: unknown; itemName?: unknown };
    const imageBase64 = body.imageBase64;
    const itemName = typeof body.itemName === 'string' ? body.itemName.trim().slice(0, 200) : '';

    if (!imageBase64 && !itemName) {
      res.status(400).json({ error: 'Image base64 data or item name is required.' });
      return;
    }

    const parts: Array<{ inlineData?: { mimeType: string; data: string }; text?: string }> = [];

    if (imageBase64) {
      const validated = validateImagePayload(imageBase64, body.mimeType, config.maxImageBytes);
      if (!validated.ok) {
        res.status(400).json({ error: validated.error });
        return;
      }
      parts.push({ inlineData: { mimeType: validated.mimeType, data: validated.base64 } });
    }

    parts.push({
      text: itemName
        ? `Identify this household waste item (tentatively "${itemName}") and provide complete gardening and composting instructions according to the JSON format.`
        : 'Identify this household waste item and provide complete gardening and composting instructions according to the JSON format.',
    });

    try {
      const response = await withTimeout(
        aiClient.models.generateContent({
          model: parts[0]?.inlineData ? config.visionModel : config.model,
          contents: { parts },
          config: {
            systemInstruction: SYSTEM_PROMPT,
            responseMimeType: 'application/json',
          },
        }),
        config.aiTimeoutMs
      );

      const parsedJson = JSON.parse(response.text ?? '{}');
      const validated = scanResultSchema.safeParse(parsedJson);
      if (!validated.success) {
        console.warn('AI scan-waste returned a malformed payload; discarding it.');
        res.json({
          available: false,
          message: 'The AI model returned an unexpected response, so no result is shown.',
        });
        return;
      }

      res.json({ available: true, data: validated.data });
    } catch (error) {
      console.warn('AI scan-waste failed:', error instanceof Error ? error.message : error);
      res.json({
        available: false,
        message: 'AI analysis is temporarily unavailable. Please try again shortly.',
      });
    }
  });

  app.post('/api/ai/troubleshoot', ...aiGuards, async (req: Request, res: Response) => {
    if (!config.aiEnabled || !aiClient) {
      res.json({
        available: false,
        message: 'AI troubleshooting is not configured on this server.',
      });
      return;
    }

    const body = (req.body ?? {}) as {
      problemDescription?: unknown;
      binType?: unknown;
      moistureLevel?: unknown;
    };
    const problemDescription =
      typeof body.problemDescription === 'string' ? body.problemDescription.trim().slice(0, 2000) : '';
    const binType = typeof body.binType === 'string' ? body.binType.trim().slice(0, 100) : 'Outdoor pile';
    const moistureLevel =
      typeof body.moistureLevel === 'string' ? body.moistureLevel.trim().slice(0, 100) : 'Not specified';

    if (!problemDescription) {
      res.status(400).json({ error: 'A problem description is required.' });
      return;
    }

    const prompt = `A gardener reported this compost bin issue:
Problem: "${problemDescription}"
Bin Type: "${binType}"
Moisture: "${moistureLevel}"

Provide a scientific diagnosis with:
1. Root cause(s) (Anaerobic conditions, excess nitrogen greens, excess moisture, pest entry, etc.)
2. Immediate corrective action (within 24-48 hours)
3. 7-day recovery plan
4. Prevention tips for future batches
Output strict JSON with fields: { "cause": string, "immediateAction": string[], "recoveryPlan": string[], "prevention": string[] }`;

    try {
      const response = await withTimeout(
        aiClient.models.generateContent({
          model: config.model,
          contents: prompt,
          config: { responseMimeType: 'application/json' },
        }),
        config.aiTimeoutMs
      );

      const parsedJson = JSON.parse(response.text ?? '{}');
      const validated = troubleshootSchema.safeParse(parsedJson);
      if (!validated.success) {
        console.warn('AI troubleshoot returned a malformed payload; discarding it.');
        res.json({
          available: false,
          message: 'The AI model returned an unexpected response, so no diagnosis is shown.',
        });
        return;
      }

      res.json({ available: true, data: validated.data });
    } catch (error) {
      console.warn('AI troubleshoot failed:', error instanceof Error ? error.message : error);
      res.json({
        available: false,
        message: 'AI troubleshooting is temporarily unavailable. Please try again shortly.',
      });
    }
  });

  app.post('/api/newsletter/subscribe', newsletterLimiter, async (req: Request, res: Response) => {
    const body = (req.body ?? {}) as { email?: unknown; source?: unknown };
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const source = typeof body.source === 'string' ? body.source.trim().slice(0, 100) : 'website';

    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      res.status(400).json({ error: 'Please provide a valid email address.' });
      return;
    }

    if (!config.newsletterWebhookUrl) {
      res.json({
        configured: false,
        subscribed: false,
        message: 'Newsletter signup is not configured on this server yet. No address was stored.',
      });
      return;
    }

    try {
      const webhookResponse = await withTimeout(
        fetch(config.newsletterWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source }),
        }),
        5000
      );
      if (!webhookResponse.ok) throw new Error(`Webhook responded with ${webhookResponse.status}`);
      res.json({
        configured: true,
        subscribed: true,
        message: 'Your address was submitted to our newsletter service.',
      });
    } catch (error) {
      console.warn('Newsletter webhook failed:', error instanceof Error ? error.message : error);
      res.status(502).json({
        configured: true,
        subscribed: false,
        message: 'The newsletter service could not be reached. Please try again later.',
      });
    }
  });

  app.get('/robots.txt', (_req: Request, res: Response) => {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /

Sitemap: https://wastebloom.org/sitemap.xml
`);
  });

  app.get('/sitemap.xml', (_req: Request, res: Response) => {
    res.type('application/xml');
    res.send(buildSitemapXml());
  });

  app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
      next(err);
      return;
    }
    if (err instanceof SyntaxError && 'body' in err) {
      res.status(400).json({ error: 'Request body must be valid JSON.' });
      return;
    }
    console.error('Unhandled request error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  });

  return app;
};
