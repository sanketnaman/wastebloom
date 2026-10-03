import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '10mb' }));

// Determine AI availability
const isAIAvailable = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0);

let aiClient: GoogleGenAI | null = null;
if (isAIAvailable) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// AI Status Endpoint
app.get('/api/ai/status', (_req: Request, res: Response) => {
  res.json({
    enabled: isAIAvailable,
    provider: isAIAvailable ? 'gemini' : null,
    model: isAIAvailable ? 'gemini-3.8-flash' : null,
    message: isAIAvailable
      ? 'AI Waste Scanner is active and ready to analyze your garden waste.'
      : 'AI Waste Scanner is currently in preview mode. You can still test sample kitchen items or explore our curated gardening guides!',
  });
});

// AI Waste Scanner Endpoint
app.post('/api/ai/scan-waste', async (req: Request, res: Response) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', itemName } = req.body;

    if (!isAIAvailable || !aiClient) {
      return res.status(200).json({
        available: false,
        message: 'AI Waste Scanner is not configured with an active API key yet.',
        fallbackNotice: 'Browsing manual curated guide for this waste item.',
      });
    }

    if (!imageBase64 && !itemName) {
      return res.status(400).json({ error: 'Image base64 data or item name is required.' });
    }

    const systemPrompt = `You are the master horticulturalist and soil scientist at WasteBloom, an educational organic gardening platform.
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

    let contentsParts: any[] = [];
    let imageIncluded = false;

    if (imageBase64) {
      if (typeof imageBase64 === 'string' && (imageBase64.startsWith('http://') || imageBase64.startsWith('https://'))) {
        try {
          const imgRes = await fetch(imageBase64);
          if (imgRes.ok) {
            const arrayBuf = await imgRes.arrayBuffer();
            const b64 = Buffer.from(arrayBuf).toString('base64');
            const detectedMime = imgRes.headers.get('content-type') || mimeType || 'image/jpeg';
            contentsParts.push({
              inlineData: {
                mimeType: detectedMime.split(';')[0].trim(),
                data: b64,
              },
            });
            imageIncluded = true;
          }
        } catch (fetchErr) {
          console.warn('Failed to fetch image URL on server, falling back to item name:', fetchErr);
        }
      } else if (typeof imageBase64 === 'string') {
        // Base64 string or Data URI
        const cleanBase64 = imageBase64.replace(/^data:image\/[a-z0-9+.-]+;base64,/, '');
        contentsParts.push({
          inlineData: {
            mimeType: mimeType || 'image/jpeg',
            data: cleanBase64,
          },
        });
        imageIncluded = true;
      }
    }

    if (imageIncluded) {
      contentsParts.push({
        text: itemName
          ? `Identify this household waste item (tentatively "${itemName}") and provide complete gardening and composting instructions according to the JSON format.`
          : 'Identify this household waste item and provide complete gardening and composting instructions according to the JSON format.',
      });
    } else {
      contentsParts.push({
        text: `Analyze the household waste item: "${itemName || 'Kitchen Waste'}". Provide complete gardening and composting instructions according to the JSON format.`,
      });
    }

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: { parts: contentsParts },
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '{}';
    const parsed = JSON.parse(text);

    return res.json({
      available: true,
      data: parsed,
    });
  } catch (error: any) {
    console.warn('AI scan-waste temporarily unavailable, using fallback:', error.message || error);
    return res.status(200).json({
      available: false,
      message: 'AI model is temporarily busy. Showing curated gardening guide.',
      error: error.message || String(error),
    });
  }
});

// AI Troubleshoot Endpoint
app.post('/api/ai/troubleshoot', async (req: Request, res: Response) => {
  try {
    const { problemDescription, binType = 'Outdoor pile', moistureLevel } = req.body;

    if (!isAIAvailable || !aiClient) {
      return res.status(200).json({
        available: false,
        message: 'AI Troubleshooter requires an active AI connection.',
      });
    }

    const prompt = `A gardener reported this compost bin issue:
Problem: "${problemDescription}"
Bin Type: "${binType}"
Moisture: "${moistureLevel || 'Not specified'}"

Provide a scientific diagnosis with:
1. Root cause(s) (Anaerobic conditions, excess nitrogen greens, excess moisture, pest entry, etc.)
2. Immediate corrective action (within 24-48 hours)
3. 7-day recovery plan
4. Prevention tips for future batches
Output strict JSON with fields: { "cause": string, "immediateAction": string[], "recoveryPlan": string[], "prevention": string[] }`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ available: true, data: parsed });
  } catch (err: any) {
    console.warn('AI troubleshoot temporarily unavailable, using fallback:', err.message || err);
    return res.status(200).json({
      available: false,
      message: 'AI Troubleshooter temporarily busy. Using expert diagnostic rule tree.',
      error: err.message || String(err),
    });
  }
});

// SEO: robots.txt
app.get('/robots.txt', (_req: Request, res: Response) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /

Sitemap: https://wastebloom.org/sitemap.xml
`);
});

// SEO: sitemap.xml
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  res.type('application/xml');
  const now = new Date().toISOString().split('T')[0];
  const pages = [
    '',
    '/waste-to-garden',
    '/waste-to-garden/banana-peels-for-plants',
    '/waste-to-garden/eggshells-for-plants',
    '/waste-to-garden/coffee-grounds-for-plants',
    '/waste-to-garden/orange-peels-for-plants',
    '/waste-to-garden/vegetable-scraps-for-compost',
    '/waste-to-garden/tea-leaves-for-plants',
    '/waste-to-garden/onion-peels-for-plants',
    '/waste-to-garden/potato-peels-for-compost',
    '/composting',
    '/composting/composting-for-beginners',
    '/composting/green-vs-brown-materials',
    '/composting/how-to-make-compost-at-home',
    '/composting/indoor-composting',
    '/composting/outdoor-composting',
    '/composting/composting-mistakes',
    '/composting/compost-smells-bad',
    '/composting/how-long-does-compost-take',
    '/diy-garden-projects',
    '/diy-garden-projects/plastic-bottle-planter',
    '/diy-garden-projects/egg-carton-seed-starter',
    '/diy-garden-projects/diy-compost-bin',
    '/diy-garden-projects/recycled-container-garden',
    '/diy-garden-projects/vertical-garden',
    '/diy-garden-projects/recycled-hanging-planters',
    '/gardening-guides',
    '/tools',
    '/tools/compost-calculator',
    '/tools/brown-green-calculator',
    '/tools/soil-amendment-calculator',
    '/tools/potting-mix-calculator',
    '/waste-scanner',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
    '/cookie-policy',
    '/advertising-policy',
    '/editorial-policy',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>https://wastebloom.org${page}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/waste-to-garden/') || page.startsWith('/tools/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.send(xml);
});

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌿 WasteBloom server is blooming on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start WasteBloom server:', err);
});
