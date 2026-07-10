# DOORMATE REBUILD PLAN
Started: 7 July 2026 (night session, after full homepage audit and honest history review)

Reference this document any time you feel Claude drifting from what was agreed here. If a future session isn't following it, point at this file by name.

---

## THE CONSTITUTION

`DOORMATE TRUTH SOURCE.pdf` is the permanent constitution for this business — written by Terry with ChatGPT, not by Claude. It sits above this plan and above CLAUDE.md. Every decision here is checked against its Decision Filter (7 questions) before being treated as settled:

1. Does it strengthen DoorMate as a Sliding Door Systems company?
2. Does it help customers recognise the correct solution faster?
3. Does it create a shorter route to action?
4. Does it reduce confusion?
5. Is it consistent with the DoorMate brand?
6. Is it practical rather than theoretical?
7. Is it clear rather than clever?

If the answer to any is no, it does not belong.

---

## WHAT DREW THE LINE — 7 JULY 2026

Four months of section-by-section rebuilding produced a site that reads as an amateur, diluted copy of the 2016 site. Root causes identified and confirmed against the actual code, not assumed:

- No real design reference was ever locked and held. Stitch was killed twice in May. barn-doors.co.uk was elevated to "design reference" by default, when it was only ever meant for content/facts.
- A CSS design token system exists (`globals.css`, built 29 June) but is not used — `page.jsx` hardcodes colours 38 separate times and uses the actual variables zero times.
- The workflow drifted from "Cowork plans, Claude Code builds" (agreed 14 May) into "Cowork does everything, including design," removing the one checkpoint that should have caught bad decisions before they went live.
- A document that could have fixed most of this — the Truth Source — was produced in early June and never incorporated.

The accumulated build (`page.jsx` and its section history) is now reference material only. The facts, prices, products, photos, and brand are not being thrown away. The assembled page and the habit of patching it are what's being retired.

---

## THE FOUR PILLARS

**1. A real, locked design reference.**
Found via land-book.com (or similar), chosen together, checked against the Truth Source and against the "relaxed, breathable, balanced" feeling Terry named in pchenderson.com. Locked once. Not reopened, not talked out of, not quietly replaced by the old site again.

**2. Claude Skills installed, via Claude Code.**
The Anthropic front-end-design skill at minimum — it directly targets the generic/default-AI-look problem. A second UI/UX skill to be evaluated before committing. Requires Claude Code (global install), not Cowork.

**3. Design tokens made real, not decorative.**
Every section rewritten to actually consume the `globals.css` variables instead of hardcoding hex values and one-off `clamp()` sizes. One change to a colour or size should apply everywhere, not require hunting through every section.

**4. A structured brief, written once.**
Sections wanted per page, what photos/content already exist versus what's still missing, positioning locked. Claude Code builds against this brief. It is not renegotiated section by section as building happens.

---

## CORRECTION LOGGED 7 JULY 2026 — HIERARCHY VS SHOP ACCESS

The Truth Source's Tier 1/2/3 product hierarchy governs **story** — the hero, the headline, the meta description, the positioning. It does not govern **shop access**. All six sellable categories (Doors, Pocket Door Kits, Barn Door Hardware, Internal Kits, External Kits, Shop) stay equally visible and equally easy to buy from in the shop/category grid — that's real revenue for all six, not a story choice.

Barn door hardware moves from *identity* (what DoorMate is, in the hero/headline) to *authority card* (proof of manufacturing credibility, supporting the brand further down the page). It does not shrink, hide, or become harder to buy as a product.

---

## WORKFLOW — RESTORED

Cowork: discuss, plan, write the brief, review live results.
Claude Code: build against the locked brief, install skills, access files beyond the NEW WEBSITE folder.
The handoff between the two is the checkpoint. It does not collapse again.

---

## HONESTY PRACTICE

"Locked," "done," and "set" are not said until verified directly against the actual code or actual live page — not assumed because a file exists or a rule was written down once. Uncertainty gets flagged as uncertainty, not dressed up as confidence.

---

## STATUS

