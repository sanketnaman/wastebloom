# Legal & Trust Audit - Phase 2B

Date: 2026-10-04
Scope: All 8 legal/trust routes, contact-flow honesty, privacy/cookie data-flow accuracy,
advertising disclosure, terms/disclaimer expansion, route-level SEO, structured data,
and regression tests. Builds on Phase 2A (commit `3f9ccd9`).

## Eight-page audit matrix

| # | Route | Page | Was audit-complete? | Phase 2B status | Critical fixes made |
|---|-------|------|---------------------|-----------------|---------------------|
| 1 | `/about` | About | No | **Audit-complete** | Removed "verified by university extension research"/"hundreds of pounds" implications; now states educational purpose, honest labeling, review-status reality |
| 2 | `/contact` | Contact | No | **Audit-complete (content)** | Fake form removed entirely; no "Message Received", no 24-48h SLA, no invented email; explicit "not operational" notice. Channel itself still blocked on owner (see owner decisions) |
| 3 | `/editorial-policy` | Editorial Policy | No | **Audit-complete** | Rewritten: source-linked vs. human-reviewed distinction; revision-date and references claims corrected (DIY has none); contact reporting honestly marked non-operational |
| 4 | `/advertising-policy` | Advertising Policy | No | **Audit-complete** | States plainly no ads/affiliate links active; "fact-checking reviews" claim removed; certified-CMP requirement documented with official Google sources |
| 5 | `/privacy-policy` | Privacy Policy | No | **Audit-complete** | Full rewrite against verified implementation; both known contradictions (contact form, newsletter storage) corrected; rights/retention/children/security/updates sections added |
| 6 | `/terms-and-conditions` | Terms & Conditions | No | **Audit-complete (pending owner: governing law)** | Expanded from 2 sections to 13: permitted use, IP, prohibited use, calculator/AI limitations, external links, warranty, liability, newsletter/contact state, changes; governing law explicitly deferred |
| 7 | `/disclaimer` | Disclaimer | No | **Audit-complete** | Expanded: educational purpose, variability, calculator estimates, AI scanner limits, external sites, no-guarantee, warranty/liability; Phase 2A temperatures kept (135-160°F) |
| 8 | `/cookie-policy` | Cookie Policy | No | **Audit-complete** | False cookie/storage/analytics claims replaced with verified state: no cookies, no localStorage/sessionStorage, no analytics; third-party resources (Google Fonts, Unsplash) disclosed |

Result: **8 of 8 pages are audit-complete for content and SEO metadata.** The only
remaining blockers are owner decisions (contact channel, governing law) - see below -
which cannot be answered without the owner.

## Changes made per route

- All 8 pages now render through a single metadata source of truth:
  `src/data/legalRoutes.ts` (`LEGAL_ROUTES`: path, unique title, unique description).
- `LegalPage.tsx` rewritten (562 insertions / 159 deletions across the phase):
  - **Part 1 - Contact:** the `useState`-only fake submission flow, the "Message Received"
    card, the 24-48 business-hour promise, the form, and the `jane@example.com` placeholder
    were all removed. The page now carries a bordered notice: the form is not operational,
    no delivery system exists behind any form on the site, and previously typed input was
    never transmitted or stored. No email address was invented. No fake backend was created
    (verified: `POST /api/contact` returns 404 - test added).
  - **Part 4 - About:** purpose restated as a free educational platform; unverifiable
    "hundreds of pounds" framing and "Evidence-Based Guidance: grounded in research from
    cooperative university extensions" pillar replaced with honest labeling / sources-over-
    folklore / zero-waste principles; disclaimer and editorial policy cross-linked.
  - **Part 4 - Editorial Policy:** new "Source-Linked Is Not the Same as Reviewed" section;
    states none of the guides are human-reviewed yet; standard 1 no longer implies universal
    source coverage; standard 3 no longer claims human authorship (describes labeled automated
    tools instead); standard 4 corrected - revision dates shown only when an article has been
    revised, and the reader reporting channel is honestly marked not operational.
  - **Part 5 - Advertising:** current status block ("The site displays no advertising",
    no networks active, no ad slots/scripts, no affiliate links) separated from future
    possibilities; integrity rules rewritten without the "fact-checking reviews" claim; CMP
    requirement and sources included (see research below).
  - **Part 2 - Privacy:** rewritten end-to-end (see data-flow findings).
  - **Part 6 - Terms:** expanded 2 -> 13 sections; governing law explicitly deferred to owner.
  - **Part 3 - Cookies:** rewritten to the verified empty state.
  - **Part 7 - Disclaimer:** expanded to cover all required topics; technical guidance kept
    consistent with Phase 2A corrections.

