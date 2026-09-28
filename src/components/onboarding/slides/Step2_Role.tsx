import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { setRole } from "../../../store/slices/onboardingSlice";
import type { Role } from "../../../types";
import RoleCard from "../RoleCard";
import PrimaryButton from "../../ui/PrimaryButton";

interface Props {
  onNext: () => void;
}

// ─── Role definitions ─────────────────────────────────────────────────────────

const ROLES: { value: Role; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: "student",
    label: "Student",
    description: "Taking a physics, CS, or quantum computing course.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 6.5L10 11L18 6.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M5 8.5V13.5C7 16 13 16 15 13.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        <line x1="18" y1="6.5" x2="18" y2="11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: "educator",
    label: "Educator",
    description: "Designing curricula, demos, or lab assignments.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 8H14M6 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: "researcher",
    label: "Researcher",
    description: "Prototyping algorithms on Qiskit Aer & Cirq statevectors.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 2H12.5V8L16.5 16H3.5L7.5 8V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M6.5 12H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="11" r="1" fill="currentColor"/>
        <circle cx="12" cy="13" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    value: "curious",
    label: "Just curious",
    description: "Exploring qubits, entanglement, and quantum logic for fun.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3V5M10 15V17M3 10H5M15 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5.05 5.05L6.46 6.46M13.54 13.54L14.95 14.95M5.05 14.95L6.46 13.54M13.54 6.46L14.95 5.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

// ─── Slide ────────────────────────────────────────────────────────────────────

export default function Step2_Role({ onNext }: Props) {
  const dispatch = useAppDispatch();
  const role = useAppSelector((s) => s.onboarding.role);

  return (
    <div className="flex flex-col gap-6">
      {/* Heading */}
      <div>
        <h1 className="text-[26px] font-bold text-[#0B1C30] leading-[34px] mb-2">
          What brings you to{" "}
          <span className="text-[#7C3AED]">Cognix</span>?
        </h1>
        <p className="text-[14px] text-[#64748B] leading-[22px]">
          We tailor circuit challenges and mathematical depth to your context.
        </p>
      </div>

      {/* 2×2 role grid */}
      <div className="grid grid-cols-2 gap-3">
        {ROLES.map((r) => (
          <RoleCard
            key={r.value}
            icon={r.icon}
            title={r.label}
            description={r.description}
            selected={role === r.value}
            onClick={() => dispatch(setRole(r.value))}
          />
        ))}
      </div>

      {/* Hint */}
      <div className="flex items-center justify-center gap-2 text-[12px] text-[#94A3B8]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 3H13M1 7H9M1 11H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        Hilbert depth calibrated dynamically
      </div>

      {/* CTA */}
      <PrimaryButton fullWidth disabled={!role} onClick={onNext}>
        Continue →
      </PrimaryButton>
    </div>
  );
}
