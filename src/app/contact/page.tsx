import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

const title = "Get a Quote";
const description =
  "Get a free, no-obligation quote for a resin bound driveway, patio, or pathway in Carraig, Co. Tipperary from Carraig Álainn Resin Surfaces.";
const image = "/images/projects/patio-buff-bifold-doors.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact", images: [image], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Contact headingLevel="h1" />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
