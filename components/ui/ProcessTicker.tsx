'use client';

import React from 'react';
import { CUSTOM_ENGINEERING_STEPS } from '@/lib/companyData';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface ProcessTickerProps {
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export const ProcessTicker: React.FC<ProcessTickerProps> = ({
  speed = 35,
  pauseOnHover = true,
  className = ''
}) => {
  // Duplicate array 3 times to ensure infinite smooth seamless looping across ultra-wide monitors
  const duplicatedSteps = [
    ...CUSTOM_ENGINEERING_STEPS,
    ...CUSTOM_ENGINEERING_STEPS,
    ...CUSTOM_ENGINEERING_STEPS
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
        {duplicatedSteps.map((st, index) => (
          <div
            key={`${st.step}-${index}`}
            className="w-[300px] sm:w-[360px] lg:w-[380px] shrink-0 p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm hover:shadow-xl hover:border-[#d4a340] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group select-none cursor-pointer"
          >
            <div className="space-y-3">
              {/* Header: Step Number and Badge */}
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black text-[#a67c1e] font-mono-tech group-hover:scale-110 transition-transform origin-left">
                  {st.step}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#d4a340]/10 text-[#a67c1e] font-mono-tech text-[10px] font-bold border border-[#d4a340]/25">
                  Phase {st.step}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-base sm:text-lg font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors leading-snug">
                {st.title}
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#4a433d] leading-relaxed">
                {st.description}
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="pt-3 border-t border-[#dcd5c9] flex items-center justify-between text-[11px] font-mono-tech text-[#4a433d] group-hover:text-[#a67c1e] transition-colors">
              <span>Precision Standard</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
