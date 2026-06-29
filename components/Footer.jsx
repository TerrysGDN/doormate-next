import Link from 'next/link'
import Image from 'next/image'

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/people/Door-Mate/100065342387768/', color: '#1877F2', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
  { label: 'X', href: 'https://x.com/mate_door', color: '#ffffff', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
  { label: 'Instagram', href: 'https://www.instagram.com/doormate_cardiff/', color: '#E1306C', icon: <><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></> },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCiVCUZ4T_FR4SLo81Ecuzpw', color: '#FF0000', icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/terry-burnett-a74474116/', color: '#0A66C2', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
  { label: 'Pinterest', href: 'https://www.pinterest.co.uk/burnett7776/boards/', color: '#E60023', icon: <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/> },
]

export default function Footer() {
  return (
    <footer style={{ background: '#363557', color: '#ffffff', fontFamily: "'Libre Franklin', sans-serif" }}>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 40px 20px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '40px', boxSizing: 'border-box' }}>

        {/* Column 1 — Brand + Socials */}
        <div>
          <div style={{ marginBottom: '14px' }}>
            <Image src="/img/doormate-logo.jpg" alt="DoorMate Sliding Door Systems" width={140} height={50} style={{ objectFit: 'contain' }} />
          </div>
<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill={s.color} xmlns="http://www.w3.org/2000/svg">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Products */}
        <div>
          <h3 style={{ color: '#efb627', fontSize: '13px', fontWeight: '700', marginBottom: '16px' }}>Products</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link href="/pocket-door-kits" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>Pocket Door Kits</Link></li>
            <li><Link href="/barn-door-hardware" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>Barn Door Hardware</Link></li>
            <li><Link href="/doors" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>Handmade Barn Doors</Link></li>
            <li><Link href="/external-sliding-kits" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>External Sliding Door Kits</Link></li>
            <li><Link href="/internal-sliding-kits" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>Internal Sliding Door Kits</Link></li>
          </ul>
        </div>

        {/* Column 3 — Company */}
        <div>
          <h3 style={{ color: '#efb627', fontSize: '13px', fontWeight: '700', marginBottom: '16px' }}>Company</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link href="/about" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link href="/gallery" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>Gallery</Link></li>
            <li><Link href="/contact" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>Contact Us</Link></li>
            <li><Link href="/trade" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>Trade Accounts</Link></li>
            <li><Link href="/fitters-wanted" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>Fitters Wanted</Link></li>
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h3 style={{ color: '#efb627', fontSize: '13px', fontWeight: '700', marginBottom: '16px' }}>Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="tel:02921660393" style={{ color: '#ffffff', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>029 2166 0393</a>
            <a href="mailto:info@doormate.co.uk" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>info@doormate.co.uk</a>
            <span style={{ color: '#ffffff', fontSize: '12px', lineHeight: '1.6' }}>15 Neptune Court, Vanguard Way<br />Cardiff CF24 5PJ</span>
            <span style={{ color: '#ffffff', fontSize: '12px' }}>Mon–Sat 09:00–17:00</span>
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '12px 40px', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
        <p style={{ color: '#ffffff', fontSize: '11px', margin: 0 }}>© {new Date().getFullYear()} DoorMate Sliding Door Systems. Trading since 2009. Cardiff, South Wales.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link href="/privacy" style={{ color: '#efb627', fontSize: '11px', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#efb627', fontSize: '11px', textDecoration: 'none' }}>Terms</Link>
        </div>
      </div>

    </footer>
  )
}
