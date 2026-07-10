"use client";

import { useEffect, useState } from "react";
import { services, qualifications, type ServiceId } from "@/lib/content";
import { ServiceIcon, BadgeCheckIcon } from "./icons";

type Item =
  | { kind: "service"; id: ServiceId; label: string }
  | { kind: "qualification"; label: string };

const items: Item[] = [
  ...services.map((s) => ({ kind: "service" as const, id: s.id, label: s.title })),
  ...qualifications.map((q) => ({ kind: "qualification" as const, label: q })),
];

export default function ServiceCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  const current = items[index];

  return (
    <section
      aria-label="Our services and standards"
      className="border-b border-charcoal/10 bg-stone-100 py-4"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume rotating list" : "Pause rotating list"}
          className="flex h-8 w-8 items-center justify-center rounded-full text-charcoal/50 transition-colors hover:bg-charcoal/5 hover:text-terracotta"
        >
          {paused ? <PlayIcon className="h-4 w-4" /> : <PauseIcon className="h-4 w-4" />}
        </button>

        <div
          key={index}
          className="carousel-item flex min-h-[24px] items-center justify-center gap-2 text-center text-sm font-medium text-charcoal sm:text-base"
        >
          {current.kind === "service" ? (
            <ServiceIcon id={current.id} className="h-5 w-5 shrink-0 text-terracotta" />
          ) : (
            <BadgeCheckIcon className="h-5 w-5 shrink-0 text-terracotta" />
          )}
          <span>{current.label}</span>
        </div>

        <div className="flex gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${item.label}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-terracotta" : "w-1.5 bg-charcoal/20"
              }`}
            />
          ))}
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
