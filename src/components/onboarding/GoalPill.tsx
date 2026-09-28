interface GoalPillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

/**
 * Toggle pill button for multi-select goals (Step 4).
 * Selected: dark navy bg + white text + ✓ icon.
 */
export default function GoalPill({ label, selected, onClick }: GoalPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex items-center gap-2 px-4 py-2.5 rounded-full border text-[13px] font-medium",
        "transition-all duration-150 shrink-0 whitespace-nowrap",
        selected
          ? "bg-[#0B1C30] text-white border-[#0B1C30]"
          : "bg-white text-[#334155] border-[#E2E8F0] hover:border-[#94A3B8]",
      ].join(" ")}
    >
      {selected && (
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" className="shrink-0">
          <path
            d="M1 4.5L3.8 7.5L10 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {label}
    </button>
  );
}
