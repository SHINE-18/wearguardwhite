'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  X, 
  UploadCloud, 
  CheckCircle2, 
  FileText, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Clock, 
  Building2, 
  Mail, 
  Phone, 
  User,
  Cpu
} from 'lucide-react';
import { ProductItem } from '@/lib/types';
import { ALLOY_GRADES_DATA, PRODUCTS_CATALOG, COMPANY_INFO } from '@/lib/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: ProductItem | null;
  initialNote?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialNote = ''
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    productName: '',
    industry: 'asphalt',
    preferredAlloy: 'enduracast-zcore',
    equipmentBrand: '',
    quantity: '4',
    currentLifeMonths: '6',
    operatingTemp: 'Normal (<150°C)',
    abrasionLevel: 'Severe Abrasive Slurry/RAP',
    notes: initialNote,
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    hasCadDrawing: false,
    drawingFileName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteId, setQuoteId] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        productName: initialProduct.name,
        preferredAlloy: initialProduct.recommendedAlloys[0] || 'enduracast-zcore',
        equipmentBrand: initialProduct.compatibleBrands[0] || ''
      }));
    }
    if (initialNote) {
      setFormData(prev => ({ ...prev, notes: initialNote }));
    }
  }, [initialProduct, initialNote, isOpen]);

  // P0 #2: Keyboard focus trap — trap Tab cycling within modal
  // P0 #4: Escape key closes modal, restore focus on close
  useEffect(() => {
    if (!isOpen) return;

    // Store the element that had focus before opening
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on Escape
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Trap Tab within modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Auto-focus the first focusable element inside the modal
    requestAnimationFrame(() => {
      const firstInput = modalRef.current?.querySelector<HTMLElement>('input, select, textarea, button');
      firstInput?.focus();
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      // Restore focus to the element that triggered the modal
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setQuoteId(`WG-RFQ-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep(4);
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        hasCadDrawing: true,
        drawingFileName: file.name
      }));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 overflow-y-auto bg-[#0b192c]/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      aria-describedby="quote-modal-description"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={modalRef}
        className="relative w-full h-full sm:h-auto sm:max-w-2xl bg-[#faf8f5] border-0 sm:border border-[#dcd5c9] sm:rounded-3xl rounded-none shadow-2xl overflow-hidden text-[#0b192c] sm:my-8"
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#dcd5c9] bg-[#ede7de] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#d4a340]/10 text-[#a67c1e] border border-[#d4a340]/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="quote-modal-title" className="font-bold text-base sm:text-lg text-[#0b192c]">
                Request Engineering Quote & Drawing Review
              </h3>
              <p id="quote-modal-description" className="text-xs text-[#4a433d] font-mono-tech">
                Upload your 2D/3D drawings or describe your wear problem. Our metallurgists will provide a feasibility review and costed alloy recommendation within 24 business hours.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close quote modal"
            className="p-1.5 rounded-lg text-slate-500 hover:text-[#0b192c] hover:bg-[#dcd5c9] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Step Bar */}
        {step < 4 && (
          <div className="px-6 py-2.5 bg-[#ede7de]/60 border-b border-[#dcd5c9] flex items-center justify-between text-xs text-[#4a433d] font-mono-tech">
            <span className={step >= 1 ? 'text-[#a67c1e] font-bold' : ''}>1. Part & Specs</span>
            <span className="text-[#dcd5c9]">→</span>
            <span className={step >= 2 ? 'text-[#a67c1e] font-bold' : ''}>2. Site Conditions</span>
            <span className="text-[#dcd5c9]">→</span>
            <span className={step >= 3 ? 'text-[#a67c1e] font-bold' : ''}>3. Drawing & Contact</span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                  Target Component / Wear Part Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Twin-Shaft Mixer Paddle Arm, Drum Flight, Chute Tile"
                  value={formData.productName}
                  onChange={e => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] placeholder-[#4a433d]/60 text-sm focus:outline-none focus:border-[#d4a340] focus:ring-1 focus:ring-[#d4a340] font-mono-tech"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Target Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={e => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  >
                    <option value="asphalt">Asphalt & Bitumen Plants</option>
                    <option value="concrete">Concrete & Ready-Mix</option>
                    <option value="mining">Mining & Quarry Aggregates</option>
                    <option value="process">Cement, Steel & Process</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Equipment Brand (OEM)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ammann, Astec, BHS, Benninghoven, CAT"
                    value={formData.equipmentBrand}
                    onChange={e => setFormData({ ...formData, equipmentBrand: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] placeholder-[#4a433d]/60 text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Preferred Alloy / Metallurgy
                  </label>
                  <select
                    value={formData.preferredAlloy}
                    onChange={e => setFormData({ ...formData, preferredAlloy: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  >
                    {ALLOY_GRADES_DATA.map(alloy => (
                      <option key={alloy.id} value={alloy.id}>
                        {alloy.name} ({alloy.hardness})
                      </option>
                    ))}
                    <option value="not-sure">Unsure - Recommend Optimal Alloy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Required Quantity (MOQ 1–10)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-[#d4a340]/20"
                >
                  <span>Continue to Site Conditions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Current Part Lifespan (Months)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 6"
                    value={formData.currentLifeMonths}
                    onChange={e => setFormData({ ...formData, currentLifeMonths: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Operating Temperature
                  </label>
                  <select
                    value={formData.operatingTemp}
                    onChange={e => setFormData({ ...formData, operatingTemp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  >
                    <option>Normal Ambient (&lt;100°C)</option>
                    <option>Hot Mix / Bitumen (100°C–250°C)</option>
                    <option>Severe Dryer Thermal Zone (250°C–450°C)</option>
                    <option>Extreme Pyrometallurgical (&gt;450°C)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                  Primary Wear Mechanism
                </label>
                <select
                  value={formData.abrasionLevel}
                  onChange={e => setFormData({ ...formData, abrasionLevel: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                >
                  <option>Severe Sliding Gouging / RAP High Abrasion</option>
                  <option>Heavy Direct Impact / Rock Crushing</option>
                  <option>Fine Silica Sand / Slurry Scouring</option>
                  <option>Thermal Shock / High Heat Cracking</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                  Additional Notes / Failure Mode Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe where the part usually wears down first or any fitment challenges..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] placeholder-[#4a433d]/60 text-sm focus:outline-none focus:border-[#d4a340] resize-none font-mono-tech"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-mono-tech text-[#4a433d] hover:text-[#0b192c] cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-[#d4a340]/20"
                >
                  <span>Continue to Drawings & Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              
              {/* File Upload Trigger */}
              <div className="p-4 rounded-xl bg-[#ede7de] border-2 border-dashed border-[#dcd5c9] hover:border-[#d4a340] transition-colors text-center">
                <input
                  type="file"
                  id="modal-cad-upload"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".dwg,.dxf,.step,.stp,.iges,.pdf,.png,.jpg"
                />
                <label htmlFor="modal-cad-upload" className="cursor-pointer flex flex-col items-center gap-1.5">
                  <UploadCloud className="w-6 h-6 text-[#d4a340]" />
                  <span className="text-xs font-semibold text-[#0b192c]">
                    {formData.drawingFileName || 'Attach 2D/3D CAD Drawing, Sketch, or Sample Photos'}
                  </span>
                  <span className="text-[10px] text-[#4a433d] font-mono-tech">
                    Supports STEP, DWG, DXF, IGES, PDF, PNG, JPG (Up to 50MB)
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] placeholder-[#4a433d]/60 text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Company / Plant Site *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pioneer Asphalt Plant #2"
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] placeholder-[#4a433d]/60 text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] placeholder-[#4a433d]/60 text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b192c] mb-1.5 font-mono-tech">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+61 400 000 000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] placeholder-[#4a433d]/60 text-sm focus:outline-none focus:border-[#d4a340] font-mono-tech"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-mono-tech text-[#4a433d] hover:text-[#0b192c] cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-[#d4a340]/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting to Foundry...</span>
                  ) : (
                    <>
                      <span>Submit for 24h Review</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#0b192c]">Quote Request Submitted!</h4>
              <p className="text-xs sm:text-sm text-[#4a433d] max-w-md mx-auto leading-relaxed">
                Your RFQ (Tracking ID: <strong className="text-[#a67c1e] font-mono-tech font-bold">{quoteId}</strong>) has been routed directly to our wear parts engineering team. You will receive a technical review and costed proposal within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#0b192c] hover:bg-[#162a45] text-white font-mono-tech text-xs font-bold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Footer Note */}
        {step < 4 && (
          <div className="px-6 py-3 bg-[#ede7de] border-t border-[#dcd5c9] flex items-center justify-between text-[11px] text-[#4a433d] font-mono-tech">
            <span>Direct Hotline: {COMPANY_INFO.phoneFormatted}</span>
            <span>Direct Foundry & Metallurgy Support</span>
          </div>
        )}
      </div>
    </div>
  );
};
