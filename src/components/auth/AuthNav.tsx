import { Link } from "react-router-dom";

/**
 * Navbar shown on auth pages (Signup, Login, Onboarding).
 * Design: Cognix wordmark + "AI-guided" pill on left · Help + Exit on right.
 */
export default function AuthNav() {
  return (
    <header className="w-full px-[43px] py-4 flex items-center justify-between border-b border-[#F1F5F9] bg-white/80 backdrop-blur-sm">
      {/* ── Left: brand + badge ─────────────────────────── */}
      <div className="flex items-center gap-[10px]">
        <Link
          to="/"
          className="text-[22px] font-semibold text-[#0B1C30] leading-[37px] hover:opacity-80 transition-opacity"
        >
          Cognix
        </Link>

        {/* AI-guided pill */}
        <div className="flex items-center gap-2 px-[13px] py-[3px] bg-[#EFF4FF] rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shrink-0" />
          <span className="text-[11px] font-medium text-[#334155] tracking-[0.59px]">
            AI-guided
          </span>
        </div>
      </div>

      {/* ── Right: links ────────────────────────────────── */}
      <nav className="flex items-center gap-[21px]">
        <a
          href="#"
          className="text-[13px] font-semibold text-[#464554] hover:text-[#0B1C30] transition-colors"
        >
          Help
        </a>
        <Link
          to="/"
          className="text-[13px] font-semibold text-[#464554] hover:text-[#0B1C30] transition-colors"
        >
          Exit
        </Link>
      </nav>
    </header>
  );
}
