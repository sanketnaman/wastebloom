import React, { useState } from 'react';
import { Copy, Check, Printer, RotateCcw, Sprout, Info } from 'lucide-react';

interface MixPreset {
  id: string;
  name: string;
  targetDescription: string;
  components: {
    name: string;
    ratio: number; // percentage 0-100
    color: string;
  }[];
}

const MIX_PRESETS: MixPreset[] = [
  {
    id: 'seedling',
    name: 'All-Purpose Seedling & Container Mix',
    targetDescription: 'Lightweight, fine-textured blend for tender vegetable seedlings, microgreens, and potted herbs.',
    components: [
      { name: 'Coconut Coir or Screened Peat Moss', ratio: 40, color: '#8A6346' },
      { name: 'Finished Screened Homemade Compost', ratio: 40, color: '#387A53' },
      { name: 'Horticultural Perlite or Coarse Sand', ratio: 20, color: '#CBD5CD' },
    ],
  },
  {
    id: 'houseplants',
    name: 'Indoor Tropical Houseplant Aerated Blend',
    targetDescription: 'Chunky, fast-draining potting substrate designed to prevent root rot in Monstera, Pothos, and Ficus.',
    components: [
      { name: 'Coconut Coir or Peat', ratio: 30, color: '#8A6346' },
      { name: 'Mature Compost / Worm Castings', ratio: 30, color: '#387A53' },
      { name: 'Coarse Perlite or Pumice', ratio: 20, color: '#CBD5CD' },
      { name: 'Orchid Fir Bark Nuggets', ratio: 20, color: '#5C3A21' },
    ],
  },
  {
    id: 'raised-bed',
    name: 'Heavy-Feeder Raised Bed Soil Booster',
    targetDescription: 'Rich, moisture-retentive organic mix for tomatoes, squashes, peppers, and brassicas.',
    components: [
      { name: 'Finished Garden Compost', ratio: 50, color: '#387A53' },
      { name: 'Coir / Peat Fluff', ratio: 30, color: '#8A6346' },
      { name: 'Vermiculite or Rice Hulls', ratio: 20, color: '#CBD5CD' },
    ],
  },
  {
    id: 'succulent',
    name: 'Cactus, Succulent & Mediterranean Blend',
    targetDescription: 'Ultra-fast draining mineral mix for cacti, echeveria, lavender, and rosemary.',
    components: [
      { name: 'Coarse Washed Sand, Pumice, or Grit', ratio: 50, color: '#9CA3AF' },
      { name: 'Coconut Coir', ratio: 30, color: '#8A6346' },
      { name: 'Sifted Compost (for baseline nutrients)', ratio: 20, color: '#387A53' },
    ],
  },
];

