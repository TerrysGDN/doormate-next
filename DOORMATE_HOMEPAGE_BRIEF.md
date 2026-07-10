# DOORMATE HOMEPAGE — STRUCTURED BRIEF FOR CLAUDE CODE
Written 9 July 2026. This is Step 4 of DOORMATE_REBUILD_PLAN.md.
Purpose: ONE document, built once, handed to Claude Code — not negotiated section by section in chat.

---

## POSITIONING — NOT NEGOTIABLE
DoorMate Sliding Door Systems. Lead with sliding door systems (pocket, internal, external, barn, handmade, JB Kind doors). Barn door hardware is the speciality and credibility badge — proof of manufacturing, used below the fold and in Our Story/blog — NEVER the homepage headline or H1.

## REFERENCE PATTERN — SYNTHESIS OF FOUR SOURCES, NOT ONE COPIED SITE
This is not "build it like [external site]." Four sources were weighed, in order of actual authority:

1. **The old DoorMate site (barn-doors.co.uk)** — proven, not theoretical. £250k in 2017 on 5% Google visibility. Its hero carousel did real sales work: each slide had ONE job — a product name, a clear line about it, a price or hook, a CTA — never mixed with a separate brand-identity message on the same slide. Reviews were visible near-immediately. This is the strongest evidence in the whole project of what actually converts DoorMate customers, and it must lead.
2. **DoorMate Truth Source PDF (Terry + ChatGPT)** — the Short Route Principle (remove unnecessary choices/clicks, keep pathways and actions clear) and the Visual Philosophy ("clarity before decoration, function before style") govern how dense or sparse any section is allowed to be, and confirm the Tier 1/2/3 story hierarchy for the hero/headline (never shop-grid weight — see below).
3. **pchenderson.com** — feel and calibration only, never structure to copy (competitor, ASSA ABLOY-owned). The "relaxed, breathable, balanced" quality it has is a target feeling, not a layout to lift.
4. **Land-book examples (Tadaima, MARFA STANCE, Aarke, Merrell)** — Terry's own words: "not saying use this, these speak to my philosophy." Useful only as outside confirmation that the pattern above (real photo, one clear message, fast route to trust and product) isn't just DoorMate's old instinct — it's a live pattern elsewhere too. Not the source of the idea. Not to be copied over the other three.

