// Single source of truth for all editable site content.

export const business = {
  name: "Carraig Álainn Resin Surfaces",
  shortName: "Carraig Álainn",
  tagline: "Beautiful rock, beautifully laid.",
  owner: "Derek Deane",
  domain: "www.carraigalainnresinsurfaces.ie",
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
  email: "ddn.deane@gmail.com",
  areaServed: "Carraig, Co. Tipperary",
  mapQuery: "Carraig, Co. Tipperary, Ireland",
};

// Broad, non-specific description of the wider service region — confirmed as
// "multi-county" in shape, but no exact town/county list has been confirmed
// yet. Do not name specific towns here until Derek confirms the real list —
// swap this note out for a named list once he does.
export const serviceRegionNote = "We're happy to travel across the wider region for the right job.";

export type ServiceId = "driveways" | "patios" | "pathways";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  // Path to this service's dedicated page.
  slug: string;
}

export const services: Service[] = [
  {
    id: "driveways",
    title: "Resin Bound Driveways",
    description:
      "A smooth, permeable, seamless finish that transforms a tired gravel, tarmac, or concrete driveway — resists weeds, moss, and cracking.",
    slug: "/resin-bound-driveways",
  },
  {
    id: "patios",
    title: "Resin Bound Patios",
    description:
      "A durable, slip-resistant surface for patios and outdoor living areas, laid smooth with no loose stones underfoot.",
    slug: "/resin-bound-patios",
  },
  {
    id: "pathways",
    title: "Pathways & Garden Surfacing",
    description:
      "Neat, low-maintenance paths and garden surfacing that tie the rest of the property together.",
    slug: "/resin-bound-pathways",
  },
];

export interface ServicePageContent {
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  benefits: { title: string; description: string }[];
}

// Long-form copy for each service's dedicated page. Kept separate from the
// compact `services` list above so the homepage/footer summaries stay short
// while the dedicated pages can go deeper. Every claim here is grounded in
// what's already established elsewhere in this file (whyUsPoints, real
// project descriptions) — no new technical or business claims.
export const servicePages: Record<ServiceId, ServicePageContent> = {
  driveways: {
    metaTitle: "Resin Bound Driveways",
    metaDescription:
      "Resin bound driveways in Carraig, Co. Tipperary and the surrounding region — a smooth, permeable, seamless finish that replaces tired gravel, tarmac, or concrete.",
    heroImage: "/images/projects/driveway-buff-balustrade-entrance.jpg",
    heroImageAlt: "A buff-finish resin bound driveway laid to a clean, seamless edge at a gated entrance",
    intro:
      "A resin bound driveway replaces loose gravel, cracked tarmac, or tired concrete with a smooth, seamless surface — laid in one continuous run with no joints for weeds or moss to take hold in.",
    benefits: [
      {
        title: "Permeable & SUDS-friendly",
        description:
          "Water drains straight through the surface instead of pooling or running off, which is why resin bound systems are a common choice for driveways.",
      },
      {
        title: "Resists weeds, moss, and cracking",
        description:
          "The aggregate is fully bound in place — no loose stones to scatter, and no gaps for weeds or moss to establish in.",
      },
      {
        title: "Laid to a clean, seamless edge",
        description:
          "Finished flush to your gates, steps, and borders for a tidy, professional edge all the way round.",
      },
      {
        title: "Custom detailing available",
        description:
          "From simple single-colour finishes to hand-detailed inlays, like a compass medallion set directly into the surface.",
      },
    ],
  },
  patios: {
    metaTitle: "Resin Bound Patios",
    metaDescription:
      "Resin bound patios in Carraig, Co. Tipperary and the surrounding region — a durable, slip-resistant surface laid smooth with no loose stones underfoot.",
    heroImage: "/images/projects/patio-terracotta-curved-1.jpg",
    heroImageAlt: "A curved resin bound patio with a granite border, finished in a warm terracotta tone",
    intro:
      "A resin bound patio gives outdoor living space a smooth, slip-resistant surface that's comfortable underfoot and laid flush to your doors for a seamless indoor-outdoor flow.",
    benefits: [
      {
        title: "Slip-resistant, smooth underfoot",
        description: "No loose stones or uneven joints — a durable surface that's comfortable to walk on barefoot.",
      },
      {
        title: "Laid flush to bifold and sliding doors",
        description:
          "Finished level with your threshold for a clean transition between indoor and outdoor space.",
      },
      {
        title: "Warm, natural stone tones",
        description: "Buff and terracotta aggregate blends that suit both modern and traditional properties.",
      },
      {
        title: "Curved and bespoke shapes",
        description: "Not limited to straight edges — laid to curves and borders to fit the shape of your garden.",
      },
    ],
  },
  pathways: {
    metaTitle: "Resin Bound Pathways & Garden Surfacing",
    metaDescription:
      "Resin bound pathways and garden surfacing in Carraig, Co. Tipperary and the surrounding region — neat, low-maintenance paths that tie the property together.",
    heroImage: "/images/projects/pathway-terracotta-cobblestone-border.jpg",
    heroImageAlt: "A sweeping terracotta-toned resin bound pathway finished with a natural granite setts border",
    intro:
      "Resin bound pathways and garden surfacing tie the rest of a property together — neat, permeable, and low enough maintenance to stay looking right for years.",
    benefits: [
      {
        title: "Ties the garden together",
        description: "A consistent, tidy surface linking your driveway, patio, and garden into one finished look.",
      },
      {
        title: "Low maintenance underfoot",
        description: "No loose gravel to sweep or top up — an occasional rinse keeps it looking like new.",
      },
      {
        title: "Finished with a proper border",
        description:
          "Edged in cobblestone or natural granite setts for a defined, professional finish that holds its line.",
      },
      {
        title: "Suits wider public and shared areas",
        description:
          "The same permeable system used for private paths also works for pedestrian islands and shared refuges.",
      },
    ],
  },
};

