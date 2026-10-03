import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles, BookOpen, Wrench, Hammer, HelpCircle } from 'lucide-react';
import { wasteGuides } from '../data/wasteGuides';
import { compostingGuides } from '../data/compostingGuides';
import { diyProjects } from '../data/diyProjects';
import { gardeningGuides } from '../data/gardeningGuides';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'waste' | 'compost' | 'diy' | 'tools'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
          inputRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search items
  const allResults: {
    title: string;
    description: string;
    path: string;
    category: 'waste' | 'compost' | 'diy' | 'tools';
    badge: string;
  }[] = [];

  // 1. Waste Guides
  wasteGuides.forEach((w) => {
    allResults.push({
      title: w.title,
      description: w.excerpt,
      path: `/waste-to-garden/${w.slug}`,
      category: 'waste',
      badge: w.category,
    });
  });

  // 2. Composting Guides
  compostingGuides.forEach((c) => {
    allResults.push({
      title: c.title,
      description: c.excerpt,
      path: `/composting/${c.slug}`,
      category: 'compost',
      badge: 'Composting Guide',
    });
  });

  // 3. DIY Projects
  diyProjects.forEach((d) => {
    allResults.push({
      title: d.title,
      description: d.excerpt,
      path: `/diy-garden-projects/${d.slug}`,
      category: 'diy',
      badge: `DIY (${d.difficulty})`,
    });
  });

  // 4. Gardening Guides
  gardeningGuides.forEach((g) => {
    allResults.push({
      title: g.title,
      description: g.excerpt,
      path: `/gardening-guides/${g.slug}`,
      category: 'compost',
      badge: g.category,
    });
  });

  // 5. Calculators & Tools
  const tools = [
    { title: 'Compost Bin Volume Calculator', description: 'Estimate bin capacity and cubic yard output', path: '/tools/compost-calculator', badge: 'Tool' },
    { title: 'Brown-to-Green Ratio Calculator', description: 'Balance carbon & nitrogen volumes to stop smells', path: '/tools/brown-green-calculator', badge: 'Tool' },
    { title: 'Soil Amendment Calculator', description: 'Calculate cubic yards and bags for garden beds', path: '/tools/soil-amendment-calculator', badge: 'Tool' },
    { title: 'Potting Mix Recipe Calculator', description: 'Formulate seed starting and houseplant mixes', path: '/tools/potting-mix-calculator', badge: 'Tool' },
    { title: 'AI Waste Scanner', description: 'Scan kitchen scraps for gardening suitability', path: '/waste-scanner', badge: 'AI Tool' },
  ];
  tools.forEach((t) => {
    allResults.push({
      title: t.title,
      description: t.description,
      path: t.path,
      category: 'tools',
      badge: t.badge,
    });
  });

  // Filter
  const filtered = allResults.filter((item) => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q)
    );
  });

  const popularQueries = [
    'Banana Peels',
    'Eggshells',
    'Coffee Grounds',
    'Compost Smells',
    'Plastic Bottle Planter',
    'Green vs Brown',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 md:p-12 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-[#CBD5CD] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search input header */}
        <div className="p-4 sm:p-5 border-b border-[#CBD5CD] flex items-center gap-3 bg-[#F8F6EE]">
          <Search className="w-5 h-5 text-[#387A53] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search waste materials, composting guides, DIY projects, tools..."
            className="w-full bg-transparent text-sm sm:text-base text-[#26332D] placeholder-[#78847D] focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg hover:bg-[#CBD5CD]/40 text-[#78847D]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#CBD5CD]/40 text-[#78847D] text-xs font-semibold px-2.5 transition"
          >
            Esc
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-5 py-2.5 bg-white border-b border-[#E3EDE1] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#78847D] font-medium mr-1 shrink-0">Filter:</span>
          {(['all', 'waste', 'compost', 'diy', 'tools'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-lg capitalize transition shrink-0 ${
                activeFilter === cat
                  ? 'bg-[#183D32] text-white font-bold'
                  : 'bg-[#F8F6EE] text-[#78847D] hover:text-[#183D32]'
              }`}
            >
              {cat === 'all' ? 'All Results' : cat === 'waste' ? 'Waste Guides' : cat === 'compost' ? 'Composting' : cat === 'diy' ? 'DIY Projects' : 'Tools'}
            </button>
          ))}
        </div>

        {/* Quick Suggestion Pills if query is empty */}
        {!query && (
          <div className="p-4 bg-[#F8F6EE]/60 border-b border-[#E3EDE1] text-xs">
            <span className="text-[#78847D] block mb-2 font-bold uppercase tracking-wider text-[10px]">Popular Searches:</span>
            <div className="flex flex-wrap gap-1.5">
              {popularQueries.map((pq) => (
                <button
                  key={pq}
                  onClick={() => setQuery(pq)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#CBD5CD] text-[#26332D] hover:bg-[#E3EDE1] transition"
                >
                  {pq}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        <div className="p-4 overflow-y-auto divide-y divide-[#E3EDE1] flex-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#78847D]">
              <p className="text-sm font-bold text-[#183D32] mb-1">No guides or tools matched "{query}"</p>
              <p>Try searching for banana peels, coffee grounds, eggshells, or compost smell fixes.</p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
                className="py-3 px-3 hover:bg-[#F8F6EE] rounded-xl cursor-pointer transition flex items-start justify-between gap-4 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E3EDE1] text-[#183D32]">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#183D32] group-hover:text-[#387A53] transition line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#78847D] line-clamp-1 mt-0.5">{item.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#CBD5CD] group-hover:text-[#387A53] transition shrink-0 mt-2" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-[#F8F6EE] border-t border-[#CBD5CD] text-[11px] text-[#78847D] flex justify-between items-center">
          <span>Found {filtered.length} matching resources</span>
          <span className="text-[#387A53] font-semibold">Press Enter to select</span>
        </div>
      </div>
    </div>
  );
};
