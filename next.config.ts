import type { NextConfig } from "next";
import path from "node:path";

// Security headers (CSP, X-Frame-Options, etc.) used to live here via
// `headers()`, but that API only runs against Next's own server and is
// unsupported (build error) under `output: "export"`. They now live in
// `public/.htaccess`, which Apache/cPanel serves them from directly — see
// that file's comments for the CSP rationale (inline styles for motion,
// no nonce to keep pages static, etc).
const nextConfig: NextConfig = {
  output: "export",
  // Emits `/about/index.html` instead of `/about.html`, so Apache's default
  // DirectoryIndex serves clean URLs with no mod_rewrite/try_files rules
  // needed on the cPanel host.
  trailingSlash: true,
  // A stray lockfile in a parent directory (outside this repo) otherwise
  // makes Next.js guess the wrong file-tracing root.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
