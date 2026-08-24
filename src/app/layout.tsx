import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import "./globals.css";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";

/**
 * One neutral grotesque for both display and body — the International
 * Typographic Style convention (a single Helvetica-like face throughout,
 * not a display/body pairing) is what makes this read as formal rather
 * than "startup." Inter does display duty at 600/700 and body duty at
 * 400/500.
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-family",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-family",
  display: "swap",
});

const SITE_TITLE = "STTPS — The Group Building Service Companies";
const SITE_DESC =
  "STTPS is a Sri Lankan group building and operating service brands: Tank Sudda, Team Sudda, Polish Station and STOPWASH.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sttps.lk"),
  title: { default: SITE_TITLE, template: "%s — STTPS" },
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
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