**What this actually means for the build:**
- Full-bleed real photograph as hero — never a graphic, never text baked into an image file (matches old site's real-photo carousel, not stock)
- One job per hero slide, exactly as the old site did it — either the DoorMate identity message, or one specific product with its price and a CTA — never both mixed on the same slide (the current build breaks this: one slide shows "Internal Sliding Door Kits / £67.00 / Shop Now" layered under the generic tagline "The UK's Leading Sliding Systems Specialists" — that's the fault, and the old site never made it)
- Trust signal immediately after the hero — no scrolling required (old site did this; Truth Source's Short Route Principle demands it too)
- Real product access immediately after that — the 6-category shop grid, all equal weight (Truth Source: story hierarchy applies to the hero, never to shop access)

Everything above must clear the fold on a standard desktop viewport at 100% zoom (locked formula from 21 May 2026: Headline=Authority | Reviews=Trust | 6 Cards=What We Do — all above the fold).

## THE 6 SHOP CATEGORY CARDS — EQUAL WEIGHT, LOCKED
Doors | Pocket Door Kits | Barn Door Hardware | Internal Sliding Door Kits | External Sliding Door Kits | Shop
All six identical size, identical visual treatment, identical prominence. No hierarchy among them — this governs shop *access* (real revenue, all six), separate from the story hierarchy above the fold. Do not make any card larger, bolder, or more prominent than the others.

## DESIGN TOKENS — MUST BE USED, NOT HARDCODED
`app/globals.css` already defines the full brand foundation — USE THE VARIABLES, do not hardcode hex values or one-off sizes:
```
--navy: #272446 | --navy-bg: #363557 | --navy-dark: #0f0d24
--gold: #efb627 | --gold-btn: #f1b52a | --white: #ffffff
--section-pad-v: 40px | --section-pad-h: 40px
--font-heading-xl/lg/md/sm, --font-body, --font-label, --font-small, --font-nav
```
Every section must consume these variables. If a colour or size needs to change, it changes once in globals.css and applies everywhere — that is the entire point of the file existing.

## TYPOGRAPHY RULES — LOCKED, NEVER BREAK
- No ALL CAPS anywhere on the site
- Section headlines: navy, bold, large, centred, Title Case
- Body text: navy, fontWeight 600, centred, full width, no maxWidth constraints
- Font: Libre Franklin throughout

## SECTIONS — IN ORDER, WITH APPROVED CONTENT

### 1. Header
Social icons left (real brand colours) | Logo centred | Phone (tel: link) + Email (mailto: link) + Search + Basket right. Gold nav bar below: HOME dropdown (As Seen On TV | News | About Us | Contact | Trade | Become A Partner | Fitters Wanted | Dropshipping) + flat links (Doors | Barn Door Hardware | Pocket Door Kits | Internal Sliding Door Kits | External Sliding Door Kits | Gallery | Shop).

### 2. Hero carousel
Full-bleed real photo per slide. One message per slide (identity OR product+price, never mixed — see Reference Pattern above). Gold dot indicators. Existing slide assets to reuse where the message is single-purpose; rewrite any slide currently mixing brand tagline with product promo.

### 3. Trust strip
Gold background, 4 white pills: DoorMate/Trading Since 2009 | Google 4.8★ | Trustpilot 4.5★ | Houzz 5.0★.

### 4. Shop category grid — 6 cards, equal weight (see above)

### 5. Reviews section
Headline: "Why Real Reviews Matter". Houzz widget (real, authentic iframe) + Google reviews (native Places API build, already working — `getGoogleReviews()` in page.jsx, do not rebuild). Both shown as matching-footprint badges — real logo, real score, real stars only. Never a fabricated review-card UI dressed up to look like a platform that isn't actually embedded.

**Intro quote — Terry's own copy, approved, do not remove or rewrite:** "Every project starts with research — reviews are the best source there is. They tell you if you're dealing with a good company and a good product. They matter just as much on our side too: a good review tells us we're getting it right, a bad one tells us just as fast where we're not. So whatever you buy — from us or anyone else — always consider leaving a review." Corrected 10 July 2026 — Claude wrongly flagged this as unapproved/untraceable copy; Terry confirmed he wrote it himself to introduce why reviews matter to both customer and company. Not documented in the Bible/brief before now, hence the false alarm — it's in the code, just wasn't written down here.

### 6. Who We Are
Headline: "Real UK Manufacturers. Real Systems Delivered Direct To You."
Approved body copy (word for word, never paraphrase):
"DoorMate are based in Cardiff, South Wales — manufacturing and supplying sliding door systems since 2009. While our competitors are simply importing boxes of hardware, sat in warehouses with sales staff and warehouse workers loading the vans, we manufacture our own systems alongside handmade barn doors, mirror pocket doors and the widest range of pocket door kits, internal and external sliding systems. Every system we sell is backed by real industry knowledge, clear fitting guidance and direct support from the people who actually make them."
Gold line: "We Are Manufacturers, Suppliers & Installers of Quality Door Products"
Product links: Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits

### 7. Brands We Work With
Scrolling logo banner: Barrier Components, Coburn Systems, Eclisse, Rocket, JB Kind, FH Brundle, Charles Day, Titus UK, RT Bearings.

### 8. Systems section
Headlines: "We Offer Complete Sliding Door Solutions," (navy) / "For Real Homes, Real Doors And Real Walls." (gold)
Body copy beats (approved, each its own paragraph, not one block):
"Choosing a sliding door system shouldn't be difficult." / "That's why we've made it easy to find the right solution for your project." / "By organising our systems around real-world applications —" / "We've already done the thinking for you." (gold, largest) / "Simply choose your system. Let's get this project done!"
4 stacked image cards, equal weight: Pocket Door Systems (For the ultimate space saver) | Sliding Barn Door Systems (For traditional style and charm) | Internal Sliding Systems (For modern living) | External Sliding Systems (Built to last. Whatever the weather.)

### 9. Footer
Navy, 4 columns (Products, Company, Contact, Phone/Email/Location/Hours — Title Case, not caps). Social icons. Bottom bar single row.

## SEO / AISIO — REQUIRED ON EVERY SECTION TOUCHED (Bible Rule 7)
Semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`), correct H1→H2→H3 hierarchy, descriptive alt text on every image, `tel:`/`mailto:` links, Schema.org JSON-LD (Organization + LocalBusiness in layout.jsx — still missing, add now), meta title/description leading with "DoorMate Sliding Door Systems", Open Graph tags, llms.txt at /public/llms.txt (still missing, add now).

## LOCKED CREATIVE ASSET — "THE REAL DEAL" — ADDED 10 JULY 2026 — DO NOT LOSE AGAIN
Every UK barn door hardware seller (Coburn, Henderson, Buller, From The Anvil) imports Chinese kits and rebadges them — no machinery, just storage shelves. DoorMate manufactures in Cardiff. "Can they show you the factory? We can." This is real, verifiable, and no competitor can claim it.

This idea got genuine excitement from an earlier session months ago, was never written down with any weight, and quietly disappeared until Terry had to resurface it himself. It is now a locked, standing creative asset — not background trivia confined to one blog post title. It is the strongest candidate for a real, human, scroll-stopping story moment mid-homepage (see Section 8, Systems section, or a new section between Reviews and Who We Are) — not just a supporting line buried in paragraph copy. Any future homepage work must actively consider surfacing this prominently.

## KNOWN CONTENT GAP — FLAGGED, NOT BLOCKING
Several images across the hero, category cards, and Systems section are placeholders and not yet finalised — that is expected and not a build blocker. Terry to supply final installation photography when available; Claude Code should build the structure so swapping images later is a one-line change, not a rebuild.

## WHAT NOT TO DO
- Do not invent new copy — every line above is already approved, use it exactly
- Do not add hierarchy to the 6 shop cards
- Do not mix identity and product-promo messaging on one hero slide
- Do not hardcode colours/sizes — use globals.css variables
- Do not touch the Channel 4 section — removed from homepage, may return as a hero slide only if Terry raises it
- Do not use bash/git commands — Claude Code commits and Terry pushes via GitHub Desktop per the locked workflow
