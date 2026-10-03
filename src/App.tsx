import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { WasteToGardenPage } from './pages/WasteToGardenPage';
import { WasteArticlePage } from './pages/WasteArticlePage';
import { CompostingPage } from './pages/CompostingPage';
import { CompostingArticlePage } from './pages/CompostingArticlePage';
import { DIYProjectsPage } from './pages/DIYProjectsPage';
import { DIYProjectArticlePage } from './pages/DIYProjectArticlePage';
import { GardeningGuidesPage } from './pages/GardeningGuidesPage';
import { GardeningArticlePage } from './pages/GardeningArticlePage';
import { ToolsIndexPage } from './pages/ToolsIndexPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { ScannerPage } from './pages/ScannerPage';
import { LegalPage } from './pages/LegalPage';
import { LEGAL_PAGE_TYPES } from './data/legalRoutes';
import type { LegalPageType } from './data/legalRoutes';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

const stripBase = (pathname: string): string => {
  const path = pathname || '/';
  if (!BASE) return path;
  if (path === BASE) return '/';
  if (path.startsWith(`${BASE}/`)) return path.slice(BASE.length) || '/';
  return path;
};

const withBase = (path: string): string => (BASE ? `${BASE}${path === '/' ? '/' : path}` : path);

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return stripBase(window.location.pathname);
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(stripBase(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate handler that updates URL bar and scrolls to top smoothly
  const handleNavigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', withBase(path));
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route dispatcher
  const renderContent = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    // 2. Waste to Garden
    if (currentPath === '/waste-to-garden') {
      return <WasteToGardenPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/waste-to-garden/')) {
      const slug = currentPath.replace('/waste-to-garden/', '');
      return <WasteArticlePage slug={slug} onNavigate={handleNavigate} />;
    }

    // 3. Composting Knowledge Center
    if (currentPath === '/composting') {
      return <CompostingPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/composting/')) {
      const slug = currentPath.replace('/composting/', '');
      return <CompostingArticlePage slug={slug} onNavigate={handleNavigate} />;
    }

    // 4. DIY Garden Projects
    if (currentPath === '/diy-garden-projects') {
      return <DIYProjectsPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/diy-garden-projects/')) {
      const slug = currentPath.replace('/diy-garden-projects/', '');
      return <DIYProjectArticlePage slug={slug} onNavigate={handleNavigate} />;
    }

    // 5. Gardening Guides
    if (currentPath === '/gardening-guides') {
      return <GardeningGuidesPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/gardening-guides/')) {
      const slug = currentPath.replace('/gardening-guides/', '');
      return <GardeningArticlePage slug={slug} onNavigate={handleNavigate} />;
    }

    // 6. Tools & Calculators
    if (currentPath === '/tools') {
      return <ToolsIndexPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/tools/')) {
      const slug = currentPath.replace('/tools/', '');
      return <ToolDetailPage toolSlug={slug} onNavigate={handleNavigate} />;
    }

    // 7. Waste Scanner
    if (currentPath === '/waste-scanner') {
      return <ScannerPage onNavigate={handleNavigate} />;
    }

    // 8. Legal and Company pages
    const trimmedPath = currentPath.replace(/^\//, '');
    if ((LEGAL_PAGE_TYPES as string[]).includes(trimmedPath)) {
      return <LegalPage pageType={trimmedPath as LegalPageType} onNavigate={handleNavigate} />;
    }

    // Fallback: 404
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-extrabold text-[#183D32]">404 – Page Not Found</h1>
        <p className="text-sm text-[#78847D] mt-3">
          The gardening guide or tool you are looking for has been relocated or does not exist.
        </p>
        <button
          onClick={() => handleNavigate('/')}
          className="mt-6 px-6 py-3 rounded-2xl bg-[#183D32] text-white text-xs font-bold shadow-sm"
        >
          Return to WasteBloom Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6EE] text-[#26332D]">
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
