'use client';
import { useEffect } from 'react';

/**
 * Sets the `lang` attribute on the <html> element client-side so CSS
 * `html[lang="..."]` selectors for per-language font stacks work correctly.
 * The root layout renders lang="en" at SSR time; this component corrects it
 * on hydration for non-English routes.
 */
export function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
