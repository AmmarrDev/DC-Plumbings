// Decorative, ambient backdrop for the dark hero section: abstract right-angle
// pipe runs + solder-joint dots, echoing the company's real install photos
// without being a literal diagram (that lives in PipeRouteDiagram instead).

export default function HeroPipeBackdrop({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0D7CFD" />
          <stop offset="100%" stopColor="#062A8A" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#heroBlue)" strokeWidth="2.5" opacity="0.35">
        <path d="M -40 120 H 260 V 280 H 520 V 90 H 760" />
        <path d="M 1240 200 H 980 V 60 H 700" />
        <path d="M -40 520 H 180 V 700 H 460 V 560 H 720 V 760" />
        <path d="M 1240 600 H 960 V 420 H 1080" />
      </g>
      <g fill="#0D7CFD" opacity="0.55">
        <circle cx="260" cy="120" r="4.5" />
        <circle cx="260" cy="280" r="4.5" />
        <circle cx="520" cy="280" r="4.5" />
        <circle cx="520" cy="90" r="4.5" />
        <circle cx="980" cy="200" r="4.5" />
        <circle cx="980" cy="60" r="4.5" />
        <circle cx="180" cy="520" r="4.5" />
        <circle cx="180" cy="700" r="4.5" />
        <circle cx="460" cy="700" r="4.5" />
        <circle cx="460" cy="560" r="4.5" />
        <circle cx="720" cy="560" r="4.5" />
        <circle cx="960" cy="600" r="4.5" />
        <circle cx="960" cy="420" r="4.5" />
      </g>
    </svg>
  );
}
