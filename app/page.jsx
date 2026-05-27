import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'

export const metadata = {
  title: "DoorMate Sliding Door Systems | Pocket Doors, Sliding Kits & Barn Door Hardware Cardiff",
  description: "Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Cardiff-based sliding door specialists since 2009. As Seen On Channel 4.",
  openGraph: {
    title: "DoorMate Sliding Door Systems | Pocket Doors, Sliding Kits & Barn Door Hardware Cardiff",
    description: "Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Cardiff-based sliding door specialists since 2009. As Seen On Channel 4.",
    type: 'website',
    url: 'https://doormate.co.uk',
  }
}

export default function HomePage() {
  return (
    <main style={{width:'100%', maxWidth:'100vw', overflowX:'hidden', margin:0, padding:0, fontFamily:"'Libre Franklin', sans-serif", background:'#ffffff'}}>

      {/* HERO — silent auto-scrolling carousel */}
      <HeroCarousel />

      {/* TRUST STRIP — white, navy border, 4 review items */}
      <div style={{width:'100%', background:'#efb627', padding:'8px 40px', boxSizing:'border-box'}}>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', maxWidth:'1400px', margin:'0 auto', gap:'24px'}}>

          {/* Trading Since 2009 */}
          <div style={{background:'#ffffff', borderRadius:'999px', padding:'5px 16px', display:'flex', alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center', gap:'10px', whiteSpace:'nowrap'}}>
              <img src="/img/doormate-logo-cropped.png" alt="DoorMate" style={{height:'36px', width:'auto'}} />
              <span style={{fontWeight:'bold', fontSize:'16px', color:'#272446', fontFamily:"'Libre Franklin', sans-serif"}}>Trading Since 2009</span>
            </div>
          </div>

          {/* Google */}
          <div style={{background:'#ffffff', borderRadius:'999px', padding:'5px 16px', display:'flex', alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center', gap:'8px', whiteSpace:'nowrap'}}>
              <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
                <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
              </svg>
              <span style={{fontWeight:'bold', fontSize:'16px', color:'#272446', fontFamily:"'Libre Franklin', sans-serif"}}>Google</span>
              <span style={{fontWeight:'bold', fontSize:'16px', color:'#272446', fontFamily:"'Libre Franklin', sans-serif"}}>4.8</span>
              <span style={{color:'#efb627', fontSize:'16px', lineHeight:1}}>★★★★★</span>
            </div>
          </div>

          {/* Trustpilot */}
          <div style={{background:'#ffffff', borderRadius:'999px', padding:'5px 16px', display:'flex', alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center', gap:'8px', whiteSpace:'nowrap'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#00b67a" points="12,2 14.65,8.36 21.51,8.91 16.28,13.39 17.88,20.09 12,16.5 6.12,20.09 7.72,13.39 2.49,8.91 9.35,8.36"/>
              </svg>
              <span style={{fontWeight:'bold', fontSize:'16px', color:'#272446', fontFamily:"'Libre Franklin', sans-serif"}}>Trustpilot</span>
              <span style={{fontWeight:'bold', fontSize:'16px', color:'#272446', fontFamily:"'Libre Franklin', sans-serif"}}>4.5</span>
              <span style={{display:'inline-flex', alignItems:'center', gap:0, lineHeight:1}}>
                <span style={{color:'#efb627', fontSize:'16px', lineHeight:1, letterSpacing:0}}>★★★★</span>
                <svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{display:'block', flexShrink:0}}>
                  <defs>
                    <clipPath id="topHalf">
                      <rect x="0" y="0" width="24" height="12"/>
                    </clipPath>
                  </defs>
                  <polygon points="12,2 14.65,8.36 21.51,8.91 16.28,13.39 17.88,20.09 12,16.5 6.12,20.09 7.72,13.39 2.49,8.91 9.35,8.36" fill="none" stroke="#efb627" strokeWidth="1.5"/>
                  <polygon points="12,2 14.65,8.36 21.51,8.91 16.28,13.39 17.88,20.09 12,16.5 6.12,20.09 7.72,13.39 2.49,8.91 9.35,8.36" fill="#efb627" clipPath="url(#topHalf)"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Houzz */}
          <div style={{background:'#ffffff', borderRadius:'999px', padding:'5px 16px', display:'flex', alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'center', gap:'8px', whiteSpace:'nowrap'}}>
              <svg width="18" height="18" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path fill="#7DC242" d="M50,5 L95,42 L80,42 L80,95 L55,95 L55,65 L45,65 L45,95 L20,95 L20,42 L5,42 Z"/>
              </svg>
              <span style={{fontWeight:'bold', fontSize:'16px', color:'#272446', fontFamily:"'Libre Franklin', sans-serif"}}>Houzz</span>
              <span style={{fontWeight:'bold', fontSize:'16px', color:'#272446', fontFamily:"'Libre Franklin', sans-serif"}}>5.0</span>
              <span style={{color:'#efb627', fontSize:'16px', lineHeight:1}}>★★★★★</span>
            </div>
          </div>

        </div>
      </div>

      {/* CATEGORY CARDS — 6-card single row */}
      <section style={{width:'100%', background:'#ffffff', padding:'20px 40px', boxSizing:'border-box'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:'12px', maxWidth:'1400px', margin:'0 auto'}}>

          {/* Cards 1–6 — product categories */}
          {[
            {name:'Doors',                      img:'/img/door-v-brace.jpg',          href:'/doors',                alt:'Handmade barn doors'},
            {name:'Pocket Door Kits',           img:'/img/mirror-pocket-single.jpg',  href:'/pocket-door-kits',     alt:'Pocket door kits'},
            {name:'Barn Door Kits',             img:'/img/gainesville-system.jpg',    href:'/barn-door-hardware',   alt:'Barn door hardware'},
            {name:'Internal Kits',              img:'/img/dm-150.jpg',               href:'/internal-sliding-kits',alt:'Internal sliding door kits'},
            {name:'External Kits',              img:'/img/external-kit.jpg',          href:'/external-sliding-kits',alt:'External sliding door kits'},
            {name:'Shop',                       img:'/img/covington-system.jpg',      href:'/shop',                 alt:'Door accessories and hardware'},
          ].map((cat) => (
            <div key={cat.name}>
              <p style={{color:'#272446', fontSize:'18px', fontWeight:'900', textAlign:'center', margin:'0 0 6px 0', padding:0}}>{cat.name}</p>
              <Link href={cat.href} style={{textDecoration:'none', display:'block', height:'280px', background:'#ffffff', border:'2px solid #272446', overflow:'hidden', position:'relative'}}>
                <Image src={cat.img} alt={cat.alt} fill style={{objectFit:'cover'}} sizes="15vw" />
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* WHO WE ARE — Houzz left, text right */}
      <section style={{width:'100%', background:'#ffffff', padding:'40px', boxSizing:'border-box', borderTop:'1px solid #e8e8e8'}}>
        <div style={{display:'grid', gridTemplateColumns:'300px 1fr', gap:'56px', maxWidth:'1400px', margin:'0 auto', alignItems:'start'}}>

          {/* Left — Houzz embed, 300×435 */}
          <div style={{flexShrink:0}}>
            <iframe
              scrolling="no"
              frameBorder="0"
              width="300"
              height="435"
              src="https://www.houzz.com/reviewWidget/terryburnett98/"
              style={{border:'none', display:'block'}}
              title="DoorMate reviews on Houzz"
            />
          </div>

          {/* Right — text content */}
          <div>
            <h2 style={{color:'#272446', fontSize:'clamp(22px, 2.8vw, 36px)', fontWeight:'900', lineHeight:'1.2', margin:'0 0 20px 0', textTransform:'uppercase', whiteSpace:'nowrap', textAlign:'center', fontFamily:"'Libre Franklin', sans-serif"}}>
              The UK&apos;s Leading Sliding Door Specialists
            </h2>
            <p style={{color:'#272446', fontSize:'16px', lineHeight:'1.8', margin:'0 0 20px 0', fontFamily:"'Libre Franklin', sans-serif"}}>
              DoorMate are based in Cardiff, South Wales. Have been supplying sliding door systems since 2009. In 2015 we began manufacturing our own sliding barn door hardware in the UK, built for real doors, real walls and real homes — not generic one-size kits. Every system is backed by clear fitting guidance and real support, from sales through to manufacture and installation.
            </p>
            <p style={{color:'#efb627', fontSize:'20px', fontWeight:'900', textTransform:'uppercase', margin:'0 0 12px 0', textAlign:'center', fontFamily:"'Libre Franklin', sans-serif"}}>
              We Are Manufacturers, Suppliers &amp; Installers of Quality Door Products
            </p>
            <p style={{color:'#272446', fontSize:'20px', fontWeight:'900', textTransform:'uppercase', margin:0, textAlign:'center', fontFamily:"'Libre Franklin', sans-serif"}}>
              Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits
            </p>
          </div>

        </div>
      </section>

      {/* POCKET DOOR BRAND LOGOS */}
      <section style={{width:'100%', background:'#ffffff', padding:'32px 40px', boxSizing:'border-box', borderTop:'1px solid #e8e8e8', borderBottom:'1px solid #e8e8e8'}}>
        <p style={{color:'#999', fontSize:'11px', fontWeight:'700', textAlign:'center', margin:'0 0 20px 0', letterSpacing:'3px', textTransform:'uppercase'}}>Pocket Door Kit Brands We Supply & Support</p>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'48px', flexWrap:'wrap'}}>
          {['COBURN', 'ECLISSE', 'ROCKET', 'MIRROR POCKET DOORS'].map(brand => (
            <Link key={brand} href="/pocket-door-kits" style={{textDecoration:'none'}}>
              <span style={{fontSize:'16px', fontWeight:'900', color:'#272446', letterSpacing:'1px', opacity:'0.6'}}>{brand}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* DON'T ACCEPT CHEAP IMITATIONS — white background now, not dark */}
      <section style={{width:'100%', background:'#ffffff', padding:'56px 40px', boxSizing:'border-box'}}>
        <div style={{display:'grid', gridTemplateColumns:'2fr 3fr', gap:'56px', maxWidth:'1400px', margin:'0 auto', alignItems:'center'}}>
          <div style={{position:'relative', height:'360px', overflow:'hidden'}}>
            <Image src="/img/gainesville-closeup.png" alt="DoorMate barn door hardware close-up — UK manufactured Cardiff" fill style={{objectFit:'cover'}} sizes="40vw" />
          </div>
          <div>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 10px 0'}}>WHY DOORMATE</p>
            <h2 style={{color:'#272446', fontSize:'clamp(20px, 2.5vw, 32px)', fontWeight:'900', margin:'0 0 18px 0'}}>Don't Accept Cheap Imitations</h2>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 14px 0'}}>
              The market is flooded with mass-produced barn door kits designed to look the part, but built without consideration for real door weights, real wall constructions, or long-term reliability.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 14px 0'}}>
              Many of these systems are manufactured to a price, not a standard — resulting in poor fixing points, undersized tracks, noisy rollers, and premature wear.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 28px 0'}}>
              At DoorMate, our barn door hardware is designed and manufactured in Cardiff with performance, strength, and longevity in mind. If you're investing in a sliding door system, it should work smoothly, fix securely, and perform for years — not just on the day it's installed.
            </p>
            <Link href="/barn-door-hardware" style={{background:'#efb627', color:'#0f0d24', padding:'12px 28px', fontWeight:'900', fontSize:'14px', textDecoration:'none', display:'inline-block', letterSpacing:'1px', textTransform:'uppercase'}}>
              VIEW BARN DOOR HARDWARE →
            </Link>
          </div>
        </div>
      </section>

      {/* CHANNEL 4 — thin strip, not a dark cave */}
      <section style={{width:'100%', background:'#f7f7f7', padding:'28px 40px', boxSizing:'border-box', borderTop:'4px solid #efb627', borderBottom:'1px solid #e8e8e8'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'16px', maxWidth:'1400px', margin:'0 auto'}}>
          <div>
            <p style={{color:'#999', fontSize:'11px', fontWeight:'700', letterSpacing:'3px', textTransform:'uppercase', margin:'0 0 4px 0'}}>FEATURED ON</p>
            <h3 style={{color:'#272446', fontSize:'clamp(15px, 2vw, 22px)', fontWeight:'900', margin:0}}>George Clarke's Old House New Home — Channel 4</h3>
          </div>
          <Link href="/as-seen-on-tv" style={{background:'#272446', color:'#ffffff', padding:'11px 24px', fontWeight:'900', fontSize:'13px', textDecoration:'none', display:'inline-block', letterSpacing:'1px', textTransform:'uppercase', whiteSpace:'nowrap'}}>
            WATCH NOW →
          </Link>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section style={{width:'100%', background:'#ffffff', padding:'24px 40px', boxSizing:'border-box', borderBottom:'1px solid #e8e8e8'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'8px', flexWrap:'wrap', maxWidth:'1400px', margin:'0 auto'}}>
          {[
            {label:'Facebook', href:'https://www.facebook.com/Door-Mate-1173024366050268/'},
            {label:'X / Twitter', href:'https://x.com/mate_door'},
            {label:'Instagram', href:'https://www.instagram.com/doormate_cardiff/'},
            {label:'YouTube', href:'https://www.youtube.com/channel/UCiVCUZ4T_FR4SLo81Ecuzpw'},
            {label:'LinkedIn', href:'https://www.linkedin.com/in/terry-burnett-a74474116/'},
            {label:'Pinterest', href:'https://www.pinterest.co.uk/burnett7776/boards/'},
          ].map((s, i, arr) => (
            <span key={s.label} style={{display:'inline-flex', alignItems:'center', gap:'8px'}}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" style={{color:'#363557', fontWeight:'700', fontSize:'12px', textDecoration:'none', letterSpacing:'1px', textTransform:'uppercase'}}>
                {s.label}
              </a>
              {i < arr.length - 1 && <span style={{color:'#ccc'}}>|</span>}
            </span>
          ))}
        </div>
      </section>

    </main>
  )
}
