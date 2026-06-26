import {
  ShieldCheck,
  ClipboardCheck,
  Clock3,
  Sparkles,
  Building2,
  Droplets,
} from "lucide-react";
import { business } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import TrustBar from "../components/TrustBar";
import CTASection from "../components/CTASection";

const values = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    text: `Every job is performed under California contractor's license ${business.license} \u2014 fully licensed and insured for residential and commercial work.`,
  },
  {
    icon: ClipboardCheck,
    title: "Upfront Free Estimates",
    text: "Clear pricing before work begins. No surprise add-ons, no pressure \u2014 just an honest assessment of what the job needs.",
  },
  {
    icon: Clock3,
    title: "Emergency Response",
    text: "Plumbing emergencies don't wait for business hours. We're set up to respond quickly when something needs attention now.",
  },
  {
    icon: Sparkles,
    title: "Clean, Careful Work",
    text: "Whether it's a single closet install or a commercial mechanical room, we treat every property with the same respect and attention to detail.",
  },
  {
    icon: Droplets,
    title: "Water Heating Specialists",
    text: "Water heating of any and all kinds is where we shine \u2014 it shows in the quality and reliability of every install.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    text: "From a single-family kitchen sink to multi-unit corridor distribution lines, we scale our approach to the size of the job.",
  },
];

export default function About() {
  return (
    <div>
      <section className="bg-navy-gradient py-20 sm:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-3">About Us</p>
          <h1 className="max-w-2xl text-balance font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
            {business.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg text-steel-400">
            {business.name} is a licensed plumbing company serving the Bay
            Area from {business.serviceAreaShort}, with a focus on water
            heating, boiler systems, and clean, code-correct copper
            workmanship.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* OWNER PROFILE */}
      <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="plate relative mx-auto w-full max-w-sm rounded-lg p-8 shadow-plate sm:p-10">
            <span className="rivet left-3 top-3" />
            <span className="rivet right-3 top-3" />
            <span className="rivet left-3 bottom-3" />
            <span className="rivet right-3 bottom-3" />

            <img
              src="/images/about/34483.png"
              alt={business.owner}
              className="aspect-[3/4] w-full rounded-md object-cover object-center"
            />
            <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-white">
              {business.owner}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-brand-blue">
              {business.ownerTitle}
            </p>
            <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-steel-400">
              <p>{business.license}</p>
              <p>Licensed &amp; Insured Plumbing Contractor</p>
              <p>Serving {business.serviceAreaShort}, CA</p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="The Person Behind the Pipe Wrench"
              title="Hands-on expertise, on every job"
            />
            <p className="mt-5 leading-relaxed text-steel-600">
              {business.name} is led by {business.owner}, a licensed plumber
              who works directly on the jobs the company takes on —
              from tankless water heater installs in a single-family hallway
              closet to multi-unit copper distribution running the length of
              a commercial corridor.
            </p>
            <p className="mt-4 leading-relaxed text-steel-600">
              That hands-on approach is the foundation of the business: a
              direct line between the person estimating the work and the
              person doing it, with no layers in between. It's why clients
              get straightforward answers, fair pricing, and work that's
              built to hold up.
            </p>
            <p className="mt-4 leading-relaxed text-steel-600">
              The company specializes in water heating and boiler systems,
              but handles the full range of residential and commercial
              plumbing — repiping, fixture work, rough-in for new
              construction, and ongoing maintenance for property managers and
              homeowners alike.
            </p>
            <p className="mt-6 border-t border-steel-200 pt-5 text-sm leading-relaxed text-steel-500 italic">
              <strong>We take pride in our work and stand by it even after the job is complete.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-steel-100 py-20 sm:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Clients Choose Us"
            title="Built around trust, reliability, and clean workmanship"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="plate-light rounded-lg p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-gradient">
                  <v.icon size={20} className="text-white" />
                </div>
                <h3 className="mt-4 font-display text-base uppercase tracking-wide text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg">
           <img
              src="/images/about/34485.png"
              alt={`${business.owner} working on a kitchen faucet`}
              className="aspect-[4/3] w-full rounded-lg object-cover object-center"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Office Hours"
              title="When to reach us"
              description="Reach out any time, we respond quickly during business hours and are set up for emergency calls outside of them."
            />
            <div className="mt-7 space-y-3">
              {business.hours.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center justify-between border-b border-steel-200 pb-3"
                >
                  <span className="font-display text-sm uppercase tracking-wide text-navy-900">
                    {h.label}
                  </span>
                  <span className="font-mono text-sm text-steel-600">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
