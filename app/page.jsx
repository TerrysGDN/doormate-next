import Image from 'next/image'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'

export const metadata = {
  title: "DoorMate Sliding Door Systems | The UK's Leading Sliding Door Specialists",
  description:
    'Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Supplied and manufactured in Cardiff since 2009. As Seen On Channel 4.',
}

// ── Category cards — ordered per brief ───────────────────────────────────────
const CATEGORY_CARDS = [
  {
    slug: 'pocket-door-kits',
    name: 'Pocket Door Kits',
    label: 'ONLY UK MIRROR MAKER',
    priceFrom: 'from £117.60',
    image: '/img/coburn-kit.jpg',
    alt: 'Pocket door kit — door disappears into the wall',
  },
  {
    slug: 'internal-sliding-kits',
    name: 'Internal Sliding Door Kits',
    label: 'COMING SOON',
    priceFrom: null,
    image: '/img/hero-installed.jpg',
    alt: 'Internal sliding door kit installed',
  },
  {
    slug: 'external-sliding-kits',
    name: 'External Sliding Door Kits',
    label: 'OUTBUILDINGS & GARAGES',
    priceFrom: 'from £104.00',
    image: '/img/dm-75.jpg',
    alt: 'External sliding door kit for outbuildings and garages',
  },
  {
    slug: 'doors',
    name: 'Handmade Barn Doors',
    label: 'HANDMADE IN CARDIFF',
    priceFrom: 'from £527',
    image: '/img/door-v-brace.jpg',
    alt: 'Handmade pine barn door — V-brace design, made in Cardiff',
  },
  {
    slug: 'barn-door-hardware',
    name: 'Barn Door Hardware',
    label: 'UK MANUFACTURED',
    priceFrom: 'from £150.00',
    image: '/img/gainesville-system.jpg',
    alt: 'Gainesville barn door hardware system — UK manufactured in Cardiff',
  },
  {
    slug: 'shop',
    name: 'Shop All Products',
    label: 'BROWSE EVERYTHING',
    priceFrom: null,
    image: '/img/hero-installed.jpg',
    alt: 'DoorMate sliding door systems — browse all products',
  },
]

// ── Placeholder client logos (6 grey boxes until real logos supplied) ─────────
const LOGO_PLACEHOLDERS = [
  'Houzz',
  'Channel 4',
  'Grand Designs',
  'Rated People',
  'Trustpilot',
  'Checkatrade',
]

// ── Reviews ───────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Cardiff',
    stars: 5,
    text: 'Fantastic service from start to finish. Terry walked us through the whole system over the phone. The hardware arrived quickly and looks absolutely stunning in our hallway.',
  },
  {
    name: 'James T.',
    location: 'Bristol',
    stars: 5,
    text: 'Really impressed. We went for the Brooklyn bi-parting system for our kitchen diner opening. The quality is outstanding — feels like it will last a lifetime.',
  },
  {
    name: 'Louise K.',
    location: 'London',
    stars: 5,
    text: 'I found DoorMate on Houzz after searching for ages. Best decision I made — they are the real deal. Expert advice, proper UK-made hardware, and a great result.',
  },
]

