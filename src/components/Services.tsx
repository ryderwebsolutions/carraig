import { services } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">What We Do</p>
          <h2 className="mt-2 max-w-xl font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Resin Bound Surfacing, Done Properly
          </h2>
        </FadeUp>

        <FadeUp delayMs={80}>
          <ul className="mt-10 divide-y divide-charcoal/10 border-t border-charcoal/10 sm:mt-12">
            {services.map((service) => (
              <li key={service.id} className="flex gap-5 py-6 sm:gap-8">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal sm:text-xl">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-1.5 max-w-2xl text-[15px] leading-relaxed sm:text-base ${
                      service.confirmed ? "text-charcoal/70" : "text-charcoal/40"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
