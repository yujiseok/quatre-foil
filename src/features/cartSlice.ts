import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

const initialState: InitialState[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<InitialState>) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<InitialState>) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<InitialState>) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity === 1) {
        item.quantity = 1;
      } else if (item) item.quantity -= 1;
    },
    removeItem: (state, action: PayloadAction<InitialState>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
