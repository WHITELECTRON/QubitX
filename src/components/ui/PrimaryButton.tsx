import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

/**
 * Dark navy pill button — the main CTA across auth + onboarding.
 *
 * Usage:
 *   <PrimaryButton fullWidth isLoading={isSubmitting}>Create account</PrimaryButton>
 */
export default function PrimaryButton({
  children,
  isLoading = false,
  fullWidth = false,
  disabled,
  className = "",
  ...props
}: PrimaryButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      className={[
        "rounded-full bg-[#0B1C30] text-white",
        "px-8 py-[13px]",
        "text-[13px] font-semibold leading-[18px] tracking-[0.35px]",
        "transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1C30] focus-visible:ring-offset-2",
        fullWidth ? "w-full" : "",
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#162d4a] active:scale-[0.98]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          Loading…
        </span>
      ) : (
        children
      )}
    </button>
  );
}
