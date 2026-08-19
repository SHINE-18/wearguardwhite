'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  X, 
  Layers, 
  Cpu, 
  Flame, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Command
} from 'lucide-react';
import { PRODUCTS_CATALOG, ALLOY_GRADES_DATA, INDUSTRIES_DATA, APPLICATION_CATEGORIES_DATA } from '@/lib/companyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose
}) => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return { products: [], alloys: [], industries: [], categories: [] };
    const q = query.toLowerCase();

    const products = PRODUCTS_CATALOG.filter(
      p => p.name.toLowerCase().includes(q) ||
           p.tagline.toLowerCase().includes(q) ||
           p.description.toLowerCase().includes(q) ||
           p.compatibleBrands.some(b => b.toLowerCase().includes(q)) ||
           p.recommendedAlloys.some(a => a.toLowerCase().includes(q))
    ).slice(0, 4);

    const alloys = ALLOY_GRADES_DATA.filter(
      a => a.name.toLowerCase().includes(q) ||
           a.series.toLowerCase().includes(q) ||
           a.recommendedUse.toLowerCase().includes(q) ||
           a.chemicalHighlights.toLowerCase().includes(q)
    ).slice(0, 3);

    const industries = INDUSTRIES_DATA.filter(
      ind => ind.name.toLowerCase().includes(q) ||
             ind.description.toLowerCase().includes(q)
    ).slice(0, 2);

    const categories = APPLICATION_CATEGORIES_DATA.filter(
      c => c.name.toLowerCase().includes(q) ||
           c.tagline.toLowerCase().includes(q)
    ).slice(0, 2);

    return { products, alloys, industries, categories };
  }, [query]);

  const totalResults = 
    searchResults.products.length + 
    searchResults.alloys.length + 
    searchResults.industries.length + 
    searchResults.categories.length;

  if (!isOpen) return null;

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#0b192c]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#faf8f5] border border-[#dcd5c9] rounded-3xl shadow-2xl overflow-hidden text-[#0b192c] flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#dcd5c9] flex items-center gap-3 bg-[#ede7de]">
          <Search className="w-5 h-5 text-[#d4a340] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, alloys (e.g. High-Chrome, P500), brands (Ammann, Astec, BHS)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-[#0b192c] text-base placeholder-[#4a433d]/60 focus:outline-none font-mono-tech"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-500 hover:text-[#0b192c] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#faf8f5] text-[10px] text-slate-600 font-mono-tech border border-[#dcd5c9]">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          {!query.trim() ? (
            <div className="py-8 text-center space-y-3">
              <div className="inline-flex p-3 rounded-full bg-[#ede7de] text-[#4a433d]">
                <Command className="w-6 h-6" />
              </div>
              <p className="text-sm text-[#4a433d]">
                Type anything to search the WearGuard metallurgical catalog & OEM database
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="text-xs text-[#4a433d] font-semibold">Quick Searches:</span>
                {['High-Chrome 27%', 'Drum Flights', 'P500 Floor', 'Mixer Arms', 'Ammann', 'Astec'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-[#ede7de] hover:bg-[#d4a340]/10 hover:text-[#a67c1e] text-xs text-[#0b192c] font-mono-tech cursor-pointer transition-colors border border-[#dcd5c9]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-[#4a433d]">
              No matching wear parts or alloys found for &quot;{query}&quot;. Try searching generic terms or OEM names.
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Products */}
              {searchResults.products.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech px-2">
                    Components & Wear Parts ({searchResults.products.length})
                  </div>
                  <div className="space-y-1">
                    {searchResults.products.map(p => (
                      <button
                        key={p.id}
                        onClick={() => handleSelect(`/products/${p.id}`)}
                        className="w-full p-3 rounded-xl hover:bg-[#ede7de] flex items-center justify-between text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#0b192c] shrink-0 border border-[#dcd5c9]">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                              {p.name}
                            </div>
                            <div className="text-xs text-[#4a433d] font-mono-tech">
                              {p.categoryName} • {p.recommendedAlloys[0]}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#a67c1e] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Alloys */}
              {searchResults.alloys.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#4a433d] font-mono-tech px-2">
                    Metallurgy & Alloy Formulations ({searchResults.alloys.length})
                  </div>
                  <div className="space-y-1">
                    {searchResults.alloys.map(a => (
                      <button
                        key={a.id}
                        onClick={() => handleSelect(`/alloys?alloy=${encodeURIComponent(a.id)}`)}
                        className="w-full p-3 rounded-xl hover:bg-[#ede7de] flex items-center justify-between text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#d4a340]/10 text-[#a67c1e] border border-[#d4a340]/30 shrink-0">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                              {a.name}
                            </div>
                            <div className="text-xs text-[#4a433d] font-mono-tech">
                              {a.series} • {a.hardness}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#a67c1e] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries */}
              {searchResults.industries.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#4a433d] font-mono-tech px-2">
                    Industry Solutions ({searchResults.industries.length})
                  </div>
                  <div className="space-y-1">
                    {searchResults.industries.map(ind => (
                      <button
                        key={ind.id}
                        onClick={() => handleSelect(`/industries/${ind.id}`)}
                        className="w-full p-3 rounded-xl hover:bg-[#ede7de] flex items-center justify-between text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#ede7de] text-[#0b192c] border border-[#dcd5c9] shrink-0">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                              {ind.name}
                            </div>
                            <div className="text-xs text-[#4a433d] font-mono-tech">
                              {ind.tagline}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#a67c1e] transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#ede7de] border-t border-[#dcd5c9] flex items-center justify-between text-[11px] text-[#4a433d] font-mono-tech">
          <span>Search 30+ products & 11 casting alloys</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
};
