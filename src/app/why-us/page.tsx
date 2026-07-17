import type { Metadata } from "next";
import Header from "@/components/Header";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

const title = "Why Us";
const description =
  "Why homeowners in Carraig, Co. Tipperary choose Carraig Álainn Resin Surfaces for resin bound driveways, patios, and pathways.";
const image = "/images/aggregate-texture-real.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/why-us" },
  openGraph: { title, description, url: "/why-us", images: [image], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
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
