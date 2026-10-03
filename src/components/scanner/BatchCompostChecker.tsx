import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Search, Sparkles } from 'lucide-react';

interface BatchItemResult {
  name: string;
  suitability: 'Suitable' | 'Suitable with preparation' | 'Not recommended';
  type: 'Green (Nitrogen)' | 'Brown (Carbon)' | 'Prohibited / Non-organic';
  prep: string;
  notes: string;
}

const KNOWN_KNOWLEDGE_BASE: Record<string, BatchItemResult> = {
  'banana peel': {
    name: 'Banana Peels',
    suitability: 'Suitable with preparation',
    type: 'Green (Nitrogen)',
    prep: 'Chop into 1-inch pieces, remove plastic PLU stickers.',
    notes: 'Rich in potassium and calcium. Layer with dry leaves.',
  },
  'eggshell': {
    name: 'Eggshells',
    suitability: 'Suitable with preparation',
    type: 'Brown (Carbon)',
    prep: 'Rinse, bake at 200°F to sterilize, and grind into fine powder.',
    notes: '95% Calcium carbonate. Coarse shards take years to break down.',
  },
  'coffee ground': {
    name: 'Used Coffee Grounds',
    suitability: 'Suitable',
    type: 'Green (Nitrogen)',
    prep: 'Cool slightly; compost paper coffee filters right along with them.',
    notes: 'Near neutral pH (6.5-6.8); rich nitrogen source. Keep to <20% of pile.',
  },
  'orange peel': {
    name: 'Orange & Citrus Rinds',
    suitability: 'Suitable with preparation',
    type: 'Green (Nitrogen)',
    prep: 'Chop small to break waxy cuticle; limit in indoor worm bins.',
    notes: 'Decomposes completely in outdoor piles; natural d-limonene masks odors.',
  },
  'citrus': {
    name: 'Citrus Peels',
    suitability: 'Suitable with preparation',
    type: 'Green (Nitrogen)',
    prep: 'Chop small to break waxy cuticle; limit in indoor worm bins.',
    notes: 'Decomposes completely in outdoor piles; natural d-limonene masks odors.',
  },
  'tea bag': {
    name: 'Tea Bags',
    suitability: 'Suitable with preparation',
    type: 'Green (Nitrogen)',
    prep: 'Cut open and compost ONLY loose leaves unless verified 100% plastic-free paper.',
    notes: 'Up to 70% of commercial teabags contain non-biodegradable PET or nylon microplastics.',
  },
  'bread': {
    name: 'Bread & Bakery Crusts',
    suitability: 'Suitable with preparation',
    type: 'Brown (Carbon)',
    prep: 'Bury deep in the center of the pile; avoid surface tossing.',
    notes: 'Starchy carbohydrates break down rapidly but can attract mice/rats if left exposed.',
  },
  'meat': {
    name: 'Meat, Bones & Fat',
    suitability: 'Not recommended',
    type: 'Prohibited / Non-organic',
    prep: 'Only compostable in sealed Bokashi anaerobic digesters or municipal hot composting.',
    notes: 'Rots anaerobically in home piles, producing foul putrid odors and attracting rodents and raccoons.',
  },
  'dairy': {
    name: 'Dairy (Cheese, Milk, Yogurt)',
    suitability: 'Not recommended',
    type: 'Prohibited / Non-organic',
    prep: 'Exclude from regular backyard piles; safe for Bokashi systems.',
    notes: 'High fat and protein content creates severe odors and attracts neighborhood pests.',
  },
  'plastic': {
    name: 'Plastic & Synthetics',
    suitability: 'Not recommended',
    type: 'Prohibited / Non-organic',
    prep: 'Do not place in compost.',
    notes: 'Does not biodegrade; contaminates soil with synthetic microplastics.',
  },
  'onion': {
    name: 'Onion & Garlic Skins',
    suitability: 'Suitable',
    type: 'Brown (Carbon)',
    prep: 'Toss dry papery skins into pile; avoid overloading worm bins.',
    notes: 'Rich in sulfur and quercetin, natural antifungal properties.',
  },
  'potato': {
    name: 'Potato Peels',
    suitability: 'Suitable with preparation',
    type: 'Green (Nitrogen)',
    prep: 'Chop sprout eyes so they do not grow potato vines; avoid late-blight diseased peels.',
    notes: 'High potassium and starch; rapid decomposition in warm heaps.',
  },
  'grass': {
    name: 'Fresh Lawn Grass Clippings',
    suitability: 'Suitable with preparation',
    type: 'Green (Nitrogen)',
    prep: 'Spread in thin 1-inch layers mixed with dry leaves to prevent matting.',
    notes: 'Very high nitrogen; if dumped in thick wet piles, turns into smelly slimy sludge.',
  },
  'leaves': {
    name: 'Dry Autumn Leaves',
    suitability: 'Suitable',
    type: 'Brown (Carbon)',
    prep: 'Run over with lawn mower to shred for 3x faster breakdown.',
    notes: 'The gold standard carbon brown material. C:N ratio roughly 60:1.',
  },
  'cardboard': {
    name: 'Corrugated Brown Cardboard',
    suitability: 'Suitable with preparation',
    type: 'Brown (Carbon)',
    prep: 'Strip shipping plastic tape, shred or rip into small strips.',
    notes: 'Clean cellulose carbon source. C:N ratio roughly 350:1.',
  },
};

