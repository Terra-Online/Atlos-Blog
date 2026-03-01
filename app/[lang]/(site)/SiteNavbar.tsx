import {
  Navbar,
  NavbarLink,
} from 'fumadocs-ui/layouts/home/navbar';
import { NavigationMenuList } from 'fumadocs-ui/components/ui/navigation-menu';
import { Title } from 'fumadocs-ui/components/layout/nav';
import {
  SearchToggle,
  LargeSearchToggle,
} from 'fumadocs-ui/components/layout/search-toggle';
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle';
import {
  LanguageToggle,
  LanguageToggleText,
} from 'fumadocs-ui/components/layout/language-toggle';
import {
  Menu,
  MenuContent,
  MenuLinkItem,
  MenuTrigger,
} from 'fumadocs-ui/layouts/home/menu';
import { Languages, ChevronDown } from 'lucide-react';
import type { MainItemType } from 'fumadocs-ui/layouts/links';

interface SiteNavbarProps {
  homeUrl: string;
  docsUrl: string;
  communityUrl: string;
  showI18n?: boolean;
}

const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-4">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const DiscordIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-4">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const iconItems = [
  {
    url: 'https://github.com/opendfieldmap',
    label: 'GitHub',
    Icon: GithubIcon,
  },
  {
    url: 'https://discord.gg/opendfieldmap',
    label: 'Discord',
    Icon: DiscordIcon,
  },
] as const;

export function SiteNavbar({
  homeUrl,
  docsUrl,
  communityUrl,
  showI18n,
}: SiteNavbarProps) {
  const navItems: MainItemType[] = [
    { text: 'Home', url: homeUrl, active: 'nested-url' },
    { text: 'Documentation', url: docsUrl, active: 'nested-url' },
    { text: 'Community', url: communityUrl, active: 'nested-url' },
  ];

  return (
    <Navbar>
      {/* ── Title ─────────────────────────────────────────────────── */}
      <Title title="Open Endfield Map" url={homeUrl} />

      {/* ── Desktop nav links ─────────────────────────────────────── */}
      <NavigationMenuList className="flex flex-row items-center gap-2 max-sm:hidden">
        {navItems.map((item) => (
          <NavbarLink key={item.url} item={item} variant="main" className="text-sm">
            {item.text}
          </NavbarLink>
        ))}
      </NavigationMenuList>

      {/* ── Right side ────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-row items-center justify-end gap-1 lg:gap-1.5">
        {/* Search */}
        <SearchToggle className="lg:hidden" hideIfDisabled />
        <LargeSearchToggle
          className="w-full max-w-[240px] max-lg:hidden"
          hideIfDisabled
        />

        {/* Desktop-only controls */}
        <ThemeToggle className="max-lg:hidden" />

        {showI18n && (
          <LanguageToggle className="-me-1.5 max-lg:hidden">
            <Languages className="size-5" />
          </LanguageToggle>
        )}

        {iconItems.map(({ url, label, Icon }) => (
          <NavbarLink
            key={url}
            item={{ url, external: true }}
            variant="icon"
            aria-label={label}
            className="-me-1.5 max-lg:hidden"
          >
            <Icon />
          </NavbarLink>
        ))}

        {/* ── Mobile hamburger ──────────────────────────────────── */}
        <Menu className="lg:hidden">
          <MenuTrigger className="group -me-2">
            <ChevronDown className="size-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </MenuTrigger>
          <MenuContent className="sm:flex-row sm:items-center sm:justify-end">
            {/* Nav links (only visible on small screens) */}
            {navItems.map((item) => (
              <MenuLinkItem key={item.url} item={item} className="sm:hidden" />
            ))}

            {/* Bottom row: language/theme + icon links */}
            <div className="-ms-1.5 flex flex-row items-center gap-1 max-sm:mt-2">
              {iconItems.map(({ url, label, Icon }) => (
                <NavbarLink
                  key={url}
                  item={{ url, external: true }}
                  variant="icon"
                  aria-label={label}
                  className="-me-1.5"
                >
                  <Icon />
                </NavbarLink>
              ))}

              <div role="separator" className="flex-1" />

              {showI18n && (
                <LanguageToggle>
                  <Languages className="size-5" />
                  <LanguageToggleText />
                  <ChevronDown className="size-3 text-fd-muted-foreground" />
                </LanguageToggle>
              )}
              <ThemeToggle />
            </div>
          </MenuContent>
        </Menu>
      </div>
    </Navbar>
  );
}
