import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get a free, no-obligation quote for a resin bound driveway, patio, or pathway in Carraig, Co. Tipperary from Carraig Álainn Resin Surfaces.",
  alternates: { canonical: "/contact" },
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
