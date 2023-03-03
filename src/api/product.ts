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

// 제품 구매 확정
export const cfmPurchase = async (detailId: string) => {
  return client("/products/ok", {
    method: "POST",
    data: {
      detailId,
    },
  });
};

// 제품 구매 취소
export const cancelPurchase = async (detailId: string) => {
  return client("/products/cancel", {
    method: "POST",
    data: {
      detailId,
    },
  });
};
