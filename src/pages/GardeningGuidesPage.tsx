import React from 'react';
import { ArrowRight, BookOpen, Sprout } from 'lucide-react';
import { gardeningGuides } from '../data/gardeningGuides';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface GardeningGuidesPageProps {
  onNavigate: (path: string) => void;
}

export const GardeningGuidesPage: React.FC<GardeningGuidesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SEOHead
        title="Gardening Guides – Soil Microbiology & Sustainable Practices"
        description="Comprehensive horticultural education on building healthy soil food webs, organic pest management, and sheet mulching."
      />

      <Breadcrumbs
        items={[{ label: 'Gardening Guides' }]}
        onNavigate={onNavigate}
      />

      <div className="bg-[#183D32] text-white p-8 md:p-12 rounded-3xl shadow-md border border-white/10">
        <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Module F — Gardening Masterclasses</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
          Organic Gardening & Soil Health Guides
        </h1>
        <p className="text-xs md:text-sm text-[#E3EDE1] mt-3 max-w-3xl leading-relaxed">
          Plants do not grow in sterile dirt—they thrive within a living biological network. Learn how to nurture mycorrhizal fungi, control aphids naturally, and protect your soil structure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gardeningGuides.map((guide) => (
          <div
            key={guide.id}
            onClick={() => onNavigate(`/gardening-guides/${guide.slug}`)}
            className="bg-white rounded-3xl overflow-hidden border border-[#E3EDE1] hover:border-[#387A53] transition cursor-pointer shadow-xs hover:shadow-md flex flex-col group"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={guide.featuredImage}
                alt={guide.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#183D32] text-white">
                {guide.readingTime}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#387A53]">
                  {guide.category}
                </span>
                <h2 className="text-lg font-bold text-[#183D32] group-hover:text-[#387A53] transition mt-1 line-clamp-2">
                  {guide.title}
                </h2>
                <p className="text-xs text-[#78847D] mt-2 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E3EDE1] flex items-center justify-between text-xs font-bold text-[#387A53]">
                <span>Read Masterclass</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