## Actual data-flow findings (verified against code)

- **No persistent user data exists.** No database, no file writes of user input anywhere in
  the repository. `grep` for `localStorage`, `sessionStorage`, `document.cookie`: zero hits.
- **Contact form:** no `/api/contact` endpoint; before Phase 2B the UI faked success locally.
  Now no form is rendered at all.
- **AI scanner / troubleshooting:** optional. Payload (image <= 8 MB default, or text) is
  validated, held in request memory, forwarded to Google Gemini only when `GEMINI_API_KEY`
  is configured, then discarded. Failures are logged as messages only (`console.warn`), never
  payloads. When unconfigured, nothing leaves the server.
- **Rate limiting:** in-memory `Map` keyed by client IP (`src/server/rateLimit.ts`); counters
  swept automatically, never persisted.
- **Newsletter:** validates email; when `NEWSLETTER_WEBHOOK_URL` is unset (current state) it
  answers `configured:false, subscribed:false` with "No address was stored" and transmits
  nothing; when configured, forwards `{email, source}` to the operator's webhook - retention
  would be that service's, not the site's.
- **Cookies / browser storage / analytics:** none. Verified in source, in built
  `dist/index.html`, and at runtime (no `gtag`, `plausible`, `matomo`, `fbq`, `adsbygoogle`,
  `googlesyndication` markers in `index.html` or the bundle).
- **Third-party browser requests that do exist:** Google Fonts (font CSS + font files) and
  Unsplash image CDN - both receive the visitor's IP by normal HTTP, disclosed in Privacy and
  Cookie policies. Server-side third party: Google Gemini (only on active AI use).
- **Advertising:** none active; no `ads.txt` created (correct while no ad network runs).

## Google policy / CMP research (official sources)

For future advertising to EEA, UK, and Switzerland traffic:

1. Google AdSense Help - "Google consent management requirements for serving ads in the EEA,
   the UK, and Switzerland (for publishers)":
   https://support.google.com/adsense/answer/13554116
   - Certified CMP integrating the IAB TCF required for personalized ads:
     EEA + UK since 16 January 2024; Switzerland since 31 July 2024.
   - Non-certified-CMP traffic may only receive non-personalized/limited ads.
2. Google AdSense Help - "Set up and manage your Consent Management Platform (CMP)":
   https://support.google.com/adsense/answer/7670013
   - EU user consent policy disclosures; consent for cookies/local storage where legally
     required; Google's own CMP or a third-party CMP may be used.
3. Google - "Help with the EU user consent policy":
   https://www.google.com/intl/en-GB/about/company/user-consent-policy-help/
   - Policy reflects GDPR + ePrivacy Directive; certified CMP adoption enforced by audit.
4. Google Ads Blog (2023-05-16) - "New Consent Management Platform requirements for serving
   ads in the EEA and the UK": https://blog.google/products/adsense/new-consent-management-platform-requirements-for-serving-ads-in-the-eea-and-uk

These are cited on the Advertising Policy page itself (items 1-3). No CMP has been
implemented because no advertising exists; implementation is a Phase 2B+/3 decision for the
owner if ads are ever enabled.

## Technical SEO findings

- **Route-level metadata implemented (Part 8):** every legal route now passes title, unique
  description, `canonicalPath`, `robots="index,follow"` through `SEOHead`; `SEOHead` gained a
  `robots` prop (adds/removes the tag) and `og:url`, Twitter title/description already flow
  from the same props. Verified hydrated in-browser:
  - `/privacy-policy` -> `Privacy Policy - WasteBloom`, canonical
    `https://wastebloom.org/privacy-policy`, `og:url` identical, robots `index,follow`.
  - `/contact` -> `Contact WasteBloom`, canonical `https://wastebloom.org/contact`.
  - `/cookie-policy` (via footer click) -> correct title + canonical.
  - `/` -> canonical `https://wastebloom.org/`, ASCII title, robots `index,follow`.
