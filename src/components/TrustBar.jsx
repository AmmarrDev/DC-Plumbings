import { ShieldCheck, Clock, FileCheck2 } from "lucide-react";
import { business } from "../data/siteData";

const icons = [ShieldCheck, Clock, FileCheck2];

export default function TrustBar() {
  return (
    <div className="border-y border-steel-200 bg-steel-100">
      <div className="container-px mx-auto flex max-w-7xl flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {business.badges.map((badge, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={badge} className="flex items-center gap-2">
                <Icon size={18} className="text-brand-blue" />
                <span className="font-display text-sm uppercase tracking-wide text-navy-800">
                  {badge}
                </span>
              </div>
            );
          })}
        </div>
        <div className="font-mono text-xs uppercase tracking-wider text-steel-500">
          {business.license}
        </div>
      </div>
    </div>
  );
}
