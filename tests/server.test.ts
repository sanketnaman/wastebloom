// @vitest-environment node
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { Server } from 'http';
import type { AddressInfo } from 'net';
import { createApp } from '../src/server/app';
import type { AIClientLike, AIGenerateResult } from '../src/server/app';
import { loadAIServerConfig } from '../src/server/aiConfig';
import type { AIServerConfig } from '../src/server/aiConfig';

const baseConfig = (overrides: Partial<AIServerConfig> = {}): AIServerConfig => ({
  ...loadAIServerConfig({
    GEMINI_API_KEY: 'test-secret-key',
    AI_RATE_MAX: '1000',
    AI_DAILY_LIMIT: '1000',
    NEWSLETTER_RATE_MAX: '1000',
  }),
  ...overrides,
});

const validScanPayload = {
  identifiedMaterial: 'Banana Peel',
  confidence: 'High',
  compostSuitability: 'Suitable',
  gardeningApplications: ['Compost nitrogen booster'],
  preparation: ['Chop into pieces'],
  usageGuidance: 'Add to a hot compost pile.',
  precautions: ['Bury scraps to avoid pests'],
};

const clientReturning = (text: string): AIClientLike => ({
  models: {
    generateContent: async (): Promise<AIGenerateResult> => ({ text }),
  },
});

const jpegBase64 = (bytes: number): string => {
  const buf = Buffer.alloc(bytes);
  buf[0] = 0xff;
  buf[1] = 0xd8;
  buf[2] = 0xff;
  buf[3] = 0xe0;
  return buf.toString('base64');
};

const startApp = async (options: { config: AIServerConfig; aiClient?: AIClientLike | null }) => {
  const app = createApp(options);
  const server = app.listen(0, '127.0.0.1');
  await new Promise<void>((resolve) => server.once('listening', () => resolve()));
  const { port } = server.address() as AddressInfo;
  return { server, base: `http://127.0.0.1:${port}` };
};

describe('AI configuration', () => {
  it('reports AI as disabled when the API key is missing', async () => {
    const config = loadAIServerConfig({});
    expect(config.aiEnabled).toBe(false);
    expect(config.apiKey).toBeNull();

    const { server, base } = await startApp({ config, aiClient: null });
    try {
      const status = await (await fetch(`${base}/api/ai/status`)).json();
      expect(status.enabled).toBe(false);
      expect(JSON.stringify(status)).not.toContain('undefined');
    } finally {
      server.close();
    }
  });

  it('does not leak the API key when AI is enabled', async () => {
    const { server, base } = await startApp({ config: baseConfig(), aiClient: clientReturning(JSON.stringify(validScanPayload)) });
    try {
      const statusResponse = await fetch(`${base}/api/ai/status`);
      const statusText = await statusResponse.text();
      expect(statusText).not.toContain('test-secret-key');

      const scanResponse = await fetch(`${base}/api/ai/scan-waste`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: jpegBase64(64), mimeType: 'image/jpeg' }),
      });
      const scanText = await scanResponse.text();
      expect(scanText).not.toContain('test-secret-key');
    } finally {
      server.close();
    }
  });

  it('returns available:false when AI is disabled instead of fabricating a result', async () => {
    const config = loadAIServerConfig({});
    const { server, base } = await startApp({ config, aiClient: null });
    try {
      const response = await fetch(`${base}/api/ai/scan-waste`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: jpegBase64(64), mimeType: 'image/jpeg' }),
      });
      const json = await response.json();
      expect(response.status).toBe(200);
      expect(json.available).toBe(false);
      expect(json.data).toBeUndefined();
    } finally {
      server.close();
    }
  });
});

describe('image validation', () => {
  let base = '';
  let server: Server;

  beforeAll(async () => {
    const started = await startApp({ config: baseConfig(), aiClient: clientReturning(JSON.stringify(validScanPayload)) });
    base = started.base;
    server = started.server;
  });

  afterAll(() => server.close());

  it('rejects unsupported MIME types', async () => {
    const response = await fetch(`${base}/api/ai/scan-waste`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: 'AAAA', mimeType: 'application/pdf' }),
    });
    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.error).toMatch(/Unsupported image type/i);
  });

  it('rejects http(s) image URLs to prevent SSRF', async () => {
    const response = await fetch(`${base}/api/ai/scan-waste`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: 'https://example.com/photo.jpg' }),
    });
    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.error).toMatch(/URLs are not accepted/i);
  });

  it('rejects oversized images', async () => {
    const strict = await startApp({
      config: baseConfig({ maxImageBytes: 10 }),
      aiClient: clientReturning(JSON.stringify(validScanPayload)),
    });
    try {
      const response = await fetch(`${strict.base}/api/ai/scan-waste`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: jpegBase64(2048), mimeType: 'image/jpeg' }),
      });
      expect(response.status).toBe(400);
      const json = await response.json();
      expect(json.error).toMatch(/exceeds/i);
    } finally {
      strict.server.close();
    }
  });

  it('rejects payloads whose bytes do not match the declared type', async () => {
    const response = await fetch(`${base}/api/ai/scan-waste`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: Buffer.from('not an image at all').toString('base64'), mimeType: 'image/png' }),
    });
    expect(response.status).toBe(400);
  });
});

