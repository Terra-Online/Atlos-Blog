import './global.scss';
import './overrides.scss';
import { RootProvider } from 'fumadocs-ui/provider';
import { Geist, Inter, Montserrat, M_PLUS_2 } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

/* ── Google Fonts ─────────────────────────────────────────────────────────── */

/** English: Inter for Latin text */
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

/** Geis(t): fixed western font for top nav & home */
const geist = Geist({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-geist',
  display: 'swap',
});

/** Latin glyphs inside CJK pages (zh-cn / zh-hk / ja) */
const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
  display: 'swap',
});

/** M PLUS 2 — latin only via next/font; CJK loaded via Google Fonts CDN in global.scss */
const mPlus2 = M_PLUS_2({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mplus2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Open Endfield Map',
    default: 'Open Endfield Map',
  },
  description: 'The official documentation hub for the Open Endfield Map project.',
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: '32x32' },
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: 'OEM Blog',
          url: 'https://blog.opendfieldmap.org/rss.xml',
        },
      ],
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geist.variable} ${montserrat.variable} ${mPlus2.variable}`}
    >
      <head>
        {/* Enable theme transitions after JS is ready to avoid FOUC flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-theme-ready','')`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const key = 'data-dynamic-favicon';
  const apply = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const href = isDark ? '/icons/favicon_dark.svg' : '/icons/favicon.svg';
    let link = document.head.querySelector('link[' + key + '="true"]');

    if (!link) {
      link = document.createElement('link');
      link.setAttribute(key, 'true');
      link.setAttribute('rel', 'icon');
      link.setAttribute('type', 'image/svg+xml');
      document.head.appendChild(link);
    }

    if (link.getAttribute('href') !== href) {
      link.setAttribute('href', href);
    }
  };

  apply();
  new MutationObserver(apply).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
})();`,
          }}
        />
      </head>
      <body>
        <RootProvider
          theme={{ disableTransitionOnChange: false }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

