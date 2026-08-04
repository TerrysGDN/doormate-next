import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Doors', href: '/doors' },
  { label: 'Barn Door Hardware', href: '/barn-door-hardware' },
  { label: 'Pocket Door Kits', href: '/pocket-door-kits' },
  { label: 'Internal Sliding Door Kits', href: '/internal-sliding-kits' },
  { label: 'External Sliding Door Kits', href: '/external-sliding-kits' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Shop', href: '/shop' },
]

export default function Nav() {
  return (
    <header className="dm-header">
      <div className="dm-header-main">
        <div className="dm-header-identity">
          <Link className="dm-header-logo" href="/" aria-label="DoorMate home">
            <Image src="/img/doormate-logo-cropped.png" alt="DoorMate Sliding Door Systems — Cardiff" width={360} height={110} priority />
          </Link>
          <p className="dm-header-tagline">Trading Since 2009</p>
        </div>
        <div className="dm-header-contact">
          <a href="tel:02921660393">029 2166 0393</a>
          <a href="mailto:info@doormate.co.uk">info@doormate.co.uk</a>
        </div>
        <details className="dm-mobile-navigation">
          <summary className="dm-menu-button">
          <span>Menu</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          </summary>
          <nav aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </nav>
        </details>
      </div>

      <nav id="dm-navigation" aria-label="Main navigation">
        <div className="dm-navigation-inner">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
