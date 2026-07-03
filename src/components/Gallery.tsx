"use client";

import { useState } from "react";
import { projects, services, business, type ServiceId } from "@/lib/content";
import FadeUp from "./FadeUp";

type Filter = "all" | ServiceId;

export default function Gallery({ showHeading = true }: { showHeading?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.surfaceType === filter);
  const activeProject = projects.find((p) => p.id === lightboxId) ?? null;

  return (
    <section id="our-work" className="bg-stone-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeading && (
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Our Work</p>
            <h2 className="mt-2 max-w-xl font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-3 max-w-xl text-charcoal/70">
              Real finished jobs go here as Derek sends them through — this gallery is reserved for
              genuine completed work, never stock photography.
            </p>
          </FadeUp>
        )}

        {projects.length > 0 && (
          <div className="mt-8 flex gap-2 overflow-x-auto no-scrollbar">
            <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
              All
            </FilterChip>
            {services.map((s) => (
              <FilterChip key={s.id} active={filter === s.id} onClick={() => setFilter(s.id)}>
                {s.title}
              </FilterChip>
            ))}
          </div>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <FadeUp key={project.id} delayMs={i * 60}>
              <button
                type="button"
                onClick={() => setLightboxId(project.id)}
                className="group block w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-white text-left"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-stone-100 to-charcoal/10">
                  {project.afterImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.afterImage}
                      alt={project.description}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-8 w-8 text-charcoal/25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      >
                        <path d="M4 16l4.5-4.5a2 2 0 012.8 0L16 16M14 14l1.5-1.5a2 2 0 012.8 0L20 14M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs font-medium uppercase tracking-wide text-charcoal/40">
                        Project photo coming soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold text-charcoal">{project.title}</h3>
                  <p className="mt-1 text-sm text-charcoal/60">{project.description}</p>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-charcoal/20 px-6 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal/5"
          >
            See More on Instagram
          </a>
        </div>
      </div>

      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4"
          onClick={() => setLightboxId(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxId(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full bg-stone-100">
              {activeProject.afterImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={activeProject.afterImage}
                  alt={activeProject.description}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-charcoal/40">
                  Project photo coming soon
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-charcoal">{activeProject.title}</h3>
              <p className="mt-1 text-sm text-charcoal/60">{activeProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[40px] shrink-0 rounded-full border px-4 text-sm font-medium transition-colors ${
        active
          ? "border-terracotta bg-terracotta text-white"
          : "border-charcoal/15 bg-white text-charcoal/70 hover:border-charcoal/30"
      }`}
    >
      {children}
    </button>
  );
}
