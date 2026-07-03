import { contact } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function ServiceAreas() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

  return (
    <section id="areas" className="bg-stone-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              Areas We Cover
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
              Based in {contact.areaServed}
            </h2>
            <p className="mt-3 text-charcoal/70">
              Not sure if you&apos;re in range? Get in touch and we&apos;ll let you know.
            </p>
          </div>
        </FadeUp>

        <FadeUp delayMs={100}>
          <div className="mx-auto mt-10 aspect-[16/10] max-w-4xl overflow-hidden rounded-2xl border border-charcoal/10 sm:aspect-[16/8]">
            <iframe
              src={mapSrc}
              title={`Map showing ${contact.areaServed}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
