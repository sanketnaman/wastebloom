import React, { useState } from 'react';
import { Mail, Check, Leaf } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#11352A] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row: Brand Info + 4 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="flex items-center gap-2.5 cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-[#367B53] text-[#C6E75A] p-2 flex items-center justify-center shadow-xs">
                <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
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
                <span className="text-2xl font-extrabold tracking-tight text-white font-manrope leading-none">
                  WasteBloom
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C6E75A] font-bold mt-0.5">
                  Upcycle & Grow
                </span>
              </div>
            </a>

            <p className="text-xs text-[#E8F0E5]/80 leading-relaxed max-w-sm">
              Turn everyday waste into something beautiful. Practical guides, tools and ideas for a greener home and healthier planet.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6E75A] hover:text-[#153F32] text-white flex items-center justify-center transition text-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6E75A] hover:text-[#153F32] text-white flex items-center justify-center transition text-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.38 9.29-.09-.78-.16-1.98.03-2.83.18-.76 1.15-4.88 1.15-4.88s-.29-.59-.29-1.46c0-1.37.79-2.39 1.78-2.39.84 0 1.25.63 1.25 1.39 0 .85-.54 2.12-.82 3.3-.23.99.5 1.8 1.47 1.8 1.77 0 3.13-1.87 3.13-4.56 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.33 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.32-.25 1.02-.28 1.16-.05.19-.16.23-.37.14-1.39-.65-2.26-2.67-2.26-4.3 0-3.5 2.54-6.72 7.34-6.72 3.86 0 6.85 2.75 6.85 6.42 0 3.83-2.41 6.92-5.76 6.92-1.12 0-2.18-.58-2.54-1.27l-.69 2.64c-.25.96-.93 2.16-1.39 2.89A10 10 0 1 0 12 2z" />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6E75A] hover:text-[#153F32] text-white flex items-center justify-center transition text-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6E75A] hover:text-[#153F32] text-white flex items-center justify-center transition text-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white mb-3.5">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#E8F0E5]/80">
              <li>
                <a href="/waste-to-garden" onClick={(e) => { e.preventDefault(); onNavigate('/waste-to-garden'); }} className="hover:text-[#C6E75A] transition">
                  Waste to Garden
                </a>
              </li>
              <li>
                <a href="/composting" onClick={(e) => { e.preventDefault(); onNavigate('/composting'); }} className="hover:text-[#C6E75A] transition">
                  Composting
                </a>
              </li>
              <li>
                <a href="/diy-garden-projects" onClick={(e) => { e.preventDefault(); onNavigate('/diy-garden-projects'); }} className="hover:text-[#C6E75A] transition">
                  DIY Projects
                </a>
              </li>
              <li>
                <a href="/gardening-guides" onClick={(e) => { e.preventDefault(); onNavigate('/gardening-guides'); }} className="hover:text-[#C6E75A] transition">
                  Gardening Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white mb-3.5">
              Tools
            </h4>
            <ul className="space-y-2 text-xs text-[#E8F0E5]/80">
              <li>
                <a href="/tools/compost-calculator" onClick={(e) => { e.preventDefault(); onNavigate('/tools/compost-calculator'); }} className="hover:text-[#C6E75A] transition">
                  Compost Calculator
                </a>
              </li>
              <li>
                <a href="/tools/brown-green-calculator" onClick={(e) => { e.preventDefault(); onNavigate('/tools/brown-green-calculator'); }} className="hover:text-[#C6E75A] transition">
                  Brown-to-Green Calculator
                </a>
              </li>
              <li>
                <a href="/tools/soil-amendment-calculator" onClick={(e) => { e.preventDefault(); onNavigate('/tools/soil-amendment-calculator'); }} className="hover:text-[#C6E75A] transition">
                  Soil Amendment Calculator
                </a>
              </li>
              <li>
                <a href="/tools/potting-mix-calculator" onClick={(e) => { e.preventDefault(); onNavigate('/tools/potting-mix-calculator'); }} className="hover:text-[#C6E75A] transition">
                  Potting Mix Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white mb-3.5">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#E8F0E5]/80">
              <li>
                <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('/about'); }} className="hover:text-[#C6E75A] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }} className="hover:text-[#C6E75A] transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/editorial-policy" onClick={(e) => { e.preventDefault(); onNavigate('/editorial-policy'); }} className="hover:text-[#C6E75A] transition">
                  Editorial Policy
                </a>
              </li>
              <li>
                <a href="/advertising-policy" onClick={(e) => { e.preventDefault(); onNavigate('/advertising-policy'); }} className="hover:text-[#C6E75A] transition">
                  Advertising Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white mb-3.5">
              Legal
            </h4>
            <ul className="space-y-2 text-xs text-[#E8F0E5]/80">
              <li>
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="hover:text-[#C6E75A] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" onClick={(e) => { e.preventDefault(); onNavigate('/terms-and-conditions'); }} className="hover:text-[#C6E75A] transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/disclaimer" onClick={(e) => { e.preventDefault(); onNavigate('/disclaimer'); }} className="hover:text-[#C6E75A] transition">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/cookie-policy" onClick={(e) => { e.preventDefault(); onNavigate('/cookie-policy'); }} className="hover:text-[#C6E75A] transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Leaf Icon */}
        <div className="pt-6 flex items-center justify-between text-xs text-[#E8F0E5]/60">
          <div>© {new Date().getFullYear()} WasteBloom. All rights reserved.</div>
          <div className="flex items-center gap-1.5 text-[#C6E75A]">
            <Leaf className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

