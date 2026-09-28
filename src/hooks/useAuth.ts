import { useAppSelector, useAppDispatch } from "./useRedux";
import { setUser, completeOnboarding, logout } from "../store/slices/authSlice";
import { resetOnboarding } from "../store/slices/onboardingSlice";
import type { User } from "../types";

/**
 * Single hook for all auth operations.
 * Components never touch authSlice directly — they go through here.
 */
export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, hasCompletedOnboarding } = useAppSelector(
    (s) => s.auth
  );

  const login = (userData: User) => {
    dispatch(setUser(userData));
  };

  const signOut = () => {
    dispatch(logout());
    dispatch(resetOnboarding());
  };

  const finishOnboarding = () => {
    dispatch(completeOnboarding());
  };

  return {
    user,
    isAuthenticated,
    hasCompletedOnboarding,
    login,
    signOut,
    finishOnboarding,
  };
}
