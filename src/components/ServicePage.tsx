import Image from "next/image";
import Link from "next/link";
import { business, contact, faqs, projects, services, servicePages, type ServiceId } from "@/lib/content";
import { ServiceIcon } from "./icons";
import Breadcrumbs from "./Breadcrumbs";
import FadeUp from "./FadeUp";
import Contact from "./Contact";

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicePage({ serviceId }: { serviceId: ServiceId }) {
  const service = services.find((s) => s.id === serviceId)!;
  const content = servicePages[serviceId];
  const relatedProjects = projects.filter((p) => p.surfaceType === serviceId);
  const siteUrl = `https://${business.domain}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: content.metaDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: business.name,
      url: siteUrl,
      telephone: `+${contact.phoneDigits}`,
    },
    areaServed: contact.areaServed,
    url: `${siteUrl}${service.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="border-b border-charcoal/10 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
        </div>
      </div>

      <section className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-28">
        <Image src={content.heroImage} alt={content.heroImageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Resin Bound Surfacing</p>
          <h1 className="mt-2 max-w-2xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">{content.intro}</p>
        </div>
      </section>

      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeUp>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {content.benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <ServiceIcon id={serviceId} className="mt-1 h-6 w-6 shrink-0 text-terracotta" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal">{benefit.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal/70">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-stone-100 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeUp>
              <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Real Projects</p>
              <h2 className="mt-2 max-w-xl font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
                {`${service.title} We've Completed`}
              </h2>
            </FadeUp>

            <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3">
              {relatedProjects.map((project, i) => (
                <FadeUp key={project.id} delayMs={i * 60}>
                  <Link href={`/projects/${project.id}`} className="group block w-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-200">
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} — ${project.description}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-3 font-heading text-base font-semibold text-charcoal">{project.title}</h3>
                  </Link>
                </FadeUp>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-charcoal/20 px-6 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal/5"
              >
                See All Our Work
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">FAQs</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">Common Questions</h2>
          </FadeUp>

          <FadeUp delayMs={80}>
            <div className="mt-8 divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-charcoal marker:content-none">
                    {faq.question}
                    <ChevronIcon className="h-5 w-5 shrink-0 text-terracotta transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <Contact />
    </>
  );
}
