import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import imageManifest from "../imageManifest.json";
import { serviceCategoryMeta } from "../data/siteData";

const ALL = "all";

export default function GalleryGrid({ defaultCategory = ALL, compact = false }) {
  const [active, setActive] = useState(defaultCategory);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = Object.keys(imageManifest);

  const items = useMemo(() => {
    const list = [];
    const cats = active === ALL ? categories : [active];
    cats.forEach((cat) => {
      imageManifest[cat].forEach((img) =>
        list.push({ ...img, category: cat })
      );
    });
    return compact ? list.slice(0, 8) : list;
  }, [active, compact]);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const next = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % items.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + items.length) % items.length);
  };

  return (
    <div>
      {!compact && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(ALL)}
            className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
              active === ALL
                ? "bg-blue-gradient text-white"
                : "bg-steel-100 text-steel-600 hover:bg-steel-200"
            }`}
          >
            Our Work
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                active === cat
                  ? "bg-blue-gradient text-white"
                  : "bg-steel-100 text-steel-600 hover:bg-steel-200"
              }`}
            >
              {serviceCategoryMeta[cat]?.label || cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((img, i) => (
          <button
            key={img.full}
            onClick={() => openLightbox(i)}
            className="group relative aspect-square overflow-hidden rounded-md bg-steel-200"
          >
            <img
              src={img.thumb}
              alt={`${serviceCategoryMeta[img.category]?.label} work by DC Plumbing Solutions`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-navy-900/0 transition-colors group-hover:bg-navy-900/20" />
            <span className="absolute bottom-2 left-2 rounded bg-navy-900/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
              {serviceCategoryMeta[img.category]?.label}
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && items[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            onClick={prev}
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={items[lightboxIndex].full}
            alt={`${serviceCategoryMeta[items[lightboxIndex].category]?.label} work`}
            className="max-h-[85vh] max-w-full rounded-md object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={next}
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-wide text-steel-400">
            {serviceCategoryMeta[items[lightboxIndex].category]?.label} &middot;{" "}
            {lightboxIndex + 1} / {items.length}
          </span>
        </div>
      )}
    </div>
  );
}
