import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  getProductById, 
  PRODUCTS_CATALOG, 
  ALLOY_GRADES_DATA, 
  COMPANY_INFO 
} from '@/lib/companyData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Layers, 
  Download, 
  Phone 
} from 'lucide-react';
import ProductClientActions from './ProductClientActions';

interface PageProps {
  params: Promise<{ productId: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_CATALOG.map((product) => ({
    productId: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);
  if (!product) return { title: 'Product Not Found | WearGuard' };

  return {
    title: `${product.name} | WearGuard™ Engineered Wear Parts`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS_CATALOG
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 2);

  return (
    <div className="w-full space-y-16 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#0b192c] bg-[#f4f0ea]">
      
      {/* Breadcrumb */}
      <div>
        <Link
          href="/applications"
          className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#4a433d] hover:text-[#a67c1e] font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Equipment Catalog</span>
        </Link>
      </div>

      {/* Main Product Showcase Card */}
      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#faf8f5] border border-[#dcd5c9] grid grid-cols-1 lg:grid-cols-12 gap-10 shadow-xl relative overflow-hidden">
        
        {/* Left Visual Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0b192c] border border-[#dcd5c9]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/70 via-transparent to-transparent pointer-events-none" />
            
            <span className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-[#faf8f5]/95 text-xs font-bold font-mono-tech text-[#a67c1e] border border-[#dcd5c9] shadow-md backdrop-blur-sm">
              {product.typicalWearLifeMultiplier}
            </span>
          </div>

          {/* Quick OEM Brands Strip */}
          <div className="p-4 rounded-xl bg-[#ede7de] border border-[#dcd5c9] space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#4a433d] font-mono-tech">
              Guaranteed OEM Fitment & Compatibility:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.compatibleBrands.map((brand, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-[#faf8f5] text-xs font-mono-tech text-[#0b192c] border border-[#dcd5c9] shadow-xs">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Details Column */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#d4a340]/10 text-[#a67c1e] text-xs font-bold font-mono-tech border border-[#d4a340]/30">
                {product.categoryName}
              </span>
              {product.badge && (
                <span className="px-2.5 py-1 rounded-md bg-[#ede7de] text-[#4a433d] text-xs font-mono-tech font-semibold">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-snug">
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#4a433d] font-mono-tech">
                {product.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#4a433d] leading-relaxed">
              {product.description}
            </p>

            {/* Key Features List */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#a67c1e] font-mono-tech">
                Key Engineering Highlights:
              </div>
              <div className="space-y-2">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#0b192c]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Metallurgy Options */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0b192c] font-mono-tech">
                Available Metallurgy Formulations:
              </div>
              <div className="flex flex-wrap gap-2">
                {product.recommendedAlloys.map((alloy, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-[#ede7de] border border-[#dcd5c9] text-xs font-mono-tech font-semibold text-[#0b192c]">
                    ⚙ {alloy}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Client Action Component */}
          <ProductClientActions productName={product.name} />

        </div>

      </div>

      {/* Related Products within Category */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#0b192c]">
            Related Components in {product.categoryName}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProducts.map(p => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="p-6 rounded-2xl bg-[#faf8f5] border border-[#dcd5c9] flex items-center justify-between gap-4 hover:border-[#d4a340]/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#0b192c] shrink-0 border border-[#dcd5c9]">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b192c] group-hover:text-[#a67c1e] transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-xs text-[#4a433d] line-clamp-1">{p.tagline}</p>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-[#ede7de] group-hover:bg-[#d4a340] group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
