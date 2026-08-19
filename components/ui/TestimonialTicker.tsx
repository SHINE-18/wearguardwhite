'use client';

import React from 'react';
import { TESTIMONIALS } from '@/lib/companyData';
import { Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialTickerProps {
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export const TestimonialTicker: React.FC<TestimonialTickerProps> = ({
  speed = 40,
  pauseOnHover = true,
  className = ''
}) => {
  // Duplicate array 3 times to ensure infinite smooth seamless looping across ultra-wide monitors
  const duplicatedTestimonials = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS
  ];

  return (
    <div className={`relative w-full overflow-hidden py-4 ${className}`}>
      
      {/* Left Edge Gradient Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-r from-[#f4f0ea] via-[#f4f0ea]/80 to-transparent z-10" />

      {/* Right Edge Gradient Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-l from-[#f4f0ea] via-[#f4f0ea]/80 to-transparent z-10" />

      {/* Ticker Track with Pause-on-Hover */}
      <div 
        className={`flex items-stretch gap-6 w-max animate-ticker ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedTestimonials.map((t, index) => (
          <div
            key={`${t.author}-${index}`}
            className="w-[320px] sm:w-[420px] lg:w-[460px] shrink-0 p-7 sm:p-8 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm hover:shadow-xl hover:border-[#d4a340] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group select-none cursor-pointer"
          >
            {/* Top Stars & Verified Tag */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#d4a340]">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} className="text-sm">{s}</span>
                  ))}
                </div>

                {t.verified && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono-tech font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{t.verified}</span>
                  </span>
                )}
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-[#0b192c] italic leading-relaxed font-sans">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author / Company Info */}
            <div className="pt-4 border-t border-[#dcd5c9] flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                  {t.author}
                </div>
                <div className="text-[11px] text-[#a67c1e] font-mono-tech font-bold">
                  {t.role}
                </div>
                <div className="text-[11px] text-[#4a433d] font-mono-tech">
                  {t.company} • {t.location}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#ede7de] text-[#a67c1e] border border-[#dcd5c9] group-hover:bg-[#d4a340] group-hover:text-white transition-colors">
                <Quote className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
