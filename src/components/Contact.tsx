import { contact } from "@/lib/content";
import { mailHref, telHref, whatsappHref, emailReady } from "@/lib/links";
import { PhoneIcon, WhatsAppIcon, MailIcon } from "./icons";

export default function Contact({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section id="contact" className="bg-charcoal py-20 text-white sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Get In Touch</p>
        <Heading className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">Get Your Free Quote</Heading>
        <p className="mt-4 text-white/70">
          Call, WhatsApp, or drop us an email with a few details about your project and we&apos;ll get
          back to you to arrange a site visit and quote.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mx-auto sm:max-w-sm">
          <a
            href={telHref}
            className="flex min-h-[52px] items-center justify-center gap-3 border border-white/15 px-5 text-base font-medium hover:bg-white/5"
          >
            <PhoneIcon /> {contact.phone}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-3 border border-white/15 px-5 text-base font-medium hover:bg-white/5"
          >
            <WhatsAppIcon /> WhatsApp Us
          </a>
          {emailReady && (
            <a
              href={mailHref}
              className="flex min-h-[52px] items-center justify-center gap-3 border border-white/15 px-5 text-base font-medium hover:bg-white/5"
            >
              <MailIcon /> {contact.email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
