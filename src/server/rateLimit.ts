import type { Request, Response, NextFunction } from 'express';

export interface RateLimitOptions {
  windowMs: number;
  max: number;
}

export const clientIp = (req: Request, trustProxy: boolean): string => {
  if (trustProxy) {
    const forwarded = req.headers['x-forwarded-for'];
    const first = Array.isArray(forwarded) ? forwarded[0] : forwarded;
    if (first && first.trim()) return first.split(',')[0].trim();
  }
  return req.ip ?? req.socket.remoteAddress ?? 'unknown';
};

export const createRateLimiter = (
  options: RateLimitOptions,
  resolveKey: (req: Request) => string
): ((req: Request, res: Response, next: NextFunction) => void) => {
  const hits = new Map<string, number[]>();
  let lastSweep = Date.now();

  const sweep = (now: number) => {
    for (const [key, timestamps] of hits) {
      const alive = timestamps.filter((t) => now - t < options.windowMs);
      if (alive.length === 0) hits.delete(key);
      else hits.set(key, alive);
    }
  };

  return (req, res, next) => {
    const now = Date.now();
    if (now - lastSweep >= options.windowMs) {
      sweep(now);
      lastSweep = now;
    }

    const key = resolveKey(req);
    const timestamps = (hits.get(key) ?? []).filter((t) => now - t < options.windowMs);

    if (timestamps.length >= options.max) {
      const oldest = timestamps[0];
      const retryAfterSeconds = Math.max(1, Math.ceil((oldest + options.windowMs - now) / 1000));
      res.setHeader('Retry-After', String(retryAfterSeconds));
      res.status(429).json({
        error: 'Too many requests. Please wait a moment and try again.',
        retryAfterSeconds,
      });
      return;
    }

    timestamps.push(now);
    hits.set(key, timestamps);
    next();
  };
};
