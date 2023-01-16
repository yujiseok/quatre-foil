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
    open: (state) => {
      state.toggle = true;
    },
    close: (state) => {
      state.toggle = false;
    },
  },
});

export const { open, close } = toggleSlice.actions;

export default toggleSlice.reducer;
