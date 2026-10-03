import type { WasteGuideItem } from '../types';

export const wasteGuides: WasteGuideItem[] = [
  {
    id: 'banana-peels',
    slug: 'banana-peels-for-plants',
    title: 'Can You Use Banana Peels for Plants? Benefits, Soil vs Compost, and Safe Methods',
    shortTitle: 'Banana Peels for Plants',
    scientificName: 'Musa acuminata',
    excerpt: 'Banana peels add potassium and other nutrients as they compost, but soaking them in water or burying whole peels rarely does what garden blogs promise. Learn what works and what does not.',
    readingTime: '6 min read',
    category: 'Fruit & Vegetable',
    suitability: 'Suitable with preparation',
    cToNRatio: '35:1 (Balanced / Carbon-leaning as it dries)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh banana peels on wooden cutting board ready for kitchen composting',
    metaTitle: 'Banana Peels for Plants: What Works, What Doesn\u2019t, and How to Compost Them',
    metaDescription: 'Banana peels add potassium and other nutrients as they compost, but peel "tea" and buried whole peels rarely do what garden blogs promise. What to do instead.',
    reviewStatus: 'needs-human-review',
    introduction: [
      'Banana peels show up in almost every list of kitchen scraps you can use in the garden, usually alongside a claim that they are a free, potassium-rich fertilizer. The truth is more ordinary: peels are a decent compost ingredient, a mediocre direct amendment, and a poor liquid feed.',
      'This guide covers the three common methods \u2014 composting, trenching, and peel powder \u2014 with what university extension sources actually say, so you can use your peels without disappointing your tomatoes.'
    ],
    featuredImageCaption: 'Chopped peels compost best; whole peels turn into slimy pockets.',
    quickAnswer: 'Yes, banana peels are useful for the garden \u2014 primarily when composted, or dried and ground into a meal. Raw peels do not feed plants quickly, and burying them whole attracts gnats, fruit flies, and rodents. "Banana peel tea" does leach some potassium into water, but extension sources say there is no controlled data that it works as a fertilizer, and a week-old anaerobic brew can smell and grow mould. Composting is the reliable route.',
    directSoilUsage: {
      allowed: false,
      explanation: 'Do not bury raw, whole banana peels directly against houseplant pots or vegetable roots. As they break down underground they can tie up nitrogen in the surrounding soil for weeks, and the sweet residue attracts fungus gnats, ants, and mice. Dehydrate and grind them, or compost them first.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Moderate (1-3 months)',
      details: 'Banana peels break down steadily in a warm, aerated compost pile. They add potassium, calcium, magnesium, and trace minerals. Chop them into 1-inch pieces so they break down faster and do not form slimy pockets.'
    },
    preparationSteps: [
      'Remove all plastic produce stickers and adhesive labels.',
      'Rinse briefly to wash away synthetic post-harvest fungicides if using conventional bananas.',
      'Chop into 0.5 to 1-inch pieces using kitchen shears or a knife.',
      'For direct soil amendment: Dehydrate in an oven or food dehydrator at 140°F (60°C) until brittle, then blitz in a blender into a fine meal.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Chop and Mix into Compost',
        description: 'Toss chopped peels into your compost bin alongside twice their volume of brown materials (like dry leaves, shredded cardboard, or straw) to prevent slimy pockets.'
      },
      {
        title: 'Step 2: Trench Composting for Heavy Feeders',
        description: 'For outdoor rose bushes or tomatoes, dig a trench 8-10 inches deep, bury chopped peels under at least 6 inches of soil, and wait 4-6 weeks before planting there. Fresh peels tie up nitrogen while they break down (University of California Master Gardeners), so give them a head start rather than planting straight into them.'
      },
      {
        title: 'Step 3: Banana Peel Meal Top Dressing',
        description: 'Sprinkle 1-2 tablespoons of finely ground dried banana peel powder around the drip line of flowering perennials or tomato plants, working gently into the top inch of soil.'
      }
    ],
    benefits: [
      'Roughly 7 to 8 percent potassium by weight (Ask Extension), plus calcium and magnesium released as the peel breaks down.',
      'A low-risk way to return kitchen waste to the soil: as organic matter it feeds compost microbes rather than delivering a concentrated dose of salts.',
      'Improves compost pile moisture retention and feeds beneficial aerobic bacteria.'
    ],
    limitations: [
      'Low in nitrogen, so it cannot serve as a balanced complete fertilizer on its own.',
      'Fresh peels are over 80% water; nutrient density per pound of fresh material is relatively modest.',
      'Nutrients stay locked in organic matter until microbes break the peel down, so there is no quick feeding effect.'
    ],
    mythsBusted: [
      {
        myth: 'Banana peel tea (soaking peels in a jar of water for a week) is an all-natural Miracle-Gro.',
        reality: 'University of California Master Gardeners report that soaking does leach some potassium into the water, but there is no controlled data showing peel tea is an effective fertilizer, and the anaerobic brew can smell and grow mould. Composting the peels is the supported route.'
      },
      {
        myth: 'Burying a whole banana peel under a tomato plant prevents blossom end rot.',
        reality: 'Blossom end rot is caused by calcium transport issues, often due to irregular watering. A whole peel does not release calcium fast enough to help a growing season.'
      }
    ],
    commonMistakes: [
      'Leaving peels on top of houseplant potting soil (leads to fuzzy mold and gnat infestations within 72 hours).',
      'Forgetting to remove plastic PLU code stickers before tossing into compost.',
      'Relying on banana peels as a sole source of fertilizer without providing nitrogen and phosphorus.'
    ],
    safetyPrecautions: [
      'Keep raw peels away from pet dogs; while non-toxic, whole banana peels are fibrous and can cause intestinal blockage.',
      'If you have outdoor rodent issues (rats or raccoons), avoid open trench composting; always use an enclosed tumbler or hot compost pile.'
    ],
    faqs: [
      {
        question: 'Which plants benefit most from banana peel compost?',
        answer: 'Fruiting and flowering plants with high potassium requirements, including tomatoes, peppers, eggplants, roses, hydrangeas, and staghorn ferns.'
      },
      {
        question: 'Can I put banana peels in a worm bin (vermicomposting)?',
        answer: 'Yes! Red wigglers love chopped banana peels. However, add them in moderation as the peels are moist and sugary, which can cause the bin to heat up or attract fruit flies if not buried under bedding.'
      }
    ],
    references: [
      { title: 'Ask Extension: Is it okay to put banana peels in the soil around rose bushes?', url: 'https://ask.extension.org/kb/faq.php?id=793043' },
      { title: 'University of California Agriculture and Natural Resources: Garden Myths Busted', url: 'https://ucanr.edu/site/uc-marin-master-gardeners/garden-myths-busted' },
      { title: 'University of California Agriculture and Natural Resources: Garden Myth Explained \u2014 Banana Peels', url: 'https://ucanr.edu/blog/under-solano-sun/article/garden-myth-explained' }
    ],
    bottomLine: 'Compost banana peels (chopped, mixed with browns) or dry and grind them for a slow-release meal. Skip peel tea and whole-peel burial \u2014 both are unreliable, and buried peels can attract pests while tying up nitrogen. Next: learn how to [make compost at home](/composting/how-to-make-compost-at-home) or see our guide to [vegetable scraps for compost](/waste-to-garden/vegetable-scraps-for-compost).',
    relatedGuideSlugs: ['eggshells-for-plants', 'vegetable-scraps-for-compost', 'coffee-grounds-for-plants']
  },
  {
    id: 'eggshells',
    slug: 'eggshells-for-plants',
    title: `Eggshells for Plants: How to Use Them (and What's a Myth)`,
    shortTitle: 'Eggshells for Plants',
    scientificName: 'Calcium Carbonate (CaCO3)',
    excerpt: `How to use eggshells for plants: prepare crushed eggshells, add them to compost and soil, and learn what research says about tomatoes and slugs.`,
    readingTime: '9 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: 'Mineral (negligible C:N — about 95% calcium carbonate)',
    type: 'Mineral / Neutral',
    featuredImage: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Crushed clean eggshells in a bowl with garden soil',
    metaTitle: `Eggshells for Plants: How to Use Them and What's a Myth`,
    metaDescription: `How to use eggshells for plants: prepare crushed eggshells, add them to compost and soil, and learn what research says about tomatoes and slugs.`,
    publishedAt: '2026-10-03',
    updatedAt: '2026-10-03',
    reviewStatus: 'needs-human-review',
    introduction: [
      `Every week most households throw away a small pile of eggshells. They are made mostly of calcium, so it is no surprise that gardeners want to put them to work. The catch is that a lot of popular eggshell advice, especially for tomatoes and slugs, does not hold up when it is tested.`,
      `This guide shows how to use eggshells for plants in ways that genuinely help, how to prepare them properly, and which popular claims to skip.`,
    ],
    featuredImageCaption: 'Finely ground shell powder is the form that actually breaks down in soil.',
    quickAnswer: `Yes — mainly as a compost ingredient or a slow-release calcium source when ground into a fine powder. They are not a fertilizer: they contain almost no nitrogen, phosphorus or potassium. Dry them, grind them to a fine powder, and add them to compost or soil. They do not stop blossom end rot (watering consistency matters far more) and they do not reliably repel slugs (a controlled trial found no benefit).`,
    directSoilUsage: {
      allowed: true,
      explanation: `Fine powder, in small amounts: sprinkle it into planting holes or mix it into the top layer of soil. A commonly cited rule of thumb is the powder from about four or five shells per plant or pot — treat that as an upper limit, not a target, because no research-backed dose exists for home gardens and too much calcium can interfere with how plants absorb other nutrients. Coarse crushed shells mainly work as a compost texture ingredient, not as a calcium supply; whole or coarsely crushed pieces can last for years in soil. Because eggshells can raise pH, go lightly in containers and with acid-loving plants.`
    },
    compostSuitability: {
      recommended: true,
      speed: 'Slow (3-6+ months)',
      details: `Add crushed or powdered shells to your compost pile or worm bin: they contribute calcium and diverse texture, and worms and microbes break them down when the pieces are small. Fine grinding before adding helps them disappear — whole or coarsely crushed pieces can last for years and often still show up as white bits in finished compost.`
    },
    preparationSteps: [
      `Rinse lightly: rinse out leftover egg white. You do not need to scrub, but rinsing reduces odor and pests when you store shells.`,
      `Dry them: let shells air-dry for several days, or warm them in a low oven (a typical approach is around 250°F / 120°C for 20 to 30 minutes) until they feel brittle. Michigan State University Extension suggests drying or briefly warming shells so they crush more fully.`,
      `Grind them to a fine powder: use a spare blender or coffee grinder and grind until the shells look like flour. University of Illinois Extension highlights this step as the "trick" that makes eggshells effective — do not skip it if you want a real calcium effect.`,
      `Store them: keep powder in a labeled jar so nobody mistakes it for baking supplies.`,
    ],
    howToUseSteps: [
      {
        title: 'In Compost (Best Use)',
        description: `Add crushed or powdered shells to your compost pile or worm bin. They contribute calcium and, once broken down, will not be the white bits you pick out of the finished product. For more on balancing a pile, see our [composting for beginners guide](/composting/composting-for-beginners).`
      },
      {
        title: 'In Garden Soil',
        description: `Sprinkle a small amount of fine powder into planting holes or mix it into the top layer of soil. A commonly cited rule of thumb is the powder from about four or five shells per plant or pot — treat that as an upper limit, not a target. No research-backed dose exists for home gardens, and too much calcium can interfere with how plants absorb other nutrients.`
      },
      {
        title: 'As Crushed Eggshells (Coarse)',
        description: `Coarse crushed shells mainly work as a compost texture ingredient, not as a calcium supply. If you only crush them lightly, expect them to stick around.`
      },
      {
        title: 'For Houseplants and Containers',
        description: `You can stir a small pinch of fine powder into potting mix. Because eggshells can raise pH in pots, avoid using them with acid-loving plants such as azaleas, gardenias or blueberries.`
      },
      {
        title: 'As Seed Starters',
        description: `Half an eggshell filled with seed-starting mix makes a cute mini pot. When transplanting, gently crack the shell so roots can spread, because the shell itself will not decompose quickly. A paper egg carton is an easy tray for holding them, as in our [egg carton seed starter guide](/diy-garden-projects/egg-carton-seed-starter).`
      },
    ],
    benefits: [
      `Calcium over time: finely ground shell powder releases calcium much faster than chunks. Soil tests tell you whether your soil needs more, and many soils already have plenty.`,
      `A gentle liming effect: because they are calcium carbonate, shells can nudge acidic soil toward neutral. University of Illinois Extension notes eggshells have raised pH in greenhouse studies of potted plants, so they are best used cautiously in containers.`,
      `A useful compost ingredient: shells add minerals and diverse texture to compost, and worms and microbes break them down when they are small.`,
      `Less waste: reusing shells keeps them out of the trash.`,
    ],
    limitations: [
      `They break down slowly: whole or coarsely crushed pieces can last for years in soil, and they often still show up as white bits in finished compost.`,
      `Not a balanced fertilizer: shells do not give plants nitrogen, so they will not replace compost, manure or a proper fertilizer.`,
      `Coarse pieces give little benefit: a study from Alabama Cooperative Extension, reported by University of Illinois Extension, found coarse pieces did little while finely ground shells performed like lime.`,
      `Eggshell "tea" is weak evidence: calcium carbonate dissolves poorly in plain water, so expect little from boiled eggshell water.`,
      `They can raise soil pH: University of Illinois Extension notes eggshells raised pH in greenhouse studies of potted plants, so use them cautiously in containers and avoid over-applying around acid-loving plants.`,
    ],
    mythsBusted: [
      {
        myth: `Eggshells prevent blossom end rot on tomatoes.`,
        reality: `Myth. Extensions in Minnesota, North Carolina, Mississippi and Illinois agree the usual trigger is uneven watering that disrupts calcium transport in the plant, and whole or crushed shells break down far too slowly to help in the current season.`
      },
      {
        myth: `Eggshells repel slugs and snails.`,
        reality: `Not supported. The Royal Horticultural Society tested crushed eggshells in a six-week lettuce trial and found no difference in slug damage compared with unprotected plants.`
      },
      {
        myth: `Any crushed eggshell works as a calcium source.`,
        reality: `Overstated. Coarse pieces gave little benefit in an Alabama study, while fine powder worked much better — grinding to a flour-like powder is the step that makes the difference.`
      },
      {
        myth: `Boiled eggshell "tea" is a great calcium fertilizer.`,
        reality: `Weak evidence. Calcium carbonate dissolves poorly in plain water, so expect little.`
      },
      {
        myth: `Eggshells are free fertilizer.`,
        reality: `Overstated. They supply calcium, not the main nutrients plants need — they contain almost no nitrogen, phosphorus or potassium.`
      },
    ],
    commonMistakes: [
      `Burying whole eggshells and expecting a fast calcium boost.`,
      `Relying on eggshells to fix or prevent blossom end rot.`,
      `Using shells as a slug barrier without a backup plan.`,
      `Over-applying around acid-loving plants.`,
      `Skipping the soil test and guessing that your soil needs calcium.`,
      `Leaving wet shells in a sealed container where they smell.`,
    ],
    safetyPrecautions: [
      `Salmonella note: raw eggshells can carry bacteria on the surface. Michigan State University Extension says hot composting at about 140 to 160°F kills salmonella and that shells make up a tiny fraction of any pile. Wash your hands after handling raw shells and wash edible plants before eating them.`,
      `Eggshells can raise pH: go lightly in pots and avoid over-applying around acid-loving plants such as azaleas, gardenias or blueberries.`,
      `Too much calcium can interfere with how plants absorb other nutrients — take a soil test before adding any calcium source.`,
      `Soil conditions vary, so confirm with a soil test or your local extension office before making large changes.`,
    ],
    faqs: [
      {
        question: `Are eggshells good for plants?`,
        answer: `Yes, mainly as a compost ingredient or a slow-release calcium source when ground into a fine powder. They are not a fast fertilizer and do not supply nitrogen, phosphorus or potassium.`
      },
      {
        question: `Do eggshells prevent blossom end rot on tomatoes?`,
        answer: `No. Several university extensions report that blossom end rot is usually caused by uneven watering that disrupts calcium transport in the plant, and whole or crushed shells break down far too slowly to fix it.`
      },
      {
        question: `Should I crush eggshells or grind them to powder?`,
        answer: `Powder works much better. A study from Alabama Cooperative Extension, reported by University of Illinois Extension, found coarse pieces did little while finely ground shells performed like lime.`
      },
      {
        question: `Do I need to wash or bake eggshells first?`,
        answer: `Rinsing and drying them makes them easier to store and grind. Extension sources say salmonella is not a practical concern for compost, and hot composting kills it, but wash your hands after handling raw shells.`
      },
      {
        question: `Do eggshells repel slugs and snails?`,
        answer: `Not reliably. The Royal Horticultural Society tested crushed eggshells in a six-week lettuce trial and found no difference in slug damage compared with unprotected plants.`
      },
      {
        question: `Can I use eggshells on houseplants?`,
        answer: `You can mix a small amount of fine powder into potting mix, but eggshells can raise pH in pots, so go lightly, especially with acid-loving plants.`
      },
      {
        question: `Can I put eggshells and coffee grounds in the same compost?`,
        answer: `Yes. They are both fine in compost. Grounds supply nitrogen and shells supply calcium, but neither fixes the other's pH.`
      },
    ],
    references: [
      { title: `Using Eggshells in the Garden and Compost (University of Illinois Extension)`, url: 'https://extension.illinois.edu/blogs/good-growing/2018-03-28-using-eggshells-garden-and-compost' },
      { title: `Coffee Grounds, Eggshells and Epsom Salts in the Home Garden (University of Minnesota Extension)`, url: 'https://extension.umn.edu/manage-soil-nutrients/coffee-grounds-eggshells-epsom-salts' },
      { title: `Gardening MythBusters: Eggshells for Calcium (NC State Extension)`, url: 'https://chowan.ces.ncsu.edu/news/gardening-mythbusters-eggshells-for-calcium/' },
      { title: `Can Eggshells Prevent Blossom End Rot? (Mississippi State University Extension)`, url: 'https://extension.msstate.edu/node/57058' },
      { title: `Adding eggshells to compost (Michigan State University Extension)`, url: 'https://canr.msu.edu/news/adding_eggshells_to_compost' },
      { title: `How to stop slugs and snails: what works? (Royal Horticultural Society)`, url: 'https://www.rhs.org.uk/science/articles/stop-slugs-and-snails' },
    ],
    additionalSections: [
      {
        title: 'What Are Eggshells Made of?',
        blocks: [
          { type: 'paragraph', text: `Eggshells are mostly **calcium carbonate**, roughly 95 percent by weight. This is the same compound found in agricultural lime, which is why shells can slowly reduce soil acidity and add calcium.` },
          { type: 'paragraph', text: `Two practical points follow from that:` },
          {
            type: 'bullets',
            items: [
              `**They break down slowly.** Whole or coarsely crushed pieces can last for years in soil, and they often still show up as white bits in finished compost.`,
              `**They are not a balanced fertilizer.** Shells do not give plants nitrogen, so they will not replace compost, manure or a proper fertilizer.`,
            ]
          },
        ]
      },
      {
        title: 'Eggshells for Tomato Plants: What to Do Instead',
        blocks: [
          { type: 'paragraph', text: `Gardeners often bury eggshells under tomatoes hoping to stop blossom end rot, the black sunken patch on the bottom of fruit. It is a calcium-related disorder, but extension educators point out the usual trigger is **inconsistent watering**, which disrupts how calcium moves inside the plant, rather than a shortage of calcium in the soil. Eggshells also break down far too slowly to fix a problem in the current season.` },
          { type: 'paragraph', text: `What actually helps:` },
          {
            type: 'bullets',
            items: [
              `Water deeply and consistently, and mulch to keep moisture even.`,
              `Take a soil test before adding any calcium source.`,
              `If the test shows low calcium, use a proven amendment such as lime or gypsum as recommended by your local extension service.`,
              `Keep adding shells to compost, which is a safe and sensible use.`,
            ]
          },
        ]
      },
      {
        title: 'Coffee Grounds and Eggshells for Plants',
        blocks: [
          { type: 'paragraph', text: `People love to pair these two because both are free and common in kitchens. They go well together in a compost pile, where grounds supply nitrogen and shells supply calcium, but there is no special chemistry between them. Used coffee grounds are not reliably acidic, so they will not balance out the alkalinity of shells. Read our full guide to [coffee grounds for plants](/waste-to-garden/coffee-grounds-for-plants) for the details.` },
          { type: 'paragraph', text: `A simple routine many home composters follow:` },
          {
            type: 'numbered',
            items: [
              `Keep a lidded kitchen pail for scraps.`,
              `Add grounds and paper filters freely, and keep dried, ground shells in a separate jar.`,
              `Layer both with dry leaves or shredded cardboard.`,
              `Turn the pile now and then and keep it as moist as a wrung-out sponge.`,
            ]
          },
        ]
      },
    ],
    bottomLine: `Eggshells are worth saving, but treat them as a compost ingredient and a slow calcium source, not a cure-all. Dry them, grind them fine, add them to compost, and rely on steady watering and a soil test for tomatoes. Next: read our guide to [coffee grounds for plants](/waste-to-garden/coffee-grounds-for-plants) or [how to make compost at home](/composting/how-to-make-compost-at-home).`,
    relatedGuideSlugs: ['coffee-grounds-for-plants', 'how-to-make-compost-at-home', 'egg-carton-seed-starter']
  },
  {
    id: 'coffee-grounds',
    slug: 'coffee-grounds-for-plants',
    title: 'Coffee Grounds for Plants: What the Research Actually Says',
    shortTitle: 'Coffee Grounds for Plants',
    scientificName: 'Coffea arabica residue',
    excerpt: `Used coffee grounds for plants: what research says about pH, nitrogen, mulch and compost, plus safe ways to use them and mistakes to avoid.`,
    readingTime: '9 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: '20:1 to 24:1 (Nitrogen-rich "Green")',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Rich dark used coffee grounds in a compost bowl surrounded by fresh green leaves',
    metaTitle: `Coffee Grounds for Plants: What Works and What Doesn't`,
    metaDescription: `Used coffee grounds for plants: what research says about pH, nitrogen, mulch and compost, plus safe ways to use them and mistakes to avoid.`,
    publishedAt: '2026-10-03',
    updatedAt: '2026-10-03',
    reviewStatus: 'needs-human-review',
    introduction: [
      `You finish your morning coffee, look at the wet grounds in the filter, and wonder whether they belong in the garden. They do, but not in the way most social media posts describe.`,
      `Used coffee grounds are a useful **compost ingredient** and, in thin layers, a decent soil conditioner. They are not a miracle fertilizer, they will not reliably acidify your soil, and piling them thickly around plants can cause problems. This guide separates what university research supports from what is repeated online, then shows you exactly how to use coffee grounds for plants without hurting them.`,
    ],
    featuredImageCaption: 'Used grounds do their best work after a trip through the compost bin.',
    quickAnswer: `Yes in moderation, mostly via compost or a thin mulch layer. They are not a fertilizer: used grounds hold roughly 1 to 2 percent nitrogen and release it slowly. They do not make soil acidic in any dependable way — used grounds are close to neutral on average. The best route is composting them or spreading a thin layer under a coarser mulch, and the biggest mistake is dumping a thick layer of fresh grounds on the soil surface.`,
    directSoilUsage: {
      allowed: true,
      explanation: `Only in thin layers. Spread **no more than about half an inch (1 cm)** and cover it with a thicker layer (around 4 inches / 10 cm) of coarser mulch such as wood chips or shredded leaves — the approach suggested in WSU Extension guidance. Mix grounds in rather than leaving a thick layer so they do not mat together, and do not pile grounds against plant stems. Grounds are very fine, so thick applications can pack together and slow the movement of water and air into the soil.`
    },
    compostSuitability: {
      recommended: true,
      speed: 'Fast (2-4 weeks)',
      details: `Treat coffee grounds as a nitrogen-rich green material. Keep grounds to about **10 to 20 percent** of the pile by volume (staying under 25 percent is the safe side) and balance them with dry browns: fallen leaves, shredded cardboard, straw or paper. Paper coffee filters can go in too and count as a brown material. Mix grounds in rather than leaving a thick layer, so they do not mat together. In informal Oregon State trials, a pile with grounds making up about a quarter of the material by volume reached hot composting temperatures.`
    },
    preparationSteps: [
      `Use used (brewed) grounds, not fresh ones — fresh, unbrewed grounds still hold more caffeine and acidic compounds and are not recommended for direct use on plants.`,
      `Break up wet grounds and mix them in rather than leaving them as a thick layer, so they do not mat together.`,
      `Compost paper coffee filters along with the grounds — they count as a brown material.`,
      `If you add a lot of uncomposted grounds to soil, pair them with a nitrogen source such as composted manure or grass clippings (as Oregon State recommends), because soil microbes draw down nitrogen while breaking the grounds down.`,
      `Start small and watch your plants for a couple of weeks. There is no research-backed "per plant" dose for home gardens, and composting the grounds first is the lower-risk route.`,
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Add Them to Your Compost (Best Method)',
        description: `Treat coffee grounds as a nitrogen-rich green material. Keep grounds to about 10 to 20 percent of the pile by volume, balance them with dry browns (fallen leaves, shredded cardboard, straw or paper), and mix them in rather than leaving a thick layer so they do not mat together. Paper filters count as a brown. Our guide to [green vs brown composting materials](/composting/green-vs-brown-materials) shows how to balance a pile.`
      },
      {
        title: 'Step 2: Use a Thin Mulch Layer',
        description: `If you want to use grounds directly on the soil surface, spread no more than about half an inch (1 cm), then cover it with a thicker layer (around 4 inches / 10 cm) of coarser mulch such as wood chips or shredded leaves. This is the approach suggested in WSU Extension guidance. Do not pile grounds against plant stems.`
      },
      {
        title: 'Step 3: Mix a Small Amount into Soil',
        description: `Work a small amount into a garden bed before planting: spread it thinly and mix it well rather than digging in clumps. If you add a lot of uncomposted grounds, pair them with a nitrogen source such as composted manure or grass clippings, as Oregon State recommends. There is no research-backed per-plant dose, so start small, watch your plants for a couple of weeks, and prefer compost over raw grounds.`
      },
      {
        title: 'Step 4: Feed a Worm Bin',
        description: `Worms handle coffee grounds well in moderation. Mix them with bedding and other scraps instead of tipping in large amounts at once.`
      },
      {
        title: 'Step 5: Houseplants — Be Careful',
        description: `Grounds sprinkled on top of potting soil tend to stay wet, grow mold and form a crust. If you want to use them indoors, compost them first and mix a small amount of finished compost into the potting mix.`
      },
    ],
    benefits: [
      `A good compost ingredient: the nitrogen helps compost microbes work. In informal Oregon State trials, a pile with grounds making up about a quarter of the material by volume reached hot composting temperatures.`,
      `Organic matter for the soil: as grounds break down they add organic matter, which improves soil structure and water handling over time.`,
      `Earthworm friendly: earthworms feed on coffee grounds, and worm bins accept them in moderation.`,
      `A free resource: many cafes give away used grounds if you ask, which also keeps them out of landfill.`,
    ],
    limitations: [
      `Not a fertilizer: extension sources put nitrogen content at about 1 to 2 percent, and soil microbes use nitrogen while breaking the grounds down, which can temporarily tie it up if you mix a lot of fresh grounds into soil.`,
      `Does not reliably acidify soil: the pH of decomposing grounds swings widely over time, from mildly acidic to somewhat alkaline, and any change tends to be short-lived and local.`,
      `Thick layers compact: grounds are very fine and, applied thickly, can pack together and slow the movement of water and air into the soil.`,
      `No proven pest control: a Washington State University review found no published evidence that grounds repel or kill garden pests.`,
      `Fast growth, bigger yields and pest control are not on the supported list — research there is thin or mixed, and fresh grounds applied heavily have inhibited growth in several tested plant species.`,
    ],
    mythsBusted: [
      {
        myth: `Coffee grounds acidify soil.`,
        reality: `Mostly myth. Brewing pulls most of the acidic compounds into the coffee, so the leftover grounds are much less acidic than the drink. Oregon State University Extension reports a typical pH close to neutral, around 6.5 to 6.8; a University of Missouri horticulturist notes used grounds can even run slightly alkaline; and Washington State University's review found the pH of decomposing grounds swings widely, with any change tending to be short-lived and local.`
      },
      {
        myth: `Used coffee grounds are a nitrogen fertilizer.`,
        reality: `Overstated. Extension sources put nitrogen at only about 1 to 2 percent, and soil microbes also use nitrogen while they break the grounds down, which can temporarily tie it up if a lot of fresh grounds are mixed into soil.`
      },
      {
        myth: `Coffee grounds repel slugs and cats.`,
        reality: `Unproven. A Washington State University review found no published evidence that grounds repel or kill garden pests, so do not rely on them for pest control. Oregon State researchers did find that a strong caffeine solution (1 to 2 percent) drove slugs away in tests — that is a concentrated liquid, not a sprinkle of used grounds, and not something to improvise around your plants.`
      },
      {
        myth: `Grounds make a good thick mulch by themselves.`,
        reality: `Not advised. Pure grounds compact and can restrict air and water. Spread no more than about half an inch and cover it with a coarser mulch such as wood chips or shredded leaves.`
      },
      {
        myth: `Grounds help every plant.`,
        reality: `No. Fresh grounds applied heavily have inhibited growth in several tested plant species, and heavy applications have been linked to reduced germination and early growth in seed beds.`
      },
    ],
    commonMistakes: [
      `Applying a thick layer of grounds to the soil surface.`,
      `Using grounds to "acidify" soil without testing.`,
      `Adding grounds to a seed bed or around young seedlings.`,
      `Letting wet grounds sit in a pile where they turn slimy and smelly.`,
      `Putting raw grounds on top of houseplant soil.`,
      `Treating grounds as a replacement for a balanced fertilizer or a soil test.`,
    ],
    safetyPrecautions: [
      `Seedlings and seed beds: avoid heavy applications — they have been linked to reduced germination and early growth, including caffeine residue effects noted by Oregon State.`,
      `Acid-loving plants (blueberries, rhododendrons, azaleas): do not count on grounds to adjust pH. Get a soil test and use a purpose-made soil acidifier only if the test calls for one.`,
      `Do not rely on grounds for pest control — a Washington State University review found no published evidence that grounds repel or kill garden pests.`,
      `Soil conditions vary, so confirm with a soil test or your local extension office before making large changes.`,
    ],
    faqs: [
      {
        question: `Are used coffee grounds good for plants?`,
        answer: `They can be, mainly as a compost ingredient or a thin mulch layer. Used grounds add organic matter and a little nitrogen, but they are not a complete fertilizer, and thick layers of fresh grounds can slow plant growth.`
      },
      {
        question: `Are coffee grounds acidic?`,
        answer: `Not reliably. Brewing removes most of the acids, and measured pH of used grounds ranges from slightly acidic to slightly alkaline. They will not dependably lower your soil pH.`
      },
      {
        question: `Can I put coffee grounds directly on soil?`,
        answer: `A very thin layer, mixed in or topped with a coarser mulch, is the safer way. Piling grounds thickly on the surface can form a crust that blocks water and air.`
      },
      {
        question: `Do coffee grounds help tomatoes?`,
        answer: `There is no strong evidence that coffee grounds boost tomato yield. Adding them to compost first, then using the finished compost, is the lower-risk route.`
      },
      {
        question: `Do coffee grounds keep slugs or cats away?`,
        answer: `Evidence is weak. University reviews found no published proof that grounds repel garden pests, so do not rely on them for pest control.`
      },
      {
        question: `Can I use coffee grounds on houseplants?`,
        answer: `Use caution. Grounds on top of potted soil often stay wet, mold, and compact. A better option is to compost them first or mix a very small amount into a potting mix.`
      },
      {
        question: `How much coffee grounds can I put in compost?`,
        answer: `Keep them to roughly 10 to 20 percent of the pile by volume and balance them with dry brown materials like leaves or shredded cardboard.`
      },
    ],
    references: [
      { title: `Using Coffee Grounds in Gardens and Landscapes (Washington State University Extension)`, url: 'https://pubs.extension.wsu.edu/?p=11208' },
      { title: `Coffee Grounds boost soil health (Oregon State University Extension)`, url: 'https://extension.oregonstate.edu/es/news/coffee-grounds-boost-soil-health-help-control-slugs' },
      { title: `Is trouble brewing in your garden? (University of Missouri Extension)`, url: 'https://extension.missouri.edu/news/is-trouble-brewing-in-your-garden' },
      { title: `Using Coffee Grounds in the Garden (University of Arizona Cooperative Extension)`, url: 'https://cales.arizona.edu/yavapai/anr/hort/byg/archive/coffeegrounds.html' },
      { title: `Coffee Grounds, Eggshells and Epsom Salts in the Home Garden (University of Minnesota Extension)`, url: 'https://extension.umn.edu/manage-soil-nutrients/coffee-grounds-eggshells-epsom-salts' },
    ],
    additionalSections: [
      {
        title: 'What Is Actually in Used Coffee Grounds?',
        blocks: [
          { type: 'paragraph', text: `Understanding the makeup explains almost every do and don't below.` },
          { type: 'paragraph', text: `**Nitrogen.** Extension sources put the nitrogen content of used grounds at about 1 to 2 percent. That is real, but it is not enough to treat grounds as a fertilizer. Soil microbes also use nitrogen while they break the grounds down, which can temporarily tie it up if you mix a lot of fresh grounds into soil.` },
          { type: 'paragraph', text: `**Carbon to nitrogen ratio.** Estimates range from roughly 20:1 to 24:1. In composting terms that makes grounds a "green" (nitrogen-supplying) material even though they look brown and dark. Treat them like grass clippings, not like dry leaves.` },
          { type: 'paragraph', text: `**pH.** This is the most repeated myth, so it gets its own section below.` },
          { type: 'paragraph', text: `**Texture.** Grounds are very fine. When they are applied thickly they can pack together and slow the movement of water and air into the soil.` },
        ]
      },
      {
        title: 'Used Coffee Grounds for Plants: Are They Acidic?',
        blocks: [
          { type: 'paragraph', text: `Much of the internet says coffee grounds acidify soil, so people spread them around blueberries and azaleas. Extension research does not back that up.` },
          {
            type: 'bullets',
            items: [
              `Brewing pulls most of the acidic compounds into the coffee, so the leftover grounds are much less acidic than the drink. Oregon State University Extension reports a typical pH close to neutral, around 6.5 to 6.8, and a University of Missouri horticulturist notes used grounds can even run slightly alkaline.`,
              `Washington State University's review found the pH of decomposing grounds swings widely over time, from mildly acidic to somewhat alkaline, and any change tends to be short-lived and local.`,
            ]
          },
          { type: 'note', text: `**What this means for you:** do not use coffee grounds to lower pH. If you grow acid-loving plants such as blueberries, rhododendrons or azaleas, get a soil test and use a purpose-made soil acidifier if the test calls for one.` },
          { type: 'note', text: `**Fresh vs used grounds.** Everything on this page is about used (brewed) grounds. Fresh, unbrewed grounds still hold more caffeine and acidic compounds and are not recommended for direct use on plants.` },
        ]
      },
      {
        title: 'How Much Coffee Grounds Should You Use?',
        blocks: [
          {
            type: 'table',
            headers: ['Use', 'General guideline', 'Notes'],
            rows: [
              ['Compost pile', 'About 10 to 20% of volume (up to ~25% in hot piles)', 'Balance with browns'],
              ['Mulch', 'Half an inch or less, covered with coarse mulch', 'Never pure thick grounds'],
              ['Garden soil', 'Small amounts, mixed thoroughly', 'Add a nitrogen source if using a lot'],
              ['Potted plants', 'Avoid raw grounds on top', 'Use finished compost instead'],
            ]
          },
          { type: 'paragraph', text: `These are general guidelines drawn from university extension advice, not exact prescriptions. Your soil, climate and plants matter, so a soil test is always the best guide.` },
        ]
      },
      {
        title: 'Which Plants Like Coffee Grounds?',
        blocks: [
          {
            type: 'bullets',
            items: [
              `**Compost-fed vegetables and flowers:** they benefit indirectly from the finished compost.`,
              `**Tomatoes, peppers, leafy greens:** no strong evidence of a direct benefit. If you use grounds, put them through compost first.`,
              `**Seedlings and seed beds:** avoid. Heavy applications have been linked to reduced germination and early growth, including caffeine residue effects noted by Oregon State.`,
              `**Acid-loving plants (blueberries, azaleas):** do not count on grounds to adjust pH.`,
            ]
          },
        ]
      },
      {
        title: 'Coffee Grounds and Eggshells Together',
        blocks: [
          { type: 'paragraph', text: `Gardeners often combine them because both are free kitchen scraps. They belong in the compost together, but they do not balance each other's pH, since used grounds are not reliably acidic. See our guide to [eggshells for plants](/waste-to-garden/eggshells-for-plants) for how to prepare and use shells properly.` },
        ]
      },
    ],
    bottomLine: `Used coffee grounds earn their place in the garden when you compost them or use them in thin layers. Skip the acidifying and pest-control claims, avoid thick piles, and let the compost bin do the heavy lifting. Next: learn how to [make compost at home](/composting/how-to-make-compost-at-home) or read our guide to [eggshells for plants](/waste-to-garden/eggshells-for-plants).`,
    relatedGuideSlugs: ['eggshells-for-plants', 'green-vs-brown-materials', 'how-to-make-compost-at-home']
  },
  {
    id: 'orange-peels',
    slug: 'orange-peels-for-plants',
    title: 'Orange & Citrus Peels for Plants: Composting, Worms, and Pest Deterrence',
    shortTitle: 'Orange Peels for Plants',
    scientificName: 'Citrus sinensis byproduct',
    excerpt: 'Can you compost citrus peels? Yes \u2014 chopped orange and lemon rind breaks down in a normal outdoor pile. The old claims about ruined compost and dead worms are overstated, but worm bins are a different story.',
    readingTime: '5 min read',
    category: 'Fruit & Vegetable',
    suitability: 'Suitable with preparation',
    cToNRatio: '30:1 (Balanced Green)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bright fresh orange peels and citrus slices on a rustic wooden compost surface',
    metaTitle: 'Orange and Citrus Peels for Compost and Plants: What\u2019s True',
    metaDescription: 'Citrus peels can go in a backyard compost pile \u2014 chop them and mix with browns. What the extension sources say about acidity, worms, and DIY citrus sprays.',
    reviewStatus: 'needs-human-review',
    introduction: [
      'Citrus gets a bad reputation in composting. Someone, somewhere, decided that orange peels take a decade to rot and that one lemon will kill a worm bin, and the claim has been repeated ever since.',
      'The reality, according to extension sources, is simpler: citrus is fine in a normal outdoor pile, less helpful in a confined worm bin, and not the soil-acidifier either supporters or critics imagine. Here is how to handle it.'
    ],
    featuredImageCaption: 'Chop the rind; the waxy cuticle is what slows whole peels down.',
    quickAnswer: 'Yes \u2014 citrus peels can be safely composted in a standard outdoor pile. The old claim that orange peels take years to decompose or ruin compost is overstated: chopped rind breaks down in a hot pile over a few weeks, and green mould appearing on the peels is a normal part of that process. The exception is worm bins \u2014 Oregon State University guidance notes that citrus (like onion scraps) may be toxic to worms in confined systems, so keep it out or add very small amounts.',
    directSoilUsage: {
      allowed: false,
      explanation: 'Do not bury fresh citrus peels against plant roots. Raw peels break down slowly, attract fruit flies while they decompose, and offer no benefit to plants in uncomposted form. Chop them and compost instead.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Moderate (1-3 months)',
      details: 'Chopped rind breaks down in a hot pile within a few weeks; in a cool, unturned pile the waxy cuticle can take several months. Citrus does not meaningfully change the pH of a mixed pile \u2014 Ask Extension describes the effect on soil or compost acidity as negligible \u2014 so there is no need to avoid it for pH reasons.'
    },
    preparationSteps: [
      'Chop thick rinds into small pieces (about 1-inch squares) to break the protective waxy outer cuticle.',
      'Mix thoroughly with dry brown carbon materials (cardboard, dry leaves) to offset moisture.',
      'Add citrus in moderation \u2014 scatter and mix it through the pile rather than dumping peels in one spot.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Standard Compost Pile Addition',
        description: 'Scatter chopped citrus peels into the center of your compost bin where temperatures are highest, covering with dry shredded leaves.'
      },
      {
        title: 'Step 2: Citrus Peel Rinse (Traditional)',
        description: 'Simmer 2 cups of orange peels in 4 cups of water for 20 minutes. Strain, cool, and use the cooled liquid to wipe down outdoor bins and surfaces. Gardeners also use it as a mild scent deterrent for cats \u2014 there is little controlled evidence it controls aphids, so do not rely on it for pest management.'
      },
      {
        title: 'Step 3: Keep Citrus Out of the Worm Bin',
        description: 'If you keep red wigglers, compost citrus outdoors instead. Oregon State University lists citrus and onion scraps as potentially harmful to worms in confined bins, so these belong in your regular pile, not the wormery.'
      }
    ],
    benefits: [
      'Adds organic matter and moisture to the pile, plus small amounts of potassium and other nutrients as it breaks down.',
      'A useful way to keep fruit scraps out of the landfill without special equipment.',
      'Simmered peel water gives bins and pot surfaces a fresh citrus scent without chemical cleaners.'
    ],
    limitations: [
      'The waxy outer cuticle slows breakdown if peels are thrown into compost completely whole.',
      'Citrus and onion scraps may be toxic to earthworms in confined vermiculture bins (Oregon State University), so keep them out or add very small amounts.',
      'Overloading any single ingredient can unbalance a small pile \u2014 mix citrus in with the rest of your scraps and browns.'
    ],
    mythsBusted: [
      {
        myth: 'Citrus peels will kill your entire compost pile and never rot.',
        reality: 'Green mould (commonly Penicillium) appearing on citrus is a normal part of decomposition and breaks the peel down along with everything else in the pile. Citrus does not sterilize a compost heap.'
      },
      {
        myth: 'Citrus acidifies your finished compost so badly it harms plants.',
        reality: 'Ask Extension: the effect of citrus peels on soil or compost acidity would be negligible. A mixed pile buffers itself, and a large dose into a small container may make the surface temporarily acidic \u2014 another reason to scatter and mix rather than dump.'
      }
    ],
    commonMistakes: [
      'Tossing uncut, whole grapefruit halves onto the compost where they cup water and rot slowly.',
      'Dumping 5 pounds of fresh orange rinds into a small worm bin.',
      'Using citrus peels sprayed with heavy industrial petroleum post-harvest waxes without washing.'
    ],
    safetyPrecautions: [
      'In vermicomposting (worm farms), limit citrus to tiny occasional scraps or avoid completely.',
      'Wash commercially imported citrus with warm water if concerned about chemical coatings.'
    ],
    faqs: [
      {
        question: 'Can I compost lemons, limes, and grapefruits too?',
        answer: 'Yes \u2014 they all behave the same way. Chop them up, balance with browns, and add in moderation rather than dumping them in one layer.'
      },
      {
        question: 'Why do my orange peels grow green/blue fuzz in the bin?',
        answer: 'That is a natural composting mould (often Penicillium) digesting the peel. It is a normal, harmless stage of decomposition outdoors.'
      }
    ],
    references: [
      { title: 'Ask Extension: Can citrus peels be added to compost?', url: 'https://ask.extension.org/kb/faq.php?id=859065' },
      { title: 'Oregon State University Extension: Composting Worms (EM 9034)', url: 'https://extension.oregonstate.edu/catalog/em-9034-composting-worms' },
      { title: 'US EPA: Composting At Home', url: 'https://www.epa.gov/recycle/composting-home' }
    ],
    bottomLine: 'Chop citrus and compost it with your other scraps \u2014 it will not ruin the pile or acidify your soil. Keep it out of the worm bin, and treat citrus sprays as a folk rinse rather than pest control. Next: see [vegetable scraps for compost](/waste-to-garden/vegetable-scraps-for-compost) or [composting for beginners](/composting/composting-for-beginners).',
    relatedGuideSlugs: ['banana-peels-for-plants', 'vegetable-scraps-for-compost', 'coffee-grounds-for-plants']
  },
  {
    id: 'vegetable-scraps',
    slug: 'vegetable-scraps-for-compost',
    title: 'Kitchen Vegetable Scraps for Compost: Greens, Moisture, and Odor Balance',
    shortTitle: 'Vegetable Scraps for Compost',
    scientificName: 'Organic Kitchen Residues',
    excerpt: 'Vegetable peels, carrot tops, squash rinds, and lettuce trimmings are a dependable nitrogen-rich green for home composting. Balance them with dry browns to avoid odors and flies.',
    readingTime: '6 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable',
    cToNRatio: '15:1 to 20:1 (Rich Green Nitrogen)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Assorted fresh vegetable scraps and peelings in a countertop composting crock',
    metaTitle: 'Vegetable Scraps for Compost: How to Balance Greens, Moisture, and Odor',
    metaDescription: 'Raw vegetable scraps are a reliable green for home composting. How to bury them under browns, avoid rotten-egg smells and flies, and what to keep out of the pile.',
    reviewStatus: 'needs-human-review',
    introduction: [
      'Most household organic waste is exactly this: peelings, trimmings, stalks, and wilted leaves from everyday cooking. It is a reliable nitrogen-rich "green" for a compost pile, and it breaks down faster than almost anything else you will add.',
      'The trouble starts when wet scraps sit in a pile on their own. This guide covers how to add them so the pile stays sweet-smelling and aerobic instead of slimy and fly-blown.'
    ],
    featuredImageCaption: 'A countertop caddy with a scoop of dry carbon material keeps scraps from turning soggy.',
    quickAnswer: 'Raw kitchen vegetable scraps are a dependable nitrogen-rich "green" for home composting. They provide moisture and nitrogen that fuel microbial action. To prevent slimy odor and fruit fly swarms, always bury vegetable scraps under at least 3 inches of brown carbon materials (cardboard, dry leaves, or sawdust) instead of leaving them exposed.',
    directSoilUsage: {
      allowed: false,
      explanation: 'Tossing fresh scraps directly on top of soil creates a feeding ground for flies, rodents, and raccoons. Dig a trench 10 inches underground (trench composting) or compost first.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Fast (2-4 weeks)',
      details: 'Due to their high moisture content (85-95%) and tender cellular structure, chopped vegetable scraps break down faster than almost any other organic waste.'
    },
    preparationSteps: [
      'Collect in an airtight or charcoal-filtered kitchen countertop container.',
      'Chop fibrous stems (broccoli stalks, corn cobs, squash rinds) into 1-inch chunks.',
      'Ensure meat, oils, dairy, and fatty salad dressings are separated out.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: The Kitchen Caddy Layer',
        description: 'Keep a clean caddy with a sprinkle of dry sawdust or shredded paper at the bottom to absorb liquids before dumping outside.'
      },
      {
        title: 'Step 2: The Core Burial Technique',
        description: 'When dumping into your compost pile, dig a hole into the center of the brown materials, deposit the scraps, and cover completely.'
      },
      {
        title: 'Step 3: Bokashi Pre-Fermentation (Optional)',
        description: 'For small apartments or winter collection, ferment scraps in a sealed bokashi bucket inoculated with bokashi bran for about two weeks, then bury the pickled material to finish in the soil over the following two to four weeks (North Carolina Cooperative Extension). This is fermentation, not composting \u2014 and unlike a regular pile, it accepts small amounts of meat and dairy.'
      }
    ],
    benefits: [
      'Provide nitrogen, potassium, phosphorus, and other nutrients that are released as microbes break them down.',
      'Naturally hydrates dry compost piles without needing a garden hose.',
      'Keeps food out of the waste stream: food is the most common material sent to US landfills (US EPA), and home composting is one way to reduce that.'
    ],
    limitations: [
      'Very high moisture content can cause anaerobic rotten odors if not balanced with dry browns.',
      'Cooked scraps containing grease, oils, or salt must be excluded to prevent vermin.',
      'Seeds from squashes, tomatoes, and melons can survive and sprout if the pile does not reach 135°F (57°C).'
    ],
    mythsBusted: [
      {
        myth: 'You can never compost cooked vegetables.',
        reality: 'Plain steamed vegetables are completely fine. The issue is only oils, butter, cheese, and heavy salt seasonings, which attract rodents.'
      }
    ],
    commonMistakes: [
      'Leaving scraps exposed on the surface of the pile (invites raccoons, rats, and clouds of fruit flies).',
      'Adding wet scraps without adding dry carbon materials (turns the pile into an anaerobic sludge).',
      'Composting diseased garden foliage (like tomato late blight or powdery mildew).'
    ],
    safetyPrecautions: [
      'Always seal compost bins with 1/4-inch hardware cloth if urban rodents are prevalent in your neighborhood.',
      'Do not compost pet waste or human sewage in the same pile as food garden vegetables.'
    ],
    faqs: [
      {
        question: 'Can I compost moldy vegetables?',
        answer: 'Yes \u2014 mold is simply nature\u2019s decomposer fungi starting the breakdown. Moldy produce is fine to compost; bury it under browns as usual.'
      },
      {
        question: 'What do I do if my scrap bin smells like rotten eggs?',
        answer: 'Rotten egg smell means anaerobic bacteria have taken over from excess moisture. Turn the pile immediately and add two big bags of dry leaves or shredded cardboard.'
      }
    ],
    references: [
      { title: 'US EPA: Food Material-Specific Data \u2014 food is the most common material in US landfills', url: 'https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/food-material-specific-data' },
      { title: 'North Carolina Cooperative Extension: Bokashi composting \u2014 a faster, easier way to turn kitchen scraps into garden gold', url: 'https://beaufort.ces.ncsu.edu/news/bokashi-composting-a-faster-easier-way-to-turn-kitchen-scraps-into-garden-gold' },
      { title: 'University of New Hampshire Extension: Composting for the Home Gardener', url: 'https://extension.unh.edu/resource/composting-home-gardener-fact-sheet' }
    ],
    bottomLine: 'Vegetable scraps are easy compost gold \u2014 if you always bury them under dry browns and keep meat, oil, and dairy out of a regular pile. If they smell, the fix is always more carbon and more air. Next: learn the [green vs brown balance](/composting/green-vs-brown-materials) or read [how to make compost at home](/composting/how-to-make-compost-at-home).',
    relatedGuideSlugs: ['banana-peels-for-plants', 'potato-peels-for-compost', 'onion-peels-for-plants']
  },
  {
    id: 'tea-leaves',
    slug: 'tea-leaves-for-plants',
    title: 'Used Tea Leaves for Plants: Teabag Plastics Warning, Tannins, and Soil Benefits',
    shortTitle: 'Used Tea Leaves for Plants',
    scientificName: 'Camellia sinensis infusion residue',
    excerpt: 'Used loose tea leaves are mild, useful compost material \u2014 the bigger question is the bag. What is known about tea bag plastics, tannins, and using spent tea on soil.',
    readingTime: '5 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: '15:1 to 20:1 (Green Nitrogen)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Loose damp organic tea leaves alongside a steaming earthen teapot',
    metaTitle: 'Used Tea Leaves for Plants: Tea Bags, Tannins, and Compost',
    metaDescription: 'Loose used tea leaves are mild compost material. The bigger issue is the bag \u2014 many are sealed or made with plastic. What is safe for your soil.',
    reviewStatus: 'needs-human-review',
    introduction: [
      'Tea is one of the easiest kitchen leftovers to compost: the leaves are finely shredded, moisture-rich, and break down within weeks. What trips people up is the bag, not the tea.',
      'This guide covers where spent leaves actually help, why you should stop assuming they acidify soil, and how to tell whether your tea bags belong in the pile at all.'
    ],
    featuredImageCaption: 'Loose leaves compost directly; bags are the question.',
    quickAnswer: 'Loose used tea leaves are safe and mild for both compost piles and soil conditioning. Be careful with the bags: many paper tea bags are heat-sealed with polypropylene, and pyramid bags are often nylon or PET \u2014 cut them open and compost only the leaves unless the packaging says home-compostable. A widely reported 2019 study found that plastic tea bags release large numbers of microscopic particles into a brew; Germany\u2019s Federal Institute for Risk Assessment later argued those figures were overstated, but the practical advice is unchanged: do not compost the bag unless it is certified.',
    directSoilUsage: {
      allowed: true,
      explanation: 'Used loose tea leaves can be scratched lightly into the top layer of soil or added to compost. Do not count on tea to acidify soil \u2014 there is no extension evidence that spent leaves change soil pH, so get a soil test and use a purpose-made amendment for acid-loving plants.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Fast (2-4 weeks)',
      details: 'Due to their small particle size, loose tea leaves break down quickly and generate gentle warmth in compost piles.'
    },
    preparationSteps: [
      'Cut open and discard the outer tea bag unless certified home compostable paper with no plastic heat-seal.',
      'Remove strings and metal staples.',
      'Spread out loose tea to cool and dry slightly before adding to soil or compost.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Compost Heap Layering (Best Method)',
        description: 'Sprinkle loose tea throughout the compost pile as a nitrogen-rich green. The fine particles mix in easily and break down within a few weeks, alongside your other kitchen scraps and browns.'
      },
      {
        title: 'Step 2: Light Top-Dressing',
        description: 'Scratch a thin scattering of cooled, loose leaves into the top layer of beds or containers. It is a mild, tidy way to use tea without bags \u2014 but treat it as organic matter, not as a pH or nutrient treatment.'
      },
      {
        title: 'Step 3: Worm Bin Addition',
        description: 'Loose leaves (bag cut open, string and staple removed) are fine for worm bins in moderation. Oregon State University notes worms handle tea bags and grounds well when they are not piled on in bulk.'
      }
    ],
    benefits: [
      'A mild green material: spent leaves supply some nitrogen, phosphorus, and potassium as they decompose.',
      'Small particle size means they break down quickly and mix evenly through a pile.',
      'High surface area makes them an easy food source for worms and compost microbes.'
    ],
    limitations: [
      'Plastic-containing tea bags and seals do not break down and leave plastic fragments in soil if composted.',
      'Wet tea leaves clumped on houseplant soil can mat together and grow surface mould.',
      'Like any wet green, large quantities dumped in one spot can add moisture and nitrogen faster than a small pile can handle.'
    ],
    mythsBusted: [
      {
        myth: 'All "silky" tea bags are made of silk or cornstarch and melt into compost.',
        reality: 'Many silky pyramid bags are woven nylon or PET plastic, and many paper bags are sealed with polypropylene. Unless the packaging says home-compostable, cut the bag open and use the leaves only.'
      }
    ],
    commonMistakes: [
      'Throwing whole teabags with metal staples and nylon strings into compost.',
      'Letting moist tea bags pile up in a saucer until they turn into a slimy, smelly clump.'
    ],
    safetyPrecautions: [
      'Check tea packaging for home-compostable certification; when in doubt, cut the bag open and compost only the leaves.',
      'Do not dump large volumes of strongly brewed tea where pets can reach it \u2014 caffeine is toxic to dogs and cats.'
    ],
    faqs: [
      {
        question: 'Can I use herbal teas (peppermint, chamomile, rooibos)?',
        answer: 'Yes \u2014 spent herbal leaves are plant matter like any other green. Compost them the same way, cutting the bag open if it is not certified home-compostable.'
      },
      {
        question: 'Are matcha residues good for soil?',
        answer: 'Matcha is ground whole tea leaf, so the spent powder behaves like any other mild green compost material. It has no special ability to deliver nitrogen to plants \u2014 compost it and use the finished compost.'
      }
    ],
    references: [
      { title: 'Plastic Teabags Release Microscopic and Nanoscale Particles into Tea (Environmental Science & Technology, 2019)', url: 'https://pubs.acs.org/doi/10.1021/acs.est.9b02540' },
      { title: 'Comment: Critical Assessment of the Study on Microplastic Release from Plastic Tea Bags (Environmental Science & Technology)', url: 'https://pubs.acs.org/doi/10.1021/acs.est.0c03182' },
      { title: 'Oregon State University Extension: Composting Worms (EM 9034)', url: 'https://extension.oregonstate.edu/catalog/em-9034-composting-worms' }
    ],
    bottomLine: 'Compost loose tea leaves freely; cut open the bag unless it is certified home-compostable. Do not rely on tea to acidify soil or fertilize plants. Next: see [green vs brown materials](/composting/green-vs-brown-materials) or our guide to [coffee grounds for plants](/waste-to-garden/coffee-grounds-for-plants).',
    relatedGuideSlugs: ['coffee-grounds-for-plants', 'vegetable-scraps-for-compost', 'banana-peels-for-plants']
  },
  {
    id: 'onion-peels',
    slug: 'onion-peels-for-plants',
    title: 'Onion & Garlic Peels for Plants: Sulfur Benefits, Soil Application, and Composting',
    shortTitle: 'Onion Peels for Plants',
    scientificName: 'Allium cepa skin',
    excerpt: 'Onion and garlic peels are compostable kitchen waste. Learn how to compost them, why to keep them out of worm bins, and which folk-remedy claims to skip.',
    readingTime: '5 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: 'Not firmly established \u2014 dry skins lean carbon, fleshy ends lean nitrogen',
    type: 'Brown (Carbon)',
    featuredImage: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Golden dry onion skins and shallot trimmings in a gardening basket',
    metaTitle: 'Onion and Garlic Peels for Compost: What Works, What Doesn\u2019t',
    metaDescription: 'Onion and garlic peels are compostable kitchen waste. How to compost them, why to keep them out of worm bins, and which folk-remedy claims to skip.',
    reviewStatus: 'needs-human-review',
    introduction: [
      'Onion skins are light, dry, and plentiful \u2014 and they attract a small industry of claims: sulfur for this, quercetin for that, a spray that repels aphids, a mulch that stops burrowing pests. Almost none of that has been tested in a garden.',
      'What extension sources do support is straightforward: allium scraps are fine in an outdoor pile, potentially harmful in a worm bin, and best treated as ordinary compostable material rather than a plant medicine.'
    ],
    featuredImageCaption: 'Dry skins are compostable carbon-rich material; chop the fleshy ends.',
    quickAnswer: 'Dry onion skins and garlic peels are compostable and can go in small amounts into a garden pile. They are not a proven pest repellent or disease shield \u2014 the quercetin and sulfur claims come from lab studies of allium extracts, not garden trials. The papery skins act like carbon "browns" while the fleshy root ends are nitrogen "greens", and keep alliums out of indoor worm bins, where they may harm worms (Oregon State University).',
    directSoilUsage: {
      allowed: true,
      explanation: 'Dry papery skins can be scattered lightly as part of a surface mulch. Avoid piling fresh, wet onion scraps on beds \u2014 they rot, smell, and attract flies. There is no extension evidence that onion skins repel pests or disease, so treat them as organic matter, not protection.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Moderate (1-3 months)',
      details: 'Onion skins break down smoothly in outdoor piles. Keep allium quantities low in indoor worm bins \u2014 Oregon State University guidance lists onions as potentially harmful to worms in confined systems.'
    },
    preparationSteps: [
      'Separate dry papery outer skins from moist inner bulbs.',
      'Chop thick root bottoms and fleshy scraps small so they do not mat together.',
      'Crush dry skins before adding so they do not blow away and sit on top of the pile.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Traditional Onion-Skin Soak (Optional)',
        description: 'Steep a handful of golden onion skins in 1 liter of water for 24 hours and strain. Gardeners have long used this as a mild foliar rinse, but there is no controlled evidence it controls aphids or powdery mildew \u2014 do not rely on it for pest or disease management.'
      },
      {
        title: 'Step 2: Compost Heap Layering',
        description: 'Toss papery skins into the bin alongside other carbon browns like shredded cardboard to balance moisture.'
      },
      {
        title: 'Step 3: Surface Mulch Addition',
        description: 'Crush dry skins and mix them into surface mulch, where they break down quietly and add organic matter. Any pest-deterrent effect should be considered unproven.'
      }
    ],
    benefits: [
      'Breaks down to release small amounts of sulfur and other nutrients into the pile.',
      'Dry skins are a light carbon-leaning material that helps soak up moisture from wetter scraps.',
      'Free of weed seeds and pathogens, creating clean compost matter.'
    ],
    limitations: [
      'Strong sulfur odor if rotting anaerobically in un-aerated indoor bins.',
      'Allium scraps may harm composting earthworms (red wigglers) in confined vermicompost bins (Oregon State University).',
      'Paper skins are lightweight and blow away in high winds if not covered.'
    ],
    mythsBusted: [
      {
        myth: 'Putting onion skins in compost will make all your future vegetables taste like onions.',
        reality: 'Once composting is finished, the smell and flavor compounds are long gone \u2014 finished compost does not make your future carrots or strawberries taste like onions.'
      },
      {
        myth: 'Onion skin tea or mulch protects plants against fungal attack.',
        reality: 'Not supported. The quercetin and sulfur claims are extrapolated from laboratory studies of allium compounds, not from garden trials. Extensions recommend proven cultural practices \u2014 airflow, watering at the base, and crop rotation \u2014 instead.'
      }
    ],
    commonMistakes: [
      'Adding 5 lbs of rotting whole onions at once to an enclosed small tumbler (produces strong odors).',
      'Overloading an indoor worm bin with fresh garlic and onion trimmings.'
    ],
    safetyPrecautions: [
      'Onions and garlic are toxic to dogs and cats; ensure compost piles containing whole bulbs are securely fenced from family pets.'
    ],
    faqs: [
      {
        question: 'Are red onion skins different from yellow onion skins?',
        answer: 'They behave the same way in compost. Red skins get their color from anthocyanin pigments; use whichever you have.'
      }
    ],
    references: [
      { title: 'Ask Extension: Are citrus peels and onion scraps okay for composting and worms?', url: 'https://ask.extension.org/kb/faq.php?id=737589' },
      { title: 'Oregon State University Extension: Composting Worms (EM 9034)', url: 'https://extension.oregonstate.edu/catalog/em-9034-composting-worms' },
      { title: 'US EPA: Composting At Home', url: 'https://www.epa.gov/recycle/composting-home' }
    ],
    bottomLine: 'Compost onion and garlic scraps with the rest of your kitchen waste \u2014 chopped, mixed with browns, and kept out of the worm bin. Treat skin teas and mulches as folklore, not plant medicine. Next: see [vegetable scraps for compost](/waste-to-garden/vegetable-scraps-for-compost) or [green vs brown materials](/composting/green-vs-brown-materials).',
    relatedGuideSlugs: ['potato-peels-for-compost', 'vegetable-scraps-for-compost', 'banana-peels-for-plants']
  },
  {
    id: 'potato-peels',
    slug: 'potato-peels-for-compost',
    title: 'Potato Peels for Compost: Blight Prevention, Solanine, and Starch Breakdown',
    shortTitle: 'Potato Peels for Compost',
    scientificName: 'Solanum tuberosum skin',
    excerpt: 'Potato peelings are rich in potassium and starches, but can they sprout in your compost or transmit late blight? Here is how to compost them safely.',
    readingTime: '6 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: '25:1 (Balanced Green)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh potato peelings and raw vegetable scraps in an organic compost container',
    metaTitle: 'Potato Peels for Compost: Sprouting, Blight, and Solanine Explained',
    metaDescription: 'Healthy potato peelings compost fine. What to do about eyes, late blight, and solanine \u2014 plus what extension sources say about diseased material.',
    reviewStatus: 'needs-human-review',
    introduction: [
      'Potato peelings are one of the most common scraps in a kitchen caddy, and they compost quickly. The worries people have \u2014 sprouting eyes, green-skin poison, blight \u2014 are real in narrow cases, not the general rule.',
      'Here is how to handle each one, and where extension sources disagree about diseased material.'
    ],
    featuredImageCaption: 'Chopped healthy peelings compost quickly; chop up any eyes.',
    quickAnswer: 'Yes, potato peels make good compost material, supplying potassium, phosphorus, and starches that feed compost microbes. Two precautions matter: never compost potato peels showing dark blight lesions without deciding how to handle them (see below), and chop any eyes on thick peelings so they do not sprout into unwanted potato vines inside your bin.',
    directSoilUsage: {
      allowed: false,
      explanation: 'Raw potato peels should not be laid on top of soil; they will root, sprout volunteer vines, or turn slimy while attracting beetles and slugs.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Fast (2-4 weeks)',
      details: 'Due to their high starch and sugar content, potato peels break down rapidly in warm compost, providing a quick burst of microbial activity.'
    },
    preparationSteps: [
      'Inspect for disease: discard peels with dark, corky blight lesions into the municipal trash (see the blight note below).',
      'Slice or dice thick peels to destroy any remaining viable sprout eyes.',
      'Mix immediately with dry brown materials to offset the wet starch moisture.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Hot Compost Core Deposit',
        description: 'Bury potato peelings into the deep core of your compost pile where temperatures exceed 130\u00B0F (55\u00B0C) to kill sprout eyes and speed digestion. Pile temperatures above about 140\u00B0F also destroy most weed seeds and plant pathogens (NC State Extension).'
      },
      {
        title: 'Step 2: Vermicomposting (Optional)',
        description: 'Some worm-keeping guides cook peels briefly first to soften the starch and kill viable eye buds; Oregon State University notes worms often avoid raw potato peels anyway. Add only small amounts, or compost potato peels outdoors instead.'
      },
      {
        title: 'Step 3: Starch-Water Garden Watering',
        description: 'Cool the water from boiling unsalted potatoes and use it to water plants. It is a mild, free way to use the starch and dissolved nutrients \u2014 treat it as ordinary watering, not a fertilizer treatment.'
      }
    ],
    benefits: [
      'High in potassium and starch carbohydrates that rapidly fuel heat-generating compost bacteria.',
      'Breaks down into fine, soft humus that improves moisture-holding capacity.',
      'Diverts starchy, high-volume kitchen waste from the waste stream.'
    ],
    limitations: [
      'Thick peels with "eyes" can sprout into vigorous unwanted potato vines in cold compost bins.',
      'Late blight (Phytophthora infestans) can overwinter in infected tubers that sit in a pile that never heats up or freezes; University of Massachusetts guidance says an actively heating pile handles it, while other extensions advise bagging diseased material. When in doubt, trash it.',
      'Contains solanine (a natural glycoalkaloid) in green parts; it breaks down as organic matter composts, but do not feed large amounts of raw green peelings to livestock.'
    ],
    mythsBusted: [
      {
        myth: 'The green skin on potatoes contains poison that will kill all your compost microbes.',
        reality: 'Solanine is toxic to humans and animals if consumed in large amounts, but it is an organic compound that breaks down as composting proceeds. Healthy peelings are not a practical concern for a home pile.'
      }
    ],
    commonMistakes: [
      'Throwing whole sprouted potatoes into a cold compost bin (you will grow an unintentional potato patch).',
      'Composting diseased commercial potatoes that were struck with black scurf or fungal blight.'
    ],
    safetyPrecautions: [
      'Keep raw green potato peels away from dogs, chickens, and pets due to solanine alkaloid sensitivity.',
      'Wash potatoes before peeling \u2014 commercial tubers may be treated with sprout-inhibiting residues, and washing removes what is on the surface.'
    ],
    faqs: [
      {
        question: 'What if my compost pile starts growing potato plants?',
        answer: 'Simply pull them up and lay them flat in the pile as green compost material, or dig a trench and transplant them to your garden!'
      },
      {
        question: 'Are sweet potato skins the same as regular potato skins?',
        answer: 'Sweet potatoes belong to the Morning Glory family (Convolvulaceae), not the Nightshade family. They do not carry potato blight and decompose even faster.'
      }
    ],
    references: [
      { title: 'University of Massachusetts Extension: Late Blight Management (including composting of infected material)', url: 'https://www.umass.edu/agriculture-food-environment/sites/ag.umass.edu/files/fact-sheets/pdf/late_blight_management.pdf' },
      { title: 'University of Maine Cooperative Extension: Gardening After Late Blight', url: 'https://www.maine.gov/DACF/php/gotpests/diseases/factsheets/late-blight-me.pdf' },
      { title: 'Iowa State University Extension: Can I put disease-infested plant material in my compost pile?', url: 'https://yardandgarden.extension.iastate.edu/faq/can-i-put-disease-infested-plant-material-my-compost-pile' }
    ],
    bottomLine: 'Healthy potato peelings are easy, fast compost \u2014 chop the eyes, mix with browns, and keep the pile warm. Bag anything that looks blighted. Next: read [vegetable scraps for compost](/waste-to-garden/vegetable-scraps-for-compost) or [how long does compost take](/composting/how-long-does-compost-take).',
    relatedGuideSlugs: ['onion-peels-for-plants', 'vegetable-scraps-for-compost', 'banana-peels-for-plants']
  }
];
