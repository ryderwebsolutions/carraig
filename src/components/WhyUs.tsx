import Image from "next/image";
import { whyUsPoints } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeUp>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            {/* Stock placeholder — Unsplash, licensed for commercial use, photo by Joshua Hoehne
                (https://unsplash.com/@joshua_hoehne). Swap for a real close-up aggregate photo. */}
            <Image
              src="/images/stock/aggregate-texture.jpg"
              alt="Close-up of natural stone aggregate, similar to resin bound surfacing material"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </FadeUp>

        <FadeUp delayMs={100}>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Why Us</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Why Choose Carraig Álainn Resin Surfaces
          </h2>

          <dl className="mt-8 space-y-6">
            {whyUsPoints.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta/10">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 text-terracotta" fill="currentColor" aria-hidden="true">
                    <path d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" />
                  </svg>
                </div>
                <div>
                  <dt className="font-heading text-lg font-semibold text-charcoal">{point.title}</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-charcoal/70">{point.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
