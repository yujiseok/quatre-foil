import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelPurchase } from "api/product";
import React from "react";

const useCancelMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: cancelMutation } = useMutation({
    mutationFn: (id: string) => cancelPurchase(id),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries();
    },
    onError(error, variables, context) {
      alert("이미 구매 완료한 제품은 취소할 수 없습니다.");
    },
  });

  return { cancelMutation };
};

export default useCancelMutation;
