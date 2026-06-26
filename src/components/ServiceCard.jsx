import { Link } from "react-router-dom";
import {
  Droplets,
  Flame,
  Wind,
  Building2,
  Home as HomeIcon,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const ICONS = {
  "water-heating": Droplets,
  boiler: Flame,
  hvac: Wind,
  commercial: Building2,
  residential: HomeIcon,
  repiping: Wrench,
};

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.category] || Wrench;

  return (
    <Link
      to={`/services#${service.id}`}
      className="plate group relative flex flex-col rounded-lg p-6 shadow-plate transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="rivet left-3 top-3" />
      <span className="rivet right-3 top-3" />
      <span className="rivet left-3 bottom-3" />
      <span className="rivet right-3 bottom-3" />

      {service.specialty && (
        <span className="eyebrow absolute right-6 top-6">Specialty</span>
      )}

      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-gradient">
        <Icon size={22} className="text-white" />
      </div>

      <h3 className="mt-5 font-display text-lg uppercase tracking-wide text-white">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-steel-400">
        {service.summary}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-brand-blue">
        View details
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
