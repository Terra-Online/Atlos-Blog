import { i18n } from './i18n';
import {
  createGetUrl,
  getSlugs,
  PathUtils,
} from 'fumadocs-core/source';
import type * as PageTree from 'fumadocs-core/page-tree';
import type { StructuredData } from 'fumadocs-core/mdx-plugins/remark-structure';
import type { TableOfContents } from 'fumadocs-core/toc';
import type { ComponentType, ReactNode } from 'react';

type RuntimeDoc = {
  _file?: {
    path: string;
    absolutePath: string;
  };
  info?: {
    path: string;
    fullPath: string;
  };
  title: string;
  description?: string;
  icon?: string;
  body: ComponentType<any>;
  toc: TableOfContents;
  structuredData: StructuredData;
  full?: boolean;
  lastModified?: Date | string | number;
  date?: Date | string;
  section?: string;
  card?: string;
  cover?: string;
};

type RuntimeDocsCollection<T extends RuntimeDoc> = {
  docs: T[];
};

type ParsedFilePath = {
  path: string;
  absolutePath: string;
  name: string;
  flattenedPath: string;
  ext: string;
  dirname: string;
  locale?: string;
};

export type LocalizedContentPage<T extends RuntimeDoc> = {
  file: ParsedFilePath;
  slugs: string[];
  url: string;
  data: T & RuntimeDoc;
  locale?: string;
  missingTranslation?: boolean;
  sourceLocale: string;
};

type PageEntry<T extends RuntimeDoc> = {
  page: LocalizedContentPage<T>;
  slugKey: string;
};

function pathToName(name: string): string {
  return name
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getFileInfo(data: RuntimeDoc) {
  if (data._file) {
    return {
      path: data._file.path,
      absolutePath: data._file.absolutePath,
    };
  }

  if (data.info) {
    return {
      path: data.info.path,
      absolutePath: data.info.fullPath,
    };
  }

  throw new Error('Missing file metadata from Fumadocs source entry.');
}

function parseLocalizedFilePath(file: ReturnType<typeof getFileInfo>): ParsedFilePath {
  const normalizedPath = PathUtils.normalize(file.path);
  const ext = PathUtils.extname(normalizedPath);
  const dirname = PathUtils.dirname(normalizedPath);
  const basename = PathUtils.basename(normalizedPath, ext);
  const parts = basename.split('.');
  const localeCandidate = parts.length > 1 ? parts.at(-1) : undefined;
  const locale = localeCandidate && i18n.languages.includes(localeCandidate)
    ? localeCandidate
    : undefined;
  const name = locale ? parts.slice(0, -1).join('.') : basename;
  const flattenedPath = PathUtils.joinPath(dirname, name);

  return {
    path: normalizedPath,
    absolutePath: file.absolutePath,
    name,
    flattenedPath,
    ext,
    dirname,
    locale,
  };
}

function cloneForLanguage<T extends RuntimeDoc>(
  page: LocalizedContentPage<T>,
  language: string,
  missingTranslation: boolean,
  getUrl: (slugs: string[], locale?: string) => string,
): LocalizedContentPage<T> {
  return {
    ...page,
    url: getUrl(page.slugs, language),
    locale: language,
    missingTranslation,
  };
}

function buildTree<T extends RuntimeDoc>(
  pages: LocalizedContentPage<T>[],
): PageTree.Root {
  const root: PageTree.Root = {
    name: '',
    children: [],
  };

  for (const page of pages) {
    let children = root.children;

    for (const segment of page.slugs.slice(0, -1)) {
      let folder = children.find(
        (node): node is PageTree.Folder =>
          node.type === 'folder' && node.name === pathToName(segment),
      );

      if (!folder) {
        folder = {
          type: 'folder',
          name: pathToName(segment),
          children: [],
        };
        children.push(folder);
      }

      children = folder.children;
    }

    children.push({
      type: 'page',
      name: page.data.title as ReactNode,
      url: page.url,
      $ref: page.file.path,
    });
  }

  return root;
}

export function createLocalizedContentSource<T extends RuntimeDoc>(
  collection: RuntimeDocsCollection<T>,
  baseUrl: string,
) {
  const getUrl = createGetUrl(baseUrl, i18n);
  const entries: PageEntry<T>[] = collection.docs
    .map((data) => {
      const file = parseLocalizedFilePath(getFileInfo(data));
      const slugs = getSlugs(file.flattenedPath);
      const sourceLocale = file.locale ?? i18n.defaultLanguage;
      const page: LocalizedContentPage<T> = {
        file,
        slugs,
        url: getUrl(slugs, sourceLocale),
        data: data as T & RuntimeDoc,
        locale: sourceLocale,
        sourceLocale,
      };

      return {
        page,
        slugKey: slugs.join('/'),
      };
    })
    .sort((a, b) => a.slugKey.localeCompare(b.slugKey));

  const byLanguageSlug = new Map<string, LocalizedContentPage<T>>();
  const bySlug = new Map<string, LocalizedContentPage<T>[]>();

  for (const entry of entries) {
    byLanguageSlug.set(
      `${entry.page.sourceLocale}::${entry.slugKey}`,
      entry.page,
    );

    const siblings = bySlug.get(entry.slugKey) ?? [];
    siblings.push(entry.page);
    bySlug.set(entry.slugKey, siblings);
  }

  function getFallbackPage(slugKey: string) {
    const siblings = bySlug.get(slugKey);
    if (!siblings) return;

    return (
      siblings.find((page) => page.sourceLocale === i18n.defaultLanguage) ??
      siblings[0]
    );
  }

  return {
    getPages(language = i18n.defaultLanguage) {
      return entries
        .filter((entry) => entry.page.sourceLocale === language)
        .map((entry) => entry.page);
    },
    getLanguages() {
      return i18n.languages.map((language) => ({
        language,
        pages: this.getPages(language),
      }));
    },
    getPage(slugs: string[] = [], language = i18n.defaultLanguage) {
      const slugKey = slugs.join('/');
      const exact = byLanguageSlug.get(`${language}::${slugKey}`);
      if (exact) return exact;

      const fallback = getFallbackPage(slugKey);
      if (!fallback) return;

      return cloneForLanguage(fallback, language, true, getUrl);
    },
    getPageTree(language = i18n.defaultLanguage) {
      return buildTree(this.getPages(language));
    },
    generateParams<
      TSlug extends string = 'slug',
      TLang extends string = 'lang',
    >(slug?: TSlug, lang?: TLang) {
      const slugParam = (slug ?? 'slug') as TSlug;
      const langParam = (lang ?? 'lang') as TLang;
      const slugs = Array.from(
        new Map(entries.map((entry) => [entry.slugKey, entry.page.slugs]))
          .values(),
      );

      return i18n.languages.flatMap((language) =>
        slugs.map(
          (pageSlugs) =>
            ({
              [slugParam]: pageSlugs,
              [langParam]: language,
            }) as Record<TSlug, string[]> & Record<TLang, string>,
        ),
      );
    },
  };
}
