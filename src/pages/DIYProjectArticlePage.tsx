import React, { useState } from 'react';
import { Clock, DollarSign, CheckCircle2, ChevronDown, ChevronUp, Printer, ArrowRight, Wrench, Package, Sparkles } from 'lucide-react';
import { diyProjects } from '../data/diyProjects';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface DIYProjectArticlePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const DIYProjectArticlePage: React.FC<DIYProjectArticlePageProps> = ({ slug, onNavigate }) => {
  const project = diyProjects.find((p) => p.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-[#183D32]">Project Not Found</h1>
        <button
          onClick={() => onNavigate('/diy-garden-projects')}
          className="mt-6 px-6 py-2.5 rounded-xl bg-[#183D32] text-white text-xs font-bold"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const related = diyProjects.filter((p) => project.relatedGuideSlugs.includes(p.slug));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <SEOHead
        title={project.title}
        description={project.excerpt}
        ogType="article"
      />

      <Breadcrumbs
        items={[
          { label: 'DIY Garden Projects', path: '/diy-garden-projects' },
          { label: project.title },
        ]}
        onNavigate={onNavigate}
      />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E3EDE1] text-[#183D32]">
            Difficulty: {project.difficulty}
          </span>
          <span className="text-xs text-[#78847D] flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#387A53]" /> {project.timeEstimate}
          </span>
          <span className="text-xs text-[#78847D] flex items-center gap-1 font-medium">
            <DollarSign className="w-3.5 h-3.5 text-[#8A6346]" /> {project.costEstimate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#183D32] tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-sm md:text-base text-[#26332D]/80 mt-3 leading-relaxed">
          {project.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-[#CBD5CD]/40 flex items-center justify-between text-xs text-[#78847D]">
          <span>Blueprint Verified by WasteBloom Garden Crafts</span>
          <button onClick={() => window.print()} className="flex items-center gap-1 hover:text-[#183D32]">
            <Printer className="w-3.5 h-3.5" /> Print Project
          </button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-3xl overflow-hidden shadow-md mb-8 aspect-16/9">
        <img src={project.featuredImage} alt={project.imageAlt} className="w-full h-full object-cover" />
      </div>

      {/* Materials & Tools checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl border border-[#E3EDE1]">
          <h2 className="text-base font-bold text-[#183D32] mb-3 flex items-center gap-2">
            <Package className="w-5 h-5 text-[#387A53]" /> Upcycled Materials Needed
          </h2>
          <ul className="space-y-2">
            {project.materialsNeeded.map((mat, i) => (
              <li key={i} className="text-xs text-[#26332D] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#387A53] shrink-0 mt-0.5" />
                <span>{mat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E3EDE1]">
          <h2 className="text-base font-bold text-[#183D32] mb-3 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-[#8A6346]" /> Basic Tools Required
          </h2>
          <ul className="space-y-2">
            {project.toolsNeeded.map((tool, i) => (
              <li key={i} className="text-xs text-[#26332D] flex items-start gap-2">
                <span className="text-[#8A6346] font-bold">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Step-by-Step Build Instructions */}
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-bold text-[#183D32]">Step-by-Step Instructions</h2>
        {project.steps.map((st) => (
          <div key={st.stepNumber} className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#183D32] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                {st.stepNumber}
              </div>
              <h3 className="text-lg font-bold text-[#183D32]">{st.title}</h3>
            </div>
            <p className="text-xs md:text-sm text-[#26332D] leading-relaxed pl-11">
              {st.instruction}
            </p>
            {st.proTip && (
              <div className="ml-11 mt-3 p-3.5 rounded-2xl bg-[#E3EDE1] border border-[#CBD5CD] text-xs text-[#183D32]">
                <strong>Pro-Tip:</strong> {st.proTip}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Care & Maintenance */}
      {project.careMaintenance && project.careMaintenance.length > 0 && (
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1] mb-10">
          <h2 className="text-xl font-bold text-[#183D32] mb-4">Plant Care & Long-Term Maintenance</h2>
          <ul className="space-y-2">
            {project.careMaintenance.map((tip, i) => (
              <li key={i} className="text-xs text-[#26332D] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#387A53] shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQs */}
      {project.faqs && project.faqs.length > 0 && (
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-[#E3EDE1] mb-10">
          <h2 className="text-xl font-bold text-[#183D32] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {project.faqs.map((faq, idx) => (
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

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="pt-8 border-t border-[#E3EDE1]">
          <h3 className="text-xl font-bold text-[#183D32] mb-6">More DIY Upcycling Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`/diy-garden-projects/${rel.slug}`)}
                className="p-4 rounded-2xl bg-white border border-[#E3EDE1] hover:border-[#387A53] cursor-pointer transition shadow-xs group"
              >
                <img src={rel.featuredImage} alt={rel.imageAlt} className="w-full h-32 rounded-xl object-cover mb-3" />
                <h4 className="text-xs font-bold text-[#183D32] group-hover:text-[#387A53] transition line-clamp-1">{rel.title}</h4>
                <p className="text-[11px] text-[#78847D] mt-1">{rel.timeEstimate} • {rel.difficulty}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
