'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/img/slide-1.jpg', alt: 'Heavy duty sliding barn door kits — single, double, bi-passing and round-the-corner options — DoorMate', infographic: true },
  { src: '/img/eclisse-pocket.jpg', alt: 'Eclisse pocket door system installed in a luxury home — DoorMate Cardiff', infographic: false },
  { src: '/img/slide-2.jpg', alt: 'Brand new internal sliding door kits for timber, steel and glass doors — DoorMate Cardiff', infographic: true },
  { src: '/img/stainless.jpg', alt: 'Stainless steel barn door hardware installed in a modern bedroom — DoorMate Cardiff', infographic: false },
  { src: '/img/slide-3.jpg', alt: "DoorMate products featured on George Clarke's Old House New Home, Channel 4, Series 8 Episode 3", infographic: true },
  { src: '/img/slide-4.jpg', alt: 'Pocket door kits — the ultimate space saver — DoorMate Cardiff', infographic: true },
  { src: '/img/External-150kg.jpg', alt: 'Heavy duty external sliding door system installed on an industrial building — DoorMate', infographic: false },
  { src: '/img/slide-5.jpg', alt: 'Made-to-measure bespoke handmade barn doors — DoorMate Cardiff workshop', infographic: true },
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
          {/* Use native img for infographics so objectPosition:left is respected */}
          {img.infographic ? (
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center', display: 'block' }}
            />
          ) : (
            <>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={i === 0}
              />
              {/* Headline overlay for lifestyle photos */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(39,36,70,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <h2 style={{
                  color: '#ffffff',
                  fontFamily: "'Libre Franklin', sans-serif",
                  fontSize: 'clamp(22px, 3.5vw, 48px)',
                  fontWeight: 800,
                  textAlign: 'center',
                  margin: 0,
                  padding: '0 40px',
                  lineHeight: 1.2,
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                }}>
                  The UK&apos;s Leading Sliding Door Systems Specialists
                </h2>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  )
}
