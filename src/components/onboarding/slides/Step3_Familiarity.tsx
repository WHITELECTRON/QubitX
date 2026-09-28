import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { setFamiliarity } from "../../../store/slices/onboardingSlice";
import type { Familiarity } from "../../../types";
import FamiliarityCard from "../FamiliarityCard";
import PrimaryButton from "../../ui/PrimaryButton";

interface Props {
  onNext: () => void;
}

// ─── Options ─────────────────────────────────────────────────────────────────

const OPTIONS: {
  value: Familiarity;
  label: string;
  description: string;
  badge?: string;
  calibrationText: string;
}[] = [
  {
    value: "new",
    label: "New to it",
    description: "Zero quantum background. Need intuition before linear algebra.",
    calibrationText:
      "Builds intuition from scratch. No prior linear algebra assumed — starts with visual superposition models.",
  },
  {
    value: "basics",
    label: "Know the basics",
    description:
      "Familiar with superposition, bra-ket notation, and Hadamard gates.",
    badge: "Recommended",
    calibrationText:
      "Starts at single-qubit rotations & Bell states. Skips basic matrix multiplication drills.",
  },
  {
    value: "circuits",
    label: "Comfortable with circuits",
    description:
      "Have built circuits in Qiskit or Pennylane, ready for multi-qubit algorithms.",
    calibrationText:
      "Fast-tracks to multi-qubit gates & Grover's algorithm. Foundational modules are skipped.",
  },
];

// ─── Slide ────────────────────────────────────────────────────────────────────

export default function Step3_Familiarity({ onNext }: Props) {
  const dispatch = useAppDispatch();
  const familiarity = useAppSelector((s) => s.onboarding.familiarity);

  const selected = OPTIONS.find((o) => o.value === familiarity);

  return (
    <div className="flex flex-col gap-5">
      {/* Heading */}
      <div>
        <h1 className="text-[26px] font-bold text-[#0B1C30] leading-[34px] mb-2">
          How familiar are you with quantum computing?
        </h1>
        <p className="text-[14px] text-[#64748B] leading-[22px]">
          Select where you feel most comfortable starting out.
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {OPTIONS.map((o) => (
          <FamiliarityCard
            key={o.value}
            title={o.label}
            description={o.description}
            badge={o.badge}
            selected={familiarity === o.value}
            onClick={() => dispatch(setFamiliarity(o.value))}
          />
        ))}
      </div>

      {/* Calibration preview */}
      <div className="rounded-2xl border border-[#E2E8F0] p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 3H13M1 7H9M1 11H11" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span className="text-[10px] font-semibold text-[#94A3B8] tracking-[1.2px] uppercase">
            Calibration Preview
          </span>
        </div>
        <p className="text-[13px] text-[#64748B] leading-[20px]">
          {selected
            ? selected.calibrationText
            : "Select your level above to see how your curriculum will be calibrated."}
        </p>
      </div>

      {/* CTA */}
      <PrimaryButton fullWidth disabled={!familiarity} onClick={onNext}>
        Continue →
      </PrimaryButton>
    </div>
  );
}
