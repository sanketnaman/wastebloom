import React, { useState } from 'react';
import { ArrowRight, Layers, HelpCircle, Wrench, Sparkles, Filter } from 'lucide-react';
import { compostingGuides } from '../data/compostingGuides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CompostTroubleshooter } from '../components/scanner/CompostTroubleshooter';

interface CompostingPageProps {
  onNavigate: (path: string) => void;
}

export const CompostingPage: React.FC<CompostingPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Fundamentals', 'Troubleshooting', 'Techniques', 'Indoor & Outdoor'];

  const filtered = compostingGuides.filter(
    (g) => selectedCategory === 'All' || g.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SEOHead
        title="Composting Knowledge Center – Home Composting Guides & Troubleshooting"
        description="Master backyard, indoor, and tumbler composting. Learn green vs brown balance, hot vs cold methods, and how to eliminate bad odors permanently."
      />

      <Breadcrumbs
        items={[{ label: 'Composting' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="bg-[#183D32] text-white p-8 md:p-12 rounded-3xl shadow-md border border-white/10">
        <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Module C — Composting Knowledge Center</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
          The Science of Healthy Home Composting
        </h1>
        <p className="text-xs md:text-sm text-[#E3EDE1] mt-3 max-w-3xl leading-relaxed">
          From apartment worm bins and Japanese Bokashi systems to multi-bay outdoor piles, learn how to turn kitchen scraps and autumn leaves into nutrient-rich humus with zero foul odors or rodent problems.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#E3EDE1] mr-2 flex items-center gap-1 font-semibold">
            <Filter className="w-3.5 h-3.5 text-[#B6D96A]" /> Filter Topics:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-[#B6D96A] text-[#183D32] shadow-xs'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((guide) => (
          <div
            key={guide.id}
            onClick={() => onNavigate(`/composting/${guide.slug}`)}
            className="bg-white rounded-3xl overflow-hidden border border-[#E3EDE1] hover:border-[#387A53] transition cursor-pointer shadow-xs hover:shadow-md flex flex-col group"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={guide.featuredImage}
                alt={guide.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-[#183D32] text-white">
                {guide.readingTime}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#387A53]">
                  {guide.category}
                </span>
                <h2 className="text-base font-bold text-[#183D32] group-hover:text-[#387A53] transition mt-1 line-clamp-2">
                  {guide.title}
                </h2>
                <p className="text-xs text-[#78847D] mt-1.5 line-clamp-2 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#E3EDE1] flex items-center justify-between text-xs font-bold text-[#387A53]">
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Diagnostic Engine */}
      <section className="pt-6">
        <CompostTroubleshooter />
      </section>
    </div>
  );
};
