import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}
const initialState: InitialState = {
  id: "",
  title: "",
  price: 0,
  thumbnail: "",
  quantity: 0,
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    purchaseAction: (state, action: PayloadAction<InitialState>) => {
      state = action.payload;
    },
    reset: () => initialState,
  },
});

export default purchaseSlice.reducer;
export const { purchaseAction, reset } = purchaseSlice.actions;
