import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "About DoorMate | The UK's Only Barn Door Hardware Manufacturer | Cardiff",
  description: "DoorMate was founded by Terry Burnett in Cardiff in 2009. The UK's only bespoke barn door hardware manufacturer. As Seen On George Clarke's Old House New Home — Channel 4.",
}

export default function AboutPage() {
  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-14">
      {/* Header */}
      <div className="mb-12">
        <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">ABOUT DOORMATE</p>
        <h1 className="text-brand-navy text-4xl font-bold mb-4">The UK's Only Bespoke Barn Door Hardware Manufacturer</h1>
        <p className="text-gray-500 max-w-2xl leading-relaxed text-lg">
          Founded by Terry Burnett in Cardiff in 2009. As Seen On George Clarke's Old House New Home — Channel 4.
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <Image src="/img/hero-installed.jpg" alt="DoorMate barn door hardware installed" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-brand-navy text-2xl font-bold mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            <p>DoorMate was founded in Cardiff in 2009 by Terry Burnett. What started as a specialist installer of sliding barn door systems has grown into something unique — the world's only bespoke barn door hardware manufacturer.</p>
            <p>Every system we make is different. Barn door hardware isn't one-size-fits-all — different headroom, different door weights, different opening styles. So we make every kit to the job. That's why every kit is different, and that's why no one else does what we do.</p>
            <p>We've been featured on George Clarke's Old House New Home on Channel 4, and we've installed thousands of systems across the UK — from Victorian terraces in Cardiff to new-build homes in Edinburgh.</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-brand-navy text-2xl font-bold mb-8">Timeline</h2>
        <div className="space-y-6 border-l-2 border-brand-gold pl-8 ml-4">
          {[
            { year: '2009', text: 'Terry Burnett founds DoorMate in Cardiff as a sliding door installation specialist.' },
            { year: '2013', text: 'Launch of the Gainesville range — our flagship single sliding barn door hardware system.' },
            { year: '2015', text: 'First mirror pocket door manufactured — DoorMate becomes the UK\'s only mirror pocket door maker.' },
            { year: '2017', text: 'As Seen On George Clarke\'s Old House New Home — Channel 4.' },
            { year: '2019', text: '10 years trading. Thousands of systems installed across the UK.' },
            { year: '2024', text: 'Full range: barn door hardware, pocket door kits, handmade doors and external kits.' },
          ].map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-10 w-4 h-4 bg-brand-gold rounded-full" />
              <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-1">{item.year}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-navy text-white p-10 text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to discuss your project?</h3>
        <p className="text-white/70 mb-6">Call us on 029 2166 0393 or send us a message.</p>
        <Link href="/contact" className="inline-block bg-brand-gold text-brand-navy text-sm font-bold tracking-widest px-8 py-4 hover:bg-white transition-colors">
          GET IN TOUCH
        </Link>
      </div>
    </div>
  )
}
