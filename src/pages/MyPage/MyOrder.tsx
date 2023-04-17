import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cfmPurchase, getPurchaseHistory, cancelPurchase } from "api/product";

import { useAppSelector } from "app/hooks";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { tablet } from "../../global/responsive";

const MyOrder = () => {
  const queryClient = useQueryClient();
  const { data: history } = useQuery({
    queryKey: ["history"],
    queryFn: getPurchaseHistory,
    refetchOnWindowFocus: false,
  });
  console.log(history);

  const confirmMutation = useMutation({
    mutationFn: (id: string) => cfmPurchase(id),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries();
    },
  });

  const cancelMutation = useMutation({
    mutationFn: (id: string) => cancelPurchase(id),
    onSuccess(data, variables, context) {
      // queryClient.invalidateQueries();
    },
    onError(error, variables, context) {
      toast.error("이미 구매 완료한 제품은 취소할 수 없습니다.");
    },
  });

  return (
    <Container>
      {history?.map((item) => {
        return (
          <ItemContainer key={item.timePaid}>
            <TitleContainer>
              <h3>결제 완료&nbsp;&nbsp;</h3>
              <span>{item.done ? "구매 확정" : ""}</span>
              <span>{item.isCanceled ? "구매 취소" : ""}</span>
            </TitleContainer>
            <Wrapper>
              <ItemInfoWrapper>
                <div className="img-wrapper">
                  <img src={item.product.thumbnail!} alt={item.product.title} />
                </div>
                <ItemInfoContainer>
                  <p>{item.timePaid.slice(0, 10)} 구매</p>
                  <span>{item.product.title}</span>
                  <span>{item.product.price.toLocaleString()} 원</span>
                </ItemInfoContainer>
              </ItemInfoWrapper>
              <ConfirmOrderContainer>
                <Cfmbtn
                  type="button"
                  onClick={() => confirmMutation.mutate(item.detailId)}
                >
                  확정
                </Cfmbtn>
                <Cfmbtn
                  type="button"
                  onClick={() => cancelMutation.mutate(item.detailId)}
                >
                  취소
                </Cfmbtn>
              </ConfirmOrderContainer>
            </Wrapper>
          </ItemContainer>
        );
      })}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};
export default MyOrder;

const Container = styled.div`
  max-width: 750px;
  margin: 1.875rem auto 0;
`;

const ItemContainer = styled.div`
  border: 1px solid var(--black-20);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: var(--black-80);
  }
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  .img-wrapper {
    max-width: 100px;
    ${tablet({
      maxWidth: "170px",
    })}
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  ${tablet({
    display: "flex",
    flexDirection: "column",
  })};
`;

const ItemInfoContainer = styled.div`
  display: inline-block;
  margin-left: 1.25rem;
  p {
    color: var(--black-30);
    font-size: 12px;
    line-height: 2;
    ${tablet({
      fontSize: "16px",
    })}
  }
  span {
    font-size: 16px;
    display: block;
    color: var(--black-90);
    ${tablet({
      fontSize: "20px",
    })}
  }
`;

const ConfirmOrderContainer = styled.div`
  color: var(--black-90);
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${tablet({
    display: "flex",
    flexDirection: "row",
  })};
`;

const Cfmbtn = styled.button`
  border: 1px solid var(--black-20);
  min-width: 60px;
  flex: 1;
  :hover {
    color: var(--primary-color);
    border: 1.5px solid var(--primary-color);
  }
  ${tablet({
    padding: "6px 14px",
  })}
`;
