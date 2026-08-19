'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  ArrowRight
} from 'lucide-react';
import { WearGuardLogo } from '../ui/WearGuardLogo';
import { INDUSTRIES_DATA, APPLICATION_CATEGORIES_DATA } from '@/lib/companyData';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [applicationsDropdownOpen, setApplicationsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIndustriesDropdownOpen(false);
    setApplicationsDropdownOpen(false);
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#faf8f5]/95 backdrop-blur-xl border-b border-[#dcd5c9] shadow-sm py-3.5' 
        : 'bg-[#f4f0ea]/90 backdrop-blur-md border-b border-[#dcd5c9]/80 py-4.5'
    }`}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between gap-6">
          
          {/* 1. Logo */}
          <WearGuardLogo />

          {/* 2. Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            
            {/* Industries (with dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <Link
                href="/industries"
                className={`relative px-3.5 py-2 text-sm font-bold tracking-tight transition-all inline-flex items-center gap-1.5 rounded-xl ${
                  pathname?.startsWith('/industries')
                    ? 'text-[#a67c1e] bg-[#d4a340]/12'
                    : 'text-[#0b192c] hover:text-[#a67c1e] hover:bg-[#ede7de]'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180 text-[#d4a340]' : 'text-slate-500'}`} />
              </Link>

              {/* Industries Dropdown */}
              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-80 p-3 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-2xl z-50 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#a67c1e] px-3 py-1 font-mono-tech">
                    Operating Domains
                  </div>
                  {INDUSTRIES_DATA.map(ind => (
                    <Link
                      key={ind.id}
                      href={`/industries/${ind.id}`}
                      className="p-2.5 rounded-xl hover:bg-[#ede7de] flex items-start gap-3 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-[#d4a340]/10 text-[#a67c1e] group-hover:bg-[#d4a340] group-hover:text-white transition-colors mt-0.5 border border-[#d4a340]/20">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                          {ind.name}
                        </div>
                        <div className="text-[11px] text-[#4a433d] line-clamp-1">
                          {ind.tagline}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-[#dcd5c9] px-2">
                    <Link
                      href="/industries"
                      className="text-xs font-semibold text-[#a67c1e] hover:text-[#8c6514] flex items-center justify-between py-1 font-mono-tech"
                    >
                      <span>View All Industries</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Applications (with dot & dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setApplicationsDropdownOpen(true)}
              onMouseLeave={() => setApplicationsDropdownOpen(false)}
            >
              <Link
                href="/applications"
                className={`relative px-3.5 py-2 text-sm font-bold tracking-tight transition-all inline-flex items-center gap-1.5 rounded-xl ${
                  pathname?.startsWith('/applications')
                    ? 'text-[#a67c1e] bg-[#d4a340]/12'
                    : 'text-[#0b192c] hover:text-[#a67c1e] hover:bg-[#ede7de]'
                }`}
              >
                <span>Applications</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a340] shadow-sm shadow-[#d4a340]/50 -mt-2 -mr-1" />
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${applicationsDropdownOpen ? 'rotate-180 text-[#d4a340]' : 'text-slate-500'}`} />
              </Link>

              {/* Applications Dropdown */}
              {applicationsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-96 p-3 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-2xl z-50 grid grid-cols-2 gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 text-[10px] font-bold uppercase tracking-wider text-[#a67c1e] px-3 py-1 font-mono-tech">
                    Component Systems
                  </div>
                  {APPLICATION_CATEGORIES_DATA.map(app => (
                    <Link
                      key={app.id}
                      href={`/applications?category=${app.id}`}
                      className="p-2 rounded-xl hover:bg-[#ede7de] transition-colors group"
                    >
                      <div className="text-xs font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                        {app.shortName}
                      </div>
                      <div className="text-[10px] text-[#4a433d] line-clamp-1 font-mono-tech">
                        {app.badge}
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-[#dcd5c9] px-2">
                    <Link
                      href="/applications"
                      className="text-xs font-semibold text-[#a67c1e] hover:text-[#8c6514] flex items-center justify-between py-1 font-mono-tech"
                    >
                      <span>Explore Full Equipment Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Materials (with dot) */}
            <Link
              href="/alloys"
              className={`relative px-3.5 py-2 text-sm font-bold tracking-tight transition-all inline-flex items-center gap-1.5 rounded-xl ${
                pathname === '/alloys'
                  ? 'text-[#a67c1e] bg-[#d4a340]/12'
                  : 'text-[#0b192c] hover:text-[#a67c1e] hover:bg-[#ede7de]'
              }`}
            >
              <span>Materials</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a340] shadow-sm shadow-[#d4a340]/50 -mt-2 -mr-1" />
            </Link>

            {/* Custom Parts (with dot) */}
            <Link
              href="/custom-engineering"
              className={`relative px-3.5 py-2 text-sm font-bold tracking-tight transition-all inline-flex items-center gap-1.5 rounded-xl ${
                pathname === '/custom-engineering'
                  ? 'text-[#a67c1e] bg-[#d4a340]/12'
                  : 'text-[#0b192c] hover:text-[#a67c1e] hover:bg-[#ede7de]'
              }`}
            >
              <span>Custom Parts</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a340] shadow-sm shadow-[#d4a340]/50 -mt-2 -mr-1" />
            </Link>

            {/* About Us (Solid Titanium Gold Button) */}
            <Link
              href="/about"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-sm tracking-tight shadow-md shadow-[#d4a340]/25 transition-all hover:scale-105 active:scale-95 border border-[#f5dc96]/30 inline-flex items-center justify-center"
            >
              About Us
            </Link>

          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] hover:text-[#a67c1e]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#faf8f5] border-b border-[#dcd5c9] shadow-2xl p-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <nav className="space-y-2">
            <Link
              href="/industries"
              className="block px-4 py-3 rounded-xl text-sm font-bold text-[#0b192c] hover:bg-[#ede7de] hover:text-[#a67c1e]"
            >
              Industries
            </Link>
            <Link
              href="/applications"
              className="block px-4 py-3 rounded-xl text-sm font-bold text-[#0b192c] hover:bg-[#ede7de] hover:text-[#a67c1e]"
            >
              Applications
            </Link>
            <Link
              href="/alloys"
              className="block px-4 py-3 rounded-xl text-sm font-bold text-[#0b192c] hover:bg-[#ede7de] hover:text-[#a67c1e]"
            >
              Materials
            </Link>
            <Link
              href="/custom-engineering"
              className="block px-4 py-3 rounded-xl text-sm font-bold text-[#0b192c] hover:bg-[#ede7de] hover:text-[#a67c1e]"
            >
              Custom Parts
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 rounded-xl text-sm font-bold text-center bg-gradient-to-r from-[#d4a340] to-[#b8860b] text-white hover:from-[#c29230] hover:to-[#a67c1e] shadow-md shadow-[#d4a340]/20"
            >
              About Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