export const PottingMixCalculator: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('seedling');
  const [unit, setUnit] = useState<'gallons' | 'litres'>('gallons');
  const [targetBatchVolume, setTargetBatchVolume] = useState<number>(5); // gallons or litres
  const [copied, setCopied] = useState(false);

  const currentPreset = MIX_PRESETS.find((p) => p.id === selectedPresetId) || MIX_PRESETS[0];

  const handleCopy = () => {
    const text = `WasteBloom Potting Mix Recipe:
- Blend: ${currentPreset.name}
- Total Batch: ${targetBatchVolume} ${unit}
- Ingredient Breakdown:
${currentPreset.components
  .map(
    (c) =>
      `  • ${c.name}: ${((c.ratio / 100) * targetBatchVolume).toFixed(1)} ${unit} (${c.ratio}%)`
  )
  .join('\n')}
Note: Starting guidelines; adjust based on local microclimate and container size.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedPresetId('seedling');
    setTargetBatchVolume(5);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E3EDE1]">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E3EDE1] text-[#183D32]">
            <Sprout className="w-3.5 h-3.5" /> Module E — Interactive Tool
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#183D32] mt-2">Garden Potting Mix Recipe Calculator</h2>
          <p className="text-[#78847D] text-sm mt-1">Formulate homemade, peat-free organic potting soil using compost and recycled amendments.</p>
        </div>

        <div className="flex bg-[#F8F6EE] p-1 rounded-xl border border-[#CBD5CD]">
          <button
            onClick={() => setUnit('gallons')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'gallons' ? 'bg-[#183D32] text-white shadow-sm' : 'text-[#78847D] hover:text-[#183D32]'}`}
          >
            Gallons / Quarts
          </button>
          <button
            onClick={() => setUnit('litres')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'litres' ? 'bg-[#183D32] text-white shadow-sm' : 'text-[#78847D] hover:text-[#183D32]'}`}
          >
            Litres
          </button>
        </div>
      </div>

      {/* Preset Recipe Selector */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-[#78847D] uppercase tracking-wider mb-2">Select Soil Blend Recipe</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MIX_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedPresetId(preset.id)}
              className={`text-left p-4 rounded-2xl border transition ${selectedPresetId === preset.id ? 'bg-[#E3EDE1] border-[#387A53] shadow-sm' : 'bg-[#F8F6EE] border-[#CBD5CD] hover:bg-[#E3EDE1]/50'}`}
            >
              <div className="font-bold text-[#183D32] text-sm">{preset.name}</div>
              <div className="text-xs text-[#78847D] mt-1">{preset.targetDescription}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Volume slider */}
      <div className="bg-[#F8F6EE] p-6 rounded-3xl border border-[#CBD5CD] mb-8">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-bold text-[#183D32]">Desired Total Batch Volume</label>
          <span className="text-base font-extrabold text-[#387A53]">{targetBatchVolume} {unit}</span>
        </div>
        <input
          type="range"
          min={1}
          max={unit === 'gallons' ? 50 : 200}
          step={unit === 'gallons' ? 1 : 5}
          value={targetBatchVolume}
          onChange={(e) => setTargetBatchVolume(parseFloat(e.target.value))}
          className="w-full accent-[#387A53] cursor-pointer"
        />
        <div className="flex justify-between text-xs text-[#78847D] mt-2">
          <span>{unit === 'gallons' ? '1 gal (Small planter)' : '5 L (1-2 pots)'}</span>
          <span>{unit === 'gallons' ? '50 gal (Full wheelbarrow)' : '200 L (Raised bed)'}</span>
        </div>
      </div>

      {/* Results Box */}
      <div className="bg-[#183D32] text-white p-6 md:p-8 rounded-3xl mb-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Batch Recipe</span>
            <h3 className="text-xl font-bold">{currentPreset.name}</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#B6D96A]" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Recipe'}
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

        {/* Component breakdown cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {currentPreset.components.map((comp) => {
            const compVolume = (comp.ratio / 100) * targetBatchVolume;
            return (
              <div key={comp.name} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between text-xs text-[#E3EDE1] mb-1">
                  <span>{comp.ratio}% of blend</span>
                </div>
                <div className="text-2xl font-extrabold text-[#B6D96A]">
                  {compVolume.toFixed(1)} <span className="text-xs font-normal text-white">{unit}</span>
                </div>
                <div className="text-xs font-medium text-white mt-1 leading-snug">{comp.name}</div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer per PRD §8.4 */}
        <div className="bg-white/10 p-4 rounded-2xl border border-white/15 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#B6D96A] shrink-0 mt-0.5" />
          <div className="text-xs text-[#E3EDE1] leading-relaxed">
            <strong className="text-white block font-semibold text-sm mb-0.5">Horticultural Starting Recipe Disclaimer:</strong>
            Mix presets are provided as general starting recipes and baseline benchmarks, not universal horticultural prescriptions. Soil aeration and moisture-retention requirements vary according to container size, ambient humidity, temperature, and specific cultivar needs.
          </div>
        </div>
      </div>
    </div>
  );
};
