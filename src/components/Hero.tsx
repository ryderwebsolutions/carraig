import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/content";
import { telHref, whatsappHref } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-charcoal text-white lg:min-h-[85vh] lg:items-center">
      {/* Stock placeholder — Unsplash, licensed for commercial use, photo by GoodLifeConstruction
          (https://unsplash.com/@goodlifeconstruction). Swap for Derek's own hero photo/video when supplied. */}
      <Image
        src="/images/stock/hero-driveway.jpg"
        alt="Modern house exterior with a wide, smooth concrete-style driveway in natural daylight"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 lg:pb-24 lg:pt-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-terracotta">
          Resin Bound Surfacing
        </p>
        <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Premium Resin Bound Surfaces, Fitted Right
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
          Smooth, permeable, low-maintenance surfacing for driveways, patios, and pathways —{" "}
          <span className="italic">[CONFIRM: service area — likely Carrigallen / South Leitrim]</span>.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#contact"
            className="flex min-h-[52px] items-center justify-center rounded-full bg-terracotta px-8 text-base font-semibold text-white transition-transform hover:bg-terracotta-dark active:scale-[0.98]"
          >
            Get a Free Quote
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/40 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
          >
            WhatsApp Derek
          </a>
        </div>

        <a
          href={telHref}
          className="mt-4 inline-block text-sm font-medium text-white/70 underline underline-offset-4 hover:text-white"
        >
          Or call {contact.phone}
        </a>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
          <span className="flex items-center gap-1.5">
            <CheckIcon /> Permeable &amp; SUDS-Friendly
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon /> Weed &amp; Moss Resistant
          </span>
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
