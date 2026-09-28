import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../types";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  hasCompletedOnboarding: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /** Called after successful signup or login */
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    /** Mark onboarding as done — persisted alongside user session */
    completeOnboarding(state) {
      state.hasCompletedOnboarding = true;
    },

    /** Full logout — wipe everything */
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.hasCompletedOnboarding = false;
    },
  },
});

export const { setUser, completeOnboarding, logout } = authSlice.actions;
export default authSlice.reducer;
