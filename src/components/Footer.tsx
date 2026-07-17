import Link from "next/link";
import { business, contact, services } from "@/lib/content";
import { telHref, mailHref, emailReady } from "@/lib/links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-soft py-14 text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-lg font-semibold text-white">{business.name}</p>
            <p className="mt-2 text-sm">{business.tagline}</p>
            <p className="mt-4 text-xs text-white/65">Owned &amp; operated by {business.owner}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/65">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={telHref} className="hover:text-terracotta">
                  {contact.phone}
                </a>
              </li>
              {emailReady && (
                <li>
                  <a href={mailHref} className="hover:text-terracotta">
                    {contact.email}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta"
                >
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/65">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              {services.slice(0, 3).map((s) => (
                <li key={s.id}>
                  <Link href="/services" className="hover:text-terracotta">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/65">Sitemap</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-terracotta">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-terracotta">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-terracotta">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-terracotta">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-terracotta">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-terracotta">
                  Areas We Cover
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-terracotta">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-terracotta">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-sm text-white/65">{contact.areaServed}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-terracotta">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
