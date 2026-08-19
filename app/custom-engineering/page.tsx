'use client';

import React, { useState } from 'react';
import { 
  ScanLine, 
  UploadCloud, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  User, 
  Mail, 
  Phone 
} from 'lucide-react';
import { CUSTOM_ENGINEERING_STEPS, COMPANY_INFO } from '@/lib/companyData';
import { useModals } from '@/components/providers/ModalProvider';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { TiltedCard } from '@/components/reactbits/TiltedCard';

export default function CustomEngineeringPage() {
  const { openQuoteModal } = useModals();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    partType: '',
    equipmentBrand: '',
    quantity: '4',
    currentLifeMonths: '',
    notes: '',
    drawingFileName: ''
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, drawingFileName: file.name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(`REV-CAD-${Math.floor(100000 + Math.random() * 900000)}`);
    setFormSubmitted(true);
  };

  return (
    <div className="w-full space-y-20 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* Hero Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a340]/10 border border-[#d4a340]/30 text-xs font-mono-tech">
          <ScanLine className="w-3.5 h-3.5 text-[#a67c1e]" />
          <ShinyText text="3D Reverse Engineering & Custom Foundry Castings" speed={3.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b192c] tracking-tight">
          Custom Wear Parts for Any Brand. Any Era. No Excuses.
        </h1>
        <p className="text-base sm:text-lg text-[#4a433d] leading-relaxed max-w-3xl">
          Stuck with obsolete plant equipment, 26-week OEM lead times, or monopoly pricing? Send us a worn sample, dimensional sketch, or CAD model. We 3D-scan, upgrade the metallurgy, and manufacture as few as 1 to 10 units in 6–8 weeks.
        </p>
      </div>

      {/* Hero Visual Showcase with TiltedCard */}
      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
            Precision Reverse CAD Scanning
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c]">
            Transforming Worn Physical Samples into Upgraded Castings
          </h2>
          <p className="text-sm sm:text-base text-[#4a433d] leading-relaxed">
            Our portable laser scanners capture intricate wear profiles, flange curvatures, and bolt circles down to ±0.05 mm precision. We reconstruct original design intent while thickening critical wear zones.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
            <span className="px-3 py-1.5 rounded-lg bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] font-semibold">✓ 3D Laser Scanning</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] font-semibold">✓ SolidWorks / STEP Models</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] font-semibold">✓ Pattern Tooling</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <TiltedCard maxAngle={6} scale={1.01}>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9] shadow-xl">
              <img
                src="/images/product-lines-custom-wear.webp"
                alt="WearGuard Custom Wear Product Lines"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* 3 Core Foundry Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4a340]/12 text-[#a67c1e] flex items-center justify-center font-mono-tech font-bold text-sm border border-[#d4a340]/30">
            24h
          </div>
          <h3 className="text-lg font-bold text-[#0b192c]">24-Hour Drawing Turnaround</h3>
          <p className="text-xs sm:text-sm text-[#4a433d] leading-relaxed">
            Our design engineers produce dimensioned 2D/3D approval drawings with tolerance verifications within 24 business hours of receiving your part data.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#ede7de] text-[#0b192c] flex items-center justify-center font-mono-tech font-bold text-sm border border-[#dcd5c9]">
            1-10
          </div>
          <h3 className="text-lg font-bold text-[#0b192c]">Small-Batch MOQ (1–10 Units)</h3>
          <p className="text-xs sm:text-sm text-[#4a433d] leading-relaxed">
            Order single replacement units or prototype trial sets without punitive pattern fees or massive minimum order quantities.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4a340]/15 text-[#a67c1e] flex items-center justify-center font-mono-tech font-bold text-sm border border-[#d4a340]/40">
            +50%
          </div>
          <h3 className="text-lg font-bold text-[#0b192c]">Metallurgical Upgrade</h3>
          <p className="text-xs sm:text-sm text-[#4a433d] leading-relaxed">
            We don’t simply copy standard mild steels; we upgrade chemistry with 27% High-Chrome, Ni-Hard 4, or Tungsten-Carbide matrices that outlast original parts.
          </p>
        </div>
      </div>

      {/* 5-Step Workflow */}
      <div className="space-y-8">
        <div className="border-b border-[#dcd5c9] pb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b192c] tracking-tight">
            The Reverse Engineering & Casting Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {CUSTOM_ENGINEERING_STEPS.map((st, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm space-y-3">
              <span className="text-2xl font-black text-[#a67c1e] font-mono-tech">{st.step}</span>
              <h4 className="text-sm font-bold text-[#0b192c]">{st.title}</h4>
              <p className="text-xs text-[#4a433d] leading-relaxed">{st.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Drawing & Spec Submission Form */}
      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-xl relative overflow-hidden">
        
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b192c] tracking-tight">
              Submit Your Drawing or Part Dimensions for 24-Hour Review
            </h2>
            <p className="text-xs sm:text-sm text-[#4a433d]">
              Upload a 2D PDF drawing, 3D CAD model (STEP, IGES, DXF), or hand-sketched dimensions.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b192c]">Engineering Request Received!</h3>
              <p className="text-sm text-[#4a433d] max-w-md mx-auto">
                Your custom part submission (Ticket #{ticketId}) has been assigned to our metallurgical design team. A feasibility report and quote will arrive within 24 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white text-xs font-mono-tech cursor-pointer"
              >
                Submit Another Part
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* File Upload Box */}
              <div className="p-6 rounded-2xl bg-[#ede7de] border-2 border-dashed border-[#dcd5c9] hover:border-[#d4a340] transition-colors text-center">
                <input
                  type="file"
                  id="page-cad-upload"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".dwg,.dxf,.step,.stp,.iges,.pdf,.png,.jpg"
                />
                <label htmlFor="page-cad-upload" className="cursor-pointer flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-[#faf8f5] text-[#d4a340] shadow-sm border border-[#dcd5c9]">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-[#0b192c]">
                    {formData.drawingFileName || 'Click to Upload 2D/3D CAD Drawing or Hand Sketch'}
                  </span>
                  <span className="text-xs text-[#4a433d] font-mono-tech">
                    Supports STEP, DWG, DXF, IGES, PDF, PNG, JPG (Max 50MB)
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Component / Part Type *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mixer Arm, Drum Flight, Chute Liner"
                    value={formData.partType}
                    onChange={e => setFormData({ ...formData, partType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Original Machine Brand / Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ammann, Astec, BHS, Sicoma, CAT"
                    value={formData.equipmentBrand}
                    onChange={e => setFormData({ ...formData, equipmentBrand: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Company / Plant Site *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pioneer Asphalt Plant #2"
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+61 400 000 000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                  Specific Failure Mode / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe operating temperatures, aggregate types, and how the current part fails..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] resize-none font-mono-tech"
                />
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech shadow-lg shadow-[#d4a340]/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <FileText className="w-4 h-4" />
                  <span>Submit for 24h Engineering Review</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
