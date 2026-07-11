// DOORMATE BRAND + WIREFRAME STATIC CHECK
// Run: node scripts/brand_check.js
//
// This does NOT replace checking the live site (see scripts/wireframe_live_check.md).
// It catches source-code violations of locked Bible/wireframe rules:
// unapproved colours, hardcoded section padding, ALL CAPS text.
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

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, i) => {
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
  console.log('Reminder: this only checks colours/padding/caps. Layout, alignment and');
  console.log('spacing against DOORMATE_WIREFRAME_V1.md still need scripts/wireframe_live_check.md run against the live site.');
  process.exit(0);
}
