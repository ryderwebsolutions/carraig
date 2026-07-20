import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <p className="font-heading text-6xl font-semibold text-terracotta">404</p>
        <h1 className="mt-4 font-heading text-2xl font-semibold text-charcoal sm:text-3xl">
          That page doesn&apos;t exist
        </h1>
        <p className="mt-3 max-w-sm text-charcoal/70">
          The page you&apos;re looking for isn&apos;t here — but we&apos;d still love to hear about
          your project.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex min-h-[48px] items-center justify-center border border-charcoal/20 px-6 text-base font-semibold text-charcoal hover:bg-charcoal/5"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex min-h-[48px] items-center justify-center bg-terracotta px-6 text-base font-semibold text-white hover:bg-terracotta-dark"
          >
            Get a Free Quote
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
