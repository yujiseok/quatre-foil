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
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.price = action.payload.price;
      state.thumbnail = action.payload.thumbnail;
      state.quantity = action.payload.quantity;
    },
    reset: (state) => initialState,
  },
});

export default purchaseSlice.reducer;
export const { purchaseAction, reset } = purchaseSlice.actions;
