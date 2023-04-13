import { useQuery } from "@tanstack/react-query";
import { getProduct } from "api/product";

const useGetProductQuery = (productId: string) => {
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  return { product, isLoading };
};

export default useGetProductQuery;