export interface Project {
  id: string;
  title: string;
  surfaceType: ServiceId;
  // Cover photo shown on the gallery card.
  afterImage: string;
  // Every photo for this job, including the cover — shown as a set in the lightbox.
  images: string[];
  description: string;
  // Optional short installation/finished clip shown alongside the photos.
  video?: string;
}

export const projects: Project[] = [
  {
    id: "compass-medallion",
    title: "Custom Compass Medallion Inlay",
    surfaceType: "driveways",
    afterImage: "/images/projects/driveway-compass-medallion.jpg",
    images: ["/images/projects/driveway-compass-medallion.jpg"],
    description: "A hand-detailed compass medallion, inlaid directly into the resin surface.",
    video: "/videos/install-compass-medallion-detailing.mp4",
  },
  {
    id: "buff-balustrade-driveway",
    title: "Resin Bound Driveway",
    surfaceType: "driveways",
    afterImage: "/images/projects/driveway-buff-balustrade-entrance.jpg",
    images: [
      "/images/projects/driveway-buff-balustrade-entrance.jpg",
      "/images/projects/driveway-buff-balustrade-close.jpg",
    ],
    description: "A buff-finish driveway laid to a clean, seamless edge.",
  },
  {
    id: "pedestrian-island",
    title: "Resin Bound Pedestrian Island",
    surfaceType: "pathways",
    afterImage: "/images/projects/pathway-pedestrian-island-1.jpg",
    images: [
      "/images/projects/pathway-pedestrian-island-1.jpg",
      "/images/projects/pathway-pedestrian-island-2.jpg",
      "/images/projects/pathway-pedestrian-island-3.jpg",
      "/images/projects/pathway-pedestrian-island-4.jpg",
      "/images/projects/pathway-pedestrian-island-5.jpg",
      "/images/projects/pathway-pedestrian-island-6.jpg",
      "/images/projects/pathway-pedestrian-island-7.jpg",
    ],
    description: "A raised pedestrian refuge finished in permeable resin bound surfacing.",
    video: "/videos/finished-pedestrian-island-pan.mp4",
  },
  {
    id: "buff-cobblestone-pathway",
    title: "Garden Pathway with Cobblestone Border",
    surfaceType: "pathways",
    afterImage: "/images/projects/pathway-buff-cobblestone-border.jpg",
    images: ["/images/projects/pathway-buff-cobblestone-border.jpg"],
    description: "A buff-finish path bordered in granite setts, leading out to the driveway.",
  },
  {
    id: "terracotta-cobblestone-pathway",
    title: "Curved Pathway with Granite Border",
    surfaceType: "pathways",
    afterImage: "/images/projects/pathway-terracotta-cobblestone-border.jpg",
    images: ["/images/projects/pathway-terracotta-cobblestone-border.jpg"],
    description: "A sweeping terracotta-toned pathway finished with a natural granite setts border, leading to the gate.",
  },
  {
    id: "buff-patio",
    title: "Resin Bound Patio, Buff Finish",
    surfaceType: "patios",
    afterImage: "/images/projects/patio-buff-bifold-doors.jpg",
    images: ["/images/projects/patio-buff-bifold-doors.jpg"],
    description: "A buff-finish patio laid flush to the bifold doors for a seamless indoor-outdoor flow.",
    video: "/videos/install-power-trowel-finishing.mp4",
  },
  {
    id: "terracotta-patio-corner",
    title: "Resin Bound Patio, Terracotta Finish",
    surfaceType: "patios",
    afterImage: "/images/projects/patio-terracotta-corner.jpg",
    images: ["/images/projects/patio-terracotta-corner.jpg"],
    description: "A warm terracotta-toned patio finish.",
  },
  {
    id: "terracotta-curved-patio",
    title: "Resin Bound Patio, Curved Design",
    surfaceType: "patios",
    afterImage: "/images/projects/patio-terracotta-curved-1.jpg",
    images: [
      "/images/projects/patio-terracotta-curved-1.jpg",
      "/images/projects/patio-terracotta-curved-2.jpg",
      "/images/projects/patio-terracotta-curved-3.jpg",
    ],
    description: "A curved terracotta patio with a granite border, laid to the sliding doors.",
    video: "/videos/finished-terracotta-patio-pan.mp4",
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
  {
    question: "How do I look after a resin bound surface?",
    answer:
      "Very little upkeep is needed — a periodic sweep and an occasional power wash is normally enough to keep it looking like new.",
  },
];

export const whyUsPoints = [
  {
    title: "Smooth, seamless, permeable finish",
    description: "No loose stones, no puddling — just a clean, modern surface that drains naturally.",
  },
  {
    title: "Low maintenance",
    description:
      "Resists weeds, moss, and frost far better than gravel, tarmac, or block paving, and won't fade in UV light.",
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

// Shown as a static row under the Hero. Do not add a service-area or
// "years trading" badge, named accreditations, insurance status, or other
// unconfirmed claims here until confirmed with the client.
export const trustBadges: string[] = [
  "Permeable & SUDS-Friendly",
  "Weed & Moss Resistant",
  "Premium UV-Stable Resin",
  "Natural Stone Aggregates",
];
