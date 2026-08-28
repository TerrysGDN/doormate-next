'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'Doors', href: '/doors' },
  { label: 'Barn Door Hardware', href: '/barn-door-hardware' },
  {
    label: 'Pocket Door Kits',
    href: '/pocket-door-kits',
    children: [
      { label: 'Rocket', href: '/pocket-door-kits/rocket' },
      { label: 'Eclisse', href: '/pocket-door-kits/eclisse' },
      { label: 'Coburn', href: '/pocket-door-kits/coburn' },
      { label: 'Barrier', href: '/pocket-door-kits/barrier' },
    ],
  },
  { label: 'Internal Sliding Door Kits', href: '/internal-sliding-kits' },
  { label: 'External Sliding Door Kits', href: '/external-sliding-kits' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our Story', href: '/about' },
  { label: 'Shop', href: 'https://www.barn-doors.co.uk/shop' },
]

export default function Nav() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const mobileNavigation = useRef(null)

  const closeMobileNavigation = () => {
    mobileNavigation.current?.removeAttribute('open')
  }

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
        <details className="dm-mobile-navigation" ref={mobileNavigation}>
          <summary className="dm-menu-button">
          <span>Menu</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          </summary>
          <nav aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <div className="dm-mobile-nav-group" key={link.href}>
                <Link href={link.href} onClick={closeMobileNavigation}>{link.label}</Link>
                {link.children?.map((child) => (
                  <Link className="dm-mobile-nav-child" href={child.href} key={child.href} onClick={closeMobileNavigation}>{child.label}</Link>
                ))}
              </div>
            ))}
          </nav>
        </details>
      </div>

      <nav id="dm-navigation" aria-label="Main navigation">
        <div className="dm-navigation-inner">
          {NAV_LINKS.map((link) => (
            link.children ? (
              <div className={`dm-navigation-item dm-navigation-item--dropdown${openDropdown === link.href ? ' is-open' : ''}`} key={link.href}>
                <Link href={link.href} onClick={() => setOpenDropdown(null)}>{link.label}</Link>
                <button
                  type="button"
                  aria-expanded={openDropdown === link.href}
                  aria-label={`Show ${link.label} manufacturers`}
                  aria-haspopup="true"
                  onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                >
                  <span aria-hidden="true">⌄</span>
                </button>
                <div className="dm-navigation-submenu">
                  {link.children.map((child) => (
                    <Link href={child.href} key={child.href} onClick={() => setOpenDropdown(null)}>{child.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            )
          ))}
        </div>
      </nav>
    </header>
  )
}
