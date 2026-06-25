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

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Door-Mate/100065342387768/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/mate_door',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/doormate_cardiff/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#E1306C"/>
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.8"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="#fff"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/doormate',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@doormate',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#FF0000" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/>
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.co.uk/doormate',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#E60023" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: 'Houzz',
    href: 'https://www.houzz.co.uk/pro/doormate',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#73BA37" aria-hidden="true">
        <path d="M11.5 2L2 8.5V22h7v-7h5v7h7V8.5L11.5 2z"/>
      </svg>
    ),
  },
]

export default function Nav() {
  const [homeOpen, setHomeOpen]           = useState(false)
  const [mobileOpen, setMobileOpen]       = useState(false)
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
    <header style={{ position: 'sticky', top: 0, zIndex: 40, boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>

      {/* ── BAR 1 — WHITE: social icons | logo (centred) | contact + icons ── */}
      <div style={{ background: '#ffffff', minHeight: '140px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', width: '100%', padding: '0 20px' }}>

          {/* Social icons — left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`DoorMate on ${s.label}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Logo — centre column */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Image
              src="/img/doormate-logo-cropped.png"
              alt="DoorMate Sliding Door Systems — Cardiff"
              width={600}
              height={130}
              style={{ height: '130px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Contact + utility icons — right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'flex-end' }}>
            <a
              href="tel:02921660393"
              style={{ color: '#efb627', fontWeight: 'bold', fontSize: '15px', fontFamily: "'Libre Franklin', sans-serif", textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              T. 029 2166 0393
            </a>
            <a
              href="mailto:info@doormate.co.uk"
              style={{ color: '#272446', fontWeight: 'bold', fontSize: '15px', fontFamily: "'Libre Franklin', sans-serif", textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              E. info@doormate.co.uk
            </a>
            {/* Search icon */}
            <button aria-label="Search" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#efb627', padding: 0, display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            {/* Basket icon */}
            <button aria-label="Basket (0 items)" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#efb627', padding: 0, display: 'flex', alignItems: 'center', position: 'relative' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span style={{ position: 'absolute', top: '-6px', right: '-8px', background: '#272446', color: '#ffffff', borderRadius: '999px', fontSize: '10px', fontWeight: 'bold', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>0</span>
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="lg:hidden"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#272446', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="square" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
      </div>

      {/* ── BAR 2 — GOLD: main nav links ── */}
      <nav aria-label="Main navigation" className="hidden lg:block" style={{ background: '#efb627' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>

          {/* HOME with dropdown */}
          <div className="relative" ref={dropdownRef} onMouseEnter={() => setHomeOpen(true)} onMouseLeave={() => setHomeOpen(false)}
            style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href="/"
              style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#272446', fontFamily: "'Libre Franklin', sans-serif", fontWeight: 'bold', fontSize: '16px', textDecoration: 'none', padding: '14px 18px', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              HOME
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true" style={{ transition: 'transform 0.2s', transform: homeOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path strokeLinecap="square" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {homeOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, background: '#272446', minWidth: '200px', zIndex: 50, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                {HOME_DROPDOWN.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setHomeOpen(false)}
                    style={{ display: 'block', padding: '10px 20px', fontSize: '14px', fontWeight: 'bold', fontFamily: "'Libre Franklin', sans-serif", color: '#ffffff', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#efb627'; e.currentTarget.style.color = '#272446' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* White divider */}
          <span style={{ width: '1px', background: 'rgba(255,255,255,0.6)', alignSelf: 'stretch', margin: '8px 0' }} aria-hidden="true" />

          {/* Flat nav links with white dividers between */}
          {NAV_LINKS.flatMap((link, i) => [
            <Link
              key={link.href}
              href={link.href}
              style={{ display: 'flex', alignItems: 'center', color: '#272446', fontFamily: "'Libre Franklin', sans-serif", fontWeight: 'bold', fontSize: '16px', textDecoration: 'none', padding: '14px 18px', whiteSpace: 'nowrap', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {link.label}
            </Link>,
            i < NAV_LINKS.length - 1 && (
              <span key={`sep-${i}`} style={{ width: '1px', background: 'rgba(255,255,255,0.6)', alignSelf: 'stretch', margin: '8px 0' }} aria-hidden="true" />
            ),
          ])}
        </div>
      </nav>



      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <nav aria-label="Mobile navigation" style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ padding: '16px 24px' }}>

            <a href="tel:02921660393" style={{ display: 'block', fontWeight: 'bold', fontSize: '14px', color: '#272446', textDecoration: 'none', paddingBottom: '8px', marginBottom: '8px', borderBottom: '1px solid #f3f4f6', fontFamily: "'Libre Franklin', sans-serif" }}>
              📞 029 2166 0393
            </a>
            <a href="mailto:info@doormate.co.uk" style={{ display: 'block', fontWeight: 'bold', fontSize: '14px', color: '#272446', textDecoration: 'none', paddingBottom: '8px', marginBottom: '8px', borderBottom: '1px solid #f3f4f6', fontFamily: "'Libre Franklin', sans-serif" }}>
              ✉ info@doormate.co.uk
            </a>

            {/* HOME accordion */}
            <div>
              <button
                onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 0', fontWeight: 'bold', fontSize: '14px', color: '#272446', fontFamily: "'Libre Franklin', sans-serif" }}
                aria-expanded={mobileHomeOpen}
              >
                HOME
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true" style={{ transform: mobileHomeOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                  <path strokeLinecap="square" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileHomeOpen && (
                <div style={{ paddingLeft: '16px', paddingBottom: '8px' }}>
                  {HOME_DROPDOWN.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{ display: 'block', padding: '8px 0', fontWeight: 'bold', fontSize: '13px', color: '#272446', textDecoration: 'none', fontFamily: "'Libre Franklin', sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '10px 0', fontWeight: 'bold', fontSize: '14px', color: '#272446', textDecoration: 'none', borderTop: '1px solid #f3f4f6', fontFamily: "'Libre Franklin', sans-serif" }}
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
