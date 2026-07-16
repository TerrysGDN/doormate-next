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

  const snippets = (reviews || []).filter(r => r.text).slice(0, 3)

  return (
    <div style={{fontFamily:"'Libre Franklin', sans-serif", textAlign:'center', width:'100%'}}>
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
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer" style={{color:'#272446', fontSize:'13px', fontWeight:'700', textDecoration:'underline'}}>Leave Us A Google Review</a>
        </p>
      )}
    </div>
  )
}
