import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import "./globals.css";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";

/**
 * Google Fonts has no separate "Archivo Expanded" family — Archivo ships as
 * one variable font with a wdth axis (62-125). The panel-signage look comes
 * from pairing this variable weight with `font-stretch: 125%` in globals.css
 * rather than from a static expanded cut.
 */
const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-display-family",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}
    >
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
