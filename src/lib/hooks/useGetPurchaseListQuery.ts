import { useQuery } from "@tanstack/react-query";
import { getPurchaseHistory } from "api/product";
import React from "react";

const useGetPurchaseList = () => {
  const { data: history } = useQuery({
    queryKey: ["history"],
    queryFn: getPurchaseHistory,
    refetchOnWindowFocus: false,
    select: (data) =>
      data.sort(
        (a, b) =>
          new Date(b.timePaid).getTime() - new Date(a.timePaid).getTime(),
      ),
  });
  return { history };
};

export default useGetPurchaseList;
