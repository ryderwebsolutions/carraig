import { services } from "@/lib/content";
import FadeUp from "./FadeUp";

const icons: Record<string, React.ReactNode> = {
  driveways: (
    <path d="M4 20l3-14h10l3 14M4 20h16M8 20v-4h8v4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  patios: (
    <path
      d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  pathways: (
    <path
      d="M6 21c1-4 2-6 2-9s-1-5-2-8M18 21c-1-4-2-6-2-9s1-5 2-8M11 12h2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  repairs: (
    <path
      d="M14.7 6.3a3 3 0 11-4.2 4.2L4 17v3h3l6.5-6.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  commercial: <path d="M4 21V8l8-5 8 5v13M4 21h16M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />,
};

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeUp key={service.id} delayMs={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 text-terracotta"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  aria-hidden="true"
                >
                  {icons[service.id]}
                </svg>
                <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">{service.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal/70">
                  {service.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