**Step 1 — synthesis corrected 9 July 2026, still open to more input.** Terry corrected a real error: the reference pattern is a synthesis of FOUR sources weighed by authority, not one external site copied. In order: (1) the old DoorMate site — proven, £250k in 2017, hero carousel where every slide did one clear sales job; (2) the Truth Source PDF — Short Route Principle + Visual Philosophy + Tier hierarchy (story only, never shop-grid weight); (3) pchenderson.com — feel/calibration only, never structure; (4) land-book examples (Tadaima, MARFA STANCE, Aarke, Merrell) — Terry's own words, "not saying use this, these speak to my philosophy" — outside confirmation only, never the source. Full synthesis written into `DOORMATE_HOMEPAGE_BRIEF.md`. cocif.com (Terry's own find) logged as a clear example of what NOT to do — style/mood before product, "trying to be a bit too clever."

**Still outstanding:** more input from Terry if he has it before this is treated as fully closed.

**Rule confirmed 9 July 2026 — placeholders are out of scope for this discussion.** Terry corrected this directly, having said it many times before: every image currently on the site is a placeholder until marked complete. Whether a specific image is good, bad, wrong, or not loading is irrelevant to the layout/design-reference conversation and must not be raised as if it were a finding. This step is about pattern and structure only — not judging content that isn't finished yet. Keep the two separate.

**Step 2:** Install Claude Skills via Claude Code.
**Step 3:** Rewire `globals.css` tokens into real use. **Concrete evidence logged 9 July 2026:** measured the live page directly — hero text uses `padding:'0 5%'` (percentage), trust strip uses hardcoded `padding:'8px 40px'` plus `justifyContent:'center'` with a `20px` gap, header/nav use yet another unmeasured scheme. Three different one-off spacing methods, not one shared wireframe/grid. `globals.css` already defines `--section-pad-h: 40px` as the single value every section should use — it is not being referenced anywhere. This is exactly why content edges don't line up section to section (measured: header content starts 28px in, hero text 69px in, trust pills 197px in) — there is no shared grid, so nothing "naturally fills the space it should." Terry named this as a repeat of a decision already made, not a new one — the fundamentals were agreed, never enforced in code.
**Step 4:** Write the structured brief. DONE (`DOORMATE_HOMEPAGE_BRIEF.md`) but incomplete — corrected 9 July 2026: a written brief describes content and rules, it is not a wireframe. Terry named the real gap directly: Stitch's actual value was a locked visual picture (exact grid, proportions, spacing) to copy measurement-for-measurement — not just tokens/colours/fonts. Without an actual wireframe, Claude Code invents the visual layout itself, which is how the 3 original AI-slop sites happened and how tonight's 3-different-spacing-systems problem happened. **New sub-step before Step 5:** lock one concrete wireframe — a plain static mockup, no functionality, just exact section widths/grid/spacing/hierarchy — approved once, the way Stitch was meant to work, before any functional code is touched.

**Wireframe v1 built and reviewed 9 July 2026.** First pass shown to Terry as a live widget: one shared content margin used identically in every section, hero with one message per slide (never brand tagline mixed with product+price), trust pills spread edge-to-edge across the shared margin (not centre-clustered), six shop cards at identical size/weight. Terry compared it directly against the live site with his own annotated screenshot and confirmed: "what I see is alignment... that a great starting point." This is the reference to hold — the fix was never colour or content, it was one consistent grid applied everywhere.

**Wireframe v1 LOCKED and saved to file 10 July 2026** — `DOORMATE_WIREFRAME_V1.md`, now in the NEW WEBSITE folder so it doesn't disappear between sessions like the first widget did. Terry reviewed the rebuilt widget, confirmed the shared-margin fix and header balance ("this layout seems 100% better balanced"), and agreed to lock the fundamentals now — individual sections get discussed live as Claude Code actually builds them, not re-reviewed here first. Brand hex card (`1 Logo Hex Colours.jpg`, added to the folder same session) checked against `globals.css`: navy #363557 and gold #efb627 match exactly; the card's auto-extracted extra palette swatches (grey/brown/cream) are flagged as image-extraction noise, not brand colours, per the Bible's navy/gold/white-only rule.

Next: this wireframe file + `DOORMATE_HOMEPAGE_BRIEF.md` + `CLAUDE.md` + Truth Source PDF all go to Claude Code together for the actual build (Step 5) — after Claude Skills are installed (Step 2).
**Step 5:** Build, against the brief AND the locked wireframe, in Claude Code — not patched section by section in Cowork.

