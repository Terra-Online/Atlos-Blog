import fs from 'node:fs';
import path from 'node:path';
import { Feed } from 'feed';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blog.opendfieldmap.org').replace(
  /\/+$/,
  '',
);
const FEED_URL = `${SITE_URL}/rss.xml`;
const CONTENT_ROOT = path.join(process.cwd(), 'content/blogs');
const OUTPUT_PATH = path.join(process.cwd(), 'public/rss.xml');
const SNAPSHOT_PATH = path.join(process.cwd(), 'git-authors-snapshot.json');
const LANGUAGES = ['en', 'zh-cn', 'zh-hk', 'ja', 'ko'];
const DEFAULT_LANGUAGE = 'en';
const AUTHOR = {
  name: 'Jacy Chan',
};

function collectContentFiles(dirPath) {
  const files = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectContentFiles(fullPath));
      continue;
    }

    if (entry.isFile() && /\.(?:md|mdx)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function toAbsoluteUrl(target) {
  if (/^https?:\/\//i.test(target)) return target;

  return `${SITE_URL}${target.startsWith('/') ? target : `/${target}`}`;
}

function toValidDate(value) {
  if (!value) return undefined;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function splitFrontmatter(source) {
  if (!source.startsWith('---\n')) {
    return {
      frontmatter: {},
      content: source,
    };
  }

  const end = source.indexOf('\n---', 4);
  if (end === -1) {
    return {
      frontmatter: {},
      content: source,
    };
  }

  const contentStart = source.indexOf('\n', end + 4);

  return {
    frontmatter: parseFrontmatter(source.slice(4, end)),
    content: contentStart === -1 ? '' : source.slice(contentStart + 1),
  };
}

function parseFrontmatter(raw) {
  const data = {};

  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const match = trimmed.match(/^"?([A-Za-z][\w-]*)"?\s*:\s*(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    let value = rawValue.trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return data;
}

function parseLocalizedFile(relativePath) {
  const extension = path.posix.extname(relativePath);
  const dirname = path.posix.dirname(relativePath);
  const basename = path.posix.basename(relativePath, extension);
  const parts = basename.split('.');
  const localeCandidate = parts.length > 1 ? parts.at(-1) : undefined;
  const locale = LANGUAGES.includes(localeCandidate) ? localeCandidate : DEFAULT_LANGUAGE;
  const name = locale === DEFAULT_LANGUAGE && !LANGUAGES.includes(localeCandidate)
    ? basename
    : parts.slice(0, -1).join('.');
  const slugPath = dirname === '.' ? name : `${dirname}/${name}`;

  return {
    extension,
    locale,
    slugPath,
    slugs: slugPath.split('/').filter(Boolean),
  };
}

function getLocalizedUrl(slugPath, locale) {
  const blogUrl = `/blogs/${slugPath}`;
  if (locale === DEFAULT_LANGUAGE) return blogUrl;

  return `/${locale}${blogUrl}`;
}

function contentPathToSiteUrl(contentPath, locale) {
  const normalized = toPosix(contentPath).replace(/\.(?:md|mdx)$/i, '');
  const withoutLocale = normalized.replace(
    new RegExp(`\\.(${LANGUAGES.join('|')})$`),
    '',
  );

  const sections = [
    ['content/blogs/', '/blogs/'],
    ['content/docs/', '/docs/'],
    ['content/community/', '/community/'],
    ['content/sponsors/', '/sponsors/'],
  ];

  for (const [prefix, sitePrefix] of sections) {
    if (!withoutLocale.startsWith(prefix)) continue;

    const sitePath = `${sitePrefix}${withoutLocale.slice(prefix.length)}`;
    return locale === DEFAULT_LANGUAGE ? sitePath : `/${locale}${sitePath}`;
  }

  return undefined;
}

function toFeedUrl(target, page) {
  if (typeof target !== 'string') return target;
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(target) || target.startsWith('#')) {
    return target;
  }

  if (!target.startsWith('/')) {
    const sourceDirectory = `${path.posix.dirname(page.contentPath)}/`;
    const resolvedPath = new URL(target, `file:///${sourceDirectory}`).pathname.slice(1);
    const sitePath = contentPathToSiteUrl(resolvedPath, page.locale);

    if (sitePath) return toAbsoluteUrl(sitePath);
  }

  return toAbsoluteUrl(target);
}

function getMdxStringAttribute(attributes, name) {
  const attribute = attributes.find((item) => item.name === name);
  if (!attribute) return undefined;

  if (typeof attribute.value === 'string') return attribute.value;
  if (
    attribute.value &&
    typeof attribute.value === 'object' &&
    typeof attribute.value.value === 'string'
  ) {
    return attribute.value.value;
  }
}

function mdxJsxToMarkdownNodes() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || typeof index !== 'number' || !node || typeof node !== 'object') {
        return;
      }

      if (node.type !== 'mdxJsxFlowElement' && node.type !== 'mdxJsxTextElement') {
        return;
      }

      const children = node.children ?? [];

      if (node.name === 'Callout') {
        const title = getMdxStringAttribute(node.attributes ?? [], 'title');
        parent.children.splice(index, 1, {
          type: 'blockquote',
          children: [
            ...(title
              ? [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'strong',
                        children: [{ type: 'text', value: title }],
                      },
                    ],
                  },
                ]
              : []),
            ...children,
          ],
        });
        return;
      }

      parent.children.splice(index, 1, ...children);
    });
  };
}

