import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "api/product";
import type { Category } from "features/categorySlice";

const useGetAllProductsQuery = (category?: Category) => {
  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    select: category
      ? (data) =>
          data?.filter((product) =>
            product.tags.find((tag) => {
              if (tag === category.toLowerCase() || category === "ALL") {
                return product;
              }
            }),
          )
      : undefined,
  });

  return { products, isLoading, isFetching };
};
export default useGetAllProductsQuery;
