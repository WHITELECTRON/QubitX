import { Search, Bell, Bot } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { setTutorOpen } from "../store/slices/uiSlice";

export default function TopBar() {
  const dispatch = useAppDispatch();
  const tutorOpen = useAppSelector((s) => s.ui.tutorOpen);

  return (
    <header className="h-16 shrink-0 flex items-center gap-4 px-6 bg-[#FAFAFA] border-b border-slate-200">
      {/* Search */}
      <div className="flex-1 relative max-w-[700px]">
        <Search
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="search"
          placeholder="Search modules, circuits, challenges..."
          className="w-full h-11 pl-11 pr-5 bg-white rounded-2xl border border-slate-200 text-[17px] text-slate-500 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition-all"
          aria-label="Search"
        />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Bell */}
        <button
          aria-label="Notifications"
          className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors"
        >
          <Bell size={18} />
        </button>

        {/* Re-open tutor button — only when panel is closed */}
        {!tutorOpen && (
          <button
            onClick={() => dispatch(setTutorOpen(true))}
            aria-label="Open AI Tutor"
            className="w-11 h-11 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-colors"
          >
            <Bot size={18} />
          </button>
        )}

        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
          <span className="text-[14px] font-semibold text-slate-700 select-none">
            AR
          </span>
        </div>
      </div>
    </header>
  );
}