- **SPA limitation (NOT fixed - for Phase 2D):** raw initial HTML is the same homepage shell
  for every route. Verified with HTTP fetches against the dev server: `/`, `/about`,
  `/contact`, `/privacy-policy`, `/terms-and-conditions`, `/disclaimer`, `/cookie-policy`,
  `/advertising-policy`, `/editorial-policy` all return 200 with the identical
  `<title>WasteBloom - Turn Everyday Waste Into Something Beautiful</title>`. Production
  (`dist/index.html`, served by the `app.get('*')` fallback in `server.ts`) is the same file.
  Route-specific titles/canonicals appear only after React hydration via `SEOHead`.
  **Route-level metadata in raw HTML requires SSR or prerendering and is deferred to
  Phase 2D.** Nothing in this phase claims otherwise.
- **Character encoding / "mojibake" (Part 9):** byte-level inspection found **no corruption**.
  `<meta charset="UTF-8">` is present (line 4 of `index.html`); the title used a valid UTF-8
  en dash (E2 80 93) in `index.html`, `SEOHead`, and `HomePage`; the `?` seen in terminals was
  an ANSI-console display artifact. As a robustness fix, all title/og/twitter strings were
  normalized to ASCII hyphen-minus (asserted ASCII-only by tests), so titles can no longer be
  misrendered by any tool regardless of charset handling.
- **Structured data (Part 9):** `index.html` JSON-LD contains only `Organization` and
  `WebSite` nodes with name/URL/logo/description - no invented address, social profiles,
  contact info, ratings, or founder claims; left as-is (audit pass, no changes needed).
- **Routes, footer, sitemap (Part 9):** all 8 routes dispatched in `App.tsx` (now driven by
  the shared `LEGAL_PAGE_TYPES` list), all 8 footer links present, all 8 sitemap entries
  present exactly once - all now enforced by tests.
- **Homepage metadata:** added `canonicalPath="/"` and `robots="index,follow"`; ASCII title.

## Tests and build results

- `npm run lint` (tsc --noEmit): **pass**
- `npm test` (vitest): **80 tests / 8 files - all pass** (Phase 2A had 60/60; all Phase 2A
  tests preserved and still passing)
  - New `tests/legalPages.test.tsx` (18 tests): 8 routes with unique title/description,
    ASCII-only metadata, per-page canonical + og:url + robots + twitter title, App dispatcher
    routing for all 8 paths, footer links, contact accuracy (no form, no delivery promise, no
    invented email), cookie accuracy (false claims absent), advertising accuracy (no active
    ads + official CMP source links), editorial accuracy (review-status honesty), about
    accuracy, banned false claims across all 8 pages, `index.html` UTF-8/ASCII/no-analytics-
    no-ads markers, 19/19 guides still `needs-human-review`.
  - `tests/server.test.ts`: +2 (no `/api/contact` backend exists -> 404; unconfigured
    newsletter states "No address was stored").
  - `tests/sitemap.test.ts`: +1 (all 8 legal routes included exactly once).
  - `tests/seoHead.test.tsx`: +1 (robots tag write/remove); title-suffix assertion updated
    for the ASCII separator (all other assertions untouched).
- `npm run build`: **pass** (only the pre-existing >500 kB chunk warning)
- Raw HTML checks: 9 URLs on dev server all 200 with identical shell title (limitation
  documented above); `dist/index.html` verified ASCII title + UTF-8 charset + no ad/analytics
  markers; live `robots.txt` and `sitemap.xml` verified containing all 8 legal URLs.
- Browser regression: coffee-grounds article still shows the amber
  "Draft - pending review by the WasteBloom editorial team" badge; no "Fact-Checked" claim.

## Remaining owner decisions (Part 11 - not answered here)

1. **Verified contact channel:** supply a real monitored email address (or approve wiring a
   genuine form backend). The Contact page will publish it only once the owner confirms it.
2. **Governing-law jurisdiction:** which jurisdiction's law should the Terms reference? Left
   explicitly deferred on the page rather than guessed.
3. **Data retention periods:** only relevant if a newsletter webhook is configured; that
   retention is the receiving service's policy - owner to supply if/when configured.
4. **Privacy request process:** no deletion/export tooling exists because no data is stored.
   If a contact channel or newsletter is configured, the owner should define how privacy
   requests are handled and this policy will be updated.
5. **Intended analytics/advertising services:** none are present. If any are planned (and for
   ads, before serving EEA/UK/CH traffic), the owner must pick a Google-certified CMP and the
   Privacy/Cookie/Advertising policies + `ads.txt` will be updated accordingly.
6. **Legal review:** these pages have not been reviewed by a lawyer; professional review is
   recommended before any monetization or newsletter launch.

## Commit

Local commit after green verification (lint + 80 tests + build + raw HTML + browser checks).
Not pushed, not deployed.
