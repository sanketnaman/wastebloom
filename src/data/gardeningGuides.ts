import { GardeningGuideItem } from '../types';

export const gardeningGuides: GardeningGuideItem[] = [
  {
    id: 'soil-microbiome',
    slug: 'soil-microbiome-organic-gardening',
    title: 'Unlocking the Soil Food Web: How Organic Waste Feeds Soil Microbes',
    excerpt: 'Healthy soil is not an inert sponge—it is a teeming jungle of bacteria, protozoa, mycorrhizal fungi, and nematodes. Learn how decomposed kitchen scraps fuel plant immunity.',
    readingTime: '6 min read',
    category: 'Soil Health',
    featuredImage: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
    sections: [
      {
        title: 'The Secret Underground Economy',
        content: 'Plants do not feed directly on raw chemical fertilizers; they trade photosynthesized sugars (exudates) through their roots with billions of bacteria and mycorrhizal fungi. In return, these soil microbes digest organic kitchen waste, unlocking chelated nitrogen, phosphorus, and zinc that the plant can absorb easily.'
      },
      {
        title: 'Why Chemical Fertilizers Starve the Soil',
        content: 'Synthetic salt-based fertilizers flood plant roots with instant ions, shutting down the plant’s natural exudate pump. Over time, beneficial mycorrhizal fungi starve, earthworms depart, and soil structure collapses into compacted dust. Adding finished compost restores this vibrant microbial community.'
      }
    ],
    faqs: [
      {
        question: 'How much compost should I add to my soil each spring?',
        answer: 'A 1- to 2-inch top-dress layer of finished compost gently worked into the top 3 inches of soil or laid as a surface mulch once or twice a year is the ideal rate for vegetable and flower beds.'
      }
    ],
    relatedGuideSlugs: ['mulching-with-organic-waste', 'composting-for-beginners']
  },
  {
    id: 'mulching-waste',
    slug: 'mulching-with-organic-waste',
    title: 'Mulching 101: Upcycling Leaves, Straw, and Cardboard into Protective Mulch',
    excerpt: 'Suppress weeds, conserve up to 70% of soil moisture, and moderate summer root temperatures using discarded materials you already have around the home.',
    readingTime: '5 min read',
    category: 'Sustainable Gardening',
    featuredImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    sections: [
      {
        title: 'Sheet Mulching ("Lasagna Gardening")',
        content: 'Instead of tilling soil and breaking up microbial networks, sheet mulching layers non-glossy corrugated brown cardboard directly over weeds, soaking it thoroughly, and covering it with 3 inches of compost and shredded autumn leaves. The cardboard suffocates existing weeds while decomposing into rich worm food.'
      },
      {
        title: 'Cardboard Preparation Rules',
        content: 'Always strip plastic packaging tape, plastic staples, and glossy color labels from delivery boxes. Plain unbleached brown corrugated cardboard is held together by cornstarch adhesives and is 100% non-toxic for edible garden beds.'
      }
    ],
    faqs: [
      {
        question: 'Is colored ink on cardboard safe for garden mulch?',
        answer: 'Modern non-glossy cardboard boxes almost exclusively use biodegradable, non-toxic water- or soy-based inks. Avoid glossy, slick cardboard (like cereal or electronics boxes) which contain plastic wax coatings.'
      }
    ],
    relatedGuideSlugs: ['soil-microbiome-organic-gardening', 'green-vs-brown-materials']
  },
  {
    id: 'natural-pest',
    slug: 'natural-pest-management-kitchen-waste',
    title: 'Natural Pest Deterrence Using Kitchen Scraps and Organic Plant Washes',
    excerpt: 'Repel aphids, spider mites, cabbage loopers, and rodents using citrus oils, garlic, and hot pepper scraps without toxic synthetic pesticides.',
    readingTime: '6 min read',
    category: 'Organic Pest Control',
    featuredImage: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=80',
    sections: [
      {
        title: 'Garlic and Hot Pepper Barrier Spray',
        content: 'Blend leftover garlic cloves, onion peels, and hot pepper seeds with 1 quart of warm water and 1 drop of gentle castile soap. Strain through cheesecloth. Capsaicin and allicin create an invisible deterrent that repels leaf-chewing caterpillars, beetles, and aphids.'
      },
      {
        title: 'Citrus d-Limonene Soil Spray',
        content: 'Orange and lemon rinds contain d-limonene, which dissolves the waxy protective cuticle of soft-bodied garden pests like aphids and scale insects. Simmer peels in water, cool, and spray directly on pest clusters in early morning.'
      }
    ],
    faqs: [
      {
        question: 'Will pepper sprays harm beneficial honeybees and ladybugs?',
        answer: 'Spray in the early dawn or twilight when bees and ladybugs are not actively flying, and target the undersides of infested leaves rather than open flower blooms.'
      }
    ],
    relatedGuideSlugs: ['orange-peels-for-plants', 'onion-peels-for-plants']
  }
];
