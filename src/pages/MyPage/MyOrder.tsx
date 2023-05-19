import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import useConfirmMutation from "lib/hooks/useConfirmMutation";
import useCancelMutation from "lib/hooks/useCancelMutation";
import useGetPurchaseList from "lib/hooks/useGetPurchaseListQuery";
import { useSearchParams } from "react-router-dom";
import { tablet } from "../../global/responsive";

const MyOrder = () => {
  const { confirmMutation } = useConfirmMutation();
  const { cancelMutation } = useCancelMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") ?? "all";
  const { history } = useGetPurchaseList(status);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      status: e.target.value,
    });
  };

  return (
    <Container>
      <Select>
        <select onChange={handleChange}>
          <option value="all">전체</option>
          <option value="done">구매 확정</option>
          <option value="isCanceled">구매 취소</option>
        </select>
      </Select>
      {history?.map((item) => {
        return (
          <ItemContainer key={item.timePaid}>
            <TitleContainer>
              <h3>결제 완료&nbsp;&nbsp;</h3>
              <span>
                {item.isCanceled ? "구매 취소" : item.done ? " 구매 확정" : ""}
              </span>
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
                {item.isCanceled || item.done ? null : (
                  <>
                    <Cfmbtn
                      type="button"
                      onClick={() => confirmMutation(item.detailId)}
                    >
                      확정
                    </Cfmbtn>
                    <Cfmbtn
                      type="button"
                      onClick={() => cancelMutation(item.detailId)}
                    >
                      구매 취소
                    </Cfmbtn>
                  </>
                )}
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

const Select = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  select {
    padding: 8px 10px;
    border: none;
  }
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
    color: var(--pramary-color);
    border: 1px solid var(--primary-color);
  }
  ${tablet({
    padding: "6px 14px",
  })}
`;
