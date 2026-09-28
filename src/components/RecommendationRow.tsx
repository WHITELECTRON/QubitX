import { useNavigate } from "react-router-dom";
import type { RecommendationRowData } from "../types";
import { ROUTES } from "../utils/routes";

interface RecommendationRowProps {
  data: RecommendationRowData;
}

export default function RecommendationRow({ data }: RecommendationRowProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-5 py-4 bg-white rounded-2xl border border-slate-200">
      <div className="flex items-center gap-4">
        {/* Colored dot */}
        <span
          className="w-3 h-3 rounded-full shrink-0"
          style={{ background: data.dotColor }}
        />
        <div>
          <p className="text-[17px] font-semibold text-slate-900 leading-tight">
            {data.title}
          </p>
          <p className="text-[14px] text-slate-500 mt-0.5">{data.description}</p>
        </div>
      </div>

      <button
        onClick={() => navigate(ROUTES.courses)}
        className="ml-4 shrink-0 px-5 py-2 bg-white rounded-full border border-slate-300 text-[14px] font-medium text-slate-800 hover:bg-slate-50 transition-colors"
      >
        Start
      </button>
    </div>
  );
}
