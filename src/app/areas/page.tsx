import type { Metadata } from "next";
import Header from "@/components/Header";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Carraig Álainn Resin Surfaces is based in Carraig, Co. Tipperary — get in touch to check if your property is in range.",
  alternates: { canonical: "/areas" },
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
