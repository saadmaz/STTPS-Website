import type { Metadata } from "next";
import { Azeret_Mono, IBM_Plex_Sans } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import "./globals.css";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";

/**
 * IBM Plex Sans for display and body — a genuine grotesque with character,
 * not the Inter-everywhere look of a generated template. Plex does display
 * duty at 600/700 and body duty at 400/500.
 *
 * Azeret Mono, below, does the panel labeling (kickers, readouts, unit
 * tags) — its geometric, technical letterforms suit the instrument-panel
 * concept without reaching for IBM Plex Mono / JetBrains Mono, which have
 * become the interchangeable default of every AI-generated dev-tool site.
 */
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-family",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-family",
  display: "swap",
});

const SITE_TITLE = "STTPS: The Group Building Service Companies";
const SITE_DESC =
  "STTPS is a Sri Lankan group building and operating service brands: Tank Sudda, Team Sudda, Polish Station and STOPWASH.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sttps.co"),
  title: { default: SITE_TITLE, template: "%s | STTPS" },
  description: SITE_DESC,
  authors: [{ name: "STTPS" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    siteName: "STTPS",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  referrer: "strict-origin-when-cross-origin",
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION at build time once a Search
  // Console property exists — the meta tag only renders when it's set, so
  // there's no placeholder verification code shipping in the meantime.
  ...(process.env["NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"]
    ? { verification: { google: process.env["NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"] } }
    : {}),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${azeretMono.variable}`}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <Suspense fallback={null}>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
