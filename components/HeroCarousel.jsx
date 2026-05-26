'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/img/augusta-system.jpg',     alt: 'Augusta double track bi-passing sliding door system' },
  { src: '/img/gainesville-system.jpg', alt: 'Gainesville barn door hardware system' },
  { src: '/img/brooklyn-system.jpg',    alt: 'Brooklyn bi-parting barn door system' },
  { src: '/img/covington-system.jpg',   alt: 'Covington single track bi-passing system' },
  { src: '/img/hero-installed.jpg',     alt: 'DoorMate sliding door system installed in UK home' },
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
    <section style={{ position: 'relative', width: '100%', maxWidth: '1400px', margin: '0 auto', height: '360px', overflow: 'hidden' }}>
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
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 60px',
        zIndex: 10,
      }}>
        <h1 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '900', lineHeight: '1.1', margin: '0 0 14px 0', maxWidth: '600px' }}>
          The UK's Leading<br />Sliding Door Specialists
        </h1>
      </div>
    </section>
  )
}
