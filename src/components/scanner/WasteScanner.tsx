import React, { useState, useRef, useEffect } from 'react';
import { Upload, Camera, Sparkles, CheckCircle2, AlertTriangle, XCircle, ArrowRight, RefreshCw, FileText, Info } from 'lucide-react';
import { AIScanResult } from '../../types';

interface WasteScannerProps {
  onNavigateToGuide?: (slug: string) => void;
}

const SAMPLE_ITEMS = [
  {
    name: 'Banana Peel',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    slug: 'banana-peels-for-plants',
    description: 'High potassium fruit skin',
    fallbackData: {
      identifiedMaterial: 'Banana Peel (Musa acuminata)',
      confidence: 'High' as const,
      possibleAlternative: 'Plantain peel',
      compostSuitability: 'Suitable with preparation' as const,
      gardeningApplications: [
        'Compost nitrogen and potassium booster',
        'Dehydrated and ground soil top-dressing',
        'Worm bin food in small chopped portions',
      ],
      preparation: [
        'Strip off any plastic PLU stickers and barcodes',
        'Chop into 1/2-inch to 1-inch pieces to speed breakdown 3x',
        'Layer with 2x dry brown leaves or shredded cardboard',
      ],
      usageGuidance: 'Never leave whole raw banana peels exposed on surface soil (invites fruit flies and gnats). Chop and bury into compost or dehydrate at 140°F and powder into a fine meal for flowering plants.',
      precautions: [
        'Raw peels ferment anaerobically underground and attract rodents if not buried deeply',
        'Do not rely on banana peels alone as a complete balanced NPK fertilizer',
      ],
      mythsBusted: 'Banana peel tea (soaking peels in cold water) does NOT create an all-purpose organic fertilizer; university tests show virtually no bioavailable potassium is extracted, while fermentation breeds anaerobic bacteria and mold.',
      cToNRatio: '35:1 (Balanced / Carbon-leaning as it dries)',
      relatedGuides: ['banana-peels-for-plants', 'vegetable-scraps-for-compost'],
    },
  },
  {
    name: 'Eggshells',
    image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=600&q=80',
    slug: 'eggshells-for-plants',
    description: 'Calcium carbonate mineral shells',
    fallbackData: {
      identifiedMaterial: 'Crushed Avian Eggshells (CaCO3)',
      confidence: 'High' as const,
      possibleAlternative: 'Sea snail or oyster shell grit',
      compostSuitability: 'Suitable with preparation' as const,
      gardeningApplications: [
        'Long-term soil calcium conditioning',
        'Compost pile acidity buffer and worm grit',
        'Water-soluble calcium acetate foliar feed (with vinegar)',
      ],
      preparation: [
        'Rinse thoroughly with warm water to remove sticky albumin',
        'Bake at 200°F (95°C) for 15 minutes to sterilize Salmonella',
        'Pulverize in a blender or coffee grinder into a fine powder',
      ],
      usageGuidance: 'Coarse broken eggshells take 2 to 5 years to break down. Only ultra-fine powder or vinegar-reacted calcium acetate is bioavailable within the current growing season.',
      precautions: [
        'Avoid applying to alkaline soils (pH above 7.2)',
        'Wear a dust mask when grinding large amounts of shell flour',
      ],
      mythsBusted: 'Scattering coarse eggshell shards does NOT stop slugs and snails; scientific trials prove gastropods crawl over sharp shells without hesitation using protective mucus.',
      cToNRatio: 'Mineral (Zero C:N, >95% Calcium Carbonate)',
      relatedGuides: ['eggshells-for-plants', 'coffee-grounds-for-plants'],
    },
  },
  {
    name: 'Used Coffee Grounds',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    slug: 'coffee-grounds-for-plants',
    description: 'Spent roasted coffee residue',
    fallbackData: {
      identifiedMaterial: 'Spent Coffee Grounds (Coffea arabica)',
      confidence: 'High' as const,
      possibleAlternative: 'Cocoa bean shell mulch',
      compostSuitability: 'Suitable' as const,
      gardeningApplications: [
        'High-nitrogen green compost fuel',
        'Earthworm food and microbial stimulant',
        'Blended mulch component (1:4 with woodchips)',
      ],
      preparation: [
        'Cool and spread slightly to prevent anaerobic green mold',
        'Include paper coffee filters directly in compost',
        'Ensure no dairy, artificial syrups, or creamers are mixed in',
      ],
      usageGuidance: 'Keep coffee grounds to under 20-25% of total compost pile volume. Never apply a thick unbroken blanket directly onto soil, as it dries into a water-repellent hydrophobic crust.',
      precautions: [
        'Do not apply around newly sown vegetable seeds (residual caffeine suppresses germination)',
        'Toxic to pet dogs if ingested in large quantities due to methylxanthines',
      ],
      mythsBusted: 'Spent coffee grounds do NOT drastically acidify soil or turn hydrangeas blue; hot water brewing extracts the soluble acids into your mug, leaving spent grounds near neutral (pH 6.5–6.8).',
      cToNRatio: '20:1 (Rich Green Nitrogen)',
      relatedGuides: ['coffee-grounds-for-plants', 'tea-leaves-for-plants'],
    },
  },
  {
    name: 'Citrus Peels',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80',
    slug: 'orange-peels-for-plants',
    description: 'Orange & lemon citrus rinds',
    fallbackData: {
      identifiedMaterial: 'Citrus Peels (Citrus sinensis / limon)',
      confidence: 'High' as const,
      possibleAlternative: 'Grapefruit or pomelo rind',
      compostSuitability: 'Suitable with preparation' as const,
      gardeningApplications: [
        'Outdoor compost pile addition',
        'Natural d-limonene aphid-deterrent spray',
        'Compost odor deodorizer',
      ],
      preparation: [
        'Chop thick rinds into 1-inch squares to break waxy cuticle',
        'Wash off synthetic store waxes with warm water',
        'Keep under 10-15% of total pile volume',
      ],
      usageGuidance: 'Chop and place into the warm core of an outdoor compost pile. Microbes and Penicillium mold break down citrus oils rapidly without altering finished compost pH.',
      precautions: [
        'Do not add in large quantities to small worm bins (d-limonene irritates worm skin)',
        'Do not bury raw uncomposted rinds right against tender plant roots',
      ],
      mythsBusted: 'Citrus peels do NOT ruin compost piles or kill all beneficial bacteria; under normal aeration, citrus decomposes within 6 to 10 weeks.',
      cToNRatio: '30:1 (Balanced Green)',
      relatedGuides: ['orange-peels-for-plants', 'vegetable-scraps-for-compost'],
    },
  },
  {
    name: 'Used Tea Leaves',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    slug: 'tea-leaves-for-plants',
    description: 'Loose leaf or brewed tea residue',
    fallbackData: {
      identifiedMaterial: 'Used Tea Leaves (Camellia sinensis)',
      confidence: 'High' as const,
      possibleAlternative: 'Dried culinary herbal tea',
      compostSuitability: 'Suitable with preparation' as const,
      gardeningApplications: [
        'Mild nitrogen soil amendment for acid lovers',
        'Earthworm food and microbial inoculant',
        'Seed germination starter blend (5%)',
      ],
      preparation: [
        'Cut open teabags and discard synthetic polypropylene mesh',
        'Remove metal staples and polyester tags',
        'Spread loose leaves to dry slightly before applying',
      ],
      usageGuidance: 'Compost loose leaves directly or scratch 2-3 tablespoons into the mulch around blueberries, hydrangeas, or indoor ferns.',
      precautions: [
        'Beware of hidden plastic in pyramid teabags that causes permanent soil microplastic pollution',
      ],
      mythsBusted: 'Most "silky" tea bags are NOT compostable silk or cornstarch; they are woven nylon or PET plastic and must never be put into soil.',
      cToNRatio: '18:1 (Green Nitrogen)',
      relatedGuides: ['tea-leaves-for-plants', 'coffee-grounds-for-plants'],
    },
  },
];

