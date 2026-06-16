import { SITE } from "@/lib/site";

// Renders the real "Download on the App Store" link once SITE.appStoreUrl is
// set, otherwise a non-interactive "Coming to the App Store" placeholder.
export function AppStoreBadge() {
  const base =
    "inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-left transition-colors";

  const inner = (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 shrink-0 fill-current"
      >
        <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.98-.84.94-2.2 1.66-3.36 1.57-.14-1.1.42-2.27 1.06-2.99.78-.86 2.18-1.5 3.42-1.56zM20.7 17.2c-.6 1.38-.88 1.99-1.65 3.21-1.07 1.7-2.58 3.81-4.45 3.83-1.66.02-2.09-1.08-4.34-1.07-2.25.01-2.72 1.09-4.38 1.07-1.87-.02-3.3-1.93-4.37-3.62C-1.7 16.9-2.02 10.9.62 7.73 1.97 6.06 3.97 5.02 5.85 5.02c1.91 0 3.11 1.07 4.69 1.07 1.53 0 2.46-1.07 4.67-1.07 1.67 0 3.44.91 4.7 2.48-4.13 2.26-3.46 8.15.79 9.7z" />
      </svg>
      <span className="leading-tight">
        <span className="block text-[11px] uppercase tracking-wide opacity-70">
          {SITE.appStoreUrl ? "Download on the" : "Coming to the"}
        </span>
        <span className="block text-xl font-semibold">App Store</span>
      </span>
    </>
  );

  if (SITE.appStoreUrl) {
    return (
      <a
        href={SITE.appStoreUrl}
        className={`${base} bg-foreground text-background hover:opacity-90`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <span
      className={`${base} cursor-default border border-border text-muted`}
      aria-disabled="true"
    >
      {inner}
    </span>
  );
}
