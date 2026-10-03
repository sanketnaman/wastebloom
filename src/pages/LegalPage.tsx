import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, Mail, Send, Check } from 'lucide-react';

interface LegalPageProps {
  pageType:
    | 'about'
    | 'contact'
    | 'privacy-policy'
    | 'terms-and-conditions'
    | 'disclaimer'
    | 'cookie-policy'
    | 'advertising-policy'
    | 'editorial-policy';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ pageType, onNavigate }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const getPageContent = () => {
    switch (pageType) {
      case 'about':
        return {
          title: 'About WasteBloom',
          subtitle: 'Our Mission: Turn Everyday Waste Into Something Beautiful.',
          content: (
            <div className="space-y-6 text-sm text-[#26332D] leading-relaxed">
              <p>
                <strong>WasteBloom</strong> was founded with a singular conviction: the average household throws away hundreds of pounds of nutrient-rich organic material every single year that could instead be revitalizing our backyards, community gardens, and houseplants.
              </p>
              <h3 className="text-lg font-bold text-[#183D32]">Our Vision</h3>
              <p>
                Too much gardening advice online consists of unverified gardening folklore and viral social media "hacks" that actually damage soil biology—such as dumping unbrewed acidic coffee grounds onto young seedlings, spraying fermenting banana peel sugar water, or burying whole raw eggshells that sit intact for years.
              </p>
              <p>
                WasteBloom bridges the gap between academic soil science and practical everyday home gardening. We publish source-linked methods for transforming kitchen scraps, corrugated cardboard, and yard clippings into thriving living soil, citing the university extensions behind them.
              </p>
              <h3 className="text-lg font-bold text-[#183D32]">Our Core Pillars</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Evidence-Based Guidance:</strong> Grounded in research from cooperative university extensions.</li>
                <li><strong>Zero-Waste Upcycling:</strong> Prioritizing materials you already have before purchasing plastic gardening equipment.</li>
                <li><strong>Accessible Tools:</strong> Fast, deterministic calculators for container volume, C:N balancing, and potting mixes.</li>
              </ul>
            </div>
          ),
        };

      case 'contact':
        return {
          title: 'Contact Editorial & Horticultural Team',
          subtitle: 'Have a question about a guide, found a typo, or want to suggest a waste item?',
          content: (
            <div className="space-y-6 text-sm text-[#26332D]">
              <p>
                We welcome inquiries, feedback, and horticultural corrections from gardeners, university researchers, and sustainable living advocates worldwide.
              </p>
              {contactSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#E3EDE1] border border-[#387A53] text-[#183D32] flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#387A53] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-bold">Message Received!</strong>
                    <span>Thank you for reaching out. Our editorial team reviews messages within 24–48 business hours.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 max-w-xl bg-white p-6 rounded-3xl border border-[#E3EDE1]">
                  <div>
                    <label className="block text-xs font-bold text-[#183D32] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full p-3 rounded-xl bg-[#F8F6EE] border border-[#CBD5CD] text-xs text-[#26332D] focus:outline-none focus:ring-2 focus:ring-[#387A53]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#183D32] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full p-3 rounded-xl bg-[#F8F6EE] border border-[#CBD5CD] text-xs text-[#26332D] focus:outline-none focus:ring-2 focus:ring-[#387A53]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#183D32] mb-1">Message or Suggestion</label>
                    <textarea
                      rows={4}
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Tell us about a guide you'd like to see, or a composting question..."
                      className="w-full p-3 rounded-xl bg-[#F8F6EE] border border-[#CBD5CD] text-xs text-[#26332D] focus:outline-none focus:ring-2 focus:ring-[#387A53]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#183D32] hover:bg-[#387A53] text-white text-xs font-bold transition flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          ),
        };

      case 'editorial-policy':
        return {
          title: 'Editorial Policy',
          subtitle: 'How we research, cite, and maintain our gardening knowledge.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                At WasteBloom, our primary commitment is accuracy. We recognize that misapplying organic materials—such as piling high-nitrogen greens against tree trunks or applying raw eggshells with residual bacteria to salad greens—can cause plant disease or food safety hazards.
              </p>
              <p>
                Our guides are written with citations to cooperative university extensions and other primary sources, and every guide currently carries a visible status label: drafts are marked <em>pending review</em> until a human editor has verified them against those sources. We do not present unreviewed drafts as fact-checked.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Our 4 Editorial Standards:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>University Extension Grounding:</strong> Nutrient and usage claims (e.g. potassium in banana peels or nitrogen in coffee grounds) are traced to agricultural cooperative extensions, with sources linked on each article.</li>
                <li><strong>Myth Busting:</strong> We distinguish between extension-supported findings and viral internet garden myths, and say plainly when evidence is weak.</li>
                <li><strong>No AI-Generated Copy in Core Guides:</strong> Guides are written and edited by people; our image scanner uses deterministic sample data when no AI model is configured, and says so in the interface.</li>
                <li><strong>Transparent Corrections:</strong> When a guide is updated, its revision date is shown, and readers can report corrections through our contact page.</li>
              </ol>
            </div>
          ),
        };

      case 'advertising-policy':
        return {
          title: 'Advertising & Commercial Disclosure',
          subtitle: 'Transparency regarding website monetization.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                WasteBloom is dedicated to keeping 100% of our educational gardening content and interactive calculators completely free for home gardeners around the world.
              </p>
              <p>
                To support server infrastructure, research, and technical development, we may display programmatic display advertisements (such as Google AdSense, Raptive, or Mediavine) and participate in select gardening affiliate programs.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Our Advertising Integrity Rules:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Advertisements will never dictate or influence our scientific recommendations or fact-checking reviews.</li>
                <li>Ads will never obstruct calculator inputs, cover AI scanner controls, or cause disruptive layout shifts.</li>
                <li>Sponsored editorial content, if ever published, will be clearly labeled as such at the top of the article.</li>
              </ul>
            </div>
          ),
        };

      case 'disclaimer':
        return {
          title: 'Horticultural & Safety Disclaimer',
          subtitle: 'Please read before applying amendments to food crops.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                The information provided on WasteBloom is designed for educational, informational, and recreational home gardening purposes only.
              </p>
              <p>
                <strong>Soil and Plant Variability:</strong> Soil chemistry, local climate, water mineral content, and plant cultivar requirements vary widely. Calculated recommendations provided by our interactive tools represent general baseline starting guidelines and do not replace a professional laboratory soil test.
              </p>
              <p>
                <strong>Food Safety:</strong> Always wash and thoroughly cook garden produce. When composting animal products or animal manures, ensure hot composting temperatures reach at least 135°F to 160°F (57°C to 71°C) to neutralize pathogenic bacteria like Salmonella and E. coli. Never use pet waste (dog or cat feces) in vegetable gardens.
              </p>
            </div>
          ),
        };

      case 'privacy-policy':
        return {
          title: 'Privacy Policy',
          subtitle: 'How WasteBloom respects and protects your data.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                Last Updated: October 2026. WasteBloom respects your personal privacy. We do not sell your personal data to third parties.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Information We Collect</h3>
              <p>
                We collect information you voluntarily provide, such as your email address when subscribing to our weekly gardening newsletter or contacting us via our contact form.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">AI Waste Scanner Images</h3>
              <p>
                Photographs uploaded to our AI Waste Scanner are processed temporarily in server memory for the sole purpose of analyzing the material and generating gardening recommendations. We do not retain or store uploaded images permanently on our public database.
              </p>
            </div>
          ),
        };

      case 'terms-and-conditions':
        return {
          title: 'Terms of Service',
          subtitle: 'Terms governing the use of the WasteBloom website.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                By accessing WasteBloom, you agree to comply with and be bound by these Terms and Conditions.
              </p>
              <h3 className="text-base font-bold text-[#183D32]">Intellectual Property</h3>
              <p>
                All original educational articles, DIY blueprints, diagrams, and calculator code on WasteBloom are the intellectual property of WasteBloom. You may print guides for personal non-commercial home gardening use.
              </p>
            </div>
          ),
        };

      case 'cookie-policy':
        return {
          title: 'Cookie Policy',
          subtitle: 'Information about how cookies and local storage are utilized.',
          content: (
            <div className="space-y-4 text-sm text-[#26332D] leading-relaxed">
              <p>
                WasteBloom uses standard cookies and browser local storage to preserve your preferences (such as your preferred metric/imperial unit selections across our calculators) and analyze aggregated anonymous traffic patterns.
              </p>
              <p>
                You can configure your browser to reject all cookies or notify you when a cookie is placed. Note that core deterministic calculators function smoothly regardless of cookie settings.
              </p>
            </div>
          ),
        };

      default:
        return {
          title: 'Information',
          subtitle: '',
          content: <p>Information page.</p>,
        };
    }
  };

  const { title, subtitle, content } = getPageContent();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <SEOHead
        title={title}
        description={subtitle || 'WasteBloom educational gardening and composting platform.'}
      />

      <Breadcrumbs
        items={[{ label: title }]}
        onNavigate={onNavigate}
      />

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#E3EDE1] shadow-xs">
        <header className="border-b border-[#E3EDE1] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#183D32]">{title}</h1>
          {subtitle && <p className="text-sm text-[#78847D] mt-2">{subtitle}</p>}
        </header>

        {content}
      </div>
    </div>
  );
};
