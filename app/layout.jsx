import { Libre_Franklin } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-libre-franklin',
  display: 'swap',
})

export const metadata = {
  title: {
    default: "DoorMate Sliding Door Systems | The UK's Leading Sliding Door Specialists",
    template: '%s | DoorMate Sliding Door Systems',
  },
  description:
    'Cardiff-based sliding door specialists trading since 2009. Complete pocket door, internal and external sliding systems, British-made barn door hardware and handmade doors.',
  keywords: [
    'pocket door kits',
    'sliding door systems',
    'internal sliding door kits',
    'external sliding door kits',
    'barn door hardware',
    'handmade barn doors',
    'sliding doors Cardiff',
    'sliding door specialists UK',
  ],
  openGraph: {
    title: "DoorMate Sliding Door Systems | The UK's Leading Sliding Door Specialists",
    description:
      'Cardiff-based sliding door specialists trading since 2009. Complete pocket door, internal and external sliding systems, British-made barn door hardware and handmade doors.',
    type: 'website',
    url: 'https://doormate.co.uk',
    siteName: 'DoorMate Sliding Door Systems',
    locale: 'en_GB',
  },
  metadataBase: new URL('https://doormate.co.uk'),
}

// Schema.org JSON-LD — Organization + LocalBusiness
const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://doormate.co.uk/#organization',
      name: 'DoorMate Sliding Door Systems',
      legalName: 'DoorMate Hardware Limited',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'UK Companies House',
        value: '14868587',
      },
      url: 'https://doormate.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://doormate.co.uk/img/doormate-logo-cropped.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '02921660393',
        contactType: 'customer service',
        email: 'info@doormate.co.uk',
        availableLanguage: 'English',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      knowsAbout: [
        'Pocket door systems',
        'Internal sliding door systems',
        'External sliding door systems',
        'Barn door hardware',
        'Handmade sliding doors',
        'Sliding door installation',
      ],
      sameAs: [
        'https://www.facebook.com/people/Door-Mate/100065342387768/',
        'https://www.instagram.com/doormate_cardiff/',
        'https://www.youtube.com/channel/UCiVCUZ4T_FR4SLo81Ecuzpw',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'DoorMate Sliding Door Systems',
        itemListElement: [
          { '@type': 'OfferCatalog', name: 'Pocket Door Systems', url: 'https://doormate.co.uk/pocket-door-kits' },
          { '@type': 'OfferCatalog', name: 'Internal Sliding Door Systems', url: 'https://doormate.co.uk/internal-sliding-kits' },
          { '@type': 'OfferCatalog', name: 'External Sliding Door Systems', url: 'https://doormate.co.uk/external-sliding-kits' },
          { '@type': 'OfferCatalog', name: 'Barn Door Hardware', url: 'https://doormate.co.uk/barn-door-hardware' },
          { '@type': 'OfferCatalog', name: 'Handmade Sliding Doors', url: 'https://doormate.co.uk/doors' },
          { '@type': 'OfferCatalog', name: 'Sliding Door Accessories and Hardware', url: 'https://www.barn-doors.co.uk/shop' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://doormate.co.uk/#localbusiness',
      name: 'DoorMate Sliding Door Systems',
      url: 'https://doormate.co.uk',
      telephone: '02921660393',
      email: 'info@doormate.co.uk',
      image: 'https://doormate.co.uk/img/doormate-logo-cropped.png',
      priceRange: '££',
      description:
        'Cardiff-based sliding door specialists trading since 2009. DoorMate supplies complete pocket door, internal and external sliding systems and manufactures British-made barn door hardware and handmade doors.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rear of 216 Newport Rd',
        addressLocality: 'Cardiff',
        addressRegion: 'Wales',
        postalCode: 'CF24 1DN',
        addressCountry: 'GB',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:30',
          closes: '17:00',
        },
      ],
      founder: {
        '@type': 'Person',
        name: 'Terry Burnett',
      },
      foundingDate: '2009',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://doormate.co.uk/#website',
      url: 'https://doormate.co.uk',
      name: 'DoorMate Sliding Door Systems',
      publisher: { '@id': 'https://doormate.co.uk/#organization' },
      inLanguage: 'en-GB',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={libreFranklin.variable} style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <a className="dm-skip-link" href="#main-content">Skip to main content</a>
        <Nav />
        <main id="main-content" tabIndex="-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
