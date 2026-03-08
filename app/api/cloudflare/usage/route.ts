interface UsageRow {
  bucket: string;
  requests: number;
  bytes: number;
  status5xx: number;
}

interface UsagePoint {
  timestamp: number;
  value: number;
}

interface D1Like {
  prepare: (sql: string) => {
    bind: (...values: unknown[]) => {
      all: <T>() => Promise<{ results: T[] }>;
    };
  };
}

function parseHours(raw: string | null): number {
  const parsed = Number(raw ?? 24);
  if (Number.isNaN(parsed) || parsed <= 0) return 24;
  return Math.min(Math.floor(parsed), 24 * 30);
}

function getD1Binding(): D1Like | null {
  // OpenNext on Cloudflare can expose worker bindings on globalThis in runtime.
  // Keep this loose so your teammate can adapt to the exact runtime adapter.
  const g = globalThis as unknown as { DB?: D1Like };
  return g.DB ?? null;
}

function toSeries(rows: UsageRow[], key: keyof Omit<UsageRow, 'bucket'>): UsagePoint[] {
  return rows
    .map((row) => ({
      timestamp: Math.floor(new Date(row.bucket).getTime() / 1000),
      value: Number(row[key] ?? 0),
    }))
    .filter((p) => Number.isFinite(p.timestamp));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const hours = parseHours(searchParams.get('hours'));
  const db = getD1Binding();

  if (!db) {
    return Response.json(
      {
        ok: false,
        source: 'd1',
        error: 'D1 binding "DB" not found. Add d1_databases in wrangler.jsonc and runtime binding injection.',
        series: { requests: [], bandwidth: [], status5xx: [] },
      },
      { status: 500 },
    );
  }

  // TODO: Replace table name/column names with your real schema.
  // Reference SQL template: sql/cloudflare_usage.sql
  const sql = `
    SELECT
      strftime('%Y-%m-%dT%H:%M:00Z', bucket_at) AS bucket,
      SUM(requests) AS requests,
      SUM(bytes) AS bytes,
      SUM(status_5xx) AS status5xx
    FROM cloudflare_usage_minute
    WHERE bucket_at >= datetime('now', ?)
    GROUP BY 1
    ORDER BY 1 ASC
  `;

  const since = `-${hours} hours`;

  try {
    const { results } = await db.prepare(sql).bind(since).all<UsageRow>();

    return Response.json({
      ok: true,
      source: 'd1',
      hours,
      series: {
        requests: toSeries(results, 'requests'),
        bandwidth: toSeries(results, 'bytes'),
        status5xx: toSeries(results, 'status5xx'),
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown error';
    return Response.json(
      {
        ok: false,
        source: 'd1',
        error: message,
        series: { requests: [], bandwidth: [], status5xx: [] },
      },
      { status: 500 },
    );
  }
}