import Image from "next/image";
import Link from "next/link";
import { contact, trustBadges } from "@/lib/content";
import { telHref, whatsappHref } from "@/lib/links";

export default function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
            Resin Bound Surfacing
          </p>
          <h1 className="mt-3 max-w-lg font-heading text-4xl font-semibold leading-tight text-charcoal sm:text-5xl lg:text-[3.25rem]">
            Premium Resin Bound Surfaces, Fitted Right
          </h1>
          <p className="mt-5 max-w-md text-lg text-charcoal/70">
            Smooth, permeable, low-maintenance surfacing for driveways, patios, and pathways, based in{" "}
            {contact.areaServed}.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-terracotta px-8 text-base font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              Get a Free Quote
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-charcoal/60">
            <a href={telHref} className="underline underline-offset-4 hover:text-terracotta">
              Call {contact.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-terracotta"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-charcoal/10 pt-6 text-sm text-charcoal/70 sm:flex sm:flex-wrap">
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <CheckIcon /> {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-lg border border-charcoal/10 lg:mt-0">
          <Image
            src="/images/projects/driveway-compass-medallion.jpg"
            alt="A custom compass medallion hand-detailed into a resin bound driveway surface"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-terracotta" fill="currentColor" aria-hidden="true">
      <path d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" />
    </svg>
  );
}
