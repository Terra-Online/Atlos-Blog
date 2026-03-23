const fs = require('fs');
const path = require('path');

const files = [
  { file: 'update-26March.md', locale: 'en' },
  { file: 'update-26March.zh-cn.md', locale: 'zh-cn' },
  { file: 'update-26March.zh-hk.md', locale: 'zh-hk' },
  { file: 'update-26March.ja.md', locale: 'ja' },
  { file: 'update-26March.ko.md', locale: 'ko' },
];

const root = path.join(process.cwd(), 'content/docs/blogs/announcements');
const result = {};

for (const entry of files) {
  const full = path.join(root, entry.file);
  const raw = fs.readFileSync(full, 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
  if (!match) throw new Error('frontmatter parse failed: ' + entry.file);

  const fm = match[1];
  const content = match[2].trim();

  const titleMatch = fm.match(/title:\s*"([\s\S]*?)"/);
  const descMatch = fm.match(/description:\s*"([\s\S]*?)"/);
  const dateMatch = fm.match(/date:\s*([^\n]+)/);

  const id = 'update-26March';
  const url = '/' + entry.locale + '/blogs/announcements/' + id;

  result[entry.locale] = [
    {
      id,
      title: titleMatch ? titleMatch[1] : '',
      description: descMatch ? descMatch[1] : '',
      content,
      date: dateMatch ? String(dateMatch[1]).trim() : '',
      url,
      locale: entry.locale,
    },
  ];
}

const outPath = path.join(process.cwd(), 'app/api/[locale]/announcements/data.json');
fs.writeFileSync(outPath, JSON.stringify(result, null, 2) + '\n', 'utf8');
console.log('wrote', outPath);
