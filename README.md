<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# WasteBloom

Educational site that turns everyday household waste into gardening know-how: fact-checked guides, DIY projects, composting resources and interactive tools.

View your app in AI Studio: https://ai.studio/apps/297c4933-990c-4d55-98f6-6814a6883adb

## Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4, lucide-react, motion — client-side routed SPA (no Next.js).
- **Backend:** Express (`server.ts`) serving the SPA plus `/api/*` routes; Gemini (`@google/genai`) powers the optional AI waste scanner.
- **Content:** curated guide data in `src/data/*` (waste, composting, gardening, DIY) rendered by article pages.

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and set `GEMINI_API_KEY` (leave it empty to run without AI — the UI degrades honestly)
3. Run the app: `npm run dev`
4. Production: `npm run build && npm start`

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with Vite middleware (`tsx server.ts`) |
| `npm run build` | Production client build to `dist/` |
| `npm start` | Serve the built app with `node server.ts` |
| `npm run lint` | Type-check everything (`tsc --noEmit`) |
| `npm test` | Run the Vitest suite (`vitest run`) |

## Testing

Vitest + Testing Library. Server/API tests run under `// @vitest-environment node`; component tests use jsdom (the default in `vitest.config.ts`).

```
tests/
  brownGreen.test.ts     brown-to-green volume estimator (zero-input safe, no fabricated C:N)
  compostVolume.test.ts  bin volume, 40–60% yield range, 45-gallon tumbler preset
  articles.test.ts       integrated article routes, review flags, cross-collection links
  sitemap.test.ts        sitemap routes, per-article lastmod, no duplicates
  server.test.ts         AI disabled, missing key, invalid/oversized images, SSRF URL
                         rejection, malformed model output, rate limiting 429,
                         newsletter unconfigured, robots/sitemap endpoints
  seoHead.test.tsx       title, canonical, Open Graph, JSON-LD rendering
```

## Server architecture (`src/server/`)

| Module | Responsibility |
| --- | --- |
| `aiConfig.ts` | Loads and validates all env configuration into a typed `AIServerConfig` |
| `imageValidation.ts` | Base64-only image input: rejects http(s) URLs (SSRF), enforces JPEG/PNG/WebP/GIF allowlist, base64 strictness, byte-size limit and magic-byte sniffing |
| `rateLimit.ts` | In-memory sliding-window per-IP limiter (429 + `Retry-After`) |
| `aiSchemas.ts` | zod schemas for model output; malformed responses are discarded, never rendered |
| `app.ts` | `createApp({ config, aiClient })` factory: API routes, robots.txt, sitemap.xml, JSON error handling |

`server.ts` is a thin entrypoint: dotenv → config → optional Gemini client → `createApp` → Vite dev middleware (dev) or static `dist/` (prod).

### Operational notes

- **Rate limiting is in-memory and per-process.** If you scale to multiple instances, put a shared store (e.g. Redis) behind `rateLimit.ts` or front the app with a proxy-level limiter, otherwise each process enforces its own budget.
- **Set `TRUST_PROXY=true`** behind a reverse proxy so limits key on real client IPs from `X-Forwarded-For`.
- **API keys are never echoed** in API responses; errors are logged server-side only.

## AI honesty contract

- `GET /api/ai/status` reports `enabled` truthfully; the scanner shows an explicit notice when AI is not configured.
- Sample scanner items bypass the API and are labeled **“Sample data — demonstration”**; they are never presented as an AI analysis.
- When AI is unavailable or returns malformed data, the UI shows an honest “no analysis result” message instead of inventing a result with a confidence score.

## Newsletter

`POST /api/newsletter/subscribe` with `{ email, source }`.

- No `NEWSLETTER_WEBHOOK_URL` configured → `{ configured: false }` and the footer form displays an honest “not configured” message (nothing is stored).
- With a webhook configured → the payload is forwarded and success/failure is reported back truthfully.

## SEO

- `SEOHead` sets canonical URLs, Open Graph/Twitter tags and JSON-LD (Article + FAQPage + BreadcrumbList) using the canonical origin `https://wastebloom.org` (`src/config/site.ts`).
- `src/data/sitemap.ts` derives `sitemap.xml` from the content data (including the gardening article routes) with per-article `lastmod` dates; `robots.txt` points at it.
- Primary navigation, breadcrumbs, footer links and article cards are real `<a href>` elements (SPA navigation via `preventDefault`), so crawlers can discover every route.

## Content review status

Articles carry `reviewStatus` metadata. Pieces marked `needs-human-review` render a visible “Draft — pending review” notice instead of a fact-checked badge until a human review happens.
