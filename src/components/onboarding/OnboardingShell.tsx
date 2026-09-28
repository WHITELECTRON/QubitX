import type { ReactNode } from "react";
import AuthNav from "../auth/AuthNav";

interface OnboardingShellProps {
  /** 0-indexed current step */
  step: number;
  totalSteps: number;
  showBack?: boolean;
  onBack?: () => void;
  isComplete?: boolean;
  children: ReactNode;
}

/**
 * Shared card + layout wrapper for every onboarding slide.
 * Renders: AuthNav · #F8F9FF bg · centred white card · progress bar · footer
 */
export default function OnboardingShell({
  step,
  totalSteps,
  showBack = false,
  onBack,
  isComplete = false,
  children,
}: OnboardingShellProps) {
  const progress = ((step + 1) / totalSteps) * 100;
  const humanStep = step + 1;

  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      <AuthNav />

      <main className="flex-1 flex items-start justify-center px-6 py-10">
        <div className="w-full max-w-[680px] bg-white rounded-[32px] border border-[#E2E8F0] shadow-[0_1px_4px_rgba(15,23,42,0.04),0_8px_32px_-4px_rgba(15,23,42,0.08)]">

          {/* ── Card header: step nav + progress bar ──────────── */}
          <div className="px-10 pt-8 pb-5">
            <div className="flex items-center justify-between mb-4">
              {/* Left */}
              {isComplete ? (
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-[13px] text-[#334155] font-medium">
                    Step {humanStep} of {totalSteps} — Complete
                  </span>
                </div>
              ) : (
                <button
                  onClick={onBack}
                  className={[
                    "flex items-center gap-1 text-[13px] font-medium text-[#64748B] hover:text-[#0B1C30] transition-colors",
                    showBack ? "visible" : "invisible pointer-events-none",
                  ].join(" ")}
                >
                  ← Back
                </button>
              )}

              {/* Right */}
              {isComplete ? (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-green-600 tracking-wide">
                    100% Ready
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-[13px] text-[#64748B]">
                  <span>Step {humanStep} of {totalSteps}</span>
                  <span className="w-2 h-2 rounded-full bg-[#818CF8] shrink-0" />
                </div>
              )}
            </div>

            {/* Gradient progress bar */}
            <div className="h-[3px] w-full bg-[#E2E8F0] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(to right, #F43F7A, #818CF8)",
                }}
              />
            </div>
          </div>

          {/* ── Slide content ───────────────────────────────────── */}
          <div className="px-10 pb-10">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-6 text-center">
        <p className="text-[10px] font-semibold text-[#94A3B8] tracking-[1.8px] uppercase">
          Cognix Quantum Platform
        </p>
      </footer>
    </div>
  );
}
