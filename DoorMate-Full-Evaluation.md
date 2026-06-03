# DOORMATE SITE EVALUATION
## barn-doors.co.uk — Full Page-by-Page Evaluation
## Date: 3 June 2026
## Purpose: Every element assessed — KEEP / IMPROVE / DROP — with new site action for each.

---

## HOW TO READ THIS DOCUMENT

Every section follows the same structure:
- **WHAT:** What is it exactly (confirmed from live site)
- **VERDICT:** KEEP / IMPROVE / DROP
- **REASON:** Why in one line
- **NEW SITE:** What to do with it on doormate.co.uk

The BUILD ORDER section at the end gives the revenue-first sequence.

---

## SITE-WIDE ELEMENTS (apply to every page)

---

### Header Bar (top of every page)

**WHAT:** Single line above the nav. Phone: T. 029 2166 0393 | Email: E. info@doormate.co.uk | Log In link | Basket icon with item count and £ total.

**VERDICT:** IMPROVE

**REASON:** The information is right but the layout is WebFactory-specific. The new site carries phone and email but improves execution.

**NEW SITE:** Phone number in footer only (confirmed locked decision). Email in footer. No Log In link until Stripe is wired in. Basket icon added to nav only once Stripe is live.

---

### Navigation Bar

**WHAT:** Horizontal nav with dropdowns. Top links: HOME (dropdown) | DOORS | BARN DOOR HARDWARE | INTERNAL SLIDING DOOR KITS | EXTERNAL SLIDING DOOR KITS | POCKET DOOR KITS | SERVICES | GALLERY | SHOP | SHOP BY BRAND.

HOME dropdown contains: As Seen On TV | News | About Us | Contact | Trade | Become a Partner | Fitters Wanted | Dropshipping.

DOORS dropdown: Handmade Barn Doors | Pocket Doors | Internal Doors.

BARN DOOR HARDWARE dropdown: The Gainesville | The Brooklyn | The Covington | The Augusta | The Detroit | The Baltimore | FAQ | Barn Door Technical Stuff.

INTERNAL SLIDING DOOR KITS dropdown: SLIDING DOOR KITS for timber doors | Stainless Steel Sliding Door Kits | Glass Door Sliding Kits.

EXTERNAL SLIDING DOOR KITS dropdown: Single Sliding Door Kit | Double Sliding Door Kits.

POCKET DOOR KITS dropdown: Rocket Pocket Door Kits | Eclisse Pocket Door Kits | Coburn Pocket Door Kits | Barrier Pocket Door Kits | Installation Enquiry.

SHOP dropdown: Hardware Systems | Hardware Components | Pull Handles | Shelf And Brackets | Locks.

**VERDICT:** IMPROVE

**REASON:** Structure is right but nav is different from the locked new site nav (Part 16 of bible).

**NEW SITE:** Use Part 16 nav exactly as locked: HOME dropdown (As Seen On TV | News | About Us | Contact | Trade | Become A Partner | Fitters Wanted | Dropshipping). Flat links: Doors | Barn Door Hardware | Pocket Door Kits | Internal Sliding Door Kits | External Sliding Door Kits | Gallery | Shop. Gold dropdown, navy header, no arrows on flat links. Note: old site had SERVICES as a flat nav link — new site does not. Services content folds into relevant product pages via "Free Survey" CTAs.

---

### Social Media Bar

**WHAT:** Icons linking to Facebook (/Door-Mate-1173024366050268/) | Twitter/X (@mate_door) | LinkedIn (Terry Burnett) | YouTube (/channel/UCiVCUZ4T_FR4SLo81Ecuzpw) | Instagram (@doormate_cardiff) | Pinterest (burnett7776/boards/). Also contains a Mailchimp subscribe link.

**VERDICT:** IMPROVE

**REASON:** Right platforms, wrong execution — Mailchimp is banned, Pinterest URL has a typo ("pintrest" on Contact page).

**NEW SITE:** Footer social icons — Facebook, Instagram, YouTube, LinkedIn, Pinterest (corrected URL). No Mailchimp. WhatsApp number (07964 262113) in footer alongside social icons.

---

### Footer

**WHAT:** Footer links: Home | Handmade Barn Doors | Rocket Pocket Door Kits | Pocket Doors | Single Pocket Doors | Double Pocket Doors | Barn Door Technical Stuff | Door Automation | Gallery | Shop | Pocket Doors F.A.Q's | Pocket Door Tech Info | As Seen On TV | How To Order. Copyright: © Copyright 2018. All Rights Reserved. Bottom links: Barn Door Hardware UK | Sliding Barn Doors | Contact Us | Pocket Doors | How To Order. Built by Webfactory.

**VERDICT:** IMPROVE

**REASON:** "Door Automation" link is a dead page. Copyright 2018 is 8 years out of date. "Built by Webfactory" should not appear. New site needs a clean, purposeful footer.

**NEW SITE:** Footer: Phone 029 2166 0393 | Email info@doormate.co.uk | Address: Rear of 81 Richard Terrace, Cardiff, CF24 1RW | WhatsApp: 07964 262113. Quick links to main categories. Social icons. Copyright 2026. Trustpilot link. No "Built by" attribution.

---

### Page Title Template (sitewide)

**WHAT:** Format: "[Page Name] | Barn Doors UK | Barn Door Hardware UK | Sliding Barn Doors". Every page uses this template.

**VERDICT:** DROP

**REASON:** Leads with "Barn Doors UK | Barn Door Hardware UK" — this is the old positioning the new site explicitly moves away from. Also wastes title tag characters on repeated boilerplate.

**NEW SITE:** Each page gets a unique, keyword-rich title tag. Format: "[Page Name] | DoorMate Sliding Door Systems". Homepage: "Sliding Door Systems UK — Pocket Doors, Barn Door Hardware, Internal & External Kits | DoorMate". No sitewide boilerplate that leads with barn doors.

---

### Meta Description (sitewide)

**WHAT (homepage confirmed live):** "Sliding door systems UK | Barn door hardware manufacturer | Internal & external sliding kits | Pocket doors | Bespoke to your project | Built for real doors, real walls, real homes. Est. 2009."

**VERDICT:** IMPROVE

**REASON:** The content is actually good — it leads with sliding door systems, not barn door hardware. But it reads like a keyword list, not a sentence. Needs to convert as well as rank.

**NEW SITE:** Each page gets a unique meta description written as a selling sentence. Homepage example: "DoorMate are the UK's leading sliding door specialists — pocket door kits, internal sliding systems, external kits, handmade barn doors and hardware, manufactured in Cardiff since 2009."

---

### Structured Data

**WHAT:** None. Zero Schema.org JSON-LD on any page. Confirmed by live site inspection.

**VERDICT:** DROP (absence)

**REASON:** This is the single biggest technical gap on the old site. No Product schema, no LocalBusiness, no FAQPage, no AggregateRating. Invisible to Google rich results and AI assistants.

**NEW SITE:** Every page gets Schema.org JSON-LD from day one: Organization + LocalBusiness in layout.jsx. Product + AggregateRating on every product page. FAQPage on FAQ pages. BreadcrumbList on category and product pages.

---

### Live Chat / Chatbot

**WHAT:** Tawk.to referenced in project notes. Not confirmed present on live pages — appears absent or blocked.

**VERDICT:** DROP (replace)

**REASON:** Dead or invisible. The DoorMate chatbot (PART 21 of bible) is already built and must replace it.

**NEW SITE:** DoorMate chatbot (doormate-chat-widget.html) wired into every product page. Persistent corner widget. Knowledge base auto-updating hourly. This is the after-hours sales person.

---

## PAGE 1 — HOMEPAGE

**URL:** https://www.barn-doors.co.uk/

---

### H1 Tag

**WHAT:** "Barn Doors UK | Barn Door Hardware UK | Sliding Barn Doors" — this is hidden/invisible visually but present in the source as the actual H1. The visible headline in the body is an H3: "THE UK'S LEADING SLIDING DOOR SPECIALISTS".

**VERDICT:** DROP

**REASON:** The H1 leads with "Barn Doors UK | Barn Door Hardware UK" — this is the old positioning and also bad SEO practice (pipe-separated keyword list as H1).

**NEW SITE:** H1 must be "The UK's Leading Sliding Door Specialists" — clean, one statement, already locked in new site.

---

### Meta Description (homepage)

**WHAT (confirmed live):** "Sliding door systems UK | Barn door hardware manufacturer | Internal & external sliding kits | Pocket doors | Bespoke to your project | Built for real doors, real walls, real homes. Est. 2009."

**VERDICT:** IMPROVE

**REASON:** Correct positioning but formatted as a keyword list. Needs rewriting as prose.

**NEW SITE:** "DoorMate are the UK's leading sliding door specialists — pocket doors, internal sliding kits, external kits and handmade barn door hardware manufactured in Cardiff since 2009. Built for real doors, real walls and real homes."

---

### Hero Section

**WHAT:** The homepage hero is a WebFactory banner/slideshow with 21 slides. The slides are image-based with alt text carrying the message content. Confirmed alt texts for all 21 slides:

1. "Sliding Barn Door Hardware, Internal And External Doors" — links to homepage
2. (homepage link — duplicate/nav)
3. (homepage link — duplicate/nav)
4. "Shop Our Heavy-Duty External Sliding Doors Discover durable sliding door systems, including single, double, bi-passing, and round-the-corner options. Perfect for barns, garages, and industrial spaces. Click to explore customizable, space-saving solutions for any project!" — links to /external-sliding-door-kits
5. (duplicate external link)
6. "DoorMate Reviews" — links to Houzz reviews
7. (Houzz duplicate)
8. "Explore Our Brand New Internal Sliding Barn Door Systems Choose from a wide selection of internal sliding barn doors, available in timber, steel, and glass options." — links to /internal-sliding-door-kits
9. (internal kits duplicate)
10. "Internal Doors, Handmade Doors, External Doors, Barn Doors" — links to /handmade-barn-doors
11. (handmade duplicate)
12. "DoorMate" — links to /how-to-order
13. (how-to-order duplicate)
14. "George Clarke's Old House New Home feature" — links to /as-seen-on-tv
15. (as-seen-on-tv duplicate)
16. "Single Pocket Doors, Double Pocket Doors, Pocket Door Frames" — links to /pocket-door-kits
17. (pocket door kits duplicate)
18. "Sliding Door Kit" — links to /shop/hardware-components
19. (hardware-components duplicate)
20. "Door Furniture, Door Accessories, Door Replacement and Spare Parts" — links to /shop
21. "Satin Glass Pocket Door Kits" — links to /pocket-door-kits2 (dead URL — 301 redirect needed)

Plus additional recent images (DoorMate installation photos added recently, 5 new images with generic "DoorMate" alt text).

Each slide is a linked image. No text overlay on any slide. The slides function as a visual banner linking to categories, not as text-led sales messages.

**VERDICT:** IMPROVE (structure) / DROP (execution)

**REASON:** The carousel does the job of pointing customers to categories but relies entirely on image alt text. No visible text messages on any slide. The old site's sales-message carousel (described in bible session summary 21 May evening) — with coloured background slides and bold text headlines — is what this should be. The current implementation is a silent photo gallery. The new site brief from 21 May evening describes 5 specific text-led slides (gold/navy backgrounds, bold headlines, CTA links) — that is the correct approach.

