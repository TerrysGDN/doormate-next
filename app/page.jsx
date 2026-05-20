import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "DoorMate Sliding Door Systems | The UK's Leading Sliding Door Specialists",
  description: "Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Supplied and manufactured in Cardiff since 2009. As Seen On Channel 4.",
  openGraph: {
    title: "DoorMate Sliding Door Systems | The UK's Leading Sliding Door Specialists",
    description: "Pocket doors, internal and external sliding kits, barn door hardware and handmade doors. Supplied and manufactured in Cardiff since 2009. As Seen On Channel 4.",
    type: 'website',
    url: 'https://doormate.co.uk',
  }
}

export default function HomePage() {
  return (
    <>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{position:'relative', width:'100%', height:'620px', overflow:'hidden'}}>
        <Image
          src="/img/hero-installed.jpg"
          alt="DoorMate sliding door system installed in a real home"
          fill
          style={{objectFit:'cover', objectPosition:'center'}}
          priority
        />
        <div style={{position:'absolute', inset:0, background:'rgba(39,36,70,0.72)'}} />
        <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 80px', maxWidth:'780px'}}>
          <p style={{color:'#efb627', fontSize:'11px', fontWeight:'bold', letterSpacing:'3px', textTransform:'uppercase', margin:'0 0 18px 0'}}>
            AS SEEN ON GEORGE CLARKE'S OLD HOUSE NEW HOME — CHANNEL 4
          </p>
          <h1 style={{color:'white', fontSize:'58px', fontWeight:'900', lineHeight:'1.1', margin:'0 0 20px 0'}}>
            The UK's Leading<br />Sliding Door Specialists
          </h1>
          <p style={{color:'white', fontSize:'20px', margin:'0 0 36px 0', borderLeft:'4px solid #efb627', paddingLeft:'18px', lineHeight:'1.5'}}>
            Built for real doors, real walls and real homes since 2009.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/pocket-door-kits" style={{background:'#efb627', color:'#0f0d24', padding:'16px 44px', fontWeight:'900', fontSize:'16px', letterSpacing:'1px', textDecoration:'none', display:'inline-block'}}>
              BUY NOW
            </Link>
            <Link href="/contact" style={{border:'2px solid white', color:'white', padding:'16px 44px', fontWeight:'bold', fontSize:'16px', textDecoration:'none', display:'inline-block', letterSpacing:'1px'}}>
              GET ADVICE
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <section style={{background:'#363557', padding:'22px 60px'}}>
        <div style={{maxWidth:'1300px', margin:'0 auto', display:'flex', justifyContent:'space-around', flexWrap:'wrap', gap:'16px'}}>
          {[
            {title:'Trading Since 2009', body:'30 years in the door industry'},
            {title:'As Seen On Channel 4', body:"George Clarke's Old House New Home"},
            {title:'UK Sliding Door Specialists', body:'Pocket, internal, external and barn'},
            {title:'Handmade In Cardiff', body:'Real workshop. Real craftsmen.'},
          ].map(item => (
            <div key={item.title} style={{textAlign:'center'}}>
              <p style={{color:'#efb627', fontWeight:'bold', fontSize:'14px', margin:'0 0 4px 0'}}>{item.title}</p>
              <p style={{color:'rgba(255,255,255,0.75)', fontSize:'12px', margin:0}}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS — FRONT AND CENTRE ───────────────────────────────── */}
      <section style={{background:'#272446', padding:'64px 60px'}}>
        <div style={{maxWidth:'1300px', margin:'0 auto'}}>
          <p style={{color:'#efb627', fontSize:'11px', fontWeight:'bold', letterSpacing:'3px', textTransform:'uppercase', margin:'0 0 8px 0', textAlign:'center'}}>CUSTOMER REVIEWS</p>
          <h2 style={{color:'white', fontSize:'38px', fontWeight:'bold', textAlign:'center', margin:'0 0 48px 0'}}>What Our Customers Say</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'24px'}}>
            {[
              {stars:'★★★★★', text:'"Fantastic service from start to finish. Terry walked us through the whole system over the phone. The hardware arrived quickly and looks absolutely stunning in our hallway."', name:'Sarah M.', location:'Bristol'},
              {stars:'★★★★★', text:'"Really impressed. We used the Brooklyn bi-parting system for our kitchen-diner opening. The quality is outstanding — feels like it will last a lifetime."', name:'James T.', location:'London'},
              {stars:'★★★★★', text:'"Found DoorMate on Houzz after searching for ages. Best decision I made — they are the real deal. Expert advice, proper UK-made hardware, and a great result."', name:'Louise K.', location:'Manchester'},
            ].map((review, i) => (
              <div key={i} style={{background:'rgba(255,255,255,0.06)', padding:'32px', borderTop:'3px solid #efb627'}}>
                <p style={{color:'#efb627', fontSize:'22px', margin:'0 0 16px 0'}}>{review.stars}</p>
                <p style={{color:'white', fontSize:'15px', lineHeight:'1.75', margin:'0 0 20px 0'}}>{review.text}</p>
                <p style={{color:'#efb627', fontWeight:'bold', fontSize:'13px', margin:'0 0 2px 0'}}>{review.name}</p>
                <p style={{color:'rgba(255,255,255,0.45)', fontSize:'12px', margin:0}}>{review.location}</p>
              </div>
            ))}
          </div>
          {/* HOUZZ EMBED REPLACES PLACEHOLDER REVIEWS ABOVE WHEN EMBED CODE IS AVAILABLE */}
          <div style={{textAlign:'center', marginTop:'36px'}}>
            <a href="https://www.houzz.co.uk/professionals/door-hardware-and-accessories/doormate-pfvwgb-pf~1084064770" target="_blank" rel="noopener noreferrer" style={{color:'#efb627', fontSize:'15px', textDecoration:'none', borderBottom:'1px solid #efb627', paddingBottom:'3px'}}>
              Find more DoorMate reviews on Houzz →
            </a>
          </div>
        </div>
      </section>

      {/* ── CATEGORY CARDS ───────────────────────────────────────────── */}
      <section style={{background:'#f5f5f5', padding:'64px 60px'}}>
        <div style={{maxWidth:'1300px', margin:'0 auto'}}>
          <p style={{color:'#efb627', fontSize:'11px', fontWeight:'bold', letterSpacing:'3px', textTransform:'uppercase', margin:'0 0 8px 0'}}>SHOP BY CATEGORY</p>
          <h2 style={{color:'#272446', fontSize:'38px', fontWeight:'bold', margin:'0 0 40px 0'}}>Explore Our Systems</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'6px'}}>
            {[
              {name:'Pocket Door Kits', price:'From £117.60', img:'/img/mirror-pocket-single.jpg', href:'/pocket-door-kits', alt:'Pocket door kit installed in a wall'},
              {name:'Internal Sliding Door Kits', price:'From £104.00', img:'/img/dm-150.jpg', href:'/internal-sliding-kits', alt:'Internal sliding door kit'},
              {name:'External Sliding Door Kits', price:'From £104.00', img:'/img/external-kit.jpg', href:'/external-sliding-kits', alt:'External sliding door kit'},
              {name:'Handmade Doors', price:'From £527.00', img:'/img/door-v-brace.jpg', href:'/doors', alt:'Handmade barn door Cardiff'},
              {name:'Barn Door Hardware', price:'From £150.00', img:'/img/gainesville-system.jpg', href:'/barn-door-hardware', alt:'Barn door hardware system'},
              {name:'Shop — Accessories & Components', price:'Pull handles, locks, brackets and more', img:'/img/covington-system.jpg', href:'/shop', alt:'Door accessories and components'},
            ].map((cat) => (
              <Link key={cat.name} href={cat.href} style={{position:'relative', display:'block', height:'320px', overflow:'hidden', textDecoration:'none'}}>
                <Image
                  src={cat.img}
                  alt={cat.alt}
                  fill
                  style={{objectFit:'cover'}}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(39,36,70,0.96) 0%, rgba(39,36,70,0.3) 55%, transparent 100%)'}} />
                <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'28px'}}>
                  <h3 style={{color:'white', fontSize:'20px', fontWeight:'bold', margin:'0 0 6px 0'}}>{cat.name}</h3>
                  <p style={{color:'#efb627', fontSize:'15px', margin:'0 0 14px 0'}}>{cat.price}</p>
                  <span style={{background:'#efb627', color:'#0f0d24', padding:'10px 24px', fontSize:'12px', fontWeight:'bold', letterSpacing:'1px', display:'inline-block'}}>SHOP NOW</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGO BANNER ───────────────────────────────────────── */}
      <section style={{background:'white', padding:'40px 60px', borderTop:'1px solid #eee', borderBottom:'1px solid #eee'}}>
        <div style={{maxWidth:'1300px', margin:'0 auto', textAlign:'center'}}>
          <p style={{color:'#999', fontSize:'11px', fontWeight:'bold', letterSpacing:'3px', textTransform:'uppercase', margin:'0 0 24px 0'}}>TRUSTED BY INDUSTRY LEADERS</p>
          {/* CLIENT LOGOS — Terry to supply actual logo files */}
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'60px', flexWrap:'wrap'}}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} style={{width:'120px', height:'50px', background:'#f0f0f0', borderRadius:'4px'}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DOORMATE ─────────────────────────────────────────────── */}
      <section style={{background:'#363557', padding:'64px 60px'}}>
        <div style={{maxWidth:'1300px', margin:'0 auto'}}>
          <p style={{color:'#efb627', fontSize:'11px', fontWeight:'bold', letterSpacing:'3px', textTransform:'uppercase', margin:'0 0 8px 0', textAlign:'center'}}>WHY CHOOSE DOORMATE</p>
          <h2 style={{color:'white', fontSize:'38px', fontWeight:'bold', textAlign:'center', margin:'0 0 48px 0'}}>Sliding Door Systems — Engineered For Real Homes</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'40px'}}>
            {[
              {title:'UK Sliding Door Specialists Since 2009', body:'30 years in the door industry. We know our game.'},
              {title:'As Seen on Channel 4', body:"Featured on George Clarke's Old House New Home — recognised nationally."},
              {title:'The Only Genuine Barn Door Hardware Manufacturer', body:'Every system handmade in our Cardiff workshop. Nobody else manufactures — they just import.'},
              {title:'Expert Advice', body:'Not sure which system you need? Call us. 029 2166 0393.'},
            ].map(item => (
              <div key={item.title} style={{borderTop:'3px solid #efb627', paddingTop:'24px'}}>
                <h3 style={{color:'white', fontSize:'16px', fontWeight:'bold', margin:'0 0 12px 0'}}>{item.title}</h3>
                <p style={{color:'rgba(255,255,255,0.7)', fontSize:'14px', lineHeight:'1.7', margin:0}}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNEL 4 BANNER ─────────────────────────────────────────── */}
      <section style={{background:'#272446', padding:'48px 60px'}}>
        <div style={{maxWidth:'1300px', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'24px'}}>
          <div>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'bold', letterSpacing:'3px', textTransform:'uppercase', margin:'0 0 10px 0'}}>FEATURED ON</p>
            <h3 style={{color:'white', fontSize:'26px', fontWeight:'bold', margin:0}}>George Clarke's Old House New Home — Channel 4</h3>
          </div>
          <Link href="/about" style={{color:'#efb627', fontWeight:'bold', fontSize:'15px', textDecoration:'none', borderBottom:'2px solid #efb627', paddingBottom:'4px', whiteSpace:'nowrap'}}>
            OUR STORY →
          </Link>
        </div>
      </section>

    </>
  )
}
