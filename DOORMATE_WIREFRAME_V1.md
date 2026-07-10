# DOORMATE HOMEPAGE — WIREFRAME V1 — LOCKED 10 JULY 2026
This is the wireframe referenced in DOORMATE_REBUILD_PLAN.md Step 4 (sub-step: lock a concrete wireframe before any functional code). It is a plain structural spec — proportions, spacing, hierarchy — not a copy of finished design or content. Hand this file, alongside DOORMATE_HOMEPAGE_BRIEF.md, CLAUDE.md and DOORMATE TRUTH SOURCE.pdf, to Claude Code for the Step 5 build.

Reviewed live with Terry as a Cowork visual widget on 10 July 2026. Terry confirmed: "this layout seems 100% better balanced" and agreed to lock the fundamentals now, discussing any individual section live during the build rather than reviewing every section again here first.

---

## THE ONE FIX THIS WIREFRAME MAKES

Live site currently has three different left-edge insets stacked on top of each other (measured 9 July 2026): header content starts 28px in, hero text 69px in, trust strip pills 197px in — despite `globals.css` already defining `--section-pad-h: 40px` as the one value every section should use. This wireframe uses ONE shared content margin, applied identically, in every section, top to bottom. That single fix is the point of this document — everything else below is secondary to it.

**Implementation instruction for Claude Code:** every section must consume the same `--section-pad-h` variable from `globals.css` for its left/right inset. Do not hardcode a different padding value in any individual section.

---

## BRAND REFERENCE CARD — CHECKED AGAINST GLOBALS.CSS 10 JULY 2026

Terry added `1 Logo Hex Colours.jpg` to the NEW WEBSITE folder. Checked against what's currently locked in `globals.css` and CLAUDE.md:

- **Navy #363557** — matches the Bible's locked "navy background" value exactly. No conflict.
- **Gold #efb627** — matches the Bible's locked "brand gold" value exactly. No conflict.
- **Font: Franklin Gothic Demi** — the card ties this to the logo specifically, which matches the Bible's existing rule that Franklin Gothic Demi is logo-only, never body or headings (body/headings use Libre Franklin). No conflict.

**Flagged, not confirmed:** the card also shows a "Palette" strip with additional swatches — cream, mid-grey, two browns, dark navy/near-black, and a blue-grey — pulled underneath the two hex values. These read as an automatic colour-extraction from the jpg file itself (edges, anti-aliasing, compression artefacts), not a stated brand colour. The Bible is explicit that DoorMate uses only navy, gold, and white, and that grey is banned. Recommend treating the extra palette swatches as image-extraction noise, not additional brand colours, unless Terry says otherwise.

---

## SHARED MARGIN

Applied identically in every section below: `padding: var(--section-pad-v) var(--section-pad-h)` per `globals.css`. No section overrides this with a one-off value.

---

## SECTION-BY-SECTION STRUCTURE

### 1. Header
- Top bar (white): 3-column layout. Social icons left (real brand colours, small circles). Logo centred. Phone (tel: link) + email (mailto: link) right.
- Gold nav bar directly beneath, same shared margin: HOME dropdown (As Seen On TV | News | About Us | Contact | Trade | Become A Partner | Fitters Wanted | Dropshipping) + flat links (Doors | Barn Door Hardware | Pocket Door Kits | Internal Sliding Door Kits | External Sliding Door Kits | Gallery | Shop), space-between across the bar.
- Confirmed by Terry 10 July 2026 as balanced.

### 2. Hero carousel
- Full-bleed real photo per slide, shared margin applies only to the text/CTA block layered on top, not the photo itself (photo runs edge to edge).
- ONE message per slide — either the DoorMate identity line, or one specific product with price and CTA. Never both on the same slide (this is the fault found in the live build 9 July — a tagline layered under a specific product+price on one slide).
- Gold dot indicators, bottom-left, inside the shared margin.

### 3. Trust strip
- Gold background, full width.
- 4 white pills: Trading Since 2009 | Google 4.8★ | Trustpilot 4.5★ | Houzz 5.0★.
- Spread `space-between` across the shared margin — edge to edge, not clustered in the centre (this is the specific fix vs. the live site, which uses `justify-content:center` with a fixed gap and reads as four disconnected islands in the middle of the bar).

### 4. Shop category grid
- 6 cards: Doors | Pocket Door Kits | Barn Door Hardware | Internal Sliding Door Kits | External Sliding Door Kits | Shop.
- Identical size, identical visual weight, no hierarchy among them. This governs shop access (real revenue on all six) and is separate from the story hierarchy used in the hero — see DOORMATE_REBUILD_PLAN.md correction logged 7 July 2026.

### 5. Reviews section
- Headline: "Why Real Reviews Matter."
- Two matching-footprint boxes side by side: Houzz (real embedded iframe) and Google (native Places API build, already working — do not rebuild `getGoogleReviews()`).
- Real logos and real scores only — never a fabricated review-card UI dressed up to look like a platform that isn't actually embedded.

### 6. Who We Are
- Two columns: real photo left (placeholder until Terry supplies one), copy right.
- Headline: "Real UK Manufacturers. Real Systems Delivered Direct To You."
- Approved body copy (word for word, see DOORMATE_HOMEPAGE_BRIEF.md — do not paraphrase).
- Gold line: "We Are Manufacturers, Suppliers & Installers of Quality Door Products."
- Product links row: Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits.

### 7. Brands We Work With
- Scrolling logo banner, equal-size logo tiles: Barrier Components, Coburn Systems, Eclisse, Rocket, JB Kind, FH Brundle, Charles Day, Titus UK, RT Bearings.

### 8. Systems section
- Two columns: copy left (roughly 55–60% width), 4 stacked image cards right (roughly 40–45% width), equal weight to each other.
- Headlines: "We Offer Complete Sliding Door Solutions," (navy) / "For Real Homes, Real Doors And Real Walls." (gold).
- Body copy in separate beats, not one block (see DOORMATE_HOMEPAGE_BRIEF.md for exact wording).
- 4 cards: Pocket Door Systems | Sliding Barn Door Systems | Internal Sliding Systems | External Sliding Systems.

### 9. Footer
- Navy background.
- 4 equal columns: Products | Company | Contact | Phone/Email/Location/Hours — Title Case headings, never caps.
- Bottom bar: single row (copyright, social icons, links) — never wraps to two rows.

---

## STATUS

Fundamentals locked by Terry 10 July 2026: shared margin, header balance. Individual section content (images, exact copy placement) to be confirmed live as each section is actually built by Claude Code — not re-litigated here first.

Next: install Claude Skills (front-end-design) via Claude Code, then hand this file + DOORMATE_HOMEPAGE_BRIEF.md + CLAUDE.md + DOORMATE TRUTH SOURCE.pdf to Claude Code for the Step 5 build.