function parseResidualStrongText() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (
        !parent ||
        typeof index !== 'number' ||
        !node ||
        typeof node.value !== 'string' ||
        !node.value.includes('**')
      ) {
        return;
      }

      const replacements = [];
      let lastIndex = 0;

      for (const match of node.value.matchAll(/\*\*([^*\n]+)\*\*/g)) {
        const start = match.index ?? 0;
        const [raw, content] = match;

        if (start > lastIndex) {
          replacements.push({
            type: 'text',
            value: node.value.slice(lastIndex, start),
          });
        }

        replacements.push({
          type: 'strong',
          children: [{ type: 'text', value: content }],
        });

        lastIndex = start + raw.length;
      }

      if (lastIndex === 0) return;

      if (lastIndex < node.value.length) {
        replacements.push({
          type: 'text',
          value: node.value.slice(lastIndex),
        });
      }

      parent.children.splice(index, 1, ...replacements);
    });
  };
}

function absolutizeMarkdownUrls(page) {
  return (tree) => {
    visit(tree, ['link', 'definition', 'image'], (node) => {
      if (!node || typeof node !== 'object' || !('url' in node)) return;

      node.url = toFeedUrl(node.url, page);
    });
  };
}

function absolutizeHtmlUrls(page) {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!node?.properties) return;

      for (const key of ['href', 'src', 'poster']) {
        node.properties[key] = toFeedUrl(node.properties[key], page);
      }

      if (typeof node.properties.srcSet === 'string') {
        node.properties.srcSet = node.properties.srcSet
          .split(',')
          .map((candidate) => {
            const parts = candidate.trim().split(/\s+/);
            const [url, ...descriptors] = parts;
            if (!url) return candidate;

            return [toFeedUrl(url, page), ...descriptors].join(' ');
          })
          .join(', ');
      }
    });
  };
}

function renderPageContent(page) {
  const html = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkGfm)
    .use(mdxJsxToMarkdownNodes)
    .use(parseResidualStrongText)
    .use(absolutizeMarkdownUrls, page)
    .use(remarkRehype)
    .use(absolutizeHtmlUrls, page)
    .use(rehypeStringify)
    .processSync(page.content);

  return `<article>${String(html)}</article>`;
}

function readSnapshot() {
  try {
    return JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function readPages() {
  const snapshot = readSnapshot();

  return collectContentFiles(CONTENT_ROOT)
    .map((filePath) => {
      const contentPath = toPosix(path.relative(process.cwd(), filePath));
      const relativePath = toPosix(path.relative(CONTENT_ROOT, filePath));
      const { locale, slugPath, slugs } = parseLocalizedFile(relativePath);
      const raw = fs.readFileSync(filePath, 'utf8');
      const { frontmatter, content } = splitFrontmatter(raw);
      const snapshotEntry = snapshot[contentPath] ?? {};
      const published = toValidDate(snapshotEntry.createdAt) ?? toValidDate(frontmatter.date);
      const updated = toValidDate(snapshotEntry.lastModified) ?? published;

      if (!frontmatter.title || !published || !updated) return undefined;

      return {
        content,
        contentPath,
        date: published,
        description: frontmatter.description ?? '',
        locale,
        section: frontmatter.section,
        slugs,
        title: frontmatter.title,
        updated,
        url: getLocalizedUrl(slugPath, locale),
        cover: frontmatter.cover,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

function generateRSS() {
  const pages = readPages();
  const feed = new Feed({
    title: 'OEM Blog',
    description: 'Latest posts from Open Endfield Map.',
    id: `${SITE_URL}/blogs`,
    link: `${SITE_URL}/blogs`,
    feed: FEED_URL,
    language: DEFAULT_LANGUAGE,
    updated: pages
      .map((page) => page.updated)
      .sort((a, b) => b.getTime() - a.getTime())[0],
    image: `${SITE_URL}/icons/main.webp`,
    favicon: `${SITE_URL}/icons/favicon.png`,
    copyright: 'All rights reserved 2026, Jacy Chan',
  });

  feed.addCategory('Open Endfield Map');

  for (const page of pages) {
    const url = toAbsoluteUrl(page.url);
    const item = {
      id: url,
      guid: url,
      title: page.title,
      description: page.description,
      content: renderPageContent(page),
      link: url,
      published: page.date,
      date: page.updated,
      author: [AUTHOR],
      category: [
        {
          name: page.section ?? page.slugs[0] ?? 'posts',
        },
        {
          name: page.locale,
        },
      ],
    };

    if (page.cover) {
      item.image = toAbsoluteUrl(page.cover);
    }

    feed.addItem(item);
  }

  return feed.rss2();
}

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, generateRSS(), 'utf8');

console.log('wrote', OUTPUT_PATH);
