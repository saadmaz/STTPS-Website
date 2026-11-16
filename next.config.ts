import type { NextConfig } from "next";
import path from "node:path";

// Security headers (CSP, X-Frame-Options, etc.) used to live here via
// `headers()`, but that API only runs against Next's own server and is
// unsupported (build error) under `output: "export"`. They now live in
// `public/_headers`, which Cloudflare Pages reads from the build output —
// see that file's comments for the CSP rationale (inline styles for motion,
// no nonce to keep pages static, etc). Retired URLs are 301'd from
// `public/_redirects` alongside it.
const nextConfig: NextConfig = {
  output: "export",
  // Emits `/about/index.html` instead of `/about.html`, so every route
  // resolves as a directory index on a plain static host, with no rewrite
  // rules needed.
  trailingSlash: true,
  // A stray lockfile in a parent directory (outside this repo) otherwise
  // makes Next.js guess the wrong file-tracing root.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
