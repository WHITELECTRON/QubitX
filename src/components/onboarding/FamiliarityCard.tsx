interface FamiliarityCardProps {
  title: string;
  description: string;
  badge?: string;
  selected: boolean;
  onClick: () => void;
}

/**
 * Full-width radio-style card for familiarity selection (Step 3).
 * Selected: thick navy border + filled checkmark circle on left.
 */
export default function FamiliarityCard({
  title,
  description,
  badge,
  selected,
  onClick,
}: FamiliarityCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full text-left p-4 rounded-2xl border transition-all duration-150 flex gap-4 items-start",
        selected
          ? "border-[#0B1C30] border-[1.5px] bg-white"
          : "border-[#E2E8F0] hover:border-[#94A3B8] bg-white",
      ].join(" ")}
    >
      {/* Radio / checkmark circle */}
      <div
        className={[
          "mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
          selected ? "border-[#0B1C30] bg-[#0B1C30]" : "border-[#CBD5E1]",
        ].join(" ")}
      >
        {selected && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Text content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[15px] font-semibold text-[#0B1C30]">{title}</span>
          {badge && (
            <span className="text-[10px] font-medium text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="text-[13px] text-[#64748B] leading-[20px]">{description}</p>
      </div>
    </button>
  );
}
