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

## SECTIONS BELOW THE CARDS — LOCKED NUMBERS, 10 JULY 2026

Extending the same precision used above to the rest of the page, after finding the Reviews section had drifted to a hardcoded 72px padding instead of the shared value, plus other sections found using their own one-off numbers instead of the token:

- **Reviews:** padding must be `var(--section-pad-v) var(--section-pad-h)` — not a custom value. Quote block spacing tightened (36px quote mark, 24px margin below).
- **Who We Are:** padding `var(--section-pad-v) var(--section-pad-h)` — already correct, leave as is. **Adding real character here** (see below) — this is the natural home for the "real deal" story since the section's existing approved copy is already about DoorMate manufacturing vs. competitors importing.
- **Brands:** currently hardcoded `32px` vertical padding — standardise to the shared token.
- **Systems:** currently hardcoded `64px` vertical padding — standardise to the shared token. (If Terry wants this section to keep extra breathing room as the one navy "break" section, that's a deliberate exception to flag explicitly, not a silent one-off number.)

## HEADLINE FONT-SIZE — LOCKED TOKEN, 11 JULY 2026 (corrected same day)
Found live 11 July: Reviews, Who We Are and Systems section headlines were rendering at three different sizes (36px / 22px / 30px) despite the Bible saying headlines should be "large" and consistent. That word was never converted into an actual number, so nothing could check it.

First fix attempt hardcoded a new matching literal value (`clamp(22px, 2.6vw, 34px)`) across all three — which repeated the exact mistake it was meant to solve: inventing a number on the fly instead of using a token. `globals.css` already defines `--font-heading-lg: clamp(22px, 3vw, 38px)` for exactly this purpose, unused until now.

**Every homepage section H2 headline must use exactly:** `fontSize:'var(--font-heading-lg)'` — the existing token, never a hardcoded literal. No section gets its own one-off value, no matter how long or short its text is. If a headline's text is too long to fit on one line, let it wrap to two lines — do not shrink the font to force a single line. (Who We Are's headline was previously shrunk to 22px fixed + forced nowrap for exactly this reason — that was the bug, not a valid exception.)

This is a real rule specifically so `scripts/brand_check.js` can check it mechanically — see the check added there 11 July, updated same day to require the token rather than a literal.

## CORRECTION 10 JULY 2026 — TWO SEPARATE STORIES, NOT ONE
Claude wrongly merged two different things here: the "real deal" manufacturer-vs-importer sales angle, and Terry's personal origin story (punk band, US tour, product naming — see `project_origin_story_placement` memory). The workshop photo Terry supplied is for the ORIGIN story, not the "real deal" one. Placement of the origin story on the homepage (if any — it may belong on /our-story only) is NOT YET DECIDED. Do not place the workshop photo in Who We Are or anywhere else until Terry confirms where he wants it.

## STATUS

Fundamentals locked by Terry 10 July 2026: shared margin, header balance. Reviews, Who We Are, Brands, Systems sections locked with real numbers above — no more vague "headline, two boxes" descriptions. Individual section content (images) confirmed live as built by Claude Code.

Next: install Claude Skills (front-end-design) via Claude Code, then hand this file + DOORMATE_HOMEPAGE_BRIEF.md + CLAUDE.md + DOORMATE TRUTH SOURCE.pdf to Claude Code for the Step 5 build.
