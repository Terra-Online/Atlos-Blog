'use client';

import { useEffect, useState } from 'react';

interface UsagePoint {
  timestamp: number;
  value: number;
}

interface UsageResponse {
  ok: boolean;
  source: 'd1';
  error?: string;
  hours?: number;
  series: {
    requests: UsagePoint[];
    bandwidth: UsagePoint[];
    status5xx: UsagePoint[];
  };
}

export function UsageD3Panel() {
  const [data, setData] = useState<UsageResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let disposed = false;

    const load = async () => {
      try {
        const res = await fetch('/api/cloudflare/usage?hours=24', { cache: 'no-store' });
        const json = (await res.json()) as UsageResponse;
        if (!disposed) setData(json);
      } catch {
        if (!disposed) {
          setData({
            ok: false,
            source: 'd1',
            error: 'Failed to fetch /api/cloudflare/usage',
            series: { requests: [], bandwidth: [], status5xx: [] },
          });
        }
      } finally {
        if (!disposed) setLoading(false);
      }
    };

    load().catch(() => undefined);
    return () => {
      disposed = true;
    };
  }, []);

  if (loading) return <p>Loading D1 usage data...</p>;
  if (!data) return <p>No data.</p>;

  return (
    <section style={{ display: 'grid', gap: 12 }}>
      <div style={{ border: '1px solid var(--color-fd-border)', borderRadius: 12, padding: 12 }}>
        <p style={{ margin: 0 }}>
          Data Source: <strong>D1</strong>
          {data.hours ? ` | Window: ${data.hours}h` : ''}
        </p>
        {data.error ? (
          <p style={{ margin: '8px 0 0', color: '#c1121f' }}>Error: {data.error}</p>
        ) : null}
      </div>

      <div style={{ border: '1px dashed var(--color-fd-border)', borderRadius: 12, padding: 12 }}>
        <p style={{ marginTop: 0 }}><strong>TODO (teammate): render D3 charts here</strong></p>
        <p style={{ marginBottom: 8, opacity: 0.75 }}>
          Suggested: 3 line charts for requests / bandwidth / status5xx.
        </p>
        <pre style={{ margin: 0, overflowX: 'auto', fontSize: 12 }}>
{JSON.stringify(data.series, null, 2)}
        </pre>
      </div>
    </section>
  );
}
