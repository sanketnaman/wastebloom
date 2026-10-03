export type ReviewStatus = 'needs-human-review' | 'human-reviewed';

export interface GuideReference {
  title: string;
  url?: string;
}

export type GuideBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'numbered'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'note'; text: string };

export interface GuideContentSection {
  title: string;
  blocks: GuideBlock[];
}

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
  /** Opening introduction rendered above the Quick Answer box. */
  introduction?: string[];
  /** Caption shown under the featured image. */
  featuredImageCaption?: string;
  /** Unique SEO title. Falls back to `title` when absent. */
  metaTitle?: string;
  /** Unique SEO/meta description. Falls back to `excerpt` when absent. */
  metaDescription?: string;
  publishedAt?: string;
  updatedAt?: string;
  reviewStatus?: ReviewStatus;
  author?: string;
  reviewedBy?: string;
  /** Source sections that do not map onto the standard article blocks. */
  additionalSections?: GuideContentSection[];
  /** Closing takeaway shown as a highlighted callout. */
  bottomLine?: string;
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
  references: Array<string | GuideReference>;
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
  reviewStatus?: ReviewStatus;
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
  references?: Array<string | GuideReference>;
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
  imageAlt: string;
  introduction?: string;
  reviewStatus?: ReviewStatus;
  sections: {
    title: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  references?: Array<string | GuideReference>;
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
