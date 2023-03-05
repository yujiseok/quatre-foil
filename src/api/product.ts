import { client } from "./core/api";

interface Product {
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
export const getAllProducts = async () => {
  const { data } = await client<Product[]>({
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
