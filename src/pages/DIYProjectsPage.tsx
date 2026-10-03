import React, { useState } from 'react';
import { ArrowRight, Hammer, Clock, DollarSign, Filter } from 'lucide-react';
import { diyProjects } from '../data/diyProjects';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface DIYProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const DIYProjectsPage: React.FC<DIYProjectsPageProps> = ({ onNavigate }) => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const difficulties = ['All', 'Easy', 'Moderate'];

  const filtered = diyProjects.filter(
    (p) => filterDifficulty === 'All' || p.difficulty === filterDifficulty
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SEOHead
        title="DIY Recycled Garden Projects – Upcycling Household Containers"
        description="Creative, zero-cost garden projects using 2L bottles, egg cartons, 5-gallon buckets, and tin cans. Step-by-step build blueprints."
      />

      <Breadcrumbs
        items={[{ label: 'DIY Garden Projects' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="bg-[#183D32] text-white p-8 md:p-12 rounded-3xl shadow-md border border-white/10">
        <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Module D — Creative Upcycling Blueprints</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
          Upcycle Discarded Materials into Garden Planters
        </h1>
        <p className="text-xs md:text-sm text-[#E3EDE1] mt-3 max-w-3xl leading-relaxed">
          Before sending plastic bottles, egg cartons, and tin cans to the landfill or recycling bin, give them a productive second life as self-watering planters, seed pods, and aerated compost bins.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#E3EDE1] mr-2 flex items-center gap-1 font-semibold">
            <Filter className="w-3.5 h-3.5 text-[#B6D96A]" /> Filter Difficulty:
          </span>
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setFilterDifficulty(d)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                filterDifficulty === d
                  ? 'bg-[#B6D96A] text-[#183D32] shadow-xs'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <a
            key={project.id}
            href={`/diy-garden-projects/${project.slug}`} onClick={(e) => { e.preventDefault(); onNavigate(`/diy-garden-projects/${project.slug}`); }}
            className="bg-white rounded-3xl overflow-hidden border border-[#E3EDE1] hover:border-[#387A53] transition cursor-pointer shadow-xs hover:shadow-md flex flex-col group"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.featuredImage}
                alt={project.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#183D32] text-white">
                {project.difficulty}
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/90 text-[#183D32]">
                {project.costEstimate}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#78847D] mb-2 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#387A53]" /> {project.timeEstimate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-[#8A6346]" /> {project.costEstimate}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-[#183D32] group-hover:text-[#387A53] transition mt-1 line-clamp-2">
                  {project.title}
                </h2>

                <p className="text-xs text-[#78847D] mt-2 line-clamp-2 leading-relaxed">
                  {project.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E3EDE1] flex items-center justify-between text-xs font-bold text-[#387A53]">
                <span>View Build Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
