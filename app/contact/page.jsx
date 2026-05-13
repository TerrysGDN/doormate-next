export const metadata = {
  title: 'Contact DoorMate | Cardiff | 029 2166 0393',
  description: 'Contact DoorMate — the UK\'s only bespoke barn door hardware manufacturer. Call 029 2166 0393 or email info@doormate.co.uk. Based in Cardiff, South Wales.',
}

export default function ContactPage() {
  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-14">
      <div className="mb-10">
        <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">GET IN TOUCH</p>
        <h1 className="text-brand-navy text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-500 max-w-xl leading-relaxed">
          Not sure which system you need? Give us a call. We're happy to talk through your project and recommend the right product.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-brand-navy text-xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-navy tracking-widest uppercase mb-2">First Name</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-navy" />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-navy tracking-widest uppercase mb-2">Last Name</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-navy" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-navy tracking-widest uppercase mb-2">Email</label>
              <input type="email" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-navy" />
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-navy tracking-widest uppercase mb-2">Phone</label>
              <input type="tel" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-navy" />
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-navy tracking-widest uppercase mb-2">Product / Enquiry Type</label>
              <select className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-navy bg-white">
                <option value="">Select...</option>
                <option>Barn Door Hardware</option>
                <option>Pocket Door Kits</option>
                <option>Handmade Doors</option>
                <option>External Sliding Kits</option>
                <option>Trade / Partner Enquiry</option>
                <option>General Enquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-navy tracking-widest uppercase mb-2">Message</label>
              <textarea rows={5} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-brand-navy resize-none" placeholder="Tell us about your project — door size, opening type, headroom available..." />
            </div>
            <button type="submit" className="w-full bg-brand-navy text-white text-sm font-bold tracking-widest py-4 hover:bg-brand-gold hover:text-brand-navy transition-colors">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-brand-navy text-xl font-bold mb-5">Contact Details</h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-4 border-b border-gray-100 pb-4">
                <div className="w-8 h-8 bg-brand-gold flex items-center justify-center shrink-0 text-brand-navy font-bold text-sm">📞</div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Phone</p>
                  <a href="tel:02921660393" className="text-brand-navy font-bold text-lg hover:text-brand-gold transition-colors">029 2166 0393</a>
                  <p className="text-gray-400 text-xs mt-1">Mon–Sat: 9am–5pm</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-gray-100 pb-4">
                <div className="w-8 h-8 bg-brand-gold flex items-center justify-center shrink-0 text-brand-navy font-bold text-sm">✉️</div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Email</p>
                  <a href="mailto:info@doormate.co.uk" className="text-brand-navy font-bold hover:text-brand-gold transition-colors">info@doormate.co.uk</a>
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="w-8 h-8 bg-brand-gold flex items-center justify-center shrink-0 text-brand-navy font-bold text-sm">📍</div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Location</p>
                  <p className="text-brand-navy font-bold">Cardiff, South Wales</p>
                  <p className="text-gray-400 text-xs">Trading since 2009</p>
                </div>
              </div>
            </div>
          </div>

          <div id="trade" className="bg-gray-50 border border-gray-200 p-6">
            <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-3">Trade &amp; Partner Enquiries</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              We work with installers, architects, interior designers and merchants. If you're interested in trade pricing or becoming a DoorMate stockist, get in touch.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Trade accounts available</p>
              <p>• Dropshipping options</p>
              <p>• Fitters wanted across the UK</p>
              <p>• Partner / become a reseller</p>
            </div>
          </div>

          <div className="bg-brand-navy text-white p-6">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">DELIVERY</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Delivery to UK mainland: <strong className="text-white">£45.00</strong>. We dispatch all orders within our standard lead time. Contact us for lead times on handmade doors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
