import Image from "next/image";
import { services } from "@/lib/content";
import FadeUp from "./FadeUp";
import { ServiceIcon } from "./icons";

export default function Services({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section id="services" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeUp delayMs={100} className="lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/projects/patio-terracotta-curved-1.jpg"
              alt="A curved resin bound patio with a granite border, finished in a warm terracotta tone"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </FadeUp>

        <div className="lg:order-1">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">What We Do</p>
            <Heading className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
              Resin Bound Surfacing, Done Properly
            </Heading>
          </FadeUp>

          <FadeUp delayMs={80}>
            <ul className="mt-8 divide-y divide-charcoal/10 border-t border-charcoal/10">
              {services.map((service) => (
                <li key={service.id} className="flex gap-5 py-6">
                  <ServiceIcon id={service.id} className="mt-1 h-6 w-6 shrink-0 text-terracotta" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal/70 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
