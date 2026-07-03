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
      {rating && (
        <p style={{color:'#efb627', fontSize:'14px', fontWeight:'700', textAlign:'center', margin:'0 0 12px 0'}}>
          {rating} out of 5 on Google{totalReviews ? ` (${totalReviews} reviews)` : ''}
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
