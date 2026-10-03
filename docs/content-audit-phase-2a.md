# Content Audit — Phase 2A

Date: 2026-10-03
Scope: every published waste guide (8), composting guide (8), and gardening guide (3) — 19 articles total.
Method: line-by-line review of `src/data/wasteGuides.ts`, `src/data/compostingGuides.ts`, `src/data/gardeningGuides.ts`; claims checked against university extension and agency sources (URLs linked in each article); UI claims checked in all three article templates plus listing pages, scanner, and legal pages.

## 1. Review status (never auto-approved)

**All 19 articles are marked `needs-human-review`.** None were changed to `human-reviewed`. A regression test (`tests/contentQuality.test.ts`) now fails the build if any guide is ever marked human-reviewed without the field being changed deliberately, and it asserts every guide carries an explicit status.

| Collection | Articles | Status |
|---|---|---|
| Waste to Garden | banana, eggshells, coffee grounds, orange, vegetable scraps, tea, onion, potato | needs-human-review (8/8) |
| Composting | beginners, green-vs-brown, how-to-make, indoor, outdoor, mistakes, smells-bad, how-long | needs-human-review (8/8) |
| Gardening | soil-microbiome, mulching, natural-pest | needs-human-review (3/3) |

Draft warnings are shown on every article page; none were removed.

## 2. False "fact-checked" claims removed

These were presenting unreviewed content as verified:

| Location | Before | After |
|---|---|---|
| `WasteArticlePage.tsx` | "Fact-Checked & Reviewed by …" shown whenever status was absent (6 legacy guides) | Three states: amber draft badge / green claim only when `human-reviewed` / neutral "An editorial guide from WasteBloom" |
| `CompostingArticlePage.tsx` | Unconditional "Fact-Checked by WasteBloom Soil Sciences" | Same three-state logic |
| `GardeningArticlePage.tsx` | Unconditional "Fact-Checked by … Horticultural Sciences" | Same three-state logic |
| `WasteToGardenPage.tsx` | Card CTA "Read Fact-Checked Guide" | "Read Guide" |
| `HomePage.tsx` | "Read comprehensive fact-checked guide" | "Read comprehensive guide" |
| `WasteScanner.tsx` | "browse our fact-checked guides" / "all of our fact-checked guides … work fully" | "browse our guides" / "all of our guides …" |
| `LegalPage.tsx` (About) | "We provide fact-checked, tested methods" | "We publish source-linked methods … citing the university extensions behind them" |
| `LegalPage.tsx` (Editorial Policy) | Claims every claim is cross-referenced, guides "reviewed by human editorial staff", revision dates from new research | Policy now describes actual practice: sources linked on articles, drafts marked pending review, no claim of presenting unreviewed drafts as fact-checked |

## 3. Per-article audit

### Waste guides

**banana-peels-for-plants** — Issues: missing intro/meta/caption/bottom line/status; "science-backed" in excerpt; "virtually zero bioavailable potassium" (overstates UC position — soak does leach some K, but no controlled data it works as fertilizer); "speed up decomposition 3x" (unverifiable); "prevent root burn" (mischaracterizes the real issue — nitrogen tie-up); "~42% of ash weight" and "~1.2% nitrogen" (unverified figures); myth rebuttal invented "university laboratory tests". Changes: added intro (2 paras), metaTitle, metaDescription, caption, bottomLine, reviewStatus; rewrote quick answer, benefits, limitations, myth rebuttal per UC ANR and Ask Extension; trench step now explains nitrogen tie-up and lead time; replaced 3 fabricated reference strings with 3 verified URLs (Ask Extension, UC ANR ×2).

**eggshells-for-plants** — Audited: no changes needed. Full metadata present; claims already sourced to Illinois/UMN/NC/Mississippi/Michigan State/RHS with verified URLs; review status already set. Pending human review like all others.

**coffee-grounds-for-plants** — Audited: no changes needed. Already model-level accuracy (extension-sourced pH, N%, WSU pest review), full metadata, verified URLs. Pending human review.

**orange-peels-for-plants** — Issues: missing intro/meta/caption/bottomLine/status; "completely false" absolutes; "4–8 weeks without disrupting pH" presented as fact; fabricated "10–15%" mass limit; garbage-disposal step (with "Freshner" typo) irrelevant; benefits claimed d-limonene repels aphids/gnats and "deodorizes" piles; "pH remains 6.5–7.2 regardless" (unverifiable); myth rebuttal invented species-level claims; 3 fabricated references (RHS/UF/OGRI titles do not exist as cited). Changes: added full metadata; rewrote quick answer, prep, steps, benefits, limitations, myth rebuttals, FAQ answers per Ask Extension (acidity "negligible"), OSU EM 9034 (citrus/onions may harm worms in bins); dropped invented numbers; step 2 reframed as traditional rinse with honest limits; step 3 now the worm-bin warning; 3 verified reference URLs.

