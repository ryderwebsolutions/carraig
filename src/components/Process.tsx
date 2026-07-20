import { processSteps } from "@/lib/content";
import FadeUp from "./FadeUp";

export default function Process({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section id="process" className="bg-charcoal py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">How It Works</p>
          <Heading className="mt-2 max-w-xl font-heading text-3xl font-semibold sm:text-4xl">
            From Quote to Finished Surface
          </Heading>
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

        <FadeUp delayMs={320}>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <video
                src="/videos/mixing-resin-quartz.mp4"
                controls
                playsInline
                preload="none"
                poster="/images/video-posters/mixing-resin-quartz.jpg"
                className="aspect-video w-full rounded-lg bg-black"
              >
                Your browser does not support embedded video.
              </video>
              <p className="mt-3 text-sm text-white/70">Mixing the resin and quartz aggregate on site.</p>
            </div>
            <div>
              <video
                src="/videos/install-gated-driveway-laying.mp4"
                controls
                playsInline
                preload="none"
                poster="/images/video-posters/install-gated-driveway-laying.jpg"
                className="aspect-video w-full rounded-lg bg-black"
              >
                Your browser does not support embedded video.
              </video>
              <p className="mt-3 text-sm text-white/70">Laying and finishing a resin bound surface on site.</p>
            </div>
            <div>
              <video
                src="/videos/finished-driveway-texture-closeup.mp4"
                controls
                playsInline
                preload="none"
                poster="/images/video-posters/finished-driveway-texture-closeup.jpg"
                className="aspect-video w-full rounded-lg bg-black"
              >
                Your browser does not support embedded video.
              </video>
              <p className="mt-3 text-sm text-white/70">A close look at the finished, seamless texture.</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
