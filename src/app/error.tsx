"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-warm">
      <div className="max-w-md text-center">
        <h1 className="display-lg">This page didn&apos;t load</h1>
        <p className="mt-3 text-sm text-warm/60">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => reset()}
            className="label-xs rounded-full border border-steel/40 px-6 py-4 transition-colors hover:bg-warm hover:text-ink"
          >
            Try again
          </button>
          <Link
            href="/"
            className="label-xs rounded-full border border-steel/40 px-6 py-4 transition-colors hover:bg-warm hover:text-ink"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
