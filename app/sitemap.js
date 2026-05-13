import { PRODUCTS } from '@/lib/products'

const BASE = 'https://doormate.co.uk'

export default function sitemap() {
  const staticRoutes = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/barn-door-hardware`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/pocket-door-kits`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/doors`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/external-sliding-kits`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/internal-sliding-kits`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const productRoutes = [
    ...PRODUCTS['barn-door-hardware'].map((p) => ({
      url: `${BASE}/barn-door-hardware/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...PRODUCTS['pocket-door-kits'].map((p) => ({
      url: `${BASE}/pocket-door-kits/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...PRODUCTS['doors'].map((p) => ({
      url: `${BASE}/doors/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...PRODUCTS['external-sliding-kits'].map((p) => ({
      url: `${BASE}/external-sliding-kits/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ]

  return [...staticRoutes, ...productRoutes]
}