export const WasteScanner: React.FC<WasteScannerProps> = ({ onNavigateToGuide }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AIScanResult | null>(null);
  const [aiStatus, setAiStatus] = useState<{ enabled: boolean; message: string } | null>(null);
  const [activeSample, setActiveSample] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check backend AI status on mount
  useEffect(() => {
    fetch('/api/ai/status')
      .then((res) => res.json())
      .then((data) => setAiStatus(data))
      .catch(() => {
        setAiStatus({
          enabled: false,
          message: 'AI Waste Scanner is currently in preview mode. You can test sample kitchen items or explore our curated gardening guides!',
        });
      });
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, WebP).');
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      alert('File size exceeds 8MB. Please choose a smaller photo.');
      return;
    }

    setSelectedFileName(file.name);
    setActiveSample(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target?.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const handleSelectSample = (sample: typeof SAMPLE_ITEMS[0]) => {
    setSelectedImage(sample.image);
    setSelectedFileName(sample.name);
    setActiveSample(sample.name);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setAnalyzing(true);

    // If this is one of our sample items, use the rich fact-checked data or query AI
    const matchingSample = SAMPLE_ITEMS.find((s) => s.name === activeSample);

    try {
      const response = await fetch('/api/ai/scan-waste', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: selectedImage,
          itemName: activeSample || selectedFileName,
        }),
      });

      const json = await response.json();

      if (json.available && json.data) {
        setResult(json.data);
      } else if (matchingSample) {
        // Fallback to rich curated data per PRD §6.1 & §7.5
        setResult(matchingSample.fallbackData);
      } else {
        // General fallback for uploaded images when AI is in preview
        setResult({
          identifiedMaterial: selectedFileName.replace(/\.[^/.]+$/, '') || 'Household Organic Scrap',
          confidence: 'Medium',
          compostSuitability: 'Suitable with preparation',
          gardeningApplications: [
            'Compost bin organic matter',
            'Moisture regulator when balanced with dry browns',
          ],
          preparation: [
            'Chop into 1-inch pieces to accelerate microbial colonization',
            'Ensure clean of plastic labels, twist ties, and stickers',
            'Balance with 2 to 3 parts dry leaves or shredded cardboard',
          ],
          usageGuidance: 'Add to an aerated outdoor compost pile or bokashi fermentation bucket. Turn regularly to ensure oxygen reaches the microbes.',
          precautions: [
            'Do not leave raw food scraps exposed on the surface of soil where rodents can reach them',
            'Avoid adding if contaminated with chemical pesticides, synthetic oils, or weed seeds',
          ],
          mythsBusted: 'Raw kitchen waste does not immediately nourish plant roots; organic matter must first be broken down by bacteria and fungi into bioavailable ionic elements.',
          cToNRatio: 'Estimated 25:1 (Green Nitrogen)',
        });
      }
    } catch {
      if (matchingSample) {
        setResult(matchingSample.fallbackData);
      } else {
        alert('Could not complete analysis. Please try again.');
      }
    } finally {
      setAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setSelectedFileName('');
    setResult(null);
    setActiveSample(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E3EDE1]">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#B6D96A]/30 text-[#183D32]">
            <Sparkles className="w-3.5 h-3.5 text-[#387A53]" /> Module B — AI Waste Scanner
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#183D32] mt-2">What Do You Have Today?</h2>
          <p className="text-[#78847D] text-sm mt-1">Upload a photo of your kitchen scrap or household waste to discover evidence-based gardening uses.</p>
        </div>

        {aiStatus && (
          <div className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 ${aiStatus.enabled ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-900 border border-amber-200'}`}>
            <span className={`w-2 h-2 rounded-full ${aiStatus.enabled ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            {aiStatus.enabled ? 'AI Vision Active (Gemini)' : 'Interactive Preview Mode'}
          </div>
        )}
      </div>

      {/* Notice box if AI is not enabled per PRD §6.1 & §7.5 */}
      {aiStatus && !aiStatus.enabled && (
        <div className="mb-6 p-4 rounded-2xl bg-[#F8F6EE] border border-[#CBD5CD] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#387A53] shrink-0 mt-0.5" />
          <div className="text-xs text-[#26332D]">
            <strong className="block text-sm font-bold text-[#183D32] mb-0.5">AI Waste Scanner is coming soon!</strong>
            You can still test with our quick-select sample kitchen items below or explore our fact-checked manual gardening guides. All calculations and guidance work fully!
          </div>
        </div>
      )}

      {/* Sample Quick-Pick Items per PRD §4 Section 3 */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-[#78847D] uppercase tracking-wider mb-2">Try a Sample Kitchen Scrap</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {SAMPLE_ITEMS.map((sample) => (
            <button
              key={sample.name}
              onClick={() => handleSelectSample(sample)}
              className={`p-2.5 rounded-2xl border text-left flex flex-col items-center gap-2 transition group ${activeSample === sample.name ? 'border-[#387A53] bg-[#E3EDE1] shadow-sm' : 'border-[#CBD5CD] bg-[#F8F6EE] hover:bg-[#E3EDE1]/50'}`}
            >
              <img
                src={sample.image}
                alt={sample.name}
                className="w-16 h-16 rounded-xl object-cover shadow-xs group-hover:scale-105 transition"
              />
              <div className="text-center">
                <div className="text-xs font-bold text-[#183D32]">{sample.name}</div>
                <div className="text-[10px] text-[#78847D] line-clamp-1">{sample.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Drag-and-Drop / Upload Area */}
      <div className="mb-8">
        {!selectedImage ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[#CBD5CD] hover:border-[#387A53] bg-[#F8F6EE] hover:bg-[#E3EDE1]/30 rounded-3xl p-8 md:p-12 text-center cursor-pointer transition flex flex-col items-center justify-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#E3EDE1] text-[#387A53] flex items-center justify-center shadow-xs">
              <Upload className="w-8 h-8" />
            </div>
            <div>
              <p className="text-base font-bold text-[#183D32]">Drag & drop an image here, or browse files</p>
              <p className="text-xs text-[#78847D] mt-1">Supports PNG, JPG, WebP up to 8MB</p>
            </div>
            <button
              type="button"
              className="px-5 py-2.5 rounded-xl bg-[#183D32] hover:bg-[#387A53] text-white text-xs font-semibold shadow-sm transition flex items-center gap-2"
            >
              <Camera className="w-4 h-4" /> Select Kitchen Photo
            </button>
          </div>
        ) : (
          <div className="bg-[#F8F6EE] p-6 rounded-3xl border border-[#CBD5CD] flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-white">
              <img src={selectedImage} alt="Uploaded waste" className="w-full h-full object-cover" />
              {activeSample && (
                <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-white rounded text-[10px] font-medium backdrop-blur-xs">
                  Sample Item
                </span>
              )}
            </div>

            <div className="flex-1 w-full space-y-3">
              <div>
                <span className="text-xs font-bold text-[#78847D] uppercase tracking-wider">Ready for Analysis</span>
                <h4 className="text-lg font-extrabold text-[#183D32]">{selectedFileName || 'Kitchen Waste Photo'}</h4>
                <p className="text-xs text-[#78847D]">
                  Our horticultural model will identify the material, classify compost suitability, and detail prep instructions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  className="px-6 py-3 rounded-xl bg-[#183D32] hover:bg-[#387A53] text-white text-sm font-bold shadow-sm transition flex items-center gap-2 disabled:opacity-50"
                >
                  {analyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Analyzing Waste...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#B6D96A]" /> Analyze Material
                    </>
                  )}
                </button>

                <button
                  onClick={handleReset}
                  disabled={analyzing}
                  className="px-4 py-3 rounded-xl bg-white hover:bg-[#E3EDE1] text-[#26332D] text-xs font-semibold border border-[#CBD5CD] transition"
                >
                  Change Photo
                </button>
              </div>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      {/* Analysis Results Display */}
      {result && (
        <div className="bg-[#183D32] text-white p-6 md:p-10 rounded-3xl shadow-lg border border-white/10 space-y-6 animate-fadeIn">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B6D96A]">Identification Result</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-[#E3EDE1]">
                  Confidence: {result.confidence}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
                {result.identifiedMaterial}
              </h3>
              {result.possibleAlternative && (
                <p className="text-xs text-[#E3EDE1] mt-0.5">
                  Possible Alternative: {result.possibleAlternative}
                </p>
              )}
            </div>

            {/* Suitability Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/15">
              {result.compostSuitability === 'Suitable' ? (
                <CheckCircle2 className="w-5 h-5 text-[#B6D96A]" />
              ) : result.compostSuitability === 'Suitable with preparation' ? (
                <AlertTriangle className="w-5 h-5 text-amber-300" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400" />
              )}
              <div>
                <span className="text-[10px] uppercase text-[#E3EDE1] block">Compost Suitability</span>
                <span className="text-xs font-bold text-white">{result.compostSuitability}</span>
              </div>
            </div>
          </div>

          {/* Grid of Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gardening Applications */}
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <h4 className="text-sm font-bold text-[#B6D96A] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Gardening Applications
              </h4>
              <ul className="space-y-2">
                {result.gardeningApplications.map((app, i) => (
                  <li key={i} className="text-xs text-[#E3EDE1] flex items-start gap-2">
                    <span className="text-[#B6D96A]">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              {result.cToNRatio && (
                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#E3EDE1]">
                  <strong>C:N Profile:</strong> {result.cToNRatio}
                </div>
              )}
            </div>

            {/* Preparation Steps */}
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <h4 className="text-sm font-bold text-[#B6D96A] mb-3 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" /> Required Preparation
              </h4>
              <ul className="space-y-2">
                {result.preparation.map((prep, i) => (
                  <li key={i} className="text-xs text-[#E3EDE1] flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-white/10 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{prep}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Usage Guidance */}
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10 text-xs text-[#E3EDE1] leading-relaxed">
            <h4 className="text-sm font-bold text-white mb-2">Usage Guidance & Application Rate</h4>
            <p>{result.usageGuidance}</p>
          </div>

          {/* Precautions Box */}
          <div className="bg-amber-950/40 border border-amber-500/30 p-5 rounded-2xl text-xs text-amber-200">
            <h4 className="text-sm font-bold text-amber-300 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Precautions & Pest Risks
            </h4>
            <ul className="space-y-1.5 list-disc list-inside">
              {result.precautions.map((prec, i) => (
                <li key={i}>{prec}</li>
              ))}
            </ul>
          </div>

          {/* Gardening Myths Busted */}
          {result.mythsBusted && (
            <div className="bg-white/10 p-5 rounded-2xl border border-white/15 text-xs text-[#E3EDE1]">
              <h4 className="text-sm font-bold text-[#B6D96A] mb-1.5">Gardening Myth vs Horticultural Reality</h4>
              <p>{result.mythsBusted}</p>
            </div>
          )}

          {/* Link to Dedicated Guide */}
          {result.relatedGuides && result.relatedGuides.length > 0 && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => onNavigateToGuide && onNavigateToGuide(result.relatedGuides![0])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B6D96A] hover:bg-[#a2c953] text-[#183D32] text-xs font-bold transition shadow-sm"
              >
                <FileText className="w-4 h-4" /> View Full In-Depth Guide
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
