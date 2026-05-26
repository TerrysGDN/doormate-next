import { Libre_Franklin } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ChatbotPlaceholder from '@/components/ChatbotPlaceholder'
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
    'Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Supplied and manufactured in Cardiff since 2009. As Seen On Channel 4.',
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
      'Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Supplied and manufactured in Cardiff since 2009. As Seen On Channel 4.',
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
      url: 'https://doormate.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://doormate.co.uk/img/doormate-logo.jpg',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '02921660393',
        contactType: 'customer service',
        email: 'info@doormate.co.uk',
        availableLanguage: 'English',
      },
      sameAs: [],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://doormate.co.uk/#localbusiness',
      name: 'DoorMate Sliding Door Systems',
      url: 'https://doormate.co.uk',
      telephone: '02921660393',
      email: 'info@doormate.co.uk',
      image: 'https://doormate.co.uk/img/doormate-logo.jpg',
      priceRange: '££',
      description:
        'The UK\'s leading sliding door specialists. Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Supplied and manufactured in Cardiff since 2009.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cardiff',
        addressRegion: 'South Wales',
        addressCountry: 'UK',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      founder: {
        '@type': 'Person',
        name: 'Terry Burnett',
      },
      foundingDate: '2009',
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
      <body className="bg-white text-gray-900 antialiased" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* REAL CHATBOT WIRED IN SEPARATELY */}
        <ChatbotPlaceholder />
      </body>
    </html>
  )
}