describe('malformed AI responses', () => {
  const expectDiscarded = async (text: string) => {
    const { server, base } = await startApp({ config: baseConfig(), aiClient: clientReturning(text) });
    try {
      const response = await fetch(`${base}/api/ai/scan-waste`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: jpegBase64(64), mimeType: 'image/jpeg' }),
      });
      const json = await response.json();
      expect(response.status).toBe(200);
      expect(json.available).toBe(false);
      expect(json.data).toBeUndefined();
    } finally {
      server.close();
    }
  };

  it('discards non-JSON model output', async () => {
    await expectDiscarded('this is not json');
  });

  it('discards JSON that does not match the expected schema', async () => {
    await expectDiscarded(JSON.stringify({ foo: 'bar' }));
  });

  it('discards JSON with an invalid confidence enum', async () => {
    await expectDiscarded(JSON.stringify({ ...validScanPayload, confidence: 'Certain' }));
  });
});

describe('successful AI scan', () => {
  it('returns validated data when the model responds correctly', async () => {
    const { server, base } = await startApp({ config: baseConfig(), aiClient: clientReturning(JSON.stringify(validScanPayload)) });
    try {
      const response = await fetch(`${base}/api/ai/scan-waste`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: jpegBase64(64), mimeType: 'image/jpeg' }),
      });
      const json = await response.json();
      expect(json.available).toBe(true);
      expect(json.data.identifiedMaterial).toBe('Banana Peel');
      expect(json.data.possibleAlternative).toBeUndefined();
    } finally {
      server.close();
    }
  });
});

describe('rate limiting', () => {
  it('returns 429 with Retry-After once the per-window limit is exceeded', async () => {
    const { server, base } = await startApp({
      config: baseConfig({ aiRateMax: 2, aiRateWindowMs: 60_000 }),
      aiClient: null,
    });
    try {
      const post = () =>
        fetch(`${base}/api/ai/scan-waste`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ itemName: 'banana peel' }),
        });

      const first = await post();
      const second = await post();
      expect(first.status).toBe(200);
      expect(second.status).toBe(200);

      const third = await post();
      expect(third.status).toBe(429);
      expect(third.headers.get('Retry-After')).toBeTruthy();
      const json = await third.json();
      expect(json.error).toMatch(/Too many requests/i);
    } finally {
      server.close();
    }
  });
});

describe('newsletter endpoint', () => {
  it('reports configured:false when no webhook is set up', async () => {
    const { server, base } = await startApp({ config: baseConfig({ newsletterWebhookUrl: null }), aiClient: null });
    try {
      const response = await fetch(`${base}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'gardener@example.com' }),
      });
      const json = await response.json();
      expect(json.configured).toBe(false);
      expect(json.subscribed).toBe(false);
      expect(json.message).toMatch(/not configured/i);
    } finally {
      server.close();
    }
  });

  it('rejects invalid email addresses', async () => {
    const { server, base } = await startApp({ config: baseConfig({ newsletterWebhookUrl: null }), aiClient: null });
    try {
      const response = await fetch(`${base}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'not-an-email' }),
      });
      expect(response.status).toBe(400);
    } finally {
      server.close();
    }
  });
});

describe('SEO endpoints', () => {
  it('serves a sitemap that includes the integrated article routes', async () => {
    const { server, base } = await startApp({ config: baseConfig(), aiClient: null });
    try {
      const response = await fetch(`${base}/sitemap.xml`);
      expect(response.status).toBe(200);
      expect(response.headers.get('content-type')).toMatch(/xml/);
      const body = await response.text();
      expect(body).toContain('https://wastebloom.org/waste-to-garden/coffee-grounds-for-plants');
      expect(body).toContain('https://wastebloom.org/gardening-guides/soil-microbiome-organic-gardening');
      expect(body).not.toContain('Invalid Date');
    } finally {
      server.close();
    }
  });

  it('serves robots.txt pointing at the sitemap', async () => {
    const { server, base } = await startApp({ config: baseConfig(), aiClient: null });
    try {
      const response = await fetch(`${base}/robots.txt`);
      expect(response.status).toBe(200);
      const body = await response.text();
      expect(body).toContain('Sitemap: https://wastebloom.org/sitemap.xml');
    } finally {
      server.close();
    }
  });
});

describe('contact and newsletter honesty', () => {
  it('has no contact endpoint - no fake backend was created', async () => {
    const { server, base } = await startApp({ config: baseConfig(), aiClient: null });
    try {
      const response = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'reader@example.com', message: 'Hello' }),
      });
      expect(response.status).toBe(404);
    } finally {
      server.close();
    }
  });

  it('unconfigured newsletter explicitly states no address was stored', async () => {
    const { server, base } = await startApp({ config: baseConfig({ newsletterWebhookUrl: null }), aiClient: null });
    try {
      const response = await fetch(`${base}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'gardener@example.com' }),
      });
      const json = await response.json();
      expect(json.configured).toBe(false);
      expect(json.subscribed).toBe(false);
      expect(json.message).toMatch(/No address was stored/i);
    } finally {
      server.close();
    }
  });
});
