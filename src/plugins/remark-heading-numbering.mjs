/**
 * remark-heading-numbering.mjs
 *
 * A Remark plugin that automatically prepends hierarchical numbering
 * to headings in Markdown/MDX files based on the file's locale.
 *
 * Rules:
 *   H1 — no prefix
 *   H2 — English: Roman numerals (I, II, III …)
 *        zh-CN / zh-HK / ja: Chinese numerals (一、二、三 …)
 *   H3 — all locales: "<parentH2>.<h3Index>" (Arabic), e.g. "3.2"
 *   H4 — all locales: "<parentH2>.<parentH3>.<h4Index>", e.g. "3.2.1"
 *
 * The locale is inferred from the file path (e.g. /en/, /zh-cn/, /zh-hk/, /ja/).
 * No external dependencies — uses a simple recursive AST walk.
 */

// ── Roman numeral converter ──────────────────────────────────────────────────
const ROMAN_MAP = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'],  [90, 'XC'],  [50, 'L'],  [40, 'XL'],
  [10, 'X'],   [9, 'IX'],   [5, 'V'],   [4, 'IV'],
  [1, 'I'],
];

function toRoman(num) {
  let result = '';
  for (const [value, symbol] of ROMAN_MAP) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

// ── Chinese numeral converter ────────────────────────────────────────────────
const CJK_DIGITS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

function toChinese(num) {
  if (num <= 0) return '';
  if (num <= 10) return CJK_DIGITS[num];
  if (num < 20) return `十${num === 10 ? '' : CJK_DIGITS[num - 10]}`;
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return `${CJK_DIGITS[tens]}十${ones ? CJK_DIGITS[ones] : ''}`;
}

// ── Locale detection ─────────────────────────────────────────────────────────
function detectLocale(filePath) {
  if (!filePath) return 'en';
  const normalised = filePath.replace(/\\/g, '/');
  if (normalised.includes('/zh-cn/')) return 'zh-cn';
  if (normalised.includes('/zh-hk/')) return 'zh-hk';
  if (normalised.includes('/ja/'))    return 'ja';
  return 'en';
}

function isCJKLocale(locale) {
  return locale === 'zh-cn' || locale === 'zh-hk' || locale === 'ja';
}

// ── Simple AST walker (no external deps) ─────────────────────────────────────
function collectHeadings(node, headings) {
  if (node.type === 'heading') {
    headings.push(node);
  }
  if (node.children) {
    for (const child of node.children) {
      collectHeadings(child, headings);
    }
  }
}

// ── Plugin entry point ───────────────────────────────────────────────────────
/** @returns {import('unified').Plugin} */
export function remarkHeadingNumbering() {
  return function transformer(tree, file) {
    const filePath = file.history?.[0] ?? file.path;
    const locale = detectLocale(filePath);

    // Collect all heading nodes in document order
    const headings = [];
    collectHeadings(tree, headings);

    let h2 = 0;
    let h3 = 0;
    let h4 = 0;

    for (const node of headings) {
      const depth = node.depth;

      // H1: no prefix
      if (depth === 1) {
        h2 = 0;
        h3 = 0;
        h4 = 0;
        continue;
      }

      let prefix = '';

      if (depth === 2) {
        h2++;
        h3 = 0;
        h4 = 0;
        prefix = isCJKLocale(locale)
          ? `${toChinese(h2)}、`
          : `${toRoman(h2)}. `;
      } else if (depth === 3) {
        h3++;
        h4 = 0;
        prefix = `${h2}.${h3} `;
      } else if (depth === 4) {
        h4++;
        prefix = `${h2}.${h3}.${h4} `;
      } else {
        // H5+ are left as-is
        continue;
      }

      // Prepend the prefix to the first text-like child
      if (node.children && node.children.length > 0) {
        const first = node.children[0];
        if (first.type === 'text') {
          first.value = prefix + first.value;
        } else {
          // Insert a new text node at the start
          node.children.unshift({ type: 'text', value: prefix });
        }
      }
    }
  };
}
