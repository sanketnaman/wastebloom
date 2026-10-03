/** Canonical site origin used for canonical URLs, Open Graph and the sitemap. */
export const SITE_URL = 'https://wastebloom.org';

export const SITE_NAME = 'WasteBloom';

export const absoluteUrl = (path: string): string => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};
