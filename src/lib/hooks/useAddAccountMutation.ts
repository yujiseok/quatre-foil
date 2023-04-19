import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAccount } from "api/account";
import React from "react";

const useAddAccountMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: addAccountMutate } = useMutation(
    (variables: {
      bankcode: string;
      account: string;
      phoneNumber: string;
      isAgree: boolean;
    }) =>
      addAccount(
        variables.bankcode,
        variables.account,
        variables.phoneNumber,
        variables.isAgree,
      ),
    {
      onSuccess: () => alert("연결에 성공했습니다"),
    },
  );
  return { addAccountMutate };
};

export default useAddAccountMutation;
