import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { Screenshots } from "@/components/Screenshots";
import { Footer } from "@/components/Footer";

const features = [
  {
    title: "Beautiful countdowns",
    body: "Give each countdown a title, due date, notes, a color, and tags. See days, hours, and minutes tick down live.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z",
  },
  {
    title: "For every occasion",
    body: "Birthdays, holidays, travel, fitness, work, anniversaries, and more — eight categories, each with its own icon and labels.",
    icon: "M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 9.5l6.9-.6L12 2z",
  },
  {
    title: "Reminders that keep you ready",
    body: "Get a local notification 1 hour, 1 day, or 3 days before — plus an app badge when a countdown arrives.",
    icon: "M12 22a2.5 2.5 0 002.45-2h-4.9A2.5 2.5 0 0012 22zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
  },
  {
    title: "Repeat what matters",
    body: "Make a countdown recur hourly, daily, weekly, monthly, or yearly. The next occurrence is created automatically.",
    icon: "M17 1l4 4-4 4V6H7a4 4 0 00-4 4H1a6 6 0 016-6h10V1zM7 23l-4-4 4-4v3h10a4 4 0 004-4h2a6 6 0 01-6 6H7v3z",
  },
  {
    title: "Stay organized",
    body: "Search, filter, sort, and group by category, state, or tag. Color-code anything and archive the ones you're done with.",
    icon: "M3 5h18v2H3V5zm3 6h12v2H6v-2zm3 6h6v2H9v-2z",
  },
  {
    title: "Backed up & in sync",
    body: "Your countdowns sync across your devices through your own private iCloud. Works offline; syncs when you're back.",
    icon: "M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13a5 5 0 00.35-9.96z",
  },
];

const categories = [
  "Birthday",
  "Holiday",
  "Travel",
  "Anniversary",
  "Fitness",
  "Work",
  "Personal",
  "Countdown",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center sm:pt-32">
          <Image
            src="/app-icon.png"
            alt={`${SITE.appName} app icon`}
            width={112}
            height={112}
            priority
            className="mx-auto mb-8 rounded-[24px] shadow-lg"
          />
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {SITE.valueProp}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <AppStoreBadge />
            <p className="text-sm text-muted">For iPhone · iOS 18 and later</p>
          </div>
        </section>

        {/* Categories strip */}
        <section className="mx-auto max-w-5xl px-6 pb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Feature grid */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-4 bg-background p-8">
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-accent">
                  <path d={f.icon} />
                </svg>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-[15px] leading-7 text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <Screenshots />

        {/* Privacy callout */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl bg-card px-8 py-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              No account. No tracking. No ads.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              {SITE.appName} has no sign-up, no analytics, and no third-party SDKs.
              Your countdowns live on your device and in your own private iCloud —
              never on a server we control.
            </p>
            <Link
              href="/privacy"
              className="mt-8 inline-block font-medium text-accent hover:underline"
            >
              Read the privacy policy →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
