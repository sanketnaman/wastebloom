import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  Camera,
  Recycle,
  Leaf,
  Sprout,
  Home,
  Clock,
  ChevronRight,
  Calculator,
  Layers,
  Shovel,
  CheckCircle2,
  Mail,
  Check,
  Upload,
  AlertTriangle,
  XCircle,
  HelpCircle
} from 'lucide-react';
import { wasteGuides } from '../data/wasteGuides';
import { compostingGuides } from '../data/compostingGuides';
import { diyProjects } from '../data/diyProjects';
import { SEOHead } from '../components/SEOHead';
import { SafeImage } from '../components/SafeImage';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Scanner state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);
  const [scanResult, setScanResult] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterState, setNewsletterState] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'unconfigured' | 'error';
    message?: string;
  }>({ status: 'idle' });

  // Example samples for quick click
  const sampleItems = [
    {
      name: 'Banana Peel',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80',
      slug: 'banana-peels-for-plants',
      data: {
        identifiedMaterial: 'Banana Peel (Musa acuminata)',
        confidence: 'High',
        compostSuitability: 'Suitable with preparation',
        gardeningApplications: [
          'Compost potassium booster',
          'Dehydrated & ground soil top-dressing',
          'Worm bin food in small chopped portions'
        ],
        preparation: [
          'Remove plastic PLU barcode stickers',
          'Chop into 1/2-inch pieces for 3x faster breakdown',
          'Layer with 2x dry leaves or shredded cardboard'
        ],
        usageGuidance: 'Bury into active compost core or dry at 140°F and powder into flower beds.',
        precautions: ['Never leave raw peels exposed on soil surface (attracts fruit flies and rodents)'],
        cToNRatio: '35:1 (Balanced / Carbon-leaning as it dries)'
      }
    },
    {
      name: 'Eggshells',
      image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=400&q=80',
      slug: 'eggshells-for-plants',
      data: {
        identifiedMaterial: 'Crushed Eggshells (Calcium Carbonate)',
        confidence: 'High',
        compostSuitability: 'Suitable with preparation',
        gardeningApplications: [
          'Long-term soil calcium conditioning',
          'Compost pile acidity buffer and worm grit',
          'Water-soluble calcium acetate foliar feed (with vinegar)'
        ],
        preparation: [
          'Rinse sticky albumin',
          'Bake at 200°F (95°C) for 15 minutes to sterilize Salmonella',
          'Pulverize into fine powder in a blender'
        ],
        usageGuidance: 'Coarse broken eggshells take 2 to 5 years to break down. Grind into fine flour for bioavailable calcium.',
        precautions: ['Avoid applying to soils with pH above 7.2'],
        cToNRatio: 'Mineral (95% Calcium Carbonate)'
      }
    },
    {
      name: 'Coffee Grounds',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80',
      slug: 'coffee-grounds-for-plants',
      data: {
        identifiedMaterial: 'Spent Coffee Grounds (Coffea arabica)',
        confidence: 'High',
        compostSuitability: 'Suitable',
        gardeningApplications: [
          'Rich green nitrogen compost fuel (~2% N)',
          'Earthworm stimulant and soil texture builder',
          'Blended mulch component (1:4 with woodchips)'
        ],
        preparation: [
          'Cool and spread slightly to prevent mold matting',
          'Include unbleached paper filters directly',
          'Ensure free of dairy, sugar syrups, or artificial creamers'
        ],
        usageGuidance: 'Keep to under 20% of compost volume. Never spread a thick unbroken layer on soil as it crusts.',
        precautions: ['Toxic to pet dogs in large amounts due to methylxanthines'],
        cToNRatio: '20:1 (Green Nitrogen)'
      }
    },
    {
      name: 'Vegetable Scraps',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
      slug: 'vegetable-scraps-for-compost',
      data: {
        identifiedMaterial: 'Mixed Kitchen Vegetable Scraps',
        confidence: 'High',
        compostSuitability: 'Suitable with preparation',
        gardeningApplications: [
          'Primary nitrogen greens for active compost piles',
          'Nutrient & moisture provider for living soil bacteria'
        ],
        preparation: [
          'Chop chunky brassica stalks and roots into 1-inch pieces',
          'Drain excess kitchen juices before adding to pile',
          'Always balance with 2x dry autumn leaves or shredded cardboard'
        ],
        usageGuidance: 'Bury at least 8 inches inside the warm core of the compost pile to deter fruit flies and animals.',
        precautions: ['Do not include diseased foliage from late blight or fungal rot'],
        cToNRatio: '15:1 to 20:1 (High Nitrogen Greens)'
      }
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (JPG, PNG, WEBP).');
      return;
    }

    setSelectedFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target?.result as string);
      triggerAnalysis(event.target?.result as string, file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleSampleClick = (sample: typeof sampleItems[0]) => {
    setSelectedImage(sample.image);
    setSelectedFileName(sample.name);
    setScanResult(sample.data);
  };

  const triggerAnalysis = async (imgBase64: string, name: string) => {
    setAnalyzing(true);
    setScanResult(null);

    try {
      const response = await fetch('/api/ai/scan-waste', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: imgBase64,
          itemName: name,
        }),
      });

      const json = await response.json();
      if (json.available && json.data) {
        setScanResult(json.data);
      } else {
        // Fallback for general uploaded items
        setScanResult({
          identifiedMaterial: name.replace(/\.[^/.]+$/, '') || 'Kitchen Organic Scrap',
          confidence: 'Medium',
          compostSuitability: 'Suitable with preparation',
          gardeningApplications: [
            'Compost bin organic moisture and nutrient builder',
            'Soil conditioner when balanced with dry carbon browns'
          ],
          preparation: [
            'Chop into 1-inch pieces to accelerate decomposition',
            'Ensure clean of plastic tags, rubber bands, or synthetic stickers',
            'Layer with 2 parts dry brown leaves or cardboard'
          ],
          usageGuidance: 'Add to an aerated compost heap or tumbler. Turn once every 5 to 7 days for fast decomposition.',
          precautions: ['Bury inside pile to avoid attracting local pests or flies'],
          cToNRatio: 'Estimated 20:1 to 30:1 (Green Nitrogen)'
        });
      }
    } catch {
      setScanResult({
        identifiedMaterial: name.replace(/\.[^/.]+$/, '') || 'Organic Garden Material',
        confidence: 'Medium',
        compostSuitability: 'Suitable with preparation',
        gardeningApplications: ['Compost pile organic matter'],
        preparation: ['Chop small and balance with dry brown carbon'],
        usageGuidance: 'Bury in the center of an active compost pile.',
        precautions: ['Keep moisture like a wrung-out sponge.'],
        cToNRatio: 'Balanced organic matter'
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = newsletterEmail.trim();
    if (!email || !email.includes('@')) return;
    setNewsletterState({ status: 'submitting' });
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'homepage' }),
      });
      const json = await response.json();
      if (json.configured === false) {
        setNewsletterState({
          status: 'unconfigured',
          message: json.message ?? 'Newsletter signup is not configured on this server yet.',
        });
      } else if (json.subscribed) {
        setNewsletterState({
          status: 'success',
          message: json.message ?? 'Your address was submitted to our newsletter service.',
        });
        setNewsletterEmail('');
      } else {
        setNewsletterState({
          status: 'error',
          message: json.message ?? 'Subscription failed. Please try again later.',
        });
      }
    } catch {
      setNewsletterState({
        status: 'error',
        message: 'Could not reach the newsletter service. Please try again later.',
      });
    }
  };

  // 6 Categories matching the reference screenshot
  const categories = [
    {
      title: 'Fruit & Vegetable Scraps',
      desc: 'Turn food waste into plant food.',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80',
      path: '/waste-to-garden',
    },
    {
      title: 'Kitchen Waste',
      desc: 'Find new uses for everyday kitchen items.',
      image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=600&q=80',
      path: '/waste-to-garden',
    },
    {
      title: 'Garden Waste',
      desc: 'Compost and reuse yard waste.',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80',
      path: '/composting/green-vs-brown-materials',
    },
    {
      title: 'Paper & Cardboard',
      desc: 'Great carbon sources for compost.',
      image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80',
      path: '/gardening-guides/mulching-with-organic-waste',
    },
    {
      title: 'Recyclable Containers',
      desc: 'Creative gardening projects from recyclables.',
      image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=600&q=80',
      path: '/diy-garden-projects',
    },
    {
      title: 'Everyday Household Items',
      desc: 'Surprising items you can reuse in the garden.',
      image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80',
      path: '/composting/composting-for-beginners',
    },
  ];

  // 6 Popular Waste to Garden Ideas matching the reference screenshot
  const popularIdeas = [
    {
      title: 'Banana Peels for Plants',
      desc: 'Discover how banana peels can benefit your plants and how to use them safely.',
      time: '6 min read',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
      slug: 'banana-peels-for-plants'
    },
    {
      title: 'Eggshells for Plants',
      desc: 'A complete guide to using eggshells in your garden and compost.',
      time: '7 min read',
      image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=600&q=80',
      slug: 'eggshells-for-plants'
    },
    {
      title: 'Coffee Grounds for Plants',
      desc: 'Learn how coffee grounds can improve soil and which plants benefit most.',
      time: '6 min read',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      slug: 'coffee-grounds-for-plants'
    },
    {
      title: 'Orange Peels for Plants',
      desc: 'Ways to use orange peels in compost and for garden health.',
      time: '6 min read',
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80',
      slug: 'orange-peels-for-plants'
    },
    {
      title: 'Vegetable Scraps for Compost',
      desc: 'Turn your vegetable scraps into nutrient-rich compost.',
      time: '6 min read',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      slug: 'vegetable-scraps-for-compost'
    },
    {
      title: 'Used Tea Leaves for Plants',
      desc: 'How to reuse tea leaves to enrich your soil and support plant growth.',
      time: '6 min read',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
      slug: 'tea-leaves-for-plants'
    }
  ];

  // 6 DIY Projects matching reference screenshot
  const diyCards = [
    {
      title: 'Plastic Bottle Planter',
      desc: 'Turn plastic bottles into beautiful planters.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
      slug: 'plastic-bottle-planter'
    },
    {
      title: 'Egg Carton Seed Starter',
      desc: 'Start seeds using recycled egg cartons.',
      image: 'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=600&q=80',
      slug: 'egg-carton-seed-starter'
    },
    {
      title: 'DIY Compost Bin',
      desc: 'Build your own compost bin at home.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
      slug: 'diy-compost-bin'
    },
    {
      title: 'Recycled Container Garden',
      desc: 'Create a garden with household containers.',
      image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=600&q=80',
      slug: 'recycled-container-garden'
    },
    {
      title: 'Vertical Garden',
      desc: 'Grow more in small spaces.',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80',
      slug: 'vertical-shoe-organizer-garden'
    },
    {
      title: 'Recycled Hanging Planters',
      desc: 'Beautiful planters from waste materials.',
      image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80',
      slug: 'hanging-colander-planter'
    }
  ];

  return (
    <div className="bg-[#F8F6EC] text-[#1F2923] space-y-16 sm:space-y-24 pb-16">
      <SEOHead
        title="WasteBloom - Turn Everyday Waste Into Something Beautiful"
        description="Discover how everyday kitchen scraps and household waste can become valuable resources for your garden. Explore composting ideas, DIY projects, and AI waste identification."
        canonicalPath="/"
        robots="index,follow"
      />

      {/* =========================================================================
          1. HERO SECTION (Matching Screenshot)
      ========================================================================= */}
      <section className="relative overflow-hidden pt-8 md:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8F0E5] text-[#153F32] text-xs font-semibold border border-[#D5DDD2] shadow-2xs">
              <span className="text-sm">🌱</span>
              <span>The Sustainable Home Gardening & Composting Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#153F32] leading-[1.08] font-manrope">
              Don't Throw It Away.
              <br />
              <span className="text-[#367B53]">Grow Something</span>
              <br />
              <span className="text-[#367B53]">Beautiful.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#3E4D44] text-sm sm:text-base leading-relaxed max-w-lg">
              Turn everyday kitchen scraps into gardening opportunities. Discover what to compost, how to reuse household waste safely, and how to cultivate thriving organic plants without chemical fertilizers.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onNavigate('/waste-to-garden')}
                className="px-6 py-3.5 rounded-full bg-[#153F32] hover:bg-[#1f5645] text-white text-xs sm:text-sm font-bold shadow-xs transition flex items-center gap-2 group"
              >
                <Leaf className="w-4 h-4 text-[#C6E75A]" />
                <span>Explore Waste Ideas</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </button>

              <button
                onClick={() => onNavigate('/waste-scanner')}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#E8F0E5] text-[#153F32] text-xs sm:text-sm font-bold border border-[#D5DDD2] shadow-2xs transition flex items-center gap-2"
              >
                <Camera className="w-4 h-4 text-[#153F32]" />
                <span>Try AI Waste Scanner</span>
              </button>
            </div>

            {/* 4 Trust Value Props Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#D5DDD2]/70">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E8F0E5] text-[#367B53] flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#153F32] leading-tight">
                  Sustainable<br />Living
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E8F0E5] text-[#367B53] flex items-center justify-center shrink-0">
                  <Recycle className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#153F32] leading-tight">
                  Reduce<br />Household Waste
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E8F0E5] text-[#367B53] flex items-center justify-center shrink-0">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#153F32] leading-tight">
                  Healthier<br />Plants
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E8F0E5] text-[#367B53] flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#153F32] leading-tight">
                  Greener<br />Planet
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Large Photography Card with Hand-drawn Text Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              <SafeImage
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
                alt="Gardener chopping fresh kitchen vegetable scraps over a large compost bowl"
                className="w-full h-full object-cover"
              />

              {/* Handwriting Overlay */}
              <div className="absolute top-6 left-6 md:left-8 select-none pointer-events-none drop-shadow-md">
                <span className="font-handwriting text-3xl sm:text-4xl text-white font-bold tracking-wide">
                  Kitchen Waste
                </span>
                <br />
                <span className="font-handwriting text-3xl sm:text-4xl text-white font-bold tracking-wide pl-6">
                  Happy Plants ♡
                </span>
              </div>

              {/* Bottom Right Floating Badge */}
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-full shadow-md border border-[#E3ECE0] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#E8F0E5] text-[#367B53] flex items-center justify-center shrink-0">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#153F32]">
                  Small Changes, Big Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. AI WASTE SCANNER UPLOAD SECTION ("What Do You Have Today?")
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8F0E5] rounded-3xl p-6 sm:p-8 border border-[#D5DDD2] shadow-2xs">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#367B53] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#153F32] font-manrope">
                What Do You Have Today?
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5D52] mt-0.5">
                Upload a photo of your kitchen waste and discover how you can use it in your garden.
              </p>
            </div>
          </div>

          {/* 2-Part Card Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Box: Drag & Drop + Examples */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-5 border border-[#D8E2D6] shadow-2xs space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                {/* Drag and Drop Zone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="md:col-span-6 border-2 border-dashed border-[#CBD5CD] hover:border-[#367B53] rounded-xl p-6 text-center cursor-pointer transition bg-[#FBFDFB] hover:bg-[#F2F7F1] flex flex-col items-center justify-center min-h-[140px]"
                >
                  <Recycle className="w-7 h-7 text-[#367B53] mb-2" />
                  <p className="text-xs font-bold text-[#153F32]">
                    Drag & drop an image here
                  </p>
                  <p className="text-[11px] text-[#78847D] mt-0.5">
                    or click to upload
                  </p>
                  <span className="text-[10px] text-[#9BA8A0] mt-2 block font-medium">
                    JPG, PNG, WEBP (Max 5MB)
                  </span>
                </div>

                {/* Try With An Example */}
                <div className="md:col-span-6">
                  <div className="text-xs font-bold text-[#153F32] mb-2.5">
                    Try with an example:
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {sampleItems.map((sample) => (
                      <button
                        key={sample.name}
                        onClick={() => handleSampleClick(sample)}
                        className="group flex flex-col items-center text-center p-1 rounded-xl hover:bg-[#F8F6EC] transition"
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#D8E2D6] group-hover:border-[#367B53] shadow-2xs mb-1.5 transition">
                          <SafeImage
                            src={sample.image}
                            alt={sample.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                          />
                        </div>
                        <span className="text-[10px] font-bold text-[#153F32] leading-tight line-clamp-1">
                          {sample.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: AI Scanner Coming Soon Card */}
            <div className="lg:col-span-4 bg-white/90 backdrop-blur-xs rounded-2xl p-6 border border-[#D8E2D6] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#E8F0E5] text-[#367B53] flex items-center justify-center">
                      <Camera className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-extrabold text-[#153F32]">
                      AI Waste Scanner
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F39C12] text-white">
                    Coming Soon
                  </span>
                </div>

                <p className="text-xs text-[#4A5D52] leading-relaxed mt-2">
                  Our AI scanner will identify household waste and provide personalized gardening advice.
                </p>
              </div>

              <button
                onClick={() => onNavigate('/waste-to-garden')}
                className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#153F32] hover:bg-[#1f5645] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-2xs group"
              >
                <span>Explore Waste Guides Instead</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />

          {/* Interactive Result Display (if an item is scanned or selected) */}
          {(analyzing || scanResult) && (
            <div className="mt-6 bg-white rounded-2xl p-6 border border-[#367B53]/30 shadow-sm animate-fadeIn">
              {analyzing ? (
                <div className="flex items-center justify-center gap-3 py-6 text-xs font-bold text-[#153F32]">
                  <div className="w-5 h-5 border-2 border-[#367B53] border-t-transparent rounded-full animate-spin" />
                  <span>Analyzing waste material and identifying evidence-based gardening uses...</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E3ECE0] pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#367B53]">
                        Identification Result
                      </span>
                      <h3 className="text-lg font-extrabold text-[#153F32]">
                        {scanResult.identifiedMaterial}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F0E5] text-[#153F32]">
                      {scanResult.compostSuitability}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#F8F6EC] border border-[#D8E2D6]">
                      <strong className="block text-[#153F32] font-bold mb-1.5">
                        Gardening Applications:
                      </strong>
                      <ul className="space-y-1 list-disc list-inside text-[#3E4D44]">
                        {scanResult.gardeningApplications?.map((app: string, i: number) => (
                          <li key={i}>{app}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8F6EC] border border-[#D8E2D6]">
                      <strong className="block text-[#153F32] font-bold mb-1.5">
                        Required Preparation:
                      </strong>
                      <ul className="space-y-1 list-disc list-inside text-[#3E4D44]">
                        {scanResult.preparation?.map((prep: string, i: number) => (
                          <li key={i}>{prep}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => onNavigate('/waste-to-garden')}
                      className="text-xs font-bold text-[#367B53] hover:underline flex items-center gap-1"
                    >
                      <span>Read comprehensive guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          3. EXPLORE WASTE CATEGORIES (6 Cards in Row)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153F32] font-manrope">
            Explore Waste Categories
          </h2>
          <button
            onClick={() => onNavigate('/waste-to-garden')}
            className="text-xs font-bold text-[#153F32] hover:text-[#367B53] flex items-center gap-1 transition"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => onNavigate(cat.path)}
              className="bg-white rounded-2xl p-3 border border-[#E2EAE0] hover:border-[#367B53] transition cursor-pointer shadow-2xs hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2.5">
                  <SafeImage
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-xs font-extrabold text-[#153F32] group-hover:text-[#367B53] transition leading-snug line-clamp-1">
                    {cat.title}
                  </h3>
                  <ChevronRight className="w-3.5 h-3.5 text-[#367B53] shrink-0 group-hover:translate-x-0.5 transition" />
                </div>
                <p className="text-[11px] text-[#78847D] mt-1 line-clamp-2 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. POPULAR WASTE TO GARDEN IDEAS (6 Cards in Row)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153F32] font-manrope">
            Popular Waste to Garden Ideas
          </h2>
          <button
            onClick={() => onNavigate('/waste-to-garden')}
            className="text-xs font-bold text-[#153F32] hover:text-[#367B53] flex items-center gap-1 transition"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularIdeas.map((item, idx) => (
            <a
              key={idx}
            href={`/waste-to-garden/${item.slug}`} onClick={(e) => { e.preventDefault(); onNavigate(`/waste-to-garden/${item.slug}`); }}
              className="bg-white rounded-2xl p-3 border border-[#E2EAE0] hover:border-[#367B53] transition cursor-pointer shadow-2xs hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2.5">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xs font-extrabold text-[#153F32] group-hover:text-[#367B53] transition leading-snug line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#78847D] mt-1 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#F0F4EF] flex items-center justify-between text-[10px] text-[#78847D]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#367B53]" />
                  {item.time}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-[#367B53] group-hover:translate-x-0.5 transition" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. HOW COMPOSTING WORKS (Centered 3-Step Illustrated Process)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153F32] font-manrope">
            How Composting Works
          </h2>
          <p className="text-xs sm:text-sm text-[#78847D] mt-1.5">
            A simple process that turns everyday waste into garden gold.
          </p>
        </div>

        {/* 3 Step Process Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Step 1 */}
          <div className="md:col-span-3 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-white shadow-xs">
              <SafeImage
                src="https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=400&q=80"
                alt="Compost bin collecting organic kitchen scraps"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="w-5 h-5 rounded-full bg-[#153F32] text-white text-[11px] font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-xs font-bold text-[#153F32]">
                Collect Organic Waste
              </h3>
            </div>
            <p className="text-[11px] text-[#78847D] max-w-[200px] leading-relaxed">
              Save kitchen scraps, yard waste and other organic materials.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:flex md:col-span-1 items-center justify-center text-[#367B53]">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Step 2 */}
          <div className="md:col-span-3 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-white shadow-xs">
              <SafeImage
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=400&q=80"
                alt="Layering green nitrogen and brown carbon in compost"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="w-5 h-5 rounded-full bg-[#153F32] text-white text-[11px] font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-xs font-bold text-[#153F32]">
                Balance Green & Brown
              </h3>
            </div>
            <p className="text-[11px] text-[#78847D] max-w-[200px] leading-relaxed">
              Combine nitrogen-rich green materials with carbon-rich brown materials.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:flex md:col-span-1 items-center justify-center text-[#367B53]">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Step 3 */}
          <div className="md:col-span-3 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-white shadow-xs">
              <SafeImage
                src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=400&q=80"
                alt="Rich dark compost with seedling"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="w-5 h-5 rounded-full bg-[#153F32] text-white text-[11px] font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="text-xs font-bold text-[#153F32]">
                Grow Rich Compost
              </h3>
            </div>
            <p className="text-[11px] text-[#78847D] max-w-[200px] leading-relaxed">
              Let microorganisms break it down into nutrient-rich compost.
            </p>
          </div>

          {/* Learn Composting Button */}
          <div className="md:col-span-1 flex items-center justify-center">
            <button
              onClick={() => onNavigate('/composting')}
              className="px-5 py-2.5 rounded-full bg-[#153F32] hover:bg-[#1f5645] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Learn Composting</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. POPULAR GARDENING TOOLS (4 Horizontal Cards)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153F32] font-manrope">
            Popular Gardening Tools
          </h2>
          <button
            onClick={() => onNavigate('/tools')}
            className="text-xs font-bold text-[#153F32] hover:text-[#367B53] flex items-center gap-1 transition"
          >
            <span>View All Tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tool 1 */}
          <div
            onClick={() => onNavigate('/tools/compost-calculator')}
            className="bg-white rounded-2xl p-4 border border-[#E2EAE0] hover:border-[#367B53] transition cursor-pointer shadow-2xs hover:shadow-xs flex items-center gap-3.5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FFF3DC] text-[#D97706] flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-extrabold text-[#153F32] group-hover:text-[#367B53] transition truncate">
                Compost Calculator
              </h3>
              <p className="text-[11px] text-[#78847D] line-clamp-1 mt-0.5">
                Calculate how much compost you can make or need.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#78847D] group-hover:text-[#367B53] group-hover:translate-x-0.5 transition shrink-0" />
          </div>

          {/* Tool 2 */}
          <div
            onClick={() => onNavigate('/tools/brown-green-calculator')}
            className="bg-white rounded-2xl p-4 border border-[#E2EAE0] hover:border-[#367B53] transition cursor-pointer shadow-2xs hover:shadow-xs flex items-center gap-3.5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E8F0E5] text-[#367B53] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-extrabold text-[#153F32] group-hover:text-[#367B53] transition truncate">
                Brown-to-Green Calculator
              </h3>
              <p className="text-[11px] text-[#78847D] line-clamp-1 mt-0.5">
                Get the right balance for healthy composting.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#78847D] group-hover:text-[#367B53] group-hover:translate-x-0.5 transition shrink-0" />
          </div>

          {/* Tool 3 */}
          <div
            onClick={() => onNavigate('/tools/soil-amendment-calculator')}
            className="bg-white rounded-2xl p-4 border border-[#E2EAE0] hover:border-[#367B53] transition cursor-pointer shadow-2xs hover:shadow-xs flex items-center gap-3.5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F7EBE1] text-[#9A5B32] flex items-center justify-center shrink-0">
              <Shovel className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-extrabold text-[#153F32] group-hover:text-[#367B53] transition truncate">
                Soil Amendment Calculator
              </h3>
              <p className="text-[11px] text-[#78847D] line-clamp-1 mt-0.5">
                Calculate how much organic amendment to add to your soil.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#78847D] group-hover:text-[#367B53] group-hover:translate-x-0.5 transition shrink-0" />
          </div>

          {/* Tool 4 */}
          <div
            onClick={() => onNavigate('/tools/potting-mix-calculator')}
            className="bg-white rounded-2xl p-4 border border-[#E2EAE0] hover:border-[#367B53] transition cursor-pointer shadow-2xs hover:shadow-xs flex items-center gap-3.5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E5F1FB] text-[#2563EB] flex items-center justify-center shrink-0">
              <Sprout className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-extrabold text-[#153F32] group-hover:text-[#367B53] transition truncate">
                Potting Mix Calculator
              </h3>
              <p className="text-[11px] text-[#78847D] line-clamp-1 mt-0.5">
                Create the perfect potting mix for your containers.
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#78847D] group-hover:text-[#367B53] group-hover:translate-x-0.5 transition shrink-0" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. DIY GARDEN PROJECTS (6 Cards in Row)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153F32] font-manrope">
            DIY Garden Projects
          </h2>
          <button
            onClick={() => onNavigate('/diy-garden-projects')}
            className="text-xs font-bold text-[#153F32] hover:text-[#367B53] flex items-center gap-1 transition"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {diyCards.map((proj, i) => (
            <a
              key={i}
            href={`/diy-garden-projects/${proj.slug}`} onClick={(e) => { e.preventDefault(); onNavigate(`/diy-garden-projects/${proj.slug}`); }}
              className="bg-white rounded-2xl p-3 border border-[#E2EAE0] hover:border-[#367B53] transition cursor-pointer shadow-2xs hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2.5">
                  <SafeImage
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-xs font-extrabold text-[#153F32] group-hover:text-[#367B53] transition leading-snug line-clamp-1">
                    {proj.title}
                  </h3>
                  <ChevronRight className="w-3.5 h-3.5 text-[#367B53] shrink-0 group-hover:translate-x-0.5 transition" />
                </div>
                <p className="text-[11px] text-[#78847D] mt-1 line-clamp-2 leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. NEWSLETTER BANNER (Dark Green with Foliage Border & Pill Form)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#153F32] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
          {/* Decorative Leaf Accent Top Left */}
          <div className="absolute -top-6 -left-6 w-24 h-24 text-white/10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,50 Q25,0 75,10 Q60,50 50,100 Q10,75 0,50 Z" />
            </svg>
          </div>
          {/* Decorative Leaf Accent Bottom Right */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 text-white/10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M100,50 Q75,100 25,90 Q40,50 50,0 Q90,25 100,50 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-xl bg-[#367B53] text-[#C6E75A] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white font-manrope">
                  Grow Greener, One Small Step at a Time.
                </h3>
                <p className="text-xs text-[#E8F0E5]/80 mt-0.5">
                  Get the latest gardening tips, composting guides and new ideas delivered to your inbox.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              {newsletterState.status === 'success' ? (
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-[#C6E75A] text-xs font-semibold border border-[#C6E75A]/40">
                  <Check className="w-4 h-4" />
                  <span>{newsletterState.message}</span>
                </div>
              ) : newsletterState.status === 'unconfigured' ? (
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-amber-200 text-xs font-semibold border border-amber-300/40">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{newsletterState.message}</span>
                </div>
              ) : newsletterState.status === 'error' ? (
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-rose-200 text-xs font-semibold border border-rose-300/40">
                  <XCircle className="w-4 h-4" />
                  <span>{newsletterState.message}</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex items-center gap-2 w-full max-w-md bg-white p-1 rounded-full shadow-2xs"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 text-xs text-[#1F2923] placeholder-[#78847D] bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={newsletterState.status === 'submitting'}
                    className="px-6 py-2 rounded-full bg-[#C6E75A] hover:bg-[#b5d64e] text-[#153F32] text-xs font-extrabold transition shrink-0 shadow-2xs disabled:opacity-60"
                  >
                    {newsletterState.status === 'submitting' ? 'Signing up…' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
