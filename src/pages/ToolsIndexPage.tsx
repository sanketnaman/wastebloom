import React from 'react';
import { Calculator, Layers, Shovel, Sprout, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ToolsIndexPageProps {
  onNavigate: (path: string) => void;
}

export const ToolsIndexPage: React.FC<ToolsIndexPageProps> = ({ onNavigate }) => {
  const tools = [
    {
      id: 'compost-calculator',
      name: 'Compost Bin Volume Calculator',
      desc: 'Estimate physical bin volume in litres, cubic feet, and cubic yards, plus projected finished compost shrink yield.',
      icon: Calculator,
      color: '#387A53',
      path: '/tools/compost-calculator',
      badge: 'Bin Sizing',
    },
    {
      id: 'brown-green-calculator',
      name: 'Compost Brown-to-Green Ratio Calculator',
      desc: 'Balance carbon & nitrogen volumes to eliminate foul odors, prevent slimy rotting, and reach optimal 30:1 C:N.',
      icon: Layers,
      color: '#8A6346',
      path: '/tools/brown-green-calculator',
      badge: 'C:N Chemistry',
    },
    {
      id: 'soil-amendment-calculator',
      name: 'Soil Amendment & Mulch Calculator',
      desc: 'Calculate exact cubic yards, litres, and bags of compost or mulch needed for raised beds and garden borders.',
      icon: Shovel,
      color: '#387A53',
      path: '/tools/soil-amendment-calculator',
      badge: 'Garden Bed Planning',
    },
    {
      id: 'potting-mix-calculator',
      name: 'Garden Potting Mix Recipe Calculator',
      desc: 'Formulate custom homemade potting soils for seedlings, indoor houseplants, and raised beds using compost and peat-free materials.',
      icon: Sprout,
      color: '#387A53',
      path: '/tools/potting-mix-calculator',
      badge: 'Soil Recipes',
    },
    {
      id: 'waste-scanner',
      name: 'AI Waste Scanner',
      desc: 'Upload a photograph of any household waste item to identify it and receive instant preparation and gardening advice.',
      icon: Sparkles,
      color: '#183D32',
      path: '/waste-scanner',
      badge: 'AI Vision Tool',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SEOHead
        title="Interactive Gardening & Composting Calculators – WasteBloom"
        description="Free, deterministic gardening tools: Compost Bin Calculator, Brown-to-Green Ratio Tool, Soil Amendment Estimator, and Potting Mix Builder."
      />

      <Breadcrumbs
        items={[{ label: 'Gardening Tools' }]}
        onNavigate={onNavigate}
      />

      <div className="bg-[#183D32] text-white p-8 md:p-12 rounded-3xl shadow-md border border-white/10">
        <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Module E — Deterministic Tools</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
          Interactive Gardening Tools
        </h1>
        <p className="text-xs md:text-sm text-[#E3EDE1] mt-3 max-w-3xl leading-relaxed">
          Accurate, science-grounded gardening formulas that require zero guesswork. All calculators run 100% deterministically with instant metric and imperial conversions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.id}
              onClick={() => onNavigate(tool.path)}
              className="bg-white p-8 rounded-3xl border border-[#E3EDE1] hover:border-[#387A53] transition cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E3EDE1] text-[#183D32] flex items-center justify-center group-hover:bg-[#183D32] group-hover:text-white transition">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F8F6EE] text-[#183D32] border border-[#CBD5CD]">
                    {tool.badge}
                  </span>
                </div>

                <h2 className="text-xl font-extrabold text-[#183D32] group-hover:text-[#387A53] transition">
                  {tool.name}
                </h2>
                <p className="text-xs text-[#78847D] mt-2 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E3EDE1] flex items-center justify-between text-xs font-bold text-[#387A53]">
                <span>Launch Calculator</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
