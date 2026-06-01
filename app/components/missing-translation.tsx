export function MissingTranslation() {
  return (
    <section
      aria-live="polite"
      className="rounded-lg border border-fd-border bg-fd-muted/40 px-5 py-4 text-sm text-fd-muted-foreground"
    >
      <p className="font-medium text-fd-foreground">
        此内容尚无当前界面语言版本
      </p>
    </section>
  );
}
