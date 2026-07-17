import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicePage from "@/components/ServicePage";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import { servicePages } from "@/lib/content";

const content = servicePages.driveways;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/resin-bound-driveways" },
  openGraph: {
    title: content.metaTitle,
    description: content.metaDescription,
    url: "/resin-bound-driveways",
    images: [content.heroImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.metaTitle,
    description: content.metaDescription,
    images: [content.heroImage],
  },
};

export default function ResinBoundDrivewaysPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <ServicePage serviceId="driveways" />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
