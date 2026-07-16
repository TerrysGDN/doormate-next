# DOORMATE — MASTER BIBLE — LIVE DOCUMENT
## Last updated: 9 July 2026
## This file IS the project bible. Cowork reads CLAUDE.md automatically from this folder.
## Most recent decision always overwrites older ones.
## Session summaries at the bottom are in the order they were written — the LAST one is always most recent.

---

## ⚠️ WORKFLOW — READ THIS FIRST — BEFORE ANYTHING ELSE ⚠️

1. Claude Cowork edits files directly in the NEW WEBSITE folder on Terry's Desktop
2. Cowork gives Terry a commit title (one short line)
3. Terry opens GitHub Desktop, types the title in the Summary box, clicks Commit, then clicks Push origin (big blue button in the right panel — NOT the top bar)
4. Vercel deploys automatically. Wait 2 minutes then Ctrl+Shift+R to see changes.

That is the ONLY workflow. Never deviate from it. Never use bash git commands. Never have Claude push to GitHub. Terry commits. Terry pushes. Always.

**Before calling anything "done" or "fixed" — see RULE 10 and RULE 12 below. Run `scripts/brand_check.js` AND actually look at the live site with the Chrome extension tools, and report both honestly in the same message. No exceptions, no "better way." Rule 12 exists because the Chrome extension has been available since 2 June 2026 and was still not used consistently for six weeks — a promise to use it is not enough, this is why it's a written rule.**

---

## ⚠️ HERO — LOCKED — NEVER TOUCH WITHOUT TERRY'S EXPLICIT INSTRUCTION ⚠️

**Headline (fixed, same on every slide):** The UK's Leading Sliding Systems Specialists
**Structure per slide:** gold category label | fixed white headline | gold CTA button | gold price
**No sublines. No individual slide headlines. No copy Claude invented.**
**Images:** cycling behind the fixed text. Adding images was the ONLY outstanding task.
**Height:** 45vh, minHeight 320px

---

## ⚠️ FOUNDATIONS — LOCKED — READ BEFORE TOUCHING ANY CODE ⚠️

These rules cannot be overridden by anything in the codebase. If the code contradicts these, the code is wrong — not the Bible.

### Brand Colours — ONLY these three. Nothing else.
- Navy: #272446 (text and headings) | #363557 (backgrounds) | #0f0d24 (dark nav)
- Gold: #efb627 (brand gold) | #f1b52a (buttons/HTML template)
- White: #ffffff

Grey #999 is NOT a DoorMate colour. It is AI template fluff. Remove it wherever it appears.

### Typography
- Font: Libre Franklin (Google web font) — used throughout the site
- Franklin Gothic Demi — logo only, never in body or headings
- Section headlines: navy #272446, bold, large, centred, Title Case (first letter of every word capitalised), single line — AGREED 24 JUNE 2026
- Body text: navy #272446, fontWeight 600, centred, full width — no maxWidth constraints
- All bars (nav, trust strip): 16px bold Libre Franklin

### TYPOGRAPHY TOKEN MAP — LOCKED 11 JULY 2026 — THE MISSING PIECE
`globals.css` has always had a typography scale (`--font-heading-xl/lg/md/sm`, `--font-body`, `--font-label`, `--font-small`, `--font-nav`). What never existed until tonight was a written rule saying which token belongs to which element — so every section guessed its own number instead of using the same one. This is that rule. No exceptions without writing the exception down here.

| Element / use | Token | Notes |
|---|---|---|
| Every section H2 headline | `var(--font-heading-lg)` | Locked 11 July after Reviews/Who We Are/Systems were found at 3 different sizes. Checked by `scripts/brand_check.js`. |
| Page H1 (usually screen-reader-only, visual weight carried by hero) | `var(--font-heading-xl)` | |
| Sub-headings / small section labels (e.g. "Brands We Work With") | `var(--font-label)` or `var(--font-small)` | Not yet applied — Brands label is still hardcoded 11px, flagged, not yet fixed. |
| Main body paragraph copy | `var(--font-body)` | Fixed 11 July — Reviews was hardcoded 19px, Who We Are used the token at 17px; both now use the token. |
| Nav links / bars (nav, trust strip) | `var(--font-nav)` (16px) | |
| Small print (footer copyright, fallback messages) | `var(--font-small)` | These are legitimate exceptions to body size, not bugs — flagged by the checker so they stay a visible, deliberate choice, not a silent one. |

If a new section needs a headline, a sub-label, or body copy, it uses one of these tokens — it does not invent a new clamp() or pixel value, even one that happens to match visually. Matching-by-coincidence is exactly what broke tonight.

### What is NEVER allowed
- ALL CAPS anywhere on the site — ever. British grammar. DoorMate is a British company.
- Gold eyebrow labels (e.g. "WHY DOORMATE?", "OUR SYSTEMS") — these were killed. They do not appear anywhere on the site.
- Grey text of any shade — not DoorMate's brand
- Free delivery claims
- Newsletter sections (Mailchimp is banned)
- Hinged door images
- Generic AI copy — use Terry's exact words and DoorMate product names

### The design reference
The existing live build (session decisions in this Bible) IS the design reference. barn-doors.co.uk is the sales reference. website2.html does not exist — deleted 22 May 2026.

---

## ⚠️ THE ONE THING NO CLAUDE MAY GET WRONG ⚠️

**DoorMate is a SLIDING DOOR SYSTEMS company.**

Tagline: **DoorMate Sliding Door Systems.**

Barn door hardware is our SPECIALITY and our CREDIBILITY BADGE — it is NOT our headline, NOT our shop window, NOT the lead story on the homepage.

The barn door trend peaked in 2012/13. It has passed. DoorMate diversified to match the market. The bulk of revenue today is pocket doors, internal sliding systems, external sliding systems, handmade doors, and the JB Kind door range. Barn door hardware now sits inside the range — not on top of it.

We are also NOT a double glazing company selling sliding patio doors. We specialise in sliding door SYSTEMS — pocket, internal, external, barn.

Every Claude session that has worked on this project has been hung up on "UK's Only Barn Door Hardware Manufacturer" because it shouts the loudest. THAT IS THE TRAP. Do not fall into it. The manufacturer story is the proof point that earns trust — used further down the page, on About / Our Story, and in blog content. NEVER as the lead.

If Claude finds itself writing "The UK's Only Barn Door Hardware Manufacturer" as a homepage headline — STOP. The bible has been ignored. Re-read this section.

---

## RULE 0 — SCREENSHOTS — AGREED 3 JUNE 2026 — NEVER BREAK
Screenshots are visual references only.
Never assume functionality from a screenshot.
A screenshot of a carousel is not evidence that the carousel has become a static image.
A screenshot of a menu is not evidence that the menu is non-functional.
Comment only on what is visually observable.

## RULE 1 — HONESTY — AGREED 13 MAY 2026 — NEVER BREAK
If Claude doesn't know — say so.
If Claude can't find it — say so.
If Claude is not sure — say so.
NO filling gaps. NO assumptions. NO lies to cover uncertainty.
Honesty in the moment before it becomes a problem.
This rule overrides everything else.

## RULE 2 — NEVER CREATE FILES WITHOUT TERRY AGREEING FIRST

## RULE 3 — NEVER MOVE TO NEXT TASK UNTIL CURRENT ONE IS COMPLETE

## RULE 4 — ALWAYS LEAD — TERRY APPROVES, CLAUDE LEADS

## RULE 5 — NEVER LEAD HOMEPAGE OR META WITH BARN DOOR HARDWARE STORY — Added 19 May 2026

## RULE 10 — NO COMPLETION CLAIM WITHOUT PASTED CHECK OUTPUT — NEVER BREAK — Added 11 July 2026
This rule exists because "it's fixed" has been said and proven false, repeatedly, across months — including within single sessions, more than once. Two real checks now exist in the repo:
- `scripts/brand_check.js` — run with `node scripts/brand_check.js` — checks source code for unapproved colours, hardcoded section padding, ALL CAPS text. Exits 1 if anything fails.
- `scripts/wireframe_live_check.md` — a documented set of JS snippets to run against the LIVE Vercel site via the Claude-in-Chrome tools, measuring real rendered layout (shared margin, trust strip spacing, Reviews side-by-side layout, shop grid equality, footer wrapping) against the exact locked numbers in `DOORMATE_WIREFRAME_V1.md`.

**No section, page, or fix may be called "done", "fixed", "matches the wireframe" or "signed off" without the real output of these checks pasted into the chat in the same message as the claim.** A completion claim with no pasted output is not evidence — it is the same unverified assertion that has failed this project for months. Terry does not need to argue about this — he can just ask "show me the check output" and treat silence or a dodge as the answer.

If a future Claude session believes there's "a better way" to verify something than what's written in these two files — that instinct itself is the failure mode this rule exists to stop. Improving the checks is welcome (add new ones, fix a bad one — see the false-negative caught in `wireframe_live_check.md` Check 3). Replacing "run the check and paste it" with "trust my report" is not.

