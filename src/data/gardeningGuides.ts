import type { GardeningGuideItem } from '../types';

export const gardeningGuides: GardeningGuideItem[] = [
  {
    id: 'soil-microbiome',
    slug: 'soil-microbiome-organic-gardening',
    title: 'Unlocking the Soil Food Web: How Organic Waste Feeds Soil Microbes',
    excerpt: 'Healthy soil is not inert \u2014 it hosts bacteria, fungi, protozoa, and worms. Learn what soil organisms actually do, what they eat, and how compost from kitchen scraps fits in.',
    readingTime: '6 min read',
    category: 'Soil Health',
    featuredImage: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Close-up of dark, crumbly garden soil rich in organic matter',
    introduction: 'Walk into any garden centre and you will find products promising a thriving soil microbiome. The underlying biology is real but simpler than the marketing: soil organisms are living things that need food, water, and air, and the food they run on is organic matter \u2014 compost, leaf litter, root residues, and the sugars plant roots release.',
    reviewStatus: 'needs-human-review',
    sections: [
      {
        title: 'The Secret Underground Economy',
        content: 'Plant roots release sugars and other compounds (exudates) into the soil that feed bacteria and mycorrhizal fungi living around them. In return, these organisms break down organic matter \u2014 compost, leaf litter, residues \u2014 and help make nitrogen, phosphorus, and other nutrients available for roots to absorb. A single teaspoon of healthy soil can hold on the order of a billion bacteria (University of Maryland Extension), and the sticky substances they produce help bind soil particles into the crumb structure that holds water and air.'
      },
      {
        title: 'What Synthetic Fertilizers Do \u2014 and Do Not Do',
        content: 'Soluble fertilizers deliver mineral nutrients directly to roots, and plants take them up readily. What they do not deliver is organic matter: the food that sustains soil organisms and the material that improves structure and water holding. A soil that receives fertilizer but little organic matter over time stays biologically poor and physically worse \u2014 organic matter is what improves water retention, nutrient retention, and tilth (University of Maryland Extension). The practical answer is not to ban fertilizer, but to keep feeding the soil itself: compost, mulch, and less disturbance.'
      },
      {
        title: 'How to Feed the Soil (Without the Hype)',
        content: 'Top-dress beds with a 1- to 2-inch layer of finished compost once or twice a year and work it gently into the top few inches, or leave it as a surface mulch. Keep soil covered with mulch so it does not bake or wash away. Take a soil test before buying any fertilizer \u2014 most soils need specific corrections, not more inputs, and a test tells you which.'
      }
    ],
    faqs: [
      {
        question: 'How much compost should I add to my soil each spring?',
        answer: 'A 1- to 2-inch top-dress layer of finished compost gently worked into the top 3 inches of soil or laid as a surface mulch once or twice a year is the ideal rate for vegetable and flower beds.'
      }
    ],
    references: [
      { title: 'University of Maryland Extension: Soil Health (FS-2025-0754)', url: 'https://extension.umd.edu/resource/soil-health-fs-2025-0754' },
      { title: 'South Dakota State University Extension: Organic Gardening \u2014 Soil Management', url: 'https://extension.sdstate.edu/organic-gardening-soil-management' }
    ],
    relatedGuideSlugs: ['mulching-with-organic-waste', 'composting-for-beginners']
  },
  {
    id: 'mulching-waste',
    slug: 'mulching-with-organic-waste',
    title: 'Mulching 101: Upcycling Leaves, Straw, and Cardboard into Protective Mulch',
    excerpt: 'Suppress weeds, cut water loss, and moderate root-zone temperatures using leaves, straw, and cardboard you already have around the home.',
    readingTime: '5 min read',
    category: 'Sustainable Gardening',
    featuredImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Dry brown autumn leaves and garden organic matter used as mulch',
    introduction: 'Mulch is one of the cheapest improvements you can make to a bed: a layer of organic material over the soil surface that holds moisture, suppresses germinating weeds, and buffers temperature swings. Almost all of it can be made from materials your household or street already produces.',
    reviewStatus: 'needs-human-review',
    sections: [
      {
        title: 'Sheet Mulching ("Lasagna Gardening")',
        content: 'Instead of tilling soil and breaking up microbial networks, sheet mulching layers non-glossy corrugated brown cardboard directly over weeds, soaking it thoroughly, and covering it with about 3 inches of compost and shredded autumn leaves. The cardboard smothers existing weeds while decomposing into worm food. Finish with an even 2- to 4-inch mulch layer (the usual extension recommendation) and keep it a hand\u2019s width clear of plant stems and house siding.'
      },
      {
        title: 'Cardboard Preparation Rules',
        content: 'Always strip plastic packaging tape, staples, and glossy color labels from delivery boxes. Plain, unbleached brown corrugated cardboard is usually glued with starch-based adhesive and is a safe mulch material for edible beds. If a box is waxy, plastic-coated, or heavily printed, leave it out \u2014 plain cardboard when in doubt.'
      },
      {
        title: 'Why Mulch Works',
        content: 'A mulch layer cuts evaporation from the soil surface, keeps roots cooler in summer and warmer in winter, and blocks light from germinating weed seeds. Colorado State Extension estimates mulching can reduce irrigation needs by around 50 percent in beds. Beyond water, mulch stops rain from crusting and compacting bare soil, which protects the crumb structure biology depends on.'
      }
    ],
    faqs: [
      {
        question: 'Is colored ink on cardboard safe for garden mulch?',
        answer: 'Most plain cardboard printing uses water- or soy-based inks and is fine for garden mulch. If you are unsure, use plain unprinted brown cardboard, and avoid glossy, wax-coated boxes.'
      }
    ],
    references: [
      { title: 'University of Minnesota Extension: Mulching for soil and garden health', url: 'https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/mulching-for-soil-and-garden-health' },
      { title: 'Colorado State Extension: Mulches for the vegetable garden', url: 'https://extension.colostate.edu/resource/mulches-for-the-vegetable-garden' }
    ],
    relatedGuideSlugs: ['soil-microbiome-organic-gardening', 'green-vs-brown-materials']
  },
  {
    id: 'natural-pest',
    slug: 'natural-pest-management-kitchen-waste',
    title: 'Natural Pest Deterrence Using Kitchen Scraps and Organic Plant Washes',
    excerpt: 'Homemade sprays from garlic, chili, and citrus: what they can realistically do, how to use them safely, and when to reach for proven options instead.',
    readingTime: '6 min read',
    category: 'Organic Pest Control',
    featuredImage: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh orange peels and citrus slices used to prepare a garden wash',
    introduction: 'Kitchen-ingredient sprays are popular, and they are not useless \u2014 but they do less than the internet claims. Insecticidal soaps kill soft-bodied insects on contact; garlic, chili, and citrus brews are mostly folklore riding along with the soap. This guide covers what extension sources actually support, how to spray without harming your plants or beneficial insects, and when to step up to a proven option.',
    reviewStatus: 'needs-human-review',
    sections: [
      {
        title: 'Garlic and Hot Pepper Wash',
        content: 'Blend leftover garlic cloves, onion skins, and hot pepper seeds with 1 quart of warm water and 1 drop of mild castile soap, then strain through cheesecloth. Gardeners have used this wash for decades as a repellent, but the extension evidence is narrower than the claims: insecticidal soaps kill soft-bodied insects like aphids when they are wetted directly, with no residual action afterward (Clemson Cooperative Extension). The garlic and chili may add some repellent effect, but they will not reliably control caterpillars or beetles, and results vary from garden to garden.'
      },
      {
        title: 'Citrus Peel Wash',
        content: 'Citrus oils (d-limonene) can damage soft-bodied insects in concentrated, formulated products, but a kitchen-strength simmered-peel infusion is much weaker and far less consistent. Use it as a light rinse or a scent deterrent for cats around bins \u2014 not as a cure for an aphid outbreak. Simmer peels, cool, strain, and spray in the evening.'
      },
      {
        title: 'Spray Safety and Best Practice',
        content: 'Patch-test any mix on a few leaves and wait a day before treating the whole plant \u2014 soap and oil sprays can burn tender foliage (phytotoxicity), and stronger is not better. Spray early morning or evening, never in hot sun. Keep the mix off your eyes and skin, and wash your hands after handling chili. Never spray open flowers: soaps and oils kill soft-bodied beneficials too, and bees visit blooms throughout the day. And remember these are contact sprays with no residual action \u2014 heavy infestations may need repeated treatment, hand removal, row covers, or a registered product chosen for the specific pest.'
      }
    ],
    faqs: [
      {
        question: 'Will pepper sprays harm beneficial honeybees and ladybugs?',
        answer: 'They can. Soaps and oils kill insects on contact, including soft-bodied beneficials, and spraying open blooms will hit visiting bees. Spray at dawn or dusk, target the undersides of infested leaves, and skip flowering plants while bees are active.'
      },
      {
        question: 'Do these sprays work as well as store-bought insecticides?',
        answer: 'No. Home brews are weaker and variable, and nothing replaces identifying the pest first. Use them for light pressure on soft-bodied insects; for heavy or specific infestations, reach for a labeled product or cultural controls.'
      }
    ],
    references: [
      { title: 'University of California Statewide IPM Program: Soap Sprays as Insecticides', url: 'https://ucanr.edu/sites/default/files/2015-05/212467.pdf' },
      { title: 'Clemson Cooperative Extension: Insecticidal Soaps for Garden Pest Control (HGIC 2154)', url: 'https://hgic.clemson.edu/factsheet/insecticidal-soaps-for-garden-pest-control' },
      { title: 'University of Florida IFAS: Natural products for home garden pest control', url: 'https://ask.ifas.ufl.edu/publication/IN197' }
    ],
    relatedGuideSlugs: ['orange-peels-for-plants', 'onion-peels-for-plants']
  }
];
