import Image from 'next/image'
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
  description: 'Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Cardiff-based sliding door specialists since 2009. As Seen On Channel 4.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'DoorMate Sliding Door Systems | Pocket Doors, Sliding Kits & Barn Door Hardware Cardiff',
    description: 'Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Cardiff-based sliding door specialists since 2009. As Seen On Channel 4.',
    type: 'website',
    url: 'https://doormate.co.uk',
  },
}

const BRANDS = ['barrier', 'coburn', 'eclisse', 'rocket', 'jbkind', 'fhbrundle', 'charlesday', 'titus', 'rtbearings']
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
  { length: TERMINOLOGY.length * 3 },
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

  return (
    <div className="recovery-home">
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
              <h2 className="dm-reviews-heading" id="reviews-heading">Why Real Reviews Matter</h2>
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
            <h2 id="manufacturing-heading">Real UK Manufacturers.<br />Real Systems<br />Delivered Direct To You.</h2>
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
            <h2 id="solutions-heading">We Offer Complete Sliding Door Solutions</h2>
            <div className="dm-reality-row" aria-label="Designed for real homes, real doors and real walls">
              <div><span className="dm-reality-icon dm-home-icon" aria-hidden="true" /><strong>Real homes</strong></div>
              <div><span className="dm-reality-icon dm-door-icon" aria-hidden="true" /><strong>Real doors</strong></div>
              <div><span className="dm-reality-icon dm-wall-icon" aria-hidden="true" /><strong>Real walls</strong></div>
            </div>
            <div className="dm-relief-explanation">
              <p>Choosing a sliding door system shouldn&apos;t be difficult.</p>
              <p>That&apos;s why we&apos;ve made it easy to find the right solution for your project.</p>
              <p>Our systems are organised around real-world applications.</p>
            </div>
            <div className="dm-relief-answer">
              <p className="dm-solution-answer">We&apos;ve already done the thinking for you.</p>
            </div>
            <p className="dm-relief-close">Simply choose your system. Let&apos;s get this project done!</p>
          </div>
        </div>
      </section>

      <section className="dm-brands" aria-labelledby="brands-heading">
        <div className="dm-section-frame">
          <h2 id="brands-heading">Brands We Work With</h2>
          <div className="dm-brand-list">
            {BRANDS.map((brand) => (
              <img key={brand} src={`/img/brands/${brand}.${brand === 'eclisse' || brand === 'rtbearings' ? 'jpg' : 'png'}`} alt={brand} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