---

## SEO/AI-SEO AUDIT — 10 JULY 2026 — CORRECTS STALE BIBLE NOTES

Terry asked, before sending any more one-line fixes to Claude Code, to confirm the whole site is genuinely SEO and AI-search ready — this is the entire reason the new site is being built (WebFactory held the old sitemap/SEO hostage with no fix possible). Checked the actual code directly rather than trusting file summaries or old notes. Findings:

**Already working, confirmed by reading the code, no action needed:**
- Organization + LocalBusiness Schema.org tags — present and complete in `app/layout.jsx` (name, phone, address, opening hours, founder).
- Homepage meta title/description/Open Graph — present, correctly leads with "DoorMate Sliding Door Systems."
- `app/sitemap.js` and `app/robots.js` — both present and wired up correctly.

**Genuinely missing — real gaps, not yet done:**
- `llms.txt` file — confirmed not present anywhere in `/public`.
- Product schema (price/availability/star rating markup) on product pages — not present.
- Breadcrumb structured data on category/product pages — there's a visible breadcrumb trail but no actual structured markup behind it, so Google/AI can't read it as one.
- FAQ content and FAQ structured data — not present anywhere yet.

**Correction, 10 July 2026, same session:** the line below overclaimed. Terry corrected it directly: "we have no real product pages built whatever exists has never been looked at or worked on."

**Second correction, same session, minutes later:** my first check of this was itself wrong. I grepped `Nav.jsx` for a literal `href="...barn-door-hardware..."` pattern and got no match, and told Terry the pages were unlinked/orphaned. That grep pattern was flawed — the actual code stores nav links as `{ label: 'Barn Door Hardware', href: '/barn-door-hardware' }`, a JS object with a colon, not an HTML attribute with an equals sign, so my search pattern couldn't have matched it either way. Loaded the Claude-in-Chrome browser tool and read the actual live page directly: the nav bar genuinely does link to `/doors`, `/barn-door-hardware`, `/pocket-door-kits`, `/internal-sliding-kits`, `/external-sliding-kits`, `/gallery`, `/shop` — confirmed both in the live rendered page and in `Nav.jsx` source. So the category pages ARE reachable from the live site navigation. What's still unverified: whether Terry has ever actually reviewed one of these pages, whether the content/design on them matches current rules (the ALL CAPS / grey-text / wrong-navy violations found earlier are still real, confirmed by direct file search, and unaffected by this correction), and whether the product pages need a real rebuild pass regardless of being technically reachable. Lesson: verify with the real tool (Claude-in-Chrome, reading the live page) before asserting a structural claim, not a quick grep with an unverified pattern.

The one accurate thing that still stands: the product DATA inside `lib/products.js` (prices, headroom specs, buy links) does match the real Bible facts (Gainesville £150/175mm/track=2×, Detroit £150 low headroom, correct barn-doors.co.uk buy link IDs).

~~Surprise finding — corrects stale Bible notes: CLAUDE.md Parts 15–17 say category and product pages are "NOT YET BUILT." That's out of date. Real pages already exist (dated 13 May 2026)... This is a genuinely good foundation nobody had been tracking.~~ — struck through, see correction above. Existing code found but not verified as working, linked to what should be reachable from the site.

**But — real rule violations found in that same code, confirmed by direct search, not assumed:**
- ALL CAPS text in 12 files, 29 places (e.g. "UK MANUFACTURED IN CARDIFF", "Which system do I need?" as a caps heading) — direct violation of the Bible's "No ALL CAPS anywhere on the site — ever."
- Banned grey text/background classes in the same 12 files, 71 places — direct violation of "Grey text of any shade — not DoorMate's brand."
- `tailwind.config.js` maps `brand-navy` to `#363557` (the BACKGROUND navy) and these pages use that same class for heading/body TEXT — should be `#272446` (the TEXT navy) per the Bible's own colour split. Confirmed by reading the config file directly.

**Recommendation, not yet actioned:** one batched Claude Code brief covering all of the above — llms.txt, product/breadcrumb/FAQ schema, and the caps/grey/navy-shade fixes across all 12 category and product page files — rather than sending fixes one at a time. Awaiting Terry's go-ahead.
