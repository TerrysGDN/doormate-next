import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/lib/products'

export const metadata = {
  title: 'Barn Door Hardware | UK Manufactured in Cardiff',
  description: "DoorMate barn door hardware — the UK's only manufacturer. Gainesville, Brooklyn, Covington, Augusta, Detroit, Baltimore. Handmade in Cardiff since 2009. From £150.",
}

export default function BarnDoorHardwarePage() {
  const products = PRODUCTS['barn-door-hardware']
  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-14">
      <div className="mb-10">
        <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">UK MANUFACTURED IN CARDIFF</p>
        <h1 className="text-brand-navy text-4xl font-bold mb-3">Barn Door Hardware</h1>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          DoorMate is the UK's only bespoke barn door hardware manufacturer. Every system is handmade in our Cardiff workshop. Six systems to suit every opening — single, double, bi-parting, bi-passing, standard and low headroom.
        </p>
      </div>

      {/* Headroom guide */}
      <div className="bg-gray-50 border border-gray-200 p-6 mb-10 max-w-2xl">
        <h2 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-3">Which system do I need?</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li><strong className="text-brand-navy">Single door:</strong> Gainesville (standard) or Detroit (low headroom)</li>
          <li><strong className="text-brand-navy">Two doors sliding apart:</strong> Brooklyn (standard) or Baltimore (low headroom) — Bi-Parting</li>
          <li><strong className="text-brand-navy">Two doors passing each other, one track:</strong> Covington — Bi-Passing</li>
          <li><strong className="text-brand-navy">Two doors, two parallel tracks:</strong> Augusta — always Augusta for double tracks</li>
        </ul>
        <p className="text-xs text-gray-400 mt-3">Not sure? Call us on <a href="tel:02921660393" className="text-brand-navy font-bold hover:text-brand-gold">029 2166 0393</a></p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </div>
  )
}
