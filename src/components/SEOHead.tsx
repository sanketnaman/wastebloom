import React, { useEffect } from 'react';
import { absoluteUrl } from '../config/site';

interface SEOHeadProps {
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  /** Route path (e.g. `/waste-to-garden/x`) or absolute URL for the canonical link. */
  canonicalPath?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  robots?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogType = 'website',
  canonicalPath,
  image,
  publishedTime,
  modifiedTime,
  robots,
  schema,
}) => {
  useEffect(() => {
    const fullTitle = title.includes('WasteBloom') ? title : `${title} - WasteBloom`;
    document.title = fullTitle;

    upsertMeta('name', 'description', description);
    if (robots) upsertMeta('name', 'robots', robots);
    else document.querySelector('meta[name="robots"]')?.remove();

    const canonical = canonicalPath ? absoluteUrl(canonicalPath) : null;
    const ogImage = image ? absoluteUrl(image) : null;

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType);
    if (canonical) upsertMeta('property', 'og:url', canonical);
    if (ogImage) upsertMeta('property', 'og:image', ogImage);
    upsertMeta('name', 'twitter:card', ogImage ? 'summary_large_image' : 'summary');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    if (canonical) upsertLink('canonical', canonical);

    if (ogType === 'article' && publishedTime) upsertMeta('property', 'article:published_time', publishedTime);
    if (ogType === 'article' && modifiedTime) upsertMeta('property', 'article:modified_time', modifiedTime);

    let jsonLdScript = document.getElementById('page-json-ld');
    if (schema) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'page-json-ld';
        jsonLdScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(schema);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }
  }, [title, description, ogType, canonicalPath, image, publishedTime, modifiedTime, robots, schema]);

  return null;
};
