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
  const [homeOpen, setHomeOpen]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false)
  const dropdownRef = useRef(null)

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
    <header className="bg-white sticky top-0 z-40 shadow-md">

      {/* ── SINGLE WHITE BAR ── */}
      <div className="flex items-center justify-between" style={{ height: '120px', width: '100%', padding: '0 40px' }}>

        {/* Logo — fills bar height */}
        <Link href="/" className="flex-shrink-0 flex items-center h-full py-1">
          <Image
            src="/img/UJ%20Logo%20Final.png"
            alt="DoorMate Sliding Door Systems"
            width={520}
            height={110}
            className="object-contain"
            style={{ height: '110px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-4">

          {/* HOME with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setHomeOpen(!homeOpen)}
              className="flex items-center gap-1 text-[16px] font-bold tracking-wide transition-colors"
              style={{ color: '#272446' }}
            >
              HOME
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transition-transform ${homeOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="square" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {homeOpen && (
              <div className="absolute top-full left-0 bg-brand-navy shadow-xl min-w-[200px] py-1 z-50">
                {HOME_DROPDOWN.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setHomeOpen(false)}
                    className="block px-5 py-2.5 text-[13px] font-bold tracking-wide text-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Separator after HOME */}
          <span style={{ color: '#c0c0c0', fontWeight: 300, fontSize: '20px', userSelect: 'none', lineHeight: 1 }}>|</span>

          {/* Flat links with separators between */}
          {NAV_LINKS.flatMap((link, i) => [
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] font-bold tracking-wide whitespace-nowrap transition-opacity hover:opacity-60"
              style={{ color: '#272446' }}
            >
              {link.label}
            </Link>,
            i < NAV_LINKS.length - 1 && (
              <span key={`sep-${i}`} style={{ color: '#c0c0c0', fontWeight: 300, fontSize: '20px', userSelect: 'none', lineHeight: 1 }}>|</span>
            ),
          ])}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          style={{ color: '#272446' }}
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

      {/* ── TAGLINE STRIP ── */}
      <div style={{ background: '#272446', padding: '10px 0', textAlign: 'center' }}>
        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '15px', letterSpacing: '0.05em' }}>
          Perfect Systems For Every Application
        </span>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 space-y-1">

            {/* Phone */}
            <a
              href="tel:02921660393"
              className="block font-bold text-sm py-2 border-b border-gray-100 mb-2"
              style={{ color: '#272446' }}
            >
              029 2166 0393
            </a>

            {/* HOME accordion */}
            <div>
              <button
                onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                className="flex items-center justify-between w-full text-[13px] font-bold tracking-wide py-2.5"
                style={{ color: '#272446' }}
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
                      className="block text-[13px] font-bold tracking-wide py-2"
                      style={{ color: '#272446' }}
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
                className="block text-[13px] font-bold tracking-wide py-2.5 border-t border-gray-100"
                style={{ color: '#272446' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
