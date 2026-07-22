import Image from "next/image";
import Link from "next/link";
import { contact, trustBadges } from "@/lib/content";
import { telHref, whatsappHref } from "@/lib/links";

export default function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="flex justify-center pt-10 sm:pt-16">
        <Image
          src="/images/logo/logo-wordmark.png"
          alt="Carraig Álainn Resin Surfaces"
          width={1260}
          height={1260}
          priority
          className="h-auto w-full sm:w-[clamp(22rem,42vw,46rem)]"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-16 pt-4 text-center sm:px-6 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
          Resin Bound Surfacing
        </p>
        <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.15] text-charcoal sm:text-5xl">
          Premium Resin Bound Surfaces, Fitted Right
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-charcoal/70">
          Smooth, permeable, low-maintenance surfacing for driveways, patios, and pathways, based in{" "}
          {contact.areaServed}.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[52px] items-center justify-center bg-terracotta px-8 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-terracotta-dark"
          >
            Get a Free Quote
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-medium text-charcoal/60">
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

        <div className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-x-6 gap-y-2.5 border-t border-charcoal/10 pt-6 text-sm text-charcoal/70 sm:flex sm:flex-wrap sm:justify-center">
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <CheckIcon /> {badge}
            </span>
          ))}
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
