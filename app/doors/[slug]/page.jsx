import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PRODUCTS, formatPrice } from '@/lib/products'

export async function generateStaticParams() {
  return PRODUCTS['doors'].map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const product = PRODUCTS['doors'].find((p) => p.slug === params.slug)
  if (!product) return {}
  return { title: product.metaTitle, description: product.metaDesc }
}

export default function DoorProductPage({ params }) {
  const product = PRODUCTS['doors'].find((p) => p.slug === params.slug)
  if (!product) notFound()
  const price = formatPrice(product)

  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-12">
      <nav className="text-xs text-gray-400 mb-8 flex gap-2 items-center">
        <Link href="/" className="hover:text-brand-navy">Home</Link>
        <span>/</span>
        <Link href="/doors" className="hover:text-brand-navy">Doors</Link>
        <span>/</span>
        <span className="text-brand-navy font-bold">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4">
            <Image src={product.images[0]} alt={product.name} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-[10px] font-bold tracking-widest px-3 py-1.5">{product.badge}</span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-3">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image src={img} alt={`${product.name} view ${i + 2}`} fill className="object-cover" sizes="15vw" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">HANDMADE IN CARDIFF</p>
          <h1 className="text-brand-navy text-3xl lg:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-brand-gold font-bold text-3xl mb-6">{price}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          <div className="border border-gray-200 p-5 mb-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Material</span>
              <span className="font-bold text-brand-navy">Solid Pine (Oak available — POA)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Made to order</span>
              <span className="font-bold text-brand-navy">Yes — your exact dimensions</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Hardware</span>
              <span className="font-bold text-brand-navy">Sold separately</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery</span>
              <span className="font-bold text-brand-navy">£45.00 to UK mainland</span>
            </div>
          </div>

          <ul className="space-y-2 mb-8">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-brand-gold font-bold mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>

          <Link href="/contact" className="block w-full bg-brand-navy text-white text-sm font-bold tracking-widest text-center py-4 hover:bg-brand-gold hover:text-brand-navy transition-colors mb-3">
            GET A QUOTE
          </Link>
          <a href="tel:02921660393" className="block w-full border-2 border-brand-navy text-brand-navy text-sm font-bold tracking-widest text-center py-4 hover:bg-brand-navy hover:text-white transition-colors">
            CALL — 029 2166 0393
          </a>
          <p className="text-gray-400 text-xs mt-4 text-center">Made to your exact dimensions. Contact us for a quote and lead time.</p>
        </div>
      </div>
    </div>
  )
}
