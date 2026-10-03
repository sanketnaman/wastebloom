export interface AIServerConfig {
  aiEnabled: boolean;
  apiKey: string | null;
  provider: 'gemini' | null;
  model: string;
  visionModel: string;
  jsonLimit: string;
  maxImageBytes: number;
  aiRateWindowMs: number;
  aiRateMax: number;
  aiDailyMaxPerIp: number;
  aiTimeoutMs: number;
  trustProxy: boolean;
  newsletterWebhookUrl: string | null;
  newsletterRateWindowMs: number;
  newsletterRateMax: number;
}

export type EnvLike = Record<string, string | undefined>;

const toInt = (value: string | undefined, fallback: number): number => {
  if (value === undefined || value.trim() === '') return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const MB = 1024 * 1024;

export const loadAIServerConfig = (env: EnvLike = process.env): AIServerConfig => {
  const apiKey = (env.GEMINI_API_KEY ?? '').trim();
  const keyMissing = apiKey.length === 0;
  const explicitlyDisabled = (env.AI_ENABLED ?? '').trim().toLowerCase() === 'false';

  return {
    aiEnabled: !keyMissing && !explicitlyDisabled,
    apiKey: keyMissing ? null : apiKey,
    provider: keyMissing || explicitlyDisabled ? null : 'gemini',
    model: (env.AI_MODEL ?? 'gemini-3.8-flash').trim(),
    visionModel: (env.AI_VISION_MODEL ?? env.AI_MODEL ?? 'gemini-3.8-flash').trim(),
    jsonLimit: (env.AI_JSON_LIMIT ?? '16mb').trim(),
    maxImageBytes: toInt(env.AI_MAX_IMAGE_SIZE_MB, 8) * MB,
    aiRateWindowMs: toInt(env.AI_RATE_WINDOW_MS, 60_000),
    aiRateMax: toInt(env.AI_RATE_MAX, 15),
    aiDailyMaxPerIp: toInt(env.AI_DAILY_LIMIT, 200),
    aiTimeoutMs: toInt(env.AI_TIMEOUT_MS, 30_000),
    trustProxy: (env.TRUST_PROXY ?? '').trim().toLowerCase() === 'true',
    newsletterWebhookUrl: (env.NEWSLETTER_WEBHOOK_URL ?? '').trim() || null,
    newsletterRateWindowMs: toInt(env.NEWSLETTER_RATE_WINDOW_MS, 60_000),
    newsletterRateMax: toInt(env.NEWSLETTER_RATE_MAX, 5),
  };
};
