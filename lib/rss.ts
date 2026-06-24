import fs from 'node:fs';
import { Feed } from 'feed';
import type { Item } from 'feed';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { i18n } from '@/lib/i18n';
import { blogSource } from '@/lib/source';
import {
  getGitCreatedAtForContentPath,
  getGitLastModifiedForContentPath,
} from '@/lib/git-authors';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blog.opendfieldmap.org'
).replace(/\/+$/, '');
const feedUrl = `${siteUrl}/rss.xml`;
const author = {
  name: 'Jacy Chan',
};

type RSSPage = ReturnType<typeof blogSource.getPages>[number];

type ParentNode = {
  type: string;
  children?: unknown[];
};

type LiteralNode = {
  type: string;
  value?: unknown;
};

type MarkdownNode = ParentNode | LiteralNode;

type MdxJsxAttribute = {
  type: string;
  name?: string;
  value?: unknown;
};

type TextParentNode = ParentNode & {
  children: MarkdownNode[];
};

function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

function toFeedUrl(target: unknown, page: RSSPage) {
  if (typeof target !== 'string') return target;
  if (
    /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(target) ||
    target.startsWith('#')
  ) {
    return target;
  }

  const base = `${toAbsoluteUrl(page.url).replace(/\/+$/, '')}/`;

  return new URL(target, base).toString();
}

