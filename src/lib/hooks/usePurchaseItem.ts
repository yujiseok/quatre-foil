import { useMutation, useQueryClient } from "@tanstack/react-query";
import { purchaseItem } from "api/product";

const usePurchaseItem = () => {
  const queryClient = useQueryClient();
  const { mutate: purchaseMutation } = useMutation({
    mutationFn: (variables: { productId: string; accountId: string }) =>
      purchaseItem(variables.productId, variables.accountId),
  });
  return { purchaseMutation };
};

export default usePurchaseItem;