export const BatchCompostChecker: React.FC = () => {
  const [inputText, setInputText] = useState('Banana peels, coffee grounds, eggshells, citrus peels, bread, plastic wrap');
  const [results, setResults] = useState<BatchItemResult[]>([]);

  const handleCheck = () => {
    const rawItems = inputText
      .split(/[,;\n]/)
      .map((i) => i.trim().toLowerCase())
      .filter((i) => i.length > 0);

    const checked: BatchItemResult[] = rawItems.map((query) => {
      // Find matching key
      for (const [key, data] of Object.entries(KNOWN_KNOWLEDGE_BASE)) {
        if (query.includes(key) || key.includes(query)) {
          return { ...data, name: query.charAt(0).toUpperCase() + query.slice(1) };
        }
      }

      // Default heuristic
      const isMeatOrDairy = /meat|bone|fish|chicken|pork|cheese|milk|butter|grease|oil/.test(query);
      const isPlastic = /plastic|wrapper|bag|synthetic|foil|metal/.test(query);

      if (isMeatOrDairy || isPlastic) {
        return {
          name: query.charAt(0).toUpperCase() + query.slice(1),
          suitability: 'Not recommended',
          type: 'Prohibited / Non-organic',
          prep: 'Discard or process in municipal industrial facility.',
          notes: 'High risk of pests, severe odor, or non-biodegradable contamination.',
        };
      }

      return {
        name: query.charAt(0).toUpperCase() + query.slice(1),
        suitability: 'Suitable with preparation',
        type: 'Green (Nitrogen)',
        prep: 'Chop small and balance with 2x dry brown leaves or shredded paper.',
        notes: 'Organic matter decomposes well in aerated piles.',
      };
    });

    setResults(checked);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E3EDE1]">
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E3EDE1] text-[#183D32]">
          <Sparkles className="w-3.5 h-3.5 text-[#387A53]" /> Module B — Batch Analysis
        </span>
        <h3 className="text-2xl font-extrabold text-[#183D32] mt-2">What Can I Compost? Batch Checker</h3>
        <p className="text-xs text-[#78847D] mt-1">
          Type or paste a list of everyday kitchen items separated by commas to check their composting suitability simultaneously.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. banana peels, coffee grounds, eggshells, pizza box, chicken bones..."
          className="w-full p-4 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD] text-sm text-[#26332D] focus:outline-none focus:ring-2 focus:ring-[#387A53]"
        />

        <div className="flex gap-3">
          <button
            onClick={handleCheck}
            className="px-6 py-2.5 rounded-xl bg-[#183D32] hover:bg-[#387A53] text-white text-xs font-bold shadow-sm transition flex items-center gap-2"
          >
            <Search className="w-4 h-4" /> Check Items
          </button>
          <button
            onClick={() => {
              setInputText('Apple cores, avocado skins, teabags, citrus rinds, newspaper, cheese');
              setResults([]);
            }}
            className="px-4 py-2.5 rounded-xl bg-[#F8F6EE] hover:bg-[#E3EDE1] text-[#26332D] text-xs font-medium border border-[#CBD5CD] transition"
          >
            Load Example List
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="space-y-3 animate-fadeIn">
          <h4 className="text-xs font-bold text-[#78847D] uppercase tracking-wider">
            Batch Breakdown ({results.length} items checked)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {results.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border bg-[#F8F6EE] flex items-start gap-3 border-[#CBD5CD]"
              >
                {item.suitability === 'Suitable' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : item.suitability === 'Suitable with preparation' ? (
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}

                <div className="flex-1 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[#183D32] text-sm">{item.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        item.suitability === 'Suitable'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.suitability === 'Suitable with preparation'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {item.suitability}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#387A53] font-medium mt-0.5">
                    Classification: {item.type}
                  </div>
                  <p className="text-[#26332D] mt-1 font-medium">Prep: {item.prep}</p>
                  <p className="text-[#78847D] mt-0.5">{item.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
