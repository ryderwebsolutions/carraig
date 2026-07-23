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

        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:mt-12 sm:grid-cols-2">
          {whyUsPoints.map((point, i) => (
            <FadeUp key={point.title} delayMs={80 + i * 90} className="block">
              <dt className="font-heading text-lg font-semibold text-charcoal">{point.title}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-charcoal/70">{point.description}</dd>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
}
