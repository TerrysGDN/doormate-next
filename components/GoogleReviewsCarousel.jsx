'use client'

export default function GoogleReviewsCarousel({ rating, reviews, reviewUrl }) {
  if (!rating) {
    return (
      <div className="dm-google-fallback">
        <span className="dm-google-proof-mark" aria-hidden="true">G</span>
        <strong className="dm-google-proof-rating">4.8 <span aria-label="5 star rating">★★★★★</span></strong>
        <p className="dm-google-proof-title">DoorMate on Google</p>
        <p className="dm-google-proof-copy">Independent feedback from customers who have bought from us.</p>
        <a className="dm-review-action" href={reviewUrl || 'https://www.google.com/maps/search/?api=1&query=DoorMate%20Cardiff'} target="_blank" rel="noopener noreferrer">Read Our Google Reviews</a>
      </div>
    )
  }

  const snippets = (reviews || []).filter(r => r.text).slice(0, 3)

  return (
    <div className="dm-google-reviews">
      {snippets.length > 0 && (
        <div className="dm-google-snippets">
          {snippets.map((r, i) => {
            const stars = Math.round(r.rating || 0)
            return (
              <div className="dm-google-snippet" key={i}>
                <div className="dm-google-author">
                  <div className="dm-google-avatar">
                    {r.author ? r.author.charAt(0).toUpperCase() : '?'}
                  </div>
                  <span>{r.author}</span>
                </div>
                <div className="dm-google-stars">
                  {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
                </div>
                <p>
                  {r.text}
                </p>
              </div>
            )
          })}
        </div>
      )}

      {reviewUrl && (
        <p className="dm-google-review-link">
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer">Leave Us A Google Review</a>
        </p>
      )}
    </div>
  )
}
