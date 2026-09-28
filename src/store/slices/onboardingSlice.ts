import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { OnboardingState, Role, Familiarity, LearningPace } from "../../types";

export const TOTAL_STEPS = 5;

const initialState: OnboardingState = {
  currentStep: 0,
  role: null,
  familiarity: null,
  goals: [],
  learningPace: null,
  isCompleted: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    // ─── Navigation ─────────────────────────────────────────────────────────
    nextStep(state) {
      if (state.currentStep < TOTAL_STEPS - 1) {
        state.currentStep += 1;
      }
    },
    prevStep(state) {
      if (state.currentStep > 0) {
        state.currentStep -= 1;
      }
    },
    goToStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },

    // ─── Slide Setters ───────────────────────────────────────────────────────
    setRole(state, action: PayloadAction<Role>) {
      state.role = action.payload;
    },
    setFamiliarity(state, action: PayloadAction<Familiarity>) {
      state.familiarity = action.payload;
    },
    setGoals(state, action: PayloadAction<string[]>) {
      state.goals = action.payload;
    },
    toggleGoal(state, action: PayloadAction<string>) {
      const goal = action.payload;
      const idx = state.goals.indexOf(goal);
      if (idx === -1) {
        state.goals.push(goal);
      } else {
        state.goals.splice(idx, 1);
      }
    },
    setLearningPace(state, action: PayloadAction<LearningPace>) {
      state.learningPace = action.payload;
    },

    // ─── Completion ──────────────────────────────────────────────────────────
    markCompleted(state) {
      state.isCompleted = true;
    },

    /** Reset if user signs out */
    resetOnboarding() {
      return initialState;
    },
  },
});

export const {
  nextStep,
  prevStep,
  goToStep,
  setRole,
  setFamiliarity,
  setGoals,
  toggleGoal,
  setLearningPace,
  markCompleted,
  resetOnboarding,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
