import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense, useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

const Toaster = lazy(() => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })));

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-warm">
      <div className="max-w-md text-center">
        <h1 className="display-hero">404</h1>
        <h2 className="label-xs mt-6">Page not found</h2>
        <p className="mt-3 text-sm text-warm/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="label-xs inline-flex items-center gap-2 rounded-full border border-warm/25 px-6 py-4 transition-colors hover:bg-warm hover:text-ink"
          >
            Back Home →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-warm">
      <div className="max-w-md text-center">
        <h1 className="display-lg">This page didn't load</h1>
        <p className="mt-3 text-sm text-warm/60">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="label-xs rounded-full border border-warm/25 px-6 py-4 transition-colors hover:bg-warm hover:text-ink"
          >
            Try again
          </button>
          <a
            href="/"
            className="label-xs rounded-full border border-warm/25 px-6 py-4 transition-colors hover:bg-warm hover:text-ink"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "STTPS — The Group Building Service Companies";
const SITE_DESC =
  "STTPS is a Sri Lankan group building and operating service brands: Tank Sudda, Team Sudda, Polish Station and STOPWASH.";

// Meta-tag CSP is a defense-in-depth copy of the header set in src/server.ts.
// frame-ancestors, X-Frame-Options and X-Content-Type-Options are ignored by
// browsers when delivered via <meta> — they only take effect through the
// real HTTP response headers in src/server.ts, which requires this app to
// actually be served through that handler once a deployment target exists.
// script-src needs 'unsafe-inline': TanStack Start's SSR hydration bootstrap
// (window.$_TSR) ships as an inline <script>; blocking it left the app
// unable to hydrate at all (white screen) in every environment, including
// `vite dev`, since this meta tag is the only CSP source outside src/server.ts.
const META_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "STTPS" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "STTPS" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { httpEquiv: "Content-Security-Policy", content: META_CSP },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <SiteFooter />
      <Suspense fallback={null}>
        <Toaster />
      </Suspense>
    </QueryClientProvider>
  );
}
