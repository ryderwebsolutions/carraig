import { contact } from "./content";

// Centralised link builders so every CTA on the site derives from the same
// contact constants. Once contact.phoneDigits / whatsappDigits / email are
// filled in (see content.ts), every button below becomes live with no
// further code changes.

export const telHref = contact.phoneDigits ? `tel:+${contact.phoneDigits}` : "#";

export const whatsappHref = contact.whatsappDigits
  ? `https://wa.me/${contact.whatsappDigits}`
  : "https://wa.me/";

export const mailHref = contact.email.startsWith("[CONFIRM") ? "#" : `mailto:${contact.email}`;

export const contactReady = Boolean(contact.phoneDigits);
export const whatsappReady = Boolean(contact.whatsappDigits);
export const emailReady = !contact.email.startsWith("[CONFIRM");
