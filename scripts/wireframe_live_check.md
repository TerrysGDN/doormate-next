# WIREFRAME LIVE CHECK — RUN THIS AGAINST THE LIVE VERCEL SITE

Written 11 July 2026. This is the mechanical, evidence-based check for
`DOORMATE_WIREFRAME_V1.md`. It measures the ACTUAL rendered page — not source
code, not a report, not a description of what was supposedly built.

## THE RULE

**No section may be declared "done", "fixed" or "matches the wireframe" without
pasting the real output of this check into the chat first.** A claim of
completion with no pasted output is invalid — Terry (or any future session)
should treat it as unverified and ask for the output before accepting it.

If you are a future Claude session reading this: do not decide there is a
better way to verify this. Run these checks, in this form, against the live
site, and paste the raw JSON output. If you believe a check itself is wrong
or incomplete, say so explicitly and show your reasoning — do not silently
replace it with something else and call it equivalent.

## HOW TO RUN IT

1. Load the Claude-in-Chrome tools (`tabs_context_mcp`, `navigate`, `javascript_tool`).
2. Navigate to the live Vercel URL (or the deploy you're checking).
3. Run the JS blocks below via `javascript_tool` against that tab.
4. Paste the actual JSON output — not a summary of it — into the chat.

## CHECK 1 — SHARED MARGIN (every section uses the same token, no one-offs)

```js
function bySec(label){ return Array.from(document.querySelectorAll('section')).find(s => (s.getAttribute('aria-label')||'') === label); }
function pad(el){ const s=getComputedStyle(el); return {pl:s.paddingLeft,pr:s.paddingRight,pt:s.paddingTop,pb:s.paddingBottom}; }
const root = getComputedStyle(document.documentElement);
const labels = ['Customer trust indicators','Shop by category','Customer reviews','Who we are','Brands we work with','Our sliding door systems'];
JSON.stringify({
  tokenH: root.getPropertyValue('--section-pad-h').trim(),
  tokenV: root.getPropertyValue('--section-pad-v').trim(),
  sections: labels.map(l => ({ label: l, padding: (function(){ const s = bySec(l); return s ? pad(s) : 'NOT FOUND'; })() }))
}, null, 2);
```
**Pass:** every section's `pl`/`pr` equal `tokenH`, `pt`/`pb` equal `tokenV` — unless a deliberate, explicitly-flagged exception has been agreed with Terry (e.g. trust strip's thinner bar).

## CHECK 2 — TRUST STRIP (edge-to-edge, not clustered)

```js
const trust = Array.from(document.querySelectorAll('section')).find(s => s.getAttribute('aria-label') === 'Customer trust indicators');
const row = trust.querySelector('div');
const s = getComputedStyle(row);
JSON.stringify({ justifyContent: s.justifyContent, display: s.display, pillCount: row.children.length }, null, 2);
```
**Pass:** `justifyContent` is `space-between` (or equivalent edge-to-edge spread), NOT `center`. `pillCount` is 4.

## CHECK 3 — REVIEWS: HOUZZ + GOOGLE SIDE BY SIDE, MATCHING FOOTPRINT

```js
const reviews = Array.from(document.querySelectorAll('section')).find(s => s.getAttribute('aria-label') === 'Customer reviews');
const outerGrid = reviews.children[0];
const rightCol = outerGrid.children[1];
const s = getComputedStyle(rightCol);
JSON.stringify({ display: s.display, gridTemplateColumns: s.gridTemplateColumns, childCount: rightCol.children.length }, null, 2);
```
**Pass:** `gridTemplateColumns` shows two roughly-equal column widths (e.g. `"363.75px 363.75px"`), `childCount` is 2. If it shows one column or wildly unequal widths, they are stacked, not side by side — FAIL.

**Known trap:** do not identify the Houzz/Google boxes by matching text content like `"4.8"` — a loose text match can grab the wrong ancestor div and give a false result. Always walk the actual grid structure as shown above.

## CHECK 4 — SHOP GRID: 6 CARDS, EQUAL WEIGHT

```js
const shop = Array.from(document.querySelectorAll('section')).find(s => s.getAttribute('aria-label') === 'Shop by category');
const cards = Array.from(shop.querySelector('div').children);
const widths = cards.map(c => Math.round(c.getBoundingClientRect().width));
const heights = cards.map(c => Math.round(c.getBoundingClientRect().height));
JSON.stringify({ count: cards.length, widths, heights, allEqualWidth: new Set(widths).size === 1, allEqualHeight: new Set(heights).size === 1 }, null, 2);
```
**Pass:** `count` is 6, `allEqualWidth` and `allEqualHeight` both true.

## CHECK 5 — FOOTER BOTTOM BAR: SINGLE ROW, NEVER WRAPS

```js
const footer = document.querySelector('footer');
const bottomBar = Array.from(footer.querySelectorAll('div')).filter(d => /20\d\d/.test(d.textContent) && d.children.length >= 2 && d.children.length <= 6);
JSON.stringify(bottomBar.map(d => ({ height: Math.round(d.getBoundingClientRect().height), flexWrap: getComputedStyle(d).flexWrap })), null, 2);
```
**Pass:** `flexWrap` is `nowrap` (or the height stays at one line's height, ~40-45px, not double).

## CHECK 6 — HERO: ONE MESSAGE PER SLIDE, NEVER MIXED

This one is easier to verify by reading `components/HeroCarousel.jsx` directly than by DOM-scraping a rotating carousel. Confirm: no slide renders both a generic identity tagline AND a separate specific-product+price block at the same time. Each slide is either a Tegan banner PNG (text baked into the image, no code overlay) or exactly one label+tagline+price+CTA block.

## WHAT THIS DOES NOT COVER YET

- Header 3-column balance/logo sizing (visual — Terry confirms by eye)
- Who We Are column order (photo left / copy right) — not yet scripted
- Brands logo tile sizing consistency — not yet scripted
- Any page other than the homepage — none of the other ~49 pages have a locked wireframe at all yet

If a future session adds a new locked rule to `DOORMATE_WIREFRAME_V1.md`, add a
matching check here in the same style. Do not leave a new rule unchecked.
