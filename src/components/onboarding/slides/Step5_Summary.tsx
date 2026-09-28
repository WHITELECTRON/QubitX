import robotHero from "../../../assets/robot-hero.jpg";
import { useAppSelector } from "../../../hooks/useRedux";
import PrimaryButton from "../../ui/PrimaryButton";


// ─── Label maps ───────────────────────────────────────────────────────────────

const ROLE_LABELS: Record<string, string> = {
  student:    "Student",
  educator:   "Educator",
  researcher: "Researcher",
  curious:    "Curious",
};

const FAMILIARITY_LABELS: Record<string, string> = {
  new:      "Beginner",
  basics:   "Basics",
  circuits: "Advanced",
};

// ─── Circuit diagram sub-component ───────────────────────────────────────────

function CircuitDiagram() {
  return (
    <div className="flex items-center gap-0 bg-[#F8F9FF] rounded-xl border border-[#E2E8F0] px-4 py-3 overflow-hidden">
      {/* |0⟩ */}
      <span className="text-[13px] font-mono text-[#64748B] shrink-0 mr-3">|0⟩</span>

      {/* Wire left */}
      <div className="flex-1 h-px bg-[#CBD5E1]" />

      {/* H gate */}
      <div className="mx-2 px-2.5 py-1 border border-[#CBD5E1] rounded bg-white shrink-0">
        <span className="text-[13px] font-semibold font-mono text-[#0B1C30]">H</span>
      </div>

      {/* Wire right */}
      <div className="flex-1 h-px bg-[#CBD5E1]" />

      {/* Measure symbol */}
      <div className="ml-2 w-7 h-7 border border-[#CBD5E1] rounded-lg bg-white flex items-center justify-center shrink-0">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M1 11C1 11 4 1 8 1C12 1 15 11 15 11" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M8 11V6" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M8 6L11 8.5" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Slide ────────────────────────────────────────────────────────────────────

interface Props {
  onNext: () => void;
}

export default function Step5_Summary({ onNext }: Props) {
  const { role, familiarity } = useAppSelector((s) => s.onboarding);

  const roleLabel = role ? ROLE_LABELS[role] : null;
  const familiarityLabel = familiarity ? FAMILIARITY_LABELS[familiarity] : null;

  const calibrationTags = [roleLabel, familiarityLabel, "Qiskit Aer"].filter(Boolean) as string[];

  return (
    <div className="flex flex-col gap-5">
      {/* Robot hero image */}
      <div className="flex justify-center">
        <img
          src={robotHero}
          alt="Quantum AI robot"
          className="w-full max-w-[240px] h-[140px] object-cover rounded-2xl"
        />
      </div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-[28px] font-bold text-[#0B1C30] mb-2">You're all set</h1>
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          <span className="text-[13px] text-[#64748B]">Calibrated for:</span>
          {calibrationTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-[#E2E8F0] text-[12px] font-medium text-[#334155] bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Recommended first lesson card */}
      <div className="rounded-2xl border border-[#E2E8F0] p-4">
        {/* Card header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] shrink-0" />
            <span className="text-[10px] font-semibold text-[#64748B] tracking-[1.2px] uppercase">
              Recommended First Lesson
            </span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-50 border border-green-200">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
            <span className="text-[10px] font-semibold text-green-600">Ready</span>
          </div>
        </div>

        {/* Lesson title */}
        <p className="text-[15px] font-semibold text-[#0B1C30] mb-2">
          Superposition basics &amp; the Hadamard gate
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-3 mb-3 text-[11px] text-[#64748B]">
          <span className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <rect x="0.5" y="0.5" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1"/>
              <path d="M3 3H8M3 5.5H6M3 8H7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            3 circuit tasks
          </span>
          <span className="text-[#E2E8F0]">•</span>
          <span className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <circle cx="5.5" cy="5.5" r="5" stroke="currentColor" strokeWidth="1"/>
              <path d="M5.5 3V5.5L7 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            ~8 mins
          </span>
          <span className="text-[#E2E8F0]">•</span>
          <span className="flex items-center gap-1 text-[#818CF8]">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <circle cx="5.5" cy="5.5" r="5" stroke="currentColor" strokeWidth="1"/>
              <circle cx="5.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1"/>
            </svg>
            AI tutor active
          </span>
        </div>

        {/* Circuit diagram */}
        <CircuitDiagram />
      </div>

      {/* CTA */}
      <PrimaryButton fullWidth onClick={onNext}>
        Enter the lab →
      </PrimaryButton>

      {/* Status hint */}
      <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#64748B]">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
        Your Qiskit statevector engine is spun up and ready in your browser.
      </div>
    </div>
  );
}
