"use client";

import { useState } from "react";
import { services, qualifications } from "@/lib/content";

const items: string[] = [...services.map((s) => s.title), ...qualifications];

export default function ServiceCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="Our services and standards" className="bg-charcoal py-4">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume scrolling list" : "Pause scrolling list"}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-terracotta"
        >
          {paused ? <PlayIcon className="h-3.5 w-3.5" /> : <PauseIcon className="h-3.5 w-3.5" />}
        </button>

        <div className="marquee-mask relative flex-1 overflow-hidden">
          <div className={`marquee-track flex w-max items-center ${paused ? "paused" : ""}`}>
            {[...items, ...items].map((label, i) => (
              <span key={i} className="flex shrink-0 items-center whitespace-nowrap">
                <span className="px-6 text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                  {label}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
      <rect x="5" y="4" width="3" height="12" rx="1" />
      <rect x="12" y="4" width="3" height="12" rx="1" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6 4.5v11l9-5.5-9-5.5z" />
    </svg>
  );
}
