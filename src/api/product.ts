import { AxiosError } from "axios";
import { client, clientNoAuth } from "./core/api";

// 제품 구매
export const purchaseItem = async (productId: string, accountId: string) => {
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

interface IProduct {
  // 제품 정보
  id: string; // 제품 ID
  title: string; // 제품 이름
  price: number; // 제품 가격
  description: string; // 제품 설명(최대 100자)
  tags: string[]; // 제품 태그
  thumbnail: string; // 제품 썸네일 이미지(URL)
  isSoldOut: boolean; // 제품 매진 여부
}

export interface IProductDetail {
  // 제품의 상세 내용
  id: string; // 제품 ID
  title: string; // 제품 이름
  price: number; // 제품 가격
  description: string; // 제품 상세 설명
  tags: string[]; // 제품 태그
  thumbnail: string; // 제품 썸네일 이미지(URL)
  photo: string; // 제품 상세 이미지(URL)
  isSoldOut: boolean; // 제품 매진 여부
}

export interface ITransactionDetail {
  // 거래 내역 정보
  detailId: string; // 거래 내역 ID
  product: {
    // 거래한 제품 정보
    productId: string;
    title: string;
    price: number;
    description: string;
    tags: string[];
    thumbnail: string | null;
  };
  timePaid: string; // 제품을 거래한 시간
  isCanceled: boolean; // 거래 취소 여부
  done: boolean; // 거래 완료 여부
}

export const getAllProducts = async () => {
  const { data } = await clientNoAuth<IProduct[]>({
    url: "products",
    headers: {
      masterKey: true,
    },
  });

  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await client.get<IProductDetail>(`/products/${id}`);

  return data;
};

// 제품 전체 거래 내역
export const getPurchaseHistory = async () => {
  const { data } = await client<ITransactionDetail[]>({
    url: "products/transactions/details",
  });
  return data;
};
