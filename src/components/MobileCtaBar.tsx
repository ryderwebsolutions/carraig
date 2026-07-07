import { telHref, whatsappHref } from "@/lib/links";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export default function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-charcoal/10 bg-stone-50/98 backdrop-blur shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telHref}
        className="flex min-h-[52px] flex-1 items-center justify-center gap-2 bg-charcoal text-base font-semibold text-white active:bg-charcoal-soft"
      >
        <PhoneIcon className="h-5 w-5" /> Call Us
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] flex-1 items-center justify-center gap-2 bg-moss text-base font-semibold text-white active:bg-moss-dark"
      >
        <WhatsAppIcon className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  );
}
