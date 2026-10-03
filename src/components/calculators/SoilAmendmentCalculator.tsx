import React, { useState } from 'react';
import { Copy, Check, Printer, RotateCcw, Shovel, AlertCircle } from 'lucide-react';

export const SoilAmendmentCalculator: React.FC = () => {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');
  const [bedLength, setBedLength] = useState<number>(8); // ft or m
  const [bedWidth, setBedWidth] = useState<number>(4);
  const [depthInches, setDepthInches] = useState<number>(2); // inches or cm
  const [copied, setCopied] = useState(false);

  // Depth presets
  const depthPresets = [
    { label: 'Light Annual Mulch Top-Dress (1 inch / 2.5 cm)', value: unit === 'imperial' ? 1 : 2.5 },
    { label: 'Standard Soil Improvement (2 inches / 5 cm)', value: unit === 'imperial' ? 2 : 5 },
    { label: 'New Raised Bed Heavy Blend (3 inches / 7.5 cm)', value: unit === 'imperial' ? 3 : 7.5 },
    { label: 'Heavy Clay Remediation (4 inches / 10 cm)', value: unit === 'imperial' ? 4 : 10 },
  ];

  // Calculations
  let areaSqFt = 0;
  let cuFt = 0;
  let cuYards = 0;
  let litres = 0;
  let bagsNeeded = 0; // standard 1 cu ft (28.3L) bags

  if (unit === 'imperial') {
    areaSqFt = bedLength * bedWidth;
    // depth in inches converted to feet
    cuFt = areaSqFt * (depthInches / 12);
    cuYards = cuFt / 27;
    litres = cuFt * 28.3168;
    bagsNeeded = Math.ceil(cuFt);
  } else {
    // metric: length, width in meters, depth in cm
    const areaSqM = bedLength * bedWidth;
    const depthM = depthInches / 100;
    const cuMeters = areaSqM * depthM;
    litres = cuMeters * 1000;
    cuFt = litres / 28.3168;
    cuYards = cuFt / 27;
    areaSqFt = areaSqM * 10.7639;
    bagsNeeded = Math.ceil(litres / 25); // standard 25L bags
  }

  const handleCopy = () => {
    const text = `WasteBloom Soil Amendment Calculation:
- Bed Area: ${bedLength} x ${bedWidth} ${unit === 'imperial' ? 'ft' : 'm'} (${Math.round(areaSqFt)} sq ft)
- Target Amendment Layer: ${depthInches} ${unit === 'imperial' ? 'inches' : 'cm'}
- Required Volume: ${cuFt.toFixed(1)} cu ft (${cuYards.toFixed(2)} cu yds / ${Math.round(litres)} litres)
- Standard Store Bags: ~${bagsNeeded} ${unit === 'imperial' ? 'bags (1 cu ft each)' : 'bags (25L each)'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setBedLength(unit === 'imperial' ? 8 : 2.5);
    setBedWidth(unit === 'imperial' ? 4 : 1.2);
    setDepthInches(unit === 'imperial' ? 2 : 5);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E3EDE1]">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E3EDE1] text-[#183D32]">
            <Shovel className="w-3.5 h-3.5" /> Module E — Interactive Tool
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#183D32] mt-2">Soil Amendment & Compost Calculator</h2>
          <p className="text-[#78847D] text-sm mt-1">Calculate how much compost, worm castings, or organic mulch your garden beds require.</p>
        </div>

        <div className="flex bg-[#F8F6EE] p-1 rounded-xl border border-[#CBD5CD]">
          <button
            onClick={() => { setUnit('imperial'); setBedLength(8); setBedWidth(4); setDepthInches(2); }}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'imperial' ? 'bg-[#183D32] text-white shadow-sm' : 'text-[#78847D] hover:text-[#183D32]'}`}
          >
            Feet & Inches
          </button>
          <button
            onClick={() => { setUnit('metric'); setBedLength(2.5); setBedWidth(1.2); setDepthInches(5); }}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'metric' ? 'bg-[#183D32] text-white shadow-sm' : 'text-[#78847D] hover:text-[#183D32]'}`}
          >
            Meters & Centimeters
          </button>
        </div>
      </div>

      {/* Preset options */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-[#78847D] uppercase tracking-wider mb-2">Application Depth Presets</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {depthPresets.map((p) => (
            <button
              key={p.label}
              onClick={() => setDepthInches(p.value)}
              className={`text-left p-3 rounded-xl text-xs font-medium border transition ${depthInches === p.value ? 'bg-[#E3EDE1] text-[#183D32] border-[#387A53] font-semibold' : 'bg-[#F8F6EE] text-[#26332D] border-[#CBD5CD] hover:bg-[#E3EDE1]'}`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#F8F6EE] p-5 rounded-2xl border border-[#E3EDE1]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-[#183D32]">Bed Length</label>
            <span className="text-xs font-semibold text-[#387A53]">{bedLength} {unit === 'imperial' ? 'ft' : 'm'}</span>
          </div>
          <input
            type="range"
            min={unit === 'imperial' ? 2 : 0.5}
            max={unit === 'imperial' ? 50 : 15}
            step={unit === 'imperial' ? 1 : 0.5}
            value={bedLength}
            onChange={(e) => setBedLength(parseFloat(e.target.value))}
            className="w-full accent-[#387A53] cursor-pointer"
          />
        </div>

        <div className="bg-[#F8F6EE] p-5 rounded-2xl border border-[#E3EDE1]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-[#183D32]">Bed Width</label>
            <span className="text-xs font-semibold text-[#387A53]">{bedWidth} {unit === 'imperial' ? 'ft' : 'm'}</span>
          </div>
          <input
            type="range"
            min={unit === 'imperial' ? 1 : 0.3}
            max={unit === 'imperial' ? 20 : 6}
            step={unit === 'imperial' ? 0.5 : 0.1}
            value={bedWidth}
            onChange={(e) => setBedWidth(parseFloat(e.target.value))}
            className="w-full accent-[#387A53] cursor-pointer"
          />
        </div>

        <div className="bg-[#F8F6EE] p-5 rounded-2xl border border-[#E3EDE1]">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-bold text-[#183D32]">Amendment Layer Depth</label>
            <span className="text-xs font-semibold text-[#387A53]">{depthInches} {unit === 'imperial' ? 'inches' : 'cm'}</span>
          </div>
          <input
            type="range"
            min={unit === 'imperial' ? 0.5 : 1}
            max={unit === 'imperial' ? 6 : 15}
            step={unit === 'imperial' ? 0.5 : 0.5}
            value={depthInches}
            onChange={(e) => setDepthInches(parseFloat(e.target.value))}
            className="w-full accent-[#387A53] cursor-pointer"
          />
        </div>
      </div>

      {/* Results Display */}
      <div className="bg-[#183D32] text-white p-6 md:p-8 rounded-3xl mb-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Calculation Summary</span>
            <h3 className="text-xl font-bold">Total Amendment Needed</h3>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Cubic Feet</span>
            <div className="text-2xl md:text-3xl font-extrabold text-white mt-1">{cuFt.toFixed(1)} <span className="text-xs font-normal text-[#E3EDE1]">cu ft</span></div>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Cubic Yards</span>
            <div className="text-2xl md:text-3xl font-extrabold text-[#B6D96A] mt-1">{cuYards.toFixed(2)} <span className="text-xs font-normal text-[#E3EDE1]">cu yd</span></div>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Volume in Litres</span>
            <div className="text-2xl md:text-3xl font-extrabold text-white mt-1">{Math.round(litres).toLocaleString()} <span className="text-xs font-normal text-[#E3EDE1]">L</span></div>
          </div>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <span className="text-xs text-[#E3EDE1]">Standard Bags Needed</span>
            <div className="text-2xl md:text-3xl font-extrabold text-[#B6D96A] mt-1">~{bagsNeeded} <span className="text-xs font-normal text-[#E3EDE1]">bags</span></div>
          </div>
        </div>

        {/* Warning Callout per PRD */}
        <div className="bg-white/10 p-4 rounded-2xl border border-white/15 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
          <div className="text-xs text-[#E3EDE1] leading-relaxed">
            <strong className="text-white block font-semibold text-sm mb-0.5">Horticultural Guidance:</strong>
            Actual amendment rates depend heavily on a soil test and the specific organic amendment used. For highly concentrated amendments (like fresh manure, poultry compost, or high-potassium amendments), apply no more than 0.5 to 1 inch to avoid nutrient burn. For mature, balanced finished yard compost, 1 to 2 inches is standard practice.
          </div>
        </div>
      </div>
    </div>
  );
};
