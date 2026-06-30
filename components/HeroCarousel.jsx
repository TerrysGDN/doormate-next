'use client'
import { useState, useEffect } from 'react'

const SLIDES = [
  { img: '/img/Slide 1 (Pocket Door Kits).png',                 alt: 'Pocket Door Kits — The Ultimate Space Saver',          href: '/pocket-door-kits',       tegan: true  },
  { img: '/img/pocket-door-lifestyle.jpg',                      alt: 'Pocket door installed in a luxury home',               href: '/pocket-door-kits',       tegan: false, label: 'Pocket Door Kits' },
  { img: '/img/Slide 2 (Internal Sliding Door Kits).png',       alt: 'Internal Sliding Door Kits — Timber, Steel and Glass', href: '/internal-sliding-kits',  tegan: true  },
  { img: '/img/External-150kg.jpg',                             alt: 'Heavy duty external sliding door installed',           href: '/external-sliding-kits',  tegan: false, label: 'External Sliding Door Kits' },
  { img: '/img/Slide 3 (Heavy Duty External Sliding Kits).png', alt: 'Heavy Duty External Sliding Kits — Built To Last',    href: '/external-sliding-kits',  tegan: true  },
  { img: '/img/augusta-hero.jpg',                               alt: 'Augusta barn door hardware installed',                 href: '/barn-door-hardware',     tegan: false, label: 'Sliding Barn Door Hardware' },
  { img: '/img/Slide 4 (Sliding Barn Door Hardware).png',       alt: 'Sliding Barn Door Hardware — Handmade In The UK',     href: '/barn-door-hardware',     tegan: true  },
]

const HEADLINE = "The UK's Leading Sliding Systems Specialists"

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section aria-label="Featured products" style={{ position:'relative', width:'100%', height:'45vh', minHeight:'320px', overflow:'hidden' }}>
      {SLIDES.map((slide, i) => (
        <a
          key={slide.img}
          href={slide.href}
          style={{
            position: 'absolute',
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
            style={{ display:'block', width:'100%', height:'100%', objectFit:'cover' }}
          />
          {!slide.tegan && (
            <>
              <div style={{
                position:'absolute', inset:0, pointerEvents:'none',
                background:'linear-gradient(to right, rgba(39,36,70,0.88) 0%, rgba(39,36,70,0.55) 38%, rgba(39,36,70,0.12) 65%, transparent 100%)',
              }} />
              <div style={{
                position:'absolute', inset:0, display:'flex', flexDirection:'column',
                justifyContent:'center', padding:'0 5%', maxWidth:'52%',
              }}>
                <p style={{ color:'#efb627', fontFamily:"'Libre Franklin',sans-serif", fontSize:'clamp(13px,1.4vw,17px)', fontWeight:700, margin:'0 0 10px 0', letterSpacing:'0.06em', textTransform:'uppercase' }}>
                  {slide.label}
                </p>
                <p style={{ color:'#ffffff', fontFamily:"'Libre Franklin',sans-serif", fontSize:'clamp(20px,2.8vw,42px)', fontWeight:800, margin:'0 0 22px 0', lineHeight:1.15 }}>
                  {HEADLINE}
                </p>
                <span style={{
                  display:'inline-block', background:'#efb627', color:'#0f0d24',
                  padding:'10px 28px', fontFamily:"'Libre Franklin',sans-serif",
                  fontSize:'clamp(14px,1.4vw,17px)', fontWeight:700, borderRadius:'4px', alignSelf:'flex-start',
                }}>
                  Find Out More
                </span>
              </div>
            </>
          )}
        </a>
      ))}
      <div style={{ position:'absolute', bottom:'12px', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'8px', zIndex:10 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i+1}`}
            style={{ width:i===current?'24px':'8px', height:'8px', borderRadius:'4px', background:i===current?'#efb627':'rgba(255,255,255,0.6)', border:'none', cursor:'pointer', padding:0, transition:'all 0.3s ease' }}
          />
        ))}
      </div>
    </section>
  )
}
