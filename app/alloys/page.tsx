'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Download, 
  FileText, 
  Check, 
  ArrowRight, 
  Cpu, 
  Flame, 
  Sliders, 
  Award 
} from 'lucide-react';
import { ALLOY_GRADES_DATA, COMPANY_INFO } from '@/lib/companyData';
import { useModals } from '@/components/providers/ModalProvider';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { TiltedCard } from '@/components/reactbits/TiltedCard';

function AlloysContent() {
  const searchParams = useSearchParams();
  const initialAlloy = searchParams.get('alloy');
  const { openQuoteModal } = useModals();

  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [selectedAlloyId, setSelectedAlloyId] = useState<string>(initialAlloy || ALLOY_GRADES_DATA[0].id);

  const seriesOptions = [
    'all',
    'WearCast High-Chrome',
    'EnduraCast Z-Core',
    'WearGuard Cut-to-Shape',
    'Advanced Composites'
  ];

  const filteredAlloys = useMemo(() => {
    if (selectedSeries === 'all') return ALLOY_GRADES_DATA;
    return ALLOY_GRADES_DATA.filter(a => a.series === selectedSeries);
  }, [selectedSeries]);

  const activeAlloy = ALLOY_GRADES_DATA.find(a => a.id === selectedAlloyId) || ALLOY_GRADES_DATA[0];

  return (
    <div className="w-full space-y-16 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a340]/10 border border-[#d4a340]/30 text-xs font-mono-tech">
          <Sparkles className="w-3.5 h-3.5 text-[#a67c1e]" />
          <ShinyText text="Advanced Metallurgy & Alloy Formulations" speed={3.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b192c] tracking-tight">
          Engineered Alloy Chemistry for Punishing Wear Regimes
        </h1>
        <p className="text-base sm:text-lg text-[#4a433d] leading-relaxed max-w-3xl">
          We do not believe in one-size-fits-all steel. WearGuard formulates hypereutectic high-chrome irons, quenched martensitic steels, and tungsten-carbide composites tailored specifically for sliding gouging, high-temperature RAP cycling, and high-impact crushing.
        </p>
      </div>

      {/* Metallurgical Technology Suite Banner with TiltedCard */}
      <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
            Comprehensive Material Spectrum
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c]">
            Tailored Matrices from 400 BHN to 68 HRC Diamond-Grade
          </h2>
          <p className="text-xs sm:text-sm text-[#4a433d] leading-relaxed">
            From through-hardened martensite plates for drop chutes to ceramic-rubber tiles for fine silica slurry and fused tungsten-titanium carbide inserts for extreme asphalt RAP gouging.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono-tech">
            <span className="px-3 py-1.5 rounded-xl bg-[#d4a340]/12 border border-[#d4a340]/30 text-[#a67c1e] font-bold">High-Chrome 28%</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] font-bold">Ni-Hard 4 Matrix</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] font-bold">Alumina Ceramic Al2O3</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] font-bold">Hardfaced CCO Plate</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <TiltedCard maxAngle={6} scale={1.01}>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9] shadow-xl">
              <img
                src="/images/material-technologies-whole-set.webp"
                alt="WearGuard Material Technologies Whole Set"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* Series Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {seriesOptions.map(series => (
          <button
            key={series}
            onClick={() => setSelectedSeries(series)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-mono-tech whitespace-nowrap transition-all cursor-pointer ${
              selectedSeries === series
                ? 'bg-[#d4a340] text-white shadow-md shadow-[#d4a340]/20'
                : 'bg-[#faf8f5] text-[#0b192c] border border-[#dcd5c9] hover:bg-[#ede7de]'
            }`}
          >
            {series === 'all' ? `All Alloys (${ALLOY_GRADES_DATA.length})` : series}
          </button>
        ))}
      </div>

      {/* Interactive Alloy Detail Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left List of Alloys (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#4a433d] font-mono-tech px-1">
            Select Alloy Grade to Inspect:
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {filteredAlloys.map(alloy => {
              const isSelected = alloy.id === activeAlloy.id;
              return (
                <button
                  key={alloy.id}
                  onClick={() => setSelectedAlloyId(alloy.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? 'bg-[#faf8f5] border-[#d4a340] ring-2 ring-[#d4a340]/20 shadow-md'
                      : 'bg-[#faf8f5]/80 border-[#dcd5c9] hover:bg-[#faf8f5] hover:border-[#d4a340]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#0b192c]">
                      {alloy.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#d4a340]/10 text-[#a67c1e] font-mono-tech font-bold border border-[#d4a340]/20">
                      {alloy.hardness}
                    </span>
                  </div>

                  <div className="text-xs text-[#4a433d] line-clamp-1">
                    {alloy.series}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Active Alloy Full Spec Card (8 cols) */}
        <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] space-y-8 shadow-xl relative overflow-hidden">
          
          {/* Active Alloy Title & Hardness Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#dcd5c9] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
                {activeAlloy.series}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b192c] tracking-tight">
                {activeAlloy.name}
              </h2>
            </div>

            <div className="flex flex-col items-start sm:items-end">
              <span className="text-xs text-[#4a433d] font-mono-tech uppercase font-semibold">Target Hardness</span>
              <div className="text-xl sm:text-2xl font-black text-[#a67c1e] font-mono-tech">
                {activeAlloy.hardness}
              </div>
            </div>
          </div>

          {/* Core Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#ede7de] border border-[#dcd5c9] space-y-1">
              <div className="text-[11px] text-[#4a433d] font-mono-tech uppercase font-semibold">Abrasion Resistance</div>
              <div className="text-sm font-bold text-[#a67c1e]">{activeAlloy.abrasionResistance}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#ede7de] border border-[#dcd5c9] space-y-1">
              <div className="text-[11px] text-[#4a433d] font-mono-tech uppercase font-semibold">Impact Toughness</div>
              <div className="text-sm font-bold text-[#0b192c]">{activeAlloy.impactResistance}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#ede7de] border border-[#dcd5c9] space-y-1">
              <div className="text-[11px] text-[#4a433d] font-mono-tech uppercase font-semibold">Max Temperature Threshold</div>
              <div className="text-sm font-bold text-slate-700">{activeAlloy.maxTemp}</div>
            </div>
          </div>

          {/* Chemical Highlights */}
          <div className="p-5 rounded-2xl bg-[#ede7de] border border-[#dcd5c9] space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0b192c] font-mono-tech flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#a67c1e]" />
              <span>Metallurgical Chemistry & Microstructure</span>
            </div>
            <p className="text-xs sm:text-sm text-[#0b192c] font-mono-tech leading-relaxed">
              {activeAlloy.chemicalHighlights}
            </p>
          </div>

          {/* Recommended Use & Applications */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
                Recommended Operating Environments:
              </div>
              <p className="text-sm text-[#4a433d] leading-relaxed">
                {activeAlloy.recommendedUse}
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0b192c] font-mono-tech">
                Common Component Applications:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeAlloy.applications.map((app, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-[#ede7de] border border-[#dcd5c9] text-xs font-mono-tech font-semibold text-[#0b192c]">
                    ✓ {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-[#dcd5c9] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#4a433d] font-mono-tech">
              Availability: <span className="text-[#0b192c] font-semibold">{activeAlloy.thicknessAvailability}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openQuoteModal(null, `Inquiry for ${activeAlloy.name} metallurgy`)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech shadow-md shadow-[#d4a340]/20 transition-all cursor-pointer"
              >
                Request Quotation in {activeAlloy.name}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Quality Control & Spectrometry Certification Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono-tech">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Foundry Quality Control</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0b192c]">
            100% Optical Emission Spectrometry
          </h3>
        </div>

        <div className="md:col-span-2 text-xs sm:text-sm text-[#4a433d] leading-relaxed space-y-2">
          <p>
            Every casting heat and wear plate run undergoes rigorous chemical spectrum analysis, ultrasonic flaw detection (UT), and digital Rockwell/Brinell hardness testing before leaving the foundry.
          </p>
          <div className="flex flex-wrap gap-4 font-mono-tech text-[11px] text-[#0b192c] pt-1 font-semibold">
            <span>• EN 10204 3.1 Mill Test Certificates</span>
            <span>• ASTM A532 Class II/III Standard</span>
            <span>• ISO 9001:2015 Traceability</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function AlloysPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[#4a433d]">Loading metallurgy matrix...</div>}>
      <AlloysContent />
    </Suspense>
  );
}
