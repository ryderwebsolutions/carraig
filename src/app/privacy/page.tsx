import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import { business, contact } from "@/lib/content";
import { mailHref, emailReady } from "@/lib/links";

const title = "Privacy Policy";
const description = `Privacy policy for ${business.name}, covering what happens to your information when you visit ${business.domain}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Legal</p>
            <h1 className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-charcoal/60">Last updated 10 July 2026</p>

            <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-charcoal/80">
              <p>
                {business.name}{" "}
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a resin bound
                surfacing business based in {contact.areaServed}, Ireland, owned and operated by{" "}
                {business.owner}. This page explains what happens to your information when you visit{" "}
                {business.domain}.
              </p>

              <section>
                <h2 className="font-heading text-xl font-semibold text-charcoal">The short version</h2>
                <p className="mt-3">
                  This website does not use tracking cookies or analytics, and it has no contact forms.
                  Every way of getting in touch — phone, WhatsApp, or email — opens directly in your own
                  device&apos;s app rather than sending data through our website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-charcoal">What we collect</h2>
                <p className="mt-3">
                  We don&apos;t collect or store any personal information through this website. There is
                  no contact form, no account system, and no newsletter sign-up.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-charcoal">Third-party services</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <strong>Google Maps</strong> — our Areas We Cover page embeds a Google Map. Loading it
                    may allow Google to set its own cookies, governed by Google&apos;s own privacy policy.
                  </li>
                  <li>
                    <strong>Instagram &amp; WhatsApp</strong> — links to our Instagram profile and
                    WhatsApp open those platforms directly; each is covered by its own provider&apos;s
                    privacy policy.
                  </li>
                  <li>
                    <strong>Hosting</strong> — this site is hosted by Vercel. As with any website, our
                    hosting provider&apos;s servers process standard technical logs (such as IP address
                    and browser type) as part of delivering the site. This is normal web server behaviour
                    and isn&apos;t used by us for tracking or profiling.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-charcoal">Cookies</h2>
                <p className="mt-3">
                  We do not set any cookies directly. The Google Maps embed may set cookies belonging to
                  Google when loaded.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-charcoal">Your rights</h2>
                <p className="mt-3">
                  Since we don&apos;t collect personal data through this site, there is generally nothing
                  of yours for us to access, correct, or delete on our end. If you contact us by phone,
                  WhatsApp, or email, that conversation is held in the relevant app on your own device and
                  ours, not on this website.{" "}
                  {emailReady ? (
                    <>
                      If you have any questions about this policy or how we handle information, contact us
                      at{" "}
                      <a href={mailHref} className="text-terracotta underline underline-offset-2">
                        {contact.email}
                      </a>
                      .
                    </>
                  ) : (
                    "If you have any questions about this policy, please get in touch."
                  )}
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-charcoal">Changes to this policy</h2>
                <p className="mt-3">
                  We may update this policy from time to time. The date at the top shows when it was last
                  revised.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
