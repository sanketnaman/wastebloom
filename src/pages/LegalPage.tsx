import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { getLegalRoute } from '../data/legalRoutes';
import type { LegalPageType } from '../data/legalRoutes';

interface LegalPageProps {
  pageType: LegalPageType;
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ pageType, onNavigate }) => {
  const meta = getLegalRoute(pageType);

  const getPageContent = () => {
    switch (pageType) {
      case 'about':
        return {
          subtitle: 'Our mission: turn everyday waste into something beautiful.',
          content: (
            <div className="space-y-6 text-sm text-[#26332D] leading-relaxed">
              <p>
                <strong>WasteBloom</strong> is a free educational website about reusing everyday household
                organic waste - kitchen scraps, cardboard, and yard clippings - in home gardens and
                compost systems. It does not sell products or gardening services; it publishes guides,
                free calculators, and clearly labeled optional AI tools.
              </p>
              <h3 className="text-lg font-bold text-[#183D32]">Our Vision</h3>
              <p>
                Too much gardening advice online spreads as unverified folklore: claims repeat until they
                look like facts, usually with no source attached. We built WasteBloom to do the opposite -
                publish practical methods, show where they come from, and say plainly when something is
                still awaiting review.
              </p>
              <p>
                We publish source-linked methods for transforming kitchen scraps, corrugated cardboard, and
                yard clippings into living soil, frequently citing cooperative university extensions. Every
                guide carries a visible editorial status label, so you always know whether a human editor
                has verified it yet.
              </p>
              <h3 className="text-lg font-bold text-[#183D32]">What You Will Find Here</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Guides:</strong> step-by-step articles on composting and waste reuse, each with a
                  review status and, for our waste, composting, and gardening guides, links to the sources
                  behind their claims.
                </li>
                <li>
                  <strong>Free tools:</strong> deterministic calculators for container volume, C:N balancing,
                  potting mixes, and soil amendments. The same math every time, and none of it collects
                  personal data.
                </li>
                <li>
                  <strong>Optional AI tools:</strong> a waste-image scanner and a compost troubleshooting
                  helper. Both are labeled in the interface, both only run when an AI model is configured on
                  the server, and neither is part of the published editorial content.
                </li>
              </ul>
              <h3 className="text-lg font-bold text-[#183D32]">Our Core Principles</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Honest labeling:</strong> unreviewed guides are marked as drafts. We do not present
                  pending material as fact-checked or expert-reviewed.
                </li>
                <li>
                  <strong>Sources over folklore:</strong> we link the extensions and studies behind our
                  claims wherever a guide carries references.
                </li>
                <li>
                  <strong>Zero-waste upcycling:</strong> we prioritize materials you already have before
                  suggesting anything to buy.
                </li>
              </ul>
              <p>
                WasteBloom is an educational platform. It does not provide personalized horticultural advice
                or any professional services - see our <a href="/disclaimer" onClick={(e) => { e.preventDefault(); onNavigate('/disclaimer'); }} className="text-[#387A53] hover:underline">Disclaimer</a> and{' '}
                <a href="/editorial-policy" onClick={(e) => { e.preventDefault(); onNavigate('/editorial-policy'); }} className="text-[#387A53] hover:underline">Editorial Policy</a>{' '}
                for how our content is researched and reviewed.
              </p>
            </div>
          ),
        };

      case 'contact':
        return {
          subtitle: 'How to reach WasteBloom right now.',
          content: (
            <div className="space-y-6 text-sm text-[#26332D] leading-relaxed">
              <p>
                We would like to hear from gardeners who find a mistake in a guide or know of a source we
                should cite - but we would rather be straightforward than reassuring.
              </p>
              <div className="p-6 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD]">
                <strong className="block text-sm font-bold text-[#183D32] mb-2">
                  The contact form on this site is not operational.
                </strong>
                <p>
                  WasteBloom currently has no working contact form and no published email address. Any
                  contact form shown on this site would not reach anyone, because no message-delivery system
                  is configured behind one - so no form is provided here instead of collecting messages that
                  go nowhere. Nothing you might previously have typed into a form on this page was ever
                  transmitted or stored by the site.
                </p>
              </div>
              <p>
                A verified contact method - such as a monitored email address - will be published on this
                page once the site owner configures and confirms one.
              </p>
              <p>
                In the meantime, every waste, composting, and gardening guide lists the sources behind its
                claims, so you can consult the original material directly. Our{' '}
                <a href="/editorial-policy" onClick={(e) => { e.preventDefault(); onNavigate('/editorial-policy'); }} className="text-[#387A53] hover:underline">Editorial Policy</a>{' '}
                explains how corrections will be handled once a reporting channel exists.
              </p>
            </div>
          ),
        };

      case 'editorial-policy':
        return {
          subtitle: 'How we research, cite, and maintain our gardening knowledge.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                At WasteBloom, our primary commitment is accuracy. Misapplying organic materials - such as
                piling high-nitrogen greens against tree trunks or applying raw eggshells with residual
                bacteria to salad greens - can cause plant disease or food-safety hazards, so we take the
                difference between a sourced claim and an unverified one seriously.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Source-Linked Is Not the Same as Reviewed</h3>
              <p>These two things are often conflated online, so we keep them separate:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Source-linked research:</strong> the extension bulletin, study, or agency page
                  behind a claim is linked from the article so you can check it yourself. Every waste,
                  composting, and gardening guide on this site links its sources. Our DIY project articles
                  currently do not carry source references - they are presented as project ideas, not
                  researched guidance.
                </li>
                <li>
                  <strong>Human-reviewed content:</strong> a person has checked the article against those
                  sources. None of our guides are marked human-reviewed yet. All of them display a
                  <em> pending review</em> draft label until that check happens, and we do not present
                  unreviewed drafts as fact-checked, expert-tested, or professionally endorsed.
                </li>
              </ul>
              <h3 className="text-base font-bold text-[#183D32]">Our Editorial Standards:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>University extension grounding:</strong> nutrient and usage claims (for example
                  potassium in banana peels or nitrogen in coffee grounds) are traced to agricultural
                  cooperative extensions and other primary sources, linked on the guide.
                </li>
                <li>
                  <strong>Myth busting:</strong> we distinguish extension-supported findings from viral
                  internet garden myths and say plainly when evidence is weak or contested.
                </li>
                <li>
                  <strong>Automated tools are labeled separately:</strong> the AI waste scanner and
                  troubleshooting helper produce machine-generated output that is labeled in the interface
                  and is not editorial content. When no AI model is configured, they show sample data or an
                  honest "not configured" message instead of pretending to work.
                </li>
                <li>
                  <strong>Transparent corrections:</strong> when an article is revised, its revision date is
                  shown on the article page. Not every article displays a revision date, because most have
                  not been revised since publication. A reader reporting channel for corrections will be
                  restored when a verified contact method is published on our{' '}
                  <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }} className="text-[#387A53] hover:underline">Contact page</a>{' '}
                  - it is not operational at present.
                </li>
              </ol>
            </div>
          ),
        };

      case 'advertising-policy':
        return {
          subtitle: 'Transparency regarding website monetization.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                WasteBloom keeps all of its educational gardening content and interactive calculators free
                for home gardeners around the world.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Current Status (October 2026)</h3>
              <p>
                <strong>The site displays no advertising.</strong> No advertising network (including Google
                AdSense, Raptive, or Mediavine) is active, no ad slots exist on any page, no advertising
                scripts are present in the code, and the site publishes no affiliate links. The section
                below describes what would apply if that changed.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">If Advertising Is Introduced</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Programmatic advertising:</strong> we may, in the future, run display advertising
                  to fund hosting and further research. If advertising is activated, this page and our
                  Privacy and Cookie policies will be updated to name the actual networks and data flows,
                  and an <code className="text-xs">ads.txt</code> file will be published where the network
                  requires one.
                </li>
                <li>
                  <strong>Affiliate relationships:</strong> if WasteBloom ever earns commissions from
                  products mentioned in our content, the relevant article will disclose that relationship
                  next to the link.
                </li>
                <li>
                  <strong>Consent requirements:</strong> serving personalized ads to visitors in the EEA,
                  the UK, or Switzerland requires a Google-certified consent management platform that
                  integrates with the IAB Transparency and Consent Framework (required for EEA and UK traffic
                  since 16 January 2024, and for Switzerland since 31 July 2024 under Google's EU user
                  consent policy). If ads are ever introduced, a compliant certified CMP would be
                  implemented for such traffic first. Sources:{' '}
                  <a
                    href="https://support.google.com/adsense/answer/13554116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#387A53] hover:underline"
                  >
                    Google AdSense: consent management requirements for publishers
                  </a>
                  ,{' '}
                  <a
                    href="https://support.google.com/adsense/answer/7670013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#387A53] hover:underline"
                  >
                    setting up and managing a CMP
                  </a>
                  , and{' '}
                  <a
                    href="https://www.google.com/intl/en-GB/about/company/user-consent-policy-help/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#387A53] hover:underline"
                  >
                    Google's EU user consent policy help page
                  </a>
                  .
                </li>
              </ul>
              <h3 className="text-base font-bold text-[#183D32]">Our Advertising Integrity Principles</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Advertising will never decide which guides we publish, and it will never change an
                  article's editorial review status - our honest labels stay independent of monetization.
                </li>
                <li>
                  Ads, if added, will never obstruct calculator inputs, cover AI scanner controls, or cause
                  disruptive layout shifts.
                </li>
                <li>
                  Sponsored editorial content, if ever published, will be clearly labeled as sponsored at
                  the top of the article.
                </li>
              </ul>
            </div>
          ),
        };

      case 'disclaimer':
        return {
          subtitle: 'Please read before applying anything from this site to your garden or food crops.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                Last updated: October 2026. All information on WasteBloom is provided for general
                educational, informational, and recreational home-gardening purposes.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Educational Purpose - Not Professional Advice</h3>
              <p>
                WasteBloom does not provide medical, legal, financial, or professional horticultural or
                agricultural advice. For decisions with serious consequences - food safety, land management,
                or large-scale cultivation - consult a qualified professional or your local cooperative
                extension.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Gardening and Composting Advice Limitations</h3>
              <p>
                Our guides describe generally accepted home-gardening and composting practices. What works
                in one garden may fail - or cause harm - in another. Always observe your own plants and
                soil, and change one variable at a time.
              </p>
              <p>
                <strong>Soil, Climate, Plant, and Material Variability:</strong> soil chemistry, local
                climate, water mineral content, and plant cultivar requirements vary widely. Organic
                materials themselves vary too: conventional produce may carry pesticide residues, and
                manures, food scraps, and yard waste differ in nutrient content and pathogen risk. Rates and
                ratios in our guides and calculators are general baseline starting guidelines, not
                prescriptions, and they do not replace a professional laboratory soil test.
              </p>
              <p>
                <strong>Calculator Estimates:</strong> our calculators apply general-purpose formulas to the
                numbers you enter. They produce planning estimates only and cannot account for your site's
                specific conditions.
              </p>
              <p>
                <strong>AI Scanner and Troubleshooting Limitations:</strong> the waste scanner and
                troubleshooting tools are optional, machine-generated analyses. They can misidentify
                materials, misjudge suitability, or miss contamination. Never rely on them to decide whether
                something is safe to eat, safe to add to food crops, or safe around children or pets. When
                no AI model is configured, the interface shows sample results or a "not configured" message
                instead - check the label in the interface before trusting any output.
              </p>
              <p>
                <strong>Food Safety:</strong> always wash and thoroughly cook garden produce. When composting
                animal products or animal manures, ensure hot composting temperatures reach at least 135°F
                to 160°F (57°C to 71°C) to reduce pathogenic bacteria like Salmonella and E. coli. Never use
                pet waste (dog or cat feces) in vegetable gardens.
              </p>
              <p>
                <strong>External Websites:</strong> our articles link to external sources such as
                university extension pages for your convenience. We do not control those sites and are not
                responsible for their content; a link does not mean we endorse everything on them.
              </p>
              <p>
                <strong>No Guarantee of Results:</strong> gardening outcomes depend on factors outside any
                website's control. We make no promise of yield, pest control, plant survival, or any other
                result.
              </p>
              <p>
                <strong>Warranty and Liability:</strong> the site and its content are provided "as is"
                without warranties of accuracy or fitness for a particular purpose, to the fullest extent
                permitted by applicable law. To the fullest extent permitted by applicable law, WasteBloom's
                operators are not liable for loss or damage - including damage to plants, crops, or property
                - resulting from reliance on this site's guidance, calculators, or AI outputs. Test new
                methods on a small scale before applying them widely.
              </p>
            </div>
          ),
        };

      case 'privacy-policy':
        return {
          subtitle: "Written against the site's actual implementation, not a template.",
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                Last updated: October 2026. WasteBloom respects your privacy. We do not sell personal data
                to anyone. This policy describes what the website actually does with data, verified against
                the site's implementation - it is not boilerplate.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Information We Process</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Page requests:</strong> like any web server, ours automatically receives technical
                  request data (such as your IP address, browser type, and the page requested) in order to
                  serve pages. This is used only to deliver the site and enforce abuse limits; the
                  application does not write it to any user database.
                </li>
                <li>
                  <strong>AI waste scanner and troubleshooting (optional):</strong> if you use these tools,
                  the image or problem description you submit is validated, held in server memory for the
                  duration of the request, forwarded to a third-party AI provider (Google) for analysis, and
                  then discarded. WasteBloom stores no copy. When no AI model is configured on the server,
                  nothing is transmitted at all.
                </li>
                <li>
                  <strong>Newsletter signup (only if enabled):</strong> the server can forward an email
                  address you type to a newsletter webhook configured by the site operator. When the
                  newsletter is not configured (the current state of this deployment), the address is checked
                  for format, the response states that no address was stored, and nothing is transmitted or
                  saved.
                </li>
                <li>
                  <strong>Rate limiting:</strong> request limits are enforced in server memory using your IP
                  address as the key. These counters expire automatically with their time window and are
                  never written to disk.
                </li>
                <li>
                  <strong>Contact form:</strong> none. The site currently has no working contact form, so no
                  messages are collected or stored.
                </li>
              </ul>
              <h3 className="text-base font-bold text-[#183D32]">What We Do Not Collect</h3>
              <p>
                No accounts or user profiles. No cookies or browser storage (see our{' '}
                <a href="/cookie-policy" onClick={(e) => { e.preventDefault(); onNavigate('/cookie-policy'); }} className="text-[#387A53] hover:underline">Cookie Policy</a>
                ). No analytics or tracking scripts. No advertising trackers (see our{' '}
                <a href="/advertising-policy" onClick={(e) => { e.preventDefault(); onNavigate('/advertising-policy'); }} className="text-[#387A53] hover:underline">Advertising Policy</a>
                ). No location data, no payment information, and no database of personal data.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Third-Party Services</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Google (Gemini API):</strong> receives your scanner image or troubleshooting text
                  only when you actively use those optional tools and an AI key is configured on the server.
                </li>
                <li>
                  <strong>Google Fonts:</strong> fonts are loaded from Google's font servers, which receive
                  your IP address as part of serving the request.
                </li>
                <li>
                  <strong>Unsplash:</strong> images are served from Unsplash's image delivery network, which
                  receives your IP address as part of serving the request.
                </li>
                <li>
                  <strong>Newsletter webhook (if configured):</strong> would receive the email address you
                  submit while the newsletter feature is enabled.
                </li>
                <li>
                  <strong>Hosting provider:</strong> processes the network traffic needed to deliver the
                  site and may keep standard server logs.
                </li>
              </ul>
              <h3 className="text-base font-bold text-[#183D32]">Data Retention</h3>
              <p>
                WasteBloom itself stores no personal data, so there is no site-held personal-information
                archive and no retention schedule for one. AI requests exist only for the duration of the
                API call; rate-limit counters exist only in server memory for their time window. If a
                newsletter webhook is configured, any retention of submitted addresses is handled by that
                receiving service, not by this site.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Your Privacy Rights</h3>
              <p>
                Because the site keeps no personal records, there is currently no in-app process for
                accessing, exporting, or deleting personal data - there is none for the site to act on. If
                you previously submitted an email address to a newsletter feature that the operator later
                configured, that address would exist only with the receiving webhook service; contact that
                service to request deletion. If a verified contact channel is ever published on this site,
                privacy requests can be sent through it - see the current status on our{' '}
                <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }} className="text-[#387A53] hover:underline">Contact page</a>.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Children's Privacy</h3>
              <p>
                WasteBloom is a general-audience educational site and does not knowingly ask children for
                personal information. Because the site collects no personal data, it holds none from any
                visitor, children included.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Current vs. Planned Functionality</h3>
              <p>
                Everything above describes the site as it operates today: no analytics, no advertising, and
                no stored personal data. If analytics or advertising are ever introduced, this policy and
                the Cookie Policy will be updated to describe the actual tools, cookies, and data flows at
                that time.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Security</h3>
              <p>
                No method of transmitting data over the Internet is completely secure. The site's canonical
                address (https://wastebloom.org) is served over HTTPS, requests are rate-limited against
                abuse, and no personal data is held by the site - but we cannot guarantee absolute security
                for data in transit to third-party services you choose to use.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Policy Updates</h3>
              <p>
                When this policy changes materially, the "last updated" date at the top of the page is
                revised. The current version reflects the site's verified behavior as of October 2026.
              </p>
              <p>
                <strong>Privacy questions:</strong> there is currently no working contact channel on this
                site; the Contact page explains the status of contact options.
              </p>
            </div>
          ),
        };

      case 'terms-and-conditions':
        return {
          subtitle: 'Terms governing your use of the WasteBloom website.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                Last updated: October 2026. By accessing or using WasteBloom (the "Site"), you agree to
                these Terms and Conditions. If you do not agree, please do not use the Site.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Acceptance and Permitted Use</h3>
              <p>
                The Site is offered for personal, non-commercial, educational use: reading our guides, using
                the calculators for your own garden, and sharing links to our pages.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Intellectual Property</h3>
              <p>
                All original articles, illustrations, branding, and calculator code on the Site are the
                property of WasteBloom or its licensors and are protected by applicable intellectual
                property laws. You may share links to our pages and quote short excerpts with clear
                attribution.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Limited Personal-Use Permission</h3>
              <p>
                You may print or download guides for your own personal, non-commercial home gardening use.
                You may not republish, sell, or redistribute our content in bulk, or remove attribution
                from it.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Prohibited Use</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Circumventing rate limits or abuse limits on the Site's API endpoints.</li>
                <li>Gaining or attempting to gain unauthorized access to the Site, its servers, or its configuration.</li>
                <li>Scraping or automated copying of content at scale without permission.</li>
                <li>Using the Site for any unlawful purpose, or presenting WasteBloom content as your own.</li>
                <li>Republishing our content in a way that misleads readers about its source.</li>
              </ul>
              <h3 className="text-base font-bold text-[#183D32]">Calculator Estimates and AI Outputs</h3>
              <p>
                The calculators apply general-purpose formulas to the numbers you enter. They produce
                estimates, not laboratory results, and they do not account for your specific soil, climate,
                or materials. The AI waste scanner and troubleshooting tools generate machine-generated
                interpretations that can be wrong - including misidentifying a material. Verify anything
                safety-critical independently before acting on it.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Gardening and Composting Content Limitations</h3>
              <p>
                Our guides describe general practices for healthy home gardens. Conditions vary by soil,
                climate, material, and plant, and results are not guaranteed. Content on the Site is
                educational and is not professional horticultural, agricultural, legal, or medical advice.
                See our <a href="/disclaimer" onClick={(e) => { e.preventDefault(); onNavigate('/disclaimer'); }} className="text-[#387A53] hover:underline">Disclaimer</a>.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">External Links and Third-Party Services</h3>
              <p>
                The Site links to external sources (such as university extension pages) and loads resources
                from third-party providers (fonts from Google Fonts, images from Unsplash, and - when the
                optional AI features are used - analysis by Google). We do not control those third parties
                and are not responsible for their content, availability, or practices; your use of them is
                governed by their own terms.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Warranty Disclaimer</h3>
              <p>
                The Site is provided "as is" and "as available", without warranties of any kind, express or
                implied - including implied warranties of merchantability, fitness for a particular purpose,
                and non-infringement - to the fullest extent permitted by applicable law. We do not warrant
                that content is complete, accurate, or error-free, or that the Site will be uninterrupted or
                secure.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by applicable law, WasteBloom and its operators shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages, or any
                loss of data, profits, or goodwill, arising from your use of (or inability to use) the Site,
                its content, calculators, or AI outputs.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Newsletter and Contact Functionality</h3>
              <p>
                The newsletter signup operates only when a receiving service has been configured by the site
                operator; when it is not configured, no address is transmitted or stored (see our{' '}
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="text-[#387A53] hover:underline">Privacy Policy</a>
                ). The Site currently has no working contact form (see our{' '}
                <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }} className="text-[#387A53] hover:underline">Contact page</a>
                ). Optional features like these are provided without warranty.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Changes to These Terms</h3>
              <p>
                We may update these Terms from time to time. The "last updated" date at the top of this page
                is revised when changes are made; continued use of the Site after changes means you accept
                the updated Terms.
              </p>
              <p>
                <strong>Governing Law:</strong> these Terms do not yet name a governing jurisdiction. That
                selection will be added once the site owner confirms the appropriate one.
              </p>
            </div>
          ),
        };

      case 'cookie-policy':
        return {
          subtitle: 'The verified current state of cookies and storage on this site.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                Last updated: October 2026. This policy describes what WasteBloom actually does with cookies
                and browser storage today - nothing - and how future changes would be disclosed.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Current State: No Cookies, No Storage, No Analytics</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Cookies:</strong> this site does not set any cookies.
                </li>
                <li>
                  <strong>Browser storage:</strong> this site uses no localStorage and no sessionStorage.
                  Preferences such as metric/imperial unit selections in our calculators are{' '}
                  <em>not</em> remembered - reloading the page resets them.
                </li>
                <li>
                  <strong>Analytics:</strong> no analytics scripts are installed on the site.
                </li>
                <li>
                  <strong>Advertising:</strong> no advertising or advertising cookies are present (see our{' '}
                  <a href="/advertising-policy" onClick={(e) => { e.preventDefault(); onNavigate('/advertising-policy'); }} className="text-[#387A53] hover:underline">Advertising Policy</a>
                ).
                </li>
              </ul>
              <h3 className="text-base font-bold text-[#183D32]">Third-Party Resources (Not WasteBloom Cookies)</h3>
              <p>
                The site loads fonts from Google Fonts and images from Unsplash. Your browser contacts those
                providers directly to download those resources, so they receive your IP address, and their
                own privacy policies apply to those requests. These resources do not cause WasteBloom to set
                cookies or store anything in your browser.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Your Browser Controls</h3>
              <p>
                You can block or delete cookies and site data in your browser settings. Every feature of
                WasteBloom will continue to work, because nothing here depends on cookies or browser
                storage.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">If This Changes</h3>
              <p>
                If cookies, browser storage, analytics, or advertising are ever introduced, this policy will
                be updated to describe the actual implementation at that time.
              </p>
            </div>
          ),
        };

      default:
        return {
          subtitle: '',
          content: <p>Information page.</p>,
        };
    }
  };

  const { subtitle, content } = getPageContent();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.path}
        robots="index,follow"
      />

      <Breadcrumbs
        items={[{ label: meta.title }]}
        onNavigate={onNavigate}
      />

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#E3EDE1] shadow-xs">
        <header className="border-b border-[#E3EDE1] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#183D32]">{meta.title}</h1>
          {subtitle && <p className="text-sm text-[#78847D] mt-2">{subtitle}</p>}
        </header>

        {content}
      </div>
    </div>
  );
};
