import { i18n, sectionLabels } from '@/lib/i18n';
import { siteSections } from '@/lib/source';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { LinkItemType } from 'fumadocs-ui/layouts/links';

function GithubIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function BlueskyIcon() {
  return (
    <svg role="img" viewBox="0 0 600 530" fill="currentColor" className="size-4">
      <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
    </svg>
  );
}

/** Social icon links — locale-independent */
export const socialLinkItems: LinkItemType[] = [
  {
    type: 'icon',
    url: 'https://github.com/Terra-Online/Atlos',
    label: 'GitHub',
    text: 'GitHub',
    icon: <GithubIcon />,
    external: true,
  },
  {
    type: 'icon',
    url: 'https://discord.gg/BFMAKZSUG7',
    label: 'Discord',
    text: 'Discord',
    icon: <DiscordIcon />,
    external: true,
  },
  {
    type: 'icon',
    url: 'https://bsky.app/profile/opendfieldmap.bsky.social',
    label: 'Bluesky',
    text: 'Bluesky',
    icon: <BlueskyIcon />,
    external: true,
  },
];

/**
 * Base layout options for the site (HomeLayout).
 * Accepts the current locale to produce correctly-prefixed URLs.
 */
export function siteBaseOptions(lang: string): BaseLayoutProps {
  const withLocale = (path: string) =>
    lang === i18n.defaultLanguage ? path : `/${lang}${path}`;
  const sectionText = (section: keyof typeof sectionLabels) =>
    sectionLabels[section][lang as keyof (typeof sectionLabels)[typeof section]] ??
    sectionLabels[section].en;

  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <img
            src="/icons/favicon.svg"
            alt=""
            aria-hidden
            className="size-5 dark:hidden"
          />
          <img
            src="/icons/favicon_dark.svg"
            alt=""
            aria-hidden
            className="hidden size-5 dark:block"
          />
          <span>Open Endfield Map</span>
        </span>
      ),
      url: '/',
    },
    links: [
      ...siteSections.map((section) => ({
        text: sectionText(section.key),
        url: withLocale(section.href),
        active: 'nested-url' as const,
      })),
      // Vertical divider between i18n toggle and social icons (right side)
      {
        type: 'custom',
        on: 'nav',
        secondary: true,
        children: (
          <div
            role="separator"
            aria-hidden
            className="mx-2 h-5 w-px shrink-0 bg-fd-muted-foreground/40"
          />
        ),
      },
      ...socialLinkItems,
    ],
  };
}
