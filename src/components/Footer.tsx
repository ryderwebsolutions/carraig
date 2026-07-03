import Link from "next/link";
import { business, contact, services } from "@/lib/content";
import { telHref, mailHref } from "@/lib/links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-soft py-14 text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-lg font-semibold text-white">{business.name}</p>
            <p className="mt-2 text-sm">{business.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={telHref} className="hover:text-terracotta">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={mailHref} className="hover:text-terracotta">
                  {contact.email}
                </a>
              </li>
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
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              {services.slice(0, 3).map((s) => (
                <li key={s.id}>
                  <Link href="/#services" className="hover:text-terracotta">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Sitemap</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-terracotta">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-terracotta">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-terracotta">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-sm text-white/50">{contact.areaServed}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          &copy; {year} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
