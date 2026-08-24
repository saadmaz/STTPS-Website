import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-warm">
      <div className="max-w-md text-center">
        <h1 className="display-hero">404</h1>
        <h2 className="label-xs mt-6">Page not found</h2>
        <p className="mt-3 text-sm text-warm/60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="label-xs inline-flex items-center gap-2 rounded-full border border-steel/40 px-6 py-4 transition-colors hover:bg-warm hover:text-ink"
          >
            Back Home →
          </Link>
        </div>
      </div>
    </div>
  );
}
