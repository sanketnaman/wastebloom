# GitHub Pages Public Preview Release

Date: 2026-10-04
Scope: deployment-only release (Steps 1-10 of the public preview plan). No Phase 2C-2G work, no design, branding, or article-content changes.

**Live preview:** https://sanketnaman.github.io/wastebloom/

## What shipped

Commit `c504550` ("GitHub Pages public preview deployment") on top of `488d890`
(Phase 2B), pushed fast-forward to `origin/main`.

| Area | Change |
| --- | --- |
| `vite.config.ts` | `base` from `VITE_BASE_PATH` (default `/`); preview-only `transformIndexHtml` plugin that injects `<meta name="robots" content="noindex, nofollow">` and strips the production JSON-LD/`wastebloom.org` URLs from raw HTML; build plugin copying `dist/index.html` to `dist/404.html` for the GitHub Pages SPA fallback |
| `src/config/deployment.ts` | New `isPreviewDeployment()` helper reading `VITE_PREVIEW === 'true'` at call time |
| `src/App.tsx` | Router is base-path aware: strips `import.meta.env.BASE_URL` on initial load and `popstate`, prefixes it on `pushState`, so in-app URLs render as `/wastebloom/...` |
| `src/components/SEOHead.tsx` | In preview: forces `noindex, nofollow` regardless of the `robots` prop, removes canonical/`og:url`/`og:image`, and emits no JSON-LD. Production behavior unchanged (covered by existing tests) |
| `src/pages/HomePage.tsx` | Removed the fabricated fallback scan results (API failure and `available:false` paths now show an honest "No analysis result" notice); preview skips the scan/newsletter fetches with explicit preview messaging; sample results now carry a "Sample data — demonstration" badge |
| `src/components/scanner/WasteScanner.tsx` | Preview: status check and analyze requests are skipped (no network calls); badge shows "Static Preview — No AI Backend"; notice box explains the preview honestly. Non-preview honest messaging unchanged |
| `src/components/scanner/CompostTroubleshooter.tsx` | Removed the fabricated fallback diagnosis and the `alert()`; failures (preview, `available:false`, network) now show an honest notice box with no invented result |
| `.github/workflows/deploy.yml` | New workflow: on push to `main` (and `workflow_dispatch`): `npm ci` → `npm run lint` → `npm test` → `npm run build` with `VITE_PREVIEW=true` and `VITE_BASE_PATH=/wastebloom/` → upload `dist` → deploy to Pages. Permissions: `contents: read`, `pages: write`, `id-token: write`; concurrency group `pages` |
| `tests/previewSeo.test.tsx` | 3 new tests: preview detection, forced noindex + suppressed canonical/`og:url`/`og:image`/JSON-LD in preview, unchanged production SEO when preview is off |

## Configuration

| Variable | Used by | Preview value | Purpose |
| --- | --- | --- | --- |
| `VITE_BASE_PATH` | `vite.config.ts` (`base`) | `/wastebloom/` | Serves the bundle under the repo sub-path on GitHub Pages |
| `VITE_PREVIEW` | `src/config/deployment.ts`, preview HTML plugin | `true` | Preview SEO (raw + hydrated), no backend calls, honest unavailable states |

Both are build-time only. Neither is read by the Express server, neither is
required for local development (`npm run dev`) or the future production build
(defaults: base `/`, preview off → backend calls enabled as before). They are set
per-step in the workflow's build step so the test step never runs with them.

The GitHub Pages site was enabled with `build_type: workflow` via the GitHub API;
GitHub derived the site URL `https://sanketnaman.github.io/wastebloom/`.

## Verification performed

Local (before push):

- `npm run lint` (tsc) — passed.
- `npm test` — 83/83 passed (9 files; the original 80 tests still pass, plus 3 preview SEO tests). The 19 audited guides remain `needs-human-review`.
- `npm run build` (production defaults) — passed; `dist/index.html` has no
  `noindex`, keeps JSON-LD, no base prefix; `404.html` equals `index.html`.
- Preview build (`VITE_PREVIEW=true VITE_BASE_PATH=/wastebloom/ npm run build`)
  — passed; raw `index.html` contains `noindex, nofollow`, zero `wastebloom.org`
  references, zero JSON-LD, two `/wastebloom/assets/` references; `404.html`
  equals `index.html`.
- Secret scan over all of `dist` (patterns: `MY_GEMINI_API_KEY`, `sk-…`,
  `AIza…`) — no matches.
- Because `vite preview` (v8) does not apply `base` when serving files, GitHub
  Pages was simulated with a local HTTP.SYS server mirroring Pages semantics
  (repo sub-path, `404.html` served with status 404 for unknown paths). All
  checks below were run against that simulation, then repeated on the live site.

Deployment:

- Fast-forward push `dd9b718..c504550` (no force, no history rewrite).
- GitHub Actions run <https://github.com/sanketnaman/wastebloom/actions/runs/37146764982>
  — conclusion: **success** (attempt 1, lint + test + build + deploy).

Live browser QA (Tabbit/Playwright, Chrome desktop + 375 px viewport):

- Head: title correct; `meta robots = noindex, nofollow`; no `rel=canonical`;
  no `og:url`/`og:image`; zero JSON-LD scripts; HTTPS.
- Deep-link refresh (e.g. `/wastebloom/composting`, `/wastebloom/privacy-policy`,
  article/tool/legal/unknown routes) — HTTP 404 from Pages, body is the SPA
  shell, app boots, content renders, robots stays `noindex`.
- In-app navigation keeps the `/wastebloom/` prefix and does not full-reload;
  back/forward safe (popstate).
- Backend honesty: **zero `/api/*` requests** observed on the preview while
  exercising scanner, troubleshooter, and newsletter. Upload → "No analysis
  result" notice stating live AI is unavailable in this preview; newsletter →
  "not available in this public preview" (form replaced, no fake success);
  custom diagnosis → honest notice, no fabricated result; sample scans show the
  "Sample data — demonstration" badge.
- Storage: no cookies, no site-written `localStorage` entries (only the test
  browser's own `tabbit_*` keys).
- Console: no JS errors; only expected `Failed to load resource: 404` entries
  for the document itself on direct deep-link loads (inherent to the GitHub
  Pages `404.html` SPA pattern; does not break functionality).
- Mobile 375 px: no horizontal overflow (`scrollWidth` 367).

## Known limitations (intentional, preview-only)

1. Deep links are served with HTTP status 404 (GitHub Pages serves
   `dist/404.html` as the SPA fallback). Pages render correctly; the browser
   logs one 404 for the document. `noindex` + 404 keeps the preview out of
   search indexes.
2. No `robots.txt`/`sitemap.xml` at the preview URL — those are generated by
   the Express server (`server.ts`) which is not deployed to Pages. Crawlers see
   the meta `noindex` instead.
3. No backend features on Pages: AI scan/troubleshoot, newsletter, and contact
   are honestly unavailable (explicit messaging; no fabricated results).
4. Local `vite preview` does not serve assets under a non-root `base` in
   Vite 8; use the Pages deployment (or the local simulator) for base-path
   testing.
5. Article/schema canonical URLs still reference `wastebloom.org` in
   production code paths and in privacy-policy prose; they are never emitted to
   the preview DOM (verified: zero `wastebloom.org` in raw preview HTML; JSON-LD
   and canonical/og tags suppressed).

## Not done (out of scope)

- Phases 2C-2G.
- Serving the Express backend anywhere; the preview is static only.
- Governing law and contact channel in the legal pages (owner decision,
  deferred from Phase 2B).
