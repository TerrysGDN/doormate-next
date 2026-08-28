import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Pocket Door Kits UK | Rocket, Eclisse, Coburn & Barrier',
  description: 'Compare complete pocket door kit ranges from Rocket, Eclisse, Coburn and Barrier. DoorMate makes it easier to choose the right system for your door, wall and project.',
  alternates: { canonical: '/pocket-door-kits' },
}

const RANGES = [
  {
    name: 'Rocket',
    logo: '/img/brands/rocket-stacked.jpg',
    href: '/pocket-door-kits/rocket',
    lead: 'A quality pocket door system at a sensible price, with standard, double and fire-rated options.',
  },
  {
    name: 'Eclisse',
    logo: '/img/brands/eclisse-clean.png',
    href: '/pocket-door-kits/eclisse',
    lead: 'The high-end choice, with Classic, flush, glass, fire-rated and telescopic systems.',
  },
  {
    name: 'Coburn',
    logo: '/img/brands/coburn-clean.png',
    href: '/pocket-door-kits/coburn',
    lead: 'Three different pocket door system types: Hideaway, Easyslide and Inserdor.',
  },
  {
    name: 'Barrier',
    logo: '/img/brands/barrier-clean.png',
    href: '/pocket-door-kits/barrier',
    lead: 'A bespoke option for non-standard doors, accommodating doors up to 90kg, 1200mm wide and 2400mm high.',
  },
]

export default function PocketDoorKitsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pocket Door Kits',
    url: 'https://doormate.co.uk/pocket-door-kits',
    description: metadata.description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: RANGES.map((range, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${range.name} Pocket Door Kits`,
        url: `https://doormate.co.uk${range.href}`,
      })),
    },
  }

  return (
    <main className="dm-range-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="dm-range-intro" id="choose-range" aria-labelledby="pocket-heading">
        <div className="dm-section-frame">
          <div className="dm-range-intro-layout">
            <div className="dm-range-intro-heading">
              <h1 className="dm-section-heading" id="pocket-heading">Leading Pocket Door System Manufacturers, <span className="dm-keep-together">Chosen By DoorMate.</span></h1>
              <p>Pocket doors fit easily into modern homes, creating a sleek, space-saving alternative to a hinged swing door. And of course, at DoorMate we had to find and offer the best system options. The metal frame forms and strengthens the pocket inside the wall, allowing the door to disappear when open. All our pocket door kits come with a full manufacturer&apos;s warranty against manufacturing and material defects.</p>
            </div>
            <div className="dm-range-intro-image">
              <Image
                src="/img/Eclisse Images/ECLISSE_SYNTESIS_POCKET/ECL_Syntesis est_LUCE_19.jpg"
                alt="Eclisse double pocket doors connecting a contemporary living room and kitchen"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          </div>

          <div className="dm-pocket-ranges">
            {RANGES.map((range) => (
              <Link className="dm-pocket-range" href={range.href} key={range.name}>
                <span className={`dm-pocket-logo dm-pocket-logo-${range.name.toLowerCase()}`}>
                  <Image src={range.logo} alt={`${range.name} logo`} fill sizes="180px" />
                </span>
                <span className="dm-pocket-range-copy">
                  <strong>{range.name} Pocket Door Kits</strong>
                  <b>{range.lead}</b>
                  <em>Explore {range.name} <span aria-hidden="true">→</span></em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
