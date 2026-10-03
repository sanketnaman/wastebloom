import { describe, it, expect, afterEach } from 'vitest';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { readFileSync } from 'fs';
import { LegalPage } from '../src/pages/LegalPage';
import { App } from '../src/App';
import { Footer } from '../src/components/Footer';
import { LEGAL_ROUTES, LEGAL_PAGE_TYPES } from '../src/data/legalRoutes';
import { wasteGuides } from '../src/data/wasteGuides';
import { compostingGuides } from '../src/data/compostingGuides';
import { gardeningGuides } from '../src/data/gardeningGuides';

const SITE = 'https://wastebloom.org';
const onNavigate = () => {};

const BANNED_CLAIMS = [
  'Message Received',
  '24-48 business hours',
  '24–48 business hours',
  'jane@example.com',
  'aggregated anonymous traffic',
  'local storage to preserve',
  'preserve your preferences',
  'fact-checking reviews',
  'scientifically proven',
  '100% guaranteed',
  'guaranteed results',
];

const renderLegal = (pageType: (typeof LEGAL_PAGE_TYPES)[number]) => {
  cleanup();
  return render(<LegalPage pageType={pageType} onNavigate={onNavigate} />);
};

afterEach(() => {
  cleanup();
});

describe('legal route metadata', () => {
  it('defines exactly eight routes with unique paths, titles and descriptions', () => {
    expect(LEGAL_ROUTES).toHaveLength(8);
    expect(LEGAL_PAGE_TYPES).toHaveLength(8);
    const paths = LEGAL_ROUTES.map((r) => r.path);
    const titles = LEGAL_ROUTES.map((r) => r.title);
    const descriptions = LEGAL_ROUTES.map((r) => r.description);
    expect(new Set(paths).size).toBe(8);
    expect(new Set(titles).size).toBe(8);
    expect(new Set(descriptions).size).toBe(8);
    for (const route of LEGAL_ROUTES) {
      expect(route.path).toMatch(/^\/[a-z-]+$/);
      expect(route.description.length).toBeGreaterThanOrEqual(80);
    }
  });

  it('titles and descriptions are ASCII-only so they cannot render as mojibake', () => {
    for (const route of LEGAL_ROUTES) {
      expect(route.title, `${route.pageType} title`).toMatch(/^[\x00-\x7F]+$/);
      expect(route.description, `${route.pageType} description`).toMatch(/^[\x00-\x7F]+$/);
    }
  });

  it('every legal page sets a unique document title, description, canonical and robots tag', () => {
    const seenTitles = new Set<string>();
    const seenDescriptions = new Set<string>();
    for (const route of LEGAL_ROUTES) {
      const { container } = renderLegal(route.pageType);
      expect(container.querySelector('h1')?.textContent).toBe(route.title);
      expect(document.title.length).toBeGreaterThan(0);
      expect(seenTitles.has(document.title), `duplicate document title: ${document.title}`).toBe(false);
      seenTitles.add(document.title);
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
      expect(description).toBe(route.description);
      expect(seenDescriptions.has(description!)).toBe(false);
      seenDescriptions.add(description!);
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      expect(canonical).toBe(`${SITE}${route.path}`);
      expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(canonical);
      expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe('index,follow');
      expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toContain(route.title);
    }
    expect(seenTitles.size).toBe(8);
    expect(seenDescriptions.size).toBe(8);
  });

  it('routes all eight paths through the App dispatcher', () => {
    for (const route of LEGAL_ROUTES) {
      cleanup();
      window.history.pushState({}, '', route.path);
      const { container } = render(<App />);
      expect(container.querySelector('h1')?.textContent, route.path).toBe(route.title);
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(`${SITE}${route.path}`);
    }
    window.history.pushState({}, '', '/');
  });
});

describe('footer and sitemap reachability', () => {
  it('footer links point at all eight legal routes', () => {
    const { container } = render(<Footer onNavigate={onNavigate} />);
    const hrefs = Array.from(container.querySelectorAll('a[href]')).map((a) => a.getAttribute('href'));
    for (const route of LEGAL_ROUTES) {
      expect(hrefs, `footer missing ${route.path}`).toContain(route.path);
    }
  });
});

describe('contact page accuracy', () => {
  it('does not present a fake working form or delivery promise', () => {
    const { container } = renderLegal('contact');
    const text = container.textContent ?? '';
    expect(container.querySelector('form')).toBeNull();
    expect(text).toContain('not operational');
    expect(text).not.toContain('Message Received');
    expect(text).not.toContain('business hours');
    expect(text).not.toMatch(/[\w.+-]+@[\w-]+\.[a-z]{2,}/i);
    expect(text).toContain('no working contact form');
  });

  it('publishes no invented email address anywhere on the page', () => {
    const { container } = renderLegal('contact');
    const text = (container.textContent ?? '').toLowerCase();
    expect(text).not.toContain('@example.com');
    expect(text).not.toContain('@wastebloom');
    expect(text).not.toContain('@gmail');
    expect(text).not.toContain('@outlook');
  });
});

