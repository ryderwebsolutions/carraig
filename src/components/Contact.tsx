"use client";

import { useState, type FormEvent } from "react";
import { contact, services } from "@/lib/content";
import { mailHref, telHref, whatsappHref, emailReady } from "@/lib/links";

interface FormState {
  name: string;
  phone: string;
  email: string;
  town: string;
  surfaceType: string;
  size: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  town: "",
  surfaceType: "",
  size: "",
  message: "",
};

const PHONE_PATTERN = /^[0-9+()\s-]{7,}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    else if (!PHONE_PATTERN.test(form.phone)) next.phone = "Please enter a valid phone number.";
    if (form.email.trim() && !EMAIL_PATTERN.test(form.email)) next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Let us know a little about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // TODO(backend): wire this up to a real submission endpoint (Formspree,
    // a Next.js API route + email service, etc). Until then this falls back
    // to a mailto: draft — note that mailto cannot carry the selected photo
    // as a real attachment, so the file name is included as a text note only.
    if (emailReady) {
      const subject = encodeURIComponent(`Quote request — ${form.name}`);
      const bodyLines = [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        form.email ? `Email: ${form.email}` : null,
        form.town ? `Area/Town: ${form.town}` : null,
        form.surfaceType ? `Surface type: ${form.surfaceType}` : null,
        form.size ? `Approximate size: ${form.size}` : null,
        "",
        form.message,
        photoName ? `\n(Photo selected: ${photoName} — please attach manually, mailto can't carry it)` : null,
      ].filter(Boolean);
      window.location.href = `${mailHref}?subject=${subject}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    }

    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-charcoal py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Get In Touch</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">Get Your Free Quote</h2>
          <p className="mt-4 max-w-md text-white/70">
            Send over a few details and Derek will get back to you to arrange a site visit and quote.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={telHref}
              className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/15 px-5 text-base font-medium hover:bg-white/5"
            >
              <PhoneIcon /> {contact.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/15 px-5 text-base font-medium hover:bg-white/5"
            >
              <WhatsAppIcon /> WhatsApp Derek
            </a>
            <a
              href={mailHref}
              className="flex min-h-[52px] items-center gap-3 rounded-xl border border-white/15 px-5 text-base font-medium hover:bg-white/5"
            >
              <MailIcon /> {contact.email}
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-stone-50 p-6 text-charcoal sm:p-8">
          {submitted ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-moss/15">
                <svg viewBox="0 0 20 20" className="h-7 w-7 text-moss" fill="currentColor" aria-hidden="true">
                  <path d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold">Thanks, {form.name.split(" ")[0]}!</h3>
              <p className="mt-2 max-w-sm text-charcoal/70">
                {emailReady
                  ? "Your email app should have opened with your details ready to send — hit send to reach Derek."
                  : "Form captured. [CONFIRM: connect this form to a real submission endpoint before launch.]"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass(errors.name)}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" htmlFor="phone" error={errors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass(errors.phone)}
                  />
                </Field>
                <Field label="Email (optional)" htmlFor="email" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass(errors.email)}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Area / Town" htmlFor="town">
                  <input
                    id="town"
                    type="text"
                    value={form.town}
                    onChange={(e) => update("town", e.target.value)}
                    className={inputClass()}
                  />
                </Field>
                <Field label="Type of surface" htmlFor="surfaceType">
                  <select
                    id="surfaceType"
                    value={form.surfaceType}
                    onChange={(e) => update("surfaceType", e.target.value)}
                    className={inputClass()}
                  >
                    <option value="">Select...</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Approximate size (optional)" htmlFor="size">
                <input
                  id="size"
                  type="text"
                  placeholder="e.g. 40m²"
                  value={form.size}
                  onChange={(e) => update("size", e.target.value)}
                  className={inputClass()}
                />
              </Field>

              <Field label="Tell us about your project" htmlFor="message" error={errors.message}>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={inputClass(errors.message)}
                />
              </Field>

              <Field label="Photo of the area (optional)" htmlFor="photo">
                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? null)}
                  className="block w-full text-sm text-charcoal/70 file:mr-4 file:rounded-full file:border-0 file:bg-charcoal/10 file:px-4 file:py-2 file:text-sm file:font-medium"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 flex min-h-[52px] items-center justify-center rounded-full bg-terracotta px-8 text-base font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                Send Quote Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-charcoal/80">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(error?: string) {
  return `w-full min-h-[44px] rounded-lg border bg-white px-3.5 py-2.5 text-base text-charcoal outline-none transition-colors focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 ${
    error ? "border-red-400" : "border-charcoal/15"
  }`;
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
