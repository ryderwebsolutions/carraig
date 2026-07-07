import { business, contact } from "./content";

// Centralised link builders so every CTA on the site derives from the same
// contact constants. Once contact.phoneDigits / whatsappDigits / email are
// filled in (see content.ts), every button below becomes live with no
// further code changes.

export const telHref = contact.phoneDigits ? `tel:+${contact.phoneDigits}` : "#";

// A prefilled opening message so enquiries arrive with useful context instead
// of a blank chat, without needing any backend or form submission.
const whatsappDefaultMessage = `Hi ${business.owner.split(" ")[0]}, I'd like a quote for a resin bound driveway/patio.`;

export const whatsappHref = contact.whatsappDigits
  ? `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(whatsappDefaultMessage)}`
  : "https://wa.me/";

export const emailReady = Boolean(contact.email);
export const mailHref = emailReady ? `mailto:${contact.email}` : "#";

export const contactReady = Boolean(contact.phoneDigits);
export const whatsappReady = Boolean(contact.whatsappDigits);
