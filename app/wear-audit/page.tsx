'use client';

import React from 'react';
import { 
  Calculator, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  Layers, 
  Check, 
  ArrowRight,
  Phone,
  FileText
} from 'lucide-react';
import { InteractiveRoiCalculator } from '@/components/ui/InteractiveRoiCalculator';
import { COMPANY_INFO } from '@/lib/companyData';
import { useModals } from '@/components/providers/ModalProvider';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { TiltedCard } from '@/components/reactbits/TiltedCard';

export default function WearAuditPage() {
  const { openQuoteModal } = useModals();

  return (
    <div className="w-full space-y-16 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-slate-900 bg-[#f8fafc]">
      
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono-tech">
          <Calculator className="w-3.5 h-3.5 text-blue-700" />
          <ShinyText text="Plant Economics & TCO Simulator" speed={3.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight">
          Quantify the Total Cost of Premature Wear
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          The true cost of standard OEM wear parts isn&apos;t the purchase invoice—it&apos;s the lost plant production hours, emergency crew overtime, and repeated scheduled overhauls. Use our interactive model to calculate your facility&apos;s annual savings.
        </p>
      </div>

      {/* Main Interactive Calculator */}
      <InteractiveRoiCalculator />

      {/* On-Site Engineering Wear Audit Services */}
      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono-tech">
              On-Site Engineering Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950">
              Book a Comprehensive Plant Wear Audit
            </h2>
            <p className="text-xs text-slate-500 font-mono-tech font-semibold">
              Conducted by WearGuard Metallurgical & Mechanical Specialists
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our wear specialists visit your plant during scheduled downtime or analyze physical failure samples. We map material flow patterns, aggregate velocity zones, and thermal gradients to deliver a guaranteed metallurgy upgrade blueprint.
          </p>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {[
              'Ultrasonic thickness gauging of chutes, drums, and mixer troughs',
              'Spectrometric scrapings & aggregate abrasiveness testing',
              'Root-cause failure analysis of cracking, gouging, and spalling',
              'Custom CAD retrofit proposals with projected payback within 60 days'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openQuoteModal(null, 'Booking On-Site Plant Wear Audit')}
              className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors flex items-center gap-2 shadow-md shadow-blue-700/20 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Schedule Plant Audit</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono-tech text-xs font-bold transition-colors flex items-center gap-2 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Direct Engineering Line: {COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Visual Callout with TiltedCard */}
        <div className="lg:col-span-5">
          <TiltedCard maxAngle={6} scale={1.01}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-xl">
              <img
                src="/images/custom-engineering-hero.jpg"
                alt="Plant Engineering Wear Audit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-slate-200 shadow-md backdrop-blur-sm space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Zero-Risk Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-600 font-mono-tech">
                  If our recommended metallurgy doesn&apos;t outperform your OEM baseline, we credit the difference.
                </p>
              </div>
            </div>
          </TiltedCard>
        </div>

      </div>

    </div>
  );
}
