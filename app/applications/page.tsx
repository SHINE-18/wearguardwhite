'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Cpu, 
  ArrowRight, 
  Filter, 
  Search, 
  Sparkles, 
  Check, 
  FileText, 
  Layers, 
  Flame, 
  Wrench, 
  ArrowUpRight 
} from 'lucide-react';
import { 
  PRODUCTS_CATALOG, 
  APPLICATION_CATEGORIES_DATA, 
  ALLOY_GRADES_DATA, 
  COMPANY_INFO 
} from '@/lib/companyData';
import { ApplicationCategory } from '@/lib/types';
import { useModals } from '@/components/providers/ModalProvider';
import { SpotlightCard } from '@/components/reactbits/SpotlightCard';

function ApplicationsContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as ApplicationCategory) || 'all';
  const { openQuoteModal } = useModals();

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter(product => {
      const matchesCategory = 
        selectedCategory === 'all' || 
        product.category === selectedCategory ||
        (selectedCategory === 'mixers' && product.category === 'mixer-components') ||
        (selectedCategory === 'filters' && product.category === 'filter-components') ||
        (selectedCategory === 'liners' && product.category === 'liners-transfer');

      const matchesSearch = 
        !searchQuery.trim() ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.compatibleBrands.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.recommendedAlloys.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-16 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a340]/10 border border-[#d4a340]/30 text-[#a67c1e] text-xs font-mono-tech">
          <Cpu className="w-3.5 h-3.5 text-[#a67c1e]" />
          <span>Industrial Equipment Components Catalog</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b192c] tracking-tight">
          Precision Wear Components & Replacement Assemblies
        </h1>
        <p className="text-base sm:text-lg text-[#4a433d] leading-relaxed max-w-3xl">
          Engineered replacement parts for rotary drums, pugmills, pan mixers, chute transfer points, bucket elevators, baghouses, and heavy excavation machinery. Compatible with any OEM brand.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        
        {/* Search & Stats Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#d4a340] absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search components or OEM brand..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#ede7de] border border-[#dcd5c9] text-[#0b192c] placeholder-[#4a433d]/60 text-xs focus:outline-none focus:border-[#d4a340] font-mono-tech"
            />
          </div>

          <div className="flex items-center gap-3 text-xs font-mono-tech text-[#4a433d] w-full sm:w-auto justify-between sm:justify-end">
            <span>Showing <strong className="text-[#a67c1e] font-bold">{filteredProducts.length}</strong> components</span>
            <button
              onClick={() => openQuoteModal()}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#d4a340] to-[#b8860b] hover:from-[#c29230] hover:to-[#a67c1e] text-white font-bold transition-colors cursor-pointer shadow-sm shadow-[#d4a340]/20"
            >
              Quick RFQ
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#d4a340] text-white shadow-md shadow-[#d4a340]/20'
                : 'bg-[#faf8f5] text-[#0b192c] border border-[#dcd5c9] hover:bg-[#ede7de]'
            }`}
          >
            All Components ({PRODUCTS_CATALOG.length})
          </button>

          {APPLICATION_CATEGORIES_DATA.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#d4a340] text-white shadow-md shadow-[#d4a340]/20'
                  : 'bg-[#faf8f5] text-[#0b192c] border border-[#dcd5c9] hover:bg-[#ede7de]'
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>

      </div>

      {/* Products Grid with SpotlightCard */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center space-y-4 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] shadow-sm">
          <p className="text-[#4a433d] text-sm">
            No components matched your search filter "{searchQuery}".
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-[#ede7de] hover:bg-[#e4ddd2] text-[#0b192c] text-xs font-mono-tech font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <SpotlightCard
              key={product.id}
              spotlightColor="rgba(212, 163, 64, 0.09)"
              className="p-6 flex flex-col justify-between space-y-5 group shadow-sm hover:shadow-lg transition-all border-[#dcd5c9] bg-[#faf8f5]"
            >
              <div className="space-y-4">
                
                {/* Image & Alloy Tag */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 flex flex-col items-end gap-1">
                    {product.recommendedAlloys[0] && (
                      <span className="px-2.5 py-1 rounded bg-[#faf8f5]/95 text-[10px] font-mono-tech font-bold text-[#a67c1e] border border-[#dcd5c9] shadow-sm backdrop-blur-sm">
                        {product.recommendedAlloys[0]}
                      </span>
                    )}
                    {product.typicalWearLifeMultiplier && (
                      <span className="px-2 py-0.5 rounded bg-[#ede7de] text-[10px] font-mono-tech font-bold text-[#4a433d] border border-[#dcd5c9] shadow-sm">
                        {product.typicalWearLifeMultiplier} Life
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-[#a67c1e] font-mono-tech">
                    {product.categoryName}
                  </div>
                  <h3 className="text-lg font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#4a433d] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Compatibility tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.compatibleBrands.slice(0, 3).map((brand, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#ede7de] text-[10px] font-mono-tech text-[#4a433d] border border-[#dcd5c9]">
                      {brand}
                    </span>
                  ))}
                  {product.compatibleBrands.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-[#ede7de] text-[10px] font-mono-tech text-[#4a433d]/60">
                      +{product.compatibleBrands.length - 3} more
                    </span>
                  )}
                </div>

              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#dcd5c9] flex items-center justify-between gap-3">
                <Link
                  href={`/products/${product.id}`}
                  className="text-xs font-bold text-[#0b192c] hover:text-[#a67c1e] flex items-center gap-1 font-mono-tech"
                >
                  <span>Full Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => openQuoteModal(null, `Inquiry: ${product.name}`)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#d4a340]/10 hover:bg-[#d4a340] text-[#a67c1e] hover:text-white font-bold text-xs font-mono-tech transition-colors cursor-pointer border border-[#d4a340]/30"
                >
                  RFQ
                </button>
              </div>

            </SpotlightCard>
          ))}
        </div>
      )}

    </div>
  );
}

export default function ApplicationsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[#4a433d]">Loading equipment components...</div>}>
      <ApplicationsContent />
    </Suspense>
  );
}
