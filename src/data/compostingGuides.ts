import type { CompostingGuideItem } from '../types';

export const compostingGuides: CompostingGuideItem[] = [
  {
    id: 'beginners',
    slug: 'composting-for-beginners',
    title: 'Composting for Beginners: The Complete Step-by-Step Home Guide',
    excerpt: 'Transform your daily vegetable scraps, coffee grounds, and yard waste into rich dark humus without foul odors or pests. Here is everything you need to start.',
    readingTime: '8 min read',
    category: 'Fundamentals',
    featuredImage: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Rich dark decomposed homemade compost held in cupped hands',
    introduction: 'Composting is simply human-assisted decomposition. In nature, fallen leaves, decaying twigs, and fallen fruits land on the forest floor, where billions of bacteria, fungi, and earthworms transform them into fertile, moisture-retentive topsoil. By balancing carbon and nitrogen in your backyard or apartment, you can replicate this miracle in as little as 6 to 12 weeks.',
    keyTakeaways: [
      'The magic formula: 2 to 3 parts brown carbon materials to 1 part green nitrogen materials by volume.',
      'Compost requires four elements: Carbon (Browns), Nitrogen (Greens), Oxygen (Aeration), and Water (Moisture like a wrung-out sponge).',
      'Properly managed compost smells sweet and earthy like a forest floor—never like garbage.'
    ],
    sections: [
      {
        title: '1. The 4 Essential Ingredients of Healthy Compost',
        content: 'Every compost pile relies on a living biological community of aerobic microbes. To thrive, these organisms require four foundational inputs: Browns (Carbon for energy), Greens (Nitrogen for protein synthesis), Oxygen (from turning or porous pile structure), and Water (maintaining 40-60% moisture content).',
        tips: [
          'Browns provide energy: dry autumn leaves, shredded brown cardboard, untreated sawdust, straw.',
          'Greens provide protein: fresh vegetable peels, coffee grounds, fruit scraps, fresh grass clippings.',
          'Keep moisture at the level of a wrung-out kitchen sponge—never dripping wet, never bone dry.'
        ]
      },
      {
        title: '2. Choosing Your Composting Setup',
        content: 'Select the setup that fits your available space. Outdoor backyards can use an open wooden bin, a wire cylinder, or an aerated plastic tumbler. Small urban patios or apartments benefit from sealed countertop Bokashi buckets or odorless indoor worm bins (vermicomposting).',
        tips: [
          'Tumblers are rodent-proof and easy to turn with a crank, perfect for small yards.',
          'A 3-foot by 3-foot wooden pallet bin is ideal for hot composting larger volumes of garden and kitchen waste.'
        ]
      },
      {
        title: '3. The Step-by-Step Layering Method',
        content: 'Start with a 4-inch base of coarse twigs or chopped pruning sticks at the bottom to ensure air flows upward from the ground. Next, alternate layers of wet green scraps with dry brown carbon materials. Whenever you dump a bowl of kitchen scraps, immediately cover it with a generous layer of dry leaves or shredded cardboard.',
        tips: [
          'Chop scraps into smaller 1-inch pieces to accelerate decomposition by up to 300%.',
          'Turn the pile with a garden pitchfork once every 1 to 2 weeks to introduce fresh oxygen.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How do I know when my compost is finished?',
        answer: 'Finished compost is dark brown or black, crumbly, and smells pleasantly earthy like a woodland path. You will no longer recognize any original kitchen scraps, and the pile will have cooled down to ambient temperature.'
      },
      {
        question: 'Can I compost in the winter?',
        answer: 'Yes! While outdoor microbial activity slows down when ambient temperatures drop below freezing, the materials freeze safely and resume rapid decomposition the moment spring arrives.'
      }
    ],
    relatedGuideSlugs: ['green-vs-brown-materials', 'how-to-make-compost-at-home', 'composting-mistakes']
  },
  {
    id: 'green-vs-brown',
    slug: 'green-vs-brown-materials',
    title: 'Green vs Brown Compost Materials: The Ideal 30:1 Carbon-to-Nitrogen Ratio',
    excerpt: 'Mastering the balance between carbon-rich "Browns" and nitrogen-rich "Greens" is the secret to fast, odorless, high-heat composting.',
    readingTime: '7 min read',
    category: 'Fundamentals',
    featuredImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Comparison of dry brown autumn leaves and fresh green vegetable garden scraps',
    introduction: 'The secret to fast composting lies in the Carbon-to-Nitrogen (C:N) ratio. Composting microorganisms need about 30 parts of carbon for every 1 part of nitrogen to build their cell walls and generate metabolic heat. Too much nitrogen results in a slimy, foul-smelling swamp; too much carbon causes the pile to sit inert for months.',
    keyTakeaways: [
      'The ideal chemical C:N ratio is 30:1. In practice, this means roughly 2 to 3 buckets of brown materials for every 1 bucket of kitchen greens.',
      'Greens are moist, nitrogen-rich, and fast-decomposing.',
      'Browns are dry, fibrous, carbon-rich, and provide structural aeration.'
    ],
    sections: [
      {
        title: 'Complete Guide to Green Materials (Nitrogen)',
        content: 'Green materials are moisture-heavy and contain high concentrations of proteins and amino acids. They activate the bacteria that heat up your pile.',
        tips: [
          'Kitchen vegetable peels & fruit scraps (C:N 15:1 to 20:1)',
          'Used coffee grounds & paper filters (C:N 20:1 — yes, coffee grounds are "green"!)',
          'Fresh green grass clippings (C:N 20:1 — use in thin layers to avoid matting)',
          'Spent garden plants & green prunings (C:N 25:1)',
          'Fresh livestock manure from herbivores (cow, horse, chicken) (C:N 10:1 to 15:1)'
        ]
      },
      {
        title: 'Complete Guide to Brown Materials (Carbon)',
        content: 'Browns are dry, woody materials rich in cellulose and lignin. They trap air pockets inside the pile, absorb excess moisture from greens, and feed decomposer fungi.',
        tips: [
          'Dry deciduous tree leaves (C:N 60:1)',
          'Shredded corrugated cardboard and egg cartons (C:N 350:1)',
          'Straw and hay (C:N 80:1)',
          'Dry pine needles (C:N 80:1 — use in moderation under 10%)',
          'Untreated woodchips and sawdust (C:N 400:1 to 500:1 — use sparingly)'
        ]
      }
    ],
    faqs: [
      {
        question: 'Why are coffee grounds considered "Green" when they are brown in color?',
        answer: 'The terms "green" and "brown" refer to chemical composition, not physical color! Coffee grounds are loaded with amino acids and have a C:N ratio around 20:1, making them a nitrogen-rich green.'
      }
    ],
    relatedGuideSlugs: ['composting-for-beginners', 'compost-smells-bad', 'how-to-make-compost-at-home']
  },
  {
    id: 'how-to-make',
    slug: 'how-to-make-compost-at-home',
    title: 'How to Make Rich Compost at Home: Pile, Tumbler, or Trench',
    excerpt: 'Detailed comparison of hot vs cold composting, batch vs continuous methods, and choosing the perfect bin for your yard.',
    readingTime: '7 min read',
    category: 'Techniques',
    featuredImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Gardener turning a backyard compost pile with a pitchfork in lush green surroundings',
    introduction: 'Whether you want finished compost in 30 days or prefer a low-effort system that you set and forget, choosing the right composting method saves countless hours of frustration.',
    keyTakeaways: [
      'Hot composting requires a minimum 3x3x3 ft volume and reaches 130°F–155°F to kill weed seeds.',
      'Cold continuous composting is low-maintenance: simply deposit scraps daily and harvest compost from the bottom in 6 to 12 months.',
      'Trench composting buries scraps directly in garden beds with zero bin required.'
    ],
    sections: [
      {
        title: 'Hot Composting (The Fast 4-Week Method)',
        content: 'Hot composting relies on thermophilic bacteria. By building a pile all at once with balanced greens and browns and turning it every 3-4 days, temperatures climb to 135-160°F (57-71°C). This heat destroys plant pathogens and weed seeds while churning out finished compost in 4 to 8 weeks.'
      },
      {
        title: 'Cold / Continuous Composting (The Lazy Method)',
        content: 'Perfect for busy households. Keep an outdoor bin and toss in kitchen scraps and brown leaves whenever available. It stays cool and takes 6 to 12 months, but requires virtually zero labor.'
      },
      {
        title: 'Trench Composting (Direct Ground Burial)',
        content: 'Dig an 8- to 12-inch deep trench between your garden rows or directly under future planting beds. Fill the bottom 4 inches with chopped kitchen scraps, then backfill with garden soil. Earthworms will migrate and digest everything in place.'
      }
    ],
    faqs: [
      {
        question: 'Do I need a compost thermometer?',
        answer: 'While not required, a long-stem compost thermometer ($15–$25) is the best diagnostic tool to verify when your pile has hit the thermophilic zone (130°F+) and when it is ready to be turned.'
      }
    ],
    relatedGuideSlugs: ['outdoor-composting', 'indoor-composting', 'how-long-does-compost-take']
  },
  {
    id: 'indoor',
    slug: 'indoor-composting',
    title: 'Indoor Composting: Apartment-Friendly Bokashi, Worms, and Countertop Bins',
    excerpt: 'Living in an apartment or house without a yard? You can still divert 100% of your kitchen scraps using odor-free indoor systems.',
    readingTime: '6 min read',
    category: 'Indoor & Outdoor',
    featuredImage: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Compact indoor countertop compost crock in a modern kitchen setting',
    introduction: 'Urban living is no barrier to zero-waste gardening. Modern indoor composting technologies allow city dwellers to turn kitchen scraps into nutrient-rich fertilizers for houseplants and community gardens without attracting fruit flies or causing odors.',
    keyTakeaways: [
      'Vermicomposting uses red wiggler earthworms to process up to half their body weight in food scraps every single day.',
      'Bokashi is an anaerobic fermentation method using EM-1 beneficial microbes that can even process meat, dairy, and bones.',
      'Electric food recyclers dehydrate and grind scraps into an odorless pre-compost amendment in 4 to 8 hours.'
    ],
    sections: [
      {
        title: 'Option A: Vermicomposting (Worm Farms)',
        content: 'A tiered plastic or wooden bin stocked with Eisenia fetida (Red Wigglers). Feed them chopped fruit/veggie peels, coffee grounds, and shredded cardboard bedding. The result is pure worm castings ("black gold"), the most nutrient-dense organic fertilizer on earth.'
      },
      {
        title: 'Option B: Bokashi Fermentation Buckets',
        content: 'Originated in Japan, Bokashi uses an airtight bucket inoculated with wheat bran infused with effective microorganisms (EM-1). Unlike aerobic piles, Bokashi ferments all food scraps—including cooked foods, small bones, and cheeses. After 2 weeks of fermentation, bury the pickled scraps in soil where they break down within 14 days.'
      }
    ],
    faqs: [
      {
        question: 'Will indoor worm composting attract bugs or smell bad?',
        answer: 'A healthy worm bin has no odor beyond the fresh smell of clean potting soil. Odor and fruit flies only occur if you overfeed the worms or leave fresh food sitting uncovered on top of the bedding.'
      }
    ],
    relatedGuideSlugs: ['outdoor-composting', 'composting-for-beginners', 'compost-smells-bad']
  },
  {
    id: 'outdoor',
    slug: 'outdoor-composting',
    title: 'Outdoor Composting Systems: 3-Bin Hot Composting vs Tumblers vs Heaps',
    excerpt: 'Find the ideal outdoor composting infrastructure for your garden size, yard layout, and wildlife safety requirements.',
    readingTime: '6 min read',
    category: 'Indoor & Outdoor',
    featuredImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Backyard wooden 3-bin composting station with fresh garden organic matter',
    introduction: 'Outdoor composting provides the space needed to handle large volumes of lawn clippings, autumn leaves, and kitchen waste. Choosing between tumblers, fixed bins, and multi-bay systems dictates your maintenance routine.',
    keyTakeaways: [
      'Dual-chamber tumblers allow one side to cure while you continuously fill the other.',
      'The classic 3-bin cedar or pallet system is the gold standard for gardeners generating large volumes of yard debris.',
      'Hardware cloth lining (1/4-inch mesh) is essential on ground bins to rodent-proof your compost.'
    ],
    sections: [
      {
        title: '1. Tumbler Composting Bins',
        content: 'Elevated off the ground on steel frames, rotating compost tumblers keep pests completely out. By turning the handle twice a week, oxygen is mixed through the batch with zero pitchfork strain.'
      },
      {
        title: '2. The Classic 3-Bin Pallet System',
        content: 'Bin 1 is for fresh incoming scraps and leaves. Bin 2 is for actively thermophilic cooking and turning. Bin 3 is for curing and harvesting finished sifted compost.'
      }
    ],
    faqs: [
      {
        question: 'Should I keep my compost bin in full sun or shade?',
        answer: 'Partial sun or light shade is ideal. Full blistering sun can dry out the pile too quickly, while deep shade can keep cold piles too damp and sluggish.'
      }
    ],
    relatedGuideSlugs: ['indoor-composting', 'how-to-make-compost-at-home', 'composting-for-beginners']
  },
  {
    id: 'mistakes',
    slug: 'composting-mistakes',
    title: '9 Critical Composting Mistakes That Ruin Your Pile (And How to Fix Them)',
    excerpt: 'Avoid foul odors, uninvited pests, and sluggish decomposition by fixing these common composting traps.',
    readingTime: '7 min read',
    category: 'Troubleshooting',
    featuredImage: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Troubleshooting a compost pile with dry leaves and organic scraps',
    introduction: 'Almost all composting problems come down to an imbalance in the four core elements: carbon, nitrogen, water, or air. Here are the 9 most frequent mistakes and their immediate solutions.',
    keyTakeaways: [
      'Mistake #1: Adding too many wet greens without enough dry browns.',
      'Mistake #2: Forgetting to turn or aerate the pile.',
      'Mistake #3: Adding meat, fat, pet waste, or diseased plants.'
    ],
    sections: [
      {
        title: 'The Top 5 Mistakes and Instant Fixes',
        content: '1. Pile is too wet and slimy: Add dry shredded leaves, straw, or brown cardboard immediately.\n2. Pile is bone dry and nothing is happening: Water each layer while turning with a hose spray nozzle.\n3. Pile won\'t heat up: It lacks nitrogen or volume. Add coffee grounds, fresh grass trimmings, or increase volume to at least 3x3x3 ft.\n4. Attracting flies or raccoons: Always bury fresh food scraps at least 4 inches deep under brown leaves.\n5. Adding dog/cat waste: Feline and canine feces contain parasites (like Toxoplasma gondii) that survive home compost piles. Never add them to food gardens.'
      }
    ],
    faqs: [
      {
        question: 'Can I add newspaper to compost?',
        answer: 'Yes! Modern black-and-white newspapers use non-toxic, soy-based inks and make excellent shredded brown carbon bedding. Avoid glossy color magazines with synthetic plastic coatings.'
      }
    ],
    relatedGuideSlugs: ['compost-smells-bad', 'green-vs-brown-materials', 'composting-for-beginners']
  },
  {
    id: 'smells-bad',
    slug: 'compost-smells-bad',
    title: 'Why Does My Compost Smell Bad? Sulfur, Ammonia, and Odor Elimination',
    excerpt: 'Compost should smell like a fresh forest floor. If yours smells like sewage or rotten eggs, here is the scientific cause and 24-hour cure.',
    readingTime: '6 min read',
    category: 'Troubleshooting',
    featuredImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Compost bin troubleshooting and inspection in an outdoor garden',
    introduction: 'A healthy compost pile is aerobic—meaning oxygen-loving bacteria do the digesting, releasing harmless carbon dioxide and water vapor. When oxygen is depleted, anaerobic bacteria take over, producing sulfur dioxide (rotten eggs) and methane. Here is how to fix it in 24 hours.',
    keyTakeaways: [
      'Rotten egg / sulfur odor = Anaerobic conditions from excess moisture and lack of oxygen.',
      'Sharp ammonia / urine odor = Excess nitrogen (too many greens, too few carbon browns).',
      'The instant cure: Turn the pile to introduce air and incorporate 2 to 3 buckets of dry carbon browns.'
    ],
    sections: [
      {
        title: 'Diagnosing Odor Profiles',
        content: '1. Rotten Egg Smell (Hydrogen Sulfide): The pile is suffocating under heavy wet mats. Turn the pile immediately with a pitchfork, fluffing up the layers and blending in dry sawdust or chopped straw.\n2. Ammonia Smell: You dumped too much fresh lawn grass or pure manure without carbon. Add shredded cardboard or dry autumn leaves to absorb the surplus nitrogen.'
      }
    ],
    faqs: [
      {
        question: 'Can lime or wood ash fix smelly compost?',
        answer: 'Do NOT add garden lime or excessive wood ash to an ammonia-smelling pile. High alkalinity volatilizes nitrogen into pure ammonia gas, making the smell far worse. Use carbon browns instead.'
      }
    ],
    relatedGuideSlugs: ['composting-mistakes', 'green-vs-brown-materials', 'composting-for-beginners']
  },
  {
    id: 'how-long',
    slug: 'how-long-does-compost-take',
    title: 'How Long Does Compost Take to Break Down? Timelines, Seasons, and Fast-Tracking',
    excerpt: 'From 3 weeks in a hot tumbler to 12 months in a passive heap, discover how particle size, heat, and moisture dictate your compost harvest.',
    readingTime: '5 min read',
    category: 'Techniques',
    featuredImage: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Stages of organic matter decomposition over time into dark crumbly soil',
    introduction: 'How quickly your kitchen waste becomes dark compost depends entirely on three variables: temperature, particle size, and turning frequency.',
    keyTakeaways: [
      'Hot composting (aerated every 3 days): 4 to 8 weeks.',
      'Dual-chamber tumbler: 6 to 10 weeks.',
      'Passive cold pile: 6 to 12 months.',
      'Vermicomposting (worm bin): 2 to 4 months per tray.'
    ],
    sections: [
      {
        title: '3 Ways to Cut Your Composting Time in Half',
        content: '1. Shred everything: Smaller surface area gives bacteria 10x more entry points.\n2. Maintain consistent moisture: Never let the pile dry out during hot summer months.\n3. Inoculate with finished compost: Adding a shovel of existing mature compost seeds the new pile with billions of active decomposer microbes.'
      }
    ],
    faqs: [
      {
        question: 'Can I speed up compost with store-bought compost starter?',
        answer: 'Commercial compost accelerators are usually just dried bacteria with a nitrogen carrier. A shovel of ordinary garden soil or finished compost works just as well and costs nothing.'
      }
    ],
    relatedGuideSlugs: ['composting-for-beginners', 'how-to-make-compost-at-home', 'outdoor-composting']
  }
];
