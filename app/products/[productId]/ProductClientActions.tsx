'use client';

import React from 'react';
import { useModals } from '@/components/providers/ModalProvider';
import { FileText, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/companyData';

export default function ProductClientActions({ productName }: { productName: string }) {
  const { openQuoteModal } = useModals();

  return (
    <div className="pt-4 border-t border-[#dcd5c9] flex flex-wrap items-center gap-3">
      <button
        onClick={() => openQuoteModal(null, `Inquiry for ${productName}`)}
        className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-all flex items-center gap-2 shadow-md shadow-[#d4a340]/20 cursor-pointer"
      >
        <FileText className="w-4 h-4" />
        <span>Request 24h Price Quote</span>
      </button>

      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="px-5 py-3.5 rounded-xl bg-[#ede7de] hover:bg-[#e4ddd2] text-[#0b192c] font-mono-tech text-xs font-bold transition-colors flex items-center gap-2 border border-[#dcd5c9]"
      >
        <Phone className="w-3.5 h-3.5 text-[#d4a340]" />
        <span>Speak to Metallurgist</span>
      </a>
    </div>
  );
}
