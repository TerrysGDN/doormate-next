import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PRODUCTS, formatPrice } from '@/lib/products'

export async function generateStaticParams() {
  return PRODUCTS['barn-door-hardware'].map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const product = PRODUCTS['barn-door-hardware'].find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: product.metaTitle,
    description: product.metaDesc,
  }
}

export default function BarnDoorProductPage({ params }) {
  const product = PRODUCTS['barn-door-hardware'].find((p) => p.slug === params.slug)
  if (!product) notFound()

  const price = formatPrice(product)
  const others = PRODUCTS['barn-door-hardware'].filter((p) => p.slug !== product.slug)

  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-12">

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-8 flex gap-2 items-center">
        <Link href="/" className="hover:text-brand-navy">Home</Link>
        <span>/</span>
        <Link href="/barn-door-hardware" className="hover:text-brand-navy">Barn Door Hardware</Link>
        <span>/</span>
        <span className="text-brand-navy font-bold">{product.name}</span>
      </nav>

      {/* Product layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

        {/* Image */}
        <div>
          <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-brand-navy text-white text-[10px] font-bold tracking-widest px-3 py-1.5">
                {product.badge}
              </span>
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

        {/* Details */}
        <div>
          <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">UK MANUFACTURED IN CARDIFF</p>
          <h1 className="text-brand-navy text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">{product.type}</p>
          <p className="text-brand-gold font-bold text-3xl mb-6">{price}</p>

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          {/* Specs */}
          <div className="border border-gray-200 p-5 mb-6 space-y-2 text-sm">
            {product.headroom && (
              <div className="flex justify-between">
                <span className="text-gray-500">Headroom required</span>
                <span className="font-bold text-brand-navy">{product.headroom}</span>
              </div>
            )}
            {product.trackNote && (
              <div className="flex justify-between">
                <span className="text-gray-500">Track</span>
                <span className="font-bold text-brand-navy">{product.trackNote}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery</span>
              <span className="font-bold text-brand-navy">£45.00 to UK mainland</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Manufactured</span>
              <span className="font-bold text-brand-navy">Cardiff, South Wales</span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-2 mb-8">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-brand-gold font-bold mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          {product.buyLink ? (
            <a
              href={product.buyLink}
              className="block w-full bg-brand-navy text-white text-sm font-bold tracking-widest text-center py-4 hover:bg-brand-gold hover:text-brand-navy transition-colors mb-3"
            >
              BUY NOW — {price}
            </a>
          ) : null}
          <Link
            href="/contact"
            className="block w-full border-2 border-brand-navy text-brand-navy text-sm font-bold tracking-widest text-center py-4 hover:bg-brand-navy hover:text-white transition-colors"
          >
            CALL US — 029 2166 0393
          </Link>

          <p className="text-gray-400 text-xs mt-4 text-center">Not sure if this is the right system? <a href="tel:02921660393" className="text-brand-navy font-bold hover:text-brand-gold">Call us</a> and we'll advise.</p>
        </div>
      </div>

      {/* Other systems */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-brand-navy text-xl font-bold mb-6">Other Barn Door Hardware Systems</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/barn-door-hardware/${p.slug}`} className="flex gap-4 border border-gray-200 p-4 hover:border-brand-navy transition-colors">
              <div className="relative w-16 h-16 bg-gray-100 shrink-0">
                <Image src={p.image} alt={p.name} fill className="object-cover" sizes="64px" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy text-sm">{p.name}</h3>
                <p className="text-gray-400 text-xs mb-1">{p.type}</p>
                <p className="text-brand-gold font-bold text-sm">{formatPrice(p)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
