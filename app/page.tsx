'use client';
import { useEffect } from 'react';
import { i18n } from '@/lib/i18n';

export default function RootPage() {
  useEffect(() => {
    window.location.replace(`/${i18n.defaultLanguage}`);
  }, []);
  return null;
}
