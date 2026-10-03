import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Printer, ArrowRight, ShieldCheck, ShieldAlert, Sparkles, Sprout } from 'lucide-react';
import { compostingGuides } from '../data/compostingGuides';
import { resolveReference } from '../data/relatedGuides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface CompostingArticlePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const CompostingArticlePage: React.FC<CompostingArticlePageProps> = ({ slug, onNavigate }) => {
  const guide = compostingGuides.find((g) => g.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-[#183D32]">Guide Not Found</h1>
        <button
          onClick={() => onNavigate('/composting')}
          className="mt-6 px-6 py-2.5 rounded-xl bg-[#183D32] text-white text-xs font-bold"
        >
          Back to Composting Center
        </button>
      </div>
    );
  }

  const relatedGuides = compostingGuides.filter((g) => guide.relatedGuideSlugs.includes(g.slug));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <SEOHead
        title={guide.title}
        description={guide.excerpt}
        ogType="article"
        canonicalPath={`/composting/${guide.slug}`}
        image={guide.featuredImage}
      />

      <Breadcrumbs
        items={[
          { label: 'Composting', path: '/composting' },
          { label: guide.title },
        ]}
        onNavigate={onNavigate}
      />

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E3EDE1] text-[#183D32]">
            {guide.category}
          </span>
          <span className="text-xs text-[#78847D]">•</span>
          <span className="text-xs font-semibold text-[#78847D]">{guide.readingTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#183D32] tracking-tight leading-tight">
          {guide.title}
        </h1>

        <div className="mt-4 pt-4 border-t border-[#CBD5CD]/40 flex items-center justify-between text-xs text-[#78847D]">
          <div className="flex items-center gap-2">
            {guide.reviewStatus === 'needs-human-review' ? (
              <>
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Draft — pending review by the WasteBloom editorial team</span>
              </>
            ) : guide.reviewStatus === 'human-reviewed' ? (
              <>
                <ShieldCheck className="w-4 h-4 text-[#387A53]" />
                <span>Fact-Checked by WasteBloom Soil Sciences</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 text-[#78847D]" />
                <span>An editorial guide from WasteBloom</span>
              </>
            )}
          </div>
          <button onClick={() => window.print()} className="flex items-center gap-1 hover:text-[#183D32]">
            <Printer className="w-3.5 h-3.5" /> Print
          </button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-3xl overflow-hidden shadow-md mb-8 aspect-16/9">
        <img src={guide.featuredImage} alt={guide.imageAlt} className="w-full h-full object-cover" />
      </div>

      {/* Key Takeaways */}
      {guide.keyTakeaways && guide.keyTakeaways.length > 0 && (
        <div className="bg-[#E3EDE1] border-2 border-[#387A53] rounded-3xl p-6 md:p-8 mb-10 shadow-xs">
          <h2 className="text-base font-extrabold text-[#183D32] mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#387A53]" />
            Key Composting Principles
          </h2>
          <ul className="space-y-2">
            {guide.keyTakeaways.map((point, idx) => (
              <li key={idx} className="text-xs md:text-sm text-[#26332D] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#387A53] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sections */}
      <div className="space-y-8 text-[#26332D]">
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
          <p className="text-sm md:text-base leading-relaxed text-[#26332D]/90">
            {guide.introduction}
          </p>
        </div>

        {guide.sections.map((sec, idx) => (
          <section key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#183D32]">{sec.title}</h2>
            <div className="text-xs md:text-sm text-[#26332D] leading-relaxed whitespace-pre-line">
              {sec.content}
            </div>

            {sec.tips && sec.tips.length > 0 && (
              <div className="mt-4 p-4 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD] space-y-2">
                <h4 className="text-xs font-bold text-[#183D32] uppercase tracking-wider">Horticultural Tips:</h4>
                <ul className="space-y-1.5">
                  {sec.tips.map((t, ti) => (
                    <li key={ti} className="text-xs text-[#26332D] flex items-start gap-2">
                      <span className="text-[#387A53] font-bold">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        {/* FAQs */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
            <h2 className="text-xl md:text-2xl font-bold text-[#183D32] mb-6">Frequently Asked Questions</h2>
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
        )}

        {/* References */}
        {guide.references && guide.references.length > 0 && (
          <section className="p-6 rounded-3xl bg-[#F8F6EE] border border-[#CBD5CD] text-xs text-[#78847D]">
            <h3 className="font-bold text-[#183D32] text-sm mb-2">Sources &amp; Further Reading:</h3>
            <ul className="space-y-1.5 list-disc list-inside">
              {guide.references.map((ref, i) => {
                const resolved = resolveReference(ref);
                return (
                  <li key={i}>
                    {resolved.url ? (
                      <a
                        href={resolved.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#387A53] hover:underline"
                      >
                        {resolved.title}
                      </a>
                    ) : (
                      resolved.title
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="pt-8 border-t border-[#E3EDE1]">
            <h3 className="text-xl font-bold text-[#183D32] mb-6">Related Composting Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedGuides.map((rel) => (
                <a
                  key={rel.id}
            href={`/composting/${rel.slug}`} onClick={(e) => { e.preventDefault(); onNavigate(`/composting/${rel.slug}`); }}
                  className="p-4 rounded-2xl bg-white border border-[#E3EDE1] hover:border-[#387A53] cursor-pointer transition shadow-xs group"
                >
                  <h4 className="text-xs font-bold text-[#183D32] group-hover:text-[#387A53] transition line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-[#78847D] mt-1">{rel.category}</p>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
