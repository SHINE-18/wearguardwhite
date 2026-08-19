import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  getIndustryById, 
  getProductsByIndustry, 
  INDUSTRIES_DATA,
  ALLOY_GRADES_DATA,
  COMPANY_INFO
} from '@/lib/companyData';
import { IndustryId } from '@/lib/types';
import { 
  Layers, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  ShieldAlert, 
  Cpu, 
  Sparkles, 
  FileText, 
  Phone 
} from 'lucide-react';
import IndustryClientActions from './IndustryClientActions';

interface PageProps {
  params: Promise<{ industryId: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    industryId: industry.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industryId } = await params;
  const industry = getIndustryById(industryId as IndustryId);
  if (!industry) return { title: 'Industry Not Found | WearGuard' };

  return {
    title: `${industry.name} Wear Solutions & Castings | WearGuard™`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { industryId } = await params;
  const industry = getIndustryById(industryId as IndustryId);

  if (!industry) {
    notFound();
  }

  const products = getProductsByIndustry(industry.id);

  return (
    <div className="w-full space-y-20 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* Back Breadcrumb */}
      <div>
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#4a433d] hover:text-[#a67c1e] font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Industries</span>
        </Link>
      </div>

      {/* Hero Section for Specific Industry */}
      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 gap-10 shadow-xl relative overflow-hidden">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#d4a340]/10 text-[#a67c1e] text-xs font-bold font-mono-tech border border-[#d4a340]/30">
            <span>{industry.badge}</span>
            <span>•</span>
            <span>Industry Solution</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b192c] tracking-tight leading-tight">
              {industry.name}
            </h1>
            <p className="text-sm sm:text-base text-[#4a433d] font-mono-tech">
              {industry.tagline}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#4a433d] leading-relaxed max-w-3xl">
            {industry.description}
          </p>

          <IndustryClientActions industryName={industry.name} />
        </div>

        {/* Right Visual & Key Metrics */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9] shadow-md">
            <img
              src={industry.image}
              alt={industry.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="grid grid-cols-3 gap-2 font-mono-tech text-center">
            {industry.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#ede7de] border border-[#dcd5c9]">
                <div className="text-lg font-black text-[#a67c1e]">{m.value}</div>
                <div className="text-[10px] text-[#4a433d] mt-0.5 font-semibold">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Challenges & Advantages Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="p-8 rounded-2xl bg-red-50/60 border border-red-200 space-y-4">
          <div className="flex items-center gap-2 text-red-700 font-mono-tech text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            <span>Severe Operating Challenges</span>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-[#0b192c]">
            {industry.challenges.map((ch, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>{ch}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-mono-tech text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>The WearGuard Metallurgy Advantage</span>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-[#0b192c]">
            {industry.wearguardAdvantage.map((adv, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Specific Industry Products */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#dcd5c9] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
              Tailored Machinery Parts
            </span>
            <h3 className="text-2xl font-bold text-[#0b192c]">
              Engineered Components for {industry.name}
            </h3>
          </div>
          <Link
            href="/applications"
            className="text-xs font-mono-tech text-[#a67c1e] hover:text-[#8c6514] font-bold flex items-center gap-1"
          >
            <span>View Complete 30+ Equipment Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="space-y-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.recommendedAlloys[0] && (
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#faf8f5]/95 text-[10px] font-mono-tech font-bold text-[#a67c1e] border border-[#dcd5c9] shadow-sm backdrop-blur-sm">
                      {prod.recommendedAlloys[0]}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#a67c1e] font-mono-tech">
                    {prod.categoryName}
                  </span>
                  <h4 className="text-base font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                    {prod.name}
                  </h4>
                  <p className="text-xs text-[#4a433d] line-clamp-2">
                    {prod.description}
                  </p>
                </div>
              </div>

              <Link
                href={`/products/${prod.id}`}
                className="w-full py-2 rounded-xl bg-[#ede7de] hover:bg-[#d4a340] hover:text-white text-[#0b192c] font-mono-tech text-xs font-bold text-center block transition-all border border-[#dcd5c9]"
              >
                Inspect Technical Specs
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
