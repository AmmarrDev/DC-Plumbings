export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`text-balance font-display text-3xl uppercase leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-steel-400" : "text-steel-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