// ── Stars SVG ─────────────────────────────────────────────────────────────────
function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden h-[520px] md:h-[620px] lg:h-[700px]">
        {/* Background image */}
        <Image
          src="/img/hero-installed.jpg"
          alt="DoorMate sliding door system installed in a home"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Navy gradient — left-heavy so text stays legible */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Hero content */}
        <div className="relative z-10 max-w-site mx-auto px-5 xl:px-16 h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-4">
              As Seen On George Clarke&apos;s Old House New Home — Channel 4
            </p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              The UK&apos;s Leading<br className="hidden sm:block" /> Sliding Door Specialists
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 border-l-4 border-brand-gold pl-4 leading-relaxed">
              Built for real doors, real walls and real homes since 2009
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pocket-door-kits"
                className="bg-brand-gold text-brand-navy text-[11px] font-bold tracking-widest px-8 py-4 hover:bg-white transition-colors"
              >
                BUY NOW
              </Link>
              <Link
                href="/contact"
                className="bg-brand-navy border-2 border-white text-white text-[11px] font-bold tracking-widest px-8 py-4 hover:bg-white hover:text-brand-navy transition-colors"
              >
                GET ADVICE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <TrustBar />

      {/* ═══════════════════════════════════════════════════════════════════
          REVIEWS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-site mx-auto px-5 xl:px-16">
          <div className="text-center mb-10">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">CUSTOMER REVIEWS</p>
            <h2 className="text-white text-3xl font-bold">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {REVIEWS.map((review) => (
              <div key={review.name} className="bg-white/5 border border-white/10 p-6">
                <StarRating count={review.stars} />
                <p className="text-white/80 text-sm leading-relaxed mb-5 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-bold text-xs">{review.name}</p>
                  <p className="text-white/40 text-xs">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Houzz callout */}
          <div className="text-center">
            <p className="text-white/50 text-xs leading-relaxed max-w-md mx-auto">
              Find more DoorMate reviews on{' '}
              <a
                href="https://www.houzz.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:underline"
              >
                Houzz
              </a>{' '}
              — the home improvement community used by thousands of UK homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CATEGORY CARDS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-site mx-auto px-5 xl:px-16">
          <div className="mb-10">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">SHOP BY CATEGORY</p>
            <h2 className="text-brand-navy text-3xl font-bold">Find Your Perfect Solution</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORY_CARDS.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group relative overflow-hidden aspect-[4/3] bg-gray-200 block"
              >
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-1">{cat.label}</p>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">{cat.name}</h3>
                  {cat.priceFrom && (
                    <p className="text-white/70 text-xs">{cat.priceFrom}</p>
                  )}
                  <span className="inline-block mt-3 bg-brand-gold text-brand-navy text-[10px] font-bold tracking-widest px-4 py-2 group-hover:bg-white transition-colors">
                    BUY NOW
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SCROLLING CLIENT LOGO BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-site mx-auto px-5 xl:px-16 mb-5 text-center">
          <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">Featured &amp; Reviewed By</p>
        </div>
        <div className="relative overflow-hidden">
          {/* Double the list so the scroll loop is seamless */}
          <div className="flex animate-logo-scroll whitespace-nowrap">
            {[...LOGO_PLACEHOLDERS, ...LOGO_PLACEHOLDERS].map((name, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-6 w-36 h-14 bg-gray-100 flex-shrink-0"
              >
                <span className="text-gray-400 text-xs font-bold tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CREDIBILITY — 4 columns, navy bg
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-site mx-auto px-5 xl:px-16">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">WHY CHOOSE DOORMATE</p>
            <h2 className="text-white text-3xl font-bold">Built on Expertise. Backed by Experience.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Only Bespoke Barn Door Hardware Manufacturer',
                body: 'The only manufacturer in the world making bespoke barn door hardware. Every system built to order in our Cardiff workshop.',
              },
              {
                title: 'As Seen On Channel 4',
                body: "Featured on George Clarke's Old House New Home — recognised nationally for quality craftsmanship and design excellence.",
              },
              {
                title: 'Expert Advice',
                body: "Not sure which system you need? Our Cardiff team will walk you through every option. Call 029 2166 0393 — Mon–Sat 9–5.",
              },
              {
                title: 'Trading Since 2009',
                body: 'Over 15 years of experience. Thousands of sliding door systems installed across the UK, from Cardiff homes to TV projects.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-brand-gold pt-6">
                <h3 className="text-white font-bold text-sm mb-3 leading-snug">{item.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CHANNEL 4 BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-site mx-auto px-5 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            {/* TV icon placeholder */}
            <div className="w-16 h-16 bg-brand-navy flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="square" d="M15 10l4.553-2.069A1 1 0 0121 8.82V15a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-1">FEATURED ON</p>
              <h3 className="text-brand-navy text-xl font-bold leading-snug">
                George Clarke&apos;s Old House New Home
              </h3>
              <p className="text-gray-500 text-sm">Channel 4</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm max-w-sm text-center md:text-left leading-relaxed">
            DoorMate barn door hardware featured on national television — recognised for craftsmanship, design and innovation.
          </p>
          <Link
            href="/about"
            className="text-[11px] font-bold tracking-widest text-brand-navy border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors whitespace-nowrap"
          >
            OUR STORY
          </Link>
        </div>
      </section>

    </>
  )
}
