import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, ChevronDown, ChevronUp, BookOpen, Share2, Printer, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Sprout } from 'lucide-react';
import { wasteGuides } from '../data/wasteGuides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface WasteArticlePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const WasteArticlePage: React.FC<WasteArticlePageProps> = ({ slug, onNavigate }) => {
  const guide = wasteGuides.find((g) => g.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-[#183D32]">Guide Not Found</h1>
        <p className="text-sm text-[#78847D] mt-2">The requested waste guide does not exist or has moved.</p>
        <button
          onClick={() => onNavigate('/waste-to-garden')}
          className="mt-6 px-6 py-2.5 rounded-xl bg-[#183D32] text-white text-xs font-bold"
        >
          Back to Waste to Garden
        </button>
      </div>
    );
  }

  const relatedGuides = wasteGuides.filter((g) => guide.relatedGuideSlugs.includes(g.slug));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <SEOHead
        title={guide.title}
        description={guide.excerpt}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": guide.title,
          "description": guide.excerpt,
          "image": guide.featuredImage,
          "author": {
            "@type": "Organization",
            "name": "WasteBloom Editorial Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "WasteBloom"
          }
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Waste to Garden', path: '/waste-to-garden' },
          { label: guide.shortTitle },
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E3EDE1] text-[#183D32]">
            {guide.category}
          </span>
          <span className="text-xs text-[#78847D]">•</span>
          <span className="text-xs font-semibold text-[#78847D]">{guide.readingTime}</span>
          <span className="text-xs text-[#78847D]">•</span>
          <span className="text-xs font-bold text-[#387A53]">{guide.type}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#183D32] tracking-tight leading-tight">
          {guide.title}
        </h1>

        {guide.scientificName && (
          <p className="text-xs italic text-[#78847D] mt-1">Botanical / Mineral: {guide.scientificName}</p>
        )}

        <div className="mt-4 pt-4 border-t border-[#CBD5CD]/40 flex flex-wrap items-center justify-between gap-4 text-xs text-[#78847D]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#387A53]" />
            <span>Fact-Checked & Reviewed by WasteBloom Soil Sciences</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1 hover:text-[#183D32] transition"
            >
              <Printer className="w-3.5 h-3.5" /> Print Guide
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-3xl overflow-hidden shadow-md mb-8 aspect-16/9 bg-neutral-100">
        <img
          src={guide.featuredImage}
          alt={guide.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* PRD Step 2: Quick Answer Box */}
      <div className="bg-[#E3EDE1] border-2 border-[#387A53] rounded-3xl p-6 md:p-8 mb-10 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-[#387A53]" />
          <h2 className="text-base md:text-lg font-extrabold text-[#183D32]">
            The Quick Answer
          </h2>
        </div>
        <p className="text-xs md:text-sm text-[#26332D] leading-relaxed font-medium">
          {guide.quickAnswer}
        </p>
      </div>

      {/* Main Article Content Blocks matching PRD §9 */}
      <div className="space-y-10 text-[#26332D]">
        {/* Section 3: Can you use this material for plants? */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
          <h2 className="text-xl md:text-2xl font-bold text-[#183D32] mb-4 flex items-center gap-2">
            <Sprout className="w-5 h-5 text-[#387A53]" />
            Can You Use This Directly in Soil?
          </h2>
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD] mb-4">
            {guide.directSoilUsage.allowed ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            )}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block text-[#183D32]">
                {guide.directSoilUsage.allowed ? 'Direct Soil Application Allowed' : 'Direct Raw Application Not Recommended'}
              </span>
              <p className="text-xs text-[#26332D] mt-1 leading-relaxed">
                {guide.directSoilUsage.explanation}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Composting Suitability */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
          <h2 className="text-xl md:text-2xl font-bold text-[#183D32] mb-4">
            Composting Suitability & Carbon-Nitrogen Balance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="p-4 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD]">
              <span className="text-[10px] text-[#78847D] uppercase font-bold">Suitability</span>
              <div className="text-sm font-bold text-[#183D32] mt-1">{guide.suitability}</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD]">
              <span className="text-[10px] text-[#78847D] uppercase font-bold">Decomposition Speed</span>
              <div className="text-sm font-bold text-[#387A53] mt-1">{guide.compostSuitability.speed}</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD]">
              <span className="text-[10px] text-[#78847D] uppercase font-bold">C:N Ratio Profile</span>
              <div className="text-sm font-bold text-[#8A6346] mt-1">{guide.cToNRatio}</div>
            </div>
          </div>
          <p className="text-xs text-[#26332D] leading-relaxed">
            {guide.compostSuitability.details}
          </p>
        </section>

        {/* Section 5: Preparation Method */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
          <h2 className="text-xl md:text-2xl font-bold text-[#183D32] mb-4">
            Preparation Method (Before Adding to Soil or Pile)
          </h2>
          <div className="space-y-3">
            {guide.preparationSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD]">
                <div className="w-6 h-6 rounded-full bg-[#183D32] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs text-[#26332D] font-medium leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: How to Use It Step-by-Step */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
          <h2 className="text-xl md:text-2xl font-bold text-[#183D32] mb-4">
            How to Use It: Step-by-Step Applications
          </h2>
          <div className="space-y-4">
            {guide.howToUseSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD]">
                <h3 className="text-sm font-bold text-[#183D32] mb-1">{step.title}</h3>
                <p className="text-xs text-[#26332D] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Benefits vs Limitations */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
            <h3 className="text-lg font-bold text-[#387A53] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Benefits for Plants & Soil
            </h3>
            <ul className="space-y-2.5">
              {guide.benefits.map((b, i) => (
                <li key={i} className="text-xs text-[#26332D] flex items-start gap-2 leading-relaxed">
                  <span className="text-[#387A53] font-bold">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
            <h3 className="text-lg font-bold text-[#8A6346] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Biological Limitations
            </h3>
            <ul className="space-y-2.5">
              {guide.limitations.map((l, i) => (
                <li key={i} className="text-xs text-[#26332D] flex items-start gap-2 leading-relaxed">
                  <span className="text-[#8A6346] font-bold">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 7.5: Scientific Truth vs Internet Myths Busted */}
        {guide.mythsBusted && guide.mythsBusted.length > 0 && (
          <section className="bg-[#183D32] text-white p-6 md:p-8 rounded-3xl shadow-md border border-white/10">
            <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Science vs Gardening Folklore</span>
            <h2 className="text-2xl font-extrabold text-white mt-1 mb-6">
              Popular Internet Myths Debunked
            </h2>
            <div className="space-y-4">
              {guide.mythsBusted.map((m, idx) => (
                <div key={idx} className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-xs text-rose-300 font-bold flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Common Myth: "{m.myth}"
                  </div>
                  <div className="text-xs text-[#E3EDE1] leading-relaxed">
                    <strong className="text-white">Scientific Reality:</strong> {m.reality}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 8 & 9: Mistakes & Safety */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
          <h2 className="text-xl md:text-2xl font-bold text-[#183D32] mb-4">
            Common Mistakes & Safety Precautions
          </h2>
          <div className="space-y-3 mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700">Mistakes to Avoid</h3>
            {guide.commonMistakes.map((mistake, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#26332D]">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{mistake}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-[#E3EDE1]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700">Safety & Pest Precautions</h3>
            {guide.safetyPrecautions.map((safe, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#26332D]">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{safe}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: Frequently Asked Questions */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
          <h2 className="text-xl md:text-2xl font-bold text-[#183D32] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {guide.faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#E3EDE1] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 bg-[#F8F6EE] hover:bg-[#E3EDE1] transition flex items-center justify-between text-xs font-bold text-[#183D32]"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#387A53]" /> : <ChevronDown className="w-4 h-4 text-[#78847D]" />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white text-xs text-[#26332D] leading-relaxed border-t border-[#E3EDE1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Scientific References */}
        {guide.references && guide.references.length > 0 && (
          <section className="p-6 rounded-3xl bg-[#F8F6EE] border border-[#CBD5CD] text-xs text-[#78847D]">
            <h3 className="font-bold text-[#183D32] text-sm mb-2">Scientific References & Horticultural Extensions:</h3>
            <ul className="space-y-1 list-disc list-inside">
              {guide.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Section 12: Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="pt-8 border-t border-[#E3EDE1]">
            <h3 className="text-xl font-bold text-[#183D32] mb-6">Related Waste Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedGuides.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate(`/waste-to-garden/${rel.slug}`)}
                  className="p-4 rounded-2xl bg-white border border-[#E3EDE1] hover:border-[#387A53] cursor-pointer transition shadow-xs group"
                >
                  <img
                    src={rel.featuredImage}
                    alt={rel.imageAlt}
                    className="w-full h-32 rounded-xl object-cover mb-3"
                  />
                  <h4 className="text-xs font-bold text-[#183D32] group-hover:text-[#387A53] transition line-clamp-2">
                    {rel.shortTitle}
                  </h4>
                  <p className="text-[11px] text-[#78847D] mt-1 line-clamp-1">{rel.category}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
