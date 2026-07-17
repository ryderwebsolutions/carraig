import type { Metadata } from "next";
import Header from "@/components/Header";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

const title = "FAQs";
const description =
  "Common questions about resin bound driveways, patios, and pathways, answered by Carraig Álainn Resin Surfaces.";
const image = "/images/projects/driveway-compass-medallion.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faqs" },
  openGraph: { title, description, url: "/faqs", images: [image], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Faqs headingLevel="h1" />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
