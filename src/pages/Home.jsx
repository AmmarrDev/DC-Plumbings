import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import { business, services, stats } from "../data/siteData";
import TrustBar from "../components/TrustBar";
import ServiceCard from "../components/ServiceCard";
import GalleryGrid from "../components/GalleryGrid";
import PipeRouteDiagram from "../components/PipeRouteDiagram";
import HeroPipeBackdrop from "../components/HeroPipeBackdrop";
import MapEmbed from "../components/MapEmbed";
import StatPlate from "../components/StatPlate";
import CTASection from "../components/CTASection";

const bullets = [
  "Responsive & upfront communication",
  "24-hour emergency services",
  "Free estimates",
  "Commercial & residential properties",
  "Simple to complex plumbing systems",
  "In-depth knowledge of code requirements",
  "Licensed, bonded & insured",
  "Serving the Bay Area and beyond",
];

function AnimatedBullets() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % bullets.length);
      setKey((k) => k + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4 flex items-center gap-2.5 h-7 overflow-hidden">
      <CheckCircle2 size={16} className="shrink-0 text-brand-blue" />
      <span
        key={key}
        className="animate-cycle text-sm font-medium text-steel-300"
      >
        {bullets[index]}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-gradient">
        <HeroPipeBackdrop className="absolute inset-0 h-full w-full opacity-70" />
        <div className="container-px relative mx-auto grid max-w-7xl gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>

            {/* Eyebrow + Family badge row */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <p className="eyebrow">
                {business.serviceAreaShort}
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-rose-300">
                <Wrench size={11} className="text-rose-400" />
                Family Owned &amp; Operated
              </span>
            </div>

            <h1 className="text-balance font-display text-4xl uppercase leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Bay Area plumbing,{" "}
              <span className="text-brand-blue">water heating</span> &amp;
              boiler experts
            </h1>

            {/* Tagline — from the logo, right under the H1 */}
            <p className="mt-3 font-display text-base tracking-widest text-steel-400 sm:text-lg">
              {business.tagline}
            </p>

            <p className="mt-4 max-w-lg text-balance text-base leading-relaxed text-steel-400">
              Expert plumbing built on a foundation of integrity, transparency, reliable results, and a decade of experience.
            </p>
            <AnimatedBullets />
            <p className="mt-3 max-w-sm text-balance text-sm leading-relaxed text-steel-100">
              Email, text or call us anytime.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-md bg-blue-gradient px-7 py-3.5 font-display text-sm uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.03]"
              >
                Book a Free Estimate
                <ArrowRight size={16} />
              </Link>
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-3.5 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-white/5"
              >
                <Phone size={16} className="text-brand-blue" />
                {business.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2.5">
              {business.badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 text-sm text-steel-300"
                >
                  <CheckCircle2 size={15} className="text-brand-blue" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl">
              <img
                src="/images/work/water-heating/tankless-heater-finished-install.jpg"
                alt="Tankless water heater installation by DC Plumbing Solutions"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="plate absolute -bottom-6 -left-8 max-w-[230px] rounded-lg p-5 shadow-plate">
              <p className="font-mono text-2xl font-semibold text-white">
                {stats[0].value}
              </p>
              <p className="mt-1 text-xs text-steel-400">{stats[0].label}</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES PREVIEW */}
      <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="text-balance font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
              Full-service plumbing,
              <br />
              built around your hot water
            </h2>
          </div>
          <Link
            to="/services"
            className="flex shrink-0 items-center gap-1.5 font-mono text-sm uppercase tracking-wide text-brand-blue hover:underline"
          >
            All services
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-steel-100 py-20 sm:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3">Our Recent Work</p>
              <h2 className="text-balance font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
                From compact closets to full commercial mechanical rooms
              </h2>
            </div>
            <Link
              to="/services#gallery"
              className="flex shrink-0 items-center gap-1.5 font-mono text-sm uppercase tracking-wide text-brand-blue hover:underline"
            >
              Full gallery
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-10">
            <GalleryGrid compact />
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-navy-gradient py-20 sm:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-3">Service Area</p>
          <h2 className="max-w-xl text-balance font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
            Running the line from {business.serviceAreaShort}
          </h2>
          <p className="mt-4 max-w-xl text-steel-400">
            We serve homes, multi-unit buildings, and businesses up and down
            the Peninsula and South Bay corridor &mdash; San Francisco, the
            Peninsula, and San Jose, with everywhere in between.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="mx-auto w-full max-w-sm">
              <PipeRouteDiagram className="w-full" />
            </div>
            <MapEmbed className="h-full min-h-[420px]" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <StatPlate key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
