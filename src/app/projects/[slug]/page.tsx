import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import { business, projects, services } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};

  const description = `${project.description} A ${services.find((s) => s.id === project.surfaceType)?.title.toLowerCase()} project completed by ${business.name}.`;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: project.title,
      description,
      url: `/projects/${project.id}`,
      images: [project.afterImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [project.afterImage],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const service = services.find((s) => s.id === project.surfaceType)!;
  const siteUrl = `https://${business.domain}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    about: service.title,
    image: `${siteUrl}${project.afterImage}`,
    url: `${siteUrl}/projects/${project.id}`,
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div className="border-b border-charcoal/10 bg-stone-50">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Our Work", href: "/gallery" },
                { label: project.title },
              ]}
            />
          </div>
        </div>

        <section className="bg-stone-50 pb-16 pt-8 sm:pb-24 sm:pt-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">{service.title}</p>
            <h1 className="mt-2 max-w-2xl font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-xl text-charcoal/70">{project.description}</p>

            <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden bg-stone-200 sm:aspect-[21/9]">
              <Image
                src={project.afterImage}
                alt={`${project.title} — ${project.description}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {project.images.length > 1 && (
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {project.images.map((img) => (
                  <div key={img} className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                    <Image src={img} alt="" fill sizes="(min-width: 640px) 25vw, 33vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            {project.video && (
              <video
                key={project.video}
                src={project.video}
                controls
                playsInline
                preload="none"
                poster={project.afterImage}
                className="mt-8 aspect-video w-full bg-black"
              >
                Your browser does not support embedded video.
              </video>
            )}

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <Link href={service.slug} className="text-terracotta underline underline-offset-4 hover:text-terracotta-dark">
                More about {service.title}
              </Link>
              <Link href="/gallery" className="text-charcoal/70 underline underline-offset-4 hover:text-charcoal">
                See all our work
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
