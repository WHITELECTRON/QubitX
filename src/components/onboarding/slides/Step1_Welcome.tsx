import PrimaryButton from "../../ui/PrimaryButton";

interface Props { onNext: () => void }

/**
 * Step 1 — Welcome intro before the calibration questions.
 * No back button on this slide.
 */
export default function Step1_Welcome({ onNext }: Props) {
  return (
    <div className="flex flex-col items-center text-center gap-6 py-2">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#EDE9FE] flex items-center justify-center text-[#7C3AED]">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M14 2V5M14 23V26M2 14H5M23 14H26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M5.5 5.5L7.6 7.6M20.4 20.4L22.5 22.5M5.5 22.5L7.6 20.4M20.4 7.6L22.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="flex flex-col gap-2 max-w-[380px]">
        <h1 className="text-[26px] font-bold text-[#0B1C30] leading-[34px]">
          Before we build your lab
        </h1>
        <p className="text-[15px] text-[#64748B] leading-[24px]">
          3 quick questions to calibrate your quantum learning path in real time.
        </p>
      </div>

      {/* What we'll ask */}
      <div className="w-full bg-[#F8F9FF] rounded-2xl border border-[#E2E8F0] p-5 text-left flex flex-col gap-3">
        {[
          { n: "01", label: "Your role", sub: "Student, researcher, educator, or curious" },
          { n: "02", label: "Your familiarity", sub: "How deep into quantum you already are" },
          { n: "03", label: "Your goals", sub: "What you want to actually build and learn" },
        ].map((item) => (
          <div key={item.n} className="flex items-start gap-3">
            <span className="text-[11px] font-semibold text-[#818CF8] mt-0.5 shrink-0">{item.n}</span>
            <div>
              <p className="text-[13px] font-semibold text-[#0B1C30]">{item.label}</p>
              <p className="text-[12px] text-[#64748B]">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full pt-2">
        <PrimaryButton fullWidth onClick={onNext}>
          Let's go →
        </PrimaryButton>
      </div>
    </div>
  );
}
