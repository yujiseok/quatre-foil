import { useQuery } from "@tanstack/react-query";
import { getAccountInfo } from "api/account";
import React from "react";

const useGetAccountsQuery = () => {
  const { data: accountList } = useQuery({
    queryKey: ["accountList"],
    queryFn: () => getAccountInfo(),
  });
  return { accountList };
};

export default useGetAccountsQuery;
