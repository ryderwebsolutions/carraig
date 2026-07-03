import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get a free quote for a resin bound driveway, patio, or pathway from Carraig Álainn Resin Surfaces.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
