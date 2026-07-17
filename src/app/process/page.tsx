import type { Metadata } from "next";
import Header from "@/components/Header";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

const title = "Our Process";
const description =
  "From first enquiry to finished surface — how Carraig Álainn Resin Surfaces delivers a resin bound driveway, patio, or pathway.";
const image = "/images/video-posters/mixing-resin-quartz.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: { title, description, url: "/process", images: [image], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Process headingLevel="h1" />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
