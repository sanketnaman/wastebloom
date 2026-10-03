import React, { useState } from 'react';
import { Search, Camera, Menu, X, Leaf } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Waste to Garden', path: '/waste-to-garden' },
    { label: 'Composting', path: '/composting' },
    { label: 'DIY Projects', path: '/diy-garden-projects' },
    { label: 'Gardening Guides', path: '/gardening-guides' },
    { label: 'Tools', path: '/tools' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F6EC]/95 backdrop-blur-md border-b border-[#E3ECE0] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Leaf & Recycling Sprout */}
          <div
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#367B53] text-[#C6E75A] p-2 flex items-center justify-center transition shadow-xs group-hover:scale-105">
              <svg
                viewBox="0 0 32 32"
                className="w-full h-full"
                fill="none"
              >
                <path
                  d="M16 4C16 4 10 11 10 17C10 20.3137 12.6863 23 16 23C19.3137 23 22 20.3137 22 17C22 11 16 4 16 4Z"
                  fill="#C6E75A"
                />
                <path d="M16 10V22" stroke="#153F32" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 15L20 12" stroke="#153F32" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 18L12 15" stroke="#153F32" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 26C12 28.5 20 28.5 25 26" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#153F32] font-manrope leading-none">
                WasteBloom
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#367B53] font-bold mt-0.5">
                Upcycle & Grow
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3.5 py-2 rounded-lg text-xs xl:text-sm transition ${
                    active
                      ? 'text-[#153F32] font-bold'
                      : 'text-[#2D3B33] font-medium hover:text-[#153F32] hover:bg-black/[0.03]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Search Bar & Waste Scanner Pill */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Pill */}
            <div
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#D8E2D6] text-xs text-[#78847D] cursor-pointer hover:border-[#367B53] transition shadow-2xs w-44 md:w-56"
              title="Search guides, tools & waste items"
            >
              <Search className="w-3.5 h-3.5 text-[#78847D]" />
              <span className="truncate">Search guides, waste items...</span>
            </div>

            {/* Waste Scanner Button */}
            <button
              onClick={() => handleNavClick('/waste-scanner')}
              className="px-4 py-2 rounded-full bg-[#153F32] hover:bg-[#1f5645] text-white text-xs font-bold shadow-xs transition flex items-center gap-2 shrink-0 group"
            >
              <Camera className="w-3.5 h-3.5 text-white" />
              <span>Waste Scanner</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full bg-white border border-[#D8E2D6] text-[#153F32]"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#153F32] text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E3ECE0] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-md">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                isActive(link.path)
                  ? 'bg-[#E8F0E5] text-[#153F32] font-bold'
                  : 'text-[#3E4D44] hover:bg-[#F8F6EC]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('/waste-scanner')}
              className="w-full py-3 rounded-full bg-[#153F32] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-xs"
            >
              <Camera className="w-4 h-4" /> AI Waste Scanner
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
