import React, { useState } from 'react';
import { AlertTriangle, Wrench, CheckCircle2, RefreshCw, Sparkles, HelpCircle } from 'lucide-react';

interface TroubleSymptom {
  id: string;
  label: string;
  cause: string;
  immediateAction: string[];
  recoveryPlan: string[];
  prevention: string[];
}

const COMMON_SYMPTOMS: TroubleSymptom[] = [
  {
    id: 'rotten-eggs',
    label: 'Rotten Egg / Swamp Gas Odor',
    cause: 'Anaerobic conditions caused by excess moisture and zero oxygen. Beneficial aerobic bacteria have suffocated, and anaerobic sulfur-producing microbes have taken over.',
    immediateAction: [
      'Turn the pile immediately from outside-in with a pitchfork to introduce fresh air',
      'Mix in 2 to 3 bags of dry, coarse brown materials (shredded cardboard, dry leaves, or straw)',
      'Leave lid ajar or cover with a breathable tarp if heavy rain is falling',
    ],
    recoveryPlan: [
      'Turn again on Day 3 and Day 7 to keep oxygen levels above 10%',
      'Do not add any wet kitchen scraps for 5 days',
      'Verify internal temperature rises into the sweet zone (110°F-140°F)',
    ],
    prevention: [
      'Always cover every bowl of kitchen scraps with an equal volume of dry browns',
      'Never allow lawn irrigation to spray directly into open compost bins',
    ],
  },
  {
    id: 'ammonia',
    label: 'Sharp Ammonia / Urine Odor',
    cause: 'Excess nitrogen (too many greens, grass clippings, or animal manure) without enough carbon to absorb the nitrogen ions.',
    immediateAction: [
      'Stop adding fresh greens or grass clippings',
      'Fork in generous amounts of carbon-rich shredded paper, cardboard, or dry autumn leaves',
      'Avoid adding garden lime or wood ash, which turns ammonium into pungent ammonia gas',
    ],
    recoveryPlan: [
      'Turn the pile gently to redistribute the carbon browns',
      'Allow 48 hours for nitrogen to bond to the carbon cellulose structure',
    ],
    prevention: [
      'Spread fresh grass clippings in thin 1-inch layers rather than thick green slabs',
      'Maintain at least a 2:1 brown-to-green volume ratio',
    ],
  },
  {
    id: 'flies-maggots',
    label: 'Clouds of Fruit Flies & Maggots',
    cause: 'Food scraps are exposed on the surface of the pile, attracting adult flies, or black soldier fly larvae (BSFL) have colonized warm moist scraps.',
    immediateAction: [
      'Bury all exposed food scraps under at least 4 inches of shredded cardboard or soil',
      'If using a tumbler or bucket, ensure air vents are screened with 1/16-inch mesh',
      'Note: Black soldier fly larvae are harmless, non-biting voracious composters, but housefly maggots should be buried deep in hot core',
    ],
    recoveryPlan: [
      'Top-dress the bin with a 2-inch "bio-filter" layer of finished compost or dry mulch',
      'Keep kitchen caddy tightly sealed with a charcoal filter before emptying',
    ],
    prevention: [
      'Never leave fruit peels or melon rinds resting on top of the compost pile',
    ],
  },
  {
    id: 'cold-slow',
    label: 'Pile is Cold and Nothing is Happening',
    cause: 'The pile is too small (<3x3x3 ft), too dry, or lacks nitrogen to feed active thermophilic bacteria.',
    immediateAction: [
      'Check moisture: squeeze a handful. If it feels like dry straw, sprinkle with a hose until like a wrung-out sponge',
      'Add a concentrated nitrogen booster: used coffee grounds, fresh grass clippings, or blood meal',
      'Inoculate with two shovels of active garden soil or mature compost',
    ],
    recoveryPlan: [
      'Turn the pile to combine the new nitrogen and water thoroughly',
      'Monitor with a compost thermometer; heat should spike within 24 to 72 hours',
    ],
    prevention: [
      'Build piles in batches rather than tiny teaspoon additions',
      'Keep minimum volume around 1 cubic yard during autumn and winter',
    ],
  },
  {
    id: 'white-mold',
    label: 'White Webbing / Mold Coating Scraps',
    cause: 'Usually actinomycetes or beneficial saprophytic fungi! This is almost always a sign of healthy decomposition, especially during later stages or in carbon-rich piles.',
    immediateAction: [
      'No negative action needed! White filament networks are usually Actinomycetes (beneficial bacteria that smell like sweet earth) or mycorrhizal mycelium',
      'If dust causes allergies, mist lightly before turning to prevent inhaling fungal spores',
    ],
    recoveryPlan: [
      'Continue regular turning schedule; the fungi are actively digesting tough woody lignin and cellulose',
    ],
    prevention: [
      'Wear a light dust mask if you have respiratory mold sensitivities when turning dry piles',
    ],
  },
];

