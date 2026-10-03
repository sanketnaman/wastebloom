import { describe, it, expect, afterEach } from 'vitest';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SEOHead } from '../src/components/SEOHead';

afterEach(() => {
  cleanup();
  document.title = '';
  document.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());
  document.getElementById('page-json-ld')?.remove();
  ['og:image', 'og:url', 'article:published_time', 'article:modified_time'].forEach((key) => {
    document.querySelector(`meta[property="${key}"]`)?.remove();
  });
});

describe('SEOHead', () => {
  it('sets the document title with the site suffix', () => {
    render(<SEOHead title="Coffee Grounds for Plants" description="Learn what research says." />);
    expect(document.title).toBe('Coffee Grounds for Plants - WasteBloom');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
      'Learn what research says.'
    );
  });

  it('writes and removes the robots directive', () => {
    const { rerender } = render(
      <SEOHead title="Privacy Policy" description="How data is handled." robots="index,follow" />
    );
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe('index,follow');
    rerender(<SEOHead title="Coffee Grounds for Plants" description="desc" />);
    expect(document.querySelector('meta[name="robots"]')).toBeNull();
  });

  it('writes an absolute canonical URL', () => {
    render(
      <SEOHead
        title="Eggshells for Plants"
        description="How to use eggshells."
        canonicalPath="/waste-to-garden/eggshells-for-plants"
      />
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://wastebloom.org/waste-to-garden/eggshells-for-plants'
    );
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      'https://wastebloom.org/waste-to-garden/eggshells-for-plants'
    );
  });

  it('normalizes the Open Graph image to an absolute URL and sets article timestamps', () => {
    render(
      <SEOHead
        title="Coffee Grounds for Plants"
        description="desc"
        ogType="article"
        image="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
        publishedTime="2026-10-03"
        modifiedTime="2026-10-03"
      />
    );
    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? '';
    expect(ogImage.startsWith('https://')).toBe(true);
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe('article');
    expect(document.querySelector('meta[property="article:published_time"]')?.getAttribute('content')).toBe(
      '2026-10-03'
    );
  });

  it('serializes array-form JSON-LD schemas (Article + FAQPage + BreadcrumbList)', () => {
    const schema = [
      { '@type': 'Article', headline: 'Coffee Grounds for Plants' },
      { '@type': 'FAQPage', mainEntity: [] },
      { '@type': 'BreadcrumbList', itemListElement: [] },
    ];
    render(<SEOHead title="Coffee Grounds for Plants" description="desc" schema={schema} />);
    const script = document.getElementById('page-json-ld');
    expect(script).not.toBeNull();
    const parsed = JSON.parse(script!.textContent ?? '[]');
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.map((entry: { '@type': string }) => entry['@type'])).toEqual([
      'Article',
      'FAQPage',
      'BreadcrumbList',
    ]);
  });
});