**NEW SITE:** Text-led carousel as per 21 May evening brief:
- Slide 1 (gold bg): "Check Out Our Brand New Line Of Heavy Duty Sliding Barn Door Kits! With Single, Double, Bi-Passing And Round-The-Corner Options available! Click Here To Find Out More..."
- Slide 2 (navy bg): "Brand New Internal Sliding Door Kits! With Options Available For Timber, Steel And Glass Doors! Click Here To See More..."
- Slide 3 (gold bg): "Made-To-Measure Barn Doors — Click Here To See The Return Of Our Bespoke Handmade Doors"
- Slide 4 (photo bg): "George Clarke's Old House New Home — We're So Chuffed! Our Products were featured on TV! Series 8, Episode 3"
- Slide 5 (navy bg): "Pocket Door Kits — The Ultimate Space Saver!"
Add Channel 4 slide (agreed 2 June 2026 — outstanding).

---

### Intro Text Block

**WHAT:** Below the hero, the main intro block. Confirmed exact text: "DoorMate are based in Cardiff, South Wales Have been supplying sliding door systems since 2009. In 2015 we began manufacturing our own sliding barn door hardware in the UK, built for real doors, real walls and real homes — not generic one-size kits. Every system is backed by clear fitting guidance and real support, from sales through to manufacture and installation."

Gold line: "WE ARE MANUFACTURERS, SUPPLIERS & INSTALLERS OF QUALITY DOOR PRODUCTS"

Sub-line: "BARN DOOR HARDWARE | POCKET DOOR KITS | INTERNAL & EXTERNAL SLIDING SYSTEMS"

**VERDICT:** KEEP (core content) / IMPROVE (execution)

**REASON:** "Built for real doors, real walls and real homes — not generic one-size kits" is excellent copy — it's already the tagline locked into the new site. The gold line and sub-line reinforce the positioning well. Minor grammar error: "Cardiff, South Wales Have been" (missing full stop/comma).

**NEW SITE:** The "Who We Are" section on the new site carries this content in improved form. The body copy approved direction (27 May session) is: "DoorMate are based in Cardiff, South Wales — manufacturing and supplying sliding door systems since 2009. While our competitors are simply importing boxes of hardware, sat in warehouses with sales staff and warehouse workers loading the vans, we manufacture our own systems alongside handmade barn doors, mirror pocket doors and the widest range of pocket door kits, internal and external sliding systems. Every system we sell is backed by real industry knowledge, clear fitting guidance and direct support from the people who actually make them."

---

### Pocket Door Brand Grid

**WHAT:** Section headed "Pocket door kit brands we supply and support:" followed by logos/images for Coburn, Eclisse, Rocket, Barrier.

**VERDICT:** KEEP

**REASON:** Four brand logos are a trust signal — proves DoorMate stocks the established brands, not just own-brand.

**NEW SITE:** Carry to new site as a trust strip on the Pocket Door Kits landing page and homepage. Keep it clean — logos only, no description needed.

---

### 6 Product Tile Links

**WHAT:** Six tiles: SLIDING BARN DOOR HARDWARE | POCKET DOORS | OUR GALLERY | OUR REVIEWS | HANDMADE BARN DOORS | POCKET DOOR KITS. Each is a "page-link" style tile with an image and label.

**VERDICT:** IMPROVE

**REASON:** Good navigation structure but the tile selection is wrong — Gallery and Reviews are not product categories and don't belong in the same row as revenue-generating product tiles. The old site's tile set mixes product and navigation tiles. New site has a cleaner 6-card structure.

**NEW SITE:** 6 category cards as locked (1 June session): Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits | Shop. Gallery and Reviews move to nav and to a dedicated /reviews page.

---

### "THE UK'S PREMIER BARN DOOR HARDWARE PROVIDER" Section

**WHAT:** H3 heading followed by body copy: "Barn doors became popular because they solve a real problem — allowing large openings to be closed without the space required for a traditional swinging door. However, many systems on the market don't actually do this well..."

**VERDICT:** IMPROVE

**REASON:** Good problem-framing copy but the heading "PREMIER BARN DOOR HARDWARE PROVIDER" leads with barn door hardware — not the right positioning for new site. The copy itself is useful and explains the DoorMate difference.

**NEW SITE:** This copy moves to the Barn Door Hardware category landing page where it belongs — not the homepage. On the homepage, the manufacturer credibility story sits in the "Who We Are" / credibility section below the fold.

---

### "DON'T ACCEPT CHEAP IMITATIONS" Section

**WHAT:** H3 heading followed by specific anti-imitation copy calling out: poor fixing points, undersized tracks, noisy rollers, premature wear. No competitor names. Positions DoorMate as the quality alternative.

**VERDICT:** KEEP

**REASON:** This is Terry's sales voice at its best. Specific, believable, rooted in real problems. Addresses the competitive threat from cheap Chinese imports directly.

**NEW SITE:** Carry to Barn Door Hardware landing page and/or a dedicated "Why DoorMate" section. Exact copy preserved — do not paraphrase. This is what separates DoorMate from Coburn, Henderson, Buller, From The Anvil.

---

### "EVERY DESIGN MADE TO ORDER IN OUR WORKSHOP IN CARDIFF" Section

**WHAT:** H3 heading with copy about custom manufacture, premium parts, guaranteed lifespan, ability to visit the workshop in person.

**VERDICT:** KEEP

**REASON:** "You can even visit our workshop to go through your requirements in person" is a unique trust-builder no competitor can match. Genuine differentiator.

**NEW SITE:** Carry to credibility section / About Us / Barn Door Hardware page. Keep the "visit the workshop in person" line — it is gold.

---

### Twitter/X Embed

**WHAT:** Section headed "Visit and follow our twitter @mate_door" followed by an embedded tweet stream (@mate_door).

**VERDICT:** DROP

**REASON:** Twitter embeds are notoriously unreliable and slow page loads. Social proof should come from reviews (Google, Houzz, Trustpilot), not Twitter.

**NEW SITE:** Replace with social media icons in footer only. No embedded social feeds on any page.

---

### Houzz Reviews Link

**WHAT:** One of the 6 tile links goes to "OUR REVIEWS" and links to houzz.co.uk/browseReviews/terryburnett98.

**VERDICT:** IMPROVE

**REASON:** Right idea, wrong execution. A tile that sends customers off-site to see reviews is a leak. Reviews should be embedded on the page.

**NEW SITE:** Houzz widget embedded on the homepage (already done — confirmed in new site sessions). Dedicated /reviews page collecting Google, Houzz, Trustpilot. Star ratings on every product page with Schema.org AggregateRating data.

---

## PAGE 2 — DOORS LANDING PAGE

**URL:** https://www.barn-doors.co.uk/doors

### Entire Page

**WHAT:** H1: "DOORS". Three tiles: Hand-Made Barn Doors | Pocket Doors | Internal Doors. No intro copy, no prices, no trust signals.

**VERDICT:** IMPROVE

**REASON:** Correct three-option structure but completely bare — no copy explaining what DoorMate offers under "Doors", no prices, no reasons to trust.

**NEW SITE:** Three-tile structure carried across. Add an intro paragraph: what DoorMate sells under "Doors" and why they're the right supplier. Add price anchors on each tile ("From £527" etc.). New site (Part 17) tile order: Handmade Barn Doors | Pocket Doors | Internal Doors.

---

## PAGE 3 — HANDMADE BARN DOORS

**URL:** https://www.barn-doors.co.uk/doors/handmade-barn-doors

### Lead Time Note

**WHAT:** "Please Note That Handmade Oak Doors Have An Estimated 8-9 Week Lead Time, Reclaimed Timber Door Have An Estimated Lead Time Of 4-5 Weeks. All Orders Will Be Taken As A 'Time-Is-Not-Of-The-Essence' Understanding"

**VERDICT:** KEEP

**REASON:** Sets expectations honestly and early. Reduces post-purchase dissatisfaction. "Time-Is-Not-Of-The-Essence" is legally aware language — keep it.

**NEW SITE:** Keep verbatim. Add: explicit note that oak doors are NOT made in Cardiff (bible rule). Add: Oak is POA (price on application).

---

### Product Listings

**WHAT:** Product 1: Our Handmade Single Barn Door Range — From £527.00 — ★★★★★ "Handmade to Your Exact Measurements" — BUY NOW. Product 2: Our Handmade Double Barn Door Range — From £1,146.00 — ★★★★★ "Handmade to Your Exact Measurements" — BUY NOW.

**VERDICT:** KEEP

**REASON:** Prices shown, BUY NOW present, star ratings present — the three essentials are here.

**NEW SITE:** Carry prices and format. Add: door design options (V-Brace, Z-Brace, Ledge & Brace, Glazed panel) with images. Add: pine vs oak distinction. Add: separate POA entry for oak. Add: cross-sell to barn door hardware systems ("You'll need a hardware kit too — see the Gainesville").

---

### Missing Content (critical gaps)

**WHAT:** No door design options shown. No pine vs oak distinction. No oak POA note. No cross-sell to hardware systems. No FAQ or "how does this work" explanation.

**VERDICT:** DROP (absence)

**REASON:** A customer landing here doesn't know what design they'd get, doesn't know oak is different, doesn't know they also need hardware.

**NEW SITE:** Door designs shown with images and names. Pine vs oak explicitly separated. Cross-sell block at bottom of page linking to Gainesville, Brooklyn, Detroit, Baltimore.

---

## PAGE 4 — POCKET DOORS (DOORS SUB-PAGE)

**URL:** https://www.barn-doors.co.uk/doors/pocket-doors

### Mirror Pocket Door USP

**WHAT:** "The Only UK Manufacturer of Mirror Pocket Doors" — shown as a sub-label on the Mirror Pocket Door product tile. Price From £395.00. BUY NOW.

**VERDICT:** KEEP

**REASON:** "Only UK Manufacturer of Mirror Pocket Doors" is a specific, verifiable, unique claim. Strongest differentiator on this page.

**NEW SITE:** Lead with this on the Mirror Pocket Door product page. Use as a headline, not a sub-label. Add: weight warning (mirror doors start at 25kg before mirror is added — always recommend 30-45kg soft close). Add: soft close NOT included — optional extra and its price.

---

### JB Kind Door Range

**WHAT:** "View All Pocket Doors (JB Kind range)" — From £72.00 — "Explore Our Massive Range of Pocket Doors" — BUY NOW. JB Kind brand not named.

**VERDICT:** KEEP

**REASON:** Correct to keep supplier invisible. Price anchor (from £72) opens up a very accessible entry point.

**NEW SITE:** Carry the structure. Keep supplier invisible. Add: cross-sell to pocket door kits on the same page (a customer buying a pocket door almost certainly needs a kit).

---

## PAGE 5 — INTERNAL DOORS

**URL:** https://www.barn-doors.co.uk/doors/internal-doors

### Entire Page

**WHAT:** H1: "INTERNAL DOORS". Sub-heading: "Browse Our Full Range of Internal Doors". One tile: From £62.85 — ★★★★★ "Over 60 Doors Across 12 Ranges" — BUY NOW.

**VERDICT:** IMPROVE

**REASON:** Price anchor and "Over 60 Doors" range claim are good. But no indication of styles, no visual, no cross-sell to pocket door kits.

**NEW SITE:** Carry price anchor and range claim. Add tiles for each of the 12 ranges (style names). Add: explicit cross-sell to Rocket Pocket Door Kits (a customer buying an internal door is the perfect pocket door kit prospect). Add: Privacy Lock cross-sell.

---

## PAGE 6 — BARN DOOR HARDWARE LANDING PAGE

**URL:** https://www.barn-doors.co.uk/barn-door-hardware

### H1 and Sub-heading

**WHAT:** H1: "Sliding Barn Door Hardware Systems". Sub-heading: "The UK's Only Bespoke Barn Door Hardware Manufacturer".

**VERDICT:** KEEP (H1) / KEEP (sub-heading, on this page only)

