import { useQuery } from "@tanstack/react-query";
import { getProduct } from "api/product";

const useGetProductQuery = (productId: string) => {
  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  return { product };
};

export default useGetProductQuery;
