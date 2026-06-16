import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.appName} — ${SITE.tagline}`,
    template: `%s — ${SITE.appName}`,
  },
  description: SITE.valueProp,
  applicationName: SITE.appName,
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: `${SITE.appName} — ${SITE.tagline}`,
    description: SITE.valueProp,
    url: SITE.baseUrl,
    siteName: SITE.appName,
    images: [{ url: "/app-icon.png", width: 1024, height: 1024, alt: SITE.appName }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE.appName} — ${SITE.tagline}`,
    description: SITE.valueProp,
    images: ["/app-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
