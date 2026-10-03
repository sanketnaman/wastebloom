// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { getSitemapEntries, buildSitemapXml, DEFAULT_LASTMOD } from '../src/data/sitemap';
import { LEGAL_ROUTES } from '../src/data/legalRoutes';

describe('sitemap', () => {
  const entries = getSitemapEntries();
  const paths = entries.map((e) => e.path);

  it('includes the coffee grounds and eggshells article routes', () => {
    expect(paths).toContain('/waste-to-garden/coffee-grounds-for-plants');
    expect(paths).toContain('/waste-to-garden/eggshells-for-plants');
  });

  it('includes the three gardening article routes that were previously missing', () => {
    expect(paths).toContain('/gardening-guides/soil-microbiome-organic-gardening');
    expect(paths).toContain('/gardening-guides/mulching-with-organic-waste');
    expect(paths).toContain('/gardening-guides/natural-pest-management-kitchen-waste');
  });

  it('includes only the four real tools', () => {
    const toolPaths = paths.filter((p) => p.startsWith('/tools/'));
    expect(toolPaths.sort()).toEqual([
      '/tools/brown-green-calculator',
      '/tools/compost-calculator',
      '/tools/potting-mix-calculator',
      '/tools/soil-amendment-calculator',
    ]);
  });

  it('uses per-article lastmod dates instead of fabricating today for everything', () => {
    const coffee = entries.find((e) => e.path === '/waste-to-garden/coffee-grounds-for-plants');
    expect(coffee?.lastmod).toBe('2026-10-03');
    const staticHome = entries.find((e) => e.path === '');
    expect(staticHome?.lastmod).toBe(DEFAULT_LASTMOD);
  });

  it('has no duplicate routes', () => {
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('includes each of the eight legal routes exactly once', () => {
    for (const route of LEGAL_ROUTES) {
      expect(paths, `sitemap missing ${route.path}`).toContain(route.path);
    }
    const legalHits = paths.filter((p) => LEGAL_ROUTES.some((r) => r.path === p));
    expect(legalHits.length).toBe(LEGAL_ROUTES.length);
  });

  it('builds valid XML pointing at the canonical site origin', () => {
    const xml = buildSitemapXml(entries);
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml).toContain('https://wastebloom.org/waste-to-garden/coffee-grounds-for-plants');
    expect(xml).toContain('<lastmod>2026-10-03</lastmod>');
    expect((xml.match(/<url>/g) ?? []).length).toBe(entries.length);
  });
});
