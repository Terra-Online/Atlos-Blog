'use client';

import { useEffect, useState } from 'react';

const UPDATE_INTERVAL_MS = 60_000;

const units: ReadonlyArray<[Intl.RelativeTimeFormatUnit, number]> = [
  ['year', 365 * 24 * 60 * 60 * 1000],
  ['month', 30 * 24 * 60 * 60 * 1000],
  ['week', 7 * 24 * 60 * 60 * 1000],
  ['day', 24 * 60 * 60 * 1000],
  ['hour', 60 * 60 * 1000],
  ['minute', 60 * 1000],
];

function formatRelativeTime(timestamp: string, locale: string) {
  const target = new Date(timestamp).getTime();
  if (!Number.isFinite(target)) return null;

  const difference = target - Date.now();
  const absoluteDifference = Math.abs(difference);
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  for (const [unit, milliseconds] of units) {
    if (absoluteDifference >= milliseconds) {
      return formatter.format(Math.round(difference / milliseconds), unit);
    }
  }

  return formatter.format(0, 'second');
}

export function RelativeTime({
  timestamp,
  locale = 'en',
  className,
}: {
  timestamp: string;
  locale?: string;
  className?: string;
}) {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setLabel(formatRelativeTime(timestamp, locale));

    update();
    const interval = window.setInterval(update, UPDATE_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [locale, timestamp]);

  if (!label) return null;

  return (
    <time dateTime={timestamp} className={className}>
      {label}
    </time>
  );
}
