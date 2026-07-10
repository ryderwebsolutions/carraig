import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Resin bound driveways, patios, and pathway surfacing from Carraig Álainn Resin Surfaces in Carraig, Co. Tipperary.",
  alternates: { canonical: "/services" },
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
