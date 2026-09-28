import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Blocks already-authenticated users from reaching /login or /signup.
 * Always redirects to /dashboard — onboarding is only reached via signup flow.
 */
export function GuestRoute() {
  const { isAuthenticated, hasCompletedOnboarding } = useAuth();

  if (isAuthenticated) {
    return (
      <Navigate
        to={hasCompletedOnboarding ? "/dashboard" : "/onboarding"}
        replace
      />
    );
  }

  return <Outlet />;
}
