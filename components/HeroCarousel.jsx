import Image from 'next/image'
import Link from 'next/link'

const PRODUCTS = [
  { name: 'Doors', image: '/img/doors-category.jpg', href: '/doors', alt: 'Handmade oak and pine barn doors installed in a luxury home' },
  { name: 'Pocket Door Kits', image: '/img/pocket-door-kits-category.jpg', href: '/pocket-door-kits', alt: 'Pocket door kits installed in a home' },
  { name: 'Barn Door Hardware', image: '/img/gainesville-system.jpg', href: '/barn-door-hardware', alt: 'Gainesville barn door hardware installed on a red door' },
  { name: 'Internal Sliding Door Kits', image: '/img/internal-sliding-kits-category.jpg', href: '/internal-sliding-kits', alt: 'Internal sliding door kit installed' },
  { name: 'External Sliding Door Kits', image: '/img/External-150kg.jpg', href: '/external-sliding-kits', alt: 'Heavy duty external sliding door kit installed' },
  { name: 'Shop', image: '/img/shop-category.jpg', href: '/shop', alt: 'Door accessories and hardware' },
]

export default function HeroCarousel() {
  return (
    <section className="dm-showcase" aria-labelledby="home-heading">
      <div className="dm-showcase-statement">
        <Image src="/img/augusta-hero.jpg" alt="" fill priority sizes="(max-width: 820px) 100vw, 34vw" />
        <span className="dm-showcase-shade" />
        <h1 id="home-heading">The UK&apos;s Leading Sliding Door Specialists</h1>
      </div>

      <div className="dm-showcase-products" aria-label="Shop sliding door systems by category">
        {PRODUCTS.map((product) => (
          <Link className="dm-product-tile" href={product.href} key={product.name}>
            <Image src={product.image} alt={product.alt} fill sizes="(max-width: 820px) 50vw, 22vw" />
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
