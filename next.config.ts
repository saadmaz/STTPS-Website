import type { NextConfig } from "next";
import path from "node:path";

// style-src needs 'unsafe-inline': motion (framer-motion) animates via
// inline `style` attributes, which CSP has no nonce mechanism for.
//
// script-src also needs 'unsafe-inline' here rather than a per-request
// nonce. A nonce requires reading the request via middleware + headers() in
// the root layout, which forces every route into dynamic (SSR-per-request)
// rendering — verified: doing that turned every marketing page from static
// (○) to dynamic (ƒ) in the build output. For a static, no-user-generated-
// content marketing site on shared hosting with no CDN edge cache (see
// PLAN.md Phase 0 — shared cPanel host), losing static generation site-wide
// is a worse trade than the marginal XSS hardening a nonce buys here. Revisit
// if a page ever needs real per-request personalization.
//
// Fonts are self-hosted via next/font/google (no external Google Fonts
// request), so font-src/style-src-elem don't need to allow fonts.gstatic.com
// or fonts.googleapis.com the way the previous TanStack Start setup did.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // A stray lockfile in a parent directory (outside this repo) otherwise
  // makes Next.js guess the wrong file-tracing root.
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
