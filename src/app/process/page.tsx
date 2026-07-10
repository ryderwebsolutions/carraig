import type { Metadata } from "next";
import Header from "@/components/Header";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From first enquiry to finished surface — how Carraig Álainn Resin Surfaces delivers a resin bound driveway, patio, or pathway.",
  alternates: { canonical: "/process" },
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
