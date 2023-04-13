import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";

export type Category =
  | "ALL"
  | "FURNITURE"
  | "BEDROOM"
  | "HOMEWEAR"
  | "GARDENING";
export interface CategoryState {
  category: Category;
}

const initialState: CategoryState = {
  category: "ALL",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
