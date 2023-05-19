import type { InitialState } from "features/cartSlice";

export const getTotal = (cart: InitialState[]) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return { totalQuantity, totalPrice };
};
