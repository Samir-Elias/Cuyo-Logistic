import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/site';
import { SITE_URL } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...PRODUCTS.map(p => ({
      url: `${SITE_URL}/productos/${p.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
