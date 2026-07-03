import { testimonials } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">What Clients Say</p>
          <h2 className="mt-2 max-w-xl font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Client Reviews
          </h2>
        </FadeUp>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <FadeUp key={t.id}>
              <figure className="h-full rounded-2xl border border-dashed border-charcoal/20 bg-white p-6">
                {t.rating > 0 && (
                  <div className="mb-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        className={`h-4 w-4 ${i < t.rating ? "text-terracotta" : "text-charcoal/15"}`}
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
                      </svg>
                    ))}
                  </div>
                )}
                <blockquote className="text-[15px] italic leading-relaxed text-charcoal/70">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-charcoal">{t.name}</figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
