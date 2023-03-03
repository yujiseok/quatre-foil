import { AxiosError } from "axios";
import { client } from "./core/api";

// 제품 구매
export const purchase = async (productId: string, accountId: string) => {
  return client("/products/buy", {
    method: "POST",
    data: {
      productId,
      accountId,
    },
  });
};
