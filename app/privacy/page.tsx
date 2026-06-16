import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { SITE } from "@/lib/site";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.appName}: no accounts, no tracking, no ads.`,
};

// privacy-policy.md is the single source of truth. We read it at build time and
// fill the placeholders here so the legal text is never duplicated.
function getPolicy(): string {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "privacy-policy.md"),
    "utf8",
  );
  return raw
    .replaceAll("[DEVELOPER NAME]", SITE.developerName)
    .replaceAll("[CONTACT EMAIL]", SITE.contactEmail)
    // Drop the internal "replace these placeholders" note meant for developers.
    .replace(/^> Placeholders to replace[\s\S]*?\n\n/m, "");
}

export default function PrivacyPage() {
  const policy = getPolicy();
  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <article
          className="
            prose-headings:font-semibold prose-headings:tracking-tight
            [&_h1]:mb-2 [&_h1]:text-3xl
            [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl
            [&_p]:my-4 [&_p]:leading-7 [&_p]:text-muted
            [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:text-muted
            [&_a]:text-accent [&_a]:underline
            [&_strong]:text-foreground [&_strong]:font-semibold
            [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:text-muted
          "
        >
          <ReactMarkdown>{policy}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  );
}
