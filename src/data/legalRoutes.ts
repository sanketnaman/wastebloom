export type LegalPageType =
  | 'about'
  | 'contact'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'disclaimer'
  | 'cookie-policy'
  | 'advertising-policy'
  | 'editorial-policy';

export interface LegalRouteMeta {
  pageType: LegalPageType;
  path: string;
  title: string;
  description: string;
}

export const LEGAL_ROUTES: LegalRouteMeta[] = [
  {
    pageType: 'about',
    path: '/about',
    title: 'About WasteBloom',
    description:
      "Learn what WasteBloom is: a free educational platform for turning kitchen scraps and household waste into gardening and composting resources, with honest editorial status labels.",
  },
  {
    pageType: 'contact',
    path: '/contact',
    title: 'Contact WasteBloom',
    description:
      'How to contact WasteBloom. There is currently no working contact form or published email address; a verified contact method will be published here once one is configured.',
  },
  {
    pageType: 'privacy-policy',
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description:
      'How WasteBloom handles data: no accounts, no cookies, no analytics, and no stored personal data. Learn exactly what the optional AI tools, newsletter signup, and servers process.',
  },
  {
    pageType: 'terms-and-conditions',
    path: '/terms-and-conditions',
    title: 'Terms & Conditions',
    description:
      'The terms governing your use of WasteBloom, including permitted use, prohibited abuse, calculator and AI output limitations, external links, and warranty disclaimers.',
  },
  {
    pageType: 'disclaimer',
    path: '/disclaimer',
    title: 'Horticultural & Safety Disclaimer',
    description:
      "Important limitations about WasteBloom's gardening guidance: educational use only, soil and climate variability, calculator estimates, AI scanner limits, and no guaranteed results.",
  },
  {
    pageType: 'cookie-policy',
    path: '/cookie-policy',
    title: 'Cookie Policy',
    description:
      'WasteBloom currently sets no cookies and uses no browser storage or analytics scripts. This policy describes the verified current state and how future changes would be disclosed.',
  },
  {
    pageType: 'advertising-policy',
    path: '/advertising-policy',
    title: 'Advertising Policy',
    description:
      'WasteBloom currently runs no advertising and no affiliate links. This policy explains our editorial independence principles and what would apply if advertising were introduced.',
  },
  {
    pageType: 'editorial-policy',
    path: '/editorial-policy',
    title: 'Editorial Policy',
    description:
      'How WasteBloom researches, sources, and reviews content: what source-linked means, what pending human review means, and how corrections and revision dates are handled.',
  },
];

export const LEGAL_PAGE_TYPES: LegalPageType[] = LEGAL_ROUTES.map((route) => route.pageType);

export const getLegalRoute = (pageType: LegalPageType): LegalRouteMeta => {
  const route = LEGAL_ROUTES.find((entry) => entry.pageType === pageType);
  if (!route) throw new Error(`Unknown legal page type: ${pageType}`);
  return route;
};
