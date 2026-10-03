// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { wasteGuides } from '../src/data/wasteGuides';
import { gardeningGuides } from '../src/data/gardeningGuides';
import { compostingGuides } from '../src/data/compostingGuides';
import { diyProjects } from '../src/data/diyProjects';
import { resolveRelatedGuides } from '../src/data/relatedGuides';

describe('integrated MDX articles', () => {
  const coffee = wasteGuides.find((g) => g.slug === 'coffee-grounds-for-plants');
  const eggshells = wasteGuides.find((g) => g.slug === 'eggshells-for-plants');

  it('has both article routes available in the waste guide data', () => {
    expect(coffee).toBeDefined();
    expect(eggshells).toBeDefined();
  });

  it('marks both new articles as needing human review', () => {
    expect(coffee?.reviewStatus).toBe('needs-human-review');
    expect(eggshells?.reviewStatus).toBe('needs-human-review');
  });

  it('carries unique meta titles and descriptions', () => {
    expect(coffee?.metaTitle).toBeTruthy();
    expect(eggshells?.metaTitle).toBeTruthy();
    expect(coffee?.metaDescription).toBeTruthy();
    expect(eggshells?.metaDescription).toBeTruthy();
    expect(coffee?.metaTitle).not.toBe(eggshells?.metaTitle);
  });

  it('includes introduction, bottom line and additional sections', () => {
    for (const guide of [coffee, eggshells]) {
      expect(guide?.introduction?.length).toBeGreaterThan(0);
      expect(guide?.bottomLine).toBeTruthy();
      expect(guide?.additionalSections?.length).toBeGreaterThan(0);
    }
  });

  it('links related guides across collections', () => {
    expect(eggshells?.relatedGuideSlugs).toContain('coffee-grounds-for-plants');
    const resolved = resolveRelatedGuides(eggshells!.relatedGuideSlugs);
    const paths = resolved.map((r) => r.path);
    expect(paths).toContain('/waste-to-garden/coffee-grounds-for-plants');
    expect(paths.some((p) => p.startsWith('/composting/'))).toBe(true);
    expect(paths.some((p) => p.startsWith('/diy-garden-projects/'))).toBe(true);
  });

  it('has no unresolved related slugs for the new articles', () => {
    for (const guide of [coffee, eggshells]) {
      const resolved = resolveRelatedGuides(guide!.relatedGuideSlugs);
      expect(resolved).toHaveLength(guide!.relatedGuideSlugs.length);
    }
  });
});

describe('gardening guide routes', () => {
  it('exposes all three gardening slugs used by the sitemap', () => {
    const slugs = gardeningGuides.map((g) => g.slug);
    expect(slugs).toContain('soil-microbiome-organic-gardening');
    expect(slugs).toContain('mulching-with-organic-waste');
    expect(slugs).toContain('natural-pest-management-kitchen-waste');
  });
});

describe('all related slugs across every collection resolve', () => {
  it('resolves every relatedGuideSlugs entry', () => {
    const allSlugs = [
      ...wasteGuides.map((g) => g.relatedGuideSlugs),
      ...gardeningGuides.map((g) => g.relatedGuideSlugs),
      ...compostingGuides.map((g) => g.relatedGuideSlugs),
      ...diyProjects.map((g) => g.relatedGuideSlugs),
    ].flat();
    const resolved = resolveRelatedGuides(allSlugs);
    expect(resolved.length).toBe(new Set(allSlugs).size);
  });
});
