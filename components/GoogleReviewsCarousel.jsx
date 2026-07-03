'use client'

import { useState, useEffect } from 'react'

export default function GoogleReviewsCarousel({ reviews, rating, totalReviews, reviewUrl }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!reviews || reviews.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [reviews])

  if (!reviews || reviews.length === 0) {
    return (
      <div style={{textAlign:'center', fontFamily:"'Libre Franklin', sans-serif"}}>
        <p style={{color:'#272446', fontSize:'14px', fontWeight:'600'}}>Google reviews are temporarily unavailable.</p>
        {reviewUrl && (
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer" style={{background:'#f1b52a', color:'#0f0d24', padding:'11px 28px', fontSize:'14px', fontWeight:'900', textDecoration:'none', borderRadius:'4px', display:'inline-block', marginTop:'12px'}}>Leave Us A Google Review</a>
        )}
      </div>
    )
  }

  const current = reviews[index]

  return (
    <div style={{fontFamily:"'Libre Franklin', sans-serif"}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', margin:'0 0 12px 0'}}>
        <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
          <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
          <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
          <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
        </svg>
        <span style={{color:'#202124', fontSize:'16px', fontWeight:'700', fontFamily:'Arial, sans-serif'}}>Google Reviews</span>
      </div>
      {rating && (
        <p style={{color:'#272446', fontSize:'13px', fontWeight:'600', textAlign:'center', margin:'0 0 12px 0'}}>
          {rating} out of 5{totalReviews ? ` — ${totalReviews} reviews` : ''}
        </p>
      )}

      <div style={{background:'#ffffff', border:'1px solid #e6e2d6', borderRadius:'12px', padding:'22px 26px', textAlign:'center', minHeight:'150px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <div style={{color:'#efb627', fontSize:'17px', marginBottom:'8px'}}>
          {'★'.repeat(current.rating)}{'☆'.repeat(5 - current.rating)}
        </div>
        <p style={{color:'#272446', fontSize:'14px', lineHeight:'1.6', fontWeight:'600', margin:'0 0 12px 0'}}>
          &quot;{current.text}&quot;
        </p>
        <p style={{color:'#272446', fontSize:'13px', fontWeight:'900', margin:0}}>{current.author}</p>
      </div>

      {reviews.length > 1 && (
        <div style={{display:'flex', justifyContent:'center', gap:'8px', marginTop:'14px'}}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              style={{width:'8px', height:'8px', borderRadius:'50%', background: i === index ? '#efb627' : '#e6e2d6', border:'none', padding:0, cursor:'pointer'}}
            />
          ))}
        </div>
      )}

      {reviewUrl && (
        <div style={{textAlign:'center', marginTop:'20px'}}>
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer" style={{background:'#f1b52a', color:'#0f0d24', padding:'11px 28px', fontSize:'14px', fontWeight:'900', textDecoration:'none', borderRadius:'4px', display:'inline-block'}}>Leave Us A Google Review</a>
        </div>
      )}
    </div>
  )
}
