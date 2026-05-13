import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/lib/products'

export const metadata = {
  title: 'External Sliding Door Kits | 75kg to 200kg | DoorMate',
  description: 'External sliding door kits from £104. DM-75, DM-100, DM-150 and DM-200. For outbuildings, garages, barns and agricultural buildings. DoorMate.',
}

export default function ExternalSlidingKitsPage() {
  const products = PRODUCTS['external-sliding-kits']
  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-14">
      <div className="mb-10">
        <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">OUTBUILDINGS &amp; GARAGES</p>
        <h1 className="text-brand-navy text-4xl font-bold mb-3">External Sliding Door Kits</h1>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          Four heavy-duty external sliding kits from 75kg to 200kg capacity. Designed for outbuildings, garages, barns and agricultural buildings. Weather-resistant construction. All fixings included.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-6 mb-10 max-w-xl">
        <h2 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-3">Which kit do I need?</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {products.map((p) => (
            <div key={p.slug} className="flex justify-between">
              <span className="text-gray-600">{p.name.split(' ')[0]}</span>
              <span className="font-bold text-brand-navy">{p.capacity}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">Weigh your door before ordering. If in doubt, go larger.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </div>
  )
}
