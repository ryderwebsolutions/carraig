import { contact } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-stone-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
              Areas We Cover
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
              Where We Work
            </h2>
            <p className="mt-4 rounded-xl border border-dashed border-charcoal/25 bg-white px-6 py-5 text-charcoal/70">
              {contact.areaServed}
            </p>
            <p className="mt-3 text-sm text-charcoal/50">
              Not sure if you&apos;re in range? Get in touch and Derek will let you know.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
