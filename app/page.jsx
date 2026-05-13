import Image from 'next/image'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import { CATEGORIES } from '@/lib/products'

export const metadata = {
  title: "DoorMate | The UK's Only Barn Door Hardware Manufacturer",
  description: "The UK's only bespoke barn door hardware manufacturer. Handmade in Cardiff since 2009. Barn door hardware, pocket door kits, handmade doors and external sliding kits.",
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 h-[420px] md:h-[560px] lg:h-[640px]">

        {/* Panel 1 – fully open */}
        <div className="relative overflow-hidden">
          <Image
            src="/img/gainesville.png"
            alt="Barn door fully open — Gainesville hardware system"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-brand-navy/60" />
          {/* Text lives on first panel */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-3">
              The UK's Leading Sliding Door Specialists
            </p>
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              The UK's Only Barn Door<br className="hidden md:block" /> Hardware Manufacturer
            </h1>
            <p className="text-white/85 text-sm md:text-base mb-6 border-l-4 border-brand-gold pl-4 max-w-xs">
              Built in Cardiff since 2009. As Seen On Channel 4.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/barn-door-hardware" className="bg-brand-gold text-brand-navy text-xs font-bold tracking-widest px-6 py-3 hover:bg-white transition-colors">
                SHOP HARDWARE
              </Link>
              <Link href="/doors" className="border-2 border-white text-white text-xs font-bold tracking-widest px-6 py-3 hover:bg-white hover:text-brand-navy transition-colors">
                VIEW DOORS
              </Link>
            </div>
          </div>
        </div>

        {/* Panel 2 – half open */}
        <div className="relative overflow-hidden hidden md:block">
          <Image
            src="/img/gainesville-2.png"
            alt="Barn door half open — DoorMate sliding system"
            fill
            className="object-cover"
            priority
            sizes="33vw"
          />
          <div className="absolute inset-0 bg-brand-navy/30" />
          <div className="absolute bottom-0 left-0 right-0 panel-gradient p-6">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase">HALF OPEN</p>
          </div>
        </div>

        {/* Panel 3 – closed / detail */}
        <div className="relative overflow-hidden hidden md:block">
          <Image
            src="/img/gainesville-closeup.png"
            alt="Barn door hardware closeup — DoorMate quality finish"
            fill
            className="object-cover"
            priority
            sizes="33vw"
          />
          <div className="absolute inset-0 bg-brand-navy/20" />
          <div className="absolute bottom-0 left-0 right-0 panel-gradient p-6">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase">CLOSED</p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <TrustBar />

      {/* ── CATEGORY CARDS ───────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-site mx-auto px-5 xl:px-16">
          <div className="mb-10">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">SHOP BY CATEGORY</p>
            <h2 className="text-brand-navy text-3xl font-bold">Find Your Perfect Solution</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group relative overflow-hidden aspect-[4/3] bg-gray-200 block"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-1">{cat.label}</p>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">{cat.name}</h3>
                  {cat.priceFrom && <p className="text-white/70 text-xs">{cat.priceFrom}</p>}
                  <span className="inline-block mt-3 bg-brand-gold text-brand-navy text-[10px] font-bold tracking-widest px-4 py-2 group-hover:bg-white transition-colors">
                    SHOP NOW
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNEL 4 BANNER ─────────────────────────────────── */}
      <section className="bg-brand-navy py-12 border-y border-white/10">
        <div className="max-w-site mx-auto px-5 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="text-brand-gold text-5xl leading-none">📺</div>
            <div>
              <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-1">FEATURED ON</p>
              <h3 className="text-white text-xl font-bold">George Clarke's Old House New Home — Channel 4</h3>
            </div>
          </div>
          <p className="text-white/60 text-sm max-w-sm text-center md:text-left leading-relaxed">
            DoorMate barn door hardware featured on Channel 4 — recognised nationally for craftsmanship and design.
          </p>
          <Link href="/about" className="text-[10px] font-bold tracking-widest text-brand-gold border-b-2 border-brand-gold pb-1 hover:text-white transition-colors whitespace-nowrap">
            OUR STORY
          </Link>
        </div>
      </section>

      {/* ── WHY DOORMATE ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-5 xl:px-16">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">WHY CHOOSE DOORMATE</p>
            <h2 className="text-brand-navy text-3xl font-bold">The World's Only Bespoke Barn Door Hardware Manufacturer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Only UK Manufacturer', body: 'The only bespoke barn door hardware manufacturer in the world. Every system handmade in our Cardiff workshop.' },
              { title: 'As Seen on Channel 4', body: "Featured on George Clarke's Old House New Home — recognised nationally for quality and design excellence." },
              { title: 'Expert Advice', body: 'Not sure which system you need? Our team in Cardiff will talk you through every option. Call 029 2166 0393.' },
              { title: 'Trading Since 2009', body: 'Over 15 years of experience. Thousands of systems installed across the UK.' },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-brand-gold pt-6">
                <h3 className="text-brand-navy font-bold text-base mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