**REASON:** The H1 correctly leads with "Sliding Barn Door Hardware Systems" — product-led. The sub-heading "UK's Only Bespoke Barn Door Hardware Manufacturer" is appropriate here (on the category page for barn door hardware) as a credibility statement under the product headline. This is NOT the homepage — the positioning rule applies to the homepage, not the barn door hardware category page where it's accurate and expected.

**NEW SITE:** Keep this structure exactly. The category page for barn door hardware is the correct place to say "UK's Only Bespoke Barn Door Hardware Manufacturer". Not the homepage.

---

### Intro Copy

**WHAT:** "DoorMate has been designing and manufacturing sliding barn door hardware systems from our Cardiff workshop since 2009 — the only manufacturer in the world that makes them completely bespoke to your project. Every system is hand-built to order, with a spec request sheet included so your hardware fits perfectly first time. Single door, double bi-parting or space-saving bi-passing — 6 systems to suit every situation and headroom. As seen on George Clarke's Old House New Home on Channel 4."

**VERDICT:** KEEP

**REASON:** Every sentence earns its place: manufacturer claim, bespoke process, spec request, 6-system breadth, Channel 4 credential. This is excellent category intro copy.

**NEW SITE:** Carry verbatim. This is one of the strongest paragraphs on the old site. Do not rewrite.

---

### 6 System Listings with Prices and BUY NOW

**WHAT:** The Gainesville — From £150.00 — Single Door | UK Manufactured — BUY NOW. The Brooklyn — From £290.00 — Bi-Parting Double | UK Manufactured — BUY NOW. The Covington — From £375.00 — Bi-Passing Single Track | UK Manufactured — BUY NOW. The Augusta — From £395.00 — Bi-Passing Double Track | UK Manufactured — BUY NOW. The Detroit — From £150.00 — Low Headroom | UK Manufactured — BUY NOW. The Baltimore — From £300.00 — Bi-Parting Low Headroom | UK Manufactured — BUY NOW.

**VERDICT:** KEEP

**REASON:** All 6 systems, all prices, BUY NOW, "UK Manufactured" sub-label. This is the right format — every competitor makes you hunt for the price.

**NEW SITE:** Carry exactly. Note: Gainesville price discrepancy (£150 on product page, £185 in shop) must be resolved before new site launch. UK Manufactured sub-label on every system tile.

---

## PAGE 7 — THE GAINESVILLE

**URL:** https://www.barn-doors.co.uk/barn-door-hardware/the-gainesville

### Sizing Formula

**WHAT:** "Track length should be 2 x door width. Door should be wider than opening by 40mm each side = 80mm overall." Worked example: "760mm opening → 840mm door → 1700mm track."

**VERDICT:** KEEP

**REASON:** This is the number one question every customer has. A worked example removes the barrier to purchase. No competitor explains this as clearly.

**NEW SITE:** Feature this prominently on the product page — not buried in small print. Call it out in a box or callout section. Add: headroom requirement (175mm minimum — confirmed from FAQ page answers).

---

### Spec Request Process

**WHAT:** "All orders are followed up with a spec request" — "we anticipate and resolve potential fitting challenges before they arise."

**VERDICT:** KEEP

**REASON:** Unique to DoorMate. No competitor does this. It removes the fear of ordering the wrong thing.

**NEW SITE:** Feature on every barn door hardware product page. Explain the process: order → spec request form → we confirm your measurements → we build bespoke to your project. This is a major conversion lever.

---

### Included Items List

**WHAT:** "All components made and sourced in UK | Every order followed up with spec request form | All systems include full DIY fixing pack | Fitting instructions | Video link | Full telephone support"

**VERDICT:** KEEP

**REASON:** Complete support package. Every item earns trust. "Video link" and "Full telephone support" are differentiators.

**NEW SITE:** Carry as a checklist/icon list on every barn door hardware product page. Add: RAL colour option mention.

---

### Missing: Headroom Spec

**WHAT:** The Gainesville product page does NOT state the 175mm headroom requirement. This is only on the Technical Stuff page and confirmed in the FAQ answers extracted live: "From door opening to ceiling or obstruction: The Gainesville, The Brooklyn and The Covington: 175mm minimum."

**VERDICT:** DROP (absence)

**REASON:** Headroom is a buying decision. If a customer can't see this on the product page they either bounce or order wrong.

**NEW SITE:** Headroom requirement on every product page, above the fold, near the price. Gainesville and Brooklyn and Covington: 175mm minimum. Detroit: 130mm standard / 90mm reversed. Augusta: 315mm standard / 225mm reversed.

---

## PAGE 8 — THE BROOKLYN

**URL:** https://www.barn-doors.co.uk/barn-door-hardware/the-brooklyn

### Bi-Parting Sizing Formula

**WHAT:** "Doors need to be bigger than structural opening by 40mm each side 80mm overall. Example: 1500mm opening + 80mm ÷ 2 = 790mm Door size. Track = 4 x 1 door = 3160mm, order size 3400mm."

**VERDICT:** KEEP

**REASON:** Same reason as Gainesville — worked example removes purchase barrier. The formula for bi-parting is more complex than single so the worked example is even more important here.

**NEW SITE:** Carry verbatim. Also add: headroom 175mm minimum. Add: "This is a bi-PARTING system — both doors slide to the SAME side. If you want doors to slide in opposite directions, see the Covington or Augusta."

---

### Missing: Headroom and System Distinction

**WHAT:** The Brooklyn page does not state the 175mm headroom requirement. It also does not distinguish bi-parting (both doors slide apart to SAME side) from bi-passing (doors pass each other).

**VERDICT:** DROP (absence)

**REASON:** Customers regularly confuse bi-parting and bi-passing. The distinction must be on the page.

**NEW SITE:** Add headroom. Add clear explanation: "Bi-Parting means both doors slide to opposite sides of the opening. For doors that pass each other on one track, see the Covington. For two separate parallel tracks, see the Augusta."

---

## PAGE 9 — THE COVINGTON

**URL:** https://www.barn-doors.co.uk/barn-door-hardware/the-covington

### Full Kit Contents List

**WHAT:** 1 x Steel Rail track | M8 fixings | 4 x Roller pulley wheels & straps | M8 Nut & Bolts | Track spacers | L Stops with bumper | Bottom floor guides | Installation manual.

**VERDICT:** KEEP

**REASON:** Complete kit list is reassuring — customers know exactly what they receive. This format works.

**NEW SITE:** Carry this kit contents format to ALL barn door hardware product pages (Gainesville and Brooklyn currently lack it on the old site — add on new site).

---

### "Advanced DIYer" Caution

**WHAT:** "Encourage it be fitted by advanced DIYers or professionals. Fitting service available, lead times up to 3 weeks."

**VERDICT:** KEEP

**REASON:** Honest caution builds trust more than hiding the complexity. And "fitting service available" turns a potential barrier into a CTA.

**NEW SITE:** Keep the caution. Make the fitting service CTA explicit — link to Installation Enquiry form or Services page.

---

### Finish Options

**WHAT:** Natural / Oil Rubbed / Rusted / Matt Black Acrylic Aerosol. Free pre-drill and cut-down available. Wheel Type: Steel 200kg.

**VERDICT:** KEEP

**REASON:** Options show genuine product depth. Free pre-drill and cut-down is a meaningful service that competitors don't offer prominently.

**NEW SITE:** Finish options as a visual selector or dropdown. Free pre-drill and cut-down called out as a featured benefit — not buried in a spec list.

---

## PAGE 10 — THE AUGUSTA

**URL:** https://www.barn-doors.co.uk/barn-door-hardware/the-augusta

### Kit Contents and Specs

**WHAT:** 2 x steel Rail tracks | M8 fixings | 4 x Roller pulley wheels & straps | nuts & bolts | spacers | L Stops | floor guide | installation manual. Finish options: Natural / Oil rubbed / Rusted / Matt black acrylic aerosol. Free pre-drill and cut-down. "Not for new DIYers — can require onsite adjustments."

**VERDICT:** KEEP

**REASON:** Same reasons as Covington — full kit list, finish options, honest difficulty caution.

**NEW SITE:** Carry kit list and cautions. Add: "2 tracks running parallel = Augusta" as a quick identification line (this is the most-confused system). Add: bracket standoff dimensions: Standard 315mm / Reversed 225mm (confirmed from FAQ).

---

### Use Case Guidance

**WHAT:** "Good for wardrobes, pantries. Bulky design gives a real rustic industrial appearance."

**VERDICT:** KEEP

**REASON:** "Wardrobes and pantries" is practical and specific — it helps customers self-select correctly.

**NEW SITE:** Carry use case guidance. Add: "If you have 2 parallel tracks running side by side — this is the Augusta." This resolves the most common system confusion.

---

## PAGE 11 — THE DETROIT

**URL:** https://www.barn-doors.co.uk/barn-door-hardware/the-detroit2

### Problem/Solution Framing

**WHAT:** Opening: "Not enough headroom for a traditional barn door system? The Detroit is your answer." Targets: older properties, converted spaces, rooms with low ceilings. "Minimum headroom requirement of just 90mm on the reverse bracket option."

**VERDICT:** KEEP

**REASON:** Problem/solution framing is the right structure for a specialist product. "90mm minimum headroom" is a specific, searchable spec — this is what someone with a low ceiling types into Google.

**NEW SITE:** Keep the problem/solution opening. Feature 90mm headline spec prominently. Add: Standard bracket option = 130mm headroom. Add kit contents list (missing from old site). Note: Detroit is listed as NEW in the shop — this badge should carry to the new product page.

---

## PAGE 12 — THE BALTIMORE

**URL:** https://www.barn-doors.co.uk/barn-door-hardware/the-baltimore

### Entire Page

**WHAT:** From £300.00 — BUY NOW. "The low headroom version of our Brooklyn Bi-Parting system." "Two doors slide apart in opposite directions — perfect for wide openings — but engineered to work in spaces where standard systems simply won't fit." "Manufactured by us in Cardiff, bespoke to your exact project."

**VERDICT:** IMPROVE

**REASON:** Good framing as "Brooklyn but for low headroom" — makes the choice easy. But the page is thin — no headroom spec, no kit contents, less content than every other product page.

**NEW SITE:** Add: minimum headroom spec (not confirmed in old site content — Terry to confirm). Add: kit contents list. Add: "Baltimore is listed as NEW in the shop — carry NEW badge. Expand copy to match Detroit and Covington depth. Cross-sell: "Need single doors in low headroom? See the Detroit."

---

## PAGE 13 — BARN DOOR TECHNICAL STUFF

**URL:** https://www.barn-doors.co.uk/barn-door-hardware/barn-door-technical-stuff

### Headroom Requirements

**WHAT (confirmed live via FAQ page):** Gainesville, Brooklyn and Covington: 175mm minimum. Augusta with Standard Bridging Bracket: 315mm. Augusta with Reversed Bridging Bracket: 225mm. Detroit: 130mm standard / 90mm reversed. (Detroit and Baltimore headroom specs NOT shown on this page — only Gainesville/Brooklyn/Covington confirmed here.)

**VERDICT:** KEEP (content) / IMPROVE (execution)

**REASON:** Centralised technical reference is useful. But image-heavy with thin text — invisible to Google. Detroit and Baltimore specs missing.

**NEW SITE:** All 6 systems' headroom specs in a proper text table. FAQPage Schema.org JSON-LD applied. Floor guide comparison in text (not just images). This page becomes a genuine SEO asset.

---

### Floor Guide Types

**WHAT:** Three floor guide types illustrated: Roller Floor Guide | Concealed Floor Guide | Cupped Floor Guide.

**VERDICT:** KEEP

**REASON:** Customers always ask which floor guide to use. Three distinct types with visual comparison is genuinely useful.

