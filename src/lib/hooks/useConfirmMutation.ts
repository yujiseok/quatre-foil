import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cfmPurchase } from "api/product";
import React from "react";

const useConfirmMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: confirmMutation } = useMutation({
    mutationFn: (id: string) => cfmPurchase(id),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries();
    },
    onError(error, variables, context) {
      alert("구매 확정에 실패했습니다.");
    },
  });

  return { confirmMutation };
};

export default useConfirmMutation;
