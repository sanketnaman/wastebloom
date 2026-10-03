import React, { useState } from 'react';
import { Sparkles, Camera, CheckSquare, Wrench } from 'lucide-react';
import { WasteScanner } from '../components/scanner/WasteScanner';
import { BatchCompostChecker } from '../components/scanner/BatchCompostChecker';
import { CompostTroubleshooter } from '../components/scanner/CompostTroubleshooter';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ScannerPageProps {
  onNavigate: (path: string) => void;
}

export const ScannerPage: React.FC<ScannerPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'scan' | 'batch' | 'troubleshoot'>('scan');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      <SEOHead
        title="AI Waste Scanner & Smart Composting Assistant – WasteBloom"
        description="Upload a photo of your household waste or check multiple kitchen items simultaneously for composting suitability, prep instructions, and gardening applications."
      />

      <Breadcrumbs
        items={[{ label: 'AI Waste Scanner' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="bg-[#183D32] text-white p-8 md:p-12 rounded-3xl shadow-md border border-white/10">
        <span className="text-xs uppercase tracking-widest text-[#B6D96A] font-bold">Module B — Smart Waste Identification</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
          AI Waste Scanner & Assistant
        </h1>
        <p className="text-xs md:text-sm text-[#E3EDE1] mt-3 max-w-2xl leading-relaxed">
          Upload a photograph of your kitchen waste, test a batch of household scraps, or troubleshoot a smelly compost pile with science-backed gardening guidance.
        </p>

        {/* Tab switchers */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('scan')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'scan'
                ? 'bg-[#B6D96A] text-[#183D32] shadow-xs'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Camera className="w-4 h-4" /> Photo Waste Scanner
          </button>

          <button
            onClick={() => setActiveTab('batch')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'batch'
                ? 'bg-[#B6D96A] text-[#183D32] shadow-xs'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <CheckSquare className="w-4 h-4" /> "What Can I Compost?" Batch Tool
          </button>

          <button
            onClick={() => setActiveTab('troubleshoot')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'troubleshoot'
                ? 'bg-[#B6D96A] text-[#183D32] shadow-xs'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Wrench className="w-4 h-4" /> Compost Troubleshooter
          </button>
        </div>
      </div>

      {/* Render active tool */}
      <div className="space-y-8">
        {activeTab === 'scan' && (
          <WasteScanner onNavigateToGuide={(slug) => onNavigate(`/waste-to-garden/${slug}`)} />
        )}

        {activeTab === 'batch' && (
          <BatchCompostChecker />
        )}

        {activeTab === 'troubleshoot' && (
          <CompostTroubleshooter />
        )}
      </div>
    </div>
  );
};
