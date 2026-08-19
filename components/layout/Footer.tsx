'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { WearGuardLogo } from '../ui/WearGuardLogo';
import { useModals } from '../providers/ModalProvider';
import { COMPANY_INFO, INDUSTRIES_DATA, ALLOY_GRADES_DATA, APPLICATION_CATEGORIES_DATA } from '@/lib/companyData';

export const Footer: React.FC = () => {
  const { openQuoteModal } = useModals();

  return (
    <footer className="w-full bg-[#faf8f5] border-t border-[#dcd5c9] text-[#4a433d] text-sm">
      
      {/* Top Banner: 24h Drawing & Small Batch Foundry Commitment */}
      <div className="border-b border-[#dcd5c9] bg-[#ede7de] py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#0b192c] tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4a340] animate-pulse" />
              <span>Need Custom Metallurgy or Urgent Replacement Spares?</span>
            </h4>
            <p className="text-xs text-[#4a433d] font-mono-tech">
              Send worn samples or 2D/3D CAD drawings. 24-hour feasibility review with 1–10 unit minimums.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech shadow-md shadow-[#d4a340]/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Request Fast RFQ
            </button>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#faf8f5] hover:bg-white text-[#0b192c] font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors border border-[#dcd5c9] shadow-sm"
            >
              Contact Engineering
            </Link>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Body - Perfectly Balanced 12-Column Grid */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Col 1: Brand & Parent Company (4 cols) */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
            <WearGuardLogo imgClassName="h-12 sm:h-14 lg:h-16" />
            
            <p className="text-xs text-[#4a433d] leading-relaxed max-w-sm">
              WearGuard™ is a specialized heavy-industry wear engineering and casting manufacturer. We engineer custom castings, high-chrome wear components, and precision liners for asphalt, concrete, mining, and bulk process plants worldwide.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono-tech">
              <div className="flex items-center gap-2.5 text-[#0b192c]">
                <Phone className="w-3.5 h-3.5 text-[#d4a340] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#a67c1e] font-bold transition-colors">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#0b192c]">
                <Mail className="w-3.5 h-3.5 text-[#d4a340] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#a67c1e] font-bold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-[#4a433d]">
                <MapPin className="w-3.5 h-3.5 text-[#d4a340] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Industries (2.5 cols -> lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#0b192c] font-mono-tech">
              Industries Served
            </h5>
            <ul className="space-y-2 text-xs font-medium">
              {INDUSTRIES_DATA.map(ind => (
                <li key={ind.id}>
                  <Link
                    href={`/industries/${ind.id}`}
                    className="hover:text-[#a67c1e] text-[#4a433d] transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{ind.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#a67c1e]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Applications (3 cols -> lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#0b192c] font-mono-tech">
              Equipment Solutions
            </h5>
            <ul className="space-y-2 text-xs font-medium">
              {APPLICATION_CATEGORIES_DATA.map(app => (
                <li key={app.id}>
                  <Link
                    href={`/applications?category=${app.id}`}
                    className="hover:text-[#a67c1e] text-[#4a433d] transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{app.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#a67c1e]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Metallurgy & Tools (3 cols -> lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#0b192c] font-mono-tech">
              Engineering & Tools
            </h5>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/alloys" className="hover:text-[#a67c1e] text-[#4a433d] transition-colors flex items-center justify-between group py-0.5">
                  <span>Metallurgy Matrix & Hardness Guide</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#a67c1e]" />
                </Link>
              </li>
              <li>
                <Link href="/custom-engineering" className="hover:text-[#a67c1e] text-[#4a433d] transition-colors flex items-center justify-between group py-0.5">
                  <span>3D Reverse CAD Scanning</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#a67c1e]" />
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => openQuoteModal()}
                  className="hover:text-[#a67c1e] text-[#4a433d] transition-colors text-left cursor-pointer flex items-center justify-between group w-full py-0.5"
                >
                  <span>Send 2D/3D Drawing for Review</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#a67c1e]" />
                </button>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#a67c1e] text-[#4a433d] transition-colors flex items-center justify-between group py-0.5">
                  <span>Foundry QC & Spectrometry</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#a67c1e]" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-[#dcd5c9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4a433d] font-mono-tech">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}™. All rights reserved. The Endurance Standard.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <span>ASTM A532 Class II/III Standard</span>
            <span className="hidden sm:inline">•</span>
            <span>Small-Batch 1–10 Units</span>
            <span className="hidden sm:inline">•</span>
            <span>24h Drawing Turnaround</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
