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
    default: "DoorMate | The UK's Only Barn Door Hardware Manufacturer",
    template: '%s | DoorMate',
  },
  description: "DoorMate — The UK's only bespoke barn door hardware manufacturer. Handmade in Cardiff since 2009. As Seen On George Clarke's Old House New Home — Channel 4.",
  keywords: ['barn door hardware', 'sliding door hardware', 'pocket door kits', 'barn doors Cardiff', 'sliding doors UK'],
  openGraph: {
    siteName: 'DoorMate',
    locale: 'en_GB',
    type: 'website',
  },
  metadataBase: new URL('https://doormate.co.uk'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={libreFranklin.variable}>
      <body className="bg-white text-gray-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
