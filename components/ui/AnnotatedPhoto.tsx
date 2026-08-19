'use client';

import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

export interface CalloutPin {
  id: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  title: string;
  description: string;
  spec?: string;
}

interface AnnotatedPhotoProps {
  imageSrc: string;
  altText: string;
  badge?: string;
  title?: string;
  callouts: CalloutPin[];
  className?: string;
}

export const AnnotatedPhoto: React.FC<AnnotatedPhotoProps> = ({
  imageSrc,
  altText,
  badge = 'Interactive Metallurgical Hotspots',
  title = 'Engineered Microstructure & Wear Zones',
  callouts,
  className = ''
}) => {
  const [activePinId, setActivePinId] = useState<string>(callouts[0]?.id || '');
  const activePin = callouts.find(c => c.id === activePinId) || callouts[0];

  return (
    <div className={`relative bg-[#faf8f5] border border-[#dcd5c9] rounded-3xl overflow-hidden shadow-xl ${className}`}>
      
      {/* Header Bar */}
      <div className="px-6 py-4 bg-[#ede7de] border-b border-[#dcd5c9] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#d4a340] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
            {badge}
          </span>
        </div>
        <span className="text-xs text-[#4a433d] font-mono-tech font-medium">
          Click hotspot pins to inspect microstructure
        </span>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0b192c] overflow-hidden group">
        
        {/* Component Image */}
        <div className="relative w-full h-full">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover object-center filter contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/80 via-transparent to-[#0b192c]/30 pointer-events-none" />
        </div>

        {/* Hotspot Pins */}
        {callouts.map((pin, idx) => {
          const isActive = pin.id === activePinId;
          return (
            <div
              key={pin.id}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                type="button"
                onClick={() => setActivePinId(pin.id)}
                className={`relative flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-125 z-30' : 'scale-100 hover:scale-115'
                }`}
                title={pin.title}
              >
                {/* Ping wave */}
                <span className={`absolute w-8 h-8 rounded-full ${isActive ? 'bg-[#d4a340]/50 animate-ping' : 'bg-white/20'}`} />
                
                {/* Pin center button */}
                <span className={`relative flex items-center justify-center w-6 h-6 rounded-full font-bold text-[11px] font-mono-tech border-2 shadow-lg transition-colors ${
                  isActive 
                    ? 'bg-[#d4a340] text-white border-white ring-4 ring-[#d4a340]/30' 
                    : 'bg-[#faf8f5] text-[#0b192c] border-[#d4a340] hover:bg-[#d4a340] hover:text-white'
                }`}>
                  {idx + 1}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Active Pin Detailed Callout Card */}
      {activePin && (
        <div className="p-6 sm:p-8 bg-[#faf8f5] border-t border-[#dcd5c9] text-[#0b192c] space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d4a340] text-white text-xs font-bold font-mono-tech shadow-sm">
                {callouts.findIndex(c => c.id === activePin.id) + 1}
              </span>
              <h4 className="text-lg font-bold text-[#0b192c] tracking-tight">
                {activePin.title}
              </h4>
            </div>

            {activePin.spec && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d4a340]/10 text-[#a67c1e] font-mono-tech text-xs font-bold border border-[#d4a340]/30 w-fit">
                <Cpu className="w-3.5 h-3.5 text-[#a67c1e]" />
                <span>{activePin.spec}</span>
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#4a433d] leading-relaxed max-w-4xl">
            {activePin.description}
          </p>
        </div>
      )}
    </div>
  );
};