**vegetable-scraps-for-compost** — Issues: missing metadata; title "Ultimate Green Compost Booster"; "single best" superlative; bokashi step described fermentation as "cold composting"; "400 lbs per family per year" (unverifiable); "vitamins that fuel microbial action"; "100% compost-safe"; fabricated references (UW-Madison title, Cleaner Production paper). Changes: retitled "Kitchen Vegetable Scraps for Compost: Greens, Moisture, and Odor Balance"; added full metadata; corrected bokashi description per NC Cooperative Extension (2-week ferment + 2–4 week burial); EPA food-waste claim replaced with sourced statement (food = most common landfilled material, EPA); references replaced with 3 verified URLs (EPA, NC Cooperative Extension, UNH Extension).

**tea-leaves-for-plants** — Issues: missing metadata; "up to 70% of tea bags contain plastic" (unverifiable); "nutrient-dense organic fertilizer"; acid-loving booster step (no extension evidence tea acidifies soil); "5% seed mix … fungal biodiversity" (unsupported); "billions of plastic microfibers" without the German BfR critique; matcha/herbal FAQ hype ("100% of the leaf's nitrogen"); "toxic black slime"; "concentrated caffeine" (spent leaves contain little); fabricated references. Changes: full metadata; rewrote quick answer with the 2019 ET&C study **and** the BfR assessment arguing the figures were overstated; steps replaced (compost layering, honest top-dressing, worm bin per OSU); benefits/limitations/myth/FAQs tempered; caffeine safety reframed; references = the study, the critique, and OSU EM 9034.

**onion-peels-for-plants** — Issues: missing metadata; quick answer claimed "outstanding pest-repelling amendments" and quercetin "protects plant roots against fungal attacks"; skin-tea step claimed aphid/powdery-mildew control; mulch step claimed burrowing-pest deterrence; "proven antifungal" benefit; C:N/type inconsistency; FAQ asserted yellow skins richer in quercetin (unverified); fabricated references. Changes: full metadata; C:N field now says "not firmly established"; all pest/disease claims marked unproven (lab extrapolation, no garden trials) per OSU/Ask Extension; added a second myth entry for the disease-shield claim; FAQ rewritten honestly; references = Ask Extension (737589), OSU EM 9034, EPA.

**potato-peels-for-compost** — Issues: missing metadata; worm step claimed worms enjoy raw peels (OSU: they often avoid them); starch-water "instant potassium boost"; blight described as "theoretical" (UMass: infected tubers can overwinter in non-heating piles); solanine "neutralized … within days" (unverifiable); "chlorpropham" named without source; fabricated references. Changes: full metadata; worm step reframed; starch water reframed as ordinary watering; blight limitation now gives UMass vs other extensions honestly with "when in doubt, trash it"; solanine softened; sprout-inhibitor wording generalized; references = UMass, UMaine, Iowa State.

### Composting guides

All 8 gained `reviewStatus` + a sources section (previously zero references anywhere in this collection), rendered by a new References block in `CompostingArticlePage`.

- **composting-for-beginners** — "replicate this miracle in as little as 6 to 12 weeks" softened (timeline now depends on method); "accelerate decomposition by up to 300%" replaced; refs: NC State handbook, EPA.
- **green-vs-brown-materials** — Content accurate (standard C:N values); added two practical FAQs (too much nitrogen diagnosis; grass clippings in thin layers); refs: NC State, UNH.
- **how-to-make-compost-at-home** — Intro no longer promises "finished compost in 30 days"; key takeaway now gives the full 130/140/160 °F picture incl. >160 °F killing decomposers (NC State); trench section adds ~4-week lead time and the do-not-trench-diseased-material caveat (Iowa State); section retitled from "4-Week Method"; refs: NC State, Iowa State.
- **indoor-composting** — "divert 100%" → "divert most"; "most nutrient-dense organic fertilizer on earth" → honest casting description; bokashi timeline fixed (2 weeks ferment, 2–4 weeks buried — NC Cooperative Extension) and reframed as fermentation not composting; worm figure marked as rule of thumb; dehydrator output no longer called "odorless" pre-compost without qualification; refs: OSU, NC Cooperative Extension.
- **outdoor-composting** — "gold standard" → "standard choice"; "keep pests completely out" → "keep pests out" + tumbler batch-size caveat; refs: NC State, UNH.
- **composting-mistakes** — **Title promised 9 mistakes, content delivered 5.** Restructured into 9 real sections (wet pile, dry pile, cold pile, exposed scraps, pet waste/diseased plants, never turning, imbalance, whole bulky items, harvesting early) with fixes; key takeaways rewritten; refs: NC State, UNH, Iowa State.
- **compost-smells-bad** — Intro said "sulfur dioxide" (wrong gas — now hydrogen sulfide); "24-hour cure" removed from excerpt/intro; crammed numbered string split into 4 structured sections (2 diagnoses + 2 fixes); refs: NC State, EPA.
- **how-long-does-compost-take** — Intro excerpt said "3 weeks in a hot tumbler" (contradicted its own 6–10 week takeaway); "cut time in half" and "10x more entry points" softened; refs: NC State, UNH.

