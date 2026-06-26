'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/img/slide-1.jpg', alt: 'Heavy duty sliding barn door kits — single, double, bi-passing and round-the-corner options — DoorMate' },
  { src: '/img/slide-2.jpg', alt: 'Brand new internal sliding door kits for timber, steel and glass doors — DoorMate Cardiff' },
  { src: '/img/slide-3.jpg', alt: "DoorMate products featured on George Clarke's Old House New Home, Channel 4, Series 8 Episode 3" },
  { src: '/img/slide-4.jpg', alt: 'Pocket door kits — the ultimate space saver — DoorMate Cardiff' },
  { src: '/img/slide-5.jpg', alt: 'Made-to-measure bespoke handmade barn doors — DoorMate Cardiff workshop' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ position: 'relative', width: '100%', maxWidth: '1400px', margin: '0 auto', height: 'clamp(300px, 42vh, 500px)', overflow: 'hidden' }}>
      {IMAGES.map((img, i) => (
        <div
          key={img.src}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={i === 0}
          />
        </div>
      ))}
    </section>
  )
}
