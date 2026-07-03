import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { business, contact } from "@/lib/content";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Resin Bound Driveways & Patios — ${contact.areaServed}`,
    template: `%s | ${business.name}`,
  },
  description: `Resin bound driveways, patios, and pathways in ${contact.areaServed}, Ireland. Smooth, permeable, low-maintenance surfacing — get a free quote.`,
  openGraph: {
    title: `${business.name} | Resin Bound Driveways & Patios`,
    description: `Resin bound driveways, patios, and pathways in ${contact.areaServed}, Ireland. Get a free quote.`,
    url: siteUrl,
    siteName: business.name,
    images: ["/images/stock/hero-driveway.jpg"],
    type: "website",
    locale: "en_IE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  url: siteUrl,
  telephone: `+${contact.phoneDigits}`,
  areaServed: contact.areaServed,
  sameAs: [business.instagramUrl],
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
        {children}
      </body>
    </html>
  );
}
