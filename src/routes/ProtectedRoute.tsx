import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Blocks unauthenticated users.
 * Redirects to /login, preserving the intended destination via `state`.
 */
export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
