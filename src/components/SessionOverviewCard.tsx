import { Sun } from "lucide-react";
import ProgressRing from "./ProgressRing";

export default function SessionOverviewCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider">
          Session Overview
        </span>
        <Sun size={20} className="text-slate-400" />
      </div>

      {/* Ring + greeting */}
      <div className="flex items-center gap-5">
        <ProgressRing
          percent={68}
          size={73}
          strokeWidth={6}
          color="#4F46E5"
          trackColor="#F1F5F9"
          label="68%"
          labelClassName="text-[12px] font-bold fill-slate-800"
        />
        <div>
          <p className="text-[19px] font-bold text-slate-900 leading-tight">
            Good morning
          </p>
          <p className="text-[14px] text-slate-500 mt-0.5 leading-snug">
            You're 68% through
            <br />
            Entanglement
          </p>
        </div>
      </div>
    </div>
  );
}
