'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  User, 
  FileText, 
  Globe2,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/companyData';
import { ShinyText } from '@/components/reactbits/ShinyText';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: 'RFQ & Drawing Review',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full space-y-16 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a340]/10 border border-[#d4a340]/30 text-xs font-mono-tech">
          <Phone className="w-3.5 h-3.5 text-[#a67c1e]" />
          <ShinyText text="Direct Foundry & Engineering Contact" speed={3.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b192c] tracking-tight">
          Connect with Our Heavy Industrial Wear Specialists
        </h1>
        <p className="text-base sm:text-lg text-[#4a433d] leading-relaxed max-w-3xl">
          Need an urgent spare part quote, 3D laser scan booking, or metallurgy consultation? Our mechanical engineers respond within 24 business hours.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Contact Details & Global Logistics (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Card */}
          <div className="p-8 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-[#0b192c]">
              Direct Engineering Dispatch
            </h3>

            <div className="space-y-4 text-xs sm:text-sm font-mono-tech">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#d4a340]/12 text-[#a67c1e] border border-[#d4a340]/30 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#4a433d] uppercase font-semibold">Emergency Spares Hotline</div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#0b192c] hover:text-[#a67c1e] font-bold transition-colors text-sm">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#d4a340]/12 text-[#a67c1e] border border-[#d4a340]/30 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#4a433d] uppercase font-semibold">Engineering & RFQ Email</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0b192c] hover:text-[#a67c1e] font-bold transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#d4a340]/12 text-[#a67c1e] border border-[#d4a340]/30 mt-0.5">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#4a433d] uppercase font-semibold">Global Engineering Portal</div>
                  <div className="text-[#a67c1e] font-bold">
                    {COMPANY_INFO.website}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#d4a340]/12 text-[#a67c1e] border border-[#d4a340]/30 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#4a433d] uppercase font-semibold">Foundry & Logistics Hubs</div>
                  <div className="text-[#0b192c]">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Turnaround Guarantee Badge */}
          <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono-tech">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>24-Hour Drawing Response</span>
            </div>
            <p className="text-xs text-[#4a433d] leading-relaxed font-mono-tech">
              All CAD drawings and RFQ inquiries receive a dedicated engineer review within 24 hours.
            </p>
          </div>

        </div>

        {/* Right Interactive Inquiries Form (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-xl">
          
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b192c]">Inquiry Dispatched!</h3>
              <p className="text-xs sm:text-sm text-[#4a433d] max-w-md mx-auto">
                Thank you for contacting WearGuard. Our lead metallurgy engineer will review your inquiry and follow up within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white text-xs font-mono-tech cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1 border-b border-[#dcd5c9] pb-4">
                <h3 className="text-xl font-bold text-[#0b192c]">
                  Engineering Inquiry & RFQ Form
                </h3>
                <p className="text-xs text-[#4a433d] font-mono-tech">
                  Direct connection to our mechanical and casting metallurgy desk
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Company / Site Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Concrete & Quarry"
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
                    placeholder="name@company.com"
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
                  Subject / Inquiry Type
                </label>
                <select
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                >
                  <option value="RFQ & Drawing Review">Request for Quotation / 2D-3D Drawing Review</option>
                  <option value="Custom Reverse Engineering">Custom Part Reverse Engineering</option>
                  <option value="Metallurgy Consultation">Alloy Selection / Metallurgy Consultation</option>
                  <option value="Emergency Spares Dispatch">Emergency Spares Dispatch Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                  Message / Operating Conditions
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your machinery type, current wear life, aggregate details, or specific part requirements..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#dcd5c9] text-[#0b192c] placeholder-slate-400 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] resize-none font-mono-tech"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech shadow-md shadow-[#d4a340]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Engineering Desk</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
