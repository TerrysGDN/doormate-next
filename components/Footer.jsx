import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">

      {/* Main footer */}
      <div className="max-w-site mx-auto px-5 xl:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div>
          <div className="mb-5">
            <Image
              src="/img/doormate-logo.jpg"
              alt="DoorMate Sliding Door Systems"
              width={140}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-white/60 text-xs leading-relaxed mb-4">
            The UK&apos;s Leading Sliding Door Specialists. Pocket doors, barn door hardware, handmade doors and external sliding kits — supplied from Cardiff since 2009.
          </p>
          <p className="text-brand-gold text-[11px] font-bold">As Seen On Channel 4</p>
        </div>

        {/* Column 2 — Products */}
        <div>
          <h3 className="text-brand-gold text-[13px] font-bold mb-5">Products</h3>
          <ul className="space-y-3 text-xs text-white/70">
            <li><Link href="/pocket-door-kits" className="hover:text-brand-gold transition-colors">Pocket Door Kits</Link></li>
            <li><Link href="/barn-door-hardware" className="hover:text-brand-gold transition-colors">Barn Door Hardware</Link></li>
            <li><Link href="/doors" className="hover:text-brand-gold transition-colors">Handmade Barn Doors</Link></li>
            <li><Link href="/external-sliding-kits" className="hover:text-brand-gold transition-colors">External Sliding Door Kits</Link></li>
            <li><Link href="/internal-sliding-kits" className="hover:text-brand-gold transition-colors">Internal Sliding Door Kits</Link></li>
          </ul>
        </div>

        {/* Column 3 — Company */}
        <div>
          <h3 className="text-brand-gold text-[13px] font-bold mb-5">Company</h3>
          <ul className="space-y-3 text-xs text-white/70">
            <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            <li><Link href="/trade" className="hover:text-brand-gold transition-colors">Trade Accounts</Link></li>
            <li><Link href="/fitters-wanted" className="hover:text-brand-gold transition-colors">Fitters Wanted</Link></li>
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h3 className="text-brand-gold text-[13px] font-bold mb-5">Contact</h3>
          <ul className="space-y-4 text-xs text-white/70">
            <li>
              <span className="block text-white/40 text-[11px] font-bold mb-1">Phone</span>
              <a href="tel:02921660393" className="text-white hover:text-brand-gold transition-colors font-bold text-sm">029 2166 0393</a>
            </li>
            <li>
              <span className="block text-white/40 text-[11px] font-bold mb-1">Email</span>
              <a href="mailto:info@doormate.co.uk" className="hover:text-brand-gold transition-colors">info@doormate.co.uk</a>
            </li>
            <li>
              <span className="block text-white/40 text-[11px] font-bold mb-1">Registered Address</span>
              <span>DoorMate Hardware Limited<br />15 Neptune Court<br />Vanguard Way<br />Cardiff CF24 5PJ</span>
            </li>
            <li>
              <span className="block text-white/40 text-[11px] font-bold mb-1">Hours</span>
              <span>Mon–Sat 09:00–17:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-site mx-auto px-5 xl:px-16 py-5 flex flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} DoorMate Sliding Door Systems. Trading since 2009. Cardiff, South Wales.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