**NEW SITE:** Carry as a text+image comparison. Add: "Which floor guide do I need?" as a FAQ entry with FAQPage schema.

---

### Door Design Options

**WHAT:** Single Barn Door Designs (images) and Double Barn Door Designs (images) — design names visible as image labels.

**VERDICT:** KEEP

**REASON:** Shows the range of handmade door designs available. Helps customers arrive at a brief.

**NEW SITE:** Carry design options to the Handmade Barn Doors product page, not just Technical Stuff. Show designs: V-Brace, Z-Brace, Ledge & Brace, Glazed panel. Named gallery with clickable images.

---

## PAGE 14 — BARN DOOR HARDWARE FAQ

**URL:** https://www.barn-doors.co.uk/barn-door-hardware/faq2

### All 20 Questions and Answers (confirmed live)

**WHAT — full Q&A extracted from live site:**

1. Do you ship internationally? — "Unfortunately since the following of Brexit we're unable to currently ship overseas."
2. What size track length should I order? — "Your track should be exactly double the door width. Remembering your door always needs to be wider and taller than your opening."
3. What if the track I need is longer than the available options? — "Anything over 2600mm we regard as 'non-standard'. Please Email us for a quote, we can make our track lengths any size. If ordering for a larger door over 1300mm we recommend ordering extra wheels and strap hangers."
4. How much clearance is needed above the opening? — "From door opening to ceiling or obstruction: Gainesville, Brooklyn and Covington: 175mm minimum. Augusta With Standard Bridging Bracket: 315mm. Augusta with Reversed Bridging Bracket: 225mm."
5. How much does the hardware weigh? — "Gainesville — 8 to 10kg. Brooklyn — 15 to 20kg. Covington — 14 to 18kg. Augusta — 17 to 22kg."
6. How much of a gap is there between the door and the wall? — "Gainesville and Brooklyn — Approx. 5mm. Covington and Augusta — 5mm from Door 1 with a 20mm gap between doors."
7. Do I need a floor guide? — (answer in page but not extracted — in accordion)
8. Can the hardware be used outdoors? — "Yes, this wouldn't be a problem, as our wheels have sealed bearings. We would recommend using an external painted finish such as Hammerite."
9. What is your Barn Door Hardware return policy? — "We will accept all returns providing they are in resalable condition, excluding shipping cost. All returns are subject to a 25% restocking charge."
10. What is your delivery time? — "Hardware only — 10 to 14 days. Doors — 4 to 6 weeks."
11. How much weight can the Barn Door Hardware support? — "Each wheel bearing has a 250kg capacity."
12. Are there installation instructions for the Hardware kits? — "Yes, there are installation instructions included in the package. If misplaced, refer to our Technical Page."
13. How much bigger than the opening should the Barn Door be? — "We recommend at least 40mm per side and 40mm on top."
14. How thick are your Barn Doors? — (in page, not extracted)
15. Do the Barn Doors come finished? — "Barn doors come finished or non-finished as to customer's request."
16. What thickness of Barn Doors does your Hardware support? — "All orders are followed by a spec request sheet allowing us to bespoke fixing pack to individual projects."
17. How thick/wide is the Hardware track? — "The track is 6 x 50mm. The strap hangers are 5 x 40 x 300mm."
18. Are the tracks pre-drilled? — "We can pre-drill solid walls no problem but with stud walls we would need the stud centres. This is one of the questions we ask in the spec request sheet."
19. Why did my track come in two parts? — "Due to courier restrictions the maximum length we can send on a single track is 2600mm. Any track length above this will be cut in two equal parts and will be provided with a central locking strap."
20. What are the differences between your floor guides? — "Please see our technical page for pictures of our different floor guides."

**VERDICT:** KEEP (content) / IMPROVE (execution)

**REASON:** 20 genuine customer questions with real answers — this is exactly what Google ranks and AI assistants cite. The content is gold. The execution (accordion behind JavaScript, no visible text, no structured data) is invisible to search engines.

**NEW SITE:** All 20 Q&A rendered as static visible text. FAQPage Schema.org JSON-LD applied to every Q&A pair. The answers are search queries waiting to be answered — Google will rank these as featured snippets. Add: FAQ entries for Detroit and Baltimore (headroom questions). Update: Q1 international shipping answer may need reviewing — Brexit was in 2020 and the phrasing is dated.

---

## PAGE 15 — INTERNAL SLIDING DOOR KITS LANDING

**URL:** https://www.barn-doors.co.uk/internal-sliding-door-kits

### Intro Copy

**WHAT:** "Our modern internal sliding door gear is designed to maximize your interior space. Say goodbye to traditional hinged doors that take up valuable room real estate. Our sliding door gear ensures that every square foot of your space is used efficiently. Whisper-quiet precision. Various designs and finishes. High-quality materials and craftsmanship tested to 100,000 cycles."

**VERDICT:** IMPROVE

**REASON:** "100,000 cycles" is a specific, credible engineering claim worth keeping. "Maximize your interior space" and "room real estate" are generic AI marketing language — not Terry's voice.

**NEW SITE:** Keep "100,000 cycles tested" — specific and credible. Drop "maximize your interior space / room real estate." Replace with copy in Terry's voice focused on the DM Range and what makes internal sliding kits the right choice for modern homes.

---

### Three Category Tiles

**WHAT:** Timber & Metal Sliding Door Kits | Stainless Steel Sliding Door Kits | Glass Sliding Door Kits. (Three tiles — bible confirms four sub-categories. Minimalist Door Systems is missing.)

**VERDICT:** IMPROVE

**REASON:** Three tiles, but bible confirms four product categories. Minimalist Door Systems is absent. Product names in old site tiles differ from confirmed names in bible (confirmed 26 May: Timber Door Systems | Stainless Door Systems | Glass Door Systems | Minimalist Door Systems).

**NEW SITE:** Four tiles with confirmed names: Timber Door Systems | Stainless Door Systems | Glass Door Systems | Minimalist Door Systems. Weights to be confirmed before product pages. Landing page tiles can proceed without weights.

---

## PAGE 16 — TIMBER DOOR SLIDING KITS

**URL:** https://www.barn-doors.co.uk/internal-sliding-door-kits/sliding-door-kits-for-timber-doors

### Entire Page

**WHAT:** H1: "SLIDING DOOR KITS FOR TIMBER DOORS". Intro: "The Perfect Blend of Style and Functionality. Elevate your space with our high-quality Sliding Door Kits." Three "Click To Buy Now" buttons (products not named in page text — image-dependent).

**VERDICT:** IMPROVE

**REASON:** No product names, no prices, generic copy. The products exist but the page fails to communicate what they are.

**NEW SITE:** Product names from the DM Range. Prices. BUY NOW with prices. Brief product descriptions. Weight capacity for each. "100,000 cycles" claim reused here. No AI copy.

---

## PAGE 17 — STAINLESS STEEL SLIDING DOOR KITS

**URL:** https://www.barn-doors.co.uk/internal-sliding-door-kits/stainless-steel-sliding-door-kits

### Entire Page

**WHAT:** H1: "STAINLESS STEEL SLIDING DOOR KITS". "Upgrade your space with our premium Stainless Steel Sliding Door Kits, perfect for both glass and timber doors." Two "Click To Buy Now" buttons. No product names, no prices.

**VERDICT:** IMPROVE

**REASON:** "For both glass and timber doors" is useful positioning. Everything else is generic. No names, no prices.

**NEW SITE:** Named products, prices, clear spec. "For glass and timber doors" kept as the key positioning line. Cross-sell: if glass door, also see Glass Door Systems page.

---

## PAGE 18 — GLASS DOOR SLIDING KITS

**URL:** https://www.barn-doors.co.uk/internal-sliding-door-kits/glass-door-sliding-kits

### Named Products with Weight Specs

**WHAT:** FLEXIGLAS 50 — frameless, glass doors up to 50kg, soft close option, sleek minimalistic design. STRAIGHTAWAY G80 — straight sliding, lightweight interior frameless glass doors, no cut-outs required in glass, ceiling/recessed/face-fixed options. FLEXIGLAS 120 — heavier glass doors up to 120kg, soft close cushioning. STRAIGHTAWAY G130 — heavy duty, heavier interior frameless glass doors, stainless steel patch fittings.

**VERDICT:** KEEP (structure) / IMPROVE (prices and buy buttons)

**REASON:** This is the best internal sliding kits page on the old site. Named products with specific weight capacities let customers self-select instantly. "No cut-outs required in the glass" is a genuine customer concern addressed directly.

**NEW SITE:** Carry named products, weight specs, "no cut-outs" claim. Add prices. Add BUY NOW. Add: ceiling mount / wall fix / recessed options explained more clearly as distinct installation choices.

---

## PAGE 19 — EXTERNAL SLIDING DOOR KITS LANDING

**URL:** https://www.barn-doors.co.uk/external-sliding-door-kits

### Weight Range Claim

**WHAT:** "galvanised, weather-resistant components tested to handle doors from 75kg up to 200kg."

**VERDICT:** KEEP

**REASON:** Weight range (75kg to 200kg) is immediately useful for customer self-selection. "Galvanised" and "weather-resistant" are specific and credible.

**NEW SITE:** Feature weight range prominently. Keep "galvanised, weather-resistant" language. Add: NEVER say UK Manufactured for external kits (they come from Finland — bible rule). No need to mention Finland either — simply omit origin.

---

### Four Product Types

**WHAT:** Single Door Kits — From £104.00 — BUY NOW. Bi-Parting Kits — From £156.00 — BUY NOW. Bi-Passing Kits — Contact For Price — ENQUIRE NOW. Wrap Around Kits — Contact For Price — ENQUIRE NOW.

**VERDICT:** KEEP

**REASON:** Good breadth — from simple single to complex wrap-around. ENQUIRE NOW for non-priced options generates qualified leads rather than losing the customer.

**NEW SITE:** Carry four product type structure. Guide prices even for Bi-Passing and Wrap-Around if Terry can supply them — "Contact For Price" reduces conversion. ENQUIRE NOW links to contact form, not a generic contact page.

---

## PAGE 20 — EXTERNAL SINGLE SLIDING DOOR KITS

**URL:** https://www.barn-doors.co.uk/external-sliding-door-kits/single-sliding-door-kit

### Technical Specifications

**WHAT:** Steel top track galvanised to BS EN 10346. Hangers with precision ball bearings and high performance steel wheels. Vertical and lateral adjustment on hangers. Soffit, wall and double track wall fixing brackets available. Stay rollers available for clear threshold. "Please choose your approximate door weight for the most suitable product."

**VERDICT:** KEEP

**REASON:** BS EN 10346 standard is specific and credible for trade customers. "Vertical and lateral adjustment" shows engineered precision. "Choose by door weight" is clear selection guidance.

**NEW SITE:** Carry BS EN standard mention — it is a genuine trust signal for trade and architects. Add: what DM-75/100/150/200 means (the number = door weight capacity in kg). Add: sizing guidance for track length.

---

### All Four DM Variants with Prices

**WHAT:** DM-75 — From £104.00 — BUY NOW. DM-100 — From £156.00 — BUY NOW. DM-150 — From £229.00 — BUY NOW. DM-200 — From £281.00 — BUY NOW.

**VERDICT:** KEEP

**REASON:** All four weight variants priced and buyable. Clean format.

**NEW SITE:** Carry all four. Add: brief description of each ("DM-75 suits garden gates and lightweight shed doors. DM-200 handles heavy agricultural barn doors."). Add: cross-sell accessories (Hammerite spray paint for external use).

---

## PAGE 21 — EXTERNAL BI-PARTING DOOR KITS

**URL:** https://www.barn-doors.co.uk/external-sliding-door-kits/double-sliding-door-kits

