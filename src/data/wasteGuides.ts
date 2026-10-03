import type { WasteGuideItem } from '../types';

export const wasteGuides: WasteGuideItem[] = [
  {
    id: 'banana-peels',
    slug: 'banana-peels-for-plants',
    title: 'Can You Use Banana Peels for Plants? Benefits, Soil vs Compost, and Safe Methods',
    shortTitle: 'Banana Peels for Plants',
    scientificName: 'Musa acuminata',
    excerpt: 'Banana peels are rich in potassium, but simply soaking them in water or burying whole peels can attract pests and mold. Learn the science-backed way to compost and apply them safely.',
    readingTime: '6 min read',
    category: 'Fruit & Vegetable',
    suitability: 'Suitable with preparation',
    cToNRatio: '35:1 (Balanced / Carbon-leaning as it dries)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh banana peels on wooden cutting board ready for kitchen composting',
    quickAnswer: 'Yes, banana peels are excellent for your garden—primarily when composted or thoroughly dried and powdered. Raw peels do not provide immediate plant nutrients and burying them whole can attract gnats, fruit flies, and rodents. "Banana peel tea" (soaking peels in water) has virtually zero bioavailable potassium and risks breeding harmful bacteria.',
    directSoilUsage: {
      allowed: false,
      explanation: 'Burying raw, whole banana peels directly into houseplant pots or near vegetable roots is not recommended. As they ferment anaerobically underground, they rob nitrogen from the surrounding soil to break down, and the sweet sugars attract fungus gnats, ants, and mice. Dehydrate and grind them, or compost them first.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Moderate (1-3 months)',
      details: 'Banana peels break down rapidly in a warm, aerated compost pile. They add valuable potassium, calcium, magnesium, and trace minerals. Chop them into 1-inch pieces to speed up decomposition 3x.'
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
        description: 'For outdoor rose bushes or tomatoes, dig a trench 8-10 inches deep, bury chopped peels under at least 6 inches of soil, and allow 4-6 weeks before planting to prevent root burn.'
      },
      {
        title: 'Step 3: Banana Peel Meal Top Dressing',
        description: 'Sprinkle 1-2 tablespoons of finely ground dried banana peel powder around the drip line of flowering perennials or tomato plants, working gently into the top inch of soil.'
      }
    ],
    benefits: [
      'High in potassium (~42% of ash weight), which aids flowering, fruiting, and cellular water regulation.',
      'Supplies secondary macronutrients including calcium, magnesium, and sulfur.',
      'Improves compost pile moisture retention and feeds beneficial aerobic bacteria.'
    ],
    limitations: [
      'Low in nitrogen (only ~1.2%), so it cannot serve as a balanced complete fertilizer alone.',
      'Fresh peels are over 80% water; nutrient density per pound of fresh material is relatively modest.',
      'Slow to mineralize into plant-absorbable ionic potassium without microbial breakdown.'
    ],
    mythsBusted: [
      {
        myth: 'Banana peel tea (soaking peels in a jar of water for a week) is an all-natural Miracle-Gro.',
        reality: 'University laboratory tests show that water soaking extracts virtually negligible mineral potassium, while creating an anaerobic broth of fermenting sugars that breeds mold, fungus gnats, and pathogens.'
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
      'University of Minnesota Extension: "Using Organic Fertilizers and Kitchen Scraps"',
      'Oregon State University Extension Service: "The Truth About Banana Peel Tea in Home Gardens"',
      'Journal of Plant Nutrition: "Mineral Composition and Nutrient Cycling of Agricultural Fruit Byproducts"'
    ],
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
    excerpt: 'Can you compost citrus peels? Debunking the long-standing myth that orange and lemon peels ruin compost piles and kill all beneficial earthworms.',
    readingTime: '5 min read',
    category: 'Fruit & Vegetable',
    suitability: 'Suitable with preparation',
    cToNRatio: '30:1 (Balanced Green)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bright fresh orange peels and citrus slices on a rustic wooden compost surface',
    quickAnswer: 'Yes, citrus peels CAN be safely composted in standard home compost piles! The old myth that orange peels take 10 years to decompose or ruin compost piles is completely false for standard piles. The citrus oil (d-limonene) naturally evaporates and breaks down under heat and microbial activity. However, they should be limited in worm bins (vermicomposting), as concentrated d-limonene irritates earthworm skin.',
    directSoilUsage: {
      allowed: false,
      explanation: 'Do not bury fresh citrus peels directly against garden plant roots. The concentrated citrus oils and acidic nature can shock tender roots until broken down.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Moderate (1-3 months)',
      details: 'Citrus peels compost thoroughly when chopped into small segments. In hot compost piles, thermophilic microbes break down citrus rind within 4 to 8 weeks without disrupting pH.'
    },
    preparationSteps: [
      'Chop thick rinds into small pieces (about 1-inch squares) to break the protective waxy outer cuticle.',
      'Mix thoroughly with dry brown carbon materials (cardboard, dry leaves) to offset moisture.',
      'Keep citrus to no more than 10-15% of your total compost mass.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Standard Compost Pile Addition',
        description: 'Scatter chopped citrus peels into the center of your compost bin where temperatures are highest, covering with dry shredded leaves.'
      },
      {
        title: 'Step 2: DIY Natural Cat & Insect Deterrent Spray',
        description: 'Simmer 2 cups of orange peels in 4 cups of water for 20 minutes. Strain, cool, and spray around garden borders to deter stray cats and soft-bodied aphids.'
      },
      {
        title: 'Step 3: Indoor Garbage Disposal Freshner',
        description: 'Before composting, run a few slivers through your kitchen sink disposal with ice to clean blades and deodorize.'
      }
    ],
    benefits: [
      'Adds trace minerals including potassium, phosphorus, calcium, and vitamin C.',
      'Natural d-limonene acts as a mild deterrent for aphids, gnats, and nuisance pests.',
      'Deodorizes compost piles, masking foul food odors with a clean citrus scent.'
    ],
    limitations: [
      'The waxy outer cuticle slows breakdown if peels are thrown into compost completely whole.',
      'Toxic to earthworms in small confined vermiculture bins if added in large quantities.',
      'Can temporarily lower micro-pH in small static heaps if overloaded.'
    ],
    mythsBusted: [
      {
        myth: 'Citrus peels will kill your entire compost pile and never rot.',
        reality: 'Penicillium digitatum (green mold) thrives on citrus and breaks down the peel rapidly in normal compost temperatures, leaving rich dark organic matter.'
      },
      {
        myth: 'Citrus acidifies your finished compost so badly it harms plants.',
        reality: 'Finished compost has a natural buffering capacity; the final pH remains near 6.5–7.2 regardless of moderate citrus additions.'
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
        answer: 'Yes! All citrus fruits follow the exact same rules: chop them up, balance with browns, and keep them under 15% of your total pile.'
      },
      {
        question: 'Why do my orange peels grow green/blue fuzz in the bin?',
        answer: 'That is Penicillium digitatum, a beneficial natural composting fungus that actively digests the peel. It is completely safe and normal in compost.'
      }
    ],
    references: [
      'Royal Horticultural Society: "Composting Citrus and Other Acidic Kitchen Scraps"',
      'University of Florida IFAS: "Citrus Byproducts as Organic Soil Amendments"',
      'Organic Gardening Research Institute: "Vermicomposting Limitations and Citrus"'
    ],
    relatedGuideSlugs: ['banana-peels-for-plants', 'vegetable-scraps-for-compost', 'coffee-grounds-for-plants']
  },
  {
    id: 'vegetable-scraps',
    slug: 'vegetable-scraps-for-compost',
    title: 'Kitchen Vegetable Scraps: The Ultimate Green Compost Booster',
    shortTitle: 'Vegetable Scraps for Compost',
    scientificName: 'Organic Kitchen Residues',
    excerpt: 'Vegetable peels, carrot tops, squash rinds, and lettuce trimmings are the backbone of nutrient-rich black gold. Master the moisture and odor balance.',
    readingTime: '6 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable',
    cToNRatio: '15:1 to 20:1 (Rich Green Nitrogen)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Assorted fresh vegetable scraps and peelings in a countertop composting crock',
    quickAnswer: 'Raw kitchen vegetable scraps are the single best nitrogen-rich "green" ingredient for home composting. They provide essential moisture, nitrogen, and vitamins that fuel microbial action. To prevent slimy odor and fruit fly swarms, always bury vegetable scraps under at least 3 inches of brown carbon materials (cardboard, dry leaves, or sawdust).',
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
        description: 'Ferment scraps with EM-1 Bokashi bran for 2 weeks in an airtight bucket to allow cold composting and safe meat/dairy breakdown.'
      }
    ],
    benefits: [
      'Packed with micro and macronutrients: nitrogen, potassium, phosphorus, and zinc.',
      'Naturally hydrates dry compost piles without needing a garden hose.',
      'Diverts up to 400 lbs of household waste per family per year from methane-producing landfills.'
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
        answer: 'Yes! Mold is simply nature’s decomposer fungi beginning the breakdown process. Moldy produce is 100% compost-safe.'
      },
      {
        question: 'What do I do if my scrap bin smells like rotten eggs?',
        answer: 'Rotten egg smell means anaerobic bacteria have taken over from excess moisture. Turn the pile immediately and add two big bags of dry leaves or shredded cardboard.'
      }
    ],
    references: [
      'US EPA: "Reducing the Impact of Wasted Food by Feeding the Soil"',
      'University of Wisconsin-Madison Extension: "Backyard Composting of Kitchen Scraps"',
      'Journal of Cleaner Production: "Home Composting Efficiency and Nutrient Retention"'
    ],
    relatedGuideSlugs: ['banana-peels-for-plants', 'potato-peels-for-compost', 'onion-peels-for-plants']
  },
  {
    id: 'tea-leaves',
    slug: 'tea-leaves-for-plants',
    title: 'Used Tea Leaves for Plants: Teabag Plastics Warning, Tannins, and Soil Benefits',
    shortTitle: 'Used Tea Leaves for Plants',
    scientificName: 'Camellia sinensis infusion residue',
    excerpt: 'Tea leaves are a delicate, nutrient-dense organic fertilizer—but beware of hidden polypropylene microplastics in commercial tea bags.',
    readingTime: '5 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: '15:1 to 20:1 (Green Nitrogen)',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Loose damp organic tea leaves alongside a steaming earthen teapot',
    quickAnswer: 'Loose used tea leaves are safe, mild, and wonderful for both compost piles and soil conditioning. However, up to 70% of commercial tea bags contain synthetic plastic fibers (polypropylene or PET) that do not biodegrade and will contaminate your garden soil with permanent microplastics. Always cut open tea bags and compost only the loose leaves inside unless verified 100% unbleached paper.',
    directSoilUsage: {
      allowed: true,
      explanation: 'Used loose tea leaves can be worked into the top 2 inches of soil around acid-loving shrubs like blueberries, camellias, hydrangeas, and ferns.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Fast (2-4 weeks)',
      details: 'Due to their small particle size, loose tea leaves break down quickly and generate gentle warmth in compost piles.'
    },
    preparationSteps: [
      'Cut open and discard the outer tea bag unless certified 100% home compostable paper with no plastic heat-seal.',
      'Remove strings and metal staples.',
      'Spread out loose tea to cool and dry slightly before adding to soil or compost.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Acid-Loving Plant Booster',
        description: 'Scatter 2-3 tablespoons of loose, used black or green tea around the base of acid-loving houseplants or garden shrubs, scratching into the mulch.'
      },
      {
        title: 'Step 2: Compost Heap Layering',
        description: 'Sprinkle loose tea throughout the compost pile to stimulate earthworm activity and provide rapid nitrogen.'
      },
      {
        title: 'Step 3: Seed Germination Starter Mix',
        description: 'Blend 5% spent tea leaves with potting seed mix to improve moisture retention and fungal biodiversity.'
      }
    ],
    benefits: [
      'Rich in nitrogen (4%), phosphorus, and potassium trace minerals.',
      'Tannic acid gently conditions soil structure and encourages beneficial acidophilic soil fungi.',
      'High surface area makes it an instant food source for earthworms.'
    ],
    limitations: [
      'Commercial pyramid teabags shed billions of plastic microfibers into soil.',
      'High concentrations of tannins can inhibit some sensitive non-acid-loving vegetable seedlings.',
      'Can attract surface molds if left in a soggy clump on houseplant potting soil.'
    ],
    mythsBusted: [
      {
        myth: 'All "silky" tea bags are made of silk or cornstarch and melt into compost.',
        reality: 'Lab tests show almost all silky pyramid bags are woven nylon or PET plastic. Never put them into your soil or compost.'
      }
    ],
    commonMistakes: [
      'Throwing whole teabags with metal staples and nylon strings into compost.',
      'Letting moist tea bags pile up in a saucer until they turn into toxic black slime.'
    ],
    safetyPrecautions: [
      'Check tea packaging carefully; look for the "Plastic Free" trustmark before tossing bags whole.',
      'Keep tea leaves away from pets, as concentrated caffeine can cause heart palpitations in dogs and cats.'
    ],
    faqs: [
      {
        question: 'Can I use herbal teas (peppermint, chamomile, rooibos)?',
        answer: 'Yes! Herbal teas contain zero caffeine and are 100% organic plant matter that enriches compost with diverse phytochemicals.'
      },
      {
        question: 'Are matcha residues good for soil?',
        answer: 'Excellent! Matcha is the whole ground green tea leaf suspended in water, delivering 100% of the leaf’s nitrogen and chlorophyll directly to the soil.'
      }
    ],
    references: [
      'Environmental Science & Technology Journal: "Plastic Teabags Release Billions of Microscopic and Nanoscale Particles into Tea"',
      'University of Arizona Cooperative Extension: "Using Spent Tea and Coffee in the Home Garden"'
    ],
    relatedGuideSlugs: ['coffee-grounds-for-plants', 'vegetable-scraps-for-compost', 'banana-peels-for-plants']
  },
  {
    id: 'onion-peels',
    slug: 'onion-peels-for-plants',
    title: 'Onion & Garlic Peels for Plants: Sulfur Benefits, Soil Application, and Composting',
    shortTitle: 'Onion Peels for Plants',
    scientificName: 'Allium cepa skin',
    excerpt: 'Onion skins are rich in quercetin, sulfur, and potassium. Learn how they act as natural disease shields without giving your compost a foul stench.',
    readingTime: '5 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: '25:1 (Balanced Carbon/Green)',
    type: 'Brown (Carbon)',
    featuredImage: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Golden dry onion skins and shallot trimmings in a gardening basket',
    quickAnswer: 'Dry onion skins and garlic peels are 100% compostable and make outstanding pest-repelling garden amendments. Onion skins contain natural sulfur compounds and high concentrations of quercetin, a powerful antioxidant that protects plant roots against fungal attacks. The papery skins act like carbon "browns", while the fleshy root ends are nitrogen "greens".',
    directSoilUsage: {
      allowed: true,
      explanation: 'Dry papery skins can be mulched lightly around plants or steeped into a natural pest-repellent wash. Avoid dumping large amounts of wet whole rotting onions directly on beds.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Moderate (1-3 months)',
      details: 'Onion skins break down smoothly in outdoor piles. In indoor worm bins, keep allium quantities low as worms dislike the pungent sulfur vapors.'
    },
    preparationSteps: [
      'Separate dry papery outer skins from moist inner bulbs.',
      'Chop thick root bottoms into small pieces.',
      'Soak dry skins in water for 24-48 hours to make a natural protective foliar spray.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Protective Onion Skin Tea',
        description: 'Steep a handful of golden onion skins in 1 liter of room-temperature water for 24 hours. Strain and spray on tomato and rose foliage to deter aphids and powdery mildew.'
      },
      {
        title: 'Step 2: Compost Heap Layering',
        description: 'Toss papery skins into the bin alongside other carbon browns like shredded cardboard to balance moisture.'
      },
      {
        title: 'Step 3: Mulch Barrier for Perennials',
        description: 'Work crushed dry skins into the surface mulch around root crops to discourage burrowing pests.'
      }
    ],
    benefits: [
      'High in sulfur, which helps plants synthesize essential amino acids and proteins.',
      'Rich in quercetin, a flavonoid with proven antifungal and pest-deterrent properties.',
      'Free of weed seeds and pathogens, creating clean compost matter.'
    ],
    limitations: [
      'Strong sulfur odor if rotting anaerobically in un-aerated indoor bins.',
      'Disliked by composting earthworms (red wigglers) in confined vermicompost bins.',
      'Paper skins are lightweight and blow away in high winds if not covered.'
    ],
    mythsBusted: [
      {
        myth: 'Putting onion skins in compost will make all your future vegetables taste like onions.',
        reality: 'Composting completely breaks down sulfur compounds into basic elemental ions. Finished compost will never flavor your future carrots or strawberries.'
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
        answer: 'Both are equally beneficial. Red onion skins contain additional anthocyanin pigments, while yellow skins are slightly richer in quercetin.'
      }
    ],
    references: [
      'Journal of Agricultural and Food Chemistry: "Antioxidant and Antifungal Activity of Allium Byproducts"',
      'Cornell University Department of Horticulture: "Composting Kitchen Scraps and Odor Control"'
    ],
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
    quickAnswer: 'Yes, potato peels make great compost material, supplying potassium, phosphorus, and energetic starches that feed beneficial thermophilic bacteria. However, two precautions are crucial: never compost potato peels showing signs of Late Blight (dark sunken rot), and make sure "eyes" on thick peelings are chopped so they don\'t sprout into unwanted potato vines inside your bin.',
    directSoilUsage: {
      allowed: false,
      explanation: 'Raw potato peels should not be laid on top of soil; they will root, sprout volunteer vines, or turn slimy while attracting beetles and slugs.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Fast (2-4 weeks)',
      details: 'Due to their high starch and sugar content, potato peels ferment rapidly in warm compost, providing a quick burst of microbial heat.'
    },
    preparationSteps: [
      'Inspect for disease: discard peels with dark, corky blight lesions into the municipal trash.',
      'Slice or dice thick peels to destroy any remaining viable sprout eyes.',
      'Mix immediately with dry brown materials to offset the wet starch moisture.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Hot Compost Core Deposit',
        description: 'Bury potato peelings into the deep core of your compost pile where temperatures exceed 130°F (55°C) to kill sprout eyes and speed digestion.'
      },
      {
        title: 'Step 2: Vermicomposting Snack',
        description: 'Worms enjoy boiled or microwaved potato peelings (cooked for 60 seconds to soften the starch and destroy viable eye buds).'
      },
      {
        title: 'Step 3: Starch-Water Garden Drench',
        description: 'Cool water from boiling unsalted potatoes and use as a soil drench around flowering annuals for an instant potassium and starch microbial boost.'
      }
    ],
    benefits: [
      'High in potassium and starch carbohydrates that rapidly fuel heat-generating compost bacteria.',
      'Breaks down into fine, soft humus that improves moisture-holding capacity.',
      'Diverts starchy, high-volume kitchen waste from the waste stream.'
    ],
    limitations: [
      'Thick peels with "eyes" can sprout into vigorous unwanted potato vines in cold compost bins.',
      'Carries a theoretical risk of overwintering late blight (Phytophthora infestans) if sourced from infected store tubers.',
      'Contains solanine (a natural glycoalkaloid), which is neutralized during composting but should not be fed raw to livestock in massive quantities.'
    ],
    mythsBusted: [
      {
        myth: 'The green skin on potatoes contains poison that will kill all your compost microbes.',
        reality: 'Solanine is toxic to humans and mammals if consumed in large amounts, but compost soil bacteria break it down safely and completely within days.'
      }
    ],
    commonMistakes: [
      'Throwing whole sprouted potatoes into a cold compost bin (you will grow an unintentional potato patch).',
      'Composting diseased commercial potatoes that were struck with black scurf or fungal blight.'
    ],
    safetyPrecautions: [
      'Keep raw green potato peels away from dogs, chickens, and pets due to solanine alkaloid sensitivity.',
      'Always wash commercial potatoes before peeling to remove synthetic sprout-inhibitor chemicals (like chlorpropham).'
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
      'Penn State Extension: "Preventing Late Blight Spread in Backyard Compost"',
      'University of Maine Cooperative Extension: "Home Garden Composting and Potato Pests"'
    ],
    relatedGuideSlugs: ['onion-peels-for-plants', 'vegetable-scraps-for-compost', 'banana-peels-for-plants']
  }
];
