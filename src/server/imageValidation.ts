export type ImageValidationResult =
  | { ok: true; base64: string; mimeType: string }
  | { ok: false; error: string };

const ALLOWED_MIME_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

const normalizeMime = (mime: string): string => {
  const cleaned = mime.split(';')[0].trim().toLowerCase();
  return cleaned === 'image/jpg' ? 'image/jpeg' : cleaned;
};

const detectImageType = (buf: Buffer): string | null => {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'image/jpeg';
  if (buf.length >= 4 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return 'image/png';
  if (buf.length >= 4 && buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x38) return 'image/gif';
  if (
    buf.length >= 12 &&
    buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 &&
    buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50
  ) return 'image/webp';
  return null;
};

export const validateImagePayload = (
  input: unknown,
  declaredMime: unknown,
  maxBytes: number
): ImageValidationResult => {
  if (typeof input !== 'string' || input.length === 0) {
    return { ok: false, error: 'Image must be a non-empty base64 string.' };
  }

  if (/^https?:\/\//i.test(input)) {
    return { ok: false, error: 'Image URLs are not accepted. Send base64-encoded image data instead.' };
  }

  let payload = input;
  let mimeType = typeof declaredMime === 'string' ? normalizeMime(declaredMime) : 'image/jpeg';

  if (/^data:/i.test(input)) {
    const match = input.match(/^data:([^;,]+);base64,([\s\S]*)$/i);
    if (!match) {
      return { ok: false, error: 'Malformed data URI. Expected data:<image mime>;base64,<payload>.' };
    }
    mimeType = normalizeMime(match[1]);
    payload = match[2];
  }

  if (!ALLOWED_MIME_TYPES.has(mimeType)) {
    return { ok: false, error: `Unsupported image type "${mimeType}". Allowed: JPEG, PNG, WebP, GIF.` };
  }

  const compact = payload.replace(/\s+/g, '');
  if (compact.length === 0 || compact.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(compact)) {
    return { ok: false, error: 'Image payload is not valid base64 data.' };
  }

  const buf = Buffer.from(compact, 'base64');
  if (buf.length === 0) {
    return { ok: false, error: 'Image payload decoded to zero bytes.' };
  }
  if (buf.length > maxBytes) {
    const limitMb = Math.floor(maxBytes / (1024 * 1024));
    return { ok: false, error: `Image exceeds the ${limitMb}MB limit.` };
  }

  const detected = detectImageType(buf);
  if (!detected) {
    return { ok: false, error: 'Image bytes do not match a recognized image format (JPEG, PNG, WebP, GIF).' };
  }
  if (detected !== mimeType) {
    return { ok: false, error: `Declared type "${mimeType}" does not match actual image bytes ("${detected}").` };
  }

  return { ok: true, base64: compact, mimeType };
};