### Entire Page

**WHAT:** H1: "EXTERNAL BI-PARTING DOOR KITS". Same technical specs as single page. DM-75 — From £156.00 — BUY NOW. DM-100 — From £230.00 — BUY NOW. DM-150 — From £386.00 — BUY NOW. DM-200 — From £444.00 — BUY NOW.

**VERDICT:** KEEP

**REASON:** Same clean structure as single page. Prices clearly differentiate from single variants.

**NEW SITE:** Same structure as single page. Add brief explanation of bi-parting (two doors slide in opposite directions). Add: cross-sell to single if customer has single door.

---

## PAGE 22 — POCKET DOOR KITS LANDING

**URL:** https://www.barn-doors.co.uk/pocket-door-kits

### H1 and Brand Tiles

**WHAT:** H1: "THE WIDEST CHOICE OF POCKET DOOR KITS". Four brand tiles: View Barrier's Range | View Rocket Range | View Eclisse Range | View Coburn Range. No prices, no intro copy.

**VERDICT:** IMPROVE

**REASON:** "Widest choice" is a strong positioning claim. Brand tiles are trust signals. But no prices and no intro explaining what a pocket door kit is or why DoorMate.

**NEW SITE:** Keep "widest choice" claim. Keep four brand logos as tiles. Add intro copy explaining: what is a pocket door kit, why DoorMate, what the 12-year warranty means. Add price anchors on each brand tile ("Rocket from £167.94 | Eclisse from £304.80 | Coburn from £117.60 | Barrier from £139"). Add: "Don't know which brand to choose?" guide — brief comparison of the four.

---

## PAGE 23 — ROCKET POCKET DOOR KITS

**URL:** https://www.barn-doors.co.uk/pocket-door-kits/rocket-pocket-door-kits

### 12-Year Warranty

**WHAT:** "All our pocket door kits come with a full 12 year warranty against manufacturing and material defects."

**VERDICT:** KEEP

**REASON:** 12-year warranty is the strongest warranty claim in the pocket door category. No competitor comes close. This is a conversion closer.

**NEW SITE:** Feature as a headline on the Rocket page AND on the Pocket Door Kits landing page. Schema.org Product warranty field. Also reiterate in the Pocket Door FAQ.

---

### Metal Frame Structural Integrity

**WHAT:** "The metal frame around the pocket door provides an extra element of structural integrity."

**VERDICT:** KEEP

**REASON:** Functional benefit that addresses a customer concern (pocket doors weakening the wall). Specific and believable.

**NEW SITE:** Feature this prominently — it answers a question customers have but don't always know to ask.

---

### Product Variants

**WHAT:** Single Or Double Pocket Door Kits — Order Here. ULTRA Flush Door Kits — Order Here. Rocket Fire Rated Pocket Door Kits — Order Here. Rocket Door Frames Accessories — Order Here. No prices shown on this page.

**VERDICT:** IMPROVE

**REASON:** Good variant breadth (standard, flush, fire rated, accessories) but no prices visible.

**NEW SITE:** All variants with prices. Rocket Single £167.94 | Rocket Double £335.88 | Rocket Fire Rated £479.94. Fire Rated clearly marked as building-regs-compliant. ULTRA Flush as the premium tier.

---

## PAGE 24 — ECLISSE POCKET DOOR KITS

**URL:** https://www.barn-doors.co.uk/pocket-door-kits/eclisse-pocket-door-kits

### Installer-Focused Positioning

**WHAT:** "Designed with the Installer in mind." "Unlike other pocket door brands, they don't expect you to spend time cutting the steels to size. Range of sizes made to fit standard UK door sizes — just pick the kit that fits your standard door size."

**VERDICT:** KEEP

**REASON:** "No cutting required — fits standard UK door sizes" is a genuine differentiator from Coburn Hideaway which requires on-site adjustment. Targets the trade buyer specifically.

**NEW SITE:** Lead with this positioning on the Eclisse page. Add price: From £304.80. Add: Syntesis flush system as a named premium upgrade. Add: cross-sell to Rocket for customers who want a standard option at lower price.

---

### Product Variants

**WHAT:** Eclisse Single | Eclisse Double (both include Primed White Jamb Lining Kit) | Eclisse Fire Rated | Eclisse Pocket Door Accessories | Eclisse Syntesis (flush single and double) | Telescopic Sliding Pocket Door Systems.

**VERDICT:** KEEP

**REASON:** Breadth of variants is strong — from standard to flush to fire rated to telescopic. "Includes Primed White Jamb Lining Kit" shows value-added vs base competitors.

**NEW SITE:** All variants with prices. Syntesis as premium tier clearly positioned. Telescopic as specialist option. Fire rated for building regs compliance.

---

## PAGE 25 — COBURN POCKET DOOR KITS

**URL:** https://www.barn-doors.co.uk/pocket-door-kits/coburn-pocket-door-kits

### Three System Types

**WHAT:** HIDEAWAY — flat pack, build on site, plasterboard walls, soft/self-closing options. EASYSLIDE — click and snap, no tools required, 100mm finished wall thickness, no recessed floor channel. INSEDOR — pre-assembled galvanised steel cassette, for quick professional installation.

**VERDICT:** KEEP

**REASON:** Three clearly differentiated systems serve three customer types: DIY (Easyslide), self-build (Hideaway), professional speed (Insedor). "No tools required" for Easyslide is a very strong DIY selling point.

**NEW SITE:** Keep three-system differentiation. Add prices: Coburn from £117.60. "No tools required / click and snap" for Easyslide as a featured benefit not buried in a product list. Add: glass door option clearly signposted.

---

## PAGE 26 — BARRIER COMPONENTS POCKET DOOR KITS

**URL:** https://www.barn-doors.co.uk/pocket-door-kits/barrier-pocket-door-kits

### Bespoke Sizing USP

**WHAT:** "2 separate kits, both fully bespoke allowing on-site cutting to suit your door size. No longer stuck with UK standard door sizes — freedom to use bespoke size doors."

**VERDICT:** KEEP

**REASON:** This is a genuine differentiator from Rocket and Eclisse which are standard-size only. Targets specifiers, architects and renovations with non-standard openings.

**NEW SITE:** Lead with this USP — "The only pocket door kit that works with bespoke door sizes." Target copy at architects, custom builders, and heritage property renovations.

---

### Full Spec Table

**WHAT:** PD1: Max door weight 90kg | Width 608–915mm | Thickness 35–44mm | Height 2032mm. PD2: Max door weight 90kg | Width 608–1200mm | Thickness 35–44mm | Height 2400mm. Kit contents: 6x support studs, door hangers, spanner, timber header, door guides, rubber buffers, stud foot brackets, screws and nails.

**VERDICT:** KEEP

**REASON:** Complete spec table and kit contents list — the most detailed product page on the old site. Customers who care about specs (architects, builders) will make their decision here.

**NEW SITE:** Carry spec table and kit contents verbatim. PRICE CHECK NEEDED: site shows PD1 £160.00, bible says £139. PD2 site shows £186.00, bible says £154. Resolve before new site launch.

---

### Prices (with discrepancy flagged)

**WHAT:** PD1 From £160.00 — BUY NOW. PD2 From £186.00 — BUY NOW. Double From £288.00 — BUY NOW. Accessories From £30.00 — BUY NOW.

**VERDICT:** KEEP (format) / PRICE CHECK NEEDED

**REASON:** BUY NOW with prices is the right format. But PD1 and PD2 prices differ from bible. One of these is wrong.

**NEW SITE:** Correct prices after Terry confirms. Pocket Door Privacy Lock (£29.94) as a cross-sell on this page — confirmed bible cross-sell for all pocket door pages.

---

## PAGE 27 — INSTALLATION ENQUIRY (POCKET DOOR KITS)

**URL:** https://www.barn-doors.co.uk/pocket-door-kits/installation-enquiry

### 5-Step Form Wizard

**WHAT:** Step 1: DETAILS (Name, Email, Phone, Postcode). Step 2: YOUR WALL. Step 3: KIT & DOOR. Step 4: SERVICES. Step 5: REVIEW. "NEXT: YOUR WALL →" button.

**VERDICT:** KEEP

**REASON:** Multi-step wizard is best practice — low abandonment vs one long form. Captures postcode (critical for installation geography). Steps 2-4 qualify the customer before they reach Terry.

**NEW SITE:** Carry this form wizard. Extend it to barn door hardware and external kits. Link from every relevant product page — not just from nav. On new site, link from Services page, individual pocket door product pages, and the "Free Site Survey" CTA everywhere it appears.

---

## PAGE 28 — SERVICES

**URL:** https://www.barn-doors.co.uk/services

### Free Site Survey CTA

**WHAT:** "Free On-Site Survey & Expert Advice Included." "Click for Your Free Survey." Coverage: Cardiff, Vale of Glamorgan, Monmouthshire. Products installed: Barn Door Hardware | Internal Sliding Door Kits | External Sliding Door Kits | Pocket Door Kits | Associated Doors. "Nationwide Coming Soon" for pocket doors.

**VERDICT:** KEEP (concept) / IMPROVE (copy)

**REASON:** Free site survey is a very low-barrier CTA. "Nationwide Coming Soon" creates anticipation. But "Cardiff's elegant residences, the prestigious Vale of Glamorgan" is marketing fluff that is not Terry's voice.

**NEW SITE:** Keep Free Site Survey as primary CTA. Drop the "elegant residences / prestigious" language. Keep coverage area honest. Nationwide coming soon kept if it's a real plan. Link to Installation Enquiry form from every CTA on this page.

---

### Why Choose DoorMate Section

**WHAT:** Five points: Space-Saving | Expert Installation | Free Site Survey | Quality Products | Pro Construction.

**VERDICT:** KEEP

**REASON:** Simple five-point summary. "Expert Installation" and "Free Site Survey" are the strongest two.

**NEW SITE:** Carry as a features/benefits list. Add: "We install what we sell — we made it, we know how to fit it." That line is more powerful than "Quality Products."

---

## PAGE 29 — GALLERY

**URL:** https://www.barn-doors.co.uk/gallery

### Volume and Alt Text

**WHAT:** Approximately 150+ named installation photos. Every image has a descriptive alt text naming the design and system. Examples: "V Half X Design Barn Door On The Gainesville Single Sliding Door System", "Custom Design Barn Door On The Brooklyn Bi-Parting System". Shows: all 6 systems, all finish options, creative applications (window shutters, bathroom cabinets). Shows international installations.

**VERDICT:** KEEP

**REASON:** Volume of gallery is proof of years of real work. Named alt text is an SEO asset — small but real. Shows range of applications and creative possibilities.

**NEW SITE:** Carry all gallery images with named alt text preserved. Add: filter by product type (Gainesville | Brooklyn | Covington | Augusta | Detroit | Baltimore). Add: pocket door and sliding kit installation photos when available. Remove: "Garage Barn Doors" from intro copy. Remove: "right-click to open in new window" instruction.

---

### Notable Designs Documented

**WHAT:** Design types photographed: V Half X, V Z Brace, V E Brace, V 2 Brace, V 3 Brace, V Double Z, V Double X, V X Brace, H Z Brace, H X Brace, H 2 Brace, H Steel Trim, H V Brace, Random Plank, Custom, Steel Strap, Mirror, Union Jack, Custom Steel and Timber, Custom Crittall Style. Systems: all 6 systems represented. Finishes: Matt Black, Raw Steel, Rusted, Natural, Oil Rubbed.

**VERDICT:** KEEP

**REASON:** This is the full proof library. Union Jack and Custom Crittall doors in particular show DoorMate can make anything — competitors cannot.

**NEW SITE:** Keep all. Add to new gallery page with filter. Cross-link each gallery image to the relevant product system page.

