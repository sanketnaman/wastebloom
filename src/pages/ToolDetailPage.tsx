import React from 'react';
import { CompostCalculator } from '../components/calculators/CompostCalculator';
import { BrownGreenCalculator } from '../components/calculators/BrownGreenCalculator';
import { SoilAmendmentCalculator } from '../components/calculators/SoilAmendmentCalculator';
import { PottingMixCalculator } from '../components/calculators/PottingMixCalculator';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';

interface ToolDetailPageProps {
  toolSlug: string;
  onNavigate: (path: string) => void;
}

export const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ toolSlug, onNavigate }) => {
  const toolMap: Record<string, { title: string; desc: string; comp: React.ReactNode }> = {
    'compost-calculator': {
      title: 'Compost Bin Volume Calculator',
      desc: 'Calculate compost bin capacity and estimated finished compost yield.',
      comp: <CompostCalculator />,
    },
    'brown-green-calculator': {
      title: 'Compost Brown-to-Green Ratio Calculator',
      desc: 'Balance carbon & nitrogen volumes to eliminate odors and accelerate decomposition.',
      comp: <BrownGreenCalculator />,
    },
    'soil-amendment-calculator': {
      title: 'Soil Amendment & Mulch Calculator',
      desc: 'Calculate cubic yards and bags of compost or mulch needed for garden beds.',
      comp: <SoilAmendmentCalculator />,
    },
    'potting-mix-calculator': {
      title: 'Garden Potting Mix Recipe Calculator',
      desc: 'Calculate homemade potting soil components using compost and peat-free materials.',
      comp: <PottingMixCalculator />,
    },
  };

  const currentTool = toolMap[toolSlug];

  if (!currentTool) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-[#183D32]">Tool Not Found</h1>
        <button
          onClick={() => onNavigate('/tools')}
          className="mt-6 px-6 py-2.5 rounded-xl bg-[#183D32] text-white text-xs font-bold"
        >
          View All Tools
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <SEOHead
        title={currentTool.title}
        description={currentTool.desc}
      />

      <Breadcrumbs
        items={[
          { label: 'Gardening Tools', path: '/tools' },
          { label: currentTool.title },
        ]}
        onNavigate={onNavigate}
      />

      {currentTool.comp}
    </div>
  );
};
