import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FlaskConical,
  BookOpen,
  Trophy,
  TrendingUp,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { toggleSidebar } from "../store/slices/uiSlice";
import { logout } from "../store/slices/authSlice";
import ProgressRing from "./ProgressRing";
import { ROUTES } from "../utils/routes";

interface NavItem {
  label: string;
  to: string;
  icon: React.ReactNode;
  activeColor: string;
  activeBg: string;
  iconBg: string;
  iconColor: string;
  activeIconBg: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    to: ROUTES.dashboard,
    icon: <LayoutDashboard size={18} />,
    activeColor: "text-indigo-700",
    activeBg: "bg-indigo-50/70 border-l-[3.5px] border-indigo-600",
    iconBg: "bg-indigo-100",
    activeIconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    label: "Quantum Lab",
    to: ROUTES.quantumLab,
    icon: <FlaskConical size={18} />,
    activeColor: "text-blue-700",
    activeBg: "bg-blue-50/70 border-l-[3.5px] border-blue-600",
    iconBg: "bg-blue-100/70",
    activeIconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    label: "Modules",
    to: ROUTES.courses,
    icon: <BookOpen size={18} />,
    activeColor: "text-purple-700",
    activeBg: "bg-purple-50/70 border-l-[3.5px] border-purple-600",
    iconBg: "bg-purple-100/70",
    activeIconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    label: "Challenges",
    to: ROUTES.challenges,
    icon: <Trophy size={18} />,
    activeColor: "text-amber-700",
    activeBg: "bg-amber-50/70 border-l-[3.5px] border-amber-600",
    iconBg: "bg-amber-100/70",
    activeIconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    label: "Progress",
    to: ROUTES.progress,
    icon: <TrendingUp size={18} />,
    activeColor: "text-emerald-700",
    activeBg: "bg-emerald-50/70 border-l-[3.5px] border-emerald-600",
    iconBg: "bg-emerald-100/70",
    activeIconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    label: "Community",
    to: ROUTES.community,
    icon: <Users size={18} />,
    activeColor: "text-rose-700",
    activeBg: "bg-rose-50/70 border-l-[3.5px] border-rose-600",
    iconBg: "bg-rose-100/70",
    activeIconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
];

interface SidebarNavItemProps {
  item: NavItem;
  collapsed: boolean;
}

function SidebarNavItem({ item, collapsed }: SidebarNavItemProps) {
  return (
    <NavLink
      to={item.to}
      title={collapsed ? item.label : undefined}
      aria-label={item.label}
      className={({ isActive }) =>
        [
          "flex items-center gap-4 rounded-2xl transition-all duration-200",
          collapsed ? "justify-center px-0 py-2.5 mx-1" : "px-3 py-2.5",
          isActive
            ? `${item.activeBg} ${item.activeColor} font-semibold`
            : "text-slate-600 hover:bg-slate-100/80",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={[
              "flex items-center justify-center rounded-xl transition-colors duration-200 shrink-0",
              collapsed ? "w-9 h-9" : "w-9 h-9",
              isActive ? item.activeIconBg : item.iconBg,
              item.iconColor,
            ].join(" ")}
          >
            {item.icon}
          </span>
          {!collapsed && (
            <span className="text-[17px] leading-none">{item.label}</span>
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const collapsed = useAppSelector((s) => s.ui.sidebarCollapsed);

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.landing);
  };

  return (
    <aside
      className={[
        "h-full flex flex-col border-r border-slate-200 bg-[#FAFAFF] transition-all duration-300 ease-in-out shrink-0",
        collapsed ? "w-[72px]" : "w-64",
      ].join(" ")}
      aria-label="Main navigation"
    >
      {/* ── Logo + collapse toggle ─────────────────────────────────── */}
      <div
        className={[
          "flex items-center pt-8 pb-6 px-4 shrink-0",
          collapsed ? "justify-center" : "justify-between gap-3",
        ].join(" ")}
      >
        {/* Logo mark */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-[#0B1C30] flex items-center justify-center shrink-0">
            {/* Abstract Q mark */}
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect x="0" y="0" width="7" height="14" rx="3.5" fill="white" />
              <rect x="11" y="0" width="7" height="14" rx="3.5" fill="white" />
              <rect x="4" y="5" width="10" height="4" rx="2" fill="white" />
            </svg>
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-[22px] font-bold text-slate-900 leading-tight">
                QubitX
              </p>
              <p className="text-[13px] text-slate-400 font-medium leading-tight">
                Quantum Intelligence
              </p>
            </div>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* ── Nav items ─────────────────────────────────────────────── */}
      <nav className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto min-h-0">
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem key={item.to} item={item} collapsed={collapsed} />
        ))}
      </nav>

      {/* ── Bottom section ────────────────────────────────────────── */}
      <div className="shrink-0 flex flex-col gap-0 pb-4">
        {/* Course progress card — only when expanded */}
        {!collapsed && (
          <div className="mx-3 mb-4 p-4 bg-white/90 rounded-2xl border border-indigo-100/90 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              {/* Progress ring */}
              <ProgressRing
                percent={68}
                size={52}
                strokeWidth={5}
                color="#4F46E5"
                trackColor="#F1F5F9"
                label="68%"
                labelClassName="text-[10px] font-bold fill-slate-800"
              />
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-slate-800 leading-tight">
                  Course progress
                </p>
                <p className="text-[13px] text-slate-500 leading-tight mt-0.5 truncate">
                  Entanglement path
                </p>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-2.5 flex items-center justify-between">
              <span className="text-[12px] text-slate-400">Next milestone</span>
              <span className="text-[12px] text-indigo-600 font-medium">
                Phase Kickback →
              </span>
            </div>
          </div>
        )}

        {/* Collapsed: just a small ring */}
        {collapsed && (
          <div className="flex justify-center mb-3">
            <ProgressRing
              percent={68}
              size={38}
              strokeWidth={4}
              color="#4F46E5"
              trackColor="#F1F5F9"
            />
          </div>
        )}

        <div className="border-t border-slate-200 mx-3 pt-3 flex flex-col gap-0.5">
          <button
            onClick={() => navigate(ROUTES.profile)}
            title={collapsed ? "Settings" : undefined}
            aria-label="Settings"
            className={[
              "flex items-center gap-4 rounded-xl px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition-colors",
              collapsed && "justify-center",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <Settings size={18} className="shrink-0" />
            {!collapsed && (
              <span className="text-[17px] font-medium">Settings</span>
            )}
          </button>
          <button
            onClick={handleLogout}
            title={collapsed ? "Log out" : undefined}
            aria-label="Log out"
            className={[
              "flex items-center gap-4 rounded-xl px-3 py-2.5 text-slate-400 hover:bg-slate-100 transition-colors",
              collapsed && "justify-center",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <LogOut size={18} className="shrink-0" />
            {!collapsed && (
              <span className="text-[17px] font-medium">Log out</span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
