"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { business, contact } from "@/lib/content";
import { telHref, whatsappHref } from "@/lib/links";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#our-work", label: "Our Work" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#areas", label: "Areas We Cover" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur border-b border-charcoal/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/logo/logo-circle.png"
              alt=""
              width={320}
              height={320}
              priority
              className="h-9 w-9 sm:h-10 sm:w-10"
            />
            <span className="font-heading text-lg font-semibold text-charcoal sm:text-xl">
              {business.shortName}
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${business.name} on Instagram`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal/70 transition-colors hover:bg-charcoal/5 hover:text-terracotta"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message ${business.name} on WhatsApp`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal/70 transition-colors hover:bg-charcoal/5 hover:text-terracotta"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={telHref}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-terracotta"
            >
              {contact.phone}
            </a>
            <Link
              href="/#contact"
              className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal lg:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 top-[57px] z-50 flex flex-col bg-stone-50 lg:hidden">
          <nav className="flex flex-1 flex-col items-stretch gap-1 overflow-y-auto px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-lg font-medium text-charcoal transition-colors hover:bg-charcoal/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 border-t border-charcoal/10 p-4">
            <a
              href={telHref}
              className="flex min-h-[44px] items-center justify-center rounded-full border border-charcoal/20 px-5 text-base font-semibold text-charcoal"
            >
              Call {contact.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center rounded-full bg-moss px-5 text-base font-semibold text-white"
            >
              WhatsApp Us
            </a>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center justify-center rounded-full bg-terracotta px-5 text-base font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