**Added 11 July 2026 — `.github/workflows/brand-check.yml` runs `scripts/brand_check.js` automatically on every push to GitHub.** This does not depend on any Claude session remembering to run it or Terry remembering to ask — it is a real CI gate. A red X on the commit in GitHub means the check failed; a green tick means it passed. This only covers what `brand_check.js` checks (colours, hardcoded padding, ALL CAPS, headline size mismatch) — it does NOT cover the live layout checks in `wireframe_live_check.md` (that needs a browser, which plain CI doesn't have set up here). Terry: glancing at the commit status on github.com/TerrysGDN/doormate-next after a push is lower-effort than asking a question every time, and it doesn't rely on trusting anyone's word.

## RULE 11 — ROOT CAUSE FIRST, NEVER PATCH THE INSTANCE — NEVER BREAK — Added 11 July 2026
Terry's own example, verbatim, because it says this better than a rule ever could: on a real dev team, Terry asks day 2 "why is that text bigger than that text in that section?" Dev says "pick one," fixes it. Line 2 has the same fault. A real dev's reaction is "wow, that should never have happened — let me check my globals.css... sorry, my mistake, now fixed." Job done — the CATEGORY of bug is closed, not just the one instance.

Tonight, when the exact headline-size bug was found, the first fix hardcoded a new matching number across three sections instead of checking whether a shared token already existed (it did — `--font-heading-lg`, sitting unused). Minutes later the same failure repeated on body-copy text sizes, and it was patched again as an isolated instance before the checker was extended to cover it. Both times, the instinct was "fix what's in front of me," not "check the shared file first, ask if this is systemic, fix the root."

**The rule: the moment any visual inconsistency is found — size, colour, spacing, radius, anything — the FIRST action is to check `globals.css`/the design tokens for an existing shared value, not to patch the specific element.** If a token already exists, use it. If it doesn't, create one and use it everywhere that category of thing appears, in the same pass — not just the one spot that got noticed. Only after that is the fix "done." Patching the instance you happen to be looking at, and leaving the same category to reappear elsewhere, is not a fix — it's the exact failure this rule exists to stop.

## RULE 12 — NO COMPLETION CLAIM WITHOUT LIVE BROWSER VERIFICATION — NEVER BREAK — Added 16 July 2026
This rule exists because "I'll check the live site myself from now on" has already been said in this project and did not hold. The Chrome extension was installed 2 June 2026 specifically so Claude could see the live site directly instead of relying on screenshots — see the 2 June session summary: "This should have happened on day one. It changes everything going forward." For six weeks after that, the capability existed and was not used consistently. Saying the same commitment again in a chat message, on 16 July, is not evidence anything is different — only a written, checkable rule has actually held in this project (see Rule 10, and the fact that every fix since 11 July has shipped with real `brand_check.js` output pasted alongside it).

**The rule: after Terry pushes any change live via GitHub Desktop, before Claude makes any claim that something is fixed, done, or matches the wireframe, Claude must navigate to the live site with the Chrome extension tools and actually look at the rendered result.** A completion claim with no live browser check in the same message is the same unverified assertion Rule 10 already exists to stop — this just extends it to layout, spacing, overflow and alignment, which `brand_check.js` cannot see because it only reads source code, not rendered output.

This does not replace Rule 10 — both are required together, every time. `brand_check.js` output covers colours/caps/sizes. A live screenshot covers what actually renders. Neither alone is enough.

If a future Claude session is tempted to declare something fixed based on reasoning about the CSS alone, without having actually looked at it rendered on the live site — that is the exact failure this rule exists to stop.

## RULE 9 — ONE FULL AUDIT PASS BEFORE ANY EDIT — NEVER BREAK — Added 3 July 2026
Never make a visual change reactively, one piece at a time, and find out it was wrong only after it's live. On 3 July, category cards were built once, shown live, then had to be rebuilt from scratch minutes later because the first version was never checked against a real reference before it was coded. That is the same 5-week thrash pattern (word cloud, hero, trust strip, every "rushed compromise" logged in this file) — it just moved from "Terry keeps getting asked to decide" to "Claude keeps guessing and correcting." Same root cause either way: deciding as you go instead of thinking it through first.

The fix: before touching any code, do ONE full pass — look at the whole section (or sections) live, compare against a real reference (barn-doors.co.uk per Rule 8, or a calibration site like pchenderson.com for feel only, never to copy), decide everything that needs to change, THEN make ONE batched edit. Never edit, look, redo, look, redo. If a genuine judgment call turns out wrong after Terry sees it, that's normal — but the first version must be the product of a real audit, not a first guess.

This rule exists because promises to stop rushing have been made and broken repeatedly in this project (see Rule 8, and the 23 June word cloud history). Writing it down has not been enough on its own. Every session must actually follow it, not just read it.

## RULE 8 — THE MEASURING STICK — NEVER IGNORE IT — Added 24 June 2026
barn-doors.co.uk is the measuring stick. It was built by Terry — a door fitter, not a developer — and it sold £250k in 2017 with Google seeing only 5% of it. Every single decision on the new site must be checked against it.
Before touching any section ask: does the old site do this better? If yes — find out why and match it first, then beat it.
The old site audit (old-site-audit.md) exists in the NEW WEBSITE folder. Read it. Use it.
Terry had to point out the scaling issue, the hero carousel approach, the circular photos, the section sizing. All of it was in the audit. Claude had the measuring stick and chose not to use it. That cost 4 months of progress.
This rule exists so it never happens again. The measuring stick is always the first reference — not the last.

## RULE 7 — SEO AND AISEO MUST BE IN EVERY SINGLE CLAUDE CODE BRIEF — NO EXCEPTIONS — Added 3 June 2026
The entire reason for building the new site is Google and AI visibility. Every Claude Code brief must include these requirements on every file touched:
- Semantic HTML throughout — proper `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, `<section>` elements. Never use divs where semantic elements exist.
- Correct heading hierarchy — H1 on every page, H2 for sections, H3 for sub-sections. Never skip levels.
- All images must have descriptive alt text — never empty, never "image", always describes what is shown.
- All phone numbers as `<a href="tel:02921660393">` — all emails as `<a href="mailto:info@doormate.co.uk">` — never plain text.
- Schema.org JSON-LD on every page: Organisation + LocalBusiness in layout.jsx. Product + AggregateRating on every product page. FAQPage on every FAQ page. BreadcrumbList on every category and product page.
- Meta title and meta description on every page — lead with "DoorMate Sliding Door Systems" — never with barn door hardware.
- Open Graph tags on every page — og:title, og:description, og:image, og:url.
- llms.txt at /public/llms.txt — AI assistants must be able to cite DoorMate when customers ask "where can I buy a pocket door kit UK".
- All nav links must be crawlable `<a>` tags — never JavaScript-only navigation.
IF ANY OF THESE ARE MISSING FROM A BRIEF — THE BRIEF IS INCOMPLETE. DO NOT SUBMIT IT.
The sliding door systems positioning is the lead. The manufacturer story is the credibility badge — used to support, never to headline. This rule applies to: homepage hero, page titles, meta descriptions, Open Graph tags, category landing pages, AI-search summaries, and any external marketing copy.

## RULE 6 — DAY-1 CHECKS BEFORE ANY BUILD — Added 19 May 2026
The old site died because a structural sitemap problem wasn't checked until day 30. Before building or extending any site, Claude MUST run the day-1 diagnostic checks documented in PART 24. Skip them at your peril.

---

## PART 1 — THE BUSINESS

Name: **DoorMate Sliding Door Systems**
Owner: Terry Burnett
Location: Cardiff, South Wales
Trading since: 2009
Websites: barn-doors.co.uk (primary — legacy WebFactory site) | doormate.co.uk (new site under build, Next.js on Vercel) | pocketdoorframes.co.uk (secondary WordPress)
Staff: 3 full-time including Terry. Daughter helps part-time with admin.
Phone: 029 2166 0393
Email: info@doormate.co.uk
Gmail: terryburnett98@gmail.com

DoorMate sells: pocket doors, internal sliding door kits, external sliding door kits, handmade doors, JB Kind doors, barn door hardware, and the accessories that go with them (pull handles, locks, brackets, hardware components).

DoorMate's speciality: barn door hardware — we are the only genuine barn door hardware manufacturer in the world that we know of. Featured on George Clarke's Old House New Home, Channel 4.

DoorMate is NOT a double glazing company. DoorMate does NOT sell sliding patio doors. DoorMate is sliding door SYSTEMS.

FINANCIAL SITUATION — CRITICAL:
Terry has been unpaid for 3 years. Business at a loss. 1-2 months to turn around or staff get laid off.
The mission is SELL MORE. Every decision prioritises speed of revenue. Fast beats perfect. Today beats next week. Use every weapon available — reviews, calculators, chatbot, AI search optimisation, structured data, lead capture forms, accessory upsells. All of it, wired in from day one.

---

## PART 2 — TERRY'S BACKGROUND — FOR CONTENT USE ONLY

- Started in doors hands-on — installing, repairing, making the coffee
- Worked up to Industrial Sales Manager / effectively stand-in MD at Action Doors, South Wales
- Played drums in a punk band for 30+ years — gigs across UK, fundraisers, benefits
- Five week tour of the US East Coast — every DoorMate barn door hardware product named after a place on that tour:
  Gainesville | Brooklyn | Detroit | Baltimore | Covington | Augusta
- Had too much respect for his boss Gareth at Action Doors to compete against him
- Started making first barn door hardware kits around 2013 on Gareth's factory floor, with Gareth's blessing — built on respect not rivalry
- DoorMate founded 2009 | Own Cardiff workshop 2015
- Children: Stefan and Tegan — started DoorMate partly to leave something for them
- As Seen On George Clarke's Old House New Home, Channel 4
- Interview at: https://bootsshoesandfashion.com/an-interview-with-doormate/
- Solved a 400-year-old timber door warping problem: hidden 20x20mm steel stress bars, 10mm routed into vertical boards and 10mm routed into horizontal brace, drops in with no fixings, locks both components together. A supplier adopted it and claimed it as their own. Supplier not named — still an active supplier relationship.
- Named the business DoorMate because the industry was full of difficult people — he wanted to be a mate

---

## PART 3 — NEVER RAISE AGAIN

- Mailchimp — hours wasted, failed completely, never mention
- Sender.net — parked, never mention
- Steel Doors page — hidden, unreliable supplier, never reference
- Scrigno — discontinued 2024, never reference
- 1.7 markup — was a mistake, never reference
- JB Kind supplier name — invisible supplier, never mention to customers
- CSV imports for JB Kind — banned, caused weeks of wasted time
- Sales closing tactics — Terry's only, Claude never invents
- "UK's Only Barn Door Hardware Manufacturer" as a headline — superseded as the homepage lead, never use as the main H1
- Any domain migration questions — doormate.co.uk is being built, never raise as a pending question

---

## PART 4 — ALL RULES — NEVER BREAK

- Read all project files and the bible before responding to anything
- Never ask Terry for information already in project files
- Never guess, assume or fill gaps — ask if unsure — if not sure SAY SO immediately
- Never rewrite approved content
- Never show or discuss trade prices
- Never calculate customer prices — WebFactory invoices what it sees
- Never create files without Terry agreeing first
- Never suggest redoing completed work
- Never move to next task until current one is complete
- Always lead the homepage and meta with the sliding door systems positioning — NEVER with the barn door hardware manufacturer story (added 19 May)
- Always run the day-1 diagnostic checks before building or extending any site (added 19 May)
- Always use master HTML template — no variations
- Always use BUY NOW | Always use £xxx.xx format
- Always ask for screenshot before suggesting changes
- Never duplicate headlines
- No bifolds ever
- JB Kind descriptions about the door only — no door type mentioned
- Summaries as PDF or MD file — never as chat text
- Bi-Parting = doors slide APART (Brooklyn/Baltimore)
- Bi-Passing = doors PASS EACH OTHER (Covington/Augusta)
- 2 tracks running parallel = ALWAYS Augusta
- Oak doors NOT made in Cardiff
- "UK's Only Manufacturer" = barn door hardware only, and only as a credibility badge — NEVER the homepage headline
- External sliding kits come from Finland — NEVER say UK Manufactured
- NEVER use generic AI language — use Terry's words and industry terms
- NEVER waste Claude Code credits on multiple attempts — get brief right first time
- ALWAYS batch Claude Code instructions — one big message not multiple small ones
- ALWAYS explain WHY before asking Terry to do anything
- ALWAYS flag every major decision AS IT IS AGREED — not at end of session
- ALWAYS lead — Terry approves, Claude leads
- NO new technical jargon thrown at Terry without a plain-English version alongside (added 19 May — Terry is a door fitter, not a tech expert)

---

## PART 5 — PRODUCT KNOWLEDGE

### Barn Door Hardware — UK Manufactured Cardiff
Gainesville: Single. 175mm headroom. Track = 2x door width. £150
Detroit: Single LOW HEADROOM. Standard bracket 130mm, reverse bracket 90mm. £150
Brooklyn: Double BI-PARTING. 175mm headroom. Track = 4x door width. £290
Baltimore: Double BI-PARTING LOW HEADROOM. £300
Covington: SINGLE TRACK BI-PASSING. £375
Augusta: DOUBLE TRACK BI-PASSING. Standard bracket 315mm, reversed 229mm. £395
2 tracks running parallel = ALWAYS Augusta

### Handmade Barn Doors — Cardiff Workshop
Pine Single: £527 | Pine Double: £1,146 | Oak: POA
Lead time pine: 4-5 weeks | Lead time oak: 8-9 weeks
Designs: V-Brace, Z-Brace, Ledge & Brace, Glazed panel
Oak NOT made in Cardiff. NEVER say "Crafted in Our Cardiff Workshop" for handmade oak doors.

### Mirror Pocket Doors
DoorMate ONLY UK manufacturer.
Single: £395 | Double: £790 | Lead time: 2-3 weeks
Mirror doors start at 25kg before mirror added — ALWAYS recommend 30-45kg soft close.
Soft close NOT included — optional extra.

### Pocket Door Kits
Coburn: £117.60 | Rocket: £167.94 | Eclisse: £304.80 | Scrigno: DISCONTINUED

### Barrier Components Pocket Door System
PD1: £139 | PD2: £154 | Double: £288 | Accessories: £30

### External Sliding Kits — FROM FINLAND — NEVER say UK Manufactured
Single: DM-75 £104 | DM-100 £156 | DM-150 £229 | DM-200 £281
Bi-Parting: DM-75 £156 | DM-100 £230 | DM-150 £386 | DM-200 £444

### Internal Sliding Kits — PRODUCT NAMES CONFIRMED 26 MAY 2026
Timber Door Systems | Stainless Door Systems | Glass Door Systems | Minimalist Door Systems
Starting kit: DM-50i — For doors up to 50kg — £67.00
Weights still to be confirmed before building product pages. Landing page tiles can be built.
Correct recommendation when customer says modern — NOT barn door hardware.

### Accessories — Revenue Line We Must Not Lose (added 19 May)
Pull Handles | Locks | Shelf and Brackets | Hardware Components | Spare parts
These exist on the old site under Shop. They are missing from the new site plan and must be added as a category. They are the "while you're here, add one" upsell on every product page. Lose them and we lose easy revenue.

---

## PART 6 — JB KIND

(Unchanged from v1. Invisible supplier — never mentioned to customers. DoorMate not VAT registered. Trade x 1.20 x 1.40. £45 delivery globally. Unlimited stock. Lowest price as base, no negative uplifts. Subtitle "For Double Doors Add Qty 2 To Basket". Always check JB Kind portal FIRST. 12 departments complete on barn-doors.co.uk: WHITE SHAKER 216289, WHITE CLASSIC 216288, WHITE CONTEMPORARY 216287, WHITE COTTAGE 216286, WALNUT 216285, OAK CLASSIC 216284, OAK SHAKER 216283, OAK COTTAGE 216282, OAK CONTEMPORARY 216281, URBAN INDUSTRIAL 216280, LAMINATE 216279, MOULDED 216501. Palomino uplifts: FD30 +£58.84, Glazed +£71.75, Finished +£15.71, Primed -£27.98. Oak Fuji FD30 add when back in stock August 2026. Cross promotions on every door: Rocket Single, Rocket Double, Rocket Fire Rated, Privacy Lock. Variation structures preserved as v1.)

---

## PART 7 — BARN-DOORS.CO.UK — LEGACY SITE STATE

All 6 barn door systems, all 12 JB Kind departments, all pocket door kit pages, external sliding kits, handmade doors — ALL DONE.
Remaining tasks: Internal Sliding Door Kits page ON HOLD; 301 redirects for 404 pages (PART 9); alt text on all images; price check pass; deploy DoorMate_ImprovedSearch.js; add chatbot.
The legacy site has Houzz reviews widget embedded, Trustpilot link in footer, and the social media bar — all carry over conceptually to the new site.

---

## PART 8 — WEBFACTORY — DEAD END (Unchanged from v1)

WebFactory is a confirmed dead end. Structural SEO problems that cannot be fixed. Continue using for barn-doors.co.uk maintenance only. New site is the solution. Page link format: #page:XXXXXX#. HTML works in YouTube embed boxes and Image Feature Box Text field. All HTML in HTML block, not multi-line text block. p tags with margin:0 0 8px 0. No outer wrappers. Image crop 2:3 portrait door, 4:3 landscape landing. Pre-crop 500px wide. Delivery globally £45.00.

---

## PART 9 — SEARCH CONSOLE — LEGACY SITE

259 indexed, 1040 NOT indexed. Falling since February 2026. 545 pages duplicate URL parameters UNFIXABLE on WebFactory. 381 pages canonical tag issue UNFIXABLE. 54 pages 404 errors. Sitemap only 113 pages — individual products missing — foreign client pages present. Email sent to hello@webfactory.co.uk 11 May re foreign pages.

CONCLUSION: WebFactory structural problems cannot be fixed. New site is the only solution.

301 redirects to add on legacy site:
/sliding-barn-door-hardware → /barn-door-hardware
/sliding-door-kits → /internal-sliding-door-kits
/pocket-door-kits2 → /pocket-door-kits
/industrial-sliding-systems → /internal-sliding-door-kits
/modern-sliding-door-systems → /internal-sliding-door-kits
/country-range → /doors
/barn-door-hardware/technical-stuff → /barn-door-hardware/barn-door-technical-stuff
/how-to-order-the-double-detroit → /barn-door-hardware/the-detroit2
/bespoke-barn-doors/crittal-style-doors → /doors
/bespoke-barn-doors/brand-new-internal-doors → /doors/internal-doors

---

## PART 10 — NEW SITE STRATEGY — REWRITTEN 19 MAY 2026

### WHY WE ARE BUILDING A NEW SITE
DoorMate has been invisible on Google for 10 years due to WebFactory structural problems that cannot be fixed. The new site on doormate.co.uk is the only solution.

### THE PROOF OF DEMAND
DoorMate sold over £100,000 of pocket doors on eBay in 9 months. Razor thin margins because that is the eBay way. That experiment proved the demand exists for sliding door systems, particularly pocket doors. The strategy is to take that proven demand and move those buyers to DoorMate's own platform where the margins are proper and the brand is real. The eBay history is used as PROOF OF DEMAND — not as a future sales channel.

### THE POSITIONING — REWRITTEN AND LOCKED 19 MAY 2026
The new site is **DoorMate Sliding Door Systems**.

Lead with sliding. Pocket doors, internal sliding kits, external sliding kits, handmade doors, JB Kind doors — these are the shop window. They are what's selling. They are what customers are searching for.

Barn door hardware sits inside the range as our SPECIALITY. The manufacturer story (only one in the world we know of, Cardiff workshop, Channel 4) is our CREDIBILITY BADGE — used to build trust below the fold, on About / Our Story, in blog content. It is the proof we are real. It is never the lead.

Someone searching Google or ChatGPT for "sliding door system UK" lands and immediately knows they are in the right place. Someone searching for "patio door" lands and knows they are in the wrong place. Both outcomes protect the brand and protect our SEO/AISIO.

### WHAT NO COMPETITOR CAN COPY
Every company selling barn door hardware in the UK — Coburn, Henderson, Buller, From The Anvil — buys Chinese kits and rebadges them. No machinery. Just storage shelves. On barn door hardware, DoorMate manufactures in Cardiff. On the DM Range (external/internal sliding kits) we buy in like everyone else — but we engineer and support the systems properly. The story is sliding door systems engineered for real homes, with the genuine UK manufacturer credential to back it up.

### SITE STRUCTURE — AMAZON PRINCIPLE
Every product gets its own dedicated page. Every page built to rank on Google AND to be cited by AI assistants. Customer searches, lands directly on the product page, sees price, sees reviews, sees BUY NOW above the fold, sees the chatbot ready to answer questions in the corner, sees accessories as upsell. Straight to purchase or straight to qualified lead.

---

## PART 11 — CONVERSION MACHINERY — NEW PART 19 MAY 2026

The new site is not a brochure. It is a shop with weapons. Every weapon must be wired in from day one — not "later" — because each one is a revenue lever and Terry is fighting to save the business.

### Reviews — THE HOLY GRAIL
Reviews are the single biggest conversion lever for ecommerce. The old site already has the Houzz review widget embedded and a Trustpilot link. The new site MUST carry these over and feature them:
- Houzz reviews widget on the homepage (already exists, embeddable)
- Trustpilot link/widget in the footer (already exists)
- Star ratings displayed on every product page (with Schema.org Review/AggregateRating structured data so they show in Google rich snippets)
- A dedicated /reviews page collecting everything in one place
- Plan to migrate to a single review system over time — for v1, just get what we already have onto the new site

### Chatbot — TEN YEARS OF KNOWLEDGE WIRED IN
The DoorMate chatbot (PART 21) is part of the conversion machinery, not a side project. It must be live on every product page, in the corner, ready to answer "will this fit my opening" at 11pm. Briefcase sales approach baked in (PART 23). Real API attached. Knowledge base auto-updating hourly. This is the after-hours sales person no competitor can match.

### Quote Calculators
Currently half-built (per Terry, 19 May). On each product category (pocket doors, sliding kits, barn door hardware), a simple calculator that asks: opening size, door size, door weight, wall type. Returns recommended product + price. Captures the lead either way. Even a v1 with two questions is better than nothing.

### Accessories Upsell
Pull handles, locks, brackets, hardware components — all on the old site under Shop. These are the easy-add revenue. On every product page, "frequently bought together" section. Lose these and we lose pure margin.

### Lead Capture
Installation Enquiry form (already exists on old site) — for jobs too complex for off-the-shelf. The phone-call funnel. Must be on every relevant product page.

### Pocket Door Brand Grid
Coburn, Eclisse, Rocket logos as trust signals — already on old site. Carry over.

---

## PART 12 — AISIO (AI SEARCH OPTIMISATION) — NEW PART 19 MAY 2026

Google SEO matters. AI Search matters as much or more. People increasingly ask ChatGPT, Claude, Perplexity, and Gemini "what pocket door kit do I need" — and the AI cites a few suppliers in prose. If DoorMate isn't on that list, the site is invisible regardless of where it ranks on Google.

To be cited by AI assistants, the new site MUST have:

1. **Structured data (Schema.org JSON-LD) on every page** —
   - Organization schema for DoorMate
   - LocalBusiness schema for the Cardiff workshop
   - Product schema with price, availability, brand on every product page
   - AggregateRating and Review schema once reviews are wired in
   - BreadcrumbList schema on category and product pages
   - FAQPage schema on FAQ content

2. **Direct prose answers to the questions customers actually ask** —
   "What size pocket door kit do I need for a 762mm door?"
   "What's the difference between bi-parting and bi-passing barn doors?"
   "Can I fit barn door hardware on plasterboard?"
   "What's the headroom required for a Gainesville system?"
   Written as questions and answered in plain English on the page where they sit. This is what AI assistants quote verbatim.

3. **Open Graph and Twitter card meta tags** on every page.

4. **An llms.txt file at the root** giving AI assistants a curated summary of the site's main offerings.

5. **A semantic HTML structure** — proper H1, H2, H3 hierarchy. Real paragraphs. No "div soup."

CRITICAL: This was MISSING from the v1 Next.js build. Must be added in the next batched Claude Code brief.

---

## PART 13 — BUILD STACK — LOCKED

1. Design reference — barn-doors.co.uk (Terry's original site, built by him) PLUS the session decisions recorded in this Bible. These are the guardrails. website2.html was rejected and DELETED on 22 May 2026 — never reference it again. Claude Code must build from the Bible and the approved session decisions — not invent new designs.
2. Claude Code — Claude desktop app — builds the site
3. GitHub — github.com/TerrysGDN/doormate-next — stores code (free) — ALREADY SET UP
4. Vercel — vercel.com — hosts it live (free) — ALREADY DEPLOYED
5. Netnerd — points doormate.co.uk at Vercel when ready

Live Vercel URL: https://doormate-next-git-main-terry-s-projects-22f7d3c3.vercel.app
Vercel project name: **doormate-next** (THIS IS THE ONE)
Dead Vercel project to delete: **doormate-website** (old HTML version Browser Claude abandoned — should be removed from Vercel)
Domain: doormate.co.uk via Netnerd — Auto Renew ON
WARNING: Renewal due 28 May 2026 — confirm payment before that date
Currently redirects to barn-doors.co.uk — DO NOT change until new site ready

### GITHUB/VERCEL WORKFLOW
Claude Code edits files in NEW WEBSITE folder on Desktop. Terry runs one command: `git push -u origin main`. Vercel auto-deploys. That is the only command Terry ever needs.

### VERCEL PREVIEW URL EMPTY (added 19 May)
If the Vercel preview URL returns no content when fetched, it is almost certainly because Vercel Deployment Protection (password protection) is on by default for preview deployments. Fix: Vercel → Project Settings → Deployment Protection → switch off. 30 seconds. This is not a code problem.

---

## PART 14 — CURRENT STATE OF BUILD — 19 MAY 2026

Site folder on Terry's PC: NEW WEBSITE — on Desktop via Dropbox
GitHub repo: github.com/TerrysGDN/doormate-next
Framework: Next.js (App Router — server-rendered, good for SEO/AISIO)
Live on Vercel: doormate-next project

### What's BUILT and TECHNICALLY SOUND
- Next.js App Router structure with server components (means content IS visible to Google when domain attached)
- 30 pages built
- sitemap.xml present (app/sitemap.js)
- robots.txt present (app/robots.js)
- Navigation: Home dropdown + 6 flat links — STRUCTURE correct
- Real DoorMate images in /public/img
- Correct contact details and brand colours

### What's WRONG and MUST BE FIXED
- **Homepage headline says "The UK's Only Barn Door Hardware Manufacturer"** — this is the OLD positioning we are explicitly moving away from. Must be rewritten to lead with DoorMate Sliding Door Systems.
- **Meta description** leads with same wrong positioning
- **"Why DoorMate" section heading says "The World's Only Bespoke Barn Door Hardware Manufacturer"** — wrong positioning
- **Hero is three barn door panels** (Gainesville) — should show sliding door systems generally, not just barn doors
- **No structured data** (Schema.org JSON-LD) anywhere — AISIO killer
- **No reviews integration** — the holy grail, missing entirely
- **No chatbot wire-in** — Terry's biggest weapon, missing
- **No accessories category** — revenue line, missing
- **No quote calculators** — half-built but not wired in
- **No lead capture / installation enquiry form** — old site has it, new site doesn't
- **Hero image ratio** issues at 100% browser zoom
- **Page scaling** issues at 100% browser zoom

---

## PART 15 — HOMEPAGE — REWRITTEN BRIEF FOR CLAUDE CODE

### Hero (new direction)
Headline (AGREED AND LOCKED): **The UK's Leading Sliding Door Specialists**
Subheadline (AGREED AND LOCKED): **Built for real doors, real walls and real homes since 2009.**
(Everything after "since 2009" is AI slop — cut it. Do not add to or change these lines.)
Imagery: NOT three barn door panels. Should show a range of sliding systems (pocket door in a wall, internal slider, external slider, barn door) — or a single strong image of an installed sliding system. Pre-existing images in /public/img.

### Trust Bar (keep / amend)
Trading Since 2009 | As Seen On Channel 4 | UK Sliding Door Specialists | Handmade In Cardiff
("UK Sliding Door Specialists" replaces "UK Barn Door Hardware Manufacturer" in the top trust bar. The manufacturer line moves further down the page as a credibility section.)

### Category Cards (visual priority order, 6 cards)
Pocket Door Kits | Internal Sliding Door Kits | External Sliding Door Kits | Handmade Doors | Barn Door Hardware | Accessories
(Pocket and sliding lead. Barn door hardware moves down. Accessories added.)

### Reviews Strip (new)
Houzz reviews widget — homepage section dedicated to social proof.

### Credibility Section (new — manufacturer story belongs here, not at top)
"We are the only genuine barn door hardware manufacturer in the world we know of. Featured on Channel 4. Cardiff workshop since 2015. We don't import — we engineer."

### Notable Installations — Client Privacy Rule (added 20 May 2026)
DoorMate has notable high-profile installations including Trump Turnberry hotel and the Chelsea Pensioners village. Many other clients are equally high profile but privacy is respected — never name a client without Terry's explicit sign-off.
Credibility is shown on the site via a SCROLLING LOGO BANNER — client logos only, no names, no words. Subtle and professional. Terry to supply logos. This sits in the credibility section of the homepage.

### Channel 4 Banner (keep)
Below credibility section.

### Why DoorMate (rewritten)
Heading: "Sliding Door Systems — Engineered For Real Homes"
Four features:
- UK Sliding Door Specialists Since 2009
- As Seen on Channel 4
- The Only Genuine Barn Door Hardware Manufacturer (credibility, not headline)
- Expert Advice — Call 029 2166 0393

### Chatbot Slot
Persistent corner chatbot widget on every page.

### Structured Data
Organization + LocalBusiness JSON-LD in app/layout.jsx.

---

## PART 16 — NAVIGATION — AGREED AND LOCKED 19 MAY 2026

Home (dropdown): As Seen On TV | News | About Us | Contact | Trade | Become A Partner | Fitters Wanted | Dropshipping
Flat links: Doors | Barn Door Hardware | Pocket Door Kits | Internal Sliding Door Kits | External Sliding Door Kits | Gallery | Shop

Gold dropdown. Navy header. No arrows on flat links.
Shop = accessories, components, spare parts, pull handles, locks, brackets, hardware.
Every flat link goes to a category landing page.

---

## PART 17 — CATEGORY LANDING PAGES — NOT YET BUILT

Doors page — 3 tiles: Handmade Barn Doors | Pocket Doors | Internal Doors
Barn Door Hardware page — 6 tiles: Gainesville | Brooklyn | Covington | Augusta | Detroit | Baltimore
Pocket Door Kits page — 4 tiles: Rocket | Eclisse | Coburn | Barrier
Internal Sliding Door Kits page — 4 tiles: Timber Door Systems | Stainless Door Systems | Glass Door Systems | Minimalist Door Systems — CONFIRMED 26 MAY 2026
External Sliding Door Kits page — 4 tiles: DM-75 | DM-100 | DM-150 | DM-200
Accessories page — NEW — 4 tiles: Pull Handles | Locks | Brackets | Hardware Components
Gallery page — TBD

---

## PART 18 — BRAND

Navy: #363557 | Gold: #efb627 | Title: #272446
Font: Franklin Gothic Demi (logo) / Libre Franklin (Google web font, in use)
Gold in HTML template: #f1b52a | Navy dark: #0f0d24

(Master HTML template for WebFactory and brand page template unchanged from v1 — preserve.)

---

## PART 19 — CLAUDE CODE CRITICAL RULES

- Credits are LIMITED — batch ALL instructions into ONE message, never multiple small fixes
- Design reference is barn-doors.co.uk (Terry's original) + this Bible's session decisions. website2.html is DEAD — deleted 22 May 2026 — never reference it
- Never download stock images — use only images already in /public/img
- Never use generic AI copy — use exact DoorMate product names, prices and terminology
- Never invent statistics
- Never show hinged doors
- Never add free delivery
- Never add newsletter sections (Mailchimp banned)
- Mobile menu — keep it
- Site must display correctly at 100% browser zoom on standard desktop
- Visual preview must be checked before pushing to GitHub
- ALWAYS include Schema.org JSON-LD structured data in any page Claude Code creates (added 19 May)
- NEVER write the homepage headline or H1 as "The UK's Only Barn Door Hardware Manufacturer" — see ⚠️ at top of bible (added 19 May)

---

## PART 20 — NEW CONTENT — CREATED 12 MAY 2026

Three pieces saved in doormate_website_content.md on Terry's PC:
- /our-story — full brand story
- /blog/the-truth-about-barn-door-hardware
- /blog/solving-the-warping-door-problem

---

## PART 21 — CHATBOT

doormate-chat-widget.html — NOT live on website yet (file in Downloads)
API Key: DoorMate Knowledge Base Bot (Notepad on Terry's PC + console.anthropic.com)
Model: claude-sonnet-4-20250514 | Cost ~£0.003 per conversation
Web App: https://script.google.com/macros/s/AKfycbz4RNYndxlw3UQ7E1NUOnLRfr-u26rvDrnYoWGlXGJ4-ejJcoBemhXp2p4x5VW4-ego1Q/exec
Gmail sync running hourly — DO NOT run setupTrigger() again
Improved search ready: DoorMate_ImprovedSearch.js — not deployed
Knowledge base: Google Sheet "DoorMate Knowledge Base"
Drive folders synced hourly:
- Fitting Instructions: 1Nzock7qeJSH7554nNp8tjQC_T88PbBUj
- DM Systems: 1AoosuAP5JL4y6wNelupgDPV2nJsfwuh0
- Drawings: 1qShRtXnGaNr1yd3Q6hmiANkM-Xy6E3NE

The chatbot is part of conversion machinery (PART 11) — must be wired into every product page on the new site, not treated as a deployment task for later.

---

## PART 22 — TOOLS — HOW THIS PROJECT WORKS NOW

Browser Claude (claude.ai) — quick questions only. No memory. Has consistently failed to grasp the positioning (see ⚠️ at top of bible).
Cowork (Claude desktop app) — primary tool. Reads NEW WEBSITE folder directly. Memory ON. Reads CLAUDE.md as project instructions.
Claude Code — builds the website. All briefs batched into ONE message.
GitHub — stores all code. One command: `git push -u origin main`
Vercel — hosts the live site. Auto-deploys.

---

## PART 23 — TERRY'S SALES PHILOSOPHY

Briefcase approach — qualify first, one confident recommendation.
"Sounds like the [system] would be perfect for this" — always this phrasing.
"Sounds like the [system] may do the job" — when slightly less certain.
Never lead with price — qualify first. Price comes at product page.
Bite size answers only. Never overwhelm.
Build trust → authority → rapport → clarity.
If objection: "No problem — that's exactly why we also have the [alternative]."
Never assume barn door — always ask about style first for interior doors.
Never offer discounts.
All sales tactics from Terry only — Claude never invents.
Wittswood 10% discount: ONLY for customers referred by Wittswood.

---

## PART 24 — DAY-1 DIAGNOSTIC CHECKS — NEW PART 19 MAY 2026

Before any new build or major extension, run these checks. The old site died because the sitemap problem wasn't checked until day 30. Never again.

1. **Indexability.** Is robots.txt allowing crawl? Is sitemap.xml live, complete, and submitted to Google Search Console under the correct domain?
2. **Canonical and URL parameter handling.** Are canonical tags clean? Are there duplicate URL parameters being generated?
3. **Server-rendered content.** Does fetching the raw HTML return the real page content, or just a JavaScript shell? Next.js App Router server components solve this — verify per page.
4. **Structured data.** Is Schema.org JSON-LD present on every page (Organization, LocalBusiness, Product, Review)?
5. **Page speed / Core Web Vitals.** LCP, FID, CLS — within Google's thresholds?
6. **Mobile rendering.** Does the page render correctly at 360px width? 65% of traffic is mobile.
7. **Vercel deployment protection.** Is preview-URL password protection on (returns empty fetch)? Off when ready to launch.
8. **Google Search Console + Google Business Profile.** Verified, submitted, monitored.

---

## PART 25 — IMMEDIATE NEXT ACTIONS IN ORDER

1. Terry switches off Vercel Deployment Protection on doormate-next project so the preview URL is viewable
2. Terry deletes the dead **doormate-website** project from Vercel (and its GitHub repo if separate) to remove confusion
3. Discuss and lock the new nav ordering (PART 16)
4. Write ONE batched Claude Code brief to: rewrite homepage positioning (PART 15), add Schema.org structured data, wire in Houzz reviews widget, add Accessories category card, add chatbot placeholder slot
5. Terry runs `git push -u origin main`
6. Check live site on Vercel URL — visual preview, mobile preview
7. Build category landing pages including new Accessories page (PART 17)
8. Build individual product pages with structured data + reviews + chatbot + lead form
9. Wire in quote calculators (v1 even if basic)
10. 301 redirects on barn-doors.co.uk (PART 9)
11. Add chatbot to live site
12. Deploy DoorMate_ImprovedSearch.js
13. Alt text on all images
14. Price check pass on all JB Kind doors against portal
15. Internal Sliding Door Kits — once Terry confirms product names and weights

---

## SESSION SUMMARY — 21 MAY 2026 (EARLIER)

### Homepage framework — LOCKED
Terry's formula, agreed and not to be changed:
**HEADLINE = AUTHORITY | REVIEWS WIDGET = TRUST | WHAT WE DO = 6 CARDS**
Everything above the fold. This is the selling formula. Do not rearrange it.

### Decisions made and pushed to GitHub
- **Hero**: Fixed 360px height. Headline + subline only. No buttons. No phone number in hero.
  - Headline: "The UK's Leading Sliding Door Specialists"
  - Subline: "Built for real doors, real walls and real homes since 2009."
- **Gold star bar above hero**: Removed — widget below makes it redundant.
- **Trust strip**: Single line, navy background, gold text. "Trading Since 2009 | As Seen On Channel 4 | UK Sliding Door Specialists | Handmade In Cardiff"
- **Houzz widget + 6 category cards**: Side by side, immediately below trust strip — above the fold on standard desktop. Houzz iframe left (300x435). Six cards right in 3-column grid.
  - Card order: Doors | Pocket Door Kits | Barn Door Hardware | Internal Sliding Door Kits | External Sliding Door Kits | Shop
  - Cards: image top, gold-bordered name label below. No gradient overlays. Clean.
- **Trustpilot link**: Sits below Houzz widget (small text link).
- **Background**: White throughout. Navy only for nav bar and trust strip. Dark navy sections below fold removed.
- **Nav**: Merged into single bar. Logo left (width=260, height=72px). Links right. No phone number. No SHOP NOW button.
  - HOME dropdown: As Seen On TV | News | About Us | Contact | Trade | Become A Partner | Fitters Wanted | Dropshipping
  - Flat links: Doors | Barn Door Hardware | Pocket Door Kits | Internal Sliding Door Kits | External Sliding Door Kits | Gallery | Shop
- **Phone number**: Footer only. Not in nav or hero.
- All changes committed and pushed. Vercel auto-deployed.

### Rules established this session — NEVER BREAK
- **DISCUSS BEFORE MAKING ANY CODE CHANGES** — Terry raised this multiple times. No jumping ahead.
- The Houzz widget is the biggest selling tool. It goes prominent and above fold. Never move it down the page.
- White is the primary background. Navy is the nav. That's it.
- No SHOP NOW in nav — the category cards do that job.
- No phone number in nav or hero — footer only.

### Outstanding — next session priorities
1. Logo size refinement — Terry flagged it as too small ("WHO ARE THIS AMAZING COMPANY? OH WAIT LET ME INCREASE THE BROWSER ZOOM")
2. Schema.org JSON-LD structured data — NOT yet added. Organisation, LocalBusiness in layout.jsx. Product + AggregateRating on every product page. AISEO critical.
3. llms.txt file at root — for AI assistant citation
4. Sitemap.xml — verify it's correct and submit to Google Search Console
5. Footer — add phone number 029 2166 0393
6. Category landing pages (Part 17)
7. Individual product pages

---

## SESSION SUMMARY — 21 MAY 2026 (EVENING) — READ THIS FIRST — MOST RECENT

### STATE OF THE HOMEPAGE RIGHT NOW
Hero gradient removed — Augusta installation photos now visible. Channel 4 line removed from hero. Nav is one white bar with | separators between links. Logo visible but still too small — does not fill the full height of the white nav bar. This is the next fix.

### WORKFLOW — LOCKED FOREVER — NEVER CHANGE
- **Cowork** — strategy, bible, design decisions, writes Claude Code prompts
- **Claude Code** — executes changes directly in NEW WEBSITE folder on Desktop
- **Claude Code pushes directly to GitHub** — Terry does NOT type git commands
- **GitHub Desktop** — installed and connected to doormate-next. Used as backup sync if needed.
- **Vercel** — deploys automatically when GitHub receives the push
- Terry refreshes the Vercel URL to see changes: `https://doormate-next-git-main-terry-s-projects-22f7d3c3.vercel.app`
- Hard refresh = Ctrl + Shift + R

### KNOWN MESS TO CLEAN UP
- There is/was a duplicate nested folder `NEW WEBSITE\doormate-next` — Claude Code told to delete it. Confirm it's gone next session.
- Dead Vercel project **doormate-website** still exists — delete it from Vercel dashboard when time allows.
- Dead GitHub repo **doormate-website** — delete when time allows.

### WHAT IS WRONG — FIX IN THIS ORDER NEXT SESSION
1. **Nav balance** — logo is sitting too far right, links too far left. The whole nav needs proper spacing so logo sits left with breathing room and links sit right with breathing room. Balanced, not bunched.
2. **Logo size** — must fill the full height of the white nav bar. The bar needs to be taller to give the logo room. Logo is `UJ Logo Final.png` in public/img.
3. **Hero carousel** — TEXT-LED product announcement slides, NOT silent photos with a fixed headline. Each slide has a coloured background (gold or navy), a bold product headline, one line of detail, a CTA link, and circular installation photos on the right side. Slides confirmed from old site:
   - Slide 1 (gold bg): "Check Out Our Brand New Line Of Heavy Duty Sliding Barn Door Kits! With Single, Double, Bi-Passing And Round-The-Corner Options available! Click Here To Find Out More..."
   - Slide 2 (navy bg): "Brand New Internal Sliding Door Kits! With Options Available For Timber, Steel And Glass Doors! Click Here To See More..."
   - Slide 3 (gold bg): "Made-To-Measure Barn Doors — Click Here To See The Return Of Our Bespoke Handmade Doors"
   - Slide 4 (photo bg): "George Clarke's Old House New Home — We're So Chuffed! Our Products were featured on TV! Series 8, Episode 3"
   - Slide 5 (navy bg): "Pocket Door Kits — The Ultimate Space Saver!"
   Each slide is a clickable CTA. The current new site carousel (silent photos + fixed headline) does NOT do this and must be rebuilt.
4. **Hero headline position** — currently bottom left. Needs to be properly positioned.
5. **Nav bar height** — increase so logo has room to breathe and fill it properly.

### WHAT IS WORKING — DO NOT TOUCH
- Hero gradient removed — installation photos visible
- Channel 4 line removed from hero
- One white nav bar with | separators and navy links
- Trust strip — navy background, gold text, one line
- Houzz widget + 6 category cards side by side below trust strip
- Footer with phone number
- White background throughout below fold

### DESIGN DIRECTION — LOCKED
Terry designed the old site himself. £250k revenue 2017 on 5% Google visibility. His sales instincts built that. The new site takes those instincts and puts them where Google and AI assistants can see them. NOT a copy of the old site. NOT Claude's template. Terry's sales logic + 2026 technology.

### PROCESS — LOCKED
- One page at a time
- Code snippet changes only — never full rebuilds
- Claude Code makes change, Terry sees it live, approves or corrects
- Discuss BEFORE making any code changes — never surprise Terry with design decisions
- Homepage is NOT signed off. Still in progress.

### TOKEN WASTE — CRITICAL
Claude Code is reading files every time and syncing two folders. The nested doormate-next folder MUST be deleted. Every prompt must be specific — file name, exact change, nothing else. No reading unnecessary files.

---

## SESSION SUMMARY — 1 JUNE 2026 — READ THIS FIRST — MOST RECENT

### HOMEPAGE TYPOGRAPHY RULES — LOCKED FOREVER
- No ALL CAPS anywhere on the site. Ever. British grammar. DoorMate is a British company.
- Section headlines: navy #272446, bold, large, centred, Title Case (first letter of every word capitalised), single line — AGREED 24 JUNE 2026
- Body text: navy #272446, fontWeight:'600', centred, full width — no maxWidth constraints
- This is the template. Every page follows it. No exceptions.

### WHO WE ARE SECTION — LOCKED
- Layout: Houzz widget left, text column right — DO NOT TOUCH
- Headline: "Real UK Manufacturers. Real Systems Delivered Direct To You." — LOCKED
- Body copy: Terry's exact words — never paraphrase, never change
- Gold line: "We Are Manufacturers, Suppliers & Installers of Quality Door Products"
- Product links: Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits — gold dividers, each links to landing page
- Body text fontWeight:'600' — LOCKED

### SYSTEMS SECTION — LOCKED 1 JUNE 2026
Headline: "We offer complete sliding door solutions, for real homes, real doors and real walls"
Body copy (ChatGPT — Terry approved — DO NOT CHANGE):
"Choosing a sliding door system shouldn't be difficult. That's why we've made it easy to find the right solution for your project. By organising our systems around real-world applications, we've already done the thinking for you. Simply choose the category that best suits your project and take the next step with confidence."
4 cards, 2x2 grid, gold product name top, white solution line below:
- Pocket Door Systems | For The Ultimate Space Saver → /pocket-door-kits
- Sliding Barn Door Systems | For Traditional Style And Charm → /barn-door-hardware
- Internal Sliding Systems | For Modern Living → /internal-sliding-kits
- External Sliding Systems | Built To Last. Whatever The Weather. → /external-sliding-kits
Images are placeholders — replace all images in one pass when Terry has proper installation photos.

### BRANDS WE WORK WITH — SCROLLING BANNER
9 brands: Barrier Components, Coburn Systems, Eclisse, Rocket, JB Kind, FH Brundle, Charles Day, Titus UK, RT Bearings
Logos downloaded to /public/img/brands/ — sizes inconsistent, Terry to prep to same canvas size when time allows
Section live but logo sizing not perfect — revisit when logos are ready

### KEY DECISIONS — 1 JUNE 2026
- DoorMate's USP: complete systems, not components. Every competitor (Sliding Doorstuff, SD Hardware, IronmongeryDirect) sells components — customers have to figure out what goes with what. DoorMate sells complete ready-to-hang systems for every application. This is the market opportunity.
- The systems section messaging comes from Terry researching competitors — it took 5+ hours to land. NEVER change this copy without Terry's explicit approval.
- ChatGPT wrote the body copy for the systems section after Terry explained the brief. It works. Keep it.
- No guessing. No assuming. Rule 1 applies especially when Claude doesn't recognise something on screen — say so, don't dress up a guess as analysis.
- page.jsx IS the homepage template. Every section on this page sets the standard for every other page on the site.

### HOMEPAGE — SECTIONS COMPLETE AS OF 1 JUNE 2026
✅ Nav bar
✅ Tagline strip
✅ Hero carousel
✅ Gold trust strip (4 review pills)
✅ 6 category cards
✅ Who We Are (Houzz + text)
✅ Brands We Work With (scrolling banner — logos need replacing)
✅ Systems section (4 cards — images need replacing)
⬜ Channel 4 strip — next session
⬜ Social media strip
⬜ Footer

### NEXT SESSION — START HERE
1. Channel 4 strip — review and confirm or fix
2. Social media strip — review
3. Footer — review and confirm complete
4. Homepage signed off — then category landing pages (Part 17)

## SESSION SUMMARY — 27 MAY 2026 — READ THIS FIRST — MOST RECENT

### TRUST STRIP — REBUILT AND LOCKED 27 MAY 2026
- Gold band (#efb627) full width background
- Four white pill boxes (borderRadius 999px) containing: DoorMate logo + "Trading Since 2009" | Google 4.8 ★★★★★ | Trustpilot 4.5 ★★★★½ | Houzz 5.0 ★★★★★
- Padding matches navy tagline strip above — 10px top and bottom
- DO NOT CHANGE

### WHO WE ARE SECTION — LAYOUT LOCKED, BODY COPY OUTSTANDING
Layout confirmed working and balanced. DO NOT touch layout, sizing or structure.

**LOCKED:**
- Houzz widget LEFT (300px), text column RIGHT
- Gold eyebrow label: "WHY DOORMATE?" — small, gold, uppercase
- Headline: "Real UK Manufacturers. Real Systems Delivered Direct To You." — large, navy, bold, single line, centred
- All text centred
- Gold line: "We Are Manufacturers, Suppliers & Installers of Quality Door Products"
- Navy product line: "Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits"
- grid alignItems:'start', text column minHeight:'435px' with flexDirection column justifyContent center

**BODY COPY — ONE OUTSTANDING TASK NEXT SESSION:**
Terry's approved direction — word for word his intent:
DoorMate are based in Cardiff, South Wales — manufacturing and supplying sliding door systems since 2009. While our competitors are simply importing boxes of hardware, sat in warehouses with sales staff and warehouse workers loading the vans, we manufacture our own systems alongside handmade barn doors, mirror pocket doors and the widest range of pocket door kits, internal and external sliding systems. Every system we sell is backed by real industry knowledge, clear fitting guidance and direct support from the people who actually make them.

NOTE: The contrast is the point — competitors import/warehouse/shift. DoorMate manufacture. The words carry intent. Never paraphrase Terry's copy without his explicit approval. Every word he chooses has meaning and sales intent behind it.

### SESSION SUMMARY — 26 MAY 2026

**TRUST STRIP — REBUILT AND LOCKED**
- White background, navy border top and bottom
- Four items: DoorMate logo (36px) + "Trading Since 2009" | Google 4.8 ★★★★★ | Trustpilot 4.5 ★★★★½ | Houzz 5.0 ★★★★★
- Real platform logos in brand colours (Google multicolour G, Trustpilot green star, Houzz green house)
- Proper half-star SVG for Trustpilot — top half gold, bottom half empty
- All text same size and weight — 16px bold Libre Franklin
- Replaces old navy text strip entirely — SUPERSEDED 27 MAY, see above

**6 PRODUCT CARDS — DONE AND LOCKED**
- Houzz iframe card removed — clean 6 cards full width
- Card order: Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits | Shop
- Full page width, evenly spaced

**NAV/HERO OVERFLOW — FIXED**
- Now behaves correctly at all zoom levels ✅

### RULES ESTABLISHED THIS SESSION — NEVER BREAK
- **Send screenshots directly into Claude Code for visual problems** — description wastes time, images get it right first time
- **Commit title at end of every Claude Code prompt** — short, one line, Terry copies straight to GitHub Desktop
- **The red GitHub CLI warning is cosmetic** — Terry uses GitHub Desktop, not CLI, so it never affects the workflow
- **Never comment on individual hero carousel frames** — it is a scrolling carousel, individual frames are photos not bugs

### INTERNAL SLIDING KITS — PRODUCT NAMES CONFIRMED 26 MAY 2026
4 tiles confirmed: Timber Door Systems | Stainless Door Systems | Glass Door Systems | Minimalist Door Systems
Weights still to be confirmed before product pages built. Landing page tiles can proceed.

### NEXT SESSION PRIORITIES — IN ORDER
1. "Who We Are" section — redesign to match old site character: big bold heading, gold accent line, proper text size. Terry to send screenshot of old site version as reference.
2. Remove duplicate "Manufacturers" section below it — or decide to keep one version
3. Schema.org JSON-LD structured data — still missing, AISIO critical
4. llms.txt file at root
5. Category landing pages (Part 17)
6. Individual product pages with prices and BUY NOW buttons — where the money is

---

## SESSION SUMMARY — 22 MAY 2026 — READ THIS FIRST — MOST RECENT

### WORKFLOW — LOCKED AND CONFIRMED
- **Cowork** — strategy, bible, design decisions, writes Claude Code prompts. Does NOT touch code.
- **Claude Code** — executes changes in NEW WEBSITE folder. Always point at `C:\Users\Terry\Dropbox\PC\Desktop\NEW WEBSITE`
- **Claude Code session** — always use the most recent session. If it shows wrong folder at bottom, click the folder name and reselect NEW WEBSITE.
- **GitHub Desktop** — Commit (any short summary title required) → Push origin. That's it every time.
- **Vercel** — wait 2 MINUTES after Push origin before refreshing. Hard refresh = Ctrl + Shift + R.
- **Always discuss design decisions in Cowork BEFORE pasting anything into Claude Code.**

### CLEANUP DONE
- Doormate-website folder deleted from Desktop ✅
- website2.html deleted from Desktop ✅
- Dead Doormate-website Claude Code sessions deleted ✅
- Dead Vercel project doormate-website — STILL TO DELETE (low priority)
- Dead GitHub repo doormate-website — STILL TO DELETE (low priority)

### HOMEPAGE — STATE AS OF END OF SESSION 22 MAY 2026

**NAV BAR — LOCKED — DO NOT TOUCH**
- White background — logo must have white background (Union Flag)
- Logo: `doormate-logo-cropped.png` (cropped version, padding removed) — fills full bar height
- Bar height: 120px | Logo height: 112px
- Links: 16px bold Libre Franklin, navy #272446, gold #efb627 separators
- All nav links visible including Shop — no cut-off
- HOME dropdown: As Seen On TV | News | About Us | Contact | Trade | Become A Partner | Fitters Wanted | Dropshipping
- Flat links: Doors | Barn Door Hardware | Pocket Door Kits | Internal Sliding Door Kits | External Sliding Door Kits | Gallery | Shop

**TAGLINE STRIP — LOCKED — DO NOT TOUCH**
- Navy #272446 background
- Text: "Sliding Systems — Built for real doors, real walls and real homes since 2009."
- 16px bold white Libre Franklin
- Subline removed from hero and moved here

**HERO — WORKING — DO NOT TOUCH (images to be replaced)**
- Silent auto-scrolling carousel (HeroCarousel.jsx)
- 5 images cycling every 5 seconds, 1s crossfade
- Headline fixed: "The UK's Leading Sliding Door Specialists"
- No subline in hero — moved to tagline strip
- Hero images need replacing — wrong aspect ratios, white space — see TODO below

**TRUST STRIP — LOCKED — DO NOT TOUCH**
- Navy #272446 background, gold #efb627 text and separators
- "Trading Since 2009 | As Seen On Channel 4 | UK Sliding Door Specialists | Handmade In Cardiff"
- 16px bold Libre Franklin — matches nav and tagline strip exactly
- Separators: standalone gold | between items, space-between layout

**FONT RULE — LOCKED**
- All bars (nav, tagline, trust strip) = 16px bold Libre Franklin
- Libre Franklin is a Google web font — guaranteed on every device

**6 PRODUCT CARDS — IN PROGRESS**
- Single row of 7 columns (col 1 = reviews card, cols 2-7 = products)
- Card names sit ABOVE each card in bold navy 18px Libre Franklin
- Cards have navy border #272446, white background, image fills card
- Card names: Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits | Shop
- NOTE: Cards say "Barn Door Kits" — nav still says "Barn Door Hardware" — this is intentional
- All 6 product cards visible above the fold at 100% zoom ✅

**REVIEWS CARD — NOT YET BUILT**
- To replace current Houzz iframe card
- Design agreed: 3 rows — Google | Houzz | Trustpilot — each with logo, stars, click opens popup
- Popup shows reviews without taking customer away from page
- Terry to confirm star ratings on each platform before building
- Houzz may not support popup embed — may open new tab instead

### STRIPE / CHECKOUT — DECIDED
- Stripe to be used for checkout (not PayPal only)
- Payment options: Card, PayPal, Apple Pay, Google Pay, Klarna/Clearpay
- Stripe sandbox/test mode first — Terry already has Stripe account from GDN project
- Basket icon added to nav once Stripe is wired in — NOT before
- Dedicated session needed for Stripe setup

### TODO — NEXT SESSION PRIORITIES
1. Reviews card — 3 platform rows with popup (confirm star ratings first)
2. Hero images — select, crop to same ratio, replace current images
3. Check footer is complete
4. Schema.org JSON-LD structured data (AISIO critical — still missing)
5. llms.txt file at root
6. Category landing pages (Part 17)
7. Individual product pages
8. Stripe setup — dedicated session
9. Delete dead Vercel doormate-website project
10. Delete dead GitHub doormate-website repo

---

## SESSION SUMMARY — 21 MAY 2026 (AFTERNOON) — READ THIS FIRST

### THE MOST IMPORTANT THING AGREED TODAY — NEVER FORGET
Terry built the old site (barn-doors.co.uk) himself. Every design decision, every sales technique, every layout choice — his. Not a designer. Not an agency. A 30-year industrial door salesman who spotted the barn door trend in 2012/13, jumped on it, manufactured when nobody else bothered, then spotted the trend dying and diversified into full sliding door systems. The old site did £250,000 in 2017 with Google seeing only 5% of it. That is the proof. The new site's ONLY job is to take Terry's sales instincts and put them somewhere Google can see them. NOT to reinvent. NOT to modernise for the sake of it. To execute Terry's vision with 2026 technology underneath.

### THE WORKFLOW — LOCKED — NEVER CHANGE
- **Cowork** — memory, bible, design conversations, writes Claude Code prompts. Does NOT touch code directly.
- **Claude Code** — executes code changes in the NEW WEBSITE folder on Terry's Desktop. Has full PC access.
- **GitHub Desktop** — syncs the NEW WEBSITE folder to GitHub automatically. Terry does NOT type git commands. Same process as the GDN project.
- **Vercel** — deploys automatically when GitHub Desktop syncs.
- Terry NEVER needs to open GitHub in a browser. NEVER types git commands. GitHub Desktop does it.

### THE BUILD PROCESS — LOCKED
- Work ONE PAGE at a time
- Make CODE SNIPPET changes — not full rebuilds
- Claude Code makes the change, Terry sees it live on Vercel, approves or corrects
- NEVER ask Claude Code to rebuild whole sections — specific snippets only

### WEBSITE2.HTML IS DEAD — REMOVE FROM ALL FUTURE BRIEFS
website2.html was an HTML site — same structural problems as WebFactory. It is NOT the design reference. Remove any mention of it from Claude Code briefs. It does not exist as a reference.

### THE HOMEPAGE VISUAL DIRECTION — LOCKED TODAY
The current build (what's live on Vercel right now) has a solid foundation but is NOT signed off. Still in progress. Do not treat it as done.

**What's working and must NOT be changed:**
- Houzz widget + 6 category cards side by side — good, keep it
- Trust strip — keep it
- Overall white background below the fold — keep it
- Footer structure — keep it, phone number is there

**What is WRONG and must be fixed — in this order:**
1. **Logo** — `UJ Logo Final.png` is the correct transparent PNG logo. Located at `C:\Users\Terry\My Drive (terryburnett98@gmail.com)\Work Folders\1Barn door\Logo2026\UJ Logo Final.png`. Copy to `public\img\doormate-logo.png`. Update Nav.jsx and Footer.jsx to use `doormate-logo.png` not `doormate-logo.jpg`.
2. **Header** — White header bar above the gold/navy nav. Logo sits in white space, no box, no background clash. Then gold nav bar below it.
3. **Nav links** — Must be GOLD not white. Navy background, gold links. Brand colours.
4. **Hero** — Remove the dark gradient overlay entirely. The Augusta installation photo (three positions — closed, half open, fully open) is brilliant and we are hiding it. Show it. Also remove the "AS SEEN ON GEORGE CLARKE'S OLD HOUSE NEW HOME — CHANNEL 4" line from the hero — it's duplicated in the trust strip.
5. **Hero — silent auto-scrolling** — Hero cycles through multiple real installation images silently and automatically. Smooth transitions. Different products each slide. Headline stays fixed. Images change underneath.

### TERRY'S BUSINESS CONTEXT — BAKE THIS IN PERMANENTLY
- £250k revenue in 2017 with Google seeing 5% of the site
- Survived 10 years on a site Google mostly couldn't see — because Terry's sales instincts and product knowledge carried it
- WebFactory was not honest about the SEO problems — Terry didn't know until 2026
- The new site is not the rescue plan — Terry is the rescue plan. The new site gives him the visibility he should have had 10 years ago
- Barn door hardware: spotted the trend 2012/13, manufactured when nobody else did, diversified when trend peaked. Now just one part of a full sliding door systems range.
- No competitor can match the combination: manufacturer credibility + full sliding systems range + 30 years industry knowledge + Terry's sales ability

### NEXT SESSION STARTS HERE
1. Logo fix first — Claude Code prompt ready, paste it in, see it live
2. White header bar + gold nav links — one snippet
3. Hero gradient removed — one snippet  
4. Hero auto-scroll — one snippet
5. Homepage is signed off only when Terry says so — not before

---

## END OF MASTER BIBLE v2 — 19 MAY 2026 | Updated 21 MAY 2026 (twice)

---

## SESSION SUMMARY — 3 JUNE 2026 — READ THIS FIRST — MOST RECENT

### WORKFLOW — UPDATED AND LOCKED 3 JUNE 2026
- **Cowork** — strategy, bible, design decisions, section-by-section discussion. Writes Claude Code briefs only after full discussion and agreement.
- **Claude Code** — executes changes directly. Now commits and pushes to GitHub automatically — Terry does NOT need GitHub Desktop or any git commands.
- **GitHub Desktop** — no longer needed for daily workflow. Keep installed as backup only.
- **Vercel** — deploys automatically when Claude Code pushes. Wait 2 minutes then Ctrl+Shift+R on Vercel URL.
- **Chrome extension** — use to view live site. Works on barn-doors.co.uk. For Vercel URL: turn off Deployment Protection in Vercel → Project Settings → Deployment Protection.
- **DISCUSS BEFORE CODING** — every section must be agreed in Cowork before a single brief goes to Claude Code. No exceptions.
- **ONE SECTION AT A TIME** — agree it, build it, see it live, approve it, move to next. Never batch multiple sections.

### HEADER — AGREED AND LOCKED 3 JUNE 2026
Two-bar header confirmed:
- **Bar 1 (white):** Social icons left (real brand colours — Facebook #1877F2, Instagram #E1306C, LinkedIn #0A66C2, YouTube #FF0000, Pinterest #E60023, Houzz #73BA37) | Logo centred | Phone + Email + Search + Basket right. Three-column grid layout. Min-height 110px.
- **Bar 2 (gold #efb627):** Navy text (#272446), bold 16px Libre Franklin, white dividers between links. Links fill the bar with proper padding. HOME dropdown preserved.
- Nav links confirmed: HOME | Doors | Barn Door Hardware | Pocket Door Kits | Internal Sliding Door Kits | External Sliding Door Kits | Gallery | Shop
- Log In — DROP until account system is built
- Shop By Brand — DROP from nav
- Nav order confirmed as is — already reflects 2026 revenue priorities

### HERO CAROUSEL — CONFIRMED 3 JUNE 2026
- The carousel is working and cycling. Never assume it is static from a screenshot.
- Fixed headline "The UK's Leading Sliding Door Specialists" stays — works on photo-based slides. Will be reviewed once real images are added.
- Navy tagline strip — removed.
- Real images replace all placeholders in one pass once layout is signed off. Do not touch images until then.

### TRUST STRIP — LOCKED
Gold background, four white pill boxes: Trading Since 2009 | Google 4.8★ | Trustpilot 4.5★ | Houzz 5.0★. Frames the hero — gold nav bar above, gold trust strip below. Do not change.

### SYSTEMS SECTION — KEY DECISIONS 3 JUNE 2026
**The purpose of this section is reassurance, not product education.**
The customer has already seen who DoorMate is, what they sell, and why to trust them above the fold. This section must not repeat that. Its job is to communicate: "You don't need to understand sliding door systems. DoorMate has already done the thinking for you."

**Core message — locked:** "DoorMate organises complexity so the customer doesn't have to."

**What was wrong with the current version:**
- Full-width headline + full-width body copy + 2x2 card grid = cards dominate, reassurance copy gets skipped
- Felt like another product category section, not a reassurance section
- Did not feel like a natural extension of the existing homepage design language

**Layout direction agreed:**
- Left column: reassurance headline + approved body copy. Visually dominant. Breathing room.
- Right column: four system cards stacked vertically — each showing system name, application line, and sub-options as tags
- This puts reassurance first (left eye lands there first), cards second (proof of the promise)

**Cards — approved content, do not change:**
- Pocket Door Systems | The Ultimate Space Saver → sub-options: Single door, Double door
- Internal Sliding Systems | For Modern Living → sub-options: Timber, Glass, Steel, Minimal
- Sliding Barn Door Systems | For Traditional Style And Charm → sub-options: Single, Bi-parting, Bi-passing, Low headroom
- External Sliding Systems | Built To Last. Whatever The Weather. → sub-options: DM-75, DM-100, DM-150, DM-200

**Visual approach — direction agreed, not yet implemented:**
Visual system graphics / schematic icons may communicate organised thinking more effectively than lifestyle photography for this section. Lifestyle imagery shows "does it look good?" — schematic graphics show "DoorMate has already figured out the right system for your situation." Concept validated via mockup 3 June. Final graphics to be produced before implementation.

### DESIGN PRINCIPLES — LOCKED 3 JUNE 2026 — NEVER BREAK
These apply to every section on the new site, every page, every Claude Code brief:

1. **Consistency over novelty** — every section must feel like DoorMate. New sections evolve the existing design language, never reinvent it.
2. **Every section must feel like DoorMate** — navy, gold, white. Libre Franklin. The brand colours and typography are not optional.
3. **Organised thinking is a core DoorMate message** — DoorMate organises complexity so the customer doesn't have to. Every section should reinforce this.
4. **The homepage is a connected story, not a collection of independent sections** — each section must flow naturally from the one above it. No section should feel like it came from a different website.
5. **New sections must evolve the existing design language** — not reinvent it. If a new section looks like it came from a different site, it is wrong.
6. **Reassurance before product** — the customer must feel safe before they are asked to choose. Trust first, products second.

### NEXT SESSION — START HERE 4 JUNE 2026
1. Systems section — implement left/right layout with schematic card graphics (mockup agreed 3 June)
2. Hero carousel — evaluate current slides against old site slides, agree new slide set, brief Claude Code
3. Continue homepage section by section downward from systems section
4. Schema.org JSON-LD — still missing, AISEO critical — must go into layout.jsx this session
5. llms.txt at root — AI assistant citation — 20 minutes, high value

## SESSION SUMMARY — 2 JUNE 2026 — READ THIS FIRST

### THE MOST IMPORTANT THING THAT HAPPENED TODAY
The Claude in Chrome extension was installed for the first time. This means Claude can now see both sites live — barn-doors.co.uk and the new Vercel site — without relying on screenshots. This should have happened on day one. It changes everything going forward.

### WHAT WAS ACCOMPLISHED TODAY
1. Claude in Chrome extension installed and connected
2. Full audit of barn-doors.co.uk completed — 47 pages, saved as old-site-audit.md in NEW WEBSITE folder
3. Gainesville HTML price corrected on barn-doors.co.uk (was showing £150, now correctly shows £185 to match WebFactory product price)

### THE KEY DECISION MADE TODAY — NEVER LOSE THIS
The bible was written before the old site was properly audited. The audit changes the plan. Terry's instruction — twice today, clearly — is:

**Compare the bible and the audit. Rewrite the plan based on what actually worked on the old site over 10 years, what didn't work, and what today's technology can improve. That new combined plan is what we build from.**

This plan is to be written as a document and presented to Terry for approval BEFORE any code is touched. The bible is NOT updated until Terry approves the new plan.

### WHAT THE AUDIT CONFIRMED THAT THE BIBLE MISSED
- The hero carousel on the old site was doing a sales job — not just showing pretty images. It told customers what DoorMate sells, what it costs, and why to trust them, all in one rotating space above the fold. The Channel 4 slide was one of those panels. This approach works and must be carried forward.
- The accessories shop (~50 products across pull handles, components, locks, brackets, shelf brackets) is buried on the old site and completely missing from the new site plan. Pure margin revenue being lost.
- The FAQ content (20 barn door questions, 11 pocket door questions) is the content Google ranks and AI assistants cite. Completely absent from the new site.
- The sizing formulas with worked examples (Gainesville, Brooklyn) are the #1 conversion tool on the old site — remove customer fear of ordering the wrong thing. Not on the new site yet.
- The 5-step installation enquiry wizard is a qualified lead generator that barely anyone knows exists.
- Cross-sell between categories is completely absent on both old and new site — a door buyer never sees a pocket door kit recommendation.
- POPULAR and NEW badges on shop products are conversion tools — must carry to new site.
- The 12-year Rocket warranty is the strongest warranty claim in the category — not prominent enough anywhere.

### WHAT IS WRONG WITH THE NEW SITE RIGHT NOW
- Homepage is structurally sound but the hero needs the Channel 4 slide added
- Category pages don't exist yet
- Product pages don't exist yet — no prices, no BUY NOW, no sizing formulas, no FAQs
- No Schema.org structured data anywhere
- No accessories category
- No cross-sell blocks
- Social media links in footer point nowhere

### HOMEPAGE — CURRENT STATE AS OF 2 JUNE 2026
The homepage above the fold is working and correct:
- Hero carousel — scrolling installation images, fixed headline "The UK's Leading Sliding Door Specialists" ✅
- Navy tagline strip — "Sliding Systems — Built for real doors, real walls and real homes since 2009." ✅
- Gold trust strip — Trading Since 2009 | Google 4.8 | Trustpilot 4.5 | Houzz 5.0 ✅
- 6 category cards — Doors | Pocket Door Kits | Barn Door Kits | Internal Kits | External Kits | Shop ✅
- Who We Are section — Houzz widget left, manufacturer copy right ✅
- Brands We Work With — scrolling logo banner ✅
- Systems section — 4 cards ✅
- Social media strip — present but links not connected to real accounts
- Footer — present, phone number correct

OUTSTANDING ON HOMEPAGE:
1. Channel 4 slide — to be added to hero carousel (agreed today)
2. Social media links — need real URLs connected
3. Footer — WhatsApp number and full address to be added

### NEXT SESSION — START HERE
1. Read old-site-audit.md and CLAUDE.md
2. Write the new combined plan (bible + audit) as a document for Terry's approval
3. Once Terry approves — update the bible and begin building to the new plan
4. First code change after plan approval: add Channel 4 slide to hero carousel

### TERRY'S FRUSTRATION — BAKE THIS IN PERMANENTLY
Terry has been working on this project for 4 months. Every session has started something and not finished it. The Chrome extension should have been suggested on day one. The old site audit should have happened before a single line of code was written. Claude keeps losing the thread, asking questions Terry shouldn't have to answer, and treating each session as if it's the first one. This is Terry's family's livelihood. Every wasted hour costs money the business doesn't have. Claude must lead. Terry approves. Never the other way around.

---

## SESSION SUMMARY — 15 JUNE 2026

### RULE ADDED THIS SESSION — NEVER BREAK
**STOP means STOP. Immediately. No more widgets. No more attempts. Wait for Terry's direction.**
Claude ignored STOP commands multiple times today and kept building. That is unacceptable. Terry should never have to say STOP more than once.

### WHAT WAS WORKED ON
The Systems section right column — replacing the current 2x2 photo card grid with a typographic composition showing DoorMate's depth of expertise. The concept: words running both VERTICAL and HORIZONTAL, interlocking and crossing through each other. Dense. Like a word cloud, but composed — not random.

### WHAT WAS AGREED — CONCEPT LOCKED
Terry shared a reference image: a Technology-themed word cloud where large words run both vertically and horizontally, physically crossing through each other. This IS the design direction for the Systems section right column. Three tiers:
- Large structural words (e.g. "Pocket doors", "Barn door hardware", "External sliding") — horizontal anchors
- Medium words — vertical, crossing THROUGH the horizontal anchors
- Small specialist terms — dense fill, 60+ terms, navy and gold only

The visual principle: the composition IS the credibility message. Volume + organisation = "these people have a solution for everything." NOT navigation. NOT a product list. NOT a decision tree.

### WHAT WAS NOT ACHIEVED
The typographic composition was NOT built successfully in any widget attempt. Every attempt either:
- Produced horizontal lists (terms arranged in rows, no genuine crossing)
- Failed to render vertical words visibly crossing through horizontal words

Root causes:
1. CSS `writing-mode:vertical-rl` in the Cowork widget may not render as expected
2. Absolute positioning with estimated character widths is unreliable
3. Canvas approach was started but not verified on Terry's screen before STOP was called
4. Too many attempts without pausing to verify what Terry was actually seeing

### CURRENT STATE OF SYSTEMS SECTION IN page.jsx
The Systems section in the live build still has the old 2x2 photo card grid. The typographic composition has NOT been implemented. Do NOT touch the Systems section until the approach is re-agreed next session.

### PAGE.JSX VIOLATIONS — MUST FIX NEXT SESSION (identified but not fixed today)
- Line 129: `textTransform:'uppercase'` on WHO WE ARE h2 — ALL CAPS violation — REMOVE
- Line 159: `color:'#999'` on "Brands We Work With" label — grey banned — CHANGE TO NAVY
- Line 230: `color:'#999'` on "FEATURED ON" label — grey banned — CHANGE TO NAVY
- Line 227: Channel 4 section `background:'#f7f7f7'` — grey not DoorMate — CHANGE TO WHITE

### NEXT SESSION — START HERE IN THIS ORDER
1. Fix the four page.jsx violations above — small, specific, one Claude Code brief
2. Decide approach for Systems section right column — discuss with Terry BEFORE touching any code
   Option A: Try the canvas/typographic composition again with proper verification steps
   Option B: Agree a different visual approach entirely and move on
3. Sign off homepage — it has been "almost done" for weeks
4. Category landing pages (Part 17) — not yet built
5. Schema.org JSON-LD — AISIO critical — still missing from entire site
6. llms.txt at root — still missing

### TERRY'S SHORT ROUTE PRINCIPLE — TO BE ADDED AS A PERMANENT SECTION
Terry shared his core sales philosophy in this session. It has not yet been formally written into the Bible as its own section. Next session: add it as Part 26. It informs the Systems section concept and the chatbot behaviour. Key point: DoorMate organises complexity so the customer doesn't have to. The section is not a decision tree — it is proof that the thinking has already been done.

---

## SESSION SUMMARY — 23 JUNE 2026 — READ THIS FIRST — MOST RECENT

### THE MOST IMPORTANT THING — NEVER LOSE THIS
The Systems section word cloud is NOT decoration. It is the emotional sales mechanism. The concept:
Customer lands → sees a wall of overwhelming sliding door jargon → feels the complexity they were dreading → reads DoorMate's message over the top → feels instant relief. That IS the sell. Without the overwhelm, the message means nothing. Every Claude that works on this project must understand this before touching the section.

### CHANNEL 4 SECTION — PERMANENT NOTE — NEVER RAISE AGAIN
Terry says every single session: ignore the Channel 4 section, it may be removed. It has never been recorded. Recording it now. DO NOT raise the Channel 4 section fixes as a task. It may be deleted entirely. Leave it alone until Terry raises it.

### THE WORD CLOUD SECTION — FULL HISTORY — DO NOT REPEAT ANY OF THESE

**What was tried and failed:**
1. **wordclouds.com** — tried early in the project. Failed. Reason not recorded (Terry's instruction — record this). Do not suggest again.
2. **wordart.com** — tried. Failed. Reason not recorded. Do not suggest again.
3. **Chat widget word cloud attempts (23 June)** — approximately 15+ attempts in the Cowork chat widget. All failed for one or more of these reasons:
   - WordCloud2.js library produces oval/cloud shape, not rectangular
   - Custom canvas spiral placement left gaps in corners
   - Continuous horizontal text flow looked like wallpaper, not a word cloud
   - Colours kept coming out as one tone (all blues, all greys)
   - Fonts appeared similar despite different families specified
   - White fade/vignette behind message text produced a "big white blob"
   - Line-by-line fade technique worked for heading but body text remained unreadable
4. **The closest version achieved (23 June):** Continuous rows of washed-out grey text, multiple fonts and sizes, navy message text over the top. Terry said "maybe this is the solution" then "it's a 10th layer compromise." It is currently in page.jsx as the Systems section background.

**What has NOT been tried:**
- D3.js word cloud layout built directly into page.jsx via Claude Code. This is the one remaining option that uses a proper layout engine. Has not been attempted. May work.

**Current state of Systems section in page.jsx:**
Rows of grey washed-out text as background. Approved message over the top. Terry considers this a compromise but it is there. Do not remove or change without Terry's explicit approval.

### HOMEPAGE — HONEST STATE — 23 JUNE 2026
Compared old site (barn-doors.co.uk) to new site (Vercel) via Chrome extension today. Honest assessment:
- New site nav and trust strip are BETTER than old site
- New site hero is WEAKER — text lost bottom left of dark photo, not impactful
- Old site hero has circular installation photos, clear message, reviews visible immediately — it sells
- New site has NO product pages — no prices, no BUY NOW buttons anywhere
- Every homepage section is a compromise that was rushed and never finished
- Terry's diagnosis: every section was rushed to "good enough" then abandoned. None are what he wanted.
- The pattern: Section 1 rushed compromise → Section 2 rushed compromise → etc. Must stop.
- Rule going forward: FINISH ONE SECTION COMPLETELY before moving to the next. No exceptions.

### WHAT TERRY NEEDS NEXT SESSION
1. Decide: D3 word cloud in Claude Code — yes or no. If yes, one attempt. If it fails, section stays as current compromise.
2. If word cloud resolved — go back to Section 1 (hero) and finish it properly.
3. Then Section 2. Then Section 3. One at a time. Finished. Not rushed.
4. Product pages are the revenue. Homepage must be finished first because customers need to be enticed in.

### RULES ADDED THIS SESSION
- NEVER suggest wordclouds.com or wordart.com — both tried and failed
- NEVER update the bible mid-session — update at end of session only
- FINISH ONE SECTION BEFORE MOVING TO THE NEXT — this is now a hard rule
- The homepage is NOT done. Do not treat any section as signed off unless Terry explicitly says so.
- The word cloud concept is THE emotional core of the Systems section — never replace it with plain copy

---

## SESSION SUMMARY — 20 JUNE 2026

### WHAT THIS SESSION WAS
Continued the word cloud work started 15 June. The Systems section right column background is a word cloud of sliding door jargon — representing the confusion customers face on competitor sites. DoorMate's overlay message is the relief: "We've already done the thinking."

### WHAT WAS AGREED — LOCKED
- Terry will build the word cloud himself in Microsoft Paint
- Claude supplies a word sheet image: all words horizontal, multiple sizes, genuinely different font CATEGORIES (not variations of the same family), agreed colour palette
- Colour palette: #111111, #1a3a5f, #333333, #2869a8, #555555, #4a8fd4, #777777, #88aacc
- Font categories required: heavy display, script/handwriting, slab serif, condensed, classic serif

### TWO PAGE.JSX FIXES COMPLETED THIS SESSION
- Line 129: Removed `textTransform:'uppercase'` from Who We Are h2 — ALL CAPS violation fixed
- Line 159: Changed `color:'#999'` to `color:'#272446'` on Brands We Work With label — grey banned, now navy
- Committed to GitHub. Still outstanding (NOT yet fixed):
  - Line 227: `background:'#f7f7f7'` → white (Channel 4 section)
  - Line 230: `color:'#999'` on "FEATURED ON" label → navy

### THE WORD LIST — STATE AT END OF SESSION
Two lists exist. Terry to review, remove unwanted terms, then confirm.

**List 1 — Original verified terms** saved to: `C:\Users\Terry\AppData\Roaming\Claude\local-agent-mode-sessions\...\outputs\wordcloud_terms_v1.txt`

System Types: Bi-Parting Door Systems | Bi-Passing Door Systems | Top Hung Systems | Bottom Rolling Systems | Telescopic Door Systems | Low Headroom Kits | Self Closing Systems | Soft Closing Systems | Simultaneous Action Systems | Round the Corner Systems | Glass Door Systems | Fire Rated Systems

Components: Wheel Hangers | Adjustable Hangers | End Hangers | Door Hangers | Bottom Guides | Bottom Rollers | Bottom Channel | Top Channel | Floor Guides | Floor Channel | Roller Floor Guide | Concealed Floor Guide | Cupped Floor Guide | Galvanised Track | Carbon Steel Track | Aluminium Track | Stainless Steel Track | Wall Fix Brackets | Soffit Fix Brackets | Top Fix Brackets | Side Fix Brackets | Jointing Brackets | Soft Close Mechanisms | Soft Close Kits | Track Stop | Anti-Jump Bolts | Anti-Jump Cam | Nylon Rollers | Glass Clamp Kit | Glass Profile | Guide Channel | Pocket Entrance Guide | Dovetail Corrugation | Fire Rated Jamb Kit | Double Door Jointing Kit | Glass Door Fitting Kit | Wrap Around Kit | Flush Pull | Finger Pull | Bow Handle | Fascia | Top Mounted Hardware | Fixed Panel

**List 2 — 100 new terms** found this session from Eclisse, IronmongeryDirect and PC Henderson product pages:
Single Pocket Door Kits, Double Pocket Door Kits, Fire Rated Pocket Door Kits, Glass Pocket Door Systems, Timber Door Kits, Bi-Fold Door Kits, Patio Door Kits, Wiring-Ready Systems, Acoustic Systems, Hoist Systems, Curved Pocket Door Systems, Half Pocket Half Hinged Systems, Lift and Slide Systems, Top Mounted Systems, Face Mounted Systems, Centre Fold Systems, End Fold Systems, Barn Strap Sliding Door Kits, Wardrobe Door Gear, Overhead Track Systems, Double Track Systems, Bi-Directional Soft-Close Mechanisms, Anti-Slam Devices, Self Closing Devices, Double Door Synchronisation Kits, Telescopic Synchronisation Kits, Co-Ordination Kits, Floor Springs, Door Closers, Overhead Closers, Privacy Sets with Bolt, Privacy Sets with Lock, Bathroom Lock Sets, Key Lock Sets, Privacy Lock Sets, Indicator Bolt Sets, 3 Lever Sliding Door Locks, 5 Lever Sliding Door Locks, Mortice Lock Sets, Flush Bolt Sets, Security Bolt Sets, Shoot Bolt Sets, Latch Bolt Sets, Door Edge Finger Pulls, Door Edge Pull Handles, Door Edge Thumb Pulls, Half Moon Flush Pull Handles, Square Flush Pull Handles, Round Flush Pull Handles, Pull Bar Handles, Privacy Handle Sets, Flush Handle Sets, Barn Strap Rails, Ceiling Fix Brackets, Ceiling Fix Track, Soffit Fix Track, Face Fix Brackets, Hanging Brackets, Wall Fixing Kits, Track End Caps, Extension Track Kits, Backplate Sets, Face Plate Sets, Strike Plates, Fixing Bolt Sets, Floor Socket Sets, Pelmet, Pelmet and Post Kits, Timber Frame Kits, Running Rollers, Dual Wheel Hangers, Heavy Duty Hangers, Load Bearing Trolleys, Trolley Assemblies, Top Pivot Sets, Bottom Pivot Sets, Pivot Hinges, Conversion Kits, Drop Down Seals, Brush Seals, Compression Seals, Intumescent Strips, Steel Frame Kits, Fire Door Closer Kits, Cavity Widening Kits, Telescopic Floor Guides, Door End Caps, Touch Latch, End Stops, Buffer Stops, Rubber Buffers, Magnetic Door Stops, Rail Joining Kits, Jointing Sleeves, Guide Packs, Spare Fittings Packs, Universal Fittings Packs, Flush Handles with Latch

### NEXT SESSION — START HERE IN THIS ORDER
1. Terry to send confirmed/trimmed word list
2. Claude builds word sheet image IN the Cowork chat (show_widget — visible inline, NOT a download) using genuinely different font categories
3. Fix page.jsx Lines 227 and 230 (Channel 4 section grey → white, label grey → navy)
4. Agree approach for Systems section right column — word cloud background + DoorMate overlay statement
5. Sign off the homepage — it has been in progress for weeks
6. Category landing pages (Part 17)
7. Schema.org JSON-LD — AISIO critical — still missing from entire site
8. llms.txt at root

---

## SESSION SUMMARY — 24 JUNE 2026 — READ THIS FIRST — MOST RECENT

### CRITICAL — WHAT WENT WRONG TODAY — NEVER REPEAT
This session broke Rule 1 twice:
1. Claude ran bash git commands on the NEW WEBSITE folder at the start of the session — broke the GitHub Desktop workflow, cost Terry 2.5 hours to fix. The workflow memory file (feedback_workflow.md) exists precisely to prevent this. It was ignored.
2. Claude told Terry the title case rule had been saved to CLAUDE.md. It had not been saved. Terry caught this later in the session. Rule 1 broken again.

These are not one-off mistakes. They are a pattern. Every Claude session must read the Bible AND the memory files before touching anything.

### WORKFLOW — RE-CONFIRMED AND LOCKED 24 JUNE 2026
1. Claude makes file changes directly in the NEW WEBSITE folder
2. Claude gives Terry a commit title (one short line)
3. Terry opens GitHub Desktop, types the title in the Summary box, clicks Commit
4. Terry clicks Push origin (big blue button — NOT the top bar)
5. NEVER use bash git commands on the NEW WEBSITE folder. Ever.

### WORD CLOUD — ABANDONED 24 JUNE 2026
The word cloud concept for the Systems section right column is DEAD. Abandoned after 4 days and 15+ attempts. Do not suggest it, do not reference it, do not attempt to revive it.

### SYSTEMS SECTION — NEW DIRECTION AGREED 24 JUNE 2026
New layout replacing the current 2x2 card grid:
- Left panel (62%): The message. Headlines + body copy broken into beats (see below)
- Right panel (38%): 4 image blocks stacked vertically — one per system, real installation photos, navy overlay, gold product name, white subtitle

Headlines (Title Case — both lines):
- Line 1 (navy): "We Offer Complete Sliding Door Solutions,"
- Line 2 (gold): "For Real Homes, Real Doors And Real Walls."

Body copy broken into beats — each line is a separate paragraph, not one block:
1. "Choosing a sliding door system shouldn't be difficult." — the hook
2. "That's why we've made it easy to find the right solution for your project." — what DoorMate did
3. "By organising our systems around real-world applications —" — the approach
4. "We've already done the thinking for you." — THE KILLER LINE — gold, large
5. "Simply choose the category that best suits your project and take the next step with confidence." — the action

4 image cards (stacked, not 2x2):
- Pocket Door Systems | For the ultimate space saver → /img/mirror-pocket-single.jpg
- Sliding Barn Door Systems | For traditional style and charm → /img/gainesville-system.jpg
- Internal Sliding Systems | For modern living → /img/dm-150.jpg
- External Sliding Systems | Built to last. Whatever the weather. → /img/external-kit.jpg

Card style: navy overlay rgba(39,36,70,0.5), gold product name, white subtitle — matches existing card style on site.

### TITLE CASE RULE — CONFIRMED AND SAVED 24 JUNE 2026
Section headlines: Title Case — first letter of every word capitalised.
This was agreed in this session and is now saved in the Foundations section of this Bible.
Check it is there before every Claude Code brief. Do not trust memory alone — verify in the file.

### SYSTEMS SECTION — BUILT 24 JUNE 2026
Layout: 55% left (headlines + copy beats) | 45% right (4 stacked image cards)
Headlines full width at top of left column. Copy beats spaced with space-between to fill image height.
Closer line agreed by Terry: "Simply choose your system. Let's get this project done!"
Images are placeholders — replace in one pass across the whole page when real photos are ready.
Section is signed off as good enough to move on — not perfect, images need replacing.

### CHANNEL 4 SECTION — REMOVED 24 JUNE 2026
Removed from homepage. To be added as a slide in the hero carousel — where it lived on the old site.

### FOOTER — FIXED 24 JUNE 2026
All ALL CAPS headings changed to Title Case: Products, Company, Contact, Phone, Email, Location, Hours.
Bottom bar fixed to single row (was wrapping onto two rows).

### HOMEPAGE — HONEST STATE 24 JUNE 2026
The homepage is NOT done. It is not the state of the art 2026 product-selling site that was the brief.
Critical problems still outstanding:
1. SCALING — the hero headline gets lost at 100% browser zoom. The old site scales correctly because it uses percentage/viewport-relative sizing throughout. The new site does not. This is the first fix next session.
2. Hero — still not selling the way the old site hero did. The old hero had text-led slides with product announcements and circular installation photos. The new hero is silent photos with a fixed headline.
3. No product pages — no prices, no BUY NOW buttons anywhere on the site. Nothing a customer can buy from.
4. No schema.org structured data — AISIO critical, still missing.
5. No chatbot wired in.
6. No accessories category.

### WHAT TERRY SPOTTED THAT CLAUDE MISSED
Terry compared the old site (barn-doors.co.uk) to the new site at 100% browser zoom and identified that the old site scales correctly — sections grow with zoom so the main message is never lost. Claude did not spot this. Terry had to point it out. This is a fundamental requirement, not an enhancement.

### NEXT SESSION — START HERE IN THIS ORDER
1. Fix homepage scaling — percentage/viewport-relative sizing throughout, no fixed pixel sizes that break at zoom
2. Fix hero — text-led slides matching old site approach, Channel 4 slide added
3. Only when homepage genuinely sells — move to product pages
4. First product page: Pocket Door Kits — price visible, BUY NOW above fold, trust signals, chatbot

---

## SESSION SUMMARY — 25 JUNE 2026 — READ THIS FIRST — MOST RECENT

### WHAT WAS DONE THIS SESSION

**Hero headline updated — LOCKED**
Changed from "The UK's Leading Sliding Door Specialists" to "The UK's Leading Sliding Door Systems Specialists" — Terry added "Systems." Committed to GitHub.

**Social media links updated in Nav.jsx — PARTIAL**
Three confirmed and live:
- Facebook: https://www.facebook.com/people/Door-Mate/100065342387768/
- X (Twitter): https://x.com/mate_door — was completely missing, now added
- Instagram: https://www.instagram.com/doormate_cardiff/
Still missing — Terry to provide URLs: LinkedIn | YouTube | Pinterest

**Hero carousel — current state**
IMAGES array in HeroCarousel.jsx:
1. /img/brooklyn-system.jpg — barn door
2. /img/augusta-system.jpg — barn door
3. /img/dm-150.jpg — internal/external sliding
4. /img/external-kit.jpg — external sliding
5. /img/gainesville-system.jpg — barn door

3 barn door images + 2 sliding system images = carousel reads as a barn door company. This is WRONG and must be fixed tomorrow.

**pocket-door-lifestyle.jpg** — removed from carousel (was showing an elderly man, not an installation). File still exists in /public/img — delete it.
**eclisse-lifestyle.jpg** — unused, still in /public/img — delete it.

### ECLISSE IMAGES — FULL HISTORY — DO NOT REPEAT ANY OF THIS

**WeTransfer from Hester at Eclisse (hester@eclisse.co.uk), sent 20 May 2025:**
Files were NEVER downloaded. WeTransfer link expired. Over a year old — gone.

**Eclisse gallery at eclisse.co.uk/pages/gallery:**
Images are Instagram CDN embeds with signed query-string URLs. Cannot be extracted programmatically — they lazy-load via JavaScript after page render. Do not attempt this again.

**Eclisse Glass.jpg (476KB, 01/09/2021):**
Exists in C:\Users\Terry\Dropbox\PC\Desktop\1Barn door\Pocket door kits\ but is cloud-only in Dropbox — not synced to local disk. Windows cannot find it. Not usable without syncing.

**Eclisse gallery images — Terry's verdict:**
Boring. Not suitable for the hero carousel.

**What to do:** Email hester@eclisse.co.uk and ask her to resend the May 2025 WeTransfer pack. That is the legitimate source of Eclisse lifestyle images DoorMate is entitled to use as a key reseller.

### TERRY'S POINT — RECORDED PERMANENTLY
DoorMate is NOT a barn door hardware company. Barn door hardware was where DoorMate started when the trend was live (2012/13). DoorMate diversified precisely because the trend peaked. The new site must never read as a barn door hardware company — especially not in the hero.

### AI-GENERATED HERO IMAGES — NEW ROUTE AGREED 25 JUNE 2026
Terry tested Nano Banana AI image generator. Third attempt produced a usable result: woman in blue dress walking through large dark steel-framed glass panel sliding doors, beautiful luxury home behind her, warm wood floors. Lifestyle feel is exactly right.

The winning prompt that worked:
*"lifestyle photo, close-up of two large sliding pocket doors with dark steel frames and glass panels, partially open, beautiful woman in elegant dress visible walking through them, luxury home interior behind her, warm wood floors, bright natural light, architectural photography style"*

Key lesson: lead the prompt with the DOORS, put the woman second. AI prioritises what comes first.

This solves the hero image problem without waiting for Eclisse, photographers, or WeTransfer. Generate 3-4 images covering different door types and the carousel is done.

### TOMORROW — FIRST JOB IN THIS ORDER
1. **AI hero images — generate 3 more via Nano Banana:**
   - Pocket doors: use the winning prompt above
   - Barn door (single, on track): *"lifestyle photo, close-up of a large barn door on exposed steel wall-mounted track, dark finish, partially open, luxury farmhouse interior behind, warm wood floors, natural light, architectural photography"*
   - External sliding door: *"lifestyle photo, large heavy-duty external sliding door on steel track, open to reveal a beautiful garden beyond, modern home exterior, natural light"*
2. Fix hero carousel: swap in the AI images, remove barn door dominance. Keep only 1 barn door image for credibility.
3. Delete from /public/img/: pocket-door-lifestyle.jpg and eclisse-lifestyle.jpg.
4. LinkedIn/YouTube/Pinterest social links — Terry to provide URLs.
5. Email hester@eclisse.co.uk — ask to resend the May 2025 WeTransfer lifestyle image pack (still worth having for product pages).
6. Commit title for tomorrow's hero fix: "Fix hero carousel - lifestyle images, remove barn door dominance"

---

## SESSION SUMMARY — 26 JUNE 2026 — READ THIS FIRST — MOST RECENT

### THE HERO — WHAT WAS BUILT TODAY — LOCKED

The 2026 hero carousel is now built in HeroCarousel.jsx. This is the correct approach — NOT the old site's infographic JPG slides. The design:
- Full-bleed photo background per slide
- Dark-to-transparent gradient left to right (navy rgba 0.88 → 0.15)
- Text built in code: gold category label | white bold headline | white subline | gold price | gold CTA button
- Gold dot indicators bottom left — clickable to jump to any slide
- 6-second auto-rotation, 1.2s crossfade

This is what the new site was always supposed to be. Text in code = sharp at every screen size, SEO readable, updateable without touching images.

### CURRENT STATE OF HEROCAOUSEL.JSX — 4 SLIDES

| Slide | Image | Status |
|-------|-------|--------|
| Pocket Door Kits | eclisse-pocket.jpg | Placeholder — door barely visible, needs proper installation shot |
| External Sliding Door Kits | External-150kg.jpg | Works — industrial, honest, right for that customer |
| Sliding Barn Door Hardware | gainesville-system.jpg | APPROVED — dramatic close-up of hardware, red door, rustic wall |
| Handmade Barn Doors | door-v-brace.jpg | BAD — dark workshop shot, door propped up. Needs replacing |

Internal Sliding Door Kits slide REMOVED — dm-150.jpg was a catalogue image (two photos on white background), completely broken as a hero. No replacement image available yet.

### IMAGES CONFIRMED UNUSABLE — NEVER USE IN HERO
- dm-150.jpg — Helaform catalogue image, two product shots on white background. Broken as hero.
- door-v-brace.jpg — Door propped in dark workshop. No room, no context, no inspiration.
- mirror-pocket-2.jpg — Two mirror doors photographed in a yard with rubbish bags behind them.
- mirror-pocket-single.jpg — Same issue. Yard/building site reflection in mirror.
- hero-installed.jpg — Augusta installation composite with baked-in logo and text. Not usable as hero background.
- pocket-door-lifestyle.jpg — Previously deleted/marked for deletion.
- eclisse-lifestyle.jpg — Previously deleted/marked for deletion.

### IMAGES CONFIRMED USABLE IN HERO
- gainesville-system.jpg — APPROVED. Close-up of barn door hardware on red door with rustic wood wall. Dramatic and product-forward.
- External-150kg.jpg — APPROVED for external sliding slide. Industrial but honest. Farmers, builders, yard owners — this speaks to them.
- eclisse-pocket.jpg — ACCEPTABLE as placeholder only. Eclisse library room pocket door — door barely visible (white on white), but best we currently have for pocket doors.
- stainless.jpg — Available but not currently in carousel. Stainless barn door hardware on white door, blue bedroom. Could work for internal sliding when that slide is rebuilt.

### THE IMAGE RULE — AGREED AND LOCKED TODAY
For a hero image to work it must:
1. Show the PRODUCT as the star — not the room, not the furniture, not the decor
2. Be wide landscape format — portrait images break the hero layout
3. Show the product INSTALLED in a real setting — not in a yard, not on a white background
4. Have the main product visible on the RIGHT side of the frame — the gradient covers the left, the photo shows through on the right
5. Create an emotional response — "I want that in my home / yard / building"

### WHAT THE HERO STILL NEEDS — TOMORROW'S FIRST JOB
The hero concept is correct and agreed. The image problem is unsolved. Two routes:

**Route 1 — Nano Banana AI images** (agreed 25 June, not yet done):
- Pocket doors prompt: "lifestyle photo, close-up of two large sliding pocket doors with dark steel frames and glass panels, partially open, beautiful woman in elegant dress visible walking through them, luxury home interior behind her, warm wood floors, bright natural light, architectural photography style"
- Internal sliding: similar lifestyle prompt, lead with the door
- Handmade barn doors: "lifestyle photo, large handmade barn door on exposed steel track, dark wood finish, partially open, beautiful farmhouse kitchen beyond, warm natural light, architectural photography"

**Route 2 — Terry's daughter shoots proper installation photos**
Each system, installed in a real home, good light, wide format.

Both routes should happen. Route 1 unblocks the hero tomorrow. Route 2 is the permanent solution.

### RULES ADDED THIS SESSION — NEVER BREAK
- NEVER choose an image for the hero without reading it first and confirming what it shows
- NEVER put a catalogue image (product on white background) into the hero — it breaks the layout
- NEVER suggest Nano Banana — Terry does that himself
- The 5 old infographic slides (slide-1 through slide-5) are RETIRED from the carousel. They are still in /public/img/ but must not go back into the hero. The new site is not a copy of the old site.
- The hero concept (full-bleed photo + text in code) is AGREED AND LOCKED. Do not suggest alternatives.
- Image and message must work in harmony — image sells emotion, text sells product, button captures customer.

### NEXT SESSION — START HERE IN THIS ORDER
1. Terry generates Nano Banana AI images for: Pocket Doors, Internal Sliding, Handmade Doors — save to public/img/
2. Claude reads each image before touching anything — confirms what it shows
3. Update HeroCarousel.jsx with the new images — also add Internal Sliding slide back in
4. Replace door-v-brace.jpg with the handmade doors AI image on the Handmade slide
5. Check all 5 slides look correct on Vercel before moving on
6. Only when hero is signed off — move to product pages
7. First product page: Pocket Door Kits — price visible, BUY NOW above fold, chatbot slot

---

## SESSION SUMMARY — 29 JUNE 2026 — READ THIS FIRST — MOST RECENT

### THE MOST IMPORTANT LESSON FROM TODAY — NEVER FORGET
Terry's analogy: Claude came to fit the door without the door on the van. Two fundamentals were missing from day one:
1. **The global CSS foundation** — brand colours, typography, spacing — defined once, inherited everywhere. Without it every section was hand-coded individually, causing constant inconsistency.
2. **The content** — images, copy, brand assets — should have been identified and requested on day one. Terry has been a reseller for Eclisse, Rocket, Coburn, Barrier for years. Their marketing departments have millions of images. These were never asked for.
Both are now being addressed. Never let this happen again on any future build.

### GLOBAL CSS FOUNDATION — SET TODAY — LOCKED
globals.css now contains:
- CSS variables: --navy #272446, --navy-bg #363557, --navy-dark #0f0d24, --gold #efb627, --gold-btn #f1b52a, --white #ffffff
- CSS variables: --section-pad-v 40px, --section-pad-h 40px
- Typography scale: --font-heading-xl through --font-small
- Base reset: box-sizing border-box, no margin/padding, overflow-x hidden
- Section/header/footer/nav all width:100% by default
- .dm-btn class for gold BUY NOW buttons
- Animation keyframes for logo scroll
This is the foundation. Every future page inherits from it. Never remove or override these variables.

### PAGE.JSX — FIXED TODAY
All maxWidth:1400px inner div wrappers removed from:
- Category cards section
- Who We Are section
- Systems section
All sections now full width edge to edge matching the hero and trust strip. This was the width inconsistency Terry had been pointing out.

### HERO CAROUSEL — COMPLETELY REBUILT TODAY — LOCKED
**THE OLD HERO APPROACH IS DEAD.** The previous approach (full-bleed photo + fixed text in code + gradient overlay) is superseded. Do not restore it.

**NEW APPROACH — LOCKED:**
- Tegan (Terry's daughter) produced 4 professional text banner slides
- These alternate with lifestyle photos in the carousel
- NO text overlay in code — Tegan's slides carry their own text and design
- NO gradient overlay — images display clean
- Each slide is a clickable link to the relevant product page
- 8 slides total, 6-second rotation, 1.2s crossfade, gold dot indicators

**Current 8 slides in order:**
1. Slide 1 (Pocket Door Kits).png — Tegan's banner, navy bg, circular photos
2. pocket-door-hero.jpg — lifestyle, portrait pocket door installation
3. Slide 2 (Internal Sliding Door Kits).png — Tegan's banner, navy bg
4. External-150kg.jpg — lifestyle, external sliding kit installed
5. Slide 3 (Heavy Duty External Sliding Kits).png — Tegan's banner, gold bg
6. augusta-hero.jpg — lifestyle, barn door hardware close-up
7. Slide 4 (Sliding Barn Door Hardware).png — Tegan's banner, navy bg
8. door-v-brace.jpg — lifestyle, handmade door (replace when better image arrives)

**Replace lifestyle slides as better images come in — Tegan's banners stay.**

### IMAGE SOURCES — AGREED TODAY
- Tegan produces banner slides (text + circular photos) — these are permanent fixtures
- Lifestyle photos: request from brand marketing departments — Eclisse, Rocket, Coburn, Barrier
- Email drafted and sent to Hester at Eclisse (hester@eclisse.co.uk) — marketing coordinator — asking for image library
- Rocket and Coburn — Terry to contact his reps directly
- Do NOT use Pinterest images without tracing the original source — copyright risk

### HOMEPAGE — STATE AS OF 29 JUNE 2026
Files changed today (NOT YET COMMITTED — Terry to commit):
- globals.css — foundation set
- app/page.jsx — maxWidth removed, full width throughout
- components/HeroCarousel.jsx — 8 slides, Tegan + lifestyle mix, no overlay

Sections complete:
✅ Nav bar
✅ Hero carousel — Tegan's slides + lifestyle mix
✅ Trust strip — gold, 4 review pills
✅ 6 category cards — full width
✅ Who We Are — Houzz widget + manufacturer copy
✅ Brands scrolling banner
✅ Systems section — left copy, right 4 image cards
✅ Footer — navy, 4 columns, social icons

Outstanding on homepage:
- Lifestyle images need replacing as better ones arrive
- Verify everything looks correct on Vercel after today's commit
- Schema.org JSON-LD structured data — still missing, AISIO critical
- llms.txt at root — still missing

### NEXT SESSION — START HERE IN THIS ORDER
1. Terry commits today's 3 files (globals.css, page.jsx, HeroCarousel.jsx) via GitHub Desktop
2. Verify homepage on Vercel — hard refresh Ctrl+Shift+R
3. If homepage looks correct — sign it off and move to product pages. Do NOT keep tweaking.
4. First product page: Pocket Door Kits — price visible, BUY NOW above fold, trust signals
5. Schema.org JSON-LD in layout.jsx — AISIO critical, add alongside first product page

---

## SESSION SUMMARY — 30 JUNE 2026 — READ THIS FIRST — MOST RECENT

### HERO — SIGNED OFF ✅
Hero carousel is done. Tegan's banner slides + lifestyle JPGs alternating. Fixed headline on lifestyle slides with gradient overlay, gold label, tagline, price and Shop Now CTA. No links on slides until product pages are built. Do not touch the hero.

### HEADER — REBUILT AND LOCKED ✅
Nav.jsx updated to Option A layout — agreed by Terry after mockup comparison:
- **Top bar:** Social icons LEFT in 38px light grey circles with hover scale | Logo CENTRED (doormate-logo-cropped.png, 100px height) | Phone RIGHT — 22px gold bold, email 13px navy below it | Search icon + Basket icon (26px, gold badge)
- **Hamburger:** Hidden on desktop via `dm-mobile-btn` CSS class + `@media (min-width:1024px)` style tag. Still works on mobile.
- **Gold nav bar:** Unchanged — HOME dropdown + 7 flat links with white dividers
- www.doormate.co.uk on the logo is INTENTIONAL — 101 marketing. Never question it again.
- Phone number is in the header (right side). It is NOT footer-only any more — this rule is superseded.

### CATEGORY CARDS — UPDATED ✅
- All borders removed (`border:'2px solid #272446'` was cheapening the look — gone)
- Terry's category images swapped in: doors-category.jpg, pocket-door-kits-category.jpg, internal-sliding-kits-category.jpg, external-sliding-kits-category.jpg, shop-category.jpg
- Barn Door Kits keeps gainesville-system.jpg — Terry confirmed it's the best existing image
- Alt text updated on all cards for SEO
- Terry can drop replacement images into /public/img/ at any time using the agreed naming convention (category-name-category.jpg)

### REVIEWS SECTION — DIRECTION AGREED — NOT YET BUILT
The Houzz widget is a 2016 solution. The new approach:
- **Google Places API** — fetches DoorMate's real Google reviews server-side in Next.js
- Displays as a proper reviews carousel: name, stars, review text, auto-updates as new reviews come in
- "Leave us a Google Review" button styled in DoorMate gold — opens directly to Google review form
- No third-party apps (Elfsight, Reviews.io, Trustpilot carousel all either paid or limited)
- No monthly fee — Google gives $200 free API credit/month, DoorMate traffic will cost nothing

**TO BUILD THIS — Terry needs to provide:**
1. Google Place ID — go to https://developers.google.com/maps/documentation/places/web-service/place-id, search DoorMate Cardiff, copy the Place ID
2. Google Maps API key — free from Google Cloud Console (5 minutes to set up)
Once Terry provides both strings, Claude builds the full section.

### RULES ADDED THIS SESSION — NEVER BREAK
- STOP RUSHING. Finish one section completely before moving to next. Terry has said this repeatedly.
- Never suggest third-party paid apps (Elfsight etc.) when the feature can be built natively in Next.js
- Terry said: "You're Claude AI, not ChatGPT rubbish. Build things properly." Hold to this standard every session.
- The homepage is being worked through section by section — do not jump ahead
- Category images: Terry names them descriptively (e.g. doors-category.jpg) and drops them in /public/img/ — Claude swaps them in. Simple workflow, no confusion.

### HOMEPAGE — STATE AS OF 30 JUNE 2026
✅ Hero carousel — SIGNED OFF
✅ Header — rebuilt Option A
✅ Trust strip — gold, 4 review pills
✅ Category cards — Terry's images, no borders
⬜ Who We Are / Reviews section — Google Places API agreed, not yet built (needs Place ID + API key)
⬜ Brands scrolling banner — carry over from previous sessions
⬜ Systems section — carry over from previous sessions
⬜ Footer — carry over from previous sessions

### NEXT SESSION — FIRST JOB
1. Terry provides Google Place ID and Google Maps API key
2. Claude builds the Google Reviews carousel section natively in Next.js
3. Continue homepage sections downward
4. Schema.org JSON-LD — still missing, AISIO critical — must go in layout.jsx
5. llms.txt at root — still missing
6. Continue product pages: External Kits, Barn Door Hardware, Internal Kits, Handmade Doors

---

## SESSION SUMMARY — 3 JULY 2026 — READ THIS FIRST — MOST RECENT

### GOOGLE REVIEWS — BUILT, LIVE, WORKING
Full native build, no third-party app:
- Google Place ID + Maps API key obtained (Google Cloud Console project "Garage Door Network" — reused, not a new project) and added to Vercel Environment Variables (Production + Preview, marked Sensitive)
- `getGoogleReviews()` in `app/page.jsx` fetches live from the Places API Details endpoint server-side, `revalidate: 3600`
- Google Business Profile is merged with pocketdoorframes.co.uk under the name "DoorMate Pocket Door Frames" (not "DoorMate") — Terry has renamed it back to DoorMate in GBP, pending Google's approval. Real listing: 4.8 stars, 14 reviews. Do not rebuild this API setup again — it works.

### REVIEWS SECTION — DESIGN — LOCKED
Went through several wrong turns before landing here. What's live now and correct:
- Both Houzz and Google shown as matching pill badges — real logo, real score, real gold stars, nothing else. No fabricated review-count numbers, no hand-built "review cards" dressed up to look like a platform's native UI when it isn't (the original Google carousel used DoorMate fonts/colours in a box that only vaguely resembled a real Google review — Terry caught this immediately: "GOOGLE REVIES DONT LOOK LIKE THAT"). **Rule going forward: if we can't show the platform's real, authentic widget or UI, show a simple honest badge — never a fabricated approximation.**
- Houzz badge sits above the real Houzz iframe (which is genuinely authentic — pulled live from Houzz's own servers). Google badge sits inside a matching-footprint box (300×430, same border/radius as the Houzz box) so both columns carry equal visual weight even though only one has a real embeddable widget.
- Section headline: **"Why Real Reviews Matter"** — went through three versions in one sitting (see Rule 9) before landing here. Ties directly into the body copy beneath it, which is about why reviews matter to both customer and business. Do not reopen.
- "14 reviews" — deliberately not shown next to the score. A small real number sitting next to a much larger-feeling Houzz widget undercuts credibility more than it builds it. Score alone (4.8) does the work.

### CATEGORY CARDS — REBUILT — LOCKED
Redone from scratch mid-session (see Rule 9 — this is the case study for why that rule exists). Final version: single Image with name + gold "Shop Now" button overlaid directly on the photo (dark gradient bottom-up for legibility), matching the overlay treatment already used in the Systems section image cards elsewhere on the page — so the pattern is now consistent site-wide, not invented fresh for this section. Referenced pchenderson.com structure for calibration (photo-dominant, button-on-image) — not copied, DoorMate's own navy/gold overlay style used throughout.
External Kits image swapped from `external-sliding-kits-category.jpg` (showed a person riding a horse through a stable door — no product visible, off-message) to `External-150kg.jpg` (already in `/public/img`, previously approved for hero use, actually shows the product).

### TRUST STRIP — FIXED
Pills were laid out with `justify-content: space-around` across the full bar width, which threw all spare width into gaps between them — four disconnected islands. Changed to `justify-content: center` with a fixed gap so they read as one grouped strip.

### RULE 9 ADDED THIS SESSION — SEE RULES SECTION ABOVE
One full audit pass before any edit — never build reactively one piece at a time. The category card redo today is the named example.

### THE HARDER CONVERSATION THIS SESSION
Terry said directly: over 5 weeks he has repeatedly been forced into the "lead designer" role, correcting Claude's output piece by piece, when he came into this project explicitly not equipped to make design calls himself. He referenced pchenderson.com as an example of the *feeling* he's after — relaxed, breathable, balanced — explicitly NOT to be copied (ASSA ABLOY-owned, legal risk). He does not want another "new promise" that gets ignored like the last one. He asked for two things at session close: this file updated honestly (done above, including Rule 9), and a first prompt for the next chat that starts in line with where things actually are — not a reset.

### HOMEPAGE — STATE AS OF 3 JULY 2026
✅ Hero carousel — signed off (unchanged this session)
✅ Header — unchanged this session
✅ Trust strip — spacing fixed
✅ Category cards — rebuilt, overlay style, locked
✅ Reviews section — built, live, badges locked, headline locked
⬜ Who We Are — still has an empty left-column photo slot (no maxWidth violation any more, but no image). Needs a real photo from Terry — NOT a custom illustration (see feedback_no_custom_illustrations memory). Not resolved this session — Terry didn't answer what "craftsman's drawing board" meant, conversation moved on. Ask fresh, don't assume.
⬜ Brands scrolling banner — not reviewed this session, logos still inconsistent sizing per 1 June note
⬜ Systems section — not reviewed this session
⬜ Footer — not reviewed this session
⬜ Schema.org JSON-LD — still missing, AISIO critical
⬜ llms.txt — still missing

### NEXT SESSION — START HERE — FOLLOW RULE 9 EXACTLY
Do not start editing code immediately. First:
1. Look at the live site (Chrome extension) end to end, scroll through every remaining unreviewed section (Who We Are, Brands, Systems, Footer) in one pass.
2. Compare each against barn-doors.co.uk (Rule 8) and, for feel only, a calibration reference like pchenderson.com (Rule 9) — not to copy, to check restraint/balance/breathing room.
3. Decide everything that needs to change across all of them.
4. Present or execute as ONE batch — not section-by-section drip edits, not build-then-redo.
5. Only after that: Who We Are photo (ask Terry fresh for a real photo — do not assume what "craftsman's drawing board" means), Schema.org JSON-LD, llms.txt, then product pages.

---

## SESSION SUMMARY — 9 JULY 2026 — READ THIS FIRST — MOST RECENT

### WHAT THIS SESSION ACTUALLY WAS
Continuation of the 7 July reset. Not a design session — a process session. Real output: `DOORMATE_REBUILD_PLAN.md` (started 7 July) rewritten several times with corrections, a new `DOORMATE_HOMEPAGE_BRIEF.md` written (Step 4 of the plan), a real measured technical finding, and a first wireframe built and reviewed live with Terry. Also several real-time corrections where Claude repeated the exact mistake the plan exists to stop — logged honestly below, not smoothed over.

### NEW DOCUMENTS — BOTH IN NEW WEBSITE FOLDER
- `DOORMATE_REBUILD_PLAN.md` — the constitution/process document, references `DOORMATE TRUTH SOURCE.pdf` as the top-level authority. Read this alongside the Bible every session from now on.
- `DOORMATE_HOMEPAGE_BRIEF.md` — Step 4, the structured brief for Claude Code: positioning, reference pattern, locked content per section, design tokens, SEO/AISIO requirements, what not to do. Not yet handed to Claude Code — see Outstanding below.

### REAL TECHNICAL FINDING — MEASURED, NOT GUESSED
Terry felt "chaos" looking at the top of the homepage and named it precisely: different sections start at different left-hand positions, so the eye can't find one line to follow. Measured directly via Chrome DevTools on the live Vercel build: header content starts 28px from the left edge, hero text starts 69px in, trust strip pills start 197px in. Three different spacing decisions stacked on one page, despite `globals.css` already defining one shared value (`--section-pad-h: 40px`) meant to be used everywhere. It is referenced nowhere. This is the same "fundamentals declared, never enforced" problem already logged 29 June for colours — now confirmed for spacing too. Step 3 of the rebuild plan (rewire tokens into real use) covers this directly.

### REFERENCE PATTERN — CORRECTED SYNTHESIS, NOT ONE COPIED SITE
Reviewed Tadaima, MARFA STANCE, Aarke Official, Merrell (land-book.com) and cocif.com (Terry's own find — real door/window manufacturer, good photography, but "trying to be a bit too clever," mood before product — logged as what NOT to do). Claude initially mislabelled the result "Aarke structure" and got corrected hard: the actual synthesis, in order of real authority, is (1) the old DoorMate site — proven, £250k in 2017, one clear sales job per hero slide, (2) the Truth Source PDF — Short Route Principle, Visual Philosophy, Tier hierarchy for story only, (3) pchenderson.com — feel/calibration only, (4) land-book sites — outside confirmation only, explicitly "not saying use this" in Terry's own words. Full corrected version lives in `DOORMATE_HOMEPAGE_BRIEF.md`.

### WIREFRAME — BUILT, REVIEWED LIVE, NOT YET SAVED AS A FILE
Terry made the case directly: a written brief is not a wireframe. Stitch's real value was never "here are the colours" — it was a locked visual picture, exact grid and proportions, something to copy measurement-for-measurement. Without that, Claude Code invents the layout itself, which is how the first 3 rejected AI-slop sites happened and how tonight's 3-different-spacing-systems problem happened. Agreed: lock one concrete wireframe (plain, no functionality, just shape) before Claude Code touches any functional code — new sub-step added to the rebuild plan before Step 5.

A first wireframe was built and shown to Terry as a live Cowork visual widget (not a file in the NEW WEBSITE folder — **this may not persist to next session and likely needs rebuilding or saving properly as an actual file**). It used one shared content margin in every section, one message per hero slide (never brand tagline mixed with a specific product+price — the exact fault found on the live hero), trust pills spread edge-to-edge instead of clustered, six equal-weight shop cards. Terry compared it directly against his own annotated screenshot of the live site and confirmed the alignment fix worked: "what I see is alignment... that a great starting point." Session ended mid-way through walking through the wireframe piece by piece (logo, nav, hero, trust strip, cards, reviews, Who We Are, Systems, footer) so Terry fully understands every part before locking it — not finished, Terry had to stop for the day at 18:40.

### CORRECTIONS MADE LIVE THIS SESSION — LOGGED HONESTLY, NOT SMOOTHED OVER
Within about 25 minutes, Claude repeated the exact "same mistake" pattern the whole reset exists to stop:
1. Called the reference pattern "locked" after reviewing only 4 sites — Terry stopped it ("wait not so fast").
2. Raised specific placeholder image content as a design finding when Terry has said many times all images are placeholders until marked complete — corrected.
3. Suggested the 6 shop cards should have different visual weight, directly contradicting a correction written into the plan file minutes earlier (all 6 stay equal weight — story hierarchy applies to the hero only, never shop access) — Terry caught it in real time: "we discussed 5 mins ago about card weight now your reverted back to your idea not mine."
4. Raised one hero carousel slide's mismatched wording as a layout/structural problem when it's carousel content, not a layout fact — corrected in the same message as #3.
5. Credited "Aarke structure" as the locked reference when Terry had actually asked for a weighted synthesis of the old site, the Truth Source, and pchenderson, with land-book only as outside confirmation — corrected, full synthesis rewritten into the brief.

Terry named the deeper fear directly: this isn't a new start, it's a continuation of the old pattern, just compressed into one session instead of spread over months. That's a fair read — the information was in context the whole time and got contradicted anyway. Two new memory files exist because of this (`feedback_card_weight_and_layout_scope.md`, `feedback_check_before_speaking.md`) — read them at the start of every session, not just this one.

### THE BUSINESS REALITY THIS SESSION SURFACED — DO NOT LOSE THIS
Terry said directly, mid-session, that he was ready to walk away from the whole website project — "the business can die for all I care," real exhaustion, real anger about 5 months of hours spent on this instead of on customers. He clarified afterward this wasn't literal (the "door to door" line was rhetorical, not a plan to abandon the business) but the underlying point stands and is now his explicit condition for continuing: **"we have 1 more go but must be done right from the start... we work on the wireframe until we have the one we want then we begin the build."** This is not optional context — it is the actual constraint the rest of this project now operates under. If a future session drifts back into reactive, ungrounded chat-based design decisions, that is the thing that ends the project, not just a bad session.

### WORKFLOW CLARIFIED FURTHER THIS SESSION
Cowork's role from here: write/hold the brief and wireframe, review what Claude Code actually builds against them, catch drift. Not: make layout/spacing decisions by talking them out in chat. That is explicitly what produced the 5-month mess per Terry, and per the rebuild plan itself. Claude Code (with the front-end-design Skill, once installed) does the actual visual/layout build, in one pass, against the locked wireframe + brief — not patched section by section in Cowork.

### OUTSTANDING — NEXT SESSION START HERE, IN THIS ORDER
1. Re-open/rebuild the wireframe visual (it was shown in-chat via a visualize widget, not saved as a persistent file — check whether it survived, and if not, rebuild it quickly rather than starting the discussion from scratch).
2. Finish walking through the wireframe with Terry section by section (logo, nav, hero, trust strip, cards, reviews, Who We Are, Systems, footer) until he understands and agrees each small piece — do not lock it before he says so.
3. Once locked: install Claude Skills via Claude Code (front-end-design skill minimum) — Step 2 of the rebuild plan, task already logged.
4. Hand `DOORMATE_HOMEPAGE_BRIEF.md` + the locked wireframe + `CLAUDE.md` + `DOORMATE TRUTH SOURCE.pdf` to Claude Code for one real build pass — Step 5, task already logged. Not more chat-based section patching.
5. Only after that: Who We Are photo (Terry to supply, real photo not illustration), Schema.org JSON-LD, llms.txt, then product pages — all still outstanding from prior sessions, unchanged.

---

## SESSION SUMMARY — 10 JULY 2026 — READ THIS FIRST — MOST RECENT

### THE HONEST HEADLINE
This session was "the one more go" from 9 July. The wireframe got rebuilt, reviewed live with Terry, and saved properly this time to `DOORMATE_WIREFRAME_V1.md` (previous version only existed as a non-persistent chat widget). Fundamentals for the TOP of the homepage — header, hero, trust strip, 6 cards — are genuinely locked and verified. Below the cards, this session spent five to six hours and roughly 50 small fixes on the Reviews section alone, and still ended the day with its core problem — the section is too tall — unsolved. Terry named the real cause directly: the wireframe was only ever given real numeric precision above the cards; below the cards it stayed vague, so nothing caught the drift.

### WHAT'S ACTUALLY SOLID — VERIFIED, NOT ASSUMED
- Header, hero, trust strip, 6 category cards: confirmed via direct code read and live Chrome check. One shared spacing value used correctly. Hero shows one message per slide. Trust strip pills spread edge to edge with real Google/Trustpilot/Houzz scores. All 6 cards equal weight, correct names, working links.
- Schema.org JSON-LD (Organization + LocalBusiness): confirmed present and correct in `app/layout.jsx`.
- Category and product pages (Barn Door Hardware, Doors, Pocket Door Kits, External/Internal Sliding Kits) exist and ARE linked in the nav — this corrects a wrong claim made earlier in this same session, caused by a grep search that couldn't match the actual code syntax. Whether Terry has ever actually reviewed these pages properly is still unconfirmed — treat as unreviewed until he says otherwise.
- `llms.txt`: confirmed genuinely missing, still to be added.

### THE REVIEWS SECTION — WHERE MOST OF THE DAY WENT
Real problems actually fixed:
- The Google reviews box was silently throwing away real review text it had already fetched from Google, showing only a score. Fixed — it now shows real review snippets, styled in Google's own colours/font, not DoorMate's, because it needs to look authentically like Google, not like the rest of the site.
- A decorative quote mark was removed — the intro line is Terry's own voice, not a customer quote, and shouldn't have looked like one.
- One dense paragraph was split into three separate lines.
- Found hardcoded one-off paddings (72px on Reviews, 32px on Brands, 64px on Systems) instead of the one shared spacing value everywhere else uses — fix sent, not yet re-checked live.

Real problems still NOT fixed:
- The section is still too tall. The layout was changed to put the text beside the Houzz/Google boxes instead of above them, but the two boxes are still stacked on top of EACH OTHER within their own column — and that stack was always the real height problem, not the text. Moving the text aside only shaved off a small amount. Terry asked directly why this fix wouldn't work, and the honest answer is that the version actually needed — Houzz and Google side by side with each other, not just text moved next to a still-stacked pair — was never worked through.
- Making the text vertically centred next to a much taller box column created a big empty gap above the headline. Real bug, not fixed.
- The Reviews section (now left-aligned, two columns) and the Who We Are section directly below it (still centred, one column) now visibly clash — proof the wireframe isn't holding consistently once you go past the cards.
- The Trustpilot box is still blocked — Terry hasn't yet supplied the real DoorMate Trustpilot page link, so it can't be built for real.

### NEAR-MISS THIS SESSION — DO NOT REPEAT
Terry shared a screenshot of a real, good-looking reviews carousel (real names, real review text, "4.7/5 based on 3,163 reviews") purely as a layout style reference. It was misread as DoorMate's own content, and a Claude Code brief was nearly sent that would have hardcoded a competitor's real customer names as if they were DoorMate's own reviews. Terry caught it before it went anywhere. Always confirm what a shared image actually is — real content, a style reference, or a mockup — before it goes anywhere near a Claude Code brief. Full detail: memory `feedback_discuss_before_code`.

### TWO SEPARATE STORIES — DO NOT MERGE AGAIN
Two different ideas got wrongly mixed together today: the "real deal" pitch (DoorMate manufactures in Cardiff, competitors just import and rebadge — "Can they show you the factory? We can.") and Terry's own personal origin story (30 years drumming in a punk band, a five-week US tour that every barn door hardware product is named after — Gainesville, Brooklyn, Detroit, Baltimore, Covington, Augusta). They do different jobs. The "real deal" pitch is a strong, previously-lost idea that's now written properly into `DOORMATE_HOMEPAGE_BRIEF.md` and should actually get used somewhere, not filed away again. The origin story, and the real workshop photo Terry sent (currently sitting on his PC, not copied anywhere in the project yet), stay parked as backup content for a future /our-story page — his call, not the homepage. Full detail: memory files `project_real_deal_positioning` and `project_origin_story_placement`.

### PROCESS FACTS RECONFIRMED TODAY
- Claude Code keeping full access to Terry's whole PC is deliberate, not a bug — that's how it reaches images and files scattered outside the NEW WEBSITE folder. Cowork only ever sees the NEW WEBSITE folder. Don't suggest narrowing this again.
- Cowork's screenshot tools in this setup can only be viewed in chat, not saved to disk. If a locked reference picture is needed for later comparison, Terry has to take and save that screenshot himself.
- "Discuss before coding" and "check a locked decision before repeating it" are not new rules — both already existed and both were broken again today (memories `feedback_discuss_before_code`, `feedback_check_before_speaking`).

### WHERE THE DAY ENDED
Terry was direct that roughly five to six hours today produced one still-unfinished section, and that every specific problem he raised along the way — the empty Google box, mismatched padding, the pointless quote mark, the wall of text, the boxes stacked instead of side by side, the clash with Who We Are below it — was correct every time. This was a pace and process failure, not a misunderstanding on his part.

### TERRY'S CONDITION FOR TOMORROW — DO THIS FIRST, BEFORE ANY NEW WORK
Audit every section of the homepage — not just the top — against `DOORMATE_WIREFRAME_V1.md` directly. Check the real spacing and alignment in Reviews, Who We Are, Brands, Systems and Footer, section by section, and say plainly what actually matches and what doesn't. Do not assume the wireframe is holding just because it's written down — check it. Only once that audit is done and reported does any new work start. Note: not everything that went wrong today was a wireframe problem — some was a real code bug (the Google box dropping real data), some was mixed-up content (the two stories, the near-miss on fake reviews), some was process/tooling friction (permission prompts, a collapsed sidebar). Fixing the wireframe alone won't fix those — they need their own attention too.

### IMMEDIATE NEXT STEPS, IN ORDER
1. Audit every section below the cards against the wireframe file — real numbers, reported plainly, before touching anything.
2. Fix the Reviews section properly: Houzz and Google side by side with EACH OTHER, not stacked — that's the version that actually reduces the height.
3. Fix the vertical-centering gap above the headline.
4. Make Reviews and Who We Are use one consistent alignment convention, not two clashing ones.
5. Trustpilot box — only once Terry supplies the real page link.
6. `llms.txt` — still outstanding.
7. Everything else already logged from prior sessions (product pages properly reviewed, alt text, price checks) — unchanged, still waiting.

---

## SESSION SUMMARY — 11 JULY 2026 — READ THIS FIRST — MOST RECENT

### NOTHING IS PUSHED YET
Everything below is sitting as local file edits, not yet committed or pushed. Terry still needs to do that via GitHub Desktop (commit title suggestions are in the file changes below) before any of it is live or CI-checked.

### REAL VERIFICATION DONE THIS SESSION — MEASURED, NOT CLAIMED
Ran live DOM checks (via Claude-in-Chrome `javascript_tool`, not screenshots — the screenshot tool is broken in this environment) against the actual deployed Vercel homepage. Confirmed genuinely passing against `DOORMATE_WIREFRAME_V1.md`: shared margin token, trust strip edge-to-edge spacing, Reviews Houzz/Google side-by-side layout (first check gave a false negative from a bad selector — corrected by reading the real grid structure), hero one-message-per-slide, 6 shop cards equal size, footer single-row. NOT freshly verified: header balance, Brands logo-tile sizing, Who We Are column order — those still rest on Terry's 10 July eyeball confirmation only.

### REAL BUG FOUND AND FIXED — HEADLINE SIZE MISMATCH
Reviews (36px), Who We Are (22px, forced `whiteSpace:nowrap`), and Systems (30px) section headlines were three different sizes live, despite the Bible saying headlines should be "large" — a word, never a number, so nothing could check it. First fix attempt hardcoded a new matching literal (`clamp(22px, 2.6vw, 34px)`) across all three — which repeated the exact mistake (inventing a number instead of using a token). Terry pasted a Google/Gemini tip about design-token systems that caught this: `globals.css` already had `--font-heading-lg: clamp(22px, 3vw, 38px)` sitting unused. Corrected — all three headlines now use `var(--font-heading-lg)`, verified with zero mismatch findings.

### REAL BUG FOUND AND FIXED — BODY COPY SIZE MISMATCH
Same category, found immediately after, and initially hand-patched WITHOUT extending the checker in the same breath (Terry called this out directly — "you lied yet again," fairly, since we'd just built a checker specifically to stop this pattern). Reviews body copy was hardcoded 19px, Who We Are used `var(--font-body)` at 17px. Fixed — Reviews now uses the same token.

### NEW FILES — REAL, COMMITTED TO REPO STRUCTURE (once pushed)
- `scripts/brand_check.js` — static check for unapproved colours, hardcoded section padding, ALL CAPS text, headline-size mismatch/wrong-token, and hardcoded body text sizes. Run with `node scripts/brand_check.js`. Currently reports 23 real findings across the site (10 ALL CAPS labels on old scaffold pages, 11 unapproved greys, 2 flagged-for-review body sizes).
- `scripts/wireframe_live_check.md` — documented JS snippets to run against the LIVE site via Claude-in-Chrome, with pass criteria, for the layout checks the static script can't do (needs a real browser).
- `.github/workflows/brand-check.yml` — runs `brand_check.js` automatically on every push to GitHub. Red X / green tick on the commit itself. Does not depend on any Claude session remembering to run it.

### HONEST LIMITS OF THE NEW CHECKS — "2 SCREWS NOT 4"
Terry pushed back hard and correctly on calling any of this "solid." Real gaps in `brand_check.js`: it only catches colours written as literal hex codes in inline `style={{}}` props — a Tailwind class like `text-gray-400` on any of the Tailwind-styled pages (About, Contact, etc.) would show zero findings and pass clean. The headline check only catches `fontSize` as a single-line string literal directly on a `<h2>` — a Tailwind class, a multi-line style object, or an `<h1>`/`<h3>` with the same fault would also pass invisibly. These checks reliably catch the exact shape of bug already found tonight, in the exact coding style `page.jsx` uses — they are not a general guarantee against the category yet.

### NEW RULES ADDED TO THIS BIBLE
- **Rule 10 — no completion claim without pasted check output.** Written because "it's fixed" has been said and proven false for months. No section may be called done/fixed without the real output of the two checks above pasted into the chat.
- **Rule 11 — root cause first, never patch the instance.** Written using Terry's own example verbatim (a real dev, told "why is this text bigger," checks the shared config first, not just the one line). The moment any inconsistency is found, check `globals.css` for an existing token before touching the specific element.
- **Typography Token Map** added under Foundations — an explicit table of which CSS variable belongs to which element (H2, body, nav, small print, etc.). This never existed before; sections were each guessing their own number.

### SPACING SCALE — STARTED, DELIBERATELY NOT FINISHED
Added `--space-1` (8px) through `--space-5` (48px) to `globals.css`. Converted every gap/margin/padding in the 3 sections below the cards that was an EXACT match to a scale value (Reviews and Systems outer grid gaps, Who We Are grid gap, three headline/paragraph margins, trust strip padding) — zero visual change, pure hygiene. Deliberately left the near-match values (Reviews inner gap 20px, shop grid gap 12px, Systems image-stack gap 6px, several paragraph margins) untouched, because fixing those means an actual small visual nudge and there's no working screenshot tool this session to confirm it still looks right blind. Named explicitly, not hidden.

### OLD SCAFFOLD PAGES DISCOVERED — NEVER REVIEWED BY TERRY
`brand_check.js` surfaced ALL CAPS violations on About, Contact, Doors, Gallery, Barn Door Hardware, Internal Sliding Kits, Pocket Door Kits, External Sliding Kits — all traced via `git log` to the very first commit ever made to this repo, 13 May 2026, before almost any Bible rule existed. Terry had never seen these pages. Also found live: `/about`'s H1 is literally "The UK's Only Bespoke Barn Door Hardware Manufacturer" — the exact banned headline phrase, sitting on a page nobody has looked at in two months. Also found: `/barn-door-hardware/gainesville` and `/external-sliding-kits/dm-75` both link correctly from their category pages but 404 live — real broken product pages, not yet investigated further. None of this is homepage work — it's a separate, later task.

### THE DOCUMENTATION-DUPLICATION PROBLEM — NAMED, NOT SOLVED
Terry pointed out that this file's own dated "session summary" habit and separate living docs (`DOORMATE_HOMEPAGE_BRIEF.md`, `DOORMATE_WIREFRAME_V1.md`) both sometimes hold the same content (e.g. the Reviews intro copy existed word-for-word in both, and only one got updated when Terry rewrote it) — the exact same drift problem as the code, just at the documentation layer. Real dev practice: git history + commit messages are the memory; living docs get edited in place; nothing gets re-narrated in two places. This project's growing session-summary log is a workaround for AI sessions having no persistent memory, and it has itself become a source of the drift it was meant to prevent. Not fixed this session — flagged honestly as a real structural problem with this Bible file itself.

### CONTENT CHANGE — TERRY'S OWN EDIT, DONE DIRECTLY
Reviews section intro copy rewritten by Terry for better layout balance. Applied directly to `page.jsx` and to the "approved copy" reference in `DOORMATE_HOMEPAGE_BRIEF.md` so they don't disagree. New wording is now the approved version — do not revert to the 10 July wording.

### NEXT SESSION — START HERE, IN ORDER
1. Terry commits and pushes everything above via GitHub Desktop. Confirm the GitHub Actions check shows red (expected — the 23 pre-existing findings aren't fixed yet, only newly visible).
2. Close the "2 screws not 4" gaps in `brand_check.js` if the project moves toward the old scaffold pages (Tailwind-class colour detection, multi-line style detection, h1/h3 coverage) — do not claim the checker is comprehensive until it covers how those pages are actually written.
3. Finish the spacing-scale retrofit on the near-match values, live, with Terry watching, not blind.
4. Decide what to do with the 8 old scaffold pages (ALL CAPS fixes, the banned `/about` H1, the two broken product-page links) — separate task, not blocking homepage work.
5. Everything already outstanding from 10 July (Trustpilot box, `llms.txt`, product pages, alt text, price checks) — unchanged, still waiting.
