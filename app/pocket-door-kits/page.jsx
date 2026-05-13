import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/lib/products'

export const metadata = {
  title: 'Pocket Door Kits | Coburn, Rocket, Eclisse & Mirror Pocket Doors',
  description: 'Pocket door kits from £117.60. Coburn, Rocket, Eclisse and unique mirror pocket doors — DoorMate is the only UK manufacturer of mirror pocket doors. Cardiff.',
}

export default function PocketDoorKitsPage() {
  const products = PRODUCTS['pocket-door-kits']
  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-14">
      <div className="mb-10">
        <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">ONLY UK MIRROR POCKET DOOR MAKER</p>
        <h1 className="text-brand-navy text-4xl font-bold mb-3">Pocket Door Kits</h1>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          From the Coburn entry-level kit at £117.60 to the Eclisse premium system, plus our unique mirror pocket doors — DoorMate is the only UK manufacturer of mirror pocket doors. For double doors, add quantity 2 to basket.
        </p>
      </div>
      <div className="bg-brand-gold/10 border border-brand-gold/30 p-5 mb-10 max-w-xl">
        <p className="text-brand-navy text-sm font-bold mb-1">Mirror Pocket Doors</p>
        <p className="text-gray-600 text-sm">We are the <strong>only UK manufacturer</strong> of mirror pocket doors. Single £395 · Double £790. Made to order, 2–3 week lead time. We recommend 30–45kg soft close (sold separately).</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </div>
  )
}
