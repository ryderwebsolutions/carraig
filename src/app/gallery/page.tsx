import type { Metadata } from "next";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent resin bound driveway, patio, and pathway projects completed by Carraig Álainn Resin Surfaces in Carraig, Co. Tipperary.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <div className="bg-charcoal py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Our Work</h1>
            <p className="mt-3 max-w-xl text-white/70">
              A closer look at recent resin bound driveways, patios, and pathways.
            </p>
          </div>
        </div>
        <Gallery showHeading={false} />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
