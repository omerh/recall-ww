# Recall Time — Website (`recall-ww`)

This project is the marketing website + legal pages for **Recall Time**, an iPhone
countdown & reminder app. The site exists primarily to satisfy two App Store Connect
requirements and to market the app:

1. **Privacy Policy URL** (required to submit the app) → `/privacy`
2. **Support URL** (required) → `/support` (or a contact section on the home page)
3. A landing page that markets the app and links to the App Store.

The canonical privacy-policy content already lives in this folder:
- `privacy-policy.md` — source content (drop into an MDX route or render to HTML)
- `privacy-policy.html` — standalone, hostable as-is if you need a URL *today*

---

## ⚠️ Replace these placeholders before publishing

Search the whole project for these and fill them in:

| Placeholder | What it is |
|---|---|
| `[DEVELOPER NAME]` | The legal/brand name shown as the app's developer (matches App Store Connect). |
| `[CONTACT EMAIL]` | Support/privacy contact email (this becomes your Support URL contact too). |
| App Store link | The `apps.apple.com/...` URL — only available *after* the app is approved; use a placeholder/"Coming soon" until then. |

Also confirm the **effective date** in the privacy policy (currently `June 16, 2026`).

---

## App facts (for marketing copy — all verified against the app)

- **Name:** Recall Time
- **Platform:** iPhone only, iOS 18+
- **Category:** Productivity
- **Bundle ID:** `ai.meetjoshua.recalltimeapp`
- **Price:** (decide — likely Free)

**What it does:** Create countdowns to the moments that matter and get reminded
before they arrive.

**Feature highlights:**
- Countdowns with title, due date, notes, color, and tags
- Categories: Countdown, Anniversary, Birthday, Holiday, Travel, Fitness, Work, Personal
- Repeating countdowns: hourly, daily, weekly, monthly, yearly
- Reminders: 1 hour / 1 day / 3 days before, via local notifications
- Live updating, app badge for elapsed countdowns
- Search, filter, sort, and group your countdowns; archive ones you're done with
- **iCloud backup & sync** across your devices (private CloudKit — your data stays yours)

**Privacy angle (a real selling point — lean into it):** No account. No tracking.
No ads. No analytics. Your data lives on your device and in your own private iCloud.

---

## Recommended tech & structure

**Recommendation: Next.js (App Router) with static export**, deployed to Vercel.
It gives clean per-page routes (`/`, `/privacy`, `/support`), trivial MDX rendering
for the policy, and good SEO out of the box. Vite + React works too if you prefer —
just add a router and a markdown renderer.

Suggested routes:

```
/            → Landing page (hero, features, screenshots, App Store badge, footer links)
/privacy     → Render privacy-policy.md  (link in footer + submit this URL to App Store Connect)
/support     → Contact email + short FAQ (submit this URL as the Support URL)
```

### Next.js quick start

```bash
cd /Users/omer/personal/recall-ww
npx create-next-app@latest . --ts --app --tailwind --eslint
npm i next-mdx-remote   # or use @next/mdx, or just paste the policy as a component
```

Then create `app/privacy/page.tsx` that reads and renders `privacy-policy.md`
(keep the .md as the single source of truth so legal text isn't duplicated).

For static hosting, set `output: 'export'` in `next.config.js` and deploy the
`out/` directory (Vercel/Netlify/Cloudflare Pages/GitHub Pages all work).

---

## Landing page content outline

1. **Hero** — app name, one-line value prop ("Count down to what matters."),
   app icon, App Store badge (or "Coming to the App Store").
2. **Feature grid** — pull from the highlights above (countdowns, categories,
   repeats, reminders, iCloud sync, privacy).
3. **Screenshots** — phone mockups (get these from the App Store screenshot set;
   6.9" display, captured from the iOS Simulator with ⌘S).
4. **Privacy callout** — "No account. No tracking. No ads." with a link to `/privacy`.
5. **Footer** — links to Privacy, Support, and the developer name + year.

### Assets to gather
- App icon (1024×1024 PNG — exists in the app's `Assets.xcassets/AppIcon.appiconset`)
- 3–5 screenshots (also needed for App Store Connect anyway)
- Official Apple "Download on the App Store" badge (from Apple's marketing resources)

### SEO / meta
- `<title>` and meta description per page
- Open Graph + Twitter card image (1200×630)
- Favicon from the app icon
- Privacy and support pages should be indexable (`robots: index`)

---

## Definition of done

- [ ] Placeholders replaced (`[DEVELOPER NAME]`, `[CONTACT EMAIL]`, App Store link)
- [ ] `/privacy` live at a stable public URL → paste into App Store Connect → App Privacy → Privacy Policy URL
- [ ] `/support` (or contact section) live → paste into App Store Connect → Support URL
- [ ] Landing page renders correctly on mobile and desktop, light & dark
- [ ] Deployed to a public host with HTTPS

> Note: The App Store badge / store link can't be finalized until the app is approved.
> Ship the site with "Coming soon" first so the Privacy + Support URLs exist for
> submission, then swap in the real link after approval.
