import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  category: "ALL" | "FURNITURE" | "BEDROOM" | "HOMEWEAR" | "GARDENING";
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
