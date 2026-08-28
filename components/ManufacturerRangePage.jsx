import Image from 'next/image'
import Link from 'next/link'

export default function ManufacturerRangePage({
  manufacturer,
  logo,
  heading,
  introduction,
  heroImage,
  heroAlt,
  proofPoints,
  proofGraphic,
  proofGraphicAlt,
  choices,
  choicesHeading = 'Choose Your Door System',
  choicesIntroduction,
  guidance,
}) {
  return (
    <div className="dm-manufacturer-page">
      <section className="dm-manufacturer-intro" aria-labelledby="manufacturer-heading">
        <div className="dm-section-frame">
          <Link className="dm-manufacturer-back" href="/pocket-door-kits">
            <span aria-hidden="true">&larr;</span> Pocket Door Kits
          </Link>

          <div className="dm-manufacturer-intro-grid">
            <div className="dm-manufacturer-intro-copy">
              <span className="dm-manufacturer-logo">
                <Image src={logo} alt={`${manufacturer} logo`} fill sizes="230px" priority />
              </span>
              <h1 id="manufacturer-heading">{heading}</h1>
              <p>{introduction}</p>
            </div>

            <div className="dm-manufacturer-hero">
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 49vw"
              />
            </div>
          </div>

          {proofGraphic ? (
            <div className="dm-manufacturer-proof-graphic">
              <Image src={proofGraphic} alt={proofGraphicAlt} fill sizes="620px" />
            </div>
          ) : (
            <div className="dm-manufacturer-proof" aria-label={`${manufacturer} product benefits`}>
              {proofPoints.map((point) => (
                <div className="dm-manufacturer-proof-item" key={point.title}>
                  <span aria-hidden="true">{point.icon}</span>
                  <div>
                    <strong>{point.title}</strong>
                    {point.detail && <small>{point.detail}</small>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section
        className={`dm-manufacturer-choices${choicesHeading ? '' : ' dm-manufacturer-choices--compact'}`}
        aria-labelledby={choicesHeading ? 'manufacturer-choices-heading' : undefined}
        aria-label={choicesHeading ? undefined : `${manufacturer} product range`}
      >
        <div className="dm-section-frame">
          {choicesHeading && (
            <div className="dm-manufacturer-choices-heading">
              <h2 id="manufacturer-choices-heading">{choicesHeading}</h2>
              {choicesIntroduction && <p>{choicesIntroduction}</p>}
            </div>
          )}

          <div className="dm-choice-grid" data-count={choices.length}>
            {choices.map((choice) => (
              <article className="dm-choice-card" key={choice.title}>
                <div className="dm-choice-image">
                  <Image
                    src={choice.image}
                    alt={choice.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
                <div className="dm-choice-copy">
                  <h3>{choice.title}</h3>
                  <p>{choice.description}</p>
                  {choice.fromPrice && <strong className="dm-choice-price">From {choice.fromPrice}</strong>}
                  <span>{choice.action || 'View Options'} <b aria-hidden="true">&rarr;</b></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {guidance && (
        <section className="dm-manufacturer-guidance">
          <div className="dm-section-frame dm-manufacturer-guidance-inner">
            <div>
              <h2>{guidance.heading}</h2>
              <p>{guidance.copy}</p>
            </div>
            <a href="tel:02921660393">Call DoorMate: 029 2166 0393</a>
          </div>
        </section>
      )}
    </div>
  )
}
