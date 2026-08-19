import { MetadataRoute } from 'next';
import { PRODUCTS_CATALOG, INDUSTRIES_DATA } from '@/lib/companyData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wearguard.engineering';

  const staticRoutes = [
    '',
    '/industries',
    '/applications',
    '/alloys',
    '/custom-engineering',
    '/wear-audit',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const industryRoutes = INDUSTRIES_DATA.map((industry) => ({
    url: `${baseUrl}/industries/${industry.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const productRoutes = PRODUCTS_CATALOG.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...industryRoutes, ...productRoutes];
}
