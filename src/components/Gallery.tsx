"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects, services, business, type ServiceId } from "@/lib/content";
import FadeUp from "./FadeUp";

type Filter = "all" | ServiceId;

export default function Gallery({ showHeading = true }: { showHeading?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.surfaceType === filter);
  const activeProject = projects.find((p) => p.id === lightboxId) ?? null;

  function openLightbox(id: string, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setActiveImageIndex(0);
    setLightboxId(id);
  }

  function closeLightbox() {
    setLightboxId(null);
    lastTriggerRef.current?.focus();
  }

  useEffect(() => {
    if (!activeProject) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  const activeImage = activeProject?.images[activeImageIndex] ?? activeProject?.afterImage;

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
              A selection of completed driveways, patios, and pathways.
            </p>
          </FadeUp>
        )}

        {projects.length > 0 && (
          <div
            className="mt-8 flex gap-6 overflow-x-auto no-scrollbar"
            role="group"
            aria-label="Filter projects by type"
          >
            <FilterTab active={filter === "all"} onClick={() => setFilter("all")}>
              All
            </FilterTab>
            {services.map((s) => (
              <FilterTab key={s.id} active={filter === s.id} onClick={() => setFilter(s.id)}>
                {s.title}
              </FilterTab>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <FadeUp key={project.id} delayMs={i * 60}>
              <button
                type="button"
                onClick={(e) => openLightbox(project.id, e.currentTarget)}
                aria-haspopup="dialog"
                className="group block w-full text-left"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-200">
                  <Image
                    src={project.afterImage}
                    alt={`${project.title} — ${project.description}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {project.images.length > 1 && (
                    <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-charcoal/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <PhotosIcon /> {project.images.length}
                    </span>
                  )}
                </div>
                <div className="mt-3">
                  <h3 className="font-heading text-base font-semibold text-charcoal">{project.title}</h3>
                  {project.description && (
                    <p className="mt-1 text-sm text-charcoal/60">{project.description}</p>
                  )}
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

      {activeProject && activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            ref={closeButtonRef}
            aria-label="Close"
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full bg-stone-100">
              <Image
                src={activeImage}
                alt={`${activeProject.title} — ${activeProject.description}`}
                fill
                sizes="(min-width: 640px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            {activeProject.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto p-3">
                {activeProject.images.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Show photo ${idx + 1} of ${activeProject.images.length}`}
                    aria-current={idx === activeImageIndex}
                    className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 ${
                      idx === activeImageIndex ? "border-terracotta" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="p-5 pt-2">
              <h3 className="font-heading text-lg font-semibold text-charcoal">{activeProject.title}</h3>
              {activeProject.description && (
                <p className="mt-1 text-sm text-charcoal/60">{activeProject.description}</p>
              )}
              {activeProject.video && (
                <video
                  key={activeProject.video}
                  src={activeProject.video}
                  controls
                  playsInline
                  preload="none"
                  poster={activeProject.afterImage}
                  className="mt-4 max-h-[50vh] w-full rounded-xl bg-black"
                >
                  Your browser does not support embedded video.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FilterTab({
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
      aria-pressed={active}
      className={`shrink-0 whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition-colors ${
        active
          ? "border-terracotta text-charcoal"
          : "border-transparent text-charcoal/50 hover:text-charcoal"
      }`}
    >
      {children}
    </button>
  );
}

function PhotosIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h9a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h9v8H4V6z" />
      <path d="M15 3a2 2 0 012 2v8a1 1 0 11-2 0V5H7a1 1 0 110-2h8z" />
    </svg>
  );
}
