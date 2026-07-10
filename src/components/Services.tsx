import { services, type ServiceId } from "@/lib/content";
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
              <li key={service.id} className="flex gap-5 py-6 sm:gap-8">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta/10">
                  <ServiceIcon id={service.id} className="h-5 w-5 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70 sm:text-base">
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

function ServiceIcon({ id, className }: { id: ServiceId; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.7,
    "aria-hidden": true,
  };

  if (id === "driveways") {
    return (
      <svg {...common}>
        <path d="M4 20l3-13a2 2 0 012-1.5h6A2 2 0 0117 6.5L20 20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 14.5h11" strokeLinecap="round" />
        <path d="M3 20h18" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "patios") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 12h16M12 4v16" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 20c3-6 3-10 7-14M19 20c-3-6-3-10-7-14" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="6" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
