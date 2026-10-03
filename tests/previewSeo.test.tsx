import { describe, it, expect, afterEach, vi } from 'vitest';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SEOHead } from '../src/components/SEOHead';
import { isPreviewDeployment } from '../src/config/deployment';

afterEach(() => {
  vi.unstubAllEnvs();
  cleanup();
  document.title = '';
  document.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());
  document.getElementById('page-json-ld')?.remove();
  ['og:image', 'og:url'].forEach((key) => {
    document.querySelector(`meta[property="${key}"]`)?.remove();
  });
  document.querySelector('meta[name="robots"]')?.remove();
});

describe('preview deployment mode', () => {
  it('detects preview only when VITE_PREVIEW is exactly true', () => {
    expect(isPreviewDeployment()).toBe(false);
    vi.stubEnv('VITE_PREVIEW', 'true');
    expect(isPreviewDeployment()).toBe(true);
    vi.unstubAllEnvs();
    vi.stubEnv('VITE_PREVIEW', 'false');
    expect(isPreviewDeployment()).toBe(false);
  });

  it('forces noindex,nofollow and suppresses canonical, og:url, og:image and JSON-LD in preview', () => {
    vi.stubEnv('VITE_PREVIEW', 'true');
    render(
      <SEOHead
        title="Privacy Policy"
        description="How data is handled."
        canonicalPath="/privacy-policy"
        robots="index,follow"
        image="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
        schema={{ '@type': 'WebPage', name: 'Privacy' }}
      />
    );
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe('noindex, nofollow');
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    expect(document.querySelector('meta[property="og:url"]')).toBeNull();
    expect(document.querySelector('meta[property="og:image"]')).toBeNull();
    expect(document.getElementById('page-json-ld')).toBeNull();
  });

  it('keeps production SEO (index,follow, canonical) when preview is off', () => {
    render(
      <SEOHead
        title="Privacy Policy"
        description="How data is handled."
        canonicalPath="/privacy-policy"
        robots="index,follow"
      />
    );
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe('index,follow');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://wastebloom.org/privacy-policy'
    );
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      'https://wastebloom.org/privacy-policy'
    );
  });
});
