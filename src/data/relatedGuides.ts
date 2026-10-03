import type { GuideReference } from '../types';
import { wasteGuides } from './wasteGuides';
import { gardeningGuides } from './gardeningGuides';
import { compostingGuides } from './compostingGuides';
import { diyProjects } from './diyProjects';

export interface RelatedGuideLink {
  slug: string;
  title: string;
  /** Internal route path. */
  path: string;
  category: string;
  featuredImage?: string;
  imageAlt?: string;
}

const pathForSlug = (slug: string): { path: string; category: string; title: string; featuredImage?: string; imageAlt?: string } | null => {
  const waste = wasteGuides.find((g) => g.slug === slug);
  if (waste) {
    return { path: `/waste-to-garden/${waste.slug}`, category: waste.category, title: waste.shortTitle, featuredImage: waste.featuredImage, imageAlt: waste.imageAlt };
  }
  const garden = gardeningGuides.find((g) => g.slug === slug);
  if (garden) {
    return { path: `/gardening-guides/${garden.slug}`, category: garden.category, title: garden.title };
  }
  const compost = compostingGuides.find((g) => g.slug === slug);
  if (compost) {
    return { path: `/composting/${compost.slug}`, category: compost.category, title: compost.title, featuredImage: compost.featuredImage, imageAlt: compost.imageAlt };
  }
  const diy = diyProjects.find((p) => p.slug === slug);
  if (diy) {
    return { path: `/diy-garden-projects/${diy.slug}`, category: `DIY · ${diy.difficulty}`, title: diy.title, featuredImage: diy.featuredImage, imageAlt: diy.imageAlt };
  }
  return null;
};

/**
 * Resolves related guide slugs across all four collections so a waste article
 * can link to composting, gardening and DIY guides (and vice versa).
 */
export const resolveRelatedGuides = (slugs: string[]): RelatedGuideLink[] => {
  const seen = new Set<string>();
  const links: RelatedGuideLink[] = [];
  for (const slug of slugs) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const resolved = pathForSlug(slug);
    if (resolved) links.push({ slug, ...resolved });
  }
  return links;
};

export const resolveReference = (ref: string | GuideReference): { title: string; url?: string } =>
  typeof ref === 'string' ? { title: ref } : ref;