function toValidDate(date?: Date | string | number) {
  if (!date) return;

  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function getPageDate(page: RSSPage) {
  return (
    toValidDate((page.data as { date?: Date | string }).date) ??
    toValidDate(page.data.lastModified)
  );
}

function getContentPath(page: RSSPage) {
  return `content/blogs/${page.file.path}`;
}

function getPublishedDate(page: RSSPage) {
  return getGitCreatedAtForContentPath(getContentPath(page)) ?? getPageDate(page);
}

function getUpdatedDate(page: RSSPage) {
  return (
    getGitLastModifiedForContentPath(getContentPath(page)) ??
    toValidDate(page.data.lastModified) ??
    getPublishedDate(page)
  );
}

function splitFrontmatter(source: string) {
  if (!source.startsWith('---\n')) return source;

  const end = source.indexOf('\n---', 4);
  if (end === -1) return source;

  const contentStart = source.indexOf('\n', end + 4);
  return contentStart === -1 ? '' : source.slice(contentStart + 1);
}

function getMdxStringAttribute(attributes: MdxJsxAttribute[], name: string) {
  const attribute = attributes.find((item) => item.name === name);
  if (!attribute) return;

  if (typeof attribute.value === 'string') return attribute.value;
  if (
    attribute.value &&
    typeof attribute.value === 'object' &&
    'value' in attribute.value &&
    typeof attribute.value.value === 'string'
  ) {
    return attribute.value.value;
  }
}

function mdxJsxToMarkdownNodes() {
  return (tree: ParentNode) => {
    visit(tree, (node: unknown, index?: number, parent?: ParentNode) => {
      if (
        !parent ||
        typeof index !== 'number' ||
        !node ||
        typeof node !== 'object' ||
        !('type' in node)
      ) {
        return;
      }

      const current = node as ParentNode & {
        name?: string;
        attributes?: MdxJsxAttribute[];
      };

      if (
        current.type !== 'mdxJsxFlowElement' &&
        current.type !== 'mdxJsxTextElement'
      ) {
        return;
      }

      const children = current.children ?? [];

      if (current.name === 'Callout') {
        const title = getMdxStringAttribute(current.attributes ?? [], 'title');
        parent.children?.splice(index, 1, {
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

      parent.children?.splice(index, 1, ...children);
    });
  };
}

function parseResidualStrongText() {
  return (tree: ParentNode) => {
    visit(tree, 'text', (node: unknown, index?: number, parent?: TextParentNode) => {
      if (
        !parent ||
        typeof index !== 'number' ||
        !node ||
        typeof node !== 'object' ||
        !('value' in node)
      ) {
        return;
      }

      const value = (node as LiteralNode).value;
      if (typeof value !== 'string' || !value.includes('**')) return;

      const replacements: MarkdownNode[] = [];
      let lastIndex = 0;

      for (const match of value.matchAll(/\*\*([^*\n]+)\*\*/g)) {
        const start = match.index ?? 0;
        const [raw, content] = match;

        if (start > lastIndex) {
          replacements.push({
            type: 'text',
            value: value.slice(lastIndex, start),
          });
        }

        replacements.push({
          type: 'strong',
          children: [{ type: 'text', value: content }],
        });

        lastIndex = start + raw.length;
      }

      if (lastIndex === 0) return;

      if (lastIndex < value.length) {
        replacements.push({
          type: 'text',
          value: value.slice(lastIndex),
        });
      }

      parent.children.splice(index, 1, ...replacements);
    });
  };
}

function absolutizeMarkdownUrls(page: RSSPage) {
  return (tree: ParentNode) => {
    visit(tree, ['link', 'definition', 'image'], (node: unknown) => {
      if (!node || typeof node !== 'object' || !('url' in node)) return;

      const target = node as { url?: unknown };
      target.url = toFeedUrl(target.url, page);
    });
  };
}

function absolutizeHtmlUrls(page: RSSPage) {
  return (tree: ParentNode) => {
    visit(tree, 'element', (node: unknown) => {
      if (!node || typeof node !== 'object' || !('properties' in node)) return;

      const current = node as {
        properties?: Record<string, unknown>;
      };
      if (!current.properties) return;

      for (const key of ['href', 'src', 'poster']) {
        current.properties[key] = toFeedUrl(current.properties[key], page);
      }

      const srcSet = current.properties.srcSet;
      if (typeof srcSet === 'string') {
        current.properties.srcSet = srcSet
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

function renderPageContent(page: RSSPage) {
  const contentPath = getContentPath(page);
  const raw = fs.readFileSync(contentPath, 'utf8');
  const markdown = splitFrontmatter(raw);
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
    .processSync(markdown);

  return `<article>${String(html)}</article>`;
}

function getRSSPages() {
  return i18n.languages
    .flatMap((language) =>
      blogSource.getPages(language).map((page) => ({
        page,
        date: getPublishedDate(page),
        updated: getUpdatedDate(page),
      })),
    )
    .filter(
      (entry): entry is { page: RSSPage; date: Date; updated: Date } =>
        Boolean(entry.date && entry.updated),
    )
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getRSS() {
  const entries = getRSSPages();
  const feed = new Feed({
    title: 'OEM Blog',
    description: 'Latest posts from Open Endfield Map.',
    id: `${siteUrl}/blogs`,
    link: `${siteUrl}/blogs`,
    feed: feedUrl,
    language: i18n.defaultLanguage,
    updated: entries
      .map((entry) => entry.updated)
      .sort((a, b) => b.getTime() - a.getTime())[0],
    image: `${siteUrl}/icons/main.webp`,
    favicon: `${siteUrl}/icons/favicon.png`,
    copyright: 'All rights reserved 2026, Jacy Chan',
  });

  feed.addCategory('Open Endfield Map');

  for (const { page, date, updated } of entries) {
    const url = toAbsoluteUrl(page.url);
    const data = page.data as typeof page.data & {
      cover?: string;
      section?: string;
    };
    const item: Item = {
      id: url,
      guid: url,
      title: page.data.title,
      description: page.data.description,
      content: renderPageContent(page),
      link: url,
      published: date,
      date: updated,
      author: [author],
      category: [
        {
          name: data.section ?? page.slugs[0] ?? 'posts',
        },
        {
          name: page.locale ?? page.sourceLocale,
        },
      ],
    };

    if (data.cover) {
      item.image = toAbsoluteUrl(data.cover);
    }

    feed.addItem(item);
  }

  return feed.rss2();
}
