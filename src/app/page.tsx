import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <WhyUs />
        <Services />
        <Gallery />
        <Process />
        <ServiceAreas />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
