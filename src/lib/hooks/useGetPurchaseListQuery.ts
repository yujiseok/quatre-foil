import { useQuery } from "@tanstack/react-query";
import { getPurchaseHistory } from "api/product";
import React from "react";

const useGetPurchaseList = () => {
  const { data: history } = useQuery({
    queryKey: ["history"],
    queryFn: getPurchaseHistory,
    refetchOnWindowFocus: false,
  });
  return { history };
};

export default useGetPurchaseList;
