import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { business, navLinks, services } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-steel-300">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <img
              src="/images/logo/header.png"
              alt="DC Plumbing Solutions"
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-400">
              Licensed plumbing, water heating, and boiler specialists serving
              the Bay Area from San Francisco to San Jose.
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-xs text-steel-400">
              <ShieldCheck size={15} className="text-brand-blue" />
              {business.license} &middot; Licensed &amp; Insured
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-white">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-steel-400 transition-colors hover:text-brand-blue"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="text-sm text-steel-400 transition-colors hover:text-brand-blue"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2.5 text-steel-400 transition-colors hover:text-brand-blue"
                >
                  <Phone size={15} className="shrink-0 text-brand-blue" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2.5 text-steel-400 transition-colors hover:text-brand-blue break-all"
                >
                  <Mail size={15} className="shrink-0 text-brand-blue" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-steel-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                Serving {business.serviceAreaShort}, CA
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-block rounded-md bg-blue-gradient px-5 py-2.5 font-display text-sm uppercase tracking-wide text-white shadow-md"
            >
              Book a Estimate
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
          <p>
            {business.owner} &middot; {business.ownerTitle}
          </p>
        </div>
      </div>
    </footer>
  );
}
