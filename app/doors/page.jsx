import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/lib/products'

export const metadata = {
  title: 'Handmade Pine Barn Doors | Made in Cardiff | From £527',
  description: 'Handmade pine barn doors from £527. Built to your exact dimensions in Cardiff. V-Brace, Z-Brace, Ledge and Brace, Glazed panel. Oak available on request. DoorMate.',
}

export default function DoorsPage() {
  const products = PRODUCTS['doors']
  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-14">
      <div className="mb-10">
        <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">HANDMADE IN CARDIFF</p>
        <h1 className="text-brand-navy text-4xl font-bold mb-3">Handmade Barn Doors</h1>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          Our pine barn doors are made to your exact dimensions in our Cardiff workshop. Every door is built to order — V-Brace, Z-Brace, Ledge and Brace, and Glazed panel designs. Sliding hardware is sold separately and we'll recommend the right system for your door.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-6 mb-10 max-w-2xl">
        <h2 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-3">Important notes</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>✓ <strong className="text-brand-navy">Made to your dimensions</strong> — give us width, height and thickness</li>
          <li>✓ <strong className="text-brand-navy">Sliding hardware sold separately</strong> — we'll advise the right kit</li>
          <li>✓ <strong className="text-brand-navy">Oak available</strong> — price on application, contact us</li>
          <li>✓ <strong className="text-brand-navy">Lead time</strong> — contact us for current lead times</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </div>
  )
}
