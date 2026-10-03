import { DIYProjectItem } from '../types';

export const diyProjects: DIYProjectItem[] = [
  {
    id: 'plastic-bottle-planter',
    slug: 'plastic-bottle-planter',
    title: 'DIY Self-Watering Plastic Bottle Planter: Sub-Irrigated Herb Garden',
    excerpt: 'Upcycle everyday 2-liter soda or seltzer bottles into self-watering capillary planters that keep basil, mint, and parsley thriving with zero over-watering.',
    difficulty: 'Easy',
    timeEstimate: '20 minutes',
    costEstimate: '$0 (100% Recycled)',
    materialsNeeded: [
      'Clean 2-liter plastic soda or water bottle',
      'Cotton string, yarn, or strip of cotton fabric (6-8 inches long)',
      'High-quality potting mix (not garden dirt)',
      'Herb seeds or seedling starts (basil, mint, oregano)',
      'Water'
    ],
    toolsNeeded: [
      'Utility craft knife or sharp kitchen scissors',
      'Awl, nail, or drill with small bit to poke cap hole'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Upcycled plastic bottle planters on a sunny windowsill with green basil seedlings',
    steps: [
      {
        stepNumber: 1,
        title: 'Cut the Bottle in Two',
        instruction: 'Clean and dry the 2-liter bottle. Cut horizontally around the bottle approximately 4 to 5 inches down from the neck, creating an inverted funnel top and a cylinder reservoir base.',
        proTip: 'Wrap a strip of masking tape around the bottle first to guide your scissors in a straight cut.'
      },
      {
        stepNumber: 2,
        title: 'Create the Wicking Cap',
        instruction: 'Remove the bottle cap and use a nail or drill to puncture a 1/4-inch hole through the center. Thread your cotton yarn or fabric strip through the hole so that half hangs below and half sits inside the inverted funnel.',
        proTip: '100% natural cotton wicks water best through capillary action; avoid synthetic polyester.'
      },
      {
        stepNumber: 3,
        title: 'Assemble and Fill with Potting Mix',
        instruction: 'Screw the cap back onto the inverted funnel. Rest the funnel upside-down inside the bottle base. Hold the top portion of the wick upright while adding damp potting soil around it.',
        proTip: 'Lightly moisten your potting soil before adding it to initiate the capillary connection.'
      },
      {
        stepNumber: 4,
        title: 'Plant and Fill Reservoir',
        instruction: 'Sow 3-4 herb seeds or gently transplant a seedling into the potting mix. Lift the funnel top, pour 2 inches of clean water into the bottom reservoir, and replace the funnel.',
        proTip: 'Cover the bottom clear reservoir with brown paper or paint if algae begins forming in sunny windows.'
      }
    ],
    careMaintenance: [
      'Check reservoir water level once every 7 to 10 days; top up when the bottom 1/2 inch remains.',
      'Place in a sunny south- or west-facing windowsill receiving at least 6 hours of light.',
      'Feed with diluted organic compost tea every 3 to 4 weeks.'
    ],
    faqs: [
      {
        question: 'Which herbs grow best in 2-liter bottle planters?',
        answer: 'Shallow to medium rooted herbs such as sweet basil, cilantro, mint, parsley, chives, and thyme thrive wonderfully.'
      },
      {
        question: 'Why is green algae growing in my water reservoir?',
        answer: 'Sunlight striking stagnant water naturally encourages harmless green algae. Simply wrap decorative scrap paper, burlap, or washi tape around the lower half of the bottle to block light.'
      }
    ],
    relatedGuideSlugs: ['recycled-container-garden', 'egg-carton-seed-starter', 'recycled-hanging-planters']
  },
  {
    id: 'egg-carton-starter',
    slug: 'egg-carton-seed-starter',
    title: 'Egg Carton Biodegradable Seed Starters: From Kitchen Waste to Seedlings',
    excerpt: 'Turn cardboard egg cartons into zero-cost, fully biodegradable seed pots that can be planted directly into the ground without root shock.',
    difficulty: 'Easy',
    timeEstimate: '15 minutes',
    costEstimate: '$0',
    materialsNeeded: [
      'Paper/cardboard egg carton (avoid styrofoam or plastic)',
      'Seed starting potting mix (fine, screened texture)',
      'Vegetable or flower seeds (tomatoes, peppers, marigolds)',
      'Shallow plastic tray or recycled cookie container lid'
    ],
    toolsNeeded: [
      'Kitchen scissors',
      'Spray misting bottle'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cardboard egg carton seed starter with tiny green sprouts germinating on a wooden table',
    steps: [
      {
        stepNumber: 1,
        title: 'Separate the Lid and Poke Drainage Holes',
        instruction: 'Cut the top lid off the egg carton using scissors. Use the tip of a pencil or scissor blade to poke a tiny drainage hole in the bottom of each of the 12 egg cups.',
        proTip: 'The detached cardboard lid can be placed under the cups as an absorbent base tray.'
      },
      {
        stepNumber: 2,
        title: 'Fill with Seed Starting Mix',
        instruction: 'Fill each cup to within 1/4 inch of the rim with pre-moistened seed starting mix. Press down lightly with your thumb to eliminate air pockets.',
        proTip: 'Do not use heavy outdoor garden soil, which compacts and stunts delicate young roots.'
      },
      {
        stepNumber: 3,
        title: 'Sow Seeds and Mist',
        instruction: 'Drop 2 seeds into each cell. Cover with a dusting of dry mix according to seed depth guidelines (typically 1/4 inch) and mist gently with warm water until thoroughly damp.',
        proTip: 'Place a clear plastic wrap or bakery container dome over the carton to lock in humidity until germination.'
      },
      {
        stepNumber: 4,
        title: 'Direct Garden Transplanting',
        instruction: 'When seedlings have their first true leaves and outdoor temperatures warm, cut the egg cups apart with scissors. Plant the entire individual cardboard cup directly into garden soil.',
        proTip: 'Tear off the top rim of the cardboard cup so it sits flush below the soil surface, preventing moisture wicking.'
      }
    ],
    careMaintenance: [
      'Cardboard egg cartons dry out faster than plastic cell trays; mist daily to keep the soil consistently damp.',
      'Provide strong light (a south-facing window or a basic T5/LED grow lamp 3 inches above seedlings).',
      'Thin to the strongest single seedling per cup once they reach 1 inch tall.'
    ],
    faqs: [
      {
        question: 'Does the cardboard really break down in the garden?',
        answer: 'Yes! Cardboard egg cups are made of compressed wood pulp. Soil earthworms and bacteria break down the cups within 2 to 4 weeks of burial, allowing roots to expand freely.'
      }
    ],
    relatedGuideSlugs: ['plastic-bottle-planter', 'recycled-container-garden', 'diy-compost-bin']
  },
  {
    id: 'diy-compost-bin',
    slug: 'diy-compost-bin',
    title: 'Build an Aerated Compost Bin From Recycled 5-Gallon Buckets or Pallets',
    excerpt: 'Construct an odor-free, durable, rodent-resistant compost bin using discarded food-grade buckets or reclaimed shipping pallets for less than $10.',
    difficulty: 'Moderate',
    timeEstimate: '45 minutes',
    costEstimate: '$5 - $15',
    materialsNeeded: [
      'Two recycled 5-gallon plastic buckets with lids (often free from bakeries)',
      '1/4-inch hardware cloth (wire mesh) for ventilation holes',
      'Small zip ties or short screws',
      'A collection of brown cardboard and kitchen scraps'
    ],
    toolsNeeded: [
      'Cordless drill with 1/4-inch and 1/2-inch drill bits',
      'Measuring tape and marker',
      'Work gloves'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'DIY aerated bucket compost bin in an outdoor garden workspace',
    steps: [
      {
        stepNumber: 1,
        title: 'Source Food-Grade Buckets',
        instruction: 'Ask local bakeries, donut shops, or restaurants for discarded 5-gallon food buckets (pickle or frosting buckets). Wash with dish soap and warm water to remove grease.',
        proTip: 'Look for HDPE #2 recycling symbols on the bottom, indicating durable, UV-resistant plastic.'
      },
      {
        stepNumber: 2,
        title: 'Drill Aeration Holes',
        instruction: 'Drill a grid of 1/4-inch holes around the entire circumference of the top bucket, spaced roughly 2 to 3 inches apart. Drill 8 to 10 drainage holes in the bottom.',
        proTip: 'Do not drill holes within 2 inches of the top rim to maintain structural rigidity when carrying.'
      },
      {
        stepNumber: 3,
        title: 'Create the Leachate Catch Basin',
        instruction: 'Place the drilled bucket directly inside the second, un-drilled bucket. Place a 2-inch stone or wooden block in the bottom between them to create a sump that catches drainage liquid ("compost leachate").',
        proTip: 'Dilute the leachate 10:1 with rainwater to use as a rich liquid fertilizer for outdoor ornamental flowers.'
      },
      {
        stepNumber: 4,
        title: 'Charge and Operate',
        instruction: 'Add a 3-inch layer of shredded cardboard in the bottom, then begin adding daily kitchen scraps balanced with dry leaves. Snap the lid on tightly to seal out pests.',
        proTip: 'Roll the bucket on the lawn every 3 to 4 days to aerate the contents effortlessly.'
      }
    ],
    careMaintenance: [
      'Empty the bottom leachate catch bucket once every 2 weeks.',
      'Keep the lid tightly sealed when not adding scraps.',
      'Harvest finished compost every 8 to 12 weeks.'
    ],
    faqs: [
      {
        question: 'Will this bucket smell bad on a balcony?',
        answer: 'As long as you add equal volumes of shredded cardboard whenever you deposit kitchen scraps and roll the bucket weekly, it produces an earthy, forest-floor aroma with zero foul odors.'
      }
    ],
    relatedGuideSlugs: ['recycled-container-garden', 'vertical-garden', 'plastic-bottle-planter']
  },
  {
    id: 'recycled-containers',
    slug: 'recycled-container-garden',
    title: 'Creative Upcycled Container Gardening: Tin Cans, Crates, and Colanders',
    excerpt: 'Turn everyday household trash into charming, functional rustic planters. The ultimate guide to preparing tins, vintage wooden crates, and metal colanders.',
    difficulty: 'Easy',
    timeEstimate: '30 minutes',
    costEstimate: '$0',
    materialsNeeded: [
      'Empty coffee tin cans, metal kitchen colanders, or wooden fruit crates',
      'Burlap, landscape fabric, or paper coffee filters for lining',
      'Potting soil formulated for container gardening',
      'Small stones or gravel for weight (optional)'
    ],
    toolsNeeded: [
      'Hammer and a thick nail (for punching drainage holes)',
      'Sandpaper (to dull sharp metal edges)',
      'Non-toxic outdoor craft paint (optional)'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Upcycled vintage colander and painted tin can planters filled with blooming flowers',
    steps: [
      {
        stepNumber: 1,
        title: 'Drainage is Mandatory',
        instruction: 'Use a hammer and large nail to punch at least 4 to 6 drainage holes in the bottom of metal cans or plastic containers. Colanders already have built-in 360-degree drainage!',
        proTip: 'Smooth any sharp interior metal puncture burrs with 120-grit sandpaper.'
      },
      {
        stepNumber: 2,
        title: 'Line to Prevent Soil Runoff',
        instruction: 'Line porous containers (like colanders or wooden crates) with a piece of burlap, landscape fabric, or overlapping paper coffee filters to hold the soil in while letting water drain freely.',
        proTip: 'Burlap from recycled coffee bean sacks provides exceptional root aeration.'
      },
      {
        stepNumber: 3,
        title: 'Plant Matching',
        instruction: 'Match your container size to the plant root depth: tin cans for succulents and radishes, colanders for trailing strawberries or petunias, and wooden crates for lettuces and bush beans.',
        proTip: 'Group metal cans together in afternoon shade during peak summer to prevent soil roots from baking.'
      }
    ],
    careMaintenance: [
      'Small recycled containers dry out faster than large ceramic pots; check moisture levels every morning.',
      'Elevate wooden crates slightly off the patio with bottle caps to prevent bottom rot.'
    ],
    faqs: [
      {
        question: 'Are metal cans safe for edible herbs and vegetables?',
        answer: 'Yes! Modern food-grade tin and steel cans are lined with food-safe polymers. Punching drainage holes creates an inert, non-toxic planting container.'
      }
    ],
    relatedGuideSlugs: ['plastic-bottle-planter', 'vertical-garden', 'recycled-hanging-planters']
  },
  {
    id: 'vertical-garden',
    slug: 'vertical-garden',
    title: 'Space-Saving Vertical Garden Using Recycled Shoe Organizers and Gutters',
    excerpt: 'Maximize small balconies and urban patios by turning hanging fabric shoe organizers and discarded gutters into a lush wall of greens and strawberries.',
    difficulty: 'Moderate',
    timeEstimate: '60 minutes',
    costEstimate: '$10 - $20',
    materialsNeeded: [
      'Recycled canvas or heavy polyester hanging shoe organizer (avoid thin plastic vinyl)',
      'Sturdy wooden dowel or conduit pipe for hanging',
      'Wall mounting hooks or zip ties for balcony railing',
      'Lightweight potting mix with perlite and vermiculite',
      '24 assorted vegetable, herb, or flower starter plants'
    ],
    toolsNeeded: [
      'Drill or screwdriver',
      'Small hand trowel'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Lush living green vertical garden wall on an outdoor urban balcony railing',
    steps: [
      {
        stepNumber: 1,
        title: 'Mount the Support System',
        instruction: 'Hang the organizer on a sunny outdoor wall, fence, or balcony railing using heavy-duty hooks or screws. Ensure the mounting structure can support 40–50 pounds of wet soil.',
        proTip: 'Slip a 1/2-inch rigid wooden dowel through the top grommets to distribute weight evenly across the fabric.'
      },
      {
        stepNumber: 2,
        title: 'Test Fabric Drainage',
        instruction: 'Canvas and breathable fabric pockets naturally allow excess water to weep through. If using coated synthetic fabric, snip two 1/4-inch drainage slits at the bottom corner of each pocket.',
        proTip: 'Water cascading from higher pockets will naturally hydrate lower rows.'
      },
      {
        stepNumber: 3,
        title: 'Fill and Plant from Bottom to Top',
        instruction: 'Fill each pocket halfway with potting mix. Tuck a plant root ball into each pouch, backfill with soil, and press firmly. Plant moisture-loving crops at the bottom and drought-tolerant herbs at the top.',
        proTip: 'Top pockets dry out fastest: plant rosemary, oregano, and thyme on top; leafy greens and mint at the bottom.'
      }
    ],
    careMaintenance: [
      'Water slowly from the top row using a gentle watering wand or drip line.',
      'Feed weekly with liquid kelp or organic compost tea.'
    ],
    faqs: [
      {
        question: 'Will the wet fabric damage my outdoor wall?',
        answer: 'To protect wooden siding or stucco, hang a sheet of recycled plastic corrugated board or waterproof tarp behind the organizer with a 1-inch air gap.'
      }
    ],
    relatedGuideSlugs: ['recycled-container-garden', 'plastic-bottle-planter', 'recycled-hanging-planters']
  },
  {
    id: 'hanging-planters',
    slug: 'recycled-hanging-planters',
    title: 'DIY Hanging Planters From Discarded Glass Jars and Coconut Shells',
    excerpt: 'Transform empty pasta sauce jars, pickle jars, and halved coconut shells into elegant bohemian hanging planters with simple jute macrame knots.',
    difficulty: 'Easy',
    timeEstimate: '25 minutes',
    costEstimate: '$2',
    materialsNeeded: [
      'Clean wide-mouth glass jars or hollowed coconut shell halves',
      'Natural jute twine or scrap cotton yarn (approx 20 feet)',
      'Activated horticultural charcoal (for glass jars without drainage holes)',
      'Small pebbles or gravel',
      'Small indoor trailing plants (Pothos, English Ivy, String of Hearts)'
    ],
    toolsNeeded: [
      'Scissors',
      'Ruler or tape measure'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Upcycled glass jar hanging planters with trailing pothos and jute macrame cord',
    steps: [
      {
        stepNumber: 1,
        title: 'Clean and Prep Jars or Shells',
        instruction: 'Remove labels and adhesive from pasta jars by soaking in warm soapy water with a tablespoon of baking soda. For coconut shells, drill 2 drainage holes in the bottom.',
        proTip: 'Rub stubborn glue residue with vegetable oil and a drop of dish soap.'
      },
      {
        stepNumber: 2,
        title: 'Tie the Simple 8-Strand Macrame Hanger',
        instruction: 'Cut 8 strands of jute twine to 36 inches each. Knot them together 2 inches from the bottom. Pair up adjacent strands and tie square knots 1.5 inches up, repeating in an alternating diamond pattern to cradle the jar.',
        proTip: 'Hang the cord bundle from a doorknob while knotting to maintain even tension.'
      },
      {
        stepNumber: 3,
        title: 'Layer Drainage for Closed Glass',
        instruction: 'Since glass jars lack bottom holes, add a 1-inch base of small gravel followed by 1/2 inch of activated horticultural charcoal to absorb foul odors and prevent root rot.',
        proTip: 'Add potting soil on top and plant your trailing cutting. Water sparingly with an eyedropper or small spouted pitcher.'
      }
    ],
    careMaintenance: [
      'For glass jars without drainage: water only when the soil feels completely dry 2 inches down.',
      'Dust leaves periodically to maximize photosynthesis.'
    ],
    faqs: [
      {
        question: 'Can plants survive long term in glass jars without drainage holes?',
        answer: 'Yes, if you use drought-tolerant, forgiving species like Golden Pothos, Snake Plants, or Philodendrons, and use activated charcoal to filter stagnant water.'
      }
    ],
    relatedGuideSlugs: ['recycled-container-garden', 'plastic-bottle-planter', 'vertical-garden']
  }
];
