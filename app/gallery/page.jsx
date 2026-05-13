import Image from 'next/image'

export const metadata = {
  title: 'Gallery | Real DoorMate Installations Across the UK',
  description: 'Gallery of real DoorMate barn door hardware and sliding door installations across the UK. As Seen On George Clarke\'s Old House New Home — Channel 4.',
}

const GALLERY_IMAGES = [
  { src: '/img/hero-installed.jpg', alt: 'Augusta bi-passing system installed — real customer home' },
  { src: '/img/gainesville-system.jpg', alt: 'Gainesville single sliding system installed' },
  { src: '/img/brooklyn-system.jpg', alt: 'Brooklyn bi-parting system' },
  { src: '/img/brooklyn-system-2.jpg', alt: 'Brooklyn bi-parting — second view' },
  { src: '/img/covington-system.jpg', alt: 'Covington bi-passing system' },
  { src: '/img/covington-system-2.jpg', alt: 'Covington bi-passing — second view' },
  { src: '/img/augusta-system.jpg', alt: 'Augusta double track bi-passing system' },
  { src: '/img/augusta-system-2.jpg', alt: 'Augusta — second view' },
  { src: '/img/detroit-system.jpg', alt: 'Detroit low headroom system' },
  { src: '/img/baltimore-system.jpg', alt: 'Baltimore double bi-parting low headroom' },
  { src: '/img/door-v-brace.jpg', alt: 'Handmade pine V-Brace barn door' },
  { src: '/img/door-double-z-brace.jpg', alt: 'Handmade pine double Z-Brace barn doors' },
  { src: '/img/door-z-brace-mirror.jpg', alt: 'Z-Brace door with mirror' },
  { src: '/img/mirror-pocket-single.jpg', alt: 'Mirror single pocket door — only UK manufacturer' },
  { src: '/img/mirror-pocket-2.jpg', alt: 'Mirror double pocket door' },
]

export default function GalleryPage() {
  return (
    <div className="max-w-site mx-auto px-5 xl:px-16 py-14">
      <div className="mb-10">
        <p className="text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-2">REAL INSTALLATIONS</p>
        <h1 className="text-brand-navy text-4xl font-bold mb-3">Gallery</h1>
        <p className="text-gray-500 max-w-xl leading-relaxed">
          Real DoorMate installations across the UK. Every system you see here was made in our Cardiff workshop. As Seen On George Clarke's Old House New Home — Channel 4.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {GALLERY_IMAGES.map((img) => (
          <div key={img.src} className="relative aspect-square overflow-hidden bg-gray-100 group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