describe('cookie policy accuracy', () => {
  it('describes the verified no-cookie, no-storage, no-analytics state', () => {
    const { container } = renderLegal('cookie-policy');
    const text = container.textContent ?? '';
    expect(text).toContain('does not set any cookies');
    expect(text).toContain('no localStorage');
    expect(text).toContain('no sessionStorage');
    expect(text).toContain('no analytics scripts are installed');
    expect(text).toContain('not');
    expect(text).toContain('remembered');
  });

  it('does not repeat the old false storage or analytics claims', () => {
    const { container } = renderLegal('cookie-policy');
    const text = container.textContent ?? '';
    expect(text).not.toContain('local storage to preserve');
    expect(text).not.toContain('aggregated anonymous traffic');
    expect(text).not.toContain('standard cookies');
  });
});

describe('advertising policy accuracy', () => {
  it('states that no advertising is active and does not claim AdSense participation', () => {
    const { container } = renderLegal('advertising-policy');
    const text = container.textContent ?? '';
    expect(text).toContain('displays no advertising');
    expect(text).toContain('No advertising network');
    expect(text).toContain('no affiliate links');
    expect(text).not.toMatch(/we (display|serve) ads/);
    expect(text).not.toContain('proud publisher');
    expect(text).not.toContain('ads are running');
  });

  it('documents the certified CMP requirement with official Google sources', () => {
    const { container } = renderLegal('advertising-policy');
    const links = Array.from(container.querySelectorAll('a[href^="https://"]')).map((a) =>
      a.getAttribute('href')
    );
    expect(links).toContain('https://support.google.com/adsense/answer/13554116');
    expect(links).toContain('https://support.google.com/adsense/answer/7670013');
  });
});

describe('editorial policy accuracy', () => {
  it('explains source-linked vs human-reviewed honestly', () => {
    const { container } = renderLegal('editorial-policy');
    const text = container.textContent ?? '';
    expect(text).toContain('None of our guides are marked human-reviewed yet');
    expect(text).toContain('pending review');
    expect(text).toContain('DIY project articles currently do not carry source references');
    expect(text).toContain('revision date is shown on the article page');
    expect(text).toContain('Not every article displays a revision date');
    expect(text).not.toMatch(/(?<!not )every article (shows|displays|has) a revision date/i);
    expect(text).not.toContain('written by people');
    expect(text).not.toContain('every article has been verified');
  });
});

describe('about page accuracy', () => {
  it('does not claim verified or tested recommendations', () => {
    const { container } = renderLegal('about');
    const text = container.textContent ?? '';
    expect(text).toContain('free educational website');
    expect(text).toContain('visible editorial status label');
    expect(text).not.toContain('fact-checked, tested');
    expect(text).not.toContain('all recommendations are verified');
    expect(text).not.toMatch(/hundreds of pounds/);
  });
});

describe('no false claims across all eight pages', () => {
  it('no page carries banned false or hype claims', () => {
    for (const route of LEGAL_ROUTES) {
      const { container } = renderLegal(route.pageType);
      const text = container.textContent ?? '';
      for (const claim of BANNED_CLAIMS) {
        expect(text, `${route.pageType} contains banned claim: ${claim}`).not.toContain(claim);
      }
    }
  });

  it('index.html declares UTF-8, uses an ASCII title, and ships no analytics or ad scripts', () => {
    const html = readFileSync(`${process.cwd()}/index.html`, 'utf-8');
    expect(html).toContain('<meta charset="UTF-8"');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? '';
    expect(title).toBe('WasteBloom - Turn Everyday Waste Into Something Beautiful');
    expect(title).toMatch(/^[\x00-\x7F]+$/);
    for (const marker of [
      'googletagmanager',
      'gtag(',
      'adsbygoogle',
      'googlesyndication',
      'plausible',
      'matomo',
      'fbq(',
    ]) {
      expect(html, `index.html must not contain ${marker}`).not.toContain(marker);
    }
  });
});

describe('review status regression', () => {
  it('all 19 guides remain needs-human-review', () => {
    const all = [...wasteGuides, ...compostingGuides, ...gardeningGuides] as unknown as Array<{
      slug: string;
      reviewStatus?: string;
    }>;
    expect(all).toHaveLength(19);
    for (const guide of all) {
      expect(guide.reviewStatus, guide.slug).toBe('needs-human-review');
    }
  });
});
