'use client'
import { useState, useEffect } from 'react'

const SLIDES = [
  {
    img: '/img/eclisse-pocket.jpg',
    alt: 'Eclisse pocket door installed in a luxury home library — DoorMate Cardiff',
    category: 'Pocket Door Kits',
    headline: 'The Ultimate Space Saver',
    subline: 'Disappear your door into the wall. Single, double and fire-rated systems in stock.',
    price: 'From £117',
    cta: 'Shop Pocket Door Kits',
    href: '/pocket-door-kits',
  },
  {
    img: '/img/External-150kg.jpg',
    alt: 'Heavy duty external sliding door system installed — DoorMate',
    category: 'External Sliding Door Kits',
    headline: 'Built To Last. Whatever The Weather.',
    subline: 'Heavy-duty systems for barns, garages, outbuildings and commercial applications.',
    price: 'From £104',
    cta: 'Shop External Kits',
    href: '/external-sliding-kits',
  },
  {
    img: '/img/Stuart Large Augusta2.jpg',
    alt: 'Augusta double track bi-passing barn door system half open revealing kitchen — DoorMate Cardiff',
    category: 'Sliding Barn Door Hardware',
    headline: 'Manufactured In Cardiff Since 2009',
    subline: 'The only genuine barn door hardware manufacturer in the UK. Six systems available.',
    price: 'From £150',
    cta: 'Shop Barn Door Hardware',
    href: '/barn-door-hardware',
    objectPosition: 'right center',
  },
  {
    img: '/img/door-v-brace.jpg',
    alt: 'Handmade V-brace barn door — DoorMate Cardiff workshop',
    category: 'Handmade Barn Doors',
    headline: 'Made To Measure In Our Cardiff Workshop',
    subline: 'Pine and oak barn doors handmade to your exact size. V-brace, Z-brace, glazed and ledge & brace.',
    price: 'From £527',
    cta: 'View Handmade Doors',
    href: '/doors',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section aria-label="Featured products" style={{ position: 'relative', width: '100%', height: 'clamp(320px, 48vh, 560px)', overflow: 'hidden' }}>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.img}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        >
          {/* Background photo */}
          <img
            src={slide.img}
            alt={slide.alt}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: slide.objectPosition || 'center' }}
          />
          {/* Gradient overlay — dark left, fades right so photo shows through */}
          <div style={{ position: 'absolute', inset: 0, background: slide.img.includes('augusta-hero') ? 'linear-gradient(to right, rgba(39,36,70,0.88) 0%, rgba(39,36,70,0.70) 25%, rgba(39,36,70,0.0) 50%, rgba(39,36,70,0.0) 100%)' : 'linear-gradient(to right, rgba(39,36,70,0.88) 0%, rgba(39,36,70,0.65) 45%, rgba(39,36,70,0.15) 100%)' }} />
          {/* Text content */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 5% 0 6%' }}>
            <div style={{ maxWidth: '580px' }}>
              <p style={{ color: '#efb627', fontFamily: "'Libre Franklin', sans-serif", fontSize: 'clamp(13px, 1.4vw, 17px)', fontWeight: 700, margin: '0 0 10px 0', letterSpacing: '0.04em' }}>
                {slide.category}
              </p>
              <h2 style={{ color: '#ffffff', fontFamily: "'Libre Franklin', sans-serif", fontSize: 'clamp(24px, 3.8vw, 52px)', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1.1 }}>
                {slide.headline}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontFamily: "'Libre Franklin', sans-serif", fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: 400, margin: '0 0 20px 0', lineHeight: 1.5 }}>
                {slide.subline}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <a
                  href={slide.href}
                  style={{ background: '#efb627', color: '#0f0d24', fontFamily: "'Libre Franklin', sans-serif", fontSize: 'clamp(14px, 1.4vw, 17px)', fontWeight: 800, padding: '13px 28px', borderRadius: '4px', textDecoration: 'none', display: 'inline-block' }}
                >
                  {slide.cta} →
                </a>
                {slide.price && (
                  <span style={{ color: '#efb627', fontFamily: "'Libre Franklin', sans-serif", fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 800 }}>
                    {slide.price}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Slide indicators */}
      <div style={{ position: 'absolute', bottom: '16px', left: '6%', display: 'flex', gap: '8px' }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? '#efb627' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }}
          />
        ))}
      </div>
    </section>
  )
}
