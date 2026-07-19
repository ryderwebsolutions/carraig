import Link from "next/link";
import { services } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function Services({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section id="services" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">What We Do</p>
          <Heading className="mt-2 max-w-xl font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Resin Bound Surfacing, Done Properly
          </Heading>
        </FadeUp>

        <FadeUp delayMs={80}>
          <ul className="mt-10 divide-y divide-charcoal/10 border-t border-charcoal/10 sm:mt-12">
            {services.map((service) => (
              <li key={service.id} className="py-6">
                <Link href={service.slug} className="group block">
                  <h3 className="font-heading text-lg font-semibold text-charcoal group-hover:text-terracotta sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70 sm:text-base">
                    {service.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
