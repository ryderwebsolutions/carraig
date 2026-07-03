// Single source of truth for all editable site content.
// Anything wrapped in [CONFIRM: ...] is an unverified fact and must be
// replaced with real information from Derek before launch.
// Search the codebase for "[CONFIRM" to find every outstanding item.

export const business = {
  name: "Carraig Álainn Resin Surfaces",
  shortName: "Carraig Álainn",
  tagline: "Beautiful rock, beautifully laid.",
  owner: "Derek Deane",
  domain: "carraigalainnresinsurfaces.ie",
  instagramHandle: "@derekdeane.resinbound",
  instagramUrl: "https://www.instagram.com/derekdeane.resinbound",
};

// Single source of truth for contact details. Update these three values
// once Derek confirms them and every call/WhatsApp/email link on the site
// updates automatically.
export const contact = {
  phone: "086 872 5193",
  // Digits-only version for tel:/wa.me links, e.g. "353871234567". Leave
  // blank until confirmed so we don't ship a broken/placeholder link.
  phoneDigits: "353868725193",
  whatsappDigits: "353868725193",
  email: "[CONFIRM: email address]",
  areaServed: "[CONFIRM: exact service area — likely Carrigallen / South Leitrim, verify with Derek]",
};

export type ServiceId =
  | "driveways"
  | "patios"
  | "pathways"
  | "repairs"
  | "commercial";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  confirmed: boolean;
}

export const services: Service[] = [
  {
    id: "driveways",
    title: "Resin Bound Driveways",
    description:
      "A smooth, permeable, seamless finish that transforms a tired gravel, tarmac, or concrete driveway — resists weeds, moss, and cracking.",
    confirmed: true,
  },
  {
    id: "patios",
    title: "Resin Bound Patios",
    description:
      "A durable, slip-resistant surface for patios and outdoor living areas, laid smooth with no loose stones underfoot.",
    confirmed: true,
  },
  {
    id: "pathways",
    title: "Pathways & Garden Surfacing",
    description:
      "Neat, low-maintenance paths and garden surfacing that tie the rest of the property together.",
    confirmed: true,
  },
  {
    id: "repairs",
    title: "Repairs & Resurfacing",
    description:
      "[CONFIRM: does Derek offer repair/resurfacing work on existing resin, tarmac, or concrete surfaces?]",
    confirmed: false,
  },
  {
    id: "commercial",
    title: "Commercial Resin Surfacing",
    description:
      "[CONFIRM: does Derek take on commercial/business premises work, or residential only?]",
    confirmed: false,
  },
];

export interface Project {
  id: string;
  title: string;
  surfaceType: ServiceId;
  // Paths are placeholders until Derek supplies real project photos.
  beforeImage: string | null;
  afterImage: string | null;
  description: string;
}

// No real completed-project photos have been supplied yet. Each entry is a
// labelled placeholder slot — replace beforeImage/afterImage with real photo
// paths (e.g. "/images/projects/kilkenny-driveway-after.jpg") as Derek sends
// them, and this component needs no other changes.
export const projects: Project[] = [
  {
    id: "placeholder-1",
    title: "[PLACEHOLDER: project title, e.g. \"Driveway, Carrigallen\"]",
    surfaceType: "driveways",
    beforeImage: null,
    afterImage: null,
    description: "[PLACEHOLDER: short description once photo is supplied]",
  },
  {
    id: "placeholder-2",
    title: "[PLACEHOLDER: project title]",
    surfaceType: "patios",
    beforeImage: null,
    afterImage: null,
    description: "[PLACEHOLDER: short description once photo is supplied]",
  },
  {
    id: "placeholder-3",
    title: "[PLACEHOLDER: project title]",
    surfaceType: "pathways",
    beforeImage: null,
    afterImage: null,
    description: "[PLACEHOLDER: short description once photo is supplied]",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

// Ready to receive real client reviews. The single entry below is an
// explicitly-labelled placeholder, not a fabricated review — replace it (or
// add more) once Derek shares real feedback, and remove it if none exist yet.
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    name: "[PLACEHOLDER: client name]",
    quote: "[PLACEHOLDER — insert real client review once supplied]",
    rating: 0,
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Get in touch",
    description: "Call, WhatsApp, or send the quote form with a few details about your project.",
  },
  {
    step: 2,
    title: "Site visit & measure-up",
    description: "Derek calls out to measure up and talk through finishes and colour options in person.",
  },
  {
    step: 3,
    title: "Receive your quote",
    description: "A clear, no-obligation quote based on the size and spec of your job.",
  },
  {
    step: 4,
    title: "Surface installed",
    description: "Your driveway, patio, or path is installed to a professional, finished standard.",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What is resin bound surfacing?",
    answer:
      "Resin bound surfacing is a mix of natural aggregate stone and clear resin, trowelled to a smooth, level, permeable finish. Unlike loose gravel, the stone is fully bound in place.",
  },
  {
    question: "Is resin bound surfacing permeable?",
    answer:
      "Yes — resin bound systems are designed to let water drain through the surface, which is why they're a common SUDS-friendly choice for driveways.",
  },
  {
    question: "Do I need to remove my existing driveway first?",
    answer:
      "[CONFIRM: does Derek install over existing suitable surfaces, or does every job require full excavation?]",
  },
];

export const whyUsPoints = [
  {
    title: "Smooth, seamless, permeable finish",
    description: "No loose stones, no puddling — just a clean, modern surface that drains naturally.",
  },
  {
    title: "Low maintenance",
    description: "Resists weeds and moss far better than gravel, tarmac, or block paving.",
  },
  {
    title: "Natural stone blends",
    description: "[CONFIRM: exact colour/aggregate range Derek offers]",
  },
  {
    title: "Personal, local service",
    description:
      "[CONFIRM: solo operator vs team — copy currently assumes Derek is hands-on from quote to finish]",
  },
];

export const trustBadges: string[] = [
  "Permeable & SUDS-Friendly",
  "Weed & Moss Resistant",
  // Do not add a service-area or "years trading" badge here until confirmed.
];
