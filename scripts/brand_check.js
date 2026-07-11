// DOORMATE BRAND + WIREFRAME STATIC CHECK
// Run: node scripts/brand_check.js
//
// This does NOT replace checking the live site (see scripts/wireframe_live_check.md).
// It catches source-code violations of locked Bible/wireframe rules:
// unapproved colours, hardcoded section padding, ALL CAPS text, and
// mismatched section headline font sizes (see DOORMATE_WIREFRAME_V1.md,
// "HEADLINE FONT-SIZE — LOCKED TOKEN, 11 JULY 2026" — added after Reviews/
// Who We Are/Systems headlines were found live at three different sizes,
// a bug that existed because the rule was only ever written as the word
// "large", never as an actual number a script could check).
//
// Exit code 0 = clean. Exit code 1 = findings exist — DO NOT declare the
// section "done" or "fixed" if this exits 1. Paste the full output to Terry.

const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || path.join(__dirname, '..');

const ALLOWED = new Set([
  '272446','363557','0f0d24','efb627','f1b52a','ffffff','fff','000','000000',
  // Google brand colours (Google reviews badge)
  '4285f4','34a853','fbbc05','ea4335','202124','5f6368','e8eaed','fbbc04','3c4043',
  // Trustpilot green
  '00b67a',
  // Houzz green
  '7dc242','273a2e',
  // Social icon brand colours (Footer/Nav)
  '1877f2','e1306c','ff0000','0a66c2','e60023',
]);

const HEX_RE = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})(?![0-9a-fA-F])/g;

let files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'scripts'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) files.push(full);
  }
}
walk(path.join(ROOT, 'app'));
walk(path.join(ROOT, 'components'));

let findings = [];

const LOCKED_HEADLINE_SIZE = "var(--font-heading-lg)"; // the token in globals.css, never a hardcoded literal
const H2_FONTSIZE_RE = /<h2[^>]*fontSize:\s*'([^']+)'/;
// Any <p> with a hardcoded pixel fontSize instead of var(--font-body) or a
// clamp(). Added 11 July 2026 after a body-copy version of the exact same
// bug (Reviews at 19px, Who We Are at 17px via the token) was found and
// hand-patched WITHOUT extending this checker in the same breath — this is
// the fix for that gap. This WILL also flag legitimate cases (Systems'
// deliberately tiered "beats" copy, review-quote snippets at a smaller
// size) — it is not meant to silently pass everything, it is meant to make
// every hardcoded body size visible so a human decides, instead of nobody
// noticing until Terry does.
const P_PX_FONTSIZE_RE = /<p[^>]*fontSize:\s*'(\d+(?:\.\d+)?px)'/;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  // HEADLINE FONT-SIZE CONSISTENCY — per file, every <h2> must use the one
  // locked token. Catches exactly the bug found live 11 July 2026 (Reviews/
  // Who We Are/Systems headlines silently drifting to three different sizes).
  const h2Sizes = [];
  lines.forEach((line, i) => {
    const m = H2_FONTSIZE_RE.exec(line);
    if (m) h2Sizes.push({ line: i + 1, size: m[1], text: line.trim().slice(0, 90) });
  });
  if (h2Sizes.length > 0) {
    const distinctSizes = new Set(h2Sizes.map(h => h.size));
    if (distinctSizes.size > 1) {
      h2Sizes.forEach(h => {
        findings.push({ file, line: h.line, type: 'HEADLINE SIZE MISMATCH', detail: `fontSize '${h.size}' does not match other <h2> headlines in this file (found: ${[...distinctSizes].join(', ')})`, text: h.text });
      });
    } else if (h2Sizes.some(h => h.size !== LOCKED_HEADLINE_SIZE)) {
      h2Sizes.forEach(h => {
        if (h.size !== LOCKED_HEADLINE_SIZE) {
          findings.push({ file, line: h.line, type: 'HEADLINE SIZE NOT LOCKED VALUE', detail: `fontSize '${h.size}' — locked value per DOORMATE_WIREFRAME_V1.md is '${LOCKED_HEADLINE_SIZE}'`, text: h.text });
        }
      });
    }
  }

  lines.forEach((line, i) => {
    const pm = P_PX_FONTSIZE_RE.exec(line);
    if (pm) {
      findings.push({ file, line: i + 1, type: 'HARDCODED BODY TEXT SIZE', detail: `<p> fontSize '${pm[1]}' hardcoded — should this use var(--font-body), or is it a deliberate exception (tiered beat copy, quote snippet, etc.)? Needs a human decision, not a silent pass.`, text: line.trim().slice(0, 110) });
    }

    let m;
    HEX_RE.lastIndex = 0;
    while ((m = HEX_RE.exec(line)) !== null) {
      const hex = m[1].toLowerCase();
      if (!ALLOWED.has(hex)) {
        findings.push({ file, line: i + 1, type: 'UNAPPROVED COLOUR', detail: '#' + hex + ' not navy/gold/white/allowlisted platform colour', text: line.trim().slice(0, 110) });
      }
    }

    if (/<section/.test(line) && /padding:\s*'\d+px/.test(line) && !/var\(--section-pad-v\)/.test(line)) {
      findings.push({ file, line: i + 1, type: 'HARDCODED PADDING', detail: 'section padding not using var(--section-pad-v)/var(--section-pad-h)', text: line.trim().slice(0, 110) });
    }

    const textNodes = line.match(/>([A-Z][A-Z\s&',.!-]{5,})</g) || [];
    textNodes.forEach(function (tn) {
      const inner = tn.slice(1, -1).trim();
      if (/[A-Z]{2,}\s[A-Z]/.test(inner) && !/^[0-9\s]+$/.test(inner)) {
        findings.push({ file, line: i + 1, type: 'ALL CAPS TEXT', detail: inner, text: line.trim().slice(0, 110) });
      }
    });
  });
}

console.log('Scanned ' + files.length + ' files (app/ + components/).\n');
console.log('Total findings: ' + findings.length + '\n');

const byType = {};
findings.forEach(function (f) { byType[f.type] = (byType[f.type] || 0) + 1; });
console.log('By type:', byType, '\n');

findings.forEach(function (f) {
  console.log('[' + f.type + '] ' + f.file.replace(ROOT, '') + ':' + f.line + '\n  ' + f.detail + '\n  > ' + f.text + '\n');
});

if (findings.length > 0) {
  console.log('RESULT: FAIL — ' + findings.length + ' violation(s) found. Do not declare this section done.');
  process.exit(1);
} else {
  console.log('RESULT: PASS — no violations found by this check.');
  console.log('Reminder: this only checks colours/padding/caps/headline size. Layout,');
  console.log('alignment and spacing against DOORMATE_WIREFRAME_V1.md still need');
  console.log('scripts/wireframe_live_check.md run against the live site.');
  process.exit(0);
}
