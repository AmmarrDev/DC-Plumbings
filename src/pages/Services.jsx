import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { services } from "../data/siteData";
import imageManifest from "../imageManifest.json";
import TrustBar from "../components/TrustBar";
import GalleryGrid from "../components/GalleryGrid";
import CTASection from "../components/CTASection";

function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }, 80);
    }
  }, [hash]);
}

export default function Services() {
  useScrollToHash();

  return (
    <div>
      <section className="bg-navy-gradient py-20 sm:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-3">Our Services</p>

          <h1 className="max-w-2xl text-balance font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
            Installation, maintenance &amp; repair residential and
            commercial
          </h1>

          <p className="mt-5 max-w-xl text-balance text-lg text-steel-400">
            Specializing in water heating, with full coverage across boiler
            systems, air handlers, commercial plumbing, residential
            plumbing, and repiping.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="container-px mx-auto max-w-7xl divide-y divide-steel-200 py-4">
        {services.map((service, i) => {
          const heroImg = imageManifest[service.category]?.[0];
          const reversed = i % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="grid scroll-mt-24 gap-10 py-16 lg:grid-cols-2 lg:items-center lg:gap-14"
            >
              <div className={reversed ? "lg:order-2" : ""}>
                {service.specialty && (
                  <span className="eyebrow mb-3 inline-block">
                    Specialty Service
                  </span>
                )}

                <h2 className="text-balance font-display text-2xl uppercase leading-tight text-navy-900 sm:text-3xl">
                  {service.title}
                </h2>

                <p className="mt-4 leading-relaxed text-steel-600">
                  {service.detail}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-navy-800"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-brand-blue"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={reversed ? "lg:order-1" : ""}>
                {heroImg && (
                  <>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={heroImg.full}
                        alt={`${service.title} work completed by DC Plumbing Solutions`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />

                      <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-900 shadow-sm">
                        Our Work
                      </div>
                    </div>

                    <p className="mt-2 text-xs uppercase tracking-wide text-steel-500">
                     project by DC Plumbing Solutions
                    </p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </section>

      <section
        id="gallery"
        className="scroll-mt-20 bg-steel-100 py-20 sm:py-24"
      >
        <div className="container-px mx-auto max-w-7xl">

          <h2 className="max-w-xl text-balance font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
            Photos from the field
          </h2>

          <p className="mt-4 max-w-xl text-steel-600">
            A collection of actual installation and service work completed
            by our team across residential and commercial projects.
          </p>

          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}