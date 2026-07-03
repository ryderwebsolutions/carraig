// Single source of truth for all editable site content.

export const business = {
  name: "Carraig Álainn Resin Surfaces",
  shortName: "Carraig Álainn",
  tagline: "Beautiful rock, beautifully laid.",
  owner: "Derek Deane",
  domain: "carraigalainnresinsurfaces.ie",
  instagramHandle: "@derekdeane.resinbound",
  instagramUrl: "https://www.instagram.com/derekdeane.resinbound",
};

// Single source of truth for contact details. Update these values and every
// call/WhatsApp/email link on the site updates automatically.
export const contact = {
  phone: "086 872 5193",
  // Digits-only version for tel:/wa.me links, e.g. "353871234567".
  phoneDigits: "353868725193",
  whatsappDigits: "353868725193",
  // Leave blank until a real address exists — the email button hides itself
  // rather than showing a broken link.
  email: "",
  areaServed: "Carraig, Co. Tipperary",
  mapQuery: "Carraig, Co. Tipperary, Ireland",
};

export type ServiceId = "driveways" | "patios" | "pathways";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "driveways",
    title: "Resin Bound Driveways",
    description:
      "A smooth, permeable, seamless finish that transforms a tired gravel, tarmac, or concrete driveway — resists weeds, moss, and cracking.",
  },
  {
    id: "patios",
    title: "Resin Bound Patios",
    description:
      "A durable, slip-resistant surface for patios and outdoor living areas, laid smooth with no loose stones underfoot.",
  },
  {
    id: "pathways",
    title: "Pathways & Garden Surfacing",
    description:
      "Neat, low-maintenance paths and garden surfacing that tie the rest of the property together.",
  },
];

export interface Project {
  id: string;
  title: string;
  surfaceType: ServiceId;
  // Paths are placeholders until real project photos are added.
  beforeImage: string | null;
  afterImage: string | null;
  description: string;
}

// No completed-project photos loaded yet. Replace beforeImage/afterImage
// with real photo paths (e.g. "/images/projects/driveway-1-after.jpg") as
// they come in — the gallery needs no other changes.
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Resin Bound Driveway",
    surfaceType: "driveways",
    beforeImage: null,
    afterImage: null,
    description: "",
  },
  {
    id: "project-2",
    title: "Resin Bound Patio",
    surfaceType: "patios",
    beforeImage: null,
    afterImage: null,
    description: "",
  },
  {
    id: "project-3",
    title: "Pathway & Garden Surfacing",
    surfaceType: "pathways",
    beforeImage: null,
    afterImage: null,
    description: "",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}

// Empty until real client reviews are added — the section hides itself
// rather than showing a placeholder.
export const testimonials: Testimonial[] = [];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Get in touch",
    description: "Call or WhatsApp with a few details about your project.",
  },
  {
    step: 2,
    title: "Site visit & measure-up",
    description: "A site visit to measure up and talk through finishes and colour options in person.",
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
      "In many cases resin bound surfacing can be laid over a suitable existing surface — get in touch and we can advise after a site visit.",
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
    description: "A range of natural stone blends to suit any property.",
  },
  {
    title: "Personal, local service",
    description:
      "You deal directly with the same person from your first enquiry through to the finished job — no call centres, no middlemen.",
  },
];

export const trustBadges: string[] = [
  "Permeable & SUDS-Friendly",
  "Weed & Moss Resistant",
  // Do not add a service-area or "years trading" badge here until confirmed.
];
