import { getCloudflareContext } from '@opennextjs/cloudflare';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

const CACHE_CONTROL = 'public, max-age=0, s-maxage=31536000, stale-while-revalidate=604800';

type RouteContext = {
  params: Promise<{ path?: string[] }>;
};

const contentTypes: Record<string, string> = {
  avif: 'image/avif',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  webp: 'image/webp',
};

function getContentType(key: string) {
  const extension = key.split('.').pop()?.toLowerCase();
  return extension ? contentTypes[extension] ?? 'application/octet-stream' : 'application/octet-stream';
}

function toObjectKey(pathSegments: string[] | undefined) {
  if (!pathSegments?.length) return null;

  for (const segment of pathSegments) {
    if (!segment || segment === '.' || segment === '..' || segment.includes('\\')) {
      return null;
    }
  }

  return `blogs/${pathSegments.join('/')}`;
}

function getEdgeCache() {
  const maybeCaches = globalThis.caches as (CacheStorage & { default?: Cache }) | undefined;
  return maybeCaches?.default ?? null;
}

function notModifiedResponse(request: NextRequest, headers: Headers) {
  const etag = headers.get('etag');
  const ifNoneMatch = request.headers.get('if-none-match');

  if (!etag || !ifNoneMatch) return null;

  const requestedEtags = ifNoneMatch.split(',').map((value) => value.trim());
  if (!requestedEtags.includes('*') && !requestedEtags.includes(etag)) return null;

  return new Response(null, {
    status: 304,
    headers,
  });
}

async function serveBlogMedia(request: NextRequest, context: RouteContext, headOnly: boolean) {
  const { path } = await context.params;
  const key = toObjectKey(path);

  if (!key) {
    return new Response('Not found', {
      status: 404,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  }

  const { env, ctx } = await getCloudflareContext({ async: true });
  const bucket = env.BLOG_MEDIA;

  if (!bucket) {
    return new Response('BLOG_MEDIA R2 binding is not configured', {
      status: 500,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  }

  const cache = getEdgeCache();
  const cacheKey = new Request(request.url, { method: 'GET' });

  if (!headOnly && cache) {
    const cached = await cache.match(cacheKey);
    if (cached) {
      const notModified = notModifiedResponse(request, cached.headers);
      return notModified ?? cached;
    }
  }

  const object = await bucket.get(key);

  if (!object) {
    return new Response('Not found', {
      status: 404,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  }

  const headers = new Headers();
  object.writeHttpMetadata?.(headers);

  if (!headers.has('content-type')) {
    headers.set('Content-Type', getContentType(key));
  }

  const etag = object.httpEtag ?? object.etag;
  if (etag) {
    headers.set('ETag', etag);
  }

  if (object.uploaded) {
    headers.set('Last-Modified', object.uploaded.toUTCString());
  }

  headers.set('Cache-Control', CACHE_CONTROL);
  headers.set('X-Content-Type-Options', 'nosniff');

  const notModified = notModifiedResponse(request, headers);
  if (notModified) return notModified;

  const response = new Response(headOnly ? null : object.body, {
    status: 200,
    headers,
  });

  if (!headOnly && cache) {
    ctx.waitUntil(cache.put(cacheKey, response.clone()).catch(() => undefined));
  }

  return response;
}

export function GET(request: NextRequest, context: RouteContext) {
  return serveBlogMedia(request, context, false);
}

export function HEAD(request: NextRequest, context: RouteContext) {
  return serveBlogMedia(request, context, true);
}
