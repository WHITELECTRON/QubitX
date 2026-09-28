import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import AiTutorPanel from "../components/AiTutorPanel";

/**
 * Persistent shell: Sidebar | center | AiTutorPanel
 * Only the <Outlet /> (center content) changes on navigation.
 * Each region scrolls independently; the viewport never scrolls.
 */
export default function MainLayout() {
  return (
    <div className="h-screen w-full overflow-hidden flex bg-[#FAFAFA]">
      {/* Left sidebar */}
      <Sidebar />

      {/* Center column */}
      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar />
        <main
          className="flex-1 min-h-0 overflow-y-auto"
          aria-label="Main content"
        >
          <Outlet />
        </main>
      </div>

      {/* Right AI tutor panel */}
      <AiTutorPanel />
    </div>
  );
}
