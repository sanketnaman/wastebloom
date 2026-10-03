import React, { useState } from 'react';
import { ArrowRight, Recycle, Filter, Sparkles } from 'lucide-react';
import { wasteGuides } from '../data/wasteGuides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface WasteToGardenPageProps {
  onNavigate: (path: string) => void;
}

export const WasteToGardenPage: React.FC<WasteToGardenPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Kitchen Scraps', 'Fruit & Vegetable'];

  const filteredGuides = wasteGuides.filter(
    (g) => selectedCategory === 'All' || g.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SEOHead
        title="Waste to Garden – Organic Kitchen Scraps & Upcycling Guides"
        description="Learn how to turn kitchen waste, fruit peels, eggshells, and coffee grounds into nutrient-dense compost and soil amendments with evidence-based guides."
      />

      <Breadcrumbs
        items={[{ label: 'Waste to Garden' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="bg-[#183D32] text-white p-8 md:p-12 rounded-3xl mb-12 shadow-md border border-white/10">
        <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Module A — Educational Directory</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
          Waste to Garden Knowledge Hub
        </h1>
        <p className="text-xs md:text-sm text-[#E3EDE1] mt-3 max-w-3xl leading-relaxed">
          Every everyday organic waste item has a unique biological profile. Discover evidence-based instructions for preparing, composting, and applying kitchen scraps without attracting pests or causing root burn.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#E3EDE1] mr-2 flex items-center gap-1 font-semibold">
            <Filter className="w-3.5 h-3.5 text-[#B6D96A]" /> Filter:
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

      {/* Grid of Waste Guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            onClick={() => onNavigate(`/waste-to-garden/${guide.slug}`)}
            className="bg-white rounded-3xl overflow-hidden border border-[#E3EDE1] hover:border-[#387A53] transition cursor-pointer shadow-xs hover:shadow-md flex flex-col group"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={guide.featuredImage}
                alt={guide.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#183D32] text-white">
                {guide.readingTime}
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/90 text-[#183D32]">
                {guide.suitability}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#78847D] mb-1">
                  <span>{guide.category}</span>
                  <span className="text-[#387A53]">{guide.type}</span>
                </div>

                <h2 className="text-lg font-bold text-[#183D32] group-hover:text-[#387A53] transition mt-1 line-clamp-2">
                  {guide.title}
                </h2>

                <p className="text-xs text-[#78847D] mt-2 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E3EDE1] flex items-center justify-between text-xs font-bold text-[#387A53]">
                <span>Read Fact-Checked Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
