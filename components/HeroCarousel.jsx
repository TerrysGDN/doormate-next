'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/img/pocket-door-lifestyle.jpg', alt: 'Pocket door system installed in UK home — DoorMate Sliding Door Systems' },
  { src: '/img/augusta-system.jpg',        alt: 'Augusta double track bi-passing sliding door system by DoorMate Cardiff' },
  { src: '/img/dm-150.jpg',               alt: 'Internal sliding door kit installed — DoorMate Sliding Door Systems' },
  { src: '/img/external-kit.jpg',         alt: 'External sliding door kit installed — DoorMate heavy duty systems' },
  { src: '/img/gainesville-system.jpg',   alt: 'Gainesville single barn door hardware system made in Cardiff' },
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
          The UK's Leading<br />Sliding Door Specialists
        </h1>
      </div>
    </section>
  )
}
