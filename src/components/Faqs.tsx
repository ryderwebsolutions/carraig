import { faqs } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function Faqs() {
  if (faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="bg-stone-100 py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">FAQs</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Common Questions
          </h2>
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
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
