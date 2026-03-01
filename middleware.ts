import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const defaultLocale = 'zh-hk';
const locales = ['zh-hk', 'en', 'zh-cn', 'ja'];

function isBypassPath(pathname: string) {
  return (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/icons') ||
    pathname.startsWith('/fonts') ||
    pathname === '/favicon.ico' ||
    /\.[^/]+$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isBypassPath(pathname)) {
    return NextResponse.next();
  }

  const prefixedLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (prefixedLocale === defaultLocale) {
    const url = request.nextUrl.clone();
    const nextPath = pathname.replace(new RegExp(`^/${defaultLocale}`), '') || '/';
    url.pathname = nextPath;
    return NextResponse.redirect(url);
  }

  if (prefixedLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${defaultLocale}/home` : `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
