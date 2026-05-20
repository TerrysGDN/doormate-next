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
    <main style={{width:'100%', margin:0, padding:0, fontFamily:'sans-serif'}}>

      {/* HERO */}
      <section style={{position:'relative', width:'100%', height:'75vh', minHeight:'480px', maxHeight:'680px', overflow:'hidden'}}>
        <Image
          src="/img/hero-installed.jpg"
          alt="DoorMate sliding door system installed in UK home"
          fill
          style={{objectFit:'cover', objectPosition:'center'}}
          priority
        />
        <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, rgba(39,36,70,0.93) 0%, rgba(39,36,70,0.65) 55%, rgba(39,36,70,0.15) 100%)'}} />
        <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'clamp(24px, 5vw, 80px)'}}>
          <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 18px 0'}}>
            AS SEEN ON GEORGE CLARKE'S OLD HOUSE NEW HOME — CHANNEL 4
          </p>
          <h1 style={{color:'#ffffff', fontSize:'clamp(34px, 5.5vw, 66px)', fontWeight:'900', lineHeight:'1.05', margin:'0 0 20px 0', maxWidth:'680px'}}>
            The UK's Leading<br/>Sliding Door<br/>Specialists
          </h1>
          <p style={{color:'rgba(255,255,255,0.92)', fontSize:'clamp(15px, 1.8vw, 20px)', margin:'0 0 32px 0', maxWidth:'460px', lineHeight:'1.6'}}>
            Built for real doors, real walls and real homes since 2009.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/pocket-door-kits" style={{background:'#efb627', color:'#0f0d24', padding:'15px 40px', fontWeight:'900', fontSize:'16px', letterSpacing:'2px', textDecoration:'none', display:'inline-block', textTransform:'uppercase'}}>
              SHOP NOW
            </Link>
            <a href="tel:02921660393" style={{background:'transparent', border:'2px solid rgba(255,255,255,0.85)', color:'#ffffff', padding:'15px 40px', fontWeight:'700', fontSize:'16px', textDecoration:'none', display:'inline-block', letterSpacing:'1px'}}>
              029 2166 0393
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{width:'100%', background:'#363557', padding:'22px 40px', boxSizing:'border-box'}}>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', gap:'16px', maxWidth:'1400px', margin:'0 auto'}}>
          {[
            {title:'Trading Since 2009', body:'30 years in the door industry'},
            {title:'As Seen On Channel 4', body:"George Clarke's Old House New Home"},
            {title:'UK Sliding Door Specialists', body:'Pocket, internal, external and barn'},
            {title:'Handmade In Cardiff', body:'Real workshop. Real craftsmen.'},
          ].map(item => (
            <div key={item.title} style={{textAlign:'center', flex:'1', minWidth:'160px'}}>
              <p style={{color:'#efb627', fontWeight:'700', fontSize:'14px', margin:'0 0 4px 0'}}>{item.title}</p>
              <p style={{color:'rgba(255,255,255,0.75)', fontSize:'13px', margin:0}}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP BY CATEGORY — cards with image on top, text below */}
      <section style={{width:'100%', background:'#f4f4f4', padding:'56px 0 0', boxSizing:'border-box'}}>
        <div style={{padding:'0 40px', marginBottom:'32px'}}>
          <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 8px 0'}}>WHAT WE SELL</p>
          <h2 style={{color:'#272446', fontSize:'clamp(24px, 3.5vw, 40px)', fontWeight:'900', margin:0}}>Sliding Door Systems</h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', width:'100%'}}>
          {[
            {name:'Pocket Door Kits', price:'From £117.60', img:'/img/mirror-pocket-single.jpg', href:'/pocket-door-kits', alt:'Rocket pocket door kit installed in wall'},
            {name:'Barn Door Hardware', price:'From £150.00', img:'/img/gainesville-system.jpg', href:'/barn-door-hardware', alt:'Gainesville barn door hardware system'},
            {name:'External Sliding Door Kits', price:'From £104.00', img:'/img/external-kit.jpg', href:'/external-sliding-kits', alt:'External sliding door kit from Finland'},
            {name:'Handmade Barn Doors', price:'From £527.00', img:'/img/door-v-brace.jpg', href:'/doors', alt:'Handmade V-brace barn door Cardiff workshop'},
            {name:'Internal Sliding Door Kits', price:'From £104.00', img:'/img/dm-150.jpg', href:'/internal-sliding-kits', alt:'Internal sliding door kit timber doors'},
            {name:'Shop — Accessories', price:'Handles, locks & more', img:'/img/covington-system.jpg', href:'/shop', alt:'Door accessories and hardware components'},
          ].map((cat) => (
            <div key={cat.name} style={{background:'#ffffff', borderRight:'1px solid #e4e4e4', borderBottom:'1px solid #e4e4e4'}}>
              <Link href={cat.href} style={{textDecoration:'none', display:'block'}}>
                <div style={{position:'relative', width:'100%', paddingBottom:'68%', overflow:'hidden', background:'#eee'}}>
                  <Image src={cat.img} alt={cat.alt} fill style={{objectFit:'cover'}} sizes="33vw" />
                </div>
                <div style={{padding:'20px 24px 24px'}}>
                  <h3 style={{color:'#272446', fontSize:'17px', fontWeight:'900', margin:'0 0 4px 0'}}>{cat.name}</h3>
                  <p style={{color:'#efb627', fontSize:'15px', fontWeight:'700', margin:'0 0 16px 0'}}>{cat.price}</p>
                  <span style={{background:'#363557', color:'#ffffff', padding:'9px 22px', fontSize:'12px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', display:'inline-block'}}>SHOP NOW →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE — real copy, two columns */}
      <section style={{width:'100%', background:'#ffffff', padding:'64px 40px', boxSizing:'border-box'}}>
        <div style={{display:'grid', gridTemplateColumns:'3fr 2fr', gap:'64px', maxWidth:'1400px', margin:'0 auto', alignItems:'center'}}>
          <div>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 12px 0'}}>ABOUT DOORMATE</p>
            <h2 style={{color:'#272446', fontSize:'clamp(22px, 2.8vw, 36px)', fontWeight:'900', margin:'0 0 20px 0', lineHeight:'1.2'}}>
              Manufacturers, Suppliers & Installers of Quality Sliding Door Products
            </h2>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 18px 0'}}>
              DoorMate are based in Cardiff, South Wales and have been supplying sliding door systems since 2009. In 2015 we began manufacturing our own sliding barn door hardware in the UK — built for real doors, real walls and real homes, not generic one-size kits.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 18px 0'}}>
              Every system is backed by clear fitting guidance and real support, from sales through to manufacture and installation. Not sure which system you need? Call us — we'll ask the right questions and point you in the right direction.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 32px 0'}}>
              <strong style={{color:'#272446'}}>Barn Door Hardware | Pocket Door Kits | Internal & External Sliding Systems</strong>
            </p>
            <div style={{display:'flex', gap:'16px', alignItems:'center', flexWrap:'wrap'}}>
              <a href="tel:02921660393" style={{background:'#efb627', color:'#0f0d24', padding:'13px 30px', fontWeight:'900', fontSize:'15px', textDecoration:'none', display:'inline-block', letterSpacing:'1px'}}>
                CALL 029 2166 0393
              </a>
              <a href="mailto:info@doormate.co.uk" style={{color:'#363557', fontWeight:'700', fontSize:'15px', textDecoration:'none', borderBottom:'2px solid #efb627', paddingBottom:'2px'}}>
                info@doormate.co.uk
              </a>
            </div>
          </div>
          <div style={{position:'relative', height:'420px', overflow:'hidden'}}>
            <Image src="/img/brooklyn-system.jpg" alt="DoorMate barn door hardware installed — Brooklyn bi-parting system" fill style={{objectFit:'cover'}} sizes="40vw" />
          </div>
        </div>
      </section>

      {/* HOUZZ REVIEWS — widget left, real copy right */}
      <section style={{width:'100%', background:'#f4f4f4', padding:'56px 40px', boxSizing:'border-box'}}>
        <div style={{display:'grid', gridTemplateColumns:'320px 1fr', gap:'56px', maxWidth:'1200px', margin:'0 auto', alignItems:'start'}}>
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
            <div style={{marginTop:'16px'}}>
              <a href="https://uk.trustpilot.com/review/doormate.co.uk" target="_blank" rel="noopener noreferrer" style={{color:'#363557', fontSize:'14px', textDecoration:'none', borderBottom:'2px solid #efb627', paddingBottom:'2px', fontWeight:'700'}}>
                View us on Trustpilot →
              </a>
            </div>
          </div>
          <div style={{paddingTop:'8px'}}>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 12px 0'}}>CUSTOMER REVIEWS</p>
            <h2 style={{color:'#272446', fontSize:'clamp(22px, 3vw, 36px)', fontWeight:'900', margin:'0 0 20px 0'}}>What Our Customers Say</h2>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 16px 0'}}>
              We've been on Houzz since 2015 and have built a reputation based on one thing — doing the job properly. Real products, real advice, real installations.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 16px 0'}}>
              Every review is from a real customer who bought a real system and had it installed in their home. We don't chase reviews — we earn them.
            </p>
            <p style={{color:'#444', fontSize:'16px', lineHeight:'1.85', margin:'0 0 28px 0'}}>
              If you've got a question about any of our systems, call us on <strong style={{color:'#272446'}}>029 2166 0393</strong> or email <a href="mailto:info@doormate.co.uk" style={{color:'#363557', fontWeight:'700'}}>info@doormate.co.uk</a>.
            </p>
            <a href="https://www.houzz.co.uk/browseReviews/terryburnett98" target="_blank" rel="noopener noreferrer" style={{background:'#363557', color:'#ffffff', padding:'13px 28px', fontWeight:'700', fontSize:'14px', textDecoration:'none', display:'inline-block', letterSpacing:'1px', textTransform:'uppercase'}}>
              READ ALL REVIEWS ON HOUZZ →
            </a>
          </div>
        </div>
      </section>

      {/* POCKET DOOR BRAND LOGOS */}
      <section style={{width:'100%', background:'#ffffff', padding:'40px', boxSizing:'border-box', borderTop:'1px solid #e8e8e8', borderBottom:'1px solid #e8e8e8'}}>
        <div style={{maxWidth:'1200px', margin:'0 auto'}}>
          <p style={{color:'#888', fontSize:'12px', fontWeight:'700', textAlign:'center', margin:'0 0 24px 0', letterSpacing:'3px', textTransform:'uppercase'}}>Pocket Door Kit Brands We Supply & Support</p>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'48px', flexWrap:'wrap'}}>
            <Link href="/pocket-door-kits" style={{display:'block', textDecoration:'none'}}>
              <span style={{fontSize:'20px', fontWeight:'900', color:'#363557', letterSpacing:'-0.5px', opacity:'0.75'}}>COBURN</span>
            </Link>
            <Link href="/pocket-door-kits" style={{display:'block', textDecoration:'none'}}>
              <span style={{fontSize:'20px', fontWeight:'900', color:'#363557', letterSpacing:'-0.5px', opacity:'0.75'}}>ECLISSE</span>
            </Link>
            <Link href="/pocket-door-kits" style={{display:'block', textDecoration:'none'}}>
              <span style={{fontSize:'20px', fontWeight:'900', color:'#363557', letterSpacing:'-0.5px', opacity:'0.75'}}>ROCKET</span>
            </Link>
            <Link href="/doors/pocket-doors" style={{display:'block', textDecoration:'none'}}>
              <span style={{fontSize:'16px', fontWeight:'700', color:'#363557', opacity:'0.75'}}>MIRROR POCKET DOORS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DON'T ACCEPT CHEAP IMITATIONS — real copy from old site */}
      <section style={{width:'100%', background:'#272446', padding:'64px 40px', boxSizing:'border-box'}}>
        <div style={{display:'grid', gridTemplateColumns:'2fr 3fr', gap:'64px', maxWidth:'1400px', margin:'0 auto', alignItems:'center'}}>
          <div style={{position:'relative', height:'380px', overflow:'hidden'}}>
            <Image src="/img/gainesville-closeup.png" alt="DoorMate barn door hardware close-up — UK manufactured in Cardiff workshop" fill style={{objectFit:'cover'}} sizes="40vw" />
          </div>
          <div>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 12px 0'}}>WHY DOORMATE</p>
            <h2 style={{color:'#ffffff', fontSize:'clamp(22px, 2.8vw, 36px)', fontWeight:'900', margin:'0 0 20px 0'}}>Don't Accept Cheap Imitations</h2>
            <p style={{color:'rgba(255,255,255,0.85)', fontSize:'16px', lineHeight:'1.85', margin:'0 0 16px 0'}}>
              The market is flooded with mass-produced barn door kits designed to look the part, but built without consideration for real door weights, real wall constructions, or long-term reliability.
            </p>
            <p style={{color:'rgba(255,255,255,0.85)', fontSize:'16px', lineHeight:'1.85', margin:'0 0 16px 0'}}>
              Many of these systems are manufactured to a price, not a standard — resulting in poor fixing points, undersized tracks, noisy rollers, and premature wear. In many cases, they end up needing replacement far sooner than expected.
            </p>
            <p style={{color:'rgba(255,255,255,0.85)', fontSize:'16px', lineHeight:'1.85', margin:'0 0 28px 0'}}>
              At DoorMate, our barn door hardware is designed and manufactured in Cardiff — with performance, strength, and longevity in mind. If you're investing in a sliding door system, it should work smoothly, fix securely, and perform for years.
            </p>
            <Link href="/barn-door-hardware" style={{background:'#efb627', color:'#0f0d24', padding:'13px 32px', fontWeight:'900', fontSize:'15px', textDecoration:'none', display:'inline-block', letterSpacing:'1px', textTransform:'uppercase'}}>
              VIEW BARN DOOR HARDWARE →
            </Link>
          </div>
        </div>
      </section>

      {/* CHANNEL 4 BANNER */}
      <section style={{width:'100%', background:'#363557', padding:'44px 40px', boxSizing:'border-box'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'24px', maxWidth:'1400px', margin:'0 auto'}}>
          <div>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 8px 0'}}>FEATURED ON</p>
            <h3 style={{color:'#ffffff', fontSize:'clamp(17px, 2.5vw, 26px)', fontWeight:'900', margin:0}}>George Clarke's Old House New Home — Channel 4</h3>
          </div>
          <Link href="/as-seen-on-tv" style={{background:'#efb627', color:'#0f0d24', padding:'13px 28px', fontWeight:'900', fontSize:'14px', textDecoration:'none', display:'inline-block', letterSpacing:'1px', textTransform:'uppercase', whiteSpace:'nowrap'}}>
            WATCH NOW →
          </Link>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section style={{width:'100%', background:'#f4f4f4', padding:'28px 40px', boxSizing:'border-box'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'8px', flexWrap:'wrap', maxWidth:'900px', margin:'0 auto'}}>
          {[
            {label:'Facebook', href:'https://www.facebook.com/Door-Mate-1173024366050268/'},
            {label:'X / Twitter', href:'https://x.com/mate_door'},
            {label:'Instagram', href:'https://www.instagram.com/doormate_cardiff/'},
            {label:'YouTube', href:'https://www.youtube.com/channel/UCiVCUZ4T_FR4SLo81Ecuzpw'},
            {label:'LinkedIn', href:'https://www.linkedin.com/in/terry-burnett-a74474116/'},
            {label:'Pinterest', href:'https://www.pinterest.co.uk/burnett7776/boards/'},
          ].map((s, i, arr) => (
            <span key={s.label} style={{display:'inline-flex', alignItems:'center', gap:'8px'}}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" style={{color:'#363557', fontWeight:'700', fontSize:'13px', textDecoration:'none', letterSpacing:'1px', textTransform:'uppercase'}}>
                {s.label}
              </a>
              {i < arr.length - 1 && <span style={{color:'#ccc', fontSize:'12px'}}>|</span>}
            </span>
          ))}
        </div>
        <p style={{textAlign:'center', color:'#888', fontSize:'13px', margin:'10px 0 0'}}>Follow us for installations, projects and inspiration</p>
      </section>

    </main>
  )
}
