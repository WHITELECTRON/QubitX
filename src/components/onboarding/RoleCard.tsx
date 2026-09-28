import type { ReactNode } from "react";

interface RoleCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

/**
 * 2×2 grid card for role selection (Step 2).
 * Selected state: lavender tint bg + dark navy checkmark badge top-right.
 */
export default function RoleCard({ icon, title, description, selected, onClick }: RoleCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative w-full text-left p-5 rounded-2xl border transition-all duration-150",
        selected
          ? "bg-[#F5F3FF] border-[#C4B5FD]"
          : "bg-white border-[#E2E8F0] hover:border-[#C4B5FD] hover:bg-[#FAFAF9]",
      ].join(" ")}
    >
      {/* Checkmark badge (selected only) */}
      {selected && (
        <div className="absolute top-3 right-3 w-[22px] h-[22px] rounded-full bg-[#0B1C30] flex items-center justify-center">
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] flex items-center justify-center mb-4 text-[#7C3AED]">
        {icon}
      </div>

      <p className="text-[15px] font-semibold text-[#0B1C30] mb-1.5">{title}</p>
      <p className="text-[12px] text-[#64748B] leading-[18px]">{description}</p>
    </button>
  );
}
