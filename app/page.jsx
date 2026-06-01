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

      {/* WHO WE ARE */}
      <section style={{width:'100%', background:'#ffffff', padding:'40px', boxSizing:'border-box', borderTop:'4px solid #efb627'}}>
        <div style={{display:'grid', gridTemplateColumns:'300px 1fr', gap:'56px', maxWidth:'1400px', margin:'0 auto', alignItems:'start'}}>

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

          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', minHeight:'435px', fontFamily:"'Libre Franklin', sans-serif", textAlign:'center'}}>
            <h2 style={{color:'#272446', fontSize:'clamp(16px, 2vw, 26px)', fontWeight:'900', lineHeight:'1.2', margin:'0 0 24px 0', textTransform:'uppercase', whiteSpace:'nowrap'}}>
              Real UK Manufacturers. Real Systems Delivered Direct To You.
            </h2>
            <p style={{color:'#272446', fontSize:'17px', lineHeight:'1.85', margin:'0 0 20px 0'}}>
              DoorMate are based in Cardiff, South Wales — manufacturing and supplying sliding door systems since 2009. While our competitors are simply importing boxes of hardware, sat in warehouses with sales staff and warehouse workers loading the vans, we manufacture our own systems alongside handmade barn doors, mirror pocket doors and the widest range of pocket door kits, internal and external sliding systems.
            </p>
            <p style={{color:'#272446', fontSize:'17px', lineHeight:'1.85', margin:'0 0 28px 0'}}>
              Every system we sell is backed by real industry knowledge, clear fitting guidance and direct support from the people who actually make them.
            </p>
            <p style={{color:'#efb627', fontSize:'18px', fontWeight:'900', margin:'0 0 12px 0'}}>
              We Are Manufacturers, Suppliers &amp; Installers of Quality Door Products
            </p>
            <p style={{fontSize:'17px', fontWeight:'900', margin:0}}>
              <Link href="/doors" style={{color:'#272446', textDecoration:'none'}}>Doors</Link>
              <span style={{color:'#efb627', margin:'0 10px'}}>|</span>
              <Link href="/pocket-door-kits" style={{color:'#272446', textDecoration:'none'}}>Pocket Door Kits</Link>
              <span style={{color:'#efb627', margin:'0 10px'}}>|</span>
              <Link href="/barn-door-hardware" style={{color:'#272446', textDecoration:'none'}}>Barn Door Kits</Link>
              <span style={{color:'#efb627', margin:'0 10px'}}>|</span>
              <Link href="/internal-sliding-kits" style={{color:'#272446', textDecoration:'none'}}>Internal Kits</Link>
              <span style={{color:'#efb627', margin:'0 10px'}}>|</span>
              <Link href="/external-sliding-kits" style={{color:'#272446', textDecoration:'none'}}>External Kits</Link>
            </p>
          </div>

        </div>
      </section>

      {/* BRANDS WE WORK WITH — scrolling logo banner */}
      <section style={{width:'100%', background:'#ffffff', padding:'32px 40px', boxSizing:'border-box', borderTop:'4px solid #efb627', borderBottom:'4px solid #efb627', overflow:'hidden'}}>
        <p style={{color:'#999', fontSize:'11px', fontWeight:'700', textAlign:'center', margin:'0 0 20px 0', letterSpacing:'3px', textTransform:'uppercase'}}>Brands We Work With</p>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-track {
            display: flex;
            align-items: center;
            gap: 48px;
            animation: scroll 24s linear infinite;
            width: max-content;
          }
        `}</style>
        <div style={{overflow:'hidden', width:'100%'}}>
          <div className="logo-track">
            <img src="/img/brands/barrier.png" alt="Barrier Components" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/coburn.png" alt="Coburn Systems" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/eclisse.jpg" alt="Eclisse" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/rocket.png" alt="Rocket Door Frames" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/jbkind.png" alt="JB Kind" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/fhbrundle.png" alt="FH Brundle" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/charlesday.png" alt="Charles Day Steels" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/titus.png" alt="Titus UK" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/rtbearings.jpg" alt="RT Bearings" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            {/* Duplicate set for seamless loop */}
            <img src="/img/brands/barrier.png" alt="Barrier Components" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/coburn.png" alt="Coburn Systems" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/eclisse.jpg" alt="Eclisse" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/rocket.png" alt="Rocket Door Frames" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/jbkind.png" alt="JB Kind" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/fhbrundle.png" alt="FH Brundle" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/charlesday.png" alt="Charles Day Steels" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/titus.png" alt="Titus UK" style={{width:'200px', height:'80px', objectFit:'contain'}} />
            <img src="/img/brands/rtbearings.jpg" alt="RT Bearings" style={{width:'200px', height:'80px', objectFit:'contain'}} />
          </div>
        </div>
      </section>

      {/* SYSTEMS SECTION */}
      <section style={{width:'100%', background:'#ffffff', padding:'48px 40px', boxSizing:'border-box'}}>
        <div style={{maxWidth:'1400px', margin:'0 auto'}}>
          <h2 style={{color:'#272446', fontSize:'clamp(24px, 3vw, 38px)', fontWeight:'900', margin:'0 0 24px 0', textAlign:'center', textTransform:'uppercase', lineHeight:'1.2'}}>
            We offer complete sliding door solutions, for real homes, real doors and real walls
          </h2>
          <p style={{color:'#272446', fontSize:'17px', lineHeight:'1.85', textAlign:'center', maxWidth:'800px', margin:'0 auto 40px auto', fontWeight:'600'}}>
            Choosing a sliding door system shouldn&apos;t be difficult. That&apos;s why we&apos;ve made it easy to find the right solution for your project. By organising our systems around real-world applications, we&apos;ve already done the thinking for you. Simply choose the category that best suits your project and take the next step with confidence.
          </p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
            {[
              {top:'Pocket Door Systems', bottom:'For The Ultimate Space Saver', href:'/pocket-door-kits', img:'/img/mirror-pocket-single.jpg', alt:'Pocket door kits'},
              {top:'Sliding Barn Door Systems', bottom:'For Traditional Style And Charm', href:'/barn-door-hardware', img:'/img/gainesville-system.jpg', alt:'Barn door hardware'},
              {top:'Internal Sliding Systems', bottom:'For Modern Living', href:'/internal-sliding-kits', img:'/img/dm-150.jpg', alt:'Internal sliding door kits'},
              {top:'External Sliding Systems', bottom:'Built To Last. Whatever The Weather.', href:'/external-sliding-kits', img:'/img/external-kit.jpg', alt:'External sliding door kits'},
            ].map(item => (
              <Link key={item.top} href={item.href} style={{textDecoration:'none', display:'block', position:'relative', height:'200px', overflow:'hidden'}}>
                <Image src={item.img} alt={item.alt} fill style={{objectFit:'cover'}} sizes="50vw" />
                <div style={{position:'absolute', inset:0, background:'rgba(39,36,70,0.5)', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'20px'}}>
                  <span style={{color:'#efb627', fontSize:'clamp(18px, 2vw, 24px)', fontWeight:'900', letterSpacing:'1px', margin:'0 0 4px 0', display:'block'}}>{item.top}</span>
                  <span style={{color:'#ffffff', fontSize:'clamp(14px, 1.5vw, 18px)', fontWeight:'700', lineHeight:'1.2', display:'block'}}>{item.bottom}</span>
                </div>
              </Link>
            ))}
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
