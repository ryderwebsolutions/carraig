import type { Metadata } from "next";
import Header from "@/components/Header";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why homeowners in Carraig, Co. Tipperary choose Carraig Álainn Resin Surfaces for resin bound driveways, patios, and pathways.",
  alternates: { canonical: "/why-us" },
};

export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <WhyUs headingLevel="h1" />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
