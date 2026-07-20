import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { business, contact, services } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = `https://${business.domain}`;
const shareImage = "/images/projects/driveway-compass-medallion.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Resin Bound Driveways & Patios — ${contact.areaServed}`,
    template: `%s | ${business.name}`,
  },
  description: `Resin bound driveways, patios, and pathways in ${contact.areaServed}, Ireland. Smooth, permeable, low-maintenance surfacing — get a free quote.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${business.name} | Resin Bound Driveways & Patios`,
    description: `Resin bound driveways, patios, and pathways in ${contact.areaServed}, Ireland. Get a free quote.`,
    url: siteUrl,
    siteName: business.name,
    images: [shareImage],
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Resin Bound Driveways & Patios`,
    description: `Resin bound driveways, patios, and pathways in ${contact.areaServed}, Ireland. Get a free quote.`,
    images: [shareImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  description: `Resin bound driveways, patios, and pathways in ${contact.areaServed}, Ireland.`,
  url: siteUrl,
  image: `${siteUrl}${shareImage}`,
  telephone: `+${contact.phoneDigits}`,
  areaServed: contact.areaServed,
  sameAs: [business.instagramUrl],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      url: `${siteUrl}${s.slug}`,
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `${siteUrl}${s.slug}`,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-terracotta focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
