import Image from 'next/image'
import Link from 'next/link'

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
    <main style={{width:'100%', margin:0, padding:0, fontFamily:'sans-serif', background:'#ffffff'}}>

      {/* REVIEWS SCORE LINE — visible immediately below nav, above hero */}
      <div style={{width:'100%', background:'#fffbe6', borderBottom:'1px solid #e8d98a', padding:'8px 40px', boxSizing:'border-box', textAlign:'center'}}>
        <span style={{color:'#efb627', fontSize:'16px', letterSpacing:'2px'}}>★★★★★</span>
        <span style={{color:'#272446', fontSize:'13px', fontWeight:'700', margin:'0 10px'}}>Excellent — rated 5 stars by our customers</span>
        <a href="https://www.houzz.co.uk/browseReviews/terryburnett98" target="_blank" rel="noopener noreferrer" style={{color:'#363557', fontSize:'13px', fontWeight:'700', textDecoration:'none', borderBottom:'1px solid #363557'}}>Read our Houzz reviews →</a>
        <span style={{color:'#aaa', margin:'0 12px'}}>|</span>
        <a href="https://uk.trustpilot.com/review/doormate.co.uk" target="_blank" rel="noopener noreferrer" style={{color:'#363557', fontSize:'13px', fontWeight:'700', textDecoration:'none', borderBottom:'1px solid #363557'}}>View on Trustpilot →</a>
      </div>

      {/* HERO — compact, not full screen */}
      <section style={{position:'relative', width:'100%', height:'360px', overflow:'hidden'}}>
        <Image
          src="/img/hero-installed.jpg"
          alt="DoorMate sliding door system installed in UK home"
          fill
          style={{objectFit:'cover', objectPosition:'center'}}
          priority
        />
        <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, rgba(39,36,70,0.90) 0%, rgba(39,36,70,0.60) 55%, rgba(39,36,70,0.10) 100%)'}} />
        <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 60px'}}>
          <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 12px 0'}}>
            AS SEEN ON GEORGE CLARKE'S OLD HOUSE NEW HOME — CHANNEL 4
          </p>
          <h1 style={{color:'#ffffff', fontSize:'clamp(28px, 4vw, 52px)', fontWeight:'900', lineHeight:'1.1', margin:'0 0 14px 0', maxWidth:'600px'}}>
            The UK's Leading<br/>Sliding Door Specialists
          </h1>
          <p style={{color:'rgba(255,255,255,0.92)', fontSize:'clamp(14px, 1.6vw, 18px)', margin:'0 0 24px 0', maxWidth:'440px', lineHeight:'1.5'}}>
            Built for real doors, real walls and real homes since 2009.
          </p>
          <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
            <Link href="/pocket-door-kits" style={{background:'#efb627', color:'#0f0d24', padding:'13px 36px', fontWeight:'900', fontSize:'15px', letterSpacing:'2px', textDecoration:'none', display:'inline-block', textTransform:'uppercase'}}>
              SHOP NOW
            </Link>
            <a href="tel:02921660393" style={{background:'transparent', border:'2px solid rgba(255,255,255,0.8)', color:'#ffffff', padding:'13px 36px', fontWeight:'700', fontSize:'15px', textDecoration:'none', display:'inline-block'}}>
              029 2166 0393
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — thin, one line */}
      <div style={{width:'100%', background:'#272446', padding:'12px 40px', boxSizing:'border-box'}}>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', gap:'8px', maxWidth:'1200px', margin:'0 auto'}}>
          {[
            'Trading Since 2009',
            'As Seen On Channel 4',
            'UK Sliding Door Specialists',
            'Handmade In Cardiff',
          ].map((item, i, arr) => (
            <span key={item} style={{display:'inline-flex', alignItems:'center', gap:'8px'}}>
              <span style={{color:'#efb627', fontWeight:'700', fontSize:'13px'}}>{item}</span>
              {i < arr.length - 1 && <span style={{color:'rgba(255,255,255,0.3)', fontSize:'13px'}}>|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* HOUZZ REVIEWS — immediately after trust strip, above the fold */}
      <section style={{width:'100%', background:'#ffffff', padding:'40px 40px', boxSizing:'border-box', borderBottom:'1px solid #e8e8e8'}}>
        <div style={{display:'grid', gridTemplateColumns:'320px 1fr', gap:'48px', maxWidth:'1300px', margin:'0 auto', alignItems:'start'}}>
          <div>
            <iframe
              scrolling="no"
              frameBorder="0"
              width="300"
              height="435"
              src="https://www.houzz.com/reviewWidget/terryburnett98/"
              style={{border:'none', display:'block'}}
              title="DoorMate customer reviews on Houzz"
            />
            <a href="https://uk.trustpilot.com/review/doormate.co.uk" target="_blank" rel="noopener noreferrer" style={{display:'block', marginTop:'12px', color:'#363557', fontSize:'13px', fontWeight:'700', textDecoration:'none', borderBottom:'1px solid #efb627', paddingBottom:'2px', width:'fit-content'}}>
              View us on Trustpilot →
            </a>
          </div>
          <div style={{paddingTop:'8px'}}>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 10px 0'}}>CUSTOMER REVIEWS</p>
            <h2 style={{color:'#272446', fontSize:'clamp(20px, 2.5vw, 32px)', fontWeight:'900', margin:'0 0 18px 0'}}>What Our Customers Say</h2>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 14px 0'}}>
              We've been on Houzz since 2015 and built our reputation on one thing — doing the job properly. Real products, real advice, real installations.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 14px 0'}}>
              Every review is from a real customer who bought a real system and had it fitted in their home. We don't chase reviews — we earn them.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 28px 0'}}>
              Got a question? Call <strong style={{color:'#272446'}}>029 2166 0393</strong> or email <a href="mailto:info@doormate.co.uk" style={{color:'#363557', fontWeight:'700'}}>info@doormate.co.uk</a>.
            </p>
            <a href="https://www.houzz.co.uk/browseReviews/terryburnett98" target="_blank" rel="noopener noreferrer" style={{background:'#272446', color:'#ffffff', padding:'12px 28px', fontWeight:'700', fontSize:'14px', textDecoration:'none', display:'inline-block', letterSpacing:'1px', textTransform:'uppercase'}}>
              READ ALL REVIEWS ON HOUZZ →
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY TILES — white, image on top, info below, no dark overlays */}
      <section style={{width:'100%', background:'#f7f7f7', padding:'40px 0 0', boxSizing:'border-box'}}>
        <div style={{padding:'0 40px 24px', maxWidth:'1400px', margin:'0 auto'}}>
          <h2 style={{color:'#272446', fontSize:'clamp(20px, 2.5vw, 32px)', fontWeight:'900', margin:0}}>
            <span style={{color:'#efb627'}}>Sliding Door Systems</span> — Shop By Category
          </h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', width:'100%', borderTop:'1px solid #e0e0e0'}}>
          {[
            {name:'Pocket Door Kits', price:'From £117.60', img:'/img/mirror-pocket-single.jpg', href:'/pocket-door-kits', alt:'Pocket door kit'},
            {name:'Barn Door Hardware', price:'From £150.00', img:'/img/gainesville-system.jpg', href:'/barn-door-hardware', alt:'Barn door hardware'},
            {name:'External Sliding Door Kits', price:'From £104.00', img:'/img/external-kit.jpg', href:'/external-sliding-kits', alt:'External sliding door kit'},
            {name:'Handmade Barn Doors', price:'From £527.00', img:'/img/door-v-brace.jpg', href:'/doors', alt:'Handmade barn door'},
            {name:'Internal Sliding Door Kits', price:'From £104.00', img:'/img/dm-150.jpg', href:'/internal-sliding-kits', alt:'Internal sliding door kit'},
            {name:'Shop — Accessories', price:'Handles, locks & more', img:'/img/covington-system.jpg', href:'/shop', alt:'Door accessories and hardware'},
          ].map((cat) => (
            <div key={cat.name} style={{background:'#ffffff', borderRight:'1px solid #e0e0e0', borderBottom:'1px solid #e0e0e0'}}>
              <Link href={cat.href} style={{textDecoration:'none', display:'block'}}>
                <div style={{position:'relative', width:'100%', paddingBottom:'65%', overflow:'hidden', background:'#eeeeee'}}>
                  <Image src={cat.img} alt={cat.alt} fill style={{objectFit:'cover'}} sizes="33vw" />
                </div>
                <div style={{padding:'16px 20px 20px'}}>
                  <h3 style={{color:'#272446', fontSize:'16px', fontWeight:'900', margin:'0 0 4px 0'}}>{cat.name}</h3>
                  <p style={{color:'#efb627', fontSize:'15px', fontWeight:'700', margin:'0 0 12px 0'}}>{cat.price}</p>
                  <span style={{background:'#efb627', color:'#0f0d24', padding:'8px 20px', fontSize:'12px', fontWeight:'900', letterSpacing:'2px', textTransform:'uppercase', display:'inline-block'}}>SHOP NOW →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT — white, two columns, real copy */}
      <section style={{width:'100%', background:'#ffffff', padding:'56px 40px', boxSizing:'border-box', borderTop:'1px solid #e8e8e8'}}>
        <div style={{display:'grid', gridTemplateColumns:'3fr 2fr', gap:'56px', maxWidth:'1300px', margin:'0 auto', alignItems:'center'}}>
          <div>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 10px 0'}}>ABOUT DOORMATE</p>
            <h2 style={{color:'#272446', fontSize:'clamp(20px, 2.5vw, 32px)', fontWeight:'900', margin:'0 0 18px 0', lineHeight:'1.2'}}>
              Manufacturers, Suppliers & Installers of Quality Sliding Door Products
            </h2>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 14px 0'}}>
              DoorMate are based in Cardiff, South Wales and have been supplying sliding door systems since 2009. In 2015 we began manufacturing our own sliding barn door hardware in the UK — built for real doors, real walls and real homes, not generic one-size kits.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 24px 0'}}>
              Every system is backed by clear fitting guidance and real support from sales through to installation. Not sure which system fits your project? Call us.
            </p>
            <div style={{display:'flex', gap:'12px', flexWrap:'wrap', alignItems:'center'}}>
              <a href="tel:02921660393" style={{background:'#272446', color:'#ffffff', padding:'12px 28px', fontWeight:'900', fontSize:'15px', textDecoration:'none', display:'inline-block'}}>
                CALL 029 2166 0393
              </a>
              <a href="mailto:info@doormate.co.uk" style={{color:'#363557', fontWeight:'700', fontSize:'15px', textDecoration:'none', borderBottom:'2px solid #efb627', paddingBottom:'2px'}}>
                info@doormate.co.uk
              </a>
            </div>
          </div>
          <div style={{position:'relative', height:'380px', overflow:'hidden'}}>
            <Image src="/img/brooklyn-system.jpg" alt="DoorMate barn door hardware installed" fill style={{objectFit:'cover'}} sizes="40vw" />
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
        <div style={{display:'grid', gridTemplateColumns:'2fr 3fr', gap:'56px', maxWidth:'1300px', margin:'0 auto', alignItems:'center'}}>
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
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'16px', maxWidth:'1300px', margin:'0 auto'}}>
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
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'8px', flexWrap:'wrap', maxWidth:'800px', margin:'0 auto'}}>
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
