"use client";

// Only fires when the root layout itself throws — everything else is caught
// by error.tsx. Kept dependency-free (no Tailwind/motion) since a failure
// here means we can't trust the rest of the app shell rendered correctly.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          font: "15px/1.5 system-ui, -apple-system, sans-serif",
          background: "#fafafa",
          color: "#111",
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
          margin: 0,
          padding: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "28rem", width: "100%", textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "1.25rem", margin: "0 0 0.5rem" }}>This page didn&apos;t load</h1>
          <p style={{ color: "#4b5563", margin: "0 0 1.5rem" }}>
            Something went wrong on our end. You can try again or head back home.
          </p>
          <div
            style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <button
              onClick={() => reset()}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                font: "inherit",
                cursor: "pointer",
                border: "1px solid transparent",
                background: "#111",
                color: "#fff",
              }}
            >
              Try again
            </button>
            {/* Intentionally a plain <a>, not next/link: the root layout itself
                just crashed, so this must not depend on any app router/client
                machinery still working. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                font: "inherit",
                textDecoration: "none",
                border: "1px solid #d1d5db",
                background: "#fff",
                color: "#111",
              }}
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
