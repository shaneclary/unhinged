/**
 * The exploration cycle drawn as a drill strip log: one hole, four intervals.
 * The four lines are Liam's own: "Evaluate it. Target it. Drill it. Understand it."
 */
export function StripLog({ steps }: { steps: readonly string[] }) {
  const top = 34;
  const unit = 92;
  const fills = ["url(#sl-dots)", "url(#sl-cross)", "url(#sl-hatch)", "url(#sl-bars)"];
  const colors = ["var(--u-evaluation)", "var(--u-strategy)", "var(--u-drilling)", "var(--u-modeling)"];
  const height = top + unit * steps.length + 26;
  return (
    <svg
      className="striplog"
      viewBox={`0 0 320 ${height}`}
      role="img"
      aria-label={`The exploration cycle shown as a drill log, top to bottom: ${steps.join(" ")}`}
    >
      <defs>
        <pattern id="sl-dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1.2" fill="#1c211d" opacity="0.6" />
          <circle cx="7" cy="7" r="1.2" fill="#1c211d" opacity="0.6" />
        </pattern>
        <pattern id="sl-cross" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 0L10 10M10 0L0 10" stroke="#fafbf8" strokeWidth="1" opacity="0.55" />
        </pattern>
        <pattern id="sl-hatch" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M-2 10L10 -2" stroke="var(--ink)" strokeWidth="1" opacity="0.55" />
        </pattern>
        <pattern id="sl-bars" width="7" height="7" patternUnits="userSpaceOnUse">
          <path d="M3.5 0V7" stroke="#fafbf8" strokeWidth="1" opacity="0.55" />
        </pattern>
      </defs>

      {/* Ground surface and collar */}
      <path d={`M0 ${top}H320`} stroke="#9a6b43" strokeWidth="1.5" />
      <path d={`M0 ${top}l8 -7M16 ${top}l8 -7M32 ${top}l8 -7M96 ${top}l8 -7M112 ${top}l8 -7M128 ${top}l8 -7`} stroke="#9a6b43" strokeWidth="1" />
      <circle cx="68" cy={top} r="7" fill="var(--sheet)" stroke="var(--ink)" strokeWidth="2" />
      <path d={`M68 ${top - 7}V${top - 22}`} stroke="var(--ink)" strokeWidth="2" />

      {steps.map((step, index) => {
        const y = top + unit * index;
        return (
          <g key={step}>
            <rect x="40" y={y} width="56" height={unit} fill={colors[index]} />
            <rect x="40" y={y} width="56" height={unit} fill={fills[index]} />
            <rect x="40" y={y} width="56" height={unit} fill="none" stroke="var(--ink)" strokeWidth="1.5" />
            {/* depth ticks */}
            <path d={`M30 ${y}H40M34 ${y + unit / 2}H40`} stroke="var(--ink)" strokeWidth="1.2" />
            <text x="114" y={y + unit / 2 + 12} fontSize="36" fontWeight="600">
              {step}
            </text>
          </g>
        );
      })}

      {/* Drill trace */}
      <path d={`M68 ${top + 7}V${top + unit * steps.length + 14}`} stroke="var(--ink)" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" />
      <path d={`M30 ${top + unit * steps.length}H40`} stroke="var(--ink)" strokeWidth="1.2" />
      <path d={`M60 ${top + unit * steps.length + 14}h16`} stroke="var(--ink)" strokeWidth="2" />
    </svg>
  );
}
