import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  toggle: boolean;
}
const initialState: ToggleState = {
  toggle: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.toggle = true;
    },
    closeMenu: (state) => {
      state.toggle = false;
    },
  },
});

export const { openMenu, closeMenu } = toggleSlice.actions;

export default toggleSlice.reducer;
