import type { ReactNode } from "react";
import AuthNav from "../components/auth/AuthNav";

interface AuthLayoutProps {
  children: ReactNode;
}

/**
 * Full-page shell for Signup and Login.
 * Matches Figma: light #F8F9FF bg · centred card · footer copyright.
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      <AuthNav />

      {/* ── Main: centred card ─────────────────────────── */}
      <main className="flex-1 flex items-center justify-center px-6 py-[43px]">
        {children}
      </main>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="pb-8 text-center">
        <p className="text-[#64748B] text-[13px] leading-[27px] tracking-[0.09px]">
          © 2025 QubitX Quantum Intelligence Systems. Secured by Hilbert Cryptography.
        </p>
      </footer>
    </div>
  );
}
