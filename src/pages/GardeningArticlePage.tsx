import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Printer, ShieldCheck } from 'lucide-react';
import { gardeningGuides } from '../data/gardeningGuides';
import { resolveRelatedGuides } from '../data/relatedGuides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RichText } from '../components/RichText';
import { SITE_NAME, absoluteUrl } from '../config/site';

interface GardeningArticlePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const GardeningArticlePage: React.FC<GardeningArticlePageProps> = ({ slug, onNavigate }) => {
  const guide = gardeningGuides.find((g) => g.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const related = useMemo(
    () => (guide ? resolveRelatedGuides(guide.relatedGuideSlugs) : []),
    [guide]
  );

  const schema = useMemo(() => {
    if (!guide) return undefined;
    const canonical = absoluteUrl(`/gardening-guides/${guide.slug}`);
    return [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": guide.title,
        "description": guide.excerpt,
        "image": guide.featuredImage,
        "mainEntityOfPage": canonical,
        "author": { "@type": "Organization", "name": `${SITE_NAME} Horticultural Sciences` },
        "publisher": { "@type": "Organization", "name": SITE_NAME }
      },
      ...(guide.faqs.length > 0
        ? [{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": guide.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }]
        : []),
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": absoluteUrl('/') },
          { "@type": "ListItem", "position": 2, "name": "Gardening Guides", "item": absoluteUrl('/gardening-guides') },
          { "@type": "ListItem", "position": 3, "name": guide.title, "item": canonical }
        ]
      }
    ];
  }, [guide]);

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-[#183D32]">Guide Not Found</h1>
        <button
          onClick={() => onNavigate('/gardening-guides')}
          className="mt-6 px-6 py-2.5 rounded-xl bg-[#183D32] text-white text-xs font-bold"
        >
          Back to Gardening Guides
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <SEOHead
        title={guide.title}
        description={guide.excerpt}
        ogType="article"
        canonicalPath={`/gardening-guides/${guide.slug}`}
        image={guide.featuredImage}
        schema={schema}
      />

      <Breadcrumbs
        items={[
          { label: 'Gardening Guides', path: '/gardening-guides' },
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
            <ShieldCheck className="w-4 h-4 text-[#387A53]" />
            <span>Fact-Checked by {SITE_NAME} Horticultural Sciences</span>
          </div>
          <button onClick={() => window.print()} className="flex items-center gap-1 hover:text-[#183D32]">
            <Printer className="w-3.5 h-3.5" /> Print
          </button>
        </div>
      </header>

      <div className="rounded-3xl overflow-hidden shadow-md mb-8 aspect-16/9">
        <img src={guide.featuredImage} alt={guide.title} className="w-full h-full object-cover" />
      </div>

      <div className="space-y-8 text-[#26332D]">
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
          <p className="text-sm md:text-base leading-relaxed text-[#26332D]/90">
            <RichText text={guide.excerpt} onNavigate={onNavigate} />
          </p>
        </div>

        {guide.sections.map((sec, idx) => (
          <section key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1] space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#183D32]">{sec.title}</h2>
            <p className="text-xs md:text-sm text-[#26332D] leading-relaxed">
              <RichText text={sec.content} onNavigate={onNavigate} />
            </p>
          </section>
        ))}

        {guide.faqs && guide.faqs.length > 0 && (
          <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1]">
            <h2 className="text-xl md:text-2xl font-bold text-[#183D32] mb-4">Frequently Asked Questions</h2>
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
                      <RichText text={faq.answer} onNavigate={onNavigate} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="pt-8 border-t border-[#E3EDE1]">
            <h3 className="text-xl font-bold text-[#183D32] mb-6">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={rel.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(rel.path);
                  }}
                  className="p-4 rounded-2xl bg-white border border-[#E3EDE1] hover:border-[#387A53] cursor-pointer transition shadow-xs group block"
                >
                  <h4 className="text-xs font-bold text-[#183D32] group-hover:text-[#387A53] transition line-clamp-1">{rel.title}</h4>
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
