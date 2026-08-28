import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel'

async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) return { reviews: [], rating: null, total: null }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    )
    const data = await response.json()
    if (data.status !== 'OK' || !data.result) return { reviews: [], rating: null, total: null }
    return {
      rating: data.result.rating,
      total: data.result.user_ratings_total,
      reviews: (data.result.reviews || []).map((review) => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
      })),
    }
  } catch {
    return { reviews: [], rating: null, total: null }
  }
}

export const metadata = {
  title: 'DoorMate Sliding Door Systems | Pocket Doors, Sliding Kits & Barn Door Hardware Cardiff',
  description: 'Buy complete pocket door kits, internal and external sliding door systems, British-made barn door hardware and handmade doors from DoorMate, Cardiff. Sliding door specialists since 2009.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'DoorMate Sliding Door Systems | Pocket Doors, Sliding Kits & Barn Door Hardware Cardiff',
    description: 'Buy complete pocket door kits, internal and external sliding door systems, British-made barn door hardware and handmade doors from DoorMate, Cardiff. Sliding door specialists since 2009.',
    type: 'website',
    url: 'https://doormate.co.uk',
  },
}

const BRANDS = [
  { key: 'barrier', name: 'Barrier Components' },
  { key: 'coburn', name: 'Coburn Sliding Systems' },
  { key: 'eclisse', name: 'Eclisse' },
  { key: 'rocket', name: 'Rocket Door Frames' },
  { key: 'jbkind', name: 'JB Kind Doors', file: 'jbkind.png' },
  { key: 'fhbrundle', name: 'F H Brundle' },
  { key: 'charlesday', name: 'Charles Day' },
  { key: 'titus', name: 'Titus' },
  { key: 'rtbearings', name: 'RT Bearings' },
]
const HOME_CATALOGUE = [
  { name: 'Pocket Door Systems', url: '/pocket-door-kits', description: 'Complete pocket door kits and mirror pocket door systems for internal walls.' },
  { name: 'Internal Sliding Door Systems', url: '/internal-sliding-kits', description: 'Internal sliding systems for timber, steel and glass doors.' },
  { name: 'External Sliding Door Systems', url: '/external-sliding-kits', description: 'Weather-resistant sliding door kits for garages, outbuildings and agricultural buildings.' },
  { name: 'Handmade Sliding Doors', url: '/doors', description: 'Made-to-measure timber sliding doors handmade in Cardiff.' },
  { name: 'British-Made Barn Door Hardware', url: '/barn-door-hardware', description: 'DoorMate barn door hardware systems manufactured in Cardiff.' },
  { name: 'Sliding Door Accessories and Hardware', url: 'https://www.barn-doors.co.uk/shop', description: 'Sliding door accessories, fittings and replacement hardware.' },
]
const TERMINOLOGY = [
  'Single Pocket Door Kits', 'Double Pocket Door Kits', 'Fire Rated Pocket Door Kits', 'Glass Pocket Door Systems',
  'Timber Door Kits', 'Wiring-Ready Pocket Door Systems', 'Top Mounted Sliding Systems', 'Face Mounted Track Brackets',
  'Sliding Barn Door Kits', 'Double Bi-Passing Track Systems', 'Bi-Directional Soft-Close Mechanisms', 'Anti-Slam Devices',
  'Self Closing Devices', 'Double Door Synchronisation Kits', 'Telescopic Synchronisation Kits', 'Co-Ordination Kits',
  'Track Stops', 'Recessed Pull Handles', 'Flush Pull Handles', 'Pull Bar Handles', 'Flush Handle Sets',
  'Ceiling Fix Brackets', 'Soffit Fix Track', 'Face Fix Brackets', 'Hanging Brackets', 'Wall Fixing Kits',
  'Track End Caps', 'Dual Wheel Hangers', 'Heavy Duty Hangers', 'Load Bearing Trolleys', 'Trolley Assemblies',
  'Drop Down Seals', 'Brush Seals', 'Compression Seals', 'Intumescent Strips', 'Steel Frame Kits',
  'Telescopic Floor Guides', 'Door End Caps', 'Touch Latch', 'End Stops', 'Door Stops', 'Track Joining Kits',
  'Jointing Sleeves', 'Guide Packs', 'Fittings Packs',
]
const CLOUD_TERMS = Array.from(
  { length: TERMINOLOGY.length * 6 },
  (_, index) => TERMINOLOGY[((index * 17) + (Math.floor(index / TERMINOLOGY.length) * 11)) % TERMINOLOGY.length]
)

