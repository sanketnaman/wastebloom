import React, { useState } from 'react';
import { Copy, Check, Printer, RotateCcw, Info, Box } from 'lucide-react';
import { BIN_PRESETS, computeBinVolume, US_GALLONS_PER_CUBIC_FOOT, HOT_PILE_MIN_CU_FT, LITRES_PER_CUBIC_METER } from '../../lib/compostVolume';

export const CompostCalculator: React.FC = () => {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');

  // Dimensions
  const [length, setLength] = useState<number>(3); // ft or m
  const [width, setWidth] = useState<number>(3);
  const [height, setHeight] = useState<number>(3);
  const [copied, setCopied] = useState(false);

  const presets = BIN_PRESETS;

  const volume = computeBinVolume(length, width, height, unit);
  const { cuFt, cuYd, litres, gallons, finishedMinCuFt, finishedMaxCuFt, finishedMinLitres, finishedMaxLitres } = volume;

  const handleCopy = () => {
    const text = `WasteBloom Compost Bin Volume Calculation:
- Dimensions: ${length} x ${width} x ${height} ${unit === 'imperial' ? 'feet' : 'meters'}
- Total Raw Volume: ${cuFt.toFixed(1)} cu ft (${cuYd.toFixed(2)} cu yds / ${Math.round(litres)} litres / ${Math.round(gallons)} US gallons)
- Estimated Finished Compost Yield (40% to 60% volume retained): ~${finishedMinCuFt.toFixed(1)} to ${finishedMaxCuFt.toFixed(1)} cu ft (~${Math.round(finishedMinLitres)} to ${Math.round(finishedMaxLitres)} litres)
- Hot-pile self-insulating mass (>= ${HOT_PILE_MIN_CU_FT} cu ft): ${volume.isHotPileSized ? 'yes' : 'no'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setLength(unit === 'imperial' ? 3 : 1);
    setWidth(unit === 'imperial' ? 3 : 1);
    setHeight(unit === 'imperial' ? 3 : 1);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E3EDE1]">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E3EDE1] text-[#183D32]">
            <Box className="w-3.5 h-3.5" /> Module E — Interactive Tool
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#183D32] mt-2">Compost Bin Volume Calculator</h2>
          <p className="text-[#78847D] text-sm mt-1">Estimate total bin volume and projected finished compost yield.</p>
        </div>

        {/* Unit switcher */}
        <div className="flex bg-[#F8F6EE] p-1 rounded-xl border border-[#CBD5CD]">
          <button
            onClick={() => { setUnit('imperial'); setLength(3); setWidth(3); setHeight(3); }}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'imperial' ? 'bg-[#183D32] text-white shadow-sm' : 'text-[#78847D] hover:text-[#183D32]'}`}
          >
            Feet & Inches
          </button>
          <button
            onClick={() => { setUnit('metric'); setLength(1); setWidth(1); setHeight(1); }}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'metric' ? 'bg-[#183D32] text-white shadow-sm' : 'text-[#78847D] hover:text-[#183D32]'}`}
          >
            Meters & Litres
          </button>
        </div>
      </div>

      {/* Preset pills */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-[#78847D] uppercase tracking-wider mb-2">Quick Presets</label>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p.name}
              onClick={() => {
                setUnit(p.unit);
                setLength(p.length);
                setWidth(p.width);
                setHeight(p.height);
              }}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#F8F6EE] hover:bg-[#E3EDE1] text-[#26332D] border border-[#CBD5CD] transition"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#F8F6EE] p-5 rounded-2xl border border-[#E3EDE1]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-[#183D32]">Length</label>
            <span className="text-xs font-semibold text-[#387A53]">{unit === 'imperial' ? `${length} ft` : `${length} m`}</span>
          </div>
          <input
            type="range"
            min={unit === 'imperial' ? 1 : 0.4}
            max={unit === 'imperial' ? 12 : 4}
            step={unit === 'imperial' ? 0.5 : 0.1}
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
            className="w-full accent-[#387A53] cursor-pointer"
          />
          <div className="mt-2 flex justify-between text-xs text-[#78847D]">
            <span>{unit === 'imperial' ? '1 ft' : '0.4 m'}</span>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Math.max(0.1, parseFloat(e.target.value) || 0))}
              className="w-16 text-center text-xs font-semibold py-1 bg-white border border-[#CBD5CD] rounded-md"
            />
            <span>{unit === 'imperial' ? '12 ft' : '4 m'}</span>
          </div>
        </div>

        <div className="bg-[#F8F6EE] p-5 rounded-2xl border border-[#E3EDE1]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-[#183D32]">Width</label>
            <span className="text-xs font-semibold text-[#387A53]">{unit === 'imperial' ? `${width} ft` : `${width} m`}</span>
          </div>
          <input
            type="range"
            min={unit === 'imperial' ? 1 : 0.4}
            max={unit === 'imperial' ? 12 : 4}
            step={unit === 'imperial' ? 0.5 : 0.1}
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
            className="w-full accent-[#387A53] cursor-pointer"
          />
          <div className="mt-2 flex justify-between text-xs text-[#78847D]">
            <span>{unit === 'imperial' ? '1 ft' : '0.4 m'}</span>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Math.max(0.1, parseFloat(e.target.value) || 0))}
              className="w-16 text-center text-xs font-semibold py-1 bg-white border border-[#CBD5CD] rounded-md"
            />
            <span>{unit === 'imperial' ? '12 ft' : '4 m'}</span>
          </div>
        </div>

        <div className="bg-[#F8F6EE] p-5 rounded-2xl border border-[#E3EDE1]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-[#183D32]">Height / Depth</label>
            <span className="text-xs font-semibold text-[#387A53]">{unit === 'imperial' ? `${height} ft` : `${height} m`}</span>
          </div>
          <input
            type="range"
            min={unit === 'imperial' ? 1 : 0.4}
            max={unit === 'imperial' ? 8 : 2.5}
            step={unit === 'imperial' ? 0.5 : 0.1}
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            className="w-full accent-[#387A53] cursor-pointer"
          />
          <div className="mt-2 flex justify-between text-xs text-[#78847D]">
            <span>{unit === 'imperial' ? '1 ft' : '0.4 m'}</span>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Math.max(0.1, parseFloat(e.target.value) || 0))}
              className="w-16 text-center text-xs font-semibold py-1 bg-white border border-[#CBD5CD] rounded-md"
            />
            <span>{unit === 'imperial' ? '8 ft' : '2.5 m'}</span>
          </div>
        </div>
      </div>

      {/* Results Box */}
      <div className="bg-[#183D32] text-white p-6 md:p-8 rounded-3xl mb-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Calculation Summary</span>
            <h3 className="text-xl font-bold">Raw Compost Capacity</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#B6D96A]" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Result'}
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Cubic Feet</span>
            <div className="text-2xl md:text-3xl font-extrabold text-white mt-1">{cuFt.toFixed(1)} <span className="text-xs font-normal text-[#E3EDE1]">cu ft</span></div>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Cubic Yards</span>
            <div className="text-2xl md:text-3xl font-extrabold text-[#B6D96A] mt-1">{cuYd.toFixed(2)} <span className="text-xs font-normal text-[#E3EDE1]">cu yd</span></div>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Litres</span>
            <div className="text-2xl md:text-3xl font-extrabold text-white mt-1">{Math.round(litres).toLocaleString()} <span className="text-xs font-normal text-[#E3EDE1]">L</span></div>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Min. Size for Hot Pile</span>
            <div className={`text-base md:text-lg font-bold mt-2 ${volume.isHotPileSized ? 'text-[#B6D96A]' : 'text-amber-300'}`}>
              {volume.isHotPileSized ? '✓ Sufficient (Hot)' : '⚠ Small (Passive/Cold)'}
            </div>
          </div>
        </div>

        {/* Projected finished compost callout */}
        <div className="bg-white/10 p-4 rounded-2xl border border-white/15 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#B6D96A] shrink-0 mt-0.5" />
          <div className="text-xs text-[#E3EDE1] leading-relaxed">
            <strong className="text-white block font-semibold text-sm mb-1">
              Estimated Finished Compost Yield: ~{finishedMinCuFt.toFixed(1)}–{finishedMaxCuFt.toFixed(1)} cu ft (~{Math.round(finishedMinLitres)}–{Math.round(finishedMaxLitres)} L)
            </strong>
            Organic materials lose roughly <strong>40% to 60% of their volume</strong> during decomposition as moisture evaporates and carbon escapes as carbon dioxide, so finished yield is shown as a range rather than a single figure. This calculator reports total physical container volume, not finished harvest volume.
          </div>
        </div>
      </div>

      {/* Formula explanation */}
      <div className="border-t border-[#E3EDE1] pt-6 text-xs text-[#78847D] space-y-2">
        <h4 className="font-bold text-[#183D32] text-sm">Horticultural Formula & Rules:</h4>
        <p>• <strong>Imperial Volume:</strong> Length (ft) × Width (ft) × Height (ft) = Total Cubic Feet. 27 Cubic Feet = 1 Cubic Yard. 1 Cubic Foot ≈ {US_GALLONS_PER_CUBIC_FOOT} US Gallons (used to check the “45 Gal” tumbler preset).</p>
        <p>• <strong>Metric Volume:</strong> Length (m) × Width (m) × Height (m) = Cubic Meters. 1 Cubic Meter = {LITRES_PER_CUBIC_METER.toLocaleString()} Litres.</p>
        <p>• <strong>Finished Yield Range:</strong> Compost loses about 40% to 60% of its starting volume, so the estimate is shown as a range: 60% retained (upper bound) down to 40% retained (lower bound).</p>
        <p>• <strong>Minimum Hot Composting Threshold:</strong> A pile requires at least 1 cubic yard (3×3×3 feet = 27 cu ft / ~760 Litres) of self-insulating mass to reliably sustain thermophilic internal temperatures of 130°F to 160°F (55°C–71°C).</p>
      </div>
    </div>
  );
};
