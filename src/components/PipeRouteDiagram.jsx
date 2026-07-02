import { serviceAreaRoute } from "../data/siteData";

// Signature brand element: the service area drawn as a copper pipe schematic,
// in the same right-angle, soldered-joint visual language as the company's
// own install photos. Not a literal map — a plumbing diagram of the route.

function buildSegments(points) {
  const segments = [];
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    // Z-offset routing (vertical / horizontal / vertical) with the
    // horizontal jog at the midpoint Y, so the pipe run clears both
    // node labels instead of cutting through one of them.
    const midY = (a.y + b.y) / 2;
    const elbow1 = { x: a.x, y: midY };
    const elbow2 = { x: b.x, y: midY };
    segments.push({ a, elbow1, elbow2, b });
  }
  return segments;
}

export default function PipeRouteDiagram({ className = "" }) {
  const points = serviceAreaRoute;
  const segments = buildSegments(points);

  return (
    <svg
      viewBox="0 0 740 1120"
      className={className}
      role="img"
      aria-label="Schematic pipe-route diagram of the DC Plumbing Solutions service area, from San Francisco to San Jose"
    >
      <defs>
        <linearGradient id="pipeMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D08A53" />
          <stop offset="50%" stopColor="#8F5526" />
          <stop offset="100%" stopColor="#D08A53" />
        </linearGradient>
        <radialGradient id="fittingMetal" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#F2D9BE" />
          <stop offset="55%" stopColor="#B5703A" />
          <stop offset="100%" stopColor="#6E4019" />
        </radialGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0D7CFD" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0D7CFD" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* pipe run */}
      {segments.map((seg, i) => (
        <g key={i}>
          <path
            d={`M ${seg.a.x} ${seg.a.y} L ${seg.elbow1.x} ${seg.elbow1.y} L ${seg.elbow2.x} ${seg.elbow2.y} L ${seg.b.x} ${seg.b.y}`}
            fill="none"
            stroke="url(#pipeMetal)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* flow indicator */}
          <path
            d={`M ${seg.a.x} ${seg.a.y} L ${seg.elbow1.x} ${seg.elbow1.y} L ${seg.elbow2.x} ${seg.elbow2.y} L ${seg.b.x} ${seg.b.y}`}
            fill="none"
            stroke="#BFE0FF"
            strokeOpacity="0.85"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2 14"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-160"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          {/* elbow fittings */}
          <circle cx={seg.elbow1.x} cy={seg.elbow1.y} r="6" fill="url(#fittingMetal)" />
          <circle cx={seg.elbow2.x} cy={seg.elbow2.y} r="6" fill="url(#fittingMetal)" />
        </g>
      ))}

      {/* city nodes */}
      {points.map((p, i) => {
        const isEnd = i === 0 || i === points.length - 1;
        const isHQ = p.id === "hq";
        return (
          <g key={p.id}>
            <circle cx={p.x} cy={p.y} r="22" fill="url(#nodeGlow)" />
            <circle
              cx={p.x}
              cy={p.y}
              r={isEnd ? 9 : isHQ ? 8 : 6.5}
              fill={isHQ ? "#0D7CFD" : "#0A0F1A"}
              stroke={isEnd ? "#0D7CFD" : isHQ ? "#ffffff" : "#C7CDD6"}
              strokeWidth="3"
            />
            <text
              x={p.x + 22}
              y={p.y + 5}
              className="font-mono"
              fontSize="15"
              fill={isEnd ? "#FFFFFF" : isHQ ? "#0D7CFD" : "#9CA4B0"}
              fontWeight={isEnd || isHQ ? 700 : 500}
            >
              {p.name}
            </text>
            {p.note && (
              <text
                x={p.x + 22}
                y={p.y + 22}
                className="font-mono"
                fontSize="11"
                fill="#0D7CFD"
              >
                {p.note}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
