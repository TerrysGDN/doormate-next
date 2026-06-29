'use client'
import { useState, useEffect } from 'react'

const SLIDES = [
  { img: '/img/Slide 1 (Pocket Door Kits).png',                 alt: 'Pocket Door Kits — The Ultimate Space Saver',          href: '/pocket-door-kits' },
  { img: '/img/pocket-door-hero.jpg',                           alt: 'Pocket door installed in a luxury home',               href: '/pocket-door-kits' },
  { img: '/img/Slide 2 (Internal Sliding Door Kits).png',       alt: 'Internal Sliding Door Kits — Timber, Steel and Glass', href: '/internal-sliding-kits' },
  { img: '/img/External-150kg.jpg',                             alt: 'Heavy duty external sliding door installed',           href: '/external-sliding-kits' },
  { img: '/img/Slide 3 (Heavy Duty External Sliding Kits).png', alt: 'Heavy Duty External Sliding Kits — Built To Last',    href: '/external-sliding-kits' },
  { img: '/img/augusta-hero.jpg',                               alt: 'Augusta barn door hardware installed',                 href: '/barn-door-hardware' },
  { img: '/img/Slide 4 (Sliding Barn Door Hardware).png',       alt: 'Sliding Barn Door Hardware — Handmade In The UK',     href: '/barn-door-hardware' },
  { img: '/img/door-v-brace.jpg',                               alt: 'Handmade V-brace barn door — DoorMate Cardiff',       href: '/doors' },
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
    <section aria-label="Featured products" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {SLIDES.map((slide, i) => (
        <a
          key={slide.img}
          href={slide.href}
          style={{
            position: i === 0 ? 'relative' : 'absolute',
            inset: 0,
            display: 'block',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            pointerEvents: i === current ? 'auto' : 'none',
          }}
        >
          <img
            src={slide.img}
            alt={slide.alt}
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </a>
      ))}

      {/* Slide indicators */}
      <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? '#efb627' : 'rgba(255,255,255,0.6)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }}
          />
        ))}
      </div>
    </section>
  )
}
