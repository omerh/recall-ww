import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${SITE.appName} — contact and frequently asked questions.`,
};

const faqs = [
  {
    q: "Does Recall Time cost anything?",
    a: "No. There are no ads and no in-app purchases.",
  },
  {
    q: "Is my data private?",
    a: "Yes. There are no accounts and no tracking. Your countdowns are stored on your device and in your own private iCloud — never on a server we control.",
  },
  {
    q: "Does it sync across my devices?",
    a: "Yes. When you're signed in to iCloud, your countdowns back up and sync automatically through your private iCloud (CloudKit). The app still works fully offline.",
  },
  {
    q: "What do I need to run it?",
    a: "An iPhone running iOS 18 or later.",
  },
  {
    q: "How do reminders work?",
    a: "You can be reminded 1 hour, 1 day, or 3 days before a countdown. Reminders are scheduled locally on your device — you can manage notification permissions in the iOS Settings app.",
  },
];

export default function SupportPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Support</h1>
        <p className="mt-4 leading-7 text-muted">
          Questions, feedback, or trouble with {SITE.appName}? Email us and we&apos;ll
          help.
        </p>
        <a
          href={`mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
            `${SITE.appName} support`,
          )}`}
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-foreground px-5 py-3 font-medium text-background transition-opacity hover:opacity-90"
        >
          Email {SITE.contactEmail}
        </a>

        <h2 className="mt-14 text-xl font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <dl className="mt-6 divide-y divide-border border-t border-border">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-2 leading-7 text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 text-sm text-muted">
          See also our{" "}
          <Link href="/privacy" className="text-accent underline">
            privacy policy
          </Link>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
