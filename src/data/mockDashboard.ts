import type {
  ResumeBanner,
  StatCardData,
  ModuleCardData,
  RecommendationRowData,
} from "../types";

export const resumeBanner: ResumeBanner = {
  title: "Pick up where you left off",
  description:
    "Entanglement — you're 61% through. Your tutor already has a hint ready if you get stuck.",
  ctaLabel: "Resume lesson",
};

export const statCards: StatCardData[] = [
  {
    id: "mastery",
    label: "MASTERY STATUS",
    value: "4",
    suffix: "/ 12",
    subLabel: "Concepts mastered",
    tint: "indigo",
  },
  {
    id: "simulator",
    label: "SIMULATOR JOBS",
    value: "27",
    subLabel: "Circuits run",
    tint: "blue",
    sparkline: [7.82, 18.25, 10.43, 23.47, 13.04, 28.68, 20.86],
  },
  {
    id: "consistency",
    label: "CONSISTENCY",
    value: "5",
    subLabel: "Day streak",
    tint: "amber",
  },
];

export const moduleCards: ModuleCardData[] = [
  {
    id: "bell-state",
    moduleNumber: "Module 03",
    title: "Bell State",
    description: "Entanglement, from first principles.",
    progress: 82,
    accentColor: "indigo",
  },
  {
    id: "deutsch-jozsa",
    moduleNumber: "Module 04",
    title: "Deutsch–Jozsa",
    description: "Your first taste of quantum speedup.",
    progress: 45,
    accentColor: "blue",
  },
  {
    id: "grovers",
    moduleNumber: "Module 05",
    title: "Grover's Algorithm",
    description: "Search a haystack, quantum-fast.",
    progress: 12,
    accentColor: "amber",
  },
];

export const recommendations: RecommendationRowData[] = [
  {
    id: "phase-kickback",
    title: "Phase kickback",
    description: "Your Deutsch–Jozsa score just crossed the threshold for it.",
    dotColor: "#4F46E5",
  },
  {
    id: "amplitude-amplification",
    title: "Amplitude amplification",
    description: "Builds directly on what you learned in Bell State.",
    dotColor: "#F59E0B",
  },
];
