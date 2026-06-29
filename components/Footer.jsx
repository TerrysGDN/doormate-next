import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#363557', color: '#ffffff', fontFamily: "'Libre Franklin', sans-serif" }}>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 40px', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '40px', boxSizing: 'border-box' }}>

        {/* Column 1 — Brand */}
        <div>
          <div style={{ marginBottom: '16px' }}>
            <Image
              src="/img/doormate-logo.jpg"
              alt="DoorMate Sliding Door Systems"
              width={140}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p style={{ color: '#ffffff', fontSize: '12px', lineHeight: '1.7', marginBottom: '12px' }}>
            The UK&apos;s Leading Sliding Door Specialists. Pocket doors, barn door hardware, handmade doors and external sliding kits — supplied from Cardiff since 2009.
          </p>
          <p style={{ color: '#efb627', fontSize: '11px', fontWeight: '700', marginBottom: '24px' }}>As Seen On Channel 4</p>
          <p style={{ color: '#ffffff', fontSize: '11px', margin: 0 }}>
            © {new Date().getFullYear()} DoorMate Sliding Door Systems. Cardiff, South Wales.
            {' '}<Link href="/privacy" style={{ color: '#efb627', textDecoration: 'none' }}>Privacy Policy</Link>
            {' | '}<Link href="/terms" style={{ color: '#efb627', textDecoration: 'none' }}>Terms</Link>
          </p>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <span style={{ display: 'block', color: '#efb627', fontSize: '11px', fontWeight: '700', marginBottom: '2px' }}>Phone</span>
              <a href="tel:02921660393" style={{ color: '#ffffff', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>029 2166 0393</a>
            </div>
            <div>
              <span style={{ display: 'block', color: '#efb627', fontSize: '11px', fontWeight: '700', marginBottom: '2px' }}>Email</span>
              <a href="mailto:info@doormate.co.uk" style={{ color: '#ffffff', fontSize: '12px', textDecoration: 'none' }}>info@doormate.co.uk</a>
            </div>
            <div>
              <span style={{ display: 'block', color: '#efb627', fontSize: '11px', fontWeight: '700', marginBottom: '2px' }}>Address</span>
              <span style={{ color: '#ffffff', fontSize: '12px', lineHeight: '1.6' }}>DoorMate Hardware Limited<br />15 Neptune Court<br />Vanguard Way<br />Cardiff CF24 5PJ</span>
            </div>
            <div>
              <span style={{ display: 'block', color: '#efb627', fontSize: '11px', fontWeight: '700', marginBottom: '2px' }}>Hours</span>
              <span style={{ color: '#ffffff', fontSize: '12px' }}>Mon–Sat 09:00–17:00</span>
            </div>
          </div>
        </div>

      </div>

    </footer>
  )
}
