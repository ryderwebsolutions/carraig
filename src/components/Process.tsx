import { processSteps } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function Process() {
  return (
    <section id="process" className="bg-charcoal py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">How It Works</p>
          <h2 className="mt-2 max-w-xl font-heading text-3xl font-semibold sm:text-4xl">
            From Quote to Finished Surface
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <FadeUp key={step.step} delayMs={i * 80}>
              <div className="relative">
                <span className="font-heading text-4xl font-semibold text-terracotta">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
