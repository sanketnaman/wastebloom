import React, { useState } from 'react';
import { Copy, Check, Printer, RotateCcw, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

interface MaterialOption {
  name: string;
  cnRatio: number;
  description: string;
}

const GREEN_MATERIALS: MaterialOption[] = [
  { name: 'Kitchen Vegetable & Fruit Scraps', cnRatio: 18, description: 'Moist kitchen peels, cores, and trims' },
  { name: 'Used Coffee Grounds', cnRatio: 20, description: 'Spent coffee grounds & paper filters' },
  { name: 'Fresh Green Grass Clippings', cnRatio: 19, description: 'Freshly mowed lawn clippings' },
  { name: 'Garden Plant Trimmings & Weeds', cnRatio: 25, description: 'Green stems, flower heads, non-seeding weeds' },
  { name: 'Herbivore Manure (Horse / Cow)', cnRatio: 15, description: 'Aged vegetarian animal manure' },
];

const BROWN_MATERIALS: MaterialOption[] = [
  { name: 'Dry Deciduous Leaves', cnRatio: 60, description: 'Crushed dry autumn leaves' },
  { name: 'Shredded Corrugated Cardboard', cnRatio: 350, description: 'Unbleached brown cardboard strips' },
  { name: 'Straw / Dry Hay', cnRatio: 80, description: 'Agricultural straw bedding' },
  { name: 'Wood Chips & Shavings', cnRatio: 400, description: 'Coarse untreated wood mulch' },
  { name: 'Shredded Newspaper / Paper Bags', cnRatio: 175, description: 'Plain newsprint and grocery bags' },
];

export const BrownGreenCalculator: React.FC = () => {
  const [selectedGreen, setSelectedGreen] = useState<string>(GREEN_MATERIALS[0].name);
  const [greenVolume, setGreenVolume] = useState<number>(2); // buckets / gallons
  const [selectedBrown, setSelectedBrown] = useState<string>(BROWN_MATERIALS[0].name);
  const [brownVolume, setBrownVolume] = useState<number>(4);
  const [copied, setCopied] = useState(false);

  const greenObj = GREEN_MATERIALS.find((g) => g.name === selectedGreen) || GREEN_MATERIALS[0];
  const brownObj = BROWN_MATERIALS.find((b) => b.name === selectedBrown) || BROWN_MATERIALS[0];

  // Estimated weighted C:N computation
  const totalVolume = greenVolume + brownVolume;
  const estimatedCN = totalVolume > 0
    ? Math.round((greenVolume * greenObj.cnRatio + brownVolume * brownObj.cnRatio) / totalVolume)
    : 30;

  const volumeRatio = greenVolume > 0 ? (brownVolume / greenVolume).toFixed(1) : '0';

  // Analysis
  let status: 'balanced' | 'needs-browns' | 'too-carbon';
  let statusTitle = '';
  let statusAdvice = '';

  if (estimatedCN < 25) {
    status = 'needs-browns';
    statusTitle = 'High Nitrogen Alert (Too Many Greens)';
    const recommendedBrowns = Math.max(1, Math.round(((30 - greenObj.cnRatio) * greenVolume) / (brownObj.cnRatio - 30)));
    statusAdvice = `Your mixture has an estimated C:N of ~${estimatedCN}:1. This can cause anaerobic rotting, rotten egg odor, and excess moisture. Add approximately ${recommendedBrowns} more bucket(s) of ${brownObj.name} to bring the ratio closer to the 30:1 sweet spot.`;
  } else if (estimatedCN > 45) {
    status = 'too-carbon';
    statusTitle = 'High Carbon Alert (Too Many Browns)';
    statusAdvice = `Your mixture has an estimated C:N of ~${estimatedCN}:1. While this will not smell, it will decompose very slowly and will not heat up. Add 1–2 more buckets of kitchen scraps or fresh grass to accelerate microbial activity.`;
  } else {
    status = 'balanced';
    statusTitle = 'Optimally Balanced Compost Recipe!';
    statusAdvice = `Estimated C:N is ~${estimatedCN}:1 (Ideal range: 25:1 to 35:1). This mixture provides sufficient nitrogen to feed thermophilic bacteria and enough carbon aeration to prevent foul odors.`;
  }

  const handleCopy = () => {
    const text = `WasteBloom Brown-to-Green Compost Balance:
- Greens: ${greenVolume} buckets of ${greenObj.name} (C:N ~${greenObj.cnRatio}:1)
- Browns: ${brownVolume} buckets of ${brownObj.name} (C:N ~${brownObj.cnRatio}:1)
- Volume Ratio: ${volumeRatio}:1 (Browns to Greens)
- Estimated C:N Ratio: ~${estimatedCN}:1
- Assessment: ${statusTitle}
- Recommendation: ${statusAdvice}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedGreen(GREEN_MATERIALS[0].name);
    setGreenVolume(2);
    setSelectedBrown(BROWN_MATERIALS[0].name);
    setBrownVolume(4);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E3EDE1]">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E3EDE1] text-[#183D32]">
            <Scale className="w-3.5 h-3.5" /> Module E — Interactive Tool
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#183D32] mt-2">Compost Brown-to-Green Ratio Calculator</h2>
          <p className="text-[#78847D] text-sm mt-1">Balance carbon and nitrogen inputs to avoid foul odors and maximize heat.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Greens Column */}
        <div className="bg-[#F8F6EE] p-6 rounded-3xl border border-[#CBD5CD]">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#387A53] text-white text-xs font-bold rounded-lg uppercase tracking-wider">
              Green Materials (Nitrogen)
            </span>
            <span className="text-xs font-bold text-[#387A53]">C:N ~{greenObj.cnRatio}:1</span>
          </div>

          <label className="block text-xs font-bold text-[#183D32] mb-1">Select Green Ingredient</label>
          <select
            value={selectedGreen}
            onChange={(e) => setSelectedGreen(e.target.value)}
            className="w-full p-3 bg-white border border-[#CBD5CD] rounded-xl text-sm font-medium text-[#26332D] mb-4 focus:outline-none focus:ring-2 focus:ring-[#387A53]"
          >
            {GREEN_MATERIALS.map((g) => (
              <option key={g.name} value={g.name}>
                {g.name} (C:N ~{g.cnRatio}:1)
              </option>
            ))}
          </select>

          <div className="mb-2 flex justify-between items-center">
            <label className="text-xs font-bold text-[#183D32]">Quantity (Buckets or Gallons)</label>
            <span className="text-sm font-extrabold text-[#387A53]">{greenVolume} bucket(s)</span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            step={0.5}
            value={greenVolume}
            onChange={(e) => setGreenVolume(parseFloat(e.target.value))}
            className="w-full accent-[#387A53] cursor-pointer"
          />
          <p className="text-xs text-[#78847D] mt-2">{greenObj.description}</p>
        </div>

        {/* Browns Column */}
        <div className="bg-[#F8F6EE] p-6 rounded-3xl border border-[#8A6346]/30">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#8A6346] text-white text-xs font-bold rounded-lg uppercase tracking-wider">
              Brown Materials (Carbon)
            </span>
            <span className="text-xs font-bold text-[#8A6346]">C:N ~{brownObj.cnRatio}:1</span>
          </div>

          <label className="block text-xs font-bold text-[#183D32] mb-1">Select Brown Ingredient</label>
          <select
            value={selectedBrown}
            onChange={(e) => setSelectedBrown(e.target.value)}
            className="w-full p-3 bg-white border border-[#CBD5CD] rounded-xl text-sm font-medium text-[#26332D] mb-4 focus:outline-none focus:ring-2 focus:ring-[#8A6346]"
          >
            {BROWN_MATERIALS.map((b) => (
              <option key={b.name} value={b.name}>
                {b.name} (C:N ~{b.cnRatio}:1)
              </option>
            ))}
          </select>

          <div className="mb-2 flex justify-between items-center">
            <label className="text-xs font-bold text-[#183D32]">Quantity (Buckets or Gallons)</label>
            <span className="text-sm font-extrabold text-[#8A6346]">{brownVolume} bucket(s)</span>
          </div>
          <input
            type="range"
            min={1}
            max={15}
            step={0.5}
            value={brownVolume}
            onChange={(e) => setBrownVolume(parseFloat(e.target.value))}
            className="w-full accent-[#8A6346] cursor-pointer"
          />
          <p className="text-xs text-[#78847D] mt-2">{brownObj.description}</p>
        </div>
      </div>

      {/* Results Container */}
      <div className="bg-[#183D32] text-white p-6 md:p-8 rounded-3xl mb-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Pile Balance Assessment</span>
            <h3 className="text-xl font-bold flex items-center gap-2 mt-1">
              {status === 'balanced' ? (
                <CheckCircle className="w-5 h-5 text-[#B6D96A]" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-300" />
              )}
              {statusTitle}
            </h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#B6D96A]" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium transition"
            >
              <Printer className="w-3.5 h-3.5" /> Print
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Volume Balance Ratio</span>
            <div className="text-2xl font-extrabold text-white mt-1">
              {volumeRatio} : 1
            </div>
            <span className="text-xs text-[#E3EDE1]">Browns to Greens</span>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Estimated Chemical C:N</span>
            <div className="text-2xl font-extrabold text-[#B6D96A] mt-1">
              ~{estimatedCN} : 1
            </div>
            <span className="text-xs text-[#E3EDE1]">Target Range: 25:1 to 35:1</span>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Pile Status</span>
            <div className={`text-lg font-bold mt-1.5 ${status === 'balanced' ? 'text-[#B6D96A]' : 'text-amber-300'}`}>
              {status === 'balanced' ? 'Sweet & Active' : status === 'needs-browns' ? 'Risk of Odor' : 'Slow Decomposition'}
            </div>
          </div>
        </div>

        {/* Detailed action advice */}
        <div className="bg-white/10 p-5 rounded-2xl border border-white/15 text-xs text-[#E3EDE1] leading-relaxed">
          <strong className="text-white text-sm block mb-1">Recommended Practical Action:</strong>
          {statusAdvice}
        </div>
      </div>

      <div className="border-t border-[#E3EDE1] pt-6 text-xs text-[#78847D] space-y-2">
        <h4 className="font-bold text-[#183D32] text-sm">Horticultural Science Disclaimer:</h4>
        <p>• <strong>Moisture and Bulk Density:</strong> A 5-gallon bucket of damp kitchen scraps weighs much more than a 5-gallon bucket of dry fluffy leaves. This calculator incorporates volumetric estimation combined with typical agricultural bulk densities to provide a safe home recipe.</p>
        <p>• <strong>Golden Rule of Thumb:</strong> When in doubt, always add more dry brown carbon. A pile with too much carbon decomposed slowly with zero odor; a pile with too much nitrogen rots anaerobically and produces foul ammonia and sulfur smells.</p>
      </div>
    </div>
  );
};