---

### Missing Gallery Content

**WHAT:** Almost entirely barn door hardware gallery. No pocket door installations. No external kit installations. No internal sliding kit installations.

**VERDICT:** DROP (absence)

**REASON:** Gallery only shows one product category — gives an unbalanced impression that DoorMate only does barn doors.

**NEW SITE:** Add pocket door installation photos. Add external kit photos (garage, stables, agricultural). Add internal sliding kit photos. This is a content gap that undermines the "sliding door systems" positioning.

---

## PAGE 30 — SHOP (MAIN LANDING)

**URL:** https://www.barn-doors.co.uk/shop

### Entire Page

**WHAT:** H1: "SHOP". No products shown. No category tiles. No intro. Just the heading.

**VERDICT:** DROP (replace entirely)

**REASON:** Dead page. Customers landing here see nothing and bounce.

**NEW SITE:** Shop/Accessories landing page must show category tiles immediately: Pull Handles | Locks | Brackets | Hardware Components | Spare Parts. Price ranges on each tile. No empty landing pages.

---

## PAGE 31 — SHOP — HARDWARE SYSTEMS

**URL:** https://www.barn-doors.co.uk/shop/hardware-systems

### POPULAR and NEW Badges

**WHAT:** POPULAR tags on: Pocket Door Timber Lining Jamb Kit, Rocket Single, Rocket Double, Augusta, Brooklyn, Covington, Gainesville. NEW tags on: Rocket Fire Rated, Baltimore, Detroit.

**VERDICT:** KEEP

**REASON:** POPULAR tags are social proof. NEW tags create novelty. Both are proven conversion tools in ecommerce.

**NEW SITE:** Carry POPULAR and NEW badge system to all product pages. Consider adding: "BESTSELLER" for the Gainesville (consistently the most-sold single system).

---

### All Systems Listed with Prices

**WHAT:** DM-50i Internal Sliding Door Kit (doors up to 50kg) — £67.00. DM-75 — £104.00. DM-75 Bi-Parting — £156.00. DM-100 Bi-Parting — £230.00. DM-150 — £229.00. Pocket Door Timber Lining Jamb Kit — £53.94 POPULAR. Rocket Double Pocket Door Kit — £335.88 POPULAR. Rocket Single Fire Rated Pocket Door Kit — £479.94 NEW. Rocket Single Pocket Door Kit — £167.94 POPULAR. The Augusta — £395.00 POPULAR. The Baltimore — £300.00 NEW. The Brooklyn — £290.00 POPULAR. The Covington — £375.00 POPULAR. The Detroit — £150.00 NEW. The Gainesville — £185.00 POPULAR.

Price discrepancies confirmed: DM-100 shows £130 here vs £156 on product page and bible. Gainesville shows £185 here vs £150 on product page.

**VERDICT:** KEEP (as reference for all correct prices) / PRICE AUDIT NEEDED

**NEW SITE:** Every system on its own dedicated product page. Price audit required before any price goes on the new site. The shop listing is a useful source of truth for which products carry which badges.

---

## PAGE 32 — SHOP — HARDWARE COMPONENTS

**URL:** https://www.barn-doors.co.uk/shop/hardware-components

### All Products with Prices

**WHAT (confirmed):** Adjustable Spacer Pack £20 | Anti-Crush Plate Pack £10 | Centre Stop £10 | Concealed Guide Wall Fix £15 | DM-150 Roller Guide £25 | DM-200 Fix Plates £25 | DoorMate Adjustable Spacers £25 | Floor Guide Bottom Roller £15 POPULAR | Floor Guide Concealed £5 POPULAR | Floor Guide Cupped £10 POPULAR | Door Bolts Pack £5 | Pair L Stops £20 | Single L Stop £10 | Single Strap (Hammerite) £15 POPULAR | Single Track (Hammerite) £60 POPULAR | Soft Close Trigger Pair £10 POPULAR | Soft Close/Open Units £35 | Spacer Pack £20 | Spray Paint Hammerite £15 | Spray Paint Matt Black £10 | Wall Fixing Pack £10 | Wheel £15 POPULAR.

**VERDICT:** KEEP

**REASON:** Spare parts and components are repeat-purchase revenue. Existing customers return for floor guides, wheels, soft close triggers, spray paint. This is pure margin.

**NEW SITE:** All items on new site Accessories category. "Building your own kit" framing for components. Hammerite items flagged as "For external use." Floor guide types linked to Technical Stuff comparison. Touch-up spray paints cross-sell with any barn door hardware purchase.

---

## PAGE 33 — SHOP — PULL HANDLES

**URL:** https://www.barn-doors.co.uk/shop/pull-handles

### All Products with Prices

**WHAT (confirmed):** Black Flush Pull £15 POPULAR | Circle Flush Pull £15 | DM1 Handle £20 POPULAR | DM2 Handle £25 POPULAR | Duo Barn Door Handle £42 | Fleur de Lys Pull Handle £5.99 | Flush Pull Handle £15.99 JUST IN | Half Circle Flush Pull £15 | Oval Edge Pull £17.50 | Oval Flush Pull £15 | Providence Pull £36 | Pull Handle Bolt Fix £18 | Pull Handle On Plate £25 | Square Edge Flip-Up £17.50 | The Allston Pull Handle £42 | The Burlington Pull Handle £65 | The Detroit Pull Handle £17 POPULAR | The Philly Pull Handle £35 | The Stroudsburg Pull Handle £15.

**VERDICT:** KEEP

**REASON:** 19 handles from £5.99 to £65 — something for every budget and aesthetic. DM-branded handles reinforce the brand. POPULAR badges guide customers to bestsellers.

**NEW SITE:** All handles on Accessories category. "Frequently bought together" cross-sell on every barn door hardware product page — if someone is buying a Gainesville, suggest the DM1 Handle (£20) and the Detroit Pull Handle (£17). This is the easiest upsell on the site.

---

## PAGE 34 — SHOP — SHELF AND BRACKETS

**URL:** https://www.barn-doors.co.uk/shop/shelf-and-brackets

### All Products with Prices

**WHAT:** DoorMate Shelf Brackets £45 | The Cleveland Shelf Brackets £27 | The Grand Rapids Shelf Brackets £27 | The Minneapolis Shelf Brackets £27.

**VERDICT:** KEEP

**REASON:** US city naming is brand-consistent. Low price point makes these easy add-ons. Shelf brackets pair naturally with barn door hardware (barn door aesthetic, industrial look).

**NEW SITE:** Small category, easy revenue. Cross-sell on barn door hardware pages. Brief product descriptions needed (currently image-only on old site).

---

## PAGE 35 — SHOP — LOCKS

**URL:** https://www.barn-doors.co.uk/shop/locks

### All Products with Prices

**WHAT:** Black Cabin Hook £8 | Galvanised Cabin Hook £9 | Hasp & Staple Heavy Duty £9 | Hasp & Staple Standard Duty £5 | Pocket Door Privacy Lock £29.94 NEW | Sliding Barn Door Latch Lock £12.99 JUST IN.

**VERDICT:** KEEP

**REASON:** Pocket Door Privacy Lock (£29.94) is confirmed in bible as a must-have cross-sell on ALL pocket door pages. Bible confirms it is a recommended cross-sell for every pocket door product.

