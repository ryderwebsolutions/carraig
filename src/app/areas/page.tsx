import type { Metadata } from "next";
import Header from "@/components/Header";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

const title = "Areas We Cover";
const description =
  "Carraig Álainn Resin Surfaces is based in Carraig, Co. Tipperary, and travels across the wider region for the right job — get in touch to check if your property is in range.";
const image = "/images/projects/driveway-buff-balustrade-entrance.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/areas" },
  openGraph: { title, description, url: "/areas", images: [image], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function AreasPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <ServiceAreas headingLevel="h1" />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
