import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "api/product";

const useGetAllProductsQuery = () => {
  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return { products, isLoading, isFetching };
};
export default useGetAllProductsQuery;
