import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { business } from "../data/siteData";

export default function CTASection() {
  return (
    <section className="bg-navy-gradient">
      <div className="container-px mx-auto max-w-7xl py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow mb-3">Ready when you are</p>
            <h2 className="max-w-xl text-balance font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
              Book a free estimate on your next plumbing project
            </h2>
            <p className="mt-4 max-w-lg text-steel-400">
              Tell us what's going on and we'll get back to you with a clear,
              upfront estimate no pressure, no surprises.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-md bg-blue-gradient px-7 py-3.5 font-display text-sm uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.03]"
            >
              Book a Estimate
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
        </div>
      </div>
    </section>
  );
}