function GoogleMark() {
  return (
    <svg className="dm-platform-logo" viewBox="0 0 48 48" role="img" aria-label="Google">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  )
}

export default async function HomePage() {
  const { reviews, rating, total } = await getGoogleReviews()
  const placeId = process.env.GOOGLE_PLACE_ID
  const reviewUrl = placeId ? `https://search.google.com/local/writereview?placeid=${placeId}` : null
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://doormate.co.uk/#homepage',
    url: 'https://doormate.co.uk/',
    name: "DoorMate — The UK's Leading Sliding Door Specialists",
    description: metadata.description,
    inLanguage: 'en-GB',
    isPartOf: { '@id': 'https://doormate.co.uk/#website' },
    about: { '@id': 'https://doormate.co.uk/#organization' },
    mainEntity: {
      '@type': 'ItemList',
      name: 'DoorMate Sliding Door Systems',
      numberOfItems: HOME_CATALOGUE.length,
      itemListElement: HOME_CATALOGUE.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CollectionPage',
          name: item.name,
          description: item.description,
          url: item.url.startsWith('http') ? item.url : `https://doormate.co.uk${item.url}`,
        },
      })),
    },
  }

  return (
    <div className="recovery-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <HeroCarousel />

      <section className="dm-trust" aria-label="Customer trust indicators">
        <div className="dm-trust-inner">
          <div className="dm-trust-item"><img className="dm-platform-logo" src="https://cdn.simpleicons.org/channel4/000000" alt="Channel 4" /><strong>As Seen On Channel 4</strong></div>
          <div className="dm-trust-item"><GoogleMark /><strong>Google</strong><b>4.8</b><span className="dm-stars">★★★★★</span></div>
          <div className="dm-trust-item"><img className="dm-platform-logo" src="https://cdn.simpleicons.org/trustpilot/00B67A" alt="Trustpilot" /><strong>Trustpilot</strong><b>4.5</b><span className="dm-stars">★★★★½</span></div>
          <div className="dm-trust-item"><img className="dm-platform-logo" src="https://cdn.simpleicons.org/houzz/4DBC15" alt="Houzz" /><strong>Houzz</strong><b>5.0</b><span className="dm-stars">★★★★★</span></div>
        </div>
      </section>

      <section className="dm-reviews" aria-labelledby="reviews-heading">
        <div className="dm-section-frame">
          <div className="dm-reviews-layout">
            <div className="dm-section-copy dm-reviews-copy">
              <h2 className="dm-section-heading dm-reviews-heading" id="reviews-heading">Why Real Reviews Matter</h2>
              <p>Every project starts with a little research, and genuine customer reviews are one of the best ways to understand the company you&apos;re buying from. They give you an honest picture of the people behind the business and the quality of the products they supply.</p>
              <p>Reviews matter just as much to us. A great review tells us we&apos;re doing things right. A less positive one tells us where we can do better. Both help us improve.</p>
              <p>So whether you buy from DoorMate or somewhere else, if you&apos;ve had a good experience, take a minute to leave a review. It helps good businesses grow and gives the next customer the confidence to make the right choice.</p>
            </div>

            <div className="dm-review-proof">
            <div className="dm-review-card">
              <div className="dm-review-heading"><span className="dm-houzz">H</span><strong>5.0</strong><span className="dm-stars">★★★★★</span></div>
              <iframe scrolling="no" frameBorder="0" width="300" height="430" src="https://www.houzz.com/reviewWidget/terryburnett98/" title="DoorMate reviews on Houzz" />
            </div>
            <div className="dm-review-card">
              <div className="dm-review-heading"><span className="dm-google">G</span><strong>{rating ? rating.toFixed(1) : '4.8'}</strong><span className="dm-stars">★★★★★</span></div>
              <GoogleReviewsCarousel reviews={reviews} rating={rating} totalReviews={total} reviewUrl={reviewUrl} />
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dm-manufacturing" aria-labelledby="manufacturing-heading">
        <div className="dm-section-frame dm-manufacturing-layout">
          <div className="dm-manufacturing-image">
            <Image src="/img/real-manufacturers-image.jpg" alt="Precision manufacturing of sliding door hardware components" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="dm-section-copy dm-manufacturing-copy">
            <h2 className="dm-section-heading" id="manufacturing-heading">Real UK Manufacturers.<br />Real Systems<br />Delivered Direct To You.</h2>
            <p>DoorMate are based in Cardiff, South Wales — manufacturing and supplying sliding door systems since 2009. While our competitors are simply importing boxes of hardware, sat in warehouses with sales staff and warehouse workers loading the vans, we manufacture our own systems alongside handmade barn doors, mirror pocket doors and the widest range of pocket door kits, internal and external sliding systems.</p>
            <p>Every system we sell is backed by real industry knowledge, clear fitting guidance and direct support from the people who actually make them.</p>
            <p className="dm-manufacturing-line">We Are Manufacturers, Suppliers &amp; Installers<br />of Quality Door Products</p>
          </div>
        </div>
      </section>

      <section className="dm-solutions" aria-labelledby="solutions-heading">
        <div className="dm-terminology" aria-hidden="true">
          {CLOUD_TERMS.map((term, index) => <span key={`${index}-${term}`}>{term}</span>)}
        </div>
        <div className="dm-section-frame dm-relief-content">
          <div className="dm-solutions-copy">
            <h2 className="dm-section-heading" id="solutions-heading">Complete Sliding Door Solutions</h2>
            <div className="dm-reality-row" aria-label="Designed for real homes, real doors and real walls">
              <div><span className="dm-reality-icon dm-home-icon" aria-hidden="true" /><strong>Real homes</strong></div>
              <div><span className="dm-reality-icon dm-door-icon" aria-hidden="true" /><strong>Real doors</strong></div>
              <div><span className="dm-reality-icon dm-wall-icon" aria-hidden="true" /><strong>Real walls</strong></div>
            </div>
            <div className="dm-relief-explanation">
              <p>Choosing a sliding door system shouldn&apos;t be difficult.</p>
              <p>That&apos;s why we&apos;ve made it easy to find the right solution for your project.</p>
              <p>We organise our systems around real-world applications.</p>
            </div>
            <div className="dm-relief-answer">
              <p className="dm-relief-lead">You don&apos;t need to be an expert.</p>
              <p className="dm-solution-answer">We&apos;ve already done the thinking for you.</p>
            </div>
            <p className="dm-relief-close">Simply choose your system. Let&apos;s get this project done!</p>
          </div>
        </div>
      </section>

      <section className="dm-brands" aria-labelledby="brands-heading">
        <div className="dm-section-frame">
          <h2 className="dm-brands-heading" id="brands-heading">Brands We Work With</h2>
        </div>
        <div className="dm-brand-viewport">
          <div className="dm-brand-track">
            {[0, 1].map((group) => (
              <div className="dm-brand-group" aria-hidden={group === 1 ? 'true' : undefined} key={group}>
                {BRANDS.map((brand) => (
                  <span className={`dm-brand-item dm-brand-${brand.key}`} key={`${group}-${brand.key}`}>
                    <img src={`/img/brands/${brand.file || `${brand.key}-clean.png`}`} alt={group === 0 ? `${brand.name} logo` : ''} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dm-story" aria-labelledby="story-heading">
        <div className="dm-section-frame dm-story-layout">
          <div className="dm-story-introduction">
            <p className="dm-story-label">Our Story</p>
            <h2 id="story-heading"><span>Door</span><span>Mate</span></h2>
            <dl className="dm-story-definition">
              <div><dt>door <span>/dɔː/</span> <em>noun</em></dt><dd>a movable barrier that opens or closes an entrance</dd></div>
              <div><dt>mate <span>/meɪt/</span> <em>noun</em></dt><dd>a friend; someone who helps a skilled worker</dd></div>
            </dl>
            <p className="dm-story-idea">The name was always the idea.</p>
          </div>
          <div className="dm-story-copy">
            <p>After years in the industrial-door trade, Terry could see its basic problem: it wasn&apos;t customer-centred. Suppliers, competitors and even steel suppliers often behaved as though the customer was an inconvenience. He believed an industrial-door company offering the friendly, old-fashioned service people used to take for granted would be a winner. So, in 2009, he started one: DoorMate.</p>
            <p>For the next few years, DoorMate sold, fitted and repaired industrial doors, automatic doors, roller shutters and garage doors, handling repairs for major brands up and down Cardiff&apos;s high streets on behalf of national maintenance companies.</p>
            <p>Around 2013, Terry used workshop space at his former boss&apos;s factory to test an idea for a new sliding barn-door system. The idea worked. At a time when almost all barn-door hardware sold in Britain was imported from China, DoorMate became the UK&apos;s only manufacturer—and orders followed. With no workshop of his own, Terry worked from home and out of his Transit van until growing demand made dedicated premises essential. DoorMate opened its Cardiff workshop in 2015. The original system became the foundation for something much broader: pocket-door kits, internal and external sliding systems, doors and hardware for many different applications. DoorMate had grown from one good idea into today&apos;s complete sliding-door systems company.</p>
            <Link href="/about">Read the full DoorMate story <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
