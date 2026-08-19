'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Cpu, 
  ArrowUpRight,
  Flame,
  FileText
} from 'lucide-react';
import { INDUSTRIES_DATA, COMPANY_INFO } from '@/lib/companyData';
import { useModals } from '@/components/providers/ModalProvider';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { TiltedCard } from '@/components/reactbits/TiltedCard';

export default function IndustriesOverviewPage() {
  const { openQuoteModal } = useModals();

  return (
    <div className="w-full space-y-20 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a340]/10 border border-[#d4a340]/30 text-xs font-mono-tech">
          <Layers className="w-3.5 h-3.5 text-[#a67c1e]" />
          <ShinyText text="Operating Sectors & Industries" speed={3.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b192c] tracking-tight">
          Heavy-Industry Wear Solutions Tailored by Operating Domain
        </h1>
        <p className="text-base sm:text-lg text-[#4a433d] leading-relaxed max-w-3xl">
          Every industry has unique wear mechanisms—from rapid thermal degradation in asphalt drying drums to high-velocity silica scouring in concrete mixers and massive boulder impact in primary crushers.
        </p>
      </div>

      {/* Deep-Dive Grid */}
      <div className="grid grid-cols-1 gap-12">
        {INDUSTRIES_DATA.map((industry, idx) => (
          <div
            key={industry.id}
            id={industry.id}
            className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-xl relative overflow-hidden group hover:border-[#d4a340]/50 hover:shadow-2xl transition-all"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md bg-[#d4a340]/10 text-[#a67c1e] text-xs font-bold font-mono-tech border border-[#d4a340]/30">
                    {industry.badge}
                  </span>
                  <span className="text-xs text-[#4a433d] font-mono-tech">
                    0{idx + 1} / 04
                  </span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                    {industry.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4a433d] font-mono-tech">
                    {industry.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#4a433d] leading-relaxed">
                  {industry.description}
                </p>

                {/* Challenges & Advantages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-2">
                    <div className="text-xs font-bold text-red-700 font-mono-tech uppercase tracking-wider">
                      Operating Challenges:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#0b192c]">
                      {industry.challenges.slice(0, 3).map((ch, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <div className="text-xs font-bold text-emerald-800 font-mono-tech uppercase tracking-wider">
                      WearGuard Advantage:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#0b192c]">
                      {industry.wearguardAdvantage.slice(0, 3).map((adv, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={`/industries/${industry.id}`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors flex items-center gap-2 shadow-sm shadow-[#d4a340]/20"
                >
                  <span>Explore {industry.name} Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openQuoteModal(null, `Inquiry for ${industry.name} solutions`)}
                  className="px-5 py-2.5 rounded-xl bg-[#ede7de] hover:bg-[#e4ddd2] text-[#0b192c] font-mono-tech text-xs font-bold transition-colors cursor-pointer border border-[#dcd5c9]"
                >
                  Request Industry RFQ
                </button>
              </div>
            </div>

            {/* Right Visual & Metrics Column */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <TiltedCard maxAngle={6} scale={1.01}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9] shadow-lg">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </TiltedCard>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 text-center font-mono-tech">
                {industry.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#ede7de] border border-[#dcd5c9]">
                    <div className="text-lg font-black text-[#a67c1e]">{m.value}</div>
                    <div className="text-[10px] text-[#4a433d] mt-0.5 font-semibold">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
