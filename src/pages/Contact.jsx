import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { business } from "../data/siteData";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";
import TrustBar from "../components/TrustBar";

export default function Contact() {
  return (
    <div>
      <section className="bg-navy-gradient py-20 sm:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <p className="eyebrow mb-3">Contact / Estimate Request</p>
          <h1 className="max-w-2xl text-balance font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
            Let's talk about your plumbing project
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg text-steel-400">
            Fill out the form below to book a free estimate, or call us directly
            for urgent or emergency service.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="font-display text-xl uppercase tracking-wide text-navy-900">
              Book a Free Estimate
            </h2>
            <p className="mt-2 text-sm text-steel-600">
              We typically respond within one business day.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div className="plate relative rounded-lg p-7 shadow-plate">
              <span className="rivet left-3 top-3" />
              <span className="rivet right-3 top-3" />
              <span className="rivet left-3 bottom-3" />
              <span className="rivet right-3 bottom-3" />

              <h3 className="font-display text-base uppercase tracking-wide text-white">
                Direct Contact
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a
                    href={business.phoneHref}
                    className="flex items-center gap-3 text-steel-300 transition-colors hover:text-brand-blue"
                  >
                    <Phone size={17} className="shrink-0 text-brand-blue" />
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-center gap-3 break-all text-steel-300 transition-colors hover:text-brand-blue"
                  >
                    <Mail size={17} className="shrink-0 text-brand-blue" />
                    {business.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-steel-300">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-brand-blue" />
                  Serving {business.serviceAreaShort}, CA
                </li>
              </ul>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-steel-400">
                  <Clock3 size={14} className="text-brand-blue" />
                  Hours
                </p>
                <ul className="mt-3 space-y-2">
                  {business.hours.map((h) => (
                    <li
                      key={h.label}
                      className="flex justify-between text-xs text-steel-400"
                    >
                      <span>{h.label}</span>
                      <span>{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-white/10 pt-5 font-mono text-xs text-steel-500">
                {business.license} &middot; Licensed &amp; Insured
              </div>
            </div>

            <MapEmbed className="h-72" />
          </div>
        </div>
      </section>
    </div>
  );
}
