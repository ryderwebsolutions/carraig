import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

const title = "Services";
const description =
  "Resin bound driveways, patios, and pathway surfacing from Carraig Álainn Resin Surfaces in Carraig, Co. Tipperary.";
const image = "/images/projects/driveway-compass-medallion.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", images: [image], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Services headingLevel="h1" />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
