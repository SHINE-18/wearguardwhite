'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Layers, 
  ArrowUpRight, 
  Sparkles, 
  Phone, 
  ScanLine, 
  Award, 
  FileCheck, 
  Zap, 
  Check,
  Cpu,
  Flame,
  ChevronDown,
  Building2,
  Wrench,
  TrendingUp,
  RotateCcw,
  Gauge
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  INDUSTRIES_DATA, 
  PRODUCTS_CATALOG, 
  APPLICATION_CATEGORIES_DATA,
  ALLOY_GRADES_DATA,
  CUSTOM_ENGINEERING_STEPS,
  TESTIMONIALS,
  FAQ_DATA 
} from '@/lib/companyData';
import { AnnotatedPhoto } from '@/components/ui/AnnotatedPhoto';
import { useModals } from '@/components/providers/ModalProvider';

// React Bits Effects
import { Squares } from '@/components/reactbits/Squares';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { DecryptedText } from '@/components/reactbits/DecryptedText';
import { CountUp } from '@/components/reactbits/CountUp';
import { TiltedCard } from '@/components/reactbits/TiltedCard';
import { SpotlightCard } from '@/components/reactbits/SpotlightCard';
import { TestimonialTicker } from '@/components/ui/TestimonialTicker';

export default function HomePage() {
  const { openQuoteModal } = useModals();
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Callouts for flagship alloy spotlight (VF-240 Martensitic High-Chrome)
  const alloyCallouts = [
    {
      id: 'pin-1',
      x: 32,
      y: 35,
      title: 'Hypereutectic 28% Chrome Matrix',
      description: 'Primary M7C3 carbides with micro-hardness exceeding 1600 HV embedded in tough martensite, resisting severe sliding gouging.',
      spec: 'Hardness: 62–66 HRC'
    },
    {
      id: 'pin-2',
      x: 68,
      y: 45,
      title: 'Anti-Thermal Stress Chemistry',
      description: 'Secondary molybdenum and nickel additions maintain mechanical integrity under hot-mix asphalt aggregate temperatures up to 450°C.',
      spec: 'Max Temp: 600°C'
    },
    {
      id: 'pin-3',
      x: 48,
      y: 72,
      title: 'Precision CNC Machined Counterbores',
      description: 'Bolt recesses machined to exact OEM tolerances for direct drop-in fitment without torch modifications or on-site welding.',
      spec: 'Tolerance: ±0.15mm'
    }
  ];

  const precisionParts = [
    {
      id: 'cad-1',
      title: '28% Cr Pugmill Paddle Arm',
      subtitle: 'Shielded Shaft Hub',
      image: '/images/1.png',
      hardness: '64 HRC',
      category: 'Mixer Component'
    },
    {
      id: 'cad-2',
      title: 'CFD Curtain Drum Lifter',
      subtitle: 'Anti-Burn Flighting',
      image: '/images/2.png',
      hardness: '500 BHN',
      category: 'Dryer Component'
    },
    {
      id: 'cad-3',
      title: 'Interlocking Chute Tile',
      subtitle: 'EnduraCast Z-Core',
      image: '/images/3.png',
      hardness: '62 HRC',
      category: 'Transfer Liner'
    },
    {
      id: 'cad-4',
      title: 'Heavy Penetration GET Tip',
      subtitle: 'Deep Core Hardened',
      image: '/images/4.png',
      hardness: '52 HRC',
      category: 'G.E.T. Excavator'
    }
  ];

  return (
    <div className="w-full space-y-24 sm:space-y-32 pb-24 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* 1. HERO SECTION: Warm Alabaster & Nordic Oat Luxury Theme */}
      <section className="relative min-h-[88vh] flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 border-b border-[#dcd5c9] bg-gradient-to-b from-[#faf8f5] via-[#f4f0ea] to-[#ede7de]/80 overflow-hidden">
        
        {/* React Bits Squares Interactive Grid Background with Gold hover */}
        <div className="absolute inset-0 pointer-events-auto opacity-75">
          <Squares 
            direction="diagonal" 
            speed={0.35} 
            squareSize={48} 
            borderColor="rgba(220, 213, 201, 0.6)" 
            hoverFillColor="rgba(212, 163, 64, 0.14)" 
          />
        </div>

        {/* Ambient Radial Soft Warm Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4a340]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full text-center space-y-8 relative z-10 pointer-events-auto max-w-7xl 2xl:max-w-screen-2xl mx-auto">
          
          {/* Subtle Tag with React Bits ShinyText */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faf8f5] border border-[#dcd5c9] text-xs font-mono-tech shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#d4a340] animate-pulse" />
            <ShinyText 
              text="The Endurance Standard • Engineered Metallurgy • 24-Hour Drawing Turnaround" 
              speed={3.5} 
            />
          </div>

          {/* Main Display Headline */}
          <div className="space-y-5 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#0b192c] leading-[1.08]">
              Industrial Wear Components Engineered to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a340] via-[#a67c1e] to-[#0b192c]">Outlast OEM Standards</span>.
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-[#4a433d] max-w-4xl mx-auto leading-relaxed">
              Custom alloy metallurgy, reverse engineering from 2D/3D CAD, and small-batch manufacturing for asphalt, concrete, mining, and bulk process plants.
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#d4a340] via-[#c29230] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-sm tracking-wider uppercase font-mono-tech transition-all flex items-center gap-2.5 cursor-pointer shadow-lg shadow-[#d4a340]/25 hover:scale-105 active:scale-95 border border-[#f5dc96]/30"
            >
              <FileText className="w-4 h-4" />
              <span>Request Quote / Send Drawing</span>
            </button>

            <Link
              href="/applications"
              className="px-7 py-4 rounded-xl bg-[#faf8f5] hover:bg-white text-[#0b192c] hover:text-[#a67c1e] font-semibold text-sm transition-all flex items-center gap-2 border border-[#dcd5c9] shadow-sm cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 text-[#d4a340]" />
            </Link>

            <Link
              href="/alloys"
              className="px-5 py-4 rounded-xl bg-[#ede7de] hover:bg-[#e4ddd2] text-[#0b192c] font-mono-tech text-xs font-semibold transition-all flex items-center gap-2 border border-[#dcd5c9] cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-[#d4a340]" />
              <span>Materials Matrix</span>
            </Link>
          </div>

          {/* Hero 3D Composite Visual Banner with React Bits TiltedCard */}
          <div className="pt-8 relative max-w-6xl 2xl:max-w-7xl mx-auto">
            <TiltedCard maxAngle={8} scale={1.01}>
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9] shadow-2xl group">
                <img
                  src="/images/wearguard-hero-new.png"
                  alt="WearGuard Industrial Wear Castings and Liners"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Speed / RPM Tag */}
                <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-3 p-2.5 rounded-xl bg-[#faf8f5]/95 border border-[#dcd5c9] shadow-lg backdrop-blur-md font-mono-tech text-xs">
                  <img src="/images/rpm-12.png" alt="High Duty Rotation" className="w-6 h-6 object-contain" />
                  <div className="text-left">
                    <div className="text-[#0b192c] font-bold">12–15 RPM Continuous Duty</div>
                    <div className="text-[10px] text-[#a67c1e] font-semibold">High-Temperature Thermal Balance</div>
                  </div>
                </div>

                {/* Floating Metallurgy Badge */}
                <div className="absolute bottom-4 right-4 sm:right-6 hidden sm:flex items-center gap-2 p-2.5 rounded-xl bg-[#faf8f5]/95 border border-[#dcd5c9] shadow-lg backdrop-blur-md font-mono-tech text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[#0b192c] font-bold">ASTM A532 Class III Grade A</span>
                </div>
              </div>
            </TiltedCard>
          </div>

          {/* Key Metric Strip with React Bits CountUp */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-6xl 2xl:max-w-7xl mx-auto text-left">
            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm space-y-1 hover:border-[#d4a340]/50 hover:shadow-md transition-all">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#a67c1e] font-mono-tech tracking-tight">
                +<CountUp to={60} from={20} duration={2} />%
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0b192c]">Wear Life Gain</div>
              <div className="text-[11px] text-[#4a433d] leading-tight">Vs standard OEM mild steel</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm space-y-1 hover:border-[#d4a340]/50 hover:shadow-md transition-all">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#a67c1e] font-mono-tech tracking-tight">
                <CountUp to={1} from={1} />–<CountUp to={10} from={2} /> Units
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0b192c]">Small-Batch MOQ</div>
              <div className="text-[11px] text-[#4a433d] leading-tight">No punitive pattern fees</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm space-y-1 hover:border-[#d4a340]/50 hover:shadow-md transition-all">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#a67c1e] font-mono-tech tracking-tight">
                <CountUp to={6} from={2} />–<CountUp to={8} from={3} /> Wks
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0b192c]">Rapid Cast Turnaround</div>
              <div className="text-[11px] text-[#4a433d] leading-tight">Vs 20-30 week OEM backlog</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm space-y-1 hover:border-[#d4a340]/50 hover:shadow-md transition-all">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#a67c1e] font-mono-tech tracking-tight">
                <CountUp to={100} from={0} duration={2.5} />%
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0b192c]">Spectrometry Tested</div>
              <div className="text-[11px] text-[#4a433d] leading-tight">EN 10204 3.1 Certified</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 3D PRECISION CASTINGS GALLERY with React Bits SpotlightCard & DecryptedText */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#dcd5c9] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
              <DecryptedText text="CAD RENDERED CASTINGS & LINERS" speed={30} maxIterations={8} />
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
              Direct OEM Replacement Architecture
            </h2>
          </div>
          <Link
            href="/applications"
            className="text-xs font-mono-tech text-[#a67c1e] hover:text-[#8c6514] font-bold flex items-center gap-1"
          >
            <span>View All 30+ Equipment Parts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {precisionParts.map((part) => (
            <SpotlightCard
              key={part.id}
              spotlightColor="rgba(212, 163, 64, 0.09)"
              className="p-5 flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-lg transition-all border-[#dcd5c9] bg-[#faf8f5]"
            >
              <div className="space-y-3">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9]">
                  <img
                    src={part.image}
                    alt={part.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#faf8f5]/95 text-[10px] font-mono-tech font-bold text-[#a67c1e] border border-[#dcd5c9] shadow-sm backdrop-blur-sm">
                    {part.hardness}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-[#a67c1e] font-mono-tech">
                    {part.category}
                  </span>
                  <h3 className="text-base font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                    {part.title}
                  </h3>
                  <p className="text-xs text-[#4a433d] font-mono-tech">
                    {part.subtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={() => openQuoteModal(null, `Inquiry for ${part.title} (${part.category})`)}
                className="w-full py-2.5 rounded-xl bg-[#ede7de] hover:bg-[#d4a340] hover:text-white text-[#0b192c] font-mono-tech text-xs font-bold transition-all cursor-pointer border border-[#dcd5c9]"
              >
                Request Specs
              </button>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 3. SIGNATURE DUAL-PANEL SHOWCASE: Outlast the Mix & Control the Flow */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-12">
        
        {/* Panel A: Outlast the Mix with React Bits TiltedCard */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-lg">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a340]/10 border border-[#d4a340]/30 text-[#a67c1e] text-xs font-mono-tech">
              <Flame className="w-3.5 h-3.5 text-[#a67c1e]" />
              <span>Mixer & Pugmill Engineering</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-tight">
              Outlast The Mix: Shaft Protection & Reversible Blades
            </h2>

            <p className="text-sm sm:text-base text-[#4a433d] leading-relaxed">
              Mixer shafts and arms face violent shearing forces and abrasive slurry. WearGuard’s smart wrap-around protective arm shields prevent arm necking and shaft scoring, extending core mixer component life by up to 300%.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#0b192c]">
              {[
                'High-Chrome 27% Cr castings (60–65 HRC) outlasting standard steel by 3x',
                'Wrap-around protective shields safeguard soft central drive shafts',
                'Reversible symmetrical tip geometry cuts replacement costs in half',
                'Exact fit for Ammann, Benninghoven, BHS Sonthofen, Sicoma, Simem'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/applications?category=mixer-components"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors flex items-center gap-2 shadow-md shadow-[#d4a340]/20"
              >
                <span>View Mixer Components</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => openQuoteModal(null, 'Inquiry: Outlast the Mix Arm Protection')}
                className="px-6 py-3.5 rounded-xl bg-[#ede7de] hover:bg-[#e4ddd2] text-[#0b192c] font-mono-tech text-xs font-bold transition-colors cursor-pointer border border-[#dcd5c9]"
              >
                Request Mixer Drawing
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <TiltedCard maxAngle={6} scale={1.01}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9] shadow-xl">
                <img
                  src="/images/outlast-the-mix-image-.webp"
                  alt="WearGuard Outlast The Mix Mixer Components"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#faf8f5]/95 border border-[#dcd5c9] text-xs font-mono-tech font-bold text-[#a67c1e] shadow-md backdrop-blur-sm">
                  ✓ Fully Covered Shaft Design with 27% High-Chrome Castings
                </div>
              </div>
            </TiltedCard>
          </div>
        </div>

        {/* Panel B: Control the Flow with React Bits TiltedCard */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-lg">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <TiltedCard maxAngle={6} scale={1.01}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9] shadow-xl">
                <img
                  src="/images/liners-in-control-the-flow.webp"
                  alt="WearGuard Control the Flow Liners"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#faf8f5]/95 border border-[#dcd5c9] text-xs font-mono-tech font-bold text-[#0b192c] shadow-md backdrop-blur-sm">
                  ✓ High-Chrome Interlocking Tiles & Chromium Carbide Overlay
                </div>
              </div>
            </TiltedCard>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] text-xs font-mono-tech">
              <Layers className="w-3.5 h-3.5 text-[#a67c1e]" />
              <span>Chute & Impact Liners</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-tight">
              Control The Flow: Stop Gouging at Impact Transfer Chutes
            </h2>

            <p className="text-sm sm:text-base text-[#4a433d] leading-relaxed">
              Every turn of the aggregate feed destroys unhardened steel. WearGuard engineers precision modular wear tiles with countersunk blind fixings that eliminate through-bolt wear failures and chute blowouts.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#0b192c]">
              {[
                'Interlocking high-chrome tiles with countersunk fastener channels',
                'Hardfaced Chromium Carbide Overlay (CCO) plates up to 65 HRC',
                'Bimetallic chocky blocks and wear buttons for curved transfer corners',
                'Pre-drilled and plasma-cut to direct plant schematics'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/applications?category=wear-plates-liners"
                className="px-6 py-3.5 rounded-xl bg-[#0b192c] hover:bg-[#162a45] text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors flex items-center gap-2 shadow-md shadow-[#0b192c]/20"
              >
                <span>View Liner Specs</span>
                <ArrowRight className="w-4 h-4 text-[#d4a340]" />
              </Link>
              <button
                onClick={() => openQuoteModal(null, 'Inquiry: Control the Flow Chute Liners')}
                className="px-6 py-3.5 rounded-xl bg-[#ede7de] hover:bg-[#e4ddd2] text-[#0b192c] font-mono-tech text-xs font-bold transition-colors cursor-pointer border border-[#dcd5c9]"
              >
                Upload Chute Drawing
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* 4. METALLURGICAL ALLOY MATRIX PIN VIEWER */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#dcd5c9] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
              <DecryptedText text="MICROSTRUCTURE & METALLURGY" speed={30} maxIterations={8} />
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
              Flagship 28% High-Chrome Iron Chemistry
            </h2>
          </div>
          <Link
            href="/alloys"
            className="text-xs font-mono-tech text-[#a67c1e] hover:text-[#8c6514] font-bold flex items-center gap-1"
          >
            <span>Compare All 11 Alloy Grades</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Hotspot Interactive Component */}
        <AnnotatedPhoto
          imageSrc="/images/wear-liners-3d.png"
          altText="WearGuard 28% High Chrome Microstructure and Casting Specs"
          callouts={alloyCallouts}
          title="VF-240 Martensitic High-Chrome Micro-Inspection"
          badge="Micro-Inspection Suite"
        />

      </section>

      {/* 5. SECTOR-SPECIFIC APPLICATIONS GRID with React Bits SpotlightCard */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
        <div className="border-b border-[#dcd5c9] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
            Industry Wear Regimes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
            Engineered Specifically for Extreme Industrial Sectors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <SpotlightCard
              key={ind.id}
              spotlightColor="rgba(212, 163, 64, 0.09)"
              className="p-6 flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all border-[#dcd5c9] bg-[#faf8f5] shadow-sm hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9]">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] px-2.5 py-1 rounded bg-[#faf8f5] font-mono-tech font-bold text-[#a67c1e] border border-[#dcd5c9] shadow-sm">
                    {ind.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#4a433d] line-clamp-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#dcd5c9] flex items-center justify-between">
                <span className="text-xs text-[#4a433d] font-mono-tech font-medium">
                  {ind.keyComponents.length} Key Systems
                </span>
                <Link
                  href={`/industries/${ind.id}`}
                  className="text-xs font-bold text-[#a67c1e] hover:text-[#8c6514] flex items-center gap-1 font-mono-tech group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 6. EQUIPMENT COMPONENT SELECTOR TABS */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#dcd5c9] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
              Plant Equipment Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
              Component Systems by Machinery Category
            </h2>
          </div>
          <Link
            href="/applications"
            className="text-xs font-mono-tech text-[#a67c1e] hover:text-[#8c6514] font-bold flex items-center gap-1"
          >
            <span>Full Catalog View</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {APPLICATION_CATEGORIES_DATA.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveAppIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-mono-tech whitespace-nowrap transition-all cursor-pointer ${
                activeAppIndex === idx
                  ? 'bg-[#d4a340] text-white shadow-md shadow-[#d4a340]/20'
                  : 'bg-[#faf8f5] text-[#0b192c] border border-[#dcd5c9] hover:bg-[#ede7de]'
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>

        {/* Active Category Display Showcase */}
        {(() => {
          const currentCat = APPLICATION_CATEGORIES_DATA[activeAppIndex];
          const matchedProducts = PRODUCTS_CATALOG.filter(p => p.category === currentCat.id).slice(0, 3);

          return (
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-lg space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#dcd5c9] pb-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#a67c1e] font-bold">
                    <span>{currentCat.badge}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0b192c]">
                    {currentCat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a433d] max-w-3xl">
                    {currentCat.description}
                  </p>
                </div>

                <Link
                  href={`/applications?category=${currentCat.id}`}
                  className="px-5 py-2.5 rounded-xl bg-[#ede7de] hover:bg-[#e4ddd2] text-[#0b192c] font-bold text-xs font-mono-tech self-start sm:self-auto transition-colors border border-[#dcd5c9]"
                >
                  View All in {currentCat.shortName}
                </Link>
              </div>

              {/* Product Cards for this Category with SpotlightCard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {matchedProducts.map(prod => (
                  <SpotlightCard
                    key={prod.id}
                    spotlightColor="rgba(212, 163, 64, 0.09)"
                    className="p-5 flex flex-col justify-between space-y-4 group bg-[#ede7de]/60 border-[#dcd5c9]"
                  >
                    <div className="space-y-3">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9]">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {prod.recommendedAlloys[0] && (
                          <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-[#faf8f5]/95 text-[10px] font-mono-tech font-bold text-[#a67c1e] border border-[#dcd5c9] shadow-sm backdrop-blur-sm">
                            {prod.recommendedAlloys[0]}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                          {prod.name}
                        </h4>
                        <p className="text-xs text-[#4a433d] line-clamp-2">
                          {prod.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/products/${prod.id}`}
                      className="w-full py-2 rounded-xl bg-[#faf8f5] hover:bg-[#d4a340] hover:text-white text-[#0b192c] font-mono-tech text-xs font-bold text-center block transition-colors border border-[#dcd5c9] shadow-sm"
                    >
                      Inspect Specifications
                    </Link>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* 7. 5-STEP 3D REVERSE ENGINEERING WORKFLOW */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#dcd5c9] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
              Precision Foundry & Reverse CAD
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
              Any Brand. Any Era. No Excuses.
            </h2>
          </div>
          <Link
            href="/custom-engineering"
            className="text-xs font-mono-tech text-[#a67c1e] hover:text-[#8c6514] font-bold flex items-center gap-1"
          >
            <span>Learn More About Custom Tooling</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {CUSTOM_ENGINEERING_STEPS.map((st, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm space-y-3 relative group hover:border-[#d4a340]/50 hover:shadow-md transition-all">
              <span className="text-3xl font-black text-[#a67c1e] font-mono-tech">
                {st.step}
              </span>
              <h3 className="text-sm font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                {st.title}
              </h3>
              <p className="text-xs text-[#4a433d] leading-relaxed">
                {st.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS & CASE STUDIES (Infinite Moving Ticker) */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
        <div className="border-b border-[#dcd5c9] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
            Plant Proven Performance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
            What Operations & Maintenance Managers Say
          </h2>
        </div>

        {/* Infinite Moving Testimonial Ticker */}
        <TestimonialTicker speed={42} pauseOnHover={true} />
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
            Technical Support & Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 max-w-5xl mx-auto">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#ede7de]"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0b192c]">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#d4a340] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#4a433d] leading-relaxed border-t border-[#dcd5c9] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. FINAL BOTTOM CTA BANNER: Deep Midnight & Titanium Gold */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-r from-[#0b192c] via-[#152a47] to-[#1e3a5f] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-700/50">
          
          {/* Subtle Industrial Texture */}
          <div className="absolute inset-0 bg-grid-tech opacity-15 pointer-events-none" />

          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-mono-tech border border-white/20">
              <Clock className="w-3.5 h-3.5 text-[#d4a340]" />
              <span>24-Hour Drawing Turnaround</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Ready to Eliminate Plant Bottlenecks & Chronic Wear?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Upload your 2D drawings or 3D STEP files today. Our metallurgists will formulate an alloy recommendation and deliver a costed proposal within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[#f5dc96]/40"
            >
              Upload CAD / Drawing
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors text-center border border-white/20"
            >
              Speak to Metallurgist
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
