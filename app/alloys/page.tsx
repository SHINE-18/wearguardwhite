'use client';

import React, { useState, useMemo, useRef, useEffect, useCallback, Suspense } from 'react';
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
  Award,
  ChevronDown,
  ArrowDown,
  ChevronUp,
  SlidersHorizontal
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

  const trackRef = useRef<HTMLDivElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const isUserInteractingRef = useRef<boolean>(false);
  const wheelLockTimeRef = useRef<number>(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const activeIndex = useMemo(() => {
    const idx = filteredAlloys.findIndex(a => a.id === selectedAlloyId);
    return idx >= 0 ? idx : 0;
  }, [filteredAlloys, selectedAlloyId]);

  const activeAlloy = filteredAlloys[activeIndex] || filteredAlloys[0] || ALLOY_GRADES_DATA[0];

  // Select a specific alloy and smooth center in list
  const handleSelectAlloy = useCallback((alloyId: string, userInitiated = true) => {
    setSelectedAlloyId(alloyId);
    if (userInitiated) {
      isUserInteractingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 500);
    }

    const el = itemRefs.current.get(alloyId);
    if (el && listContainerRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, []);

  // Step one-by-one on mouse wheel inside the alloy container
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    // 160ms throttle prevents rapid multi-skips per scroll flick
    if (now - wheelLockTimeRef.current < 160) return;

    if (Math.abs(e.deltaY) > 15) {
      if (e.deltaY > 0) {
        // Scrolling down -> next alloy
        if (activeIndex < filteredAlloys.length - 1) {
          e.preventDefault();
          wheelLockTimeRef.current = now;
          handleSelectAlloy(filteredAlloys[activeIndex + 1].id, true);
        }
      } else {
        // Scrolling up -> prev alloy
        if (activeIndex > 0) {
          e.preventDefault();
          wheelLockTimeRef.current = now;
          handleSelectAlloy(filteredAlloys[activeIndex - 1].id, true);
        }
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (activeIndex < filteredAlloys.length - 1) {
        handleSelectAlloy(filteredAlloys[activeIndex + 1].id, true);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeIndex > 0) {
        handleSelectAlloy(filteredAlloys[activeIndex - 1].id, true);
      }
    }
  };

  // Page Scroll-Track Spy: step through alloys as page scrolls through the pinned section
  useEffect(() => {
    const handlePageScroll = () => {
      if (isUserInteractingRef.current || !trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable > 0) {
        // Calculate progress within this track (from 0 to 1)
        const scrolled = -rect.top + 80;
        const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

        const targetIdx = Math.min(
          Math.floor(progress * filteredAlloys.length),
          filteredAlloys.length - 1
        );

        if (targetIdx >= 0 && filteredAlloys[targetIdx] && filteredAlloys[targetIdx].id !== selectedAlloyId) {
          setSelectedAlloyId(filteredAlloys[targetIdx].id);
          const el = itemRefs.current.get(filteredAlloys[targetIdx].id);
          if (el && listContainerRef.current) {
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      }
    };

    window.addEventListener('scroll', handlePageScroll, { passive: true });
    return () => window.removeEventListener('scroll', handlePageScroll);
  }, [filteredAlloys, selectedAlloyId]);

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

      {/* Metallurgical Technology Suite Banner */}
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
              <img src="/images/material-technologies-whole-set.webp" alt="WearGuard Material Technologies" className="w-full h-full object-cover" />
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* Series Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {seriesOptions.map(series => (
          <button
            key={series}
            onClick={() => {
              setSelectedSeries(series);
              const nextList = series === 'all' ? ALLOY_GRADES_DATA : ALLOY_GRADES_DATA.filter(a => a.series === series);
              if (nextList.length > 0 && !nextList.some(a => a.id === selectedAlloyId)) {
                setSelectedAlloyId(nextList[0].id);
              }
            }}
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

      {/* PINNED SCROLLYTELLING TRACK FOR ONE-BY-ONE ALLOY STEPPING */}
      <div 
        ref={trackRef} 
        className="relative"
        style={{ minHeight: `${Math.max(160, filteredAlloys.length * 32)}vh` }}
      >
        
        {/* Sticky Stage: Locks on screen while page scrolls through each alloy */}
        <div className="sticky top-20 lg:top-24 z-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left List of Alloys (4 cols) with Wheel Interceptor */}
            <div className="lg:col-span-4 space-y-3">
              
              {/* Stepper Header with Prev/Next Controls */}
              <div className="flex items-center justify-between px-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#4a433d] font-mono-tech flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#a67c1e]" />
                  <span>Select Alloy Grade:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono-tech text-[#a67c1e] font-bold">
                    {activeIndex + 1} / {filteredAlloys.length}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => activeIndex > 0 && handleSelectAlloy(filteredAlloys[activeIndex - 1].id, true)}
                      disabled={activeIndex === 0}
                      aria-label="Previous alloy"
                      className="p-1 rounded-lg bg-[#ede7de] hover:bg-[#dcd5c9] text-[#0b192c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => activeIndex < filteredAlloys.length - 1 && handleSelectAlloy(filteredAlloys[activeIndex + 1].id, true)}
                      disabled={activeIndex === filteredAlloys.length - 1}
                      aria-label="Next alloy"
                      className="p-1 rounded-lg bg-[#ede7de] hover:bg-[#dcd5c9] text-[#0b192c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Line */}
              <div className="w-full h-1 bg-[#dcd5c9] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#d4a340] transition-all duration-200"
                  style={{ width: `${((activeIndex + 1) / filteredAlloys.length) * 100}%` }}
                />
              </div>

              {/* Scrollable Alloy List with Wheel Listener */}
              <div 
                ref={listContainerRef}
                onWheel={handleWheel}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="listbox"
                aria-label="Alloy grades list"
                className="space-y-2.5 max-h-[520px] lg:max-h-[580px] overflow-y-auto pr-1.5 scroll-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a340] rounded-2xl"
              >
                {filteredAlloys.map((alloy, idx) => {
                  const isSelected = alloy.id === activeAlloy.id;
                  return (
                    <button
                      key={alloy.id}
                      ref={(el) => {
                        if (el) itemRefs.current.set(alloy.id, el);
                        else itemRefs.current.delete(alloy.id);
                      }}
                      onClick={() => handleSelectAlloy(alloy.id, true)}
                      role="option"
                      aria-selected={isSelected}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 relative overflow-hidden ${
                        isSelected
                          ? 'bg-[#faf8f5] border-[#d4a340] ring-2 ring-[#d4a340]/30 shadow-lg translate-x-1'
                          : 'bg-[#faf8f5]/85 border-[#dcd5c9] hover:bg-[#faf8f5] hover:border-[#d4a340]/60 opacity-75 hover:opacity-100'
                      }`}
                    >
                      {/* Active Indicator Bar */}
                      {isSelected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a340]" />
                      )}

                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-bold transition-colors ${isSelected ? 'text-[#0b192c]' : 'text-[#4a433d]'}`}>
                          {alloy.name}
                        </span>
                        <span className={`text-[11px] px-2 py-0.5 rounded font-mono-tech font-bold border transition-colors ${
                          isSelected 
                            ? 'bg-[#d4a340]/20 text-[#a67c1e] border-[#d4a340]/40' 
                            : 'bg-[#ede7de] text-[#4a433d] border-[#dcd5c9]'
                        }`}>
                          {alloy.hardness}
                        </span>
                      </div>

                      <div className="text-xs text-[#4a433d] font-mono-tech line-clamp-1 flex items-center justify-between">
                        <span>{alloy.series}</span>
                        {isSelected && (
                          <span className="text-[10px] uppercase font-bold text-[#a67c1e]">
                            Step {idx + 1}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Interaction Hint */}
              <div className="px-1 flex items-center justify-between text-[11px] font-mono-tech text-[#4a433d]/80">
                <span className="flex items-center gap-1">
                  <ArrowDown className="w-3 h-3 text-[#a67c1e] animate-bounce" />
                  Scroll to step 1-by-1
                </span>
                <span>or click to jump</span>
              </div>
            </div>

            {/* Right Active Alloy Spec Card (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] space-y-6 sm:space-y-8 shadow-xl relative overflow-hidden">
              <div key={activeAlloy.id} className="animate-in fade-in zoom-in-95 duration-200 space-y-6 sm:space-y-8">
                
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
                    <div className="text-2xl font-black text-[#a67c1e] font-mono-tech">
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
                    <div className="text-[11px] text-[#4a433d] font-mono-tech uppercase font-semibold">Max Temp</div>
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

                  <div className="space-y-2 pt-1">
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
                  <button
                    onClick={() => openQuoteModal(null, `Inquiry for ${activeAlloy.name} metallurgy`)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech shadow-md shadow-[#d4a340]/20 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    Request Quotation in {activeAlloy.name}
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Quality Control Footer */}
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
