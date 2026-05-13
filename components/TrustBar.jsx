const ITEMS = [
  { icon: '📅', text: 'Trading Since 2009' },
  { icon: '📺', text: 'As Seen On Channel 4' },
  { icon: '🔧', text: 'UK Barn Door Hardware Manufacturer' },
  { icon: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', text: 'Handmade In Cardiff' },
]

export default function TrustBar() {
  return (
    <div className="bg-brand-navy border-y border-white/10 py-4">
      <div className="max-w-site mx-auto px-5 xl:px-16 flex flex-wrap justify-center xl:justify-between items-center gap-4">
        {ITEMS.map((item) => (
          <div key={item.text} className="flex items-center gap-2.5">
            <span className="text-brand-gold text-base" aria-hidden="true">{item.icon}</span>
            <span className="text-white text-[11px] font-bold tracking-widest uppercase">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
