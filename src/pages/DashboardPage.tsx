import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StatCard from "../components/StatCard";
import ModuleCard from "../components/ModuleCard";
import RecommendationRow from "../components/RecommendationRow";
import { resumeBanner, statCards, moduleCards, recommendations } from "../data/mockDashboard";
import { ROUTES } from "../utils/routes";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="p-10 flex flex-col gap-8 min-h-full">

      {/* ── Resume banner ──────────────────────────────────────────────── */}
      <div
        className="relative flex items-center justify-between p-8 rounded-[20px] overflow-hidden"
        style={{
          background: "#F6F8FF",
          boxShadow: "0 5px 30px -5px rgba(79,70,229,0.06)",
          border: "1px solid rgba(224,231,255,0.70)",
        }}
      >
        {/* Left gradient accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background: "linear-gradient(180deg, #EC4899 0%, #A855F7 50%, #6366F1 100%)",
          }}
        />

        {/* Faint circuit decoration (right side) */}
        <div className="absolute right-0 top-0 bottom-0 w-[420px] opacity-20 pointer-events-none overflow-hidden">
          <svg width="420" height="220" viewBox="0 0 420 220" fill="none" className="absolute top-0 right-0">
            <rect x="160" y="100" width="225" height="95" rx="2" stroke="#6366F1" strokeWidth="1.5" transform="rotate(-20 160 100)" />
            <rect x="218" y="3" width="225" height="95" rx="2" stroke="#6366F1" strokeWidth="1.5" transform="rotate(35 218 3)" />
            <rect x="340" y="-6" width="232" height="95" rx="2" stroke="#6366F1" strokeWidth="1.5" transform="rotate(90 340 -6)" />
            <rect x="265" y="88" width="33" height="33" rx="2" stroke="#6366F1" strokeWidth="1.8" />
            <circle cx="282" cy="104" r="5" fill="#6366F1" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[520px]">
          {/* AI recommended pill */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="flex items-center gap-2 px-3 py-1 rounded-full text-[14px] font-medium text-purple-800"
              style={{ background: "#FAF5FF", border: "1px solid #E9D5FF" }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              AI recommended
            </span>
          </div>

          <h2
            className="text-[30px] font-bold text-slate-900 leading-tight mb-2"
          >
            {resumeBanner.title}
          </h2>
          <p className="text-[17px] text-slate-600 leading-relaxed">
            {resumeBanner.description}
          </p>
        </div>

        {/* CTA button */}
        <button
          onClick={() => navigate(ROUTES.courses)}
          className="relative z-10 flex items-center gap-2 px-7 py-3 bg-slate-900 text-white rounded-full text-[17px] font-medium hover:bg-slate-700 transition-colors shrink-0 ml-6"
        >
          {resumeBanner.ctaLabel}
          <ArrowRight size={16} />
        </button>
      </div>

      {/* ── Stat cards ─────────────────────────────────────────────────── */}
      <div className="flex gap-5">
        {statCards.map((card) => (
          <StatCard key={card.id} data={card} />
        ))}
      </div>

      {/* ── Your modules ───────────────────────────────────────────────── */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] font-bold text-slate-900">Your modules</h2>
          <Link
            to={ROUTES.courses}
            className="text-[14px] font-semibold text-slate-500 hover:text-slate-700 transition-colors"
          >
            See all
          </Link>
        </div>

        <div className="flex gap-5">
          {moduleCards.map((card) => (
            <ModuleCard key={card.id} data={card} />
          ))}
        </div>
      </section>

      {/* ── Recommended next ────────────────────────────────────────────── */}
      <section className="flex flex-col gap-5 pb-2">
        <div className="flex items-center gap-3">
          <h2 className="text-[24px] font-bold text-slate-900">
            Recommended next
          </h2>
          <span
            className="flex items-center gap-2 px-3 py-1 rounded-full text-[14px] font-medium text-emerald-800"
            style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            AI personalize
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {recommendations.map((rec) => (
            <RecommendationRow key={rec.id} data={rec} />
          ))}
        </div>
      </section>
    </div>
  );
}
