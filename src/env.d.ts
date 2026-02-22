/// <reference types="astro/client" />

// Starlight virtual modules are resolved at build time by the integration.
// These declarations silence TypeScript "module not found" errors in the editor.
declare module 'virtual:starlight/components/SiteTitle' {
  const Component: any;
  export default Component;
}
declare module 'virtual:starlight/components/ThemeSelect' {
  const Component: any;
  export default Component;
}
declare module 'virtual:starlight/components/LanguageSelect' {
  const Component: any;
  export default Component;
}
declare module 'virtual:starlight/components/MobileMenuToggle' {
  const Component: any;
  export default Component;
}
declare module 'virtual:starlight/components/MobileMenuFooter' {
  const Component: any;
  export default Component;
}
declare module 'virtual:starlight/components/Search' {
  const Component: any;
  export default Component;
}
declare module 'virtual:starlight/components/SocialIcons' {
  const Component: any;
  export default Component;
}
declare module 'virtual:starlight/components/TableOfContents' {
  const Component: any;
  export default Component;
}
declare module 'virtual:starlight/components/MobileTableOfContents' {
  const Component: any;
  export default Component;
}
