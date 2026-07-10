'use client'

export default function GoogleReviewsCarousel({ rating, reviews, reviewUrl }) {
  if (!rating) {
    return (
      <div style={{textAlign:'center', fontFamily:"'Libre Franklin', sans-serif"}}>
        <p style={{color:'#272446', fontSize:'14px', fontWeight:'600'}}>Google reviews are temporarily unavailable.</p>
        {reviewUrl && (
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer" style={{background:'#f1b52a', color:'#0f0d24', padding:'11px 28px', fontSize:'14px', fontWeight:'900', textDecoration:'none', borderRadius:'4px', display:'inline-block', marginTop:'12px'}}>Leave Us A Google Review</a>
        )}
      </div>
    )
  }

  const pct = Math.max(0, Math.min(100, (rating / 5) * 100))
  const snippets = (reviews || []).filter(r => r.text).slice(0, 3)

  return (
    <div style={{fontFamily:"'Libre Franklin', sans-serif", textAlign:'center', width:'100%'}}>
      <div style={{display:'inline-flex', alignItems:'center', gap:'10px', background:'#ffffff', border:'1px solid #e6e2d6', borderRadius:'999px', padding:'12px 22px'}}>
        <svg width="26" height="26" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
          <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
          <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
          <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
        </svg>
        <span style={{color:'#202124', fontSize:'17px', fontWeight:'700', fontFamily:'Arial, sans-serif'}}>{rating.toFixed(1)}</span>
        <span style={{position:'relative', display:'inline-block', fontSize:'20px', lineHeight:'1', letterSpacing:'2px'}}>
          <span style={{color:'#e6e2d6'}}>★★★★★</span>
          <span style={{position:'absolute', top:0, left:0, width:`${pct}%`, overflow:'hidden', whiteSpace:'nowrap', color:'#efb627'}}>★★★★★</span>
        </span>
      </div>

      {snippets.length > 0 && (
        <div style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'16px', textAlign:'left'}}>
          {snippets.map((r, i) => {
            const stars = Math.round(r.rating || 0)
            return (
              <div key={i} style={{background:'#ffffff', border:'1px solid #e8eaed', borderRadius:'8px', padding:'12px'}}>
                <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'6px'}}>
                  <div style={{width:'26px', height:'26px', borderRadius:'50%', background:'#e8eaed', color:'#5f6368', fontSize:'12px', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontFamily:'Arial, sans-serif'}}>
                    {r.author ? r.author.charAt(0).toUpperCase() : '?'}
                  </div>
                  <span style={{color:'#202124', fontSize:'13px', fontWeight:'500', fontFamily:'Arial, sans-serif'}}>{r.author}</span>
                </div>
                <div style={{color:'#fbbc04', fontSize:'13px', letterSpacing:'1px', marginBottom:'4px', lineHeight:'1'}}>
                  {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
                </div>
                <p style={{
                  color:'#3c4043', fontSize:'12.5px', lineHeight:'1.5', margin:0, fontFamily:'Arial, sans-serif',
                  display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical', overflow:'hidden',
                }}>
                  {r.text}
                </p>
              </div>
            )
          })}
        </div>
      )}

      {reviewUrl && (
        <p style={{margin:'12px 0 0 0'}}>
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer" style={{color:'#272446', fontSize:'13px', fontWeight:'700', textDecoration:'underline'}}>Read our Google reviews</a>
        </p>
      )}
    </div>
  )
}
