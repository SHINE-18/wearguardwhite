'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Clock, 
  Layers, 
  Cpu, 
  Globe2, 
  Check, 
  ArrowRight,
  Phone,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/companyData';
import { useModals } from '@/components/providers/ModalProvider';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { TiltedCard } from '@/components/reactbits/TiltedCard';

export default function AboutUsPage() {
  const { openQuoteModal } = useModals();

  return (
    <div className="w-full space-y-20 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a340]/10 border border-[#d4a340]/30 text-xs font-mono-tech">
          <Building2 className="w-3.5 h-3.5 text-[#a67c1e]" />
          <ShinyText text="Foundry Capabilities & Engineering Network" speed={3.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b192c] tracking-tight">
          Where Advanced Metallurgy Meets Heavy Industrial Reality
        </h1>
        <p className="text-base sm:text-lg text-[#4a433d] leading-relaxed max-w-3xl">
          WearGuard™ operates as an independent heavy-industry wear engineering and alloy casting manufacturer. We bridge the gap between academic metallurgy and plant-level uptime.
        </p>
      </div>

      {/* Hero Visual & Mission */}
      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 gap-10 shadow-xl items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] leading-tight">
            Challenging the OEM Monopoly with Superior Alloys & Small-Batch Flexibility
          </h2>

          <p className="text-sm sm:text-base text-[#4a433d] leading-relaxed">
            For decades, plant operators were forced into a painful choice: pay exorbitant monopoly markups for generic OEM steel parts with 20+ week lead times, or risk low-quality local fabrications that crack under impact.
          </p>

          <p className="text-sm sm:text-base text-[#4a433d] leading-relaxed">
            WearGuard was founded to change this. We deliver precision CNC-machined, through-hardened alloy castings formulated specifically for your aggregate and thermal conditions—delivered in 6–8 weeks with as few as 1 to 10 units per run.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 font-mono-tech text-xs">
            <div className="p-4 rounded-xl bg-[#ede7de] border border-[#dcd5c9] space-y-1">
              <div className="text-2xl font-black text-[#a67c1e]">100%</div>
              <div className="text-[#0b192c] font-semibold">OEM Fitment Guarantee</div>
            </div>
            <div className="p-4 rounded-xl bg-[#ede7de] border border-[#dcd5c9] space-y-1">
              <div className="text-2xl font-black text-[#4a433d]">1 Unit</div>
              <div className="text-[#0b192c] font-semibold">Small-Batch Minimum</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <TiltedCard maxAngle={6} scale={1.01}>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9] shadow-xl">
              <img
                src="/images/custom-casting-engineering.jpg"
                alt="WearGuard Foundry Casting Facilities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </TiltedCard>
        </div>

      </div>

      {/* Manufacturing & Foundry Capabilities */}
      <div className="space-y-8">
        <div className="border-b border-[#dcd5c9] pb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
            Foundry & Laboratory Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-md space-y-4">
            <div className="p-3 rounded-xl bg-[#d4a340]/12 text-[#a67c1e] w-fit border border-[#d4a340]/30">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b192c]">Induction Melting & Pouring</h3>
            <p className="text-xs text-[#4a433d] leading-relaxed">
              Medium-frequency induction furnaces capable of casting single components from 5 kg up to 4,500 kg in High-Chrome white irons, Ni-Hard 4, and Martensitic tool steels.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-md space-y-4">
            <div className="p-3 rounded-xl bg-[#ede7de] text-[#0b192c] w-fit border border-[#dcd5c9]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b192c]">Controlled Heat Treatment</h3>
            <p className="text-xs text-[#4a433d] leading-relaxed">
              Computer-controlled multi-stage austenitizing and sub-critical tempering furnaces to achieve uniform through-hardness up to 66 HRC without brittle micro-cracking.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-md space-y-4">
            <div className="p-3 rounded-xl bg-emerald-50/80 text-emerald-800 w-fit border border-emerald-200">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b192c]">Spectrometry & QC Lab</h3>
            <p className="text-xs text-[#4a433d] leading-relaxed">
              Direct-reading optical emission spectrometers, portable ultrasonic flaw detectors, and digital Charpy V-notch impact testers ensuring ASTM A532 compliance.
            </p>
          </div>
        </div>
      </div>

      {/* WearGuard Global Supply Chain Network */}
      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
            <Globe2 className="w-4 h-4" />
            <span>Global Distribution & Spares Network</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0b192c]">
            Direct Heavy Logistics & Emergency Dispatch
          </h3>
          <p className="text-xs sm:text-sm text-[#4a433d] leading-relaxed">
            With direct foundry dispatch hubs and distribution channels across Australia, New Zealand, Southeast Asia, and international shipping corridors, WearGuard guarantees rapid site delivery.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => openQuoteModal(null, 'Inquiry from About Us')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech shadow-md shadow-[#d4a340]/20 transition-all cursor-pointer"
          >
            Contact Foundry Team
          </button>
          <Link
            href="/alloys"
            className="px-5 py-3.5 rounded-xl bg-[#ede7de] hover:bg-[#e4ddd2] text-[#0b192c] font-mono-tech text-xs font-bold transition-colors border border-[#dcd5c9]"
          >
            Inspect Alloys
          </Link>
        </div>
      </div>

    </div>
  );
}
