import { useState } from "react";

const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);
  const onIncrement = () => {
    if (quantity < 5) setQuantity((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return { quantity, onIncrement, onDecrement };
};
export default useQuantity;
