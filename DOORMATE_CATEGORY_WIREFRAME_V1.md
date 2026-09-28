# DOORMATE CATEGORY / MANUFACTURER PAGE — WIREFRAME V1 — LOCKED 28 SEPTEMBER 2026

This is the category/manufacturer-page counterpart to `DOORMATE_WIREFRAME_V1.md` (homepage). It exists because the homepage wireframe was never scoped to cover this page type, which is the specific gap that let Pocket Door Kits and Rocket get built through page-by-page adjustment instead of a locked spec.

**Scope:** manufacturer/range landing pages (Rocket, and any future Eclisse, Coburn, Barrier equivalents), built through the shared `ManufacturerRangePage.jsx` component. Category overview pages (e.g. `/pocket-door-kits` itself) share the same intro/grid pattern where applicable. This does NOT cover individual product buying/configuration pages — those need their own wireframe when they enter scope, per the 1 September rule.

**Basis:** this document records what is already built and approved in the Rocket page as of the last commit (`6079d2a`), read directly from `ManufacturerRangePage.jsx` and its rules in `globals.css`. It is a description of a real, working structure — not a new design.

---

## THE FUNDAMENTALS THAT CARRY OVER FROM THE HOMEPAGE

Same tokens, same discipline, different layout:
- Same three brand colours (navy `--dm-navy`, gold `--dm-gold`, white `--dm-white`). No grey.
- Same `--dm-section-frame` content width and gutter tokens for horizontal centring.
- Same heading tokens (`--dm-heading-size`, `--dm-heading-line`, `--dm-heading-spacing`) for `h1`/`h2`.
- Same body copy tokens (`--dm-body-size`, `--dm-body-line`, `--dm-text-soft`) for paragraph text.
- Same spacing scale (`--space-1` through `--space-5`) for all gaps and padding — no invented pixel gap.

Anything below that is NOT expressed as one of these tokens is either a locked page-specific value (listed explicitly) or a violation to flag, not to quietly fix in place.

---

## SECTION 1 — MANUFACTURER INTRO

- Two-column grid: copy column `minmax(0,.9fr)`, hero image column `minmax(440px,1.1fr)`, gap `clamp(36px, 5vw, 72px)`.
- Logo: fixed box `190px × 48px`, left-aligned, object-fit contain.
- `h1` uses the shared heading token, never a page-specific size.
- Introduction paragraph uses the shared body token, capped at `--content-max-width`.
- Support row (resource tabs + proof points/graphic): single row, no wrap, gap `--space-1`.
- Resource tab buttons: `42px` min-height, 2px gold border, 13px/900-weight text — this is a locked page-specific value (buttons this small don't need a token, but must stay identical across every manufacturer page).
- Hero image box: fixed `260px` height on desktop, object-fit cover. This is the one deliberately fixed non-token value in this section — flagged explicitly, not hidden as a token.

## SECTION 2 — PROOF STRIP (genuine manufacturer assurances)

- Either a supplied proof graphic (`230px × 52px`) or a 3-column proof-point grid (`repeat(3,1fr)`), never both.
- Each proof item: `78px` min-height, icon circle `42px` navy/gold, divided by a `1px` hairline (`--dm-line`) between items.

## SECTION 3 — PRODUCT CHOICE GRID

- Heading row (optional): two-column grid, heading `minmax(0,.8fr)`, intro copy `minmax(360px,.72fr)`, gap `--space-4`.
- Grid is a fixed 6-column track (`repeat(6,minmax(0,1fr))`), gap `--space-3`. Card span is set by product count, not guessed per page:
  - **3 products:** span 2 each (three cards, one row).
  - **2 or 4 products:** span 3 each.
  - **5 products:** first three span 2 each (row one); products 4–5 centred, spanning columns 2–3 and 4–5 (row two, centred pair).
  - Any other count must be agreed and added here explicitly before building — never improvised card-by-card.
- Card structure, top to bottom, identical every time: title row (`56px` min-height) → image (`16:9` aspect ratio, cover) → copy → price + action row.
- Price + action row is always `From £X` (`18px`) on the left, gold action pill (`13px/900`, e.g. "Buy Now →") on the right, pinned to the bottom of the card (`margin-top: auto`) so every card in a row bottom-aligns regardless of copy length.

## SECTION 4 — GUIDANCE / CALL BAND (optional, page-dependent)

- Navy full-width band, `--space-4` vertical padding.
- Two-column grid: heading+copy left, phone-call CTA right, gap `--space-4`.
- CTA is a solid gold button, `13px 18px` padding, `14px/900` text.

---

## FLAGGED — NOT YET CONFIRMED AS INTENTIONAL

Found while writing this spec, same as the homepage wireframe flagged the extra palette swatches — recorded, not silently kept or silently removed:
- `.dm-manufacturer-choices` background is `#faf9f5` (an off-palette cream), not one of the three locked brand colours or a `--dm-*` token.
- `.dm-manufacturer-guidance p` text colour is `#eeedf4` (an off-palette light tint), same issue.

Both are subtle, both may be deliberate (a card grid section usually needs to be visually distinguished from a pure-white section), but neither is currently backed by a named token, so neither is currently checkable by `brand_check.js`. Recommend either: (a) confirm these as deliberate and turn them into named tokens (`--dm-paper-alt`, or similar) so they're locked and checkable, or (b) replace them with `--dm-paper`/`--dm-white` if they were never a deliberate decision.

---

## ENFORCEMENT

`scripts/brand_check.js` is being extended alongside this document to check:
1. Every `dm-choice-card` grid uses one of the four defined count patterns above, never a one-off span value.
2. `h1`/`h2` on manufacturer pages use the shared heading token, not a literal.
3. The two flagged off-palette values above, until Terry confirms and they become named tokens.

## STATUS

Structure above reflects the Rocket page exactly as built and approved (commit `6079d2a`). This document is the reference for every future manufacturer/range page — Eclisse, Coburn, Barrier, and the Pocket Door Kits category overview where the pattern applies. No new manufacturer page should introduce a layout value not listed here without adding it to this document first.
