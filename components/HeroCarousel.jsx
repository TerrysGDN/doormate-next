'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/img/brooklyn-system.jpg', alt: 'Brooklyn bi-parting barn door system installed in a home — DoorMate Cardiff' },
  { src: '/img/eclisse-pocket.jpg',  alt: 'Eclisse pocket door system installed in a modern open plan living room' },
  { src: '/img/stainless.jpg',       alt: 'Stainless steel internal sliding door system installed — DoorMate Cardiff' },
  { src: '/img/External-150kg.jpg',  alt: 'Heavy duty external sliding door kit installed — DoorMate Cardiff' },
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
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 70%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 60px',
        zIndex: 10,
      }}>
        <h1 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '900', lineHeight: '1.1', margin: '0 0 14px 0', maxWidth: '600px', textShadow: '1px 2px 6px rgba(0,0,0,0.4)' }}>
          The UK's Leading<br />Sliding Door Systems Specialists
        </h1>
      </div>
    </section>
  )
}
