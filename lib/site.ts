// Central site configuration — single source of truth for values reused across
// pages and the privacy policy. Swapping the email or adding the App Store link
// later is a one-line change here.

export const SITE = {
  appName: "Recall Time",
  tagline: "Count down to what matters.",
  valueProp:
    "Turn the dates you care about into clear, beautiful countdowns — so you always know how long until the moment arrives, and you're reminded before it does.",

  // Brand/developer name shown in the policy and footer. (Apple shows your legal
  // seller name on the App Store separately.)
  developerName: "Recall Time",

  // Support / privacy contact. Likely to change — keep it here only.
  contactEmail: "hello@recalltime.app",

  // null → render a "Coming to the App Store" placeholder. Set to the
  // apps.apple.com URL once the app is approved to enable the real badge/link.
  appStoreUrl: "https://apps.apple.com/app/recall-time/id6781017660" as string | null,

  bundleId: "ai.meetjoshua.recalltimeapp",
  effectiveDate: "June 16, 2026",
  year: 2026,

  // Production domain (used for canonical/OG URLs).
  baseUrl: "https://recalltime.app",
} as const;
