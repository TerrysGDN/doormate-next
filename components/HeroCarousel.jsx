import Image from 'next/image'
import Link from 'next/link'

const PRODUCTS = [
  { name: 'Doors', image: '/img/doors-category.jpg', href: '/doors', alt: 'Handmade oak and pine barn doors installed in a luxury home' },
  { name: 'Pocket Door Kits', image: '/img/Eclisse Images/ECLISSE_CLASSIC/classic-pocket-door-styles-finished-with-architrave.jpg', href: '/pocket-door-kits', alt: 'Double and single Eclisse pocket doors installed in a finished home' },
  { name: 'Barn Door Hardware', image: '/img/gainesville-system.jpg', href: '/barn-door-hardware', alt: 'Gainesville barn door hardware installed on a red door' },
  { name: 'Internal Sliding Door Kits', image: '/img/internal-sliding-kits-category.jpg', href: '/internal-sliding-kits', alt: 'Timber internal sliding door installed in a modern living room' },
  { name: 'External Sliding Door Kits', image: '/img/external-sliding-kits-category.jpg', href: '/external-sliding-kits', alt: 'Heavy-duty external sliding doors installed on a stable' },
  { name: 'Shop', image: '/img/shop-category.jpg', href: 'https://www.barn-doors.co.uk/shop', alt: 'Door accessories and hardware' },
]

export default function HeroCarousel() {
  return (
    <section className="dm-showcase" aria-labelledby="home-heading">
      <div className="dm-showcase-statement">
        <Image src="/img/Stuart Large Augusta1.jpg" alt="" fill priority sizes="(max-width: 820px) 100vw, 34vw" />
        <span className="dm-showcase-shade" />
        <h1 id="home-heading">The UK&apos;s Leading Sliding Door Specialists</h1>
      </div>

      <div className="dm-showcase-products" aria-label="Shop sliding door systems by category">
        {PRODUCTS.map((product) => (
          <Link className="dm-product-tile" href={product.href} key={product.name}>
            <Image src={product.image} alt={product.alt} fill loading="eager" sizes="(max-width: 820px) 50vw, 22vw" />
            <span className="dm-product-shade" />
            <span className="dm-product-label">
              <strong>{product.name}</strong>
              <em>Shop Now <span aria-hidden="true">→</span></em>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
