import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-site mx-auto px-5 xl:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="text-brand-gold font-bold text-xl mb-4">DoorMate</div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              The UK's Only Barn Door Hardware Manufacturer. Trading since 2009. As Seen On George Clarke's Old House New Home — Channel 4.
            </p>
            <div className="flex gap-3">
              <a href="tel:02921660393" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all" aria-label="Call DoorMate">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              </a>
              <a href="mailto:info@doormate.co.uk" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all" aria-label="Email DoorMate">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-brand-gold text-[10px] tracking-widest font-bold mb-5">PRODUCTS</h4>
            <ul className="space-y-3">
              {[
                ['Barn Door Hardware', '/barn-door-hardware'],
                ['Pocket Door Kits', '/pocket-door-kits'],
                ['Handmade Doors', '/doors'],
                ['External Sliding Kits', '/external-sliding-kits'],
                ['Internal Sliding Kits', '/internal-sliding-kits'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-brand-gold text-[10px] tracking-widest font-bold mb-5">COMPANY</h4>
            <ul className="space-y-3">
              {[
                ['About Us', '/about'],
                ['Gallery', '/gallery'],
                ['Contact Us', '/contact'],
                ['Trade Accounts', '/contact#trade'],
                ['Become A Partner', '/contact#partner'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-gold text-[10px] tracking-widest font-bold mb-5">CONTACT</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Mon–Sat: 9am–5pm</li>
              <li>
                <a href="tel:02921660393" className="hover:text-white transition-colors">029 2166 0393</a>
              </li>
              <li>
                <a href="mailto:info@doormate.co.uk" className="hover:text-white transition-colors">info@doormate.co.uk</a>
              </li>
              <li className="pt-2 text-white/40 text-xs leading-relaxed">
                Cardiff, South Wales<br/>
                Trading since 2009<br/>
                Not VAT registered
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-white/40 text-xs">
            <span>Trading Since 2009</span>
            <span>As Seen On Channel 4</span>
            <span>UK Barn Door Hardware Manufacturer</span>
            <span>Handmade In Cardiff</span>
          </div>
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} DoorMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