**NEW SITE:** Pocket Door Privacy Lock as a featured cross-sell on every pocket door product page — specifically Rocket (where it's recommended in the bible). Cabin hooks as barn door accessories. All six items in Accessories category.

---

## PAGE 36 — SHOP BY BRAND

**URL:** https://www.barn-doors.co.uk/shop-by-brand

### Entire Page

**WHAT:** H1: "SHOP BY BRAND". Three tiles: Barrier Components | Eclisse | Scrigno (Coming Soon). Rocket not listed. Coburn not listed.

**VERDICT:** DROP (rebuild)

**REASON:** Missing Rocket and Coburn — the two most popular pocket door brands. Scrigno is discontinued 2024 and must be removed. The page as it stands is incomplete and misleading.

**NEW SITE:** Rebuild as: Barrier Components | Eclisse | Rocket | Coburn. Remove Scrigno entirely. This page is low priority — the individual brand pages do the work. Consider whether this page earns its place on the new site nav.

---

## PAGE 37 — AS SEEN ON TV

**URL:** https://www.barn-doors.co.uk/home/as-seen-on-tv

### Channel 4 Credential

**WHAT:** H1: "AS SEEN ON TV". "Recently our hardware had incredible exposure after being featured on 'George Clarke's Old House, New Home'. Season 8, episode 3." "Credit to Amazing Productions for capturing such stunning photos." Very thin page — text only, no images or video.

**VERDICT:** KEEP (concept) / IMPROVE (execution)

**REASON:** The Channel 4 credential is enormously valuable for UK consumer trust. But "recently" is inaccurate (written years ago). The page is thin. No images. No video.

**NEW SITE:** Dedicated /as-seen-on-tv page with: Channel 4 logo, episode reference (S8, E3), production photos if available, video clip if cleared. "George Clarke's Old House New Home" named explicitly. This page is also a candidate for the hero carousel slide (already agreed — Channel 4 slide to be added).

---

## PAGE 38 — ABOUT US

**URL:** https://www.barn-doors.co.uk/home/about-us

### Personal Story Elements

**WHAT:** Founded 2009. Cardiff workshop. Terry's background: 20+ years in garage, industrial and automatic door industry — from fitter to sales manager. Observed timber waste, created doors from reclaimed wood. Spec request sheet. Production updates with photos during manufacture. Houzz and Trustpilot mentioned. Band name mentioned: "No Choice." US tour product naming: "Gainesville, Brooklyn, Covington, and Augusta are inspired by memorable gigs from his touring days."

**VERDICT:** KEEP (story elements) / IMPROVE (copy)

**REASON:** The personal story is genuine and distinctive. But the execution has issues: "Premier source for top-quality barn doors" is generic. The recycling/eco positioning is from 2009 and not current. Detroit, Baltimore, Covington not in the product list. Channel 4 not mentioned at all.

**NEW SITE:** The /our-story page (PART 20 of bible) supersedes this. The three story elements to carry: Cardiff workshop + industry heritage + spec request + production photos. Add: Channel 4 mention. Add: all 6 systems. Add: children (Stefan and Tegan) as the motivation. The full US tour story belongs here — 5 weeks, East Coast, every product named after a place on the route. "No Choice" band name can be used.

---

## PAGE 39 — CONTACT

**URL:** https://www.barn-doors.co.uk/home/contact

### Contact Details (confirmed)

**WHAT:** Social links: Facebook (DoorMate) | Twitter (@matedoor) | Instagram (doormatecardiff) | Pinterest (typo: pintrest.com/DoorMate2015) | Snapchat (DoorMate2015 — dead) | LinkedIn (Terry Burnett) | Houzz (houzz.co.uk/pro/terryburnett98/doormate). WhatsApp: 07964262113. Email: info@doormate.co.uk. Contact form: Name | Email | Telephone | Enquiry | Submit. Workshop address: Rear of 81 Richard Terrace Cardiff, CF24 1RW. Phone: 02921 660393. Google Maps embed.

**VERDICT:** KEEP (most elements) / IMPROVE (fix errors)

**REASON:** Physical address, map, and WhatsApp are strong trust builders. But Snapchat is dead, Pinterest URL has typo.

**NEW SITE:** Contact form, phone, email, address, map embed, WhatsApp. Social icons: Facebook, Instagram, YouTube, LinkedIn, Pinterest (corrected URL). Remove Snapchat. Review link included. Map embed with correct address. Note: two phone number formats used across site (029 2166 0393 and 02921 660393) — standardise to 029 2166 0393.

---

## PAGE 40 — TRADE

**URL:** https://www.barn-doors.co.uk/home/trade

### Trade Discount Structure

**WHAT:** 10% discount after 3rd purchase, 20% discount after 10th purchase. "Create An Account." "Want your own fitting territory?" — links to Fitters Wanted. Dropshipping: "Coming Soon." Become A Partner link.

**VERDICT:** KEEP (concept) / REVIEW (mechanics)

**REASON:** Volume discount structure is a reasonable trade incentive. But "Dropshipping Coming Soon" has been sitting on the old site for years — either launch it or remove it.

**NEW SITE:** Trade account page with discount mechanics (review with Terry before building). Fitters Wanted link. Become A Partner link. Dropshipping: only include if real launch plan exists. Wittswood 10% discount NOT listed publicly (bible rule).

---

## PAGE 41 — BECOME A PARTNER

**URL:** https://www.barn-doors.co.uk/home/become-a-partner

### Stockist Enquiry Form

**WHAT:** H1: "BECOME A PARTNER / Become A DoorMate Stockist". "Sliding barn door hardware can provide an ideal complementary product for a whole host of businesses." Form fields: Company Name | Customer Name | Email | Password | Products Interested In Stocking | Contact Telephone | Company Address — Submit.

**VERDICT:** KEEP (concept) / IMPROVE (fix Password field)

**REASON:** Stockist enquiry form is a legitimate lead generator. But the Password field makes no sense in a stockist application — it's a leftover from an account creation flow.

**NEW SITE:** Stockist enquiry form without Password field. Add: brief description of what being a DoorMate stockist involves (minimum order? product catalogue? margin?). Add: "Join current stockists" — but only if Terry can name any (without breaching client privacy).

---

## PAGE 42 — FITTERS WANTED

**URL:** https://www.barn-doors.co.uk/home/fitters-wanted

### Exclusive Territory Proposition

**WHAT:** "Claim your dedicated area to install our easy fit products. Once claimed, no more fitters in that territory." "Exclusive installation opportunities. Agreed set price. Installation times 1–2 hours." Requirements: 2+ years experience (garage/windows/front doors) | CSCS certificate | Portfolio and references | Own transport | DoorMate T-shirt on-site | Sign off worksheets | Before and after photos.

**VERDICT:** KEEP

**REASON:** Exclusive territory is compelling for sole traders. "1–2 hours" installation time is very appealing for add-on work. Requirements are fair and clear. This grows the installation network which grows revenue.

**NEW SITE:** Carry this page. Add: what DoorMate provides in return (tools? product discounts? dedicated territory? referral flow?). "LOVE your work" as a subheading is informal and charming — keep it. Contact: phone 029 2166 0393 and email info@doormate.co.uk.

---

## PAGE 43 — DROPSHIPPING

**URL:** https://www.barn-doors.co.uk/home/dropshipping

### Entire Page

**WHAT:** Explanation of dropshipping concept. "We are hoping to bring this service to you A.S.A.P." Still coming soon after years.

**VERDICT:** DROP (or build)

**REASON:** "Coming soon" placeholder pages waste crawl budget and disappoint visitors. Either launch the service or remove the page.

**NEW SITE:** Only include if Terry has a real plan to launch dropshipping. If not, remove the page and 301 redirect the URL to the Trade page.

---

## PAGE 44 — NEWS / BLOG

**URL:** https://www.barn-doors.co.uk/home/news

### Blog Posts Found

**WHAT:** Posts confirmed: "Our Brand New Line Of Heavy Duty External Sliding Door Kits" (Oct 2024) | "Can You Use A Draught-Excluder With A Sliding Barn Door?" (Nov 2023) | "Winter-proofing Your Wooden Doors" (Nov 2023) | "Photos Of Your Barn Doors" (Oct 2023) | "Choosing Interior Doors for Your Home" (Aug 2023). Additional posts paginated.

**VERDICT:** IMPROVE (carry concept, replace content)

**REASON:** Blog content exists which is good. But the posts read as generic AI content with no Terry's voice. "Choosing Interior Doors" is not a DoorMate speciality — hinged interior doors are not what DoorMate sells. No CTAs within posts.

**NEW SITE:** Blog section essential for SEO. First three posts: the three new content pieces from PART 20 of bible (/our-story, /blog/the-truth-about-barn-door-hardware, /blog/solving-the-warping-door-problem). All posts link to relevant product pages. All posts use Article schema. Author: Terry Burnett. Terry's voice throughout — no generic AI copy.

---

## PAGE 45 — HOW TO ORDER

**URL:** https://www.barn-doors.co.uk/how-to-order

### Guided Selection

**WHAT:** "Shopping for a sliding barn door is not something you do every day and we appreciate that it can be a little bit daunting." Binary first question: "I need a single door system" | "I need a double door system."

**VERDICT:** KEEP (concept) / IMPROVE (expand)

**REASON:** "Not something you do every day — we appreciate it can be a little bit daunting" is excellent empathetic copy — Terry's voice at its best. Binary choice (single/double) is the right first question for barn door hardware. But the page only covers barn doors — pocket doors, external kits, and internal sliding kits are not addressed.

**NEW SITE:** Expand to all product categories. This page structure is what the Quote Calculator (PART 11 of bible) should replace — a guided, multi-step tool that qualifies the customer and recommends the right product. Even a v1 with two questions per category is better than nothing.

---

## PAGE 46 — POCKET DOOR TECH INFO

**URL:** https://www.barn-doors.co.uk/pocket-door-kits/pocket-door-tech-info

### Advantage List

**WHAT:** Pre-cut galvanised steel — no warping risk. Simple brackets screw to stud work, double as plasterboard positioning guide. Fits standard UK door sizes — no cutting required. No floor track — continue floor surface through. Adjustable entrance guide for 35mm or 44mm doors. Door brake prevents slamming. Carbon steel 'sealed for life' bearings. 6-size selection table. Timber Door | Glass Door | Studwork And Thickness | Door Installation guidance. Video clip link (Rocket installation video). 4-step lining guide.

**VERDICT:** KEEP

**REASON:** "No floor track — continue floor surface through" is a major selling point that directly answers a common customer question. "Sealed for life bearings" is a specific engineering claim. The 6-size selection table removes guesswork.

**NEW SITE:** Carry advantage list as product copy on the Rocket Pocket Door Kits page. Size selection table on every pocket door kit page. Installation video embedded (not just linked). Lining guide as a downloadable or expandable section. "No floor track" as a featured benefit — not buried.

---

## SITEWIDE GAPS — WHAT IS MISSING FROM THE ENTIRE OLD SITE

These do not exist anywhere on barn-doors.co.uk:

1. **Schema.org JSON-LD** — zero structured data on any page. Zero Google rich results. Zero AI assistant citations.
2. **Open Graph / Twitter Card meta tags** — poor social sharing appearance on every page.
3. **llms.txt** — no AI assistant curation file at the root.
4. **Chatbot** — Tawk.to appears absent. No after-hours sales tool.
5. **Cross-sell blocks** — no "frequently bought together" on any product page.
6. **Quote calculators** — the How To Order page begins this logic but it is not extended.
7. **Reviews page** — /reviews does not exist. "Our Reviews" tile just goes to Houzz offsite.
8. **Accessories on product pages** — handles, locks, floor guides are never cross-sold on system pages.
9. **Star ratings with counts** — stars displayed on products but no number of reviews shown.
10. **Mobile-first design** — old site is desktop-built. 65% of traffic is mobile.
11. **Proper H1/H2/H3 hierarchy** — H1 is hidden/wrong on homepage. Heading structure is flat.
12. **Basket/checkout on main categories** — products go to WebFactory checkout, not a modern Stripe flow.
13. **Gallery filter** — 150+ images with no way to filter by system type.
14. **Blog with Terry's voice** — existing blog content is generic AI copy.

---

## CRITICAL DATA — CONFIRMED PRICES FROM LIVE SITE

### Barn Door Hardware Systems
| Product | Product Page | Shop Listing | Bible | Status |
|---|---|---|---|---|
| Gainesville | From £150.00 | £185.00 | £150 | DISCREPANCY — confirm with Terry |
| Brooklyn | From £290.00 | £290.00 | £290 | Match |
| Covington | From £375.00 | £375.00 | £375 | Match |
| Augusta | From £395.00 | £395.00 | £395 | Match |
| Detroit | From £150.00 | £150.00 | £150 | Match |
| Baltimore | From £300.00 | £300.00 | £300 | Match |

### Pocket Door Kits
| Product | Old Site | Bible | Status |
|---|---|---|---|
| Rocket Single | £167.94 | £167.94 | Match |
| Rocket Double | £335.88 | — | OK |
| Rocket Fire Rated | £479.94 | Not in bible | ADD TO BIBLE |
| Eclisse | Not shown | £304.80 | Not displayed — add to new site |
| Coburn | Not shown | £117.60 | Not displayed — add to new site |
| Barrier PD1 | £160.00 | £139 | DISCREPANCY — confirm |
| Barrier PD2 | £186.00 | £154 | DISCREPANCY — confirm |
| Barrier Double | £288.00 | £288 | Match |
| Pocket Door Jamb Kit | £53.94 | — | OK |

### External Sliding Kits
| Product | Old Site | Bible | Status |
|---|---|---|---|
| DM-75 Single | £104.00 | £104 | Match |
| DM-100 Single | £156.00 (product) / £130.00 (shop) | £156 | DISCREPANCY in shop — confirm |
| DM-150 Single | £229.00 | £229 | Match |
| DM-200 Single | £281.00 | £281 | Match |
| DM-75 Bi-Parting | £156.00 | £156 | Match |
| DM-100 Bi-Parting | £230.00 | £230 | Match |
| DM-150 Bi-Parting | £386.00 | £386 | Match |
| DM-200 Bi-Parting | £444.00 | £444 | Match |
| DM-50i Internal | £67.00 | Not in bible | ADD TO BIBLE |

### Doors
| Product | Old Site | Bible | Status |
|---|---|---|---|
| Handmade Single | From £527.00 | £527 | Match |
| Handmade Double | From £1,146.00 | £1,146 | Match |
| Mirror Pocket Door Single | From £395.00 | £395 | Match |
| Internal Doors (JB Kind) | From £62.85 | — | OK |

### Accessories — All Confirmed
**Pull Handles:** Black Flush Pull £15 | Circle Flush Pull £15 | DM1 Handle £20 | DM2 Handle £25 | Duo Barn Door Handle £42 | Fleur de Lys £5.99 | Flush Pull Handle £15.99 | Half Circle Flush Pull £15 | Oval Edge Pull £17.50 | Oval Flush Pull £15 | Providence Pull £36 | Pull Handle Bolt Fix £18 | Pull Handle On Plate £25 | Square Edge Flip-Up £17.50 | Allston £42 | Burlington £65 | Detroit Pull Handle £17 | Philly £35 | Stroudsburg £15

**Hardware Components:** Adjustable Spacer Pack £20 | Anti-Crush Plate Pack £10 | Centre Stop £10 | Concealed Guide Wall Fix £15 | DM-150 Roller Guide £25 | DM-200 Fix Plates £25 | DoorMate Adjustable Spacers £25 | Floor Guide Bottom Roller £15 | Floor Guide Concealed £5 | Floor Guide Cupped £10 | Door Bolts Pack £5 | Pair L Stops £20 | Single L Stop £10 | Single Strap (Hammerite) £15 | Single Track (Hammerite) £60 | Soft Close Trigger Pair £10 | Soft Close/Open Units £35 | Spacer Pack £20 | Spray Paint Hammerite £15 | Spray Paint Matt Black £10 | Wall Fixing Pack £10 | Wheel £15

**Shelf & Brackets:** DoorMate Shelf Brackets £45 | Cleveland £27 | Grand Rapids £27 | Minneapolis £27

**Locks:** Black Cabin Hook £8 | Galvanised Cabin Hook £9 | Hasp & Staple Heavy Duty £9 | Hasp & Staple Standard Duty £5 | Pocket Door Privacy Lock £29.94 | Sliding Barn Door Latch Lock £12.99

---

## BARN DOOR HARDWARE FAQ — ALL ANSWERS (confirmed live)

These are word-for-word from the live site. Use these verbatim on the new site with FAQPage Schema.org JSON-LD.

**Q1: Do you ship internationally?**
A: Unfortunately since the following of Brexit we're unable to currently ship overseas. *(Note: phrasing is dated — review wording for 2026)*

**Q2: What size track length should I order?**
A: Your track should be exactly double the door width (No extra length needed for stop ends etc.) Remembering your door always needs to be wider and taller than your opening.

**Q3: What if the track I need is longer than the available options?**
A: Anything over 2600mm we regard as 'non-standard'. Please Email us for a quote, we can make our track lengths any size. If ordering for a larger door over 1300mm we recommend ordering extra wheels and strap hangers. Recommended amount will be based on door size.

**Q4: How much clearance is needed above the opening?**
A: From door opening to ceiling or obstruction: The Gainesville, The Brooklyn and The Covington: 175mm minimum. The Augusta With Standard Bridging Bracket: 315mm. The Augusta with Reversed Bridging Bracket: 225mm.

**Q5: How much does the hardware weigh?**
A: The Gainesville — 8 to 10kg. The Brooklyn — 15 to 20kg. The Covington — 14 to 18kg. The Augusta — 17 to 22kg.

**Q6: How much of a gap is there between the door and the wall?**
A: The Gainesville and The Brooklyn — Approx. 5mm. The Covington and The Augusta — 5mm from Door 1 with a 20mm gap between doors.

**Q7: Do I need a floor guide?**
A: *(Answer in accordion — not extracted. Add from fitting instructions or Terry's knowledge for new site.)*

**Q8: Can the hardware be used outdoors?**
A: Yes, this wouldn't be a problem, as our wheels have sealed bearings. We would recommend using an external painted finish such as Hammerite.

**Q9: What is your Barn Door Hardware return policy?**
A: Please contact us if there is a problem with your order and we will do everything we can to resolve it, including returns. We will accept all returns providing they are in resalable condition, excluding shipping cost. All returns are subject to a 25% restocking charge.

**Q10: What is your delivery time?**
A: Hardware only — 10 to 14 days. Doors — 4 to 6 weeks.

**Q11: How much weight can the Barn Door Hardware support?**
A: Weight is not usually an issue with our hardware as each wheel bearing has a 250kg capacity. When fitting heavy doors it's very important that it's fixed to the wall securely as it's more likely to pull away from the wall than damage the hardware.

**Q12: Are there installation instructions for the Hardware kits?**
A: Yes, there are installation instructions included in the package with the hardware. If for some reason the instructions have been misplaced please refer to our Technical Page.

**Q13: How much bigger than the opening should the Barn Door be?**
A: We recommend at least 40mm per side and 40mm on top.

**Q14: How thick are your Barn Doors?**
A: *(Answer in accordion — not extracted. Add from spec sheet for new site.)*

**Q15: Do the Barn Doors come finished?**
A: Barn doors come finished or non-finished as to customer's request.

**Q16: What thickness of Barn Doors does your Hardware support?**
A: All orders are followed by a spec request sheet allowing us to bespoke fixing pack to individual projects. *(Note: this answer doesn't answer the question — clarify for new site.)*

**Q17: How thick/wide is the Hardware track?**
A: The track is 6 x 50mm. The strap hangers are 5 x 40 x 300mm.

**Q18: Are the tracks pre-drilled?**
A: We can pre-drill solid walls no problem but with stud walls we would need the stud centres. This is one of the questions we ask in the spec request sheet.

**Q19: Why did my track come in two parts?**
A: Due to courier restrictions the maximum length we can send on a single track is 2600mm. Any track length above this will be cut in two equal parts and will be provided with a central locking strap.

**Q20: What are the differences between your floor guides?**
A: Please see our technical page for pictures of our different floor guides. *(For new site: write out the answer in full text — the three types, when to use each.)*

---

## POCKET DOOR FAQ — ALL ANSWERS (confirmed live)

**Q1: What is a pocket door?**
A: A pocket door kit allows a door to slide into a space inside the wall, as opposed to a hinged door which opens into a room. Our Pocket door kits include steel sections which creates the pocket and takes the place of the wall. This is then covered by plasterboard on each side. The track that comes with the kit allows your door to be top hung leaving the floor free of obstructions.

**Q2: Does the Pocket Door Kit come with doors?**
A: No, but we do offer a wide range of different door types all over our website.

**Q3: How do I choose the right size?**
A: Our pocket door kits come in 6 sizes to suit 6 standard UK door panel sizes. The kit components come pre-cut so there is no cutting required.

**Q4: What is the maximum weight and thickness door the Pocket Door Kit can be used with?**
A: Max weight 60kg, door thickness 35–44mm.

**Q5: Can Pocket Door Kits be used for double doors?**
A: *(In page — not extracted. Add from product spec for new site.)*

**Q6: Do you offer a liner/jamb kit?**
A: *(In page — not extracted.)*

**Q7: What wall thickness?**
A: 70mm steel stud and 89mm CLS with standard 12.5mm plasterboard — finished wall thickness 95mm and 115mm respectively.

**Q8: Does the kit come with a door dampener or soft close?**
A: All Rocket kits have door brake mechanism — spring steel.

**Q9: Is the pocket door suitable for external use?**
A: No, the Pocket Door kit is suitable for internal doors only.

**Q10: What is the guarantee for the Pocket Door Kit?**
A: We offer a 12 year warranty on our Pocket Door Kits.

---

## CONTACT DETAILS — CONFIRMED FROM LIVE SITE

- Phone: 029 2166 0393 (also shown as 02921 660393 — standardise)
- Email: info@doormate.co.uk
- Workshop: Rear of 81 Richard Terrace, Cardiff, CF24 1RW
- WhatsApp: 07964 262113
- Instagram: @doormate_cardiff
- Facebook: /Door-Mate-1173024366050268/
- Twitter/X: @mate_door
- LinkedIn: Terry Burnett
- YouTube: /channel/UCiVCUZ4T_FR4SLo81Ecuzpw
- Pinterest: burnett7776/boards/ (fix URL typo — "pintrest" on Contact page)
- Houzz: houzz.co.uk/pro/terryburnett98/doormate
- Band name (About Us): "No Choice"

---

## REDIRECTS NEEDED (confirmed from old site)

301 redirects to add on barn-doors.co.uk:
- /sliding-barn-door-hardware → /barn-door-hardware
- /sliding-door-kits → /internal-sliding-door-kits
- /pocket-door-kits2 → /pocket-door-kits (confirmed live — carousel still links to this dead URL)
- /industrial-sliding-systems → /internal-sliding-door-kits
- /modern-sliding-door-systems → /internal-sliding-door-kits
- /country-range → /doors
- /barn-door-hardware/technical-stuff → /barn-door-hardware/barn-door-technical-stuff
- /how-to-order-the-double-detroit → /barn-door-hardware/the-detroit2
- /bespoke-barn-doors/crittal-style-doors → /doors
- /bespoke-barn-doors/brand-new-internal-doors → /doors/internal-doors
- /as-seen-on-tv → /home/as-seen-on-tv (carousel on homepage links to /as-seen-on-tv not /home/as-seen-on-tv)
- /handmade-barn-doors → /doors/handmade-barn-doors (carousel links here)

---

## BUILD ORDER — FASTEST REVENUE FIRST

Revenue comes from: product pages with BUY NOW + structured data to get Google traffic + chatbot to convert at 11pm + reviews to close the doubters + accessories cross-sell for margin.

### PHASE 1 — SELL SOMETHING (build first)

These are the highest-revenue pages. Every day without them is lost money.

1. **Barn Door Hardware product pages** (6 pages: Gainesville, Brooklyn, Covington, Augusta, Detroit, Baltimore) — with prices, BUY NOW, Stripe checkout, sizing formulas, spec request process, headroom specs, Schema.org Product + AggregateRating.
2. **Pocket Door Kits landing page + 4 brand pages** (Rocket, Eclisse, Coburn, Barrier) — 12-year warranty prominent, prices, BUY NOW, cross-sell Privacy Lock.
3. **External Sliding Door Kits landing + single + bi-parting pages** — DM range with prices, BUY NOW.
4. **Accessories category** — pull handles, locks, hardware components. "Frequently bought together" block on every barn door hardware page.
5. **Chatbot** — wire in to every product page. This is the late-night conversion tool.

### PHASE 2 — CLOSE THE DOUBTERS

6. **Reviews page (/reviews)** — Google 4.8 + Houzz 5.0 + Trustpilot 4.5 in one place. Schema.org AggregateRating.
7. **Barn Door Hardware FAQ page** — all 20 Q&A as visible static text. FAQPage Schema.org. Google featured snippets.
8. **Pocket Door FAQ page** — all 10 Q&A as visible static text. FAQPage Schema.org.
9. **Technical Stuff page** — headroom specs for all 6 systems in a text table. Floor guide comparison in text. Schema.org.
10. **Gallery** — carry all 150+ images with named alt text. Add filter by system.

### PHASE 3 — BUILD AUTHORITY

11. **Handmade Barn Doors** — designs, pine vs oak, prices, BUY NOW, lead times.
12. **Internal Doors (JB Kind)** — range tiles, price anchor, cross-sell to pocket door kits.
13. **Internal Sliding Door Kits** — 4 tiles with confirmed product names, landing page then sub-pages.
14. **Blog** — publish the 3 PART 20 content pieces. Article schema on each.
15. **Our Story (/our-story)** — full brand story from PART 20. LocalBusiness schema.
16. **As Seen On TV** — Channel 4 page rebuilt with imagery and episode reference.

### PHASE 4 — GROW THE BUSINESS

17. **Quote calculators** — guided selection tool per category (even v1 with 2 questions).
18. **Installation Enquiry form** — extended to barn door hardware and external kits (currently pocket door only on old site).
19. **Services page** — free site survey CTA, coverage area, link to form.
20. **Fitters Wanted** — grow the installation network.
21. **Trade page** — account structure, volume discounts.
22. **Become A Partner** — stockist enquiry form (without Password field).

### PHASE 5 — TECHNICAL FOUNDATIONS (run alongside all phases)

- Schema.org JSON-LD on every page (Organization + LocalBusiness in layout.jsx — day 1)
- Open Graph + Twitter Card meta on every page
- llms.txt at root
- Sitemap.xml verified and submitted to Google Search Console
- robots.txt allowing all crawl
- 301 redirects on barn-doors.co.uk

### WHAT TO DO BEFORE ANY PAGE IS BUILT

**PRICE AUDIT — Terry to confirm:**
1. Gainesville: is the correct price £150 (product page) or £185 (shop listing)?
2. Barrier PD1: is the correct price £139 (bible) or £160 (old site)?
3. Barrier PD2: is the correct price £154 (bible) or £186 (old site)?
4. DM-100 Single: is the correct price £156 (product page and bible) or £130 (shop listing)?

These four discrepancies must be resolved before any price goes on the new site. Wrong prices = wrong invoices = customer disputes.

---

*Evaluation completed 3 June 2026. All pages visited live. All prices, copy, and page structure confirmed from actual site content. Barn door hardware FAQ answers extracted in full from live site.*
