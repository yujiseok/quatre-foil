import { useQuery } from "@tanstack/react-query";
import { getPurchaseHistory } from "api/product";

const useGetPurchaseList = (status: string) => {
  const { data: history } = useQuery({
    queryKey: ["history", status],
    queryFn: getPurchaseHistory,
    refetchOnWindowFocus: false,
    select:
      status === "done"
        ? (data) =>
            data
              .filter((item) => item.done === true)
              .sort(
                (a, b) =>
                  new Date(b.timePaid).getTime() -
                  new Date(a.timePaid).getTime(),
              )
        : status === "isCanceled"
        ? (data) =>
            data
              .filter((item) => item.isCanceled === true)
              .sort(
                (a, b) =>
                  new Date(b.timePaid).getTime() -
                  new Date(a.timePaid).getTime(),
              )
        : (data) =>
            data.sort(
              (a, b) =>
                new Date(b.timePaid).getTime() - new Date(a.timePaid).getTime(),
            ),
  });
  return { history };
};

export default useGetPurchaseList;
