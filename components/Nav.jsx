'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HOME_DROPDOWN = [
  { label: 'As Seen On TV',     href: '/as-seen-on-tv' },
  { label: 'News',              href: '/news' },
  { label: 'About Us',          href: '/about' },
  { label: 'Contact',           href: '/contact' },
  { label: 'Trade',             href: '/trade' },
  { label: 'Become A Partner',  href: '/become-a-partner' },
  { label: 'Fitters Wanted',    href: '/fitters-wanted' },
  { label: 'Dropshipping',      href: '/dropshipping' },
]

const NAV_LINKS = [
  { label: 'Doors',                      href: '/doors' },
  { label: 'Barn Door Hardware',         href: '/barn-door-hardware' },
  { label: 'Pocket Door Kits',           href: '/pocket-door-kits' },
  { label: 'Internal Sliding Door Kits', href: '/internal-sliding-kits' },
  { label: 'External Sliding Door Kits', href: '/external-sliding-kits' },
  { label: 'Gallery',                    href: '/gallery' },
  { label: 'Shop',                       href: '/shop' },
]

export default function Nav() {
  const [homeOpen, setHomeOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close home dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setHomeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-40 shadow-md">

      {/* ── WHITE LOGO BAR ── */}
      <div className="bg-white">
        <div className="max-w-site mx-auto px-5 xl:px-16 flex items-center justify-between py-4">

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/img/UJ%20Logo%20Final.png"
              alt="DoorMate Sliding Door Systems"
              width={280}
              height={80}
              className="object-contain w-auto"
              style={{height:'80px'}}
              priority
            />
          </Link>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="lg:hidden text-brand-navy p-2"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── NAVY NAV BAR (desktop) ── */}
      <div className="bg-brand-navy hidden lg:block">
        <div className="max-w-site mx-auto px-5 xl:px-16">
          <nav className="flex items-center">

            {/* HOME with dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setHomeOpen(!homeOpen)}
                className="flex items-center gap-1 text-[11px] font-bold tracking-widest text-brand-gold hover:text-white transition-colors px-4 py-3"
              >
                HOME
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transition-transform ${homeOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="square" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {homeOpen && (
                <div className="absolute top-full left-0 bg-brand-gold shadow-xl min-w-[200px] py-1 z-50">
                  {HOME_DROPDOWN.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setHomeOpen(false)}
                      className="block px-5 py-2.5 text-[11px] font-bold tracking-widest text-brand-navy hover:bg-brand-navy hover:text-brand-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Flat links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold tracking-widest text-brand-gold hover:text-white transition-colors px-4 py-3 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-brand-navy">
          <div className="px-5 py-4 space-y-1">

            {/* Phone */}
            <a
              href="tel:02921660393"
              className="block text-brand-gold font-bold text-sm py-2 border-b border-white/10 mb-2"
            >
              📞 029 2166 0393
            </a>

            {/* HOME accordion */}
            <div>
              <button
                onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                className="flex items-center justify-between w-full text-[11px] font-bold tracking-widest text-white py-2.5"
              >
                HOME
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transition-transform ${mobileHomeOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="square" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileHomeOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  {HOME_DROPDOWN.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-[11px] font-bold tracking-widest text-brand-gold py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Flat links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[11px] font-bold tracking-widest text-white/80 hover:text-brand-gold transition-colors py-2.5 border-t border-white/5"
              >
                {link.label}
              </Link>
            ))}

            {/* Shop now CTA */}
            <div className="pt-3">
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-brand-gold text-brand-navy text-[11px] font-bold tracking-widest px-5 py-3"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
