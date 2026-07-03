import { contact } from "@/lib/content";
import { mailHref, telHref, whatsappHref, emailReady } from "@/lib/links";

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-20 text-white sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Get In Touch</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">Get Your Free Quote</h2>
        <p className="mt-4 text-white/70">
          Call, WhatsApp, or drop us an email with a few details about your project and we&apos;ll get
          back to you to arrange a site visit and quote.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mx-auto sm:max-w-sm">
          <a
            href={telHref}
            className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-white/15 px-5 text-base font-medium hover:bg-white/5"
          >
            <PhoneIcon /> {contact.phone}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-white/15 px-5 text-base font-medium hover:bg-white/5"
          >
            <WhatsAppIcon /> WhatsApp Us
          </a>
          {emailReady && (
            <a
              href={mailHref}
              className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-white/15 px-5 text-base font-medium hover:bg-white/5"
            >
              <MailIcon /> {contact.email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1120.2 12 8.2 8.2 0 0112 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path d="M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
