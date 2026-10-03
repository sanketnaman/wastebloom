import { wasteGuides } from './wasteGuides.ts';
import { gardeningGuides } from './gardeningGuides.ts';
import { compostingGuides } from './compostingGuides.ts';
import { diyProjects } from './diyProjects.ts';
import { SITE_URL } from '../config/site.ts';

export const DEFAULT_LASTMOD = '2026-10-03';

export type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: ChangeFreq;
  priority: string;
}

const STATIC_PAGES: Array<{ path: string; changefreq: ChangeFreq; priority: string }> = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/waste-to-garden', changefreq: 'weekly', priority: '0.8' },
  { path: '/composting', changefreq: 'weekly', priority: '0.8' },
  { path: '/diy-garden-projects', changefreq: 'weekly', priority: '0.8' },
  { path: '/gardening-guides', changefreq: 'weekly', priority: '0.8' },
  { path: '/tools', changefreq: 'weekly', priority: '0.7' },
  { path: '/tools/compost-calculator', changefreq: 'monthly', priority: '0.8' },
  { path: '/tools/brown-green-calculator', changefreq: 'monthly', priority: '0.8' },
  { path: '/tools/soil-amendment-calculator', changefreq: 'monthly', priority: '0.8' },
  { path: '/tools/potting-mix-calculator', changefreq: 'monthly', priority: '0.8' },
  { path: '/waste-scanner', changefreq: 'weekly', priority: '0.6' },
  { path: '/about', changefreq: 'monthly', priority: '0.5' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/editorial-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/advertising-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' },
  { path: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
];

const priorityFor = (path: string): string => {
  if (path === '') return '1.0';
  if (path.startsWith('/waste-to-garden/') || path.startsWith('/tools/')) return '0.8';
  if (path.startsWith('/composting/') || path.startsWith('/diy-garden-projects/') || path.startsWith('/gardening-guides/')) return '0.7';
  return '0.6';
};

export const getSitemapEntries = (): SitemapEntry[] => {
  const entries: SitemapEntry[] = STATIC_PAGES.map((page) => ({
    path: page.path,
    lastmod: DEFAULT_LASTMOD,
    changefreq: page.changefreq,
    priority: page.priority,
  }));

  const addArticle = (path: string, updatedAt?: string, publishedAt?: string) => {
    entries.push({
      path,
      lastmod: updatedAt ?? publishedAt ?? DEFAULT_LASTMOD,
      changefreq: 'monthly',
      priority: priorityFor(path),
    });
  };

  for (const guide of wasteGuides) addArticle(`/waste-to-garden/${guide.slug}`, guide.updatedAt, guide.publishedAt);
  for (const guide of compostingGuides) addArticle(`/composting/${guide.slug}`);
  for (const project of diyProjects) addArticle(`/diy-garden-projects/${project.slug}`);
  for (const guide of gardeningGuides) addArticle(`/gardening-guides/${guide.slug}`);

  return entries;
};

export const buildSitemapXml = (entries: SitemapEntry[] = getSitemapEntries()): string => {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${SITE_URL}${entry.path}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};
