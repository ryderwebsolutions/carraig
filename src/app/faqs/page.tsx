import type { Metadata } from "next";
import Header from "@/components/Header";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Common questions about resin bound driveways, patios, and pathways, answered by Carraig Álainn Resin Surfaces.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Faqs headingLevel="h1" />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
