import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/products'

export default function ProductCard({ product }) {
  const price = formatPrice(product)
  const href = `/${product.category}/${product.slug}`

  return (
    <div className="group bg-white border border-gray-200 flex flex-col hover:border-brand-navy transition-all duration-300">
      <Link href={href} className="relative aspect-[4/5] overflow-hidden bg-gray-100 block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-navy text-white text-[10px] font-bold tracking-widest px-2 py-1">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link href={href}>
          <h3 className="font-bold text-brand-navy text-base mb-1 leading-tight hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.type && (
          <p className="text-gray-500 text-xs mb-3 uppercase tracking-wide">{product.type}</p>
        )}
        <p className="text-brand-gold font-bold text-lg mb-4">{price}</p>
        {product.buyLink ? (
          <a
            href={product.buyLink}
            className="mt-auto w-full py-2.5 border-2 border-brand-navy text-brand-navy text-xs font-bold tracking-widest text-center hover:bg-brand-navy hover:text-white transition-all block"
          >
            BUY NOW
          </a>
        ) : product.contactForPrice ? (
          <Link
            href="/contact"
            className="mt-auto w-full py-2.5 border-2 border-brand-navy text-brand-navy text-xs font-bold tracking-widest text-center hover:bg-brand-navy hover:text-white transition-all block"
          >
            GET A QUOTE
          </Link>
        ) : (
          <Link
            href={href}
            className="mt-auto w-full py-2.5 border-2 border-brand-navy text-brand-navy text-xs font-bold tracking-widest text-center hover:bg-brand-navy hover:text-white transition-all block"
          >
            VIEW PRODUCT
          </Link>
        )}
      </div>
    </div>
  )
}
