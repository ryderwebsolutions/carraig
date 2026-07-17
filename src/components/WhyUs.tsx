import { whyUsPoints } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function WhyUs({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section id="why-us" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Why Us</p>
          <Heading className="mt-2 max-w-xl font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Why Choose Carraig Álainn Resin Surfaces
          </Heading>
        </FadeUp>

        <FadeUp delayMs={80}>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:mt-12 sm:grid-cols-2">
            {whyUsPoints.map((point) => (
              <div key={point.title} className="flex gap-4">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-1.5 h-4 w-4 shrink-0 text-terracotta"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" />
                </svg>
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
