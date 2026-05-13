'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const HOME_DROPDOWN = [
  { label: 'As Seen On TV', href: '/about#tv' },
  { label: 'News', href: '/news' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Trade', href: '/contact#trade' },
  { label: 'Become A Partner', href: '/contact#partner' },
  { label: 'Fitters Wanted', href: '/contact#fitters' },
  { label: 'Dropshipping', href: '/contact#dropshipping' },
]

const NAV_LINKS = [
  { label: 'Doors', href: '/doors' },
  { label: 'Barn Door Hardware', href: '/barn-door-hardware' },
  { label: 'Pocket Door Kits', href: '/pocket-door-kits' },
  { label: 'Internal Sliding Door Kits', href: '/internal-sliding-kits' },
  { label: 'External Sliding Door Kits', href: '/external-sliding-kits' },
  { label: 'Gallery', href: '/gallery' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-brand-navy border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-site mx-auto px-5 xl:px-16 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-tight hover:text-brand-gold transition-colors shrink-0">
          DoorMate
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-5 ml-8">
          {/* Home dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="text-white text-sm font-bold hover:text-brand-gold transition-colors flex items-center gap-1"
            >
              Home
              <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 bg-brand-gold min-w-[210px] z-50 shadow-xl"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {HOME_DROPDOWN.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-2.5 text-sm font-bold text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
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
              className="text-white/80 text-sm hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 ml-auto xl:ml-4">
          <Link href="/contact" className="hidden sm:block bg-brand-gold text-brand-navy text-xs font-bold tracking-widest px-5 py-2.5 hover:bg-white transition-colors">
            GET A QUOTE
          </Link>
          {/* Mobile toggle */}
          <button
            className="xl:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-brand-navy border-t border-white/10">
          <div className="max-w-site mx-auto px-5 py-5 flex flex-col">
            <p className="text-white/40 text-[10px] tracking-widest font-bold mb-2">HOME</p>
            {HOME_DROPDOWN.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/70 text-sm py-2.5 pl-3 border-b border-white/10 hover:text-brand-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <p className="text-white/40 text-[10px] tracking-widest font-bold mt-5 mb-2">SHOP</p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-sm py-3 border-b border-white/10 hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 bg-brand-gold text-brand-navy text-xs font-bold tracking-widest px-6 py-3 text-center"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