export const CompostTroubleshooter: React.FC = () => {
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>('rotten-eggs');
  const [customQuery, setCustomQuery] = useState('');
  const [loadingCustom, setLoadingCustom] = useState(false);
  const [customResult, setCustomResult] = useState<{
    cause: string;
    immediateAction: string[];
    recoveryPlan: string[];
    prevention: string[];
  } | null>(null);

  const activeSymptom = COMMON_SYMPTOMS.find((s) => s.id === selectedSymptomId) || COMMON_SYMPTOMS[0];

  const handleCustomDiagnose = async () => {
    if (!customQuery.trim()) return;
    setLoadingCustom(true);
    try {
      const res = await fetch('/api/ai/troubleshoot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problemDescription: customQuery }),
      });
      const data = await res.json();
      if (data.available && data.data) {
        setCustomResult(data.data);
      } else {
        // Fallback diagnosis heuristic
        setCustomResult({
          cause: 'Imbalance between moisture, air circulation, and the carbon-to-nitrogen ratio.',
          immediateAction: [
            'Turn the pile to evaluate internal moisture levels and core temperature',
            'Incorporate dry brown materials (shredded cardboard or dry leaves) to absorb liquids',
            'Ensure drainage holes are not blocked with mud or sludge',
          ],
          recoveryPlan: [
            'Monitor every 2 days for odor stabilization and temperature rebound',
            'Bury all fresh kitchen additions deeply into the central core',
          ],
          prevention: [
            'Maintain the 2:1 brown-to-green volume rule',
            'Turn every 1-2 weeks to ensure aerobic microbial dominance',
          ],
        });
      }
    } catch {
      alert('Could not diagnose issue right now. Please try again or select a common symptom.');
    } finally {
      setLoadingCustom(false);
    }
  };

  const displayData = customResult || activeSymptom;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E3EDE1]">
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E3EDE1] text-[#183D32]">
          <Wrench className="w-3.5 h-3.5 text-[#387A53]" /> Module C — Compost Troubleshooter
        </span>
        <h3 className="text-2xl font-extrabold text-[#183D32] mt-2">Compost Problem Diagnostic Engine</h3>
        <p className="text-xs text-[#78847D] mt-1">
          Select a common problem or describe what is happening in your bin to get an immediate, scientific recovery plan.
        </p>
      </div>

      {/* Preset Problem Buttons */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-[#78847D] uppercase tracking-wider mb-2">Common Compost Bin Issues</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {COMMON_SYMPTOMS.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setSelectedSymptomId(s.id);
                setCustomResult(null);
              }}
              className={`p-3 rounded-2xl text-left text-xs font-medium border transition ${
                selectedSymptomId === s.id && !customResult
                  ? 'bg-[#183D32] text-white border-[#183D32] shadow-xs'
                  : 'bg-[#F8F6EE] text-[#26332D] border-[#CBD5CD] hover:bg-[#E3EDE1]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Query Box */}
      <div className="bg-[#F8F6EE] p-4 rounded-2xl border border-[#CBD5CD] mb-8">
        <label className="block text-xs font-bold text-[#183D32] mb-1.5 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#387A53]" /> Describe a Specific Compost Issue
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            placeholder="e.g. My indoor bin has tiny white bugs and smells slightly sour..."
            className="flex-1 p-2.5 rounded-xl bg-white border border-[#CBD5CD] text-xs text-[#26332D] focus:outline-none focus:ring-2 focus:ring-[#387A53]"
          />
          <button
            onClick={handleCustomDiagnose}
            disabled={loadingCustom || !customQuery.trim()}
            className="px-4 py-2.5 rounded-xl bg-[#183D32] hover:bg-[#387A53] text-white text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5 shrink-0"
          >
            {loadingCustom ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : 'Diagnose'}
          </button>
        </div>
      </div>

      {/* Diagnosis Report Card */}
      <div className="bg-[#183D32] text-white p-6 md:p-8 rounded-3xl shadow-md border border-white/10 space-y-6 animate-fadeIn">
        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#B6D96A]">Diagnostic Assessment</span>
          <h4 className="text-xl font-extrabold text-white mt-1">
            {customResult ? 'Custom Problem Diagnosis' : activeSymptom.label}
          </h4>
          <p className="text-xs text-[#E3EDE1] mt-2 leading-relaxed">
            <strong className="text-white">Underlying Root Cause:</strong> {displayData.cause}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Immediate Action */}
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#B6D96A] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-300" /> Immediate Action (Next 24-48 Hours)
            </h5>
            <ul className="space-y-2">
              {displayData.immediateAction.map((act, i) => (
                <li key={i} className="text-xs text-[#E3EDE1] flex items-start gap-2">
                  <span className="text-[#B6D96A] font-bold">•</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 7-Day Recovery Plan */}
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#B6D96A] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B6D96A]" /> 7-Day Recovery Plan
            </h5>
            <ul className="space-y-2">
              {displayData.recoveryPlan.map((plan, i) => (
                <li key={i} className="text-xs text-[#E3EDE1] flex items-start gap-2">
                  <span className="text-[#B6D96A] font-bold">•</span>
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Prevention */}
        <div className="bg-white/10 p-4 rounded-2xl border border-white/15 text-xs text-[#E3EDE1]">
          <h5 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#B6D96A]" /> How to Prevent This in Future Batches
          </h5>
          <ul className="space-y-1 list-disc list-inside">
            {displayData.prevention.map((prev, i) => (
              <li key={i}>{prev}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
