import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  sidebarCollapsed: boolean;
  tutorOpen: boolean;
}

const initialState: UiState = {
  sidebarCollapsed: false,
  tutorOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    toggleTutor(state) {
      state.tutorOpen = !state.tutorOpen;
    },
    setTutorOpen(state, action: { payload: boolean }) {
      state.tutorOpen = action.payload;
    },
  },
});

export const { toggleSidebar, toggleTutor, setTutorOpen } = uiSlice.actions;
export default uiSlice.reducer;
