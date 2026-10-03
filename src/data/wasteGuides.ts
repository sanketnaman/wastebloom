import { WasteGuideItem } from '../types';

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
    title: 'Eggshells for Plants: Calcium Carbonate, Vinegar Myth vs Powdering, and Soil Health',
    shortTitle: 'Eggshells for Plants',
    scientificName: 'Calcium Carbonate (CaCO3)',
    excerpt: 'Eggshells are 95% calcium carbonate, but coarse cracked pieces take years to decompose. Discover how fine pulverization or vinegar extraction actually unlocks calcium for plants.',
    readingTime: '7 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: 'Mineral (Negligible C:N, high Calcium)',
    type: 'Mineral / Neutral',
    featuredImage: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Crushed clean eggshells in a bowl with garden soil',
    quickAnswer: 'Eggshells provide abundant calcium and trace minerals that strengthen plant cell walls and neutralize acidic soil. However, coarsely crushed shells take 2 to 5 years to break down in soil. To make calcium bioavailable within the current growing season, eggshells must be baked dry and pulverized into an ultra-fine powder, or reacted with vinegar to produce water-soluble calcium acetate.',
    directSoilUsage: {
      allowed: true,
      explanation: 'Fine eggshell powder can be mixed directly into potting mix or garden beds. Coarse chunks will not release calcium fast enough to help current plants, but will physically improve aeration.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Slow (3-6+ months)',
      details: 'Eggshells buffer compost acidity and add grit that benefits earthworms and beneficial microbes. Fine grinding before adding ensures rapid breakdown.'
    },
    preparationSteps: [
      'Rinse shells thoroughly with warm water to remove leftover egg whites that can attract pests.',
      'Bake at 200°F (95°C) for 15-20 minutes to sterilize any potential Salmonella bacteria and make the shells brittle.',
      'Crush in a coffee grinder, blender, or mortar and pestle until it forms a powdery flour consistency.',
      'Optional bioavailable fast-track: Combine 1 tbsp shell powder with 1 cup of apple cider vinegar. Wait until bubbling stops (forms soluble calcium acetate).'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: Planting Hole Pre-Treatment',
        description: 'Add 2 tablespoons of fine eggshell powder into the planting hole when transplanting tomatoes, peppers, or squashes, mixing it into the root zone soil.'
      },
      {
        title: 'Step 2: Top Dressing for Garden Beds',
        description: 'Scatter 1 cup of shell powder per 10 square feet of garden soil in the spring or autumn to steadily buffer soil acidity over time.'
      },
      {
        title: 'Step 3: Worm Bin Grit Booster',
        description: 'Worms need calcium carbonate to regulate their digestive calciferous glands and grit to grind food in their gizzards. Sprinkle 1 teaspoon of powder weekly.'
      }
    ],
    benefits: [
      'Supplies over 95% calcium carbonate, essential for building sturdy plant cell walls.',
      'Provides trace levels of phosphorus, magnesium, and bioavailable protein membranes.',
      'Acts as a mild, slow-release liming agent that naturally raises soil pH in overly acidic soils.'
    ],
    limitations: [
      'Insoluble in pure water; requires acidic soil or microbial digestion to release calcium ions.',
      'Not suitable as a heavy amendment for acid-loving plants like blueberries, azaleas, or rhododendrons.',
      'Large eggshell halves can harbor Salmonella if not sanitized or properly hot-composted.'
    ],
    mythsBusted: [
      {
        myth: 'Throwing coarse crushed eggshells around plants stops slugs and snails in their tracks.',
        reality: 'Scientific controlled trials repeatedly demonstrate that snails and slugs secrete thick mucus and crawl directly over sharp eggshell fragments without injury.'
      },
      {
        myth: 'Throwing whole eggshells on the compost pile provides instant fertilizer.',
        reality: 'Eggshell fragments routinely survive multiple compost cycles intact unless pre-ground into flour.'
      }
    ],
    commonMistakes: [
      'Adding unwashed, raw eggshells directly to compost bins where rats or raccoons are present.',
      'Expecting unground eggshells to instantly cure blossom end rot within days.',
      'Applying eggshell powder to alkaline soils (pH above 7.2) where additional calcium carbonate is unneeded.'
    ],
    safetyPrecautions: [
      'Always bake or boil shells to eliminate Salmonella risks, especially when growing root vegetables or salad greens eaten raw.',
      'Wear a dust mask when grinding large quantities of shell powder to avoid inhaling fine calcium dust.'
    ],
    faqs: [
      {
        question: 'Can eggshells prevent blossom end rot in tomatoes?',
        answer: 'Blossom end rot is a calcium deficiency in the fruit, but it is usually caused by erratic watering rather than a lack of soil calcium. Applying soluble calcium acetate or powdered shells early in the season helps prevent it if watering is consistent.'
      },
      {
        question: 'Do brown eggs work better than white eggs?',
        answer: 'No. The chemical composition (calcium carbonate, protein matrix, and trace minerals) is virtually identical regardless of shell color.'
      }
    ],
    references: [
      'Iowa State University Extension: "The Myth of Eggshells as Slug Barriers"',
      'Journal of Horticultural Science: "Bioavailability of eggshell waste calcium in container substrates"',
      'Cornell Cooperative Extension: "Soil Testing and Calcium Management"'
    ],
    relatedGuideSlugs: ['banana-peels-for-plants', 'coffee-grounds-for-plants', 'vegetable-scraps-for-compost']
  },
  {
    id: 'coffee-grounds',
    slug: 'coffee-grounds-for-plants',
    title: 'Used Coffee Grounds for Plants: Soil pH Myth, Nitrogen Levels, and Composting',
    shortTitle: 'Coffee Grounds for Plants',
    scientificName: 'Coffea arabica residue',
    excerpt: 'Are coffee grounds really acidic? Despite their dark color, spent coffee grounds are classified as "Green" compost materials with a remarkable 20:1 C:N ratio. Learn how to use them safely.',
    readingTime: '7 min read',
    category: 'Kitchen Scraps',
    suitability: 'Suitable with preparation',
    cToNRatio: '20:1 (High Nitrogen "Green")',
    type: 'Green (Nitrogen)',
    featuredImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Rich dark used coffee grounds in a compost bowl surrounded by fresh green leaves',
    quickAnswer: 'Spent coffee grounds are fantastic for gardening, but they do NOT make your soil highly acidic. During brewing, most water-soluble acids are extracted into your cup, leaving the spent grounds near neutral (pH 6.5 to 6.8). They are rich in nitrogen (~2%) and act as a powerful compost booster. Avoid applying thick layers directly to soil, as coffee grounds dry into a water-repellent crust.',
    directSoilUsage: {
      allowed: true,
      explanation: 'Safe to use in light amounts (a dusting under 1/2 inch) mixed with regular mulch or compost. Never apply a thick unbroken blanket, which compacts into an impenetrable barrier that repels water.'
    },
    compostSuitability: {
      recommended: true,
      speed: 'Fast (2-4 weeks)',
      details: 'Coffee grounds are a dream ingredient for compost. They heat up piles quickly and encourage beneficial fungi and earthworms. Keep coffee grounds to under 20-25% of total compost pile volume.'
    },
    preparationSteps: [
      'Allow grounds to cool and dry slightly after brewing to prevent immediate anaerobic mold growth.',
      'Compost paper coffee filters right along with the grounds (unbleached brown filters are ideal).',
      'Never use grounds containing artificial syrups, sweeteners, or dairy residue.'
    ],
    howToUseSteps: [
      {
        title: 'Step 1: The Golden 20% Compost Ratio',
        description: 'Add coffee grounds to your compost pile layered between browns (dry leaves, straw, woodchips). Limit grounds to a maximum of 20% of your total pile volume.'
      },
      {
        title: 'Step 2: Mulch Blending',
        description: 'Blend coffee grounds with coarse wood mulch or shredded bark at a 1:4 ratio before spreading around trees, shrubs, or perennial beds.'
      },
      {
        title: 'Step 3: Worm Farm Treat',
        description: 'Add 1-2 cups of grounds per week to vermicomposting bins. Worms love the grittiness and microbial activity on aged grounds.'
      }
    ],
    benefits: [
      'Supplies steady slow-release organic nitrogen (around 2% by dry weight).',
      'Attracts earthworms and stimulates beneficial mycorrhizal fungal colonization in soil.',
      'Acts as an effective moisture regulator when thoroughly blended into compost.'
    ],
    limitations: [
      'Contains residual caffeine, which can inhibit seed germination and stunt seedling growth (allelopathic effect).',
      'Dries into an hydrophobic crust that prevents rainwater from reaching root systems if applied as an unmixed surface layer.',
      'Excessive amounts in a worm bin can overheat the bedding.'
    ],
    mythsBusted: [
      {
        myth: 'Used coffee grounds will turn hydrangeas bright blue by acidifying the soil.',
        reality: 'Fresh unbrewed coffee is acidic, but brewed grounds have a nearly neutral pH of 6.5–6.8. They will not drastically lower your soil pH to turn hydrangeas blue.'
      },
      {
        myth: 'Coffee grounds kill all garden pests and repel cats permanently.',
        reality: 'While the texture and odor may discourage some soft-bodied insects, research shows pests quickly adapt, and rain washes away the scent.'
      }
    ],
    commonMistakes: [
      'Dumping thick 2-inch mounds of wet coffee grounds around the base of young seedlings.',
      'Using coffee grounds around newly sown vegetable seeds (residual caffeine suppresses sprouting).',
      'Storing wet grounds in an airtight bucket where green trichoderma mold turns into stinky anaerobic sludge.'
    ],
    safetyPrecautions: [
      'Keep large quantities of coffee grounds away from dogs; ingested grounds contain concentrated methylxanthines that are toxic to canines.',
      'Avoid using grounds directly on newly rooted indoor houseplants.'
    ],
    faqs: [
      {
        question: 'Can I put unbleached coffee filters in the compost too?',
        answer: 'Yes! Paper coffee filters are pure cellulose (a brown carbon source) and decompose rapidly within 2 to 4 weeks in an active pile.'
      },
      {
        question: 'Are unbrewed coffee grounds safe for plants?',
        answer: 'No. Unbrewed fresh grounds retain their acidity (pH ~5.0) and high caffeine levels, which stunts plant growth. Always brew or thoroughly compost first.'
      }
    ],
    references: [
      'Washington State University Extension: "Coffee Grounds in the Garden and Landscape"',
      'Soil Science Society of America: "Recycling Used Coffee Grounds in Horticultural Soils"',
      'University of California Agriculture and Natural Resources: "Composting with Coffee"'
    ],
    relatedGuideSlugs: ['banana-peels-for-plants', 'tea-leaves-for-plants', 'vegetable-scraps-for-compost']
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