### Gardening guides

All 3 gained `imageAlt` (previously missing from the type — the page used `alt={title}`), `introduction`, `reviewStatus`, and a sources section (rendered by a new References block in `GardeningArticlePage`).

- **soil-microbiome-organic-gardening** — Overclaims removed: "plants do not feed on chemical fertilizers", "shutting down the plant's natural exudate pump", "earthworms depart, soil structure collapses into compacted dust". Section 1 rewritten around exudates/mycorrhizae/nutrient availability (UMD); section 2 retitled "What Synthetic Fertilizers Do — and Do Not Do" (they supply soluble nutrients; what they don't supply is organic matter — UMD/SDSU); added practical third section (top-dress, mulch, soil test). Refs: UMD Soil Health, SDSU.
- **mulching-with-organic-waste** — "conserve up to 70% of soil moisture" replaced with sourced CSU figure (~50% irrigation-need reduction); "100% non-toxic" cardboard claim tempered (starch glue "usually", skip waxed/glossy); "almost exclusively soy-based inks" tempered; 2–4 inch depth + stem-clearance guidance added (UMN); new "Why Mulch Works" section; refs: UMN, Colorado State.
- **natural-pest-management-kitchen-waste** — Biggest rework: removed unsupported claims (repels caterpillars/beetles/aphids, "dissolves the waxy cuticle" of aphids); reframed both recipes honestly (soaps = contact kill of soft-bodied insects only, no residual — Clemson/UC; home brews weak and variable); added a full Safety & Best Practice section (patch test, phytotoxicity, evening spraying, pollinators, no residual action, when to escalate); FAQ on bees tightened; new FAQ on store-bought comparison; excerpt/intro set expectations; refs: UC IPM soap PDF, Clemson HGIC 2154, UF/IFAS.

## 4. Structure / template fixes

- `CompostingGuideItem` and `GardeningGuideItem` types extended: `reviewStatus`, `references`; gardening also `imageAlt` and `introduction`.
- `CompostingArticlePage`: references block, canonical + og:image on SEOHead, honest badge.
- `GardeningArticlePage`: references block, real image alt text, intro paragraph separate from meta description, honest badge.
- `WasteArticlePage`: three-state badge (no more positive claim for status-less guides).
- Numbered-list content strings crammed into single `content` fields were split into proper sections (compost mistakes, odor diagnosis).

## 5. Remaining human follow-ups (not fixable without a person)

1. **All 19 articles need a human editorial review** before any `reviewStatus` change. The tests will fail if someone flips a status without also updating this report and the test.
2. **Duplicate featured images** (no new stock photos were invented): `mulching-with-organic-waste` and `green-vs-brown-materials` share photo-1500651230702; `natural-pest-management-kitchen-waste` and `orange-peels-for-plants` share photo-1547514701; `composting-mistakes` and `indoor-composting` share photo-1584473457406; `compost-smells-bad` and `vegetable-scraps-for-compost` share photo-1540420773420. Pick distinct, licensed images.
3. **Image alt texts should be visually confirmed** against the actual Unsplash photos (written to match article context; not pixel-verified).
4. **`sitemap.test.ts` / crawl** unchanged — no slugs were renamed.
5. **LegalPage contact SLA** ("24–48 business hours") left as-is; confirm it matches real support capacity.
6. **DIY projects collection** was out of scope for this phase; deserves the same audit in Phase 2B.

## 6. Verification

- `npm run lint` — pass (tsc --noEmit).
- `npm test` — pass, 60 tests / 7 files (new: `tests/contentQuality.test.ts`, 12 tests covering metadata completeness, unique meta, no auto-approval, no fake bylines, alt text, reference URL format, link integrity/self-reference, FAQ duplicates, banned marketing phrases, 9-mistakes consistency).
- `npm run build` — see commit message.
