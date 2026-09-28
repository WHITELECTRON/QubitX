interface ProgressRingProps {
  /** 0–100 */
  percent: number;
  /** Diameter of the ring in pixels */
  size?: number;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /** Foreground color */
  color?: string;
  /** Background track color */
  trackColor?: string;
  /** Text rendered in the centre */
  label?: string;
  labelClassName?: string;
}

/**
 * Reusable SVG progress ring.
 * Used in the Sidebar course-progress card and in SessionOverviewCard.
 */
export default function ProgressRing({
  percent,
  size = 64,
  strokeWidth = 6,
  color = "#4F46E5",
  trackColor = "#F1F5F9",
  label,
  labelClassName = "text-xs font-bold text-slate-800",
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const center = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="block"
      aria-label={`${percent}% progress`}
    >
      {/* Track */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth={strokeWidth}
      />
      {/* Progress arc */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${center} ${center})`}
      />
      {label !== undefined && (
        <text
          x={center}
          y={center}
          dominantBaseline="middle"
          textAnchor="middle"
          className={labelClassName}
          fontSize={size * 0.2}
          fontWeight="700"
          fill="currentColor"
        >
          {label}
        </text>
      )}
    </svg>
  );
}
