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
    <main style={{width:'100%', margin:0, padding:0, fontFamily:'sans-serif'}}>

      {/* HERO — FULL WIDTH, FULL IMPACT */}
      <section style={{position:'relative', width:'100%', height:'100vh', minHeight:'600px', maxHeight:'800px', overflow:'hidden', display:'block'}}>
        <Image
          src="/img/hero-installed.jpg"
          alt="DoorMate sliding door system installed"
          fill
          style={{objectFit:'cover', objectPosition:'center'}}
          priority
        />
        <div style={{position:'absolute', top:0, left:0, right:0, bottom:0, background:'linear-gradient(to right, rgba(39,36,70,0.92) 0%, rgba(39,36,70,0.6) 60%, rgba(39,36,70,0.2) 100%)'}} />
        <div style={{position:'absolute', top:0, left:0, right:0, bottom:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px'}}>
          <p style={{color:'#efb627', fontSize:'12px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 20px 0'}}>
            AS SEEN ON GEORGE CLARKE'S OLD HOUSE NEW HOME — CHANNEL 4
          </p>
          <h1 style={{color:'#ffffff', fontSize:'clamp(40px, 6vw, 72px)', fontWeight:'900', lineHeight:'1.05', margin:'0 0 24px 0', maxWidth:'800px'}}>
            The UK's Leading<br/>Sliding Door<br/>Specialists
          </h1>
          <div style={{width:'5px', height:'80px', background:'#efb627', margin:'0 0 24px 0'}} />
          <p style={{color:'#ffffff', fontSize:'clamp(16px, 2vw, 22px)', margin:'0 0 40px 0', maxWidth:'520px', lineHeight:'1.6', opacity:'0.95'}}>
            Built for real doors, real walls and real homes since 2009.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <Link href="/pocket-door-kits" style={{background:'#efb627', color:'#0f0d24', padding:'18px 48px', fontWeight:'900', fontSize:'18px', letterSpacing:'2px', textDecoration:'none', display:'inline-block', textTransform:'uppercase'}}>
              BUY NOW
            </Link>
            <Link href="/contact" style={{background:'transparent', border:'2px solid #ffffff', color:'#ffffff', padding:'18px 48px', fontWeight:'700', fontSize:'18px', textDecoration:'none', display:'inline-block', letterSpacing:'2px', textTransform:'uppercase'}}>
              GET ADVICE
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR — FULL WIDTH NAVY */}
      <section style={{width:'100%', background:'#363557', padding:'28px 60px', boxSizing:'border-box'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'20px', maxWidth:'100%'}}>
          {[
            {title:'Trading Since 2009', body:'30 years in the door industry'},
            {title:'As Seen On Channel 4', body:"George Clarke's Old House New Home"},
            {title:'UK Sliding Door Specialists', body:'Pocket, internal, external and barn'},
            {title:'Handmade In Cardiff', body:'Real workshop. Real craftsmen.'},
          ].map(item => (
            <div key={item.title} style={{textAlign:'center', flex:'1', minWidth:'200px'}}>
              <p style={{color:'#efb627', fontWeight:'700', fontSize:'15px', margin:'0 0 6px 0'}}>{item.title}</p>
              <p style={{color:'rgba(255,255,255,0.8)', fontSize:'13px', margin:0}}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS — UNMISSABLE */}
      <section style={{width:'100%', background:'#272446', padding:'80px 60px', boxSizing:'border-box'}}>
        <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 12px 0', textAlign:'center'}}>CUSTOMER REVIEWS</p>
        <h2 style={{color:'#ffffff', fontSize:'clamp(28px, 4vw, 44px)', fontWeight:'900', textAlign:'center', margin:'0 0 60px 0'}}>What Our Customers Say</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'32px', maxWidth:'1400px', margin:'0 auto'}}>
          {[
            {text:'"Fantastic service from start to finish. Terry walked us through the whole system over the phone. The hardware arrived quickly and looks absolutely stunning in our hallway."', name:'Sarah M.', location:'Bristol'},
            {text:'"Really impressed. We used the Brooklyn bi-parting system for our kitchen-diner opening. The quality is outstanding — feels like it will last a lifetime."', name:'James T.', location:'London'},
            {text:'"Found DoorMate on Houzz after searching for ages. Best decision I made — they are the real deal. Expert advice, proper UK-made hardware, and a great result."', name:'Louise K.', location:'Manchester'},
          ].map((review, i) => (
            <div key={i} style={{background:'rgba(255,255,255,0.07)', padding:'40px', borderTop:'4px solid #efb627'}}>
              <p style={{color:'#efb627', fontSize:'28px', margin:'0 0 20px 0'}}>★★★★★</p>
              <p style={{color:'#ffffff', fontSize:'16px', lineHeight:'1.8', margin:'0 0 24px 0'}}>{review.text}</p>
              <p style={{color:'#efb627', fontWeight:'700', fontSize:'14px', margin:'0 0 4px 0'}}>{review.name}</p>
              <p style={{color:'rgba(255,255,255,0.5)', fontSize:'13px', margin:0}}>{review.location}</p>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center', marginTop:'48px'}}>
          <a href="https://www.houzz.co.uk/professionals/door-hardware-and-accessories/doormate-pfvwgb-pf~1084064770" target="_blank" rel="noopener noreferrer" style={{color:'#efb627', fontSize:'16px', textDecoration:'none', borderBottom:'2px solid #efb627', paddingBottom:'4px', fontWeight:'700'}}>
            Read all our reviews on Houzz →
          </a>
        </div>
      </section>

      {/* CATEGORY TILES — FULL WIDTH GRID */}
      <section style={{width:'100%', background:'#ffffff', padding:'80px 0', boxSizing:'border-box'}}>
        <div style={{padding:'0 60px', marginBottom:'48px'}}>
          <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 12px 0'}}>SHOP BY CATEGORY</p>
          <h2 style={{color:'#272446', fontSize:'clamp(28px, 4vw, 44px)', fontWeight:'900', margin:0}}>Explore Our Systems</h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridTemplateRows:'repeat(2, 380px)', gap:'4px', width:'100%'}}>
          {[
            {name:'Pocket Door Kits', price:'From £117.60', img:'/img/mirror-pocket-single.jpg', href:'/pocket-door-kits', alt:'Pocket door kit'},
            {name:'Internal Sliding Door Kits', price:'From £104.00', img:'/img/dm-150.jpg', href:'/internal-sliding-kits', alt:'Internal sliding door kit'},
            {name:'External Sliding Door Kits', price:'From £104.00', img:'/img/external-kit.jpg', href:'/external-sliding-kits', alt:'External sliding door kit'},
            {name:'Handmade Doors', price:'From £527.00', img:'/img/door-v-brace.jpg', href:'/doors', alt:'Handmade door'},
            {name:'Barn Door Hardware', price:'From £150.00', img:'/img/gainesville-system.jpg', href:'/barn-door-hardware', alt:'Barn door hardware'},
            {name:'Shop — Accessories & Components', price:'Handles, locks, brackets and more', img:'/img/covington-system.jpg', href:'/shop', alt:'Door accessories'},
          ].map((cat) => (
            <Link key={cat.name} href={cat.href} style={{position:'relative', display:'block', overflow:'hidden', textDecoration:'none'}}>
              <Image src={cat.img} alt={cat.alt} fill style={{objectFit:'cover', transition:'transform 0.5s ease'}} sizes="33vw" />
              <div style={{position:'absolute', top:0, left:0, right:0, bottom:0, background:'linear-gradient(to top, rgba(15,13,36,0.97) 0%, rgba(15,13,36,0.4) 50%, rgba(15,13,36,0.1) 100%)'}} />
              <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'36px'}}>
                <h3 style={{color:'#ffffff', fontSize:'22px', fontWeight:'900', margin:'0 0 8px 0'}}>{cat.name}</h3>
                <p style={{color:'#efb627', fontSize:'16px', fontWeight:'700', margin:'0 0 20px 0'}}>{cat.price}</p>
                <span style={{background:'#efb627', color:'#0f0d24', padding:'12px 28px', fontSize:'13px', fontWeight:'900', letterSpacing:'2px', textTransform:'uppercase', display:'inline-block'}}>SHOP NOW</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY DOORMATE */}
      <section style={{width:'100%', background:'#363557', padding:'80px 60px', boxSizing:'border-box'}}>
        <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 12px 0', textAlign:'center'}}>WHY CHOOSE DOORMATE</p>
        <h2 style={{color:'#ffffff', fontSize:'clamp(28px, 4vw, 44px)', fontWeight:'900', textAlign:'center', margin:'0 0 64px 0'}}>Sliding Door Systems — Engineered For Real Homes</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'48px', maxWidth:'1400px', margin:'0 auto'}}>
          {[
            {title:'UK Sliding Door Specialists Since 2009', body:'30 years in the door industry. We know our game.'},
            {title:'As Seen on Channel 4', body:"Featured on George Clarke's Old House New Home — recognised nationally."},
            {title:'The Only Genuine Barn Door Hardware Manufacturer', body:'Every system handmade in our Cardiff workshop. Nobody else manufactures — they just import.'},
            {title:'Expert Advice', body:'Not sure which system you need? Call us. 029 2166 0393.'},
          ].map(item => (
            <div key={item.title} style={{borderTop:'4px solid #efb627', paddingTop:'28px'}}>
              <h3 style={{color:'#ffffff', fontSize:'18px', fontWeight:'900', margin:'0 0 16px 0'}}>{item.title}</h3>
              <p style={{color:'rgba(255,255,255,0.75)', fontSize:'15px', lineHeight:'1.8', margin:0}}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHANNEL 4 */}
      <section style={{width:'100%', background:'#272446', padding:'60px', boxSizing:'border-box'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'24px', maxWidth:'1400px', margin:'0 auto'}}>
          <div>
            <p style={{color:'#efb627', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', margin:'0 0 12px 0'}}>FEATURED ON</p>
            <h3 style={{color:'#ffffff', fontSize:'clamp(20px, 3vw, 32px)', fontWeight:'900', margin:0}}>George Clarke's Old House New Home — Channel 4</h3>
          </div>
          <Link href="/about" style={{color:'#efb627', fontWeight:'900', fontSize:'16px', textDecoration:'none', borderBottom:'3px solid #efb627', paddingBottom:'6px', whiteSpace:'nowrap', letterSpacing:'1px'}}>
            OUR STORY →
          </Link>
        </div>
      </section>

    </main>
  )
}
