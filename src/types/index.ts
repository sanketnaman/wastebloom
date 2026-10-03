export interface WasteGuideItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  scientificName?: string;
  excerpt: string;
  readingTime: string;
  category: 'Kitchen Scraps' | 'Fruit & Vegetable' | 'Garden Waste' | 'Household Waste';
  suitability: 'Suitable' | 'Suitable with preparation' | 'Not recommended';
  cToNRatio: string;
  type: 'Green (Nitrogen)' | 'Brown (Carbon)' | 'Mineral / Neutral';
  featuredImage: string;
  imageAlt: string;
  quickAnswer: string;
  directSoilUsage: {
    allowed: boolean;
    explanation: string;
  };
  compostSuitability: {
    recommended: boolean;
    speed: 'Fast (2-4 weeks)' | 'Moderate (1-3 months)' | 'Slow (3-6+ months)';
    details: string;
  };
  preparationSteps: string[];
  howToUseSteps: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  limitations: string[];
  mythsBusted: {
    myth: string;
    reality: string;
  }[];
  commonMistakes: string[];
  safetyPrecautions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  references: string[];
  relatedGuideSlugs: string[];
}

export interface CompostingGuideItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  category: 'Fundamentals' | 'Troubleshooting' | 'Techniques' | 'Indoor & Outdoor';
  featuredImage: string;
  imageAlt: string;
  introduction: string;
  keyTakeaways: string[];
  sections: {
    title: string;
    content: string;
    tips?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedGuideSlugs: string[];
}

export interface DIYProjectItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  timeEstimate: string;
  costEstimate: string;
  materialsNeeded: string[];
  toolsNeeded: string[];
  featuredImage: string;
  imageAlt: string;
  steps: {
    stepNumber: number;
    title: string;
    instruction: string;
    proTip?: string;
  }[];
  careMaintenance: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedGuideSlugs: string[];
}

export interface GardeningGuideItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  category: 'Soil Health' | 'Organic Pest Control' | 'Sustainable Gardening';
  featuredImage: string;
  sections: {
    title: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedGuideSlugs: string[];
}

export interface AIScanResult {
  identifiedMaterial: string;
  confidence: 'High' | 'Medium' | 'Low';
  possibleAlternative?: string;
  compostSuitability: 'Suitable' | 'Suitable with preparation' | 'Not recommended';
  gardeningApplications: string[];
  preparation: string[];
  usageGuidance: string;
  precautions: string[];
  mythsBusted?: string;
  cToNRatio?: string;
  relatedGuides?: string[];
}
