// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { wasteGuides } from '../src/data/wasteGuides';
import { compostingGuides } from '../src/data/compostingGuides';
import { gardeningGuides } from '../src/data/gardeningGuides';
import { resolveRelatedGuides, resolveReference } from '../src/data/relatedGuides';

type AnyGuide = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  imageAlt?: string;
  introduction?: string | string[];
  featuredImageCaption?: string;
  bottomLine?: string;
  reviewStatus?: string;
  author?: string;
  reviewedBy?: string;
  references?: Array<string | { title: string; url?: string }>;
  relatedGuideSlugs: string[];
  faqs: { question: string; answer: string }[];
};

const waste = wasteGuides as unknown as AnyGuide[];
const composting = compostingGuides as unknown as AnyGuide[];
const gardening = gardeningGuides as unknown as AnyGuide[];
const all: AnyGuide[] = [...waste, ...composting, ...gardening];

const BANNED_PHRASES = [
  'scientifically proven',
  'clinically proven',
  'expert-tested',
  'expert tested',
  'doctors recommend',
  '100% guaranteed',
  'guaranteed results',
  'peer-reviewed by our team',
  'lab-tested by wastebloom',
];

describe('waste guide editorial metadata', () => {
  it('every waste guide carries intro, meta, caption, bottom line and status', () => {
    for (const guide of waste) {
      expect(guide.metaTitle, `${guide.slug} metaTitle`).toBeTruthy();
      expect(guide.metaDescription, `${guide.slug} metaDescription`).toBeTruthy();
      expect(guide.imageAlt, `${guide.slug} imageAlt`).toBeTruthy();
      expect(guide.reviewStatus, `${guide.slug} reviewStatus`).toBeTruthy();
      const intro = Array.isArray(guide.introduction) ? guide.introduction : [];
      expect(intro.length, `${guide.slug} introduction paragraphs`).toBeGreaterThanOrEqual(2);
      expect(guide.featuredImageCaption, `${guide.slug} featuredImageCaption`).toBeTruthy();
      expect(guide.bottomLine, `${guide.slug} bottomLine`).toBeTruthy();
    }
  });

  it('meta titles and descriptions are unique across every waste guide', () => {
    const titles = waste.map((g) => g.metaTitle);
    const descriptions = waste.map((g) => g.metaDescription);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });
});

describe('review status honesty', () => {
  it('no guide is marked human-reviewed without a human editor', () => {
    for (const guide of all) {
      expect(guide.reviewStatus, `${guide.slug} reviewStatus`).toBeDefined();
      expect(guide.reviewStatus, `${guide.slug} reviewStatus`).toBe('needs-human-review');
      expect(guide.reviewStatus).not.toBe('human-reviewed');
    }
  });

  it('no guide invents an author or reviewer byline', () => {
    for (const guide of all) {
      expect(guide.author, `${guide.slug} author`).toBeUndefined();
      expect(guide.reviewedBy, `${guide.slug} reviewedBy`).toBeUndefined();
    }
  });
});

describe('image and section quality', () => {
  it('every guide has descriptive alt text', () => {
    for (const guide of all) {
      expect(guide.imageAlt, `${guide.slug} imageAlt`).toBeTruthy();
      expect(guide.imageAlt!.length, `${guide.slug} imageAlt too short`).toBeGreaterThan(15);
      expect(guide.imageAlt, `${guide.slug} alt must not just repeat the title`).not.toBe(guide.title);
    }
  });

  it('every gardening guide has an introduction paragraph', () => {
    for (const guide of gardening) {
      expect(guide.introduction, `${guide.slug} introduction`).toBeTruthy();
    }
  });
});

describe('references', () => {
  it('every guide cites at least one source with a valid https URL', () => {
    for (const guide of all) {
      expect(guide.references, `${guide.slug} references`).toBeDefined();
      expect(guide.references!.length, `${guide.slug} references`).toBeGreaterThan(0);
      for (const ref of guide.references!) {
        const resolved = resolveReference(ref);
        expect(resolved.title.length, `${guide.slug} reference title`).toBeGreaterThan(0);
        expect(resolved.url, `${guide.slug} reference url`).toMatch(/^https:\/\//);
      }
    }
  });
});

describe('link integrity', () => {
  it('related slugs resolve and never point at the guide itself', () => {
    for (const guide of all) {
      expect(guide.relatedGuideSlugs.length, `${guide.slug} has related slugs`).toBeGreaterThan(0);
      expect(guide.relatedGuideSlugs, `${guide.slug} self-reference`).not.toContain(guide.slug);
      const resolved = resolveRelatedGuides(guide.relatedGuideSlugs);
      expect(resolved.length, `${guide.slug} unresolved related slugs`).toBe(
        new Set(guide.relatedGuideSlugs).size
      );
    }
  });

  it('slugs are unique within each collection', () => {
    for (const collection of [waste, composting, gardening]) {
      const slugs = collection.map((g) => g.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
      const ids = collection.map((g) => g.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });
});

describe('FAQ quality', () => {
  it('no guide repeats a question within its own FAQ list', () => {
    for (const guide of all) {
      const questions = guide.faqs.map((f) => f.question.toLowerCase().trim());
      expect(new Set(questions).size, `${guide.slug} duplicate FAQ`).toBe(questions.length);
      for (const faq of guide.faqs) {
        expect(faq.answer.trim().length, `${guide.slug} empty FAQ answer`).toBeGreaterThan(10);
      }
    }
  });
});

describe('banned marketing phrases', () => {
  it('guide data contains no unsupported hype phrases', () => {
    const serialized = JSON.stringify({ waste, composting, gardening }).toLowerCase();
    for (const phrase of BANNED_PHRASES) {
      expect(serialized, `banned phrase: ${phrase}`).not.toContain(phrase);
    }
  });
});

describe('title and content consistency', () => {
  it('the 9-mistakes article actually delivers nine mistakes', () => {
    const guide = compostingGuides.find((g) => g.slug === 'composting-mistakes');
    expect(guide).toBeDefined();
    expect(guide!.sections).toHaveLength(9);
    expect(guide!.title).toContain('9 ');
    for (const section of guide!.sections) {
      expect(section.title).toMatch(/^Mistake \d/);
    }
  });
});
