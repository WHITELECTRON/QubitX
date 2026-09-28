import type { ButtonHTMLAttributes, ReactNode } from "react";

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
}

/**
 * Outlined pill button for OAuth providers (Google, GitHub).
 *
 * Usage:
 *   <SocialButton icon={<GoogleIcon />} label="Google" onClick={…} />
 */
export default function SocialButton({
  icon,
  label,
  className = "",
  ...props
}: SocialButtonProps) {
  return (
    <button
      type="button"
      className={[
        "flex flex-1 items-center justify-center gap-[10px]",
        "rounded-full border border-[#E2E8F0] bg-white",
        "px-4 py-[13px]",
        "text-[13px] font-normal text-[#0B1C30]",
        "transition-all duration-150",
        "hover:border-[#CBD5E1] hover:shadow-sm active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1C30]/20",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <span className="w-[21px] h-[21px] flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}
