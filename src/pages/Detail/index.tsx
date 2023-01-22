import { useState } from "react";
import styled from "styled-components";

const Detail = () => {
  const [count, setCount] = useState(1);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <section>
      <ItemWrapper>
        <ImgWrapper>
          <img
            src="https://contents.sixshop.com/thumbnails/uploadedFiles/181086/product/image_1635159135938_1000.png"
            alt="d"
          />
        </ImgWrapper>
        <ItemDescription>
          <h4>쿠키</h4>
          <p>가격</p>
          <p>설명 주저리</p>
          <p>
            <p>수량</p>
            <BtnWrapper>
              <button
                type="button"
                onClick={onDecrement}
                disabled={count === 1}
              >
                -
              </button>
              <p>{count}</p>
              <button type="button" onClick={onIncrement}>
                +
              </button>
            </BtnWrapper>
          </p>
        </ItemDescription>

        <PriceWrapper>
          <Text>
            <div>주문 수량</div>
            <div>{count}개</div>
          </Text>
          <Text>
            <div>총 상품 금액</div>
            <div>원</div>
          </Text>
        </PriceWrapper>

        <BuyBtnWrapper>
          <Button type="button" primary="primary">
            구매하기
          </Button>
          <Button type="button">장바구니에 담기</Button>
        </BuyBtnWrapper>
      </ItemWrapper>
    </section>
  );
};
export default Detail;

const ItemWrapper = styled.div`
  margin: 0 1rem;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;

  div {
    width: 100%;
  }
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid;

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
  }
`;

const BtnWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid;
  margin-top: 0.5rem;
  button {
    padding: 0.5rem;
    width: 37px;
    height: 37px;

    &:disabled {
      cursor: not-allowed;
    }
  }
  p {
    padding: 0.5rem;
    width: 37px;
    height: 37px;
    text-align: center;
    border-right: 1px solid;
    border-left: 1px solid;
  }
`;

const PriceWrapper = styled.div`
  /* display: flex; */
  padding-top: 1.5rem;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const BuyBtnWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Button = styled.button<{ primary?: string }>`
  flex: 1;
  background-color: ${({ primary }) =>
    primary ? "var(--primary-color)" : "var(--white)"};
  color: ${({ primary }) =>
    primary ? "var(--white)" : "var(--primary-color)"};
  font-weight: 600;
  padding: 1rem;
  border: ${({ primary }) => (primary ? "none" : "1px solid")};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ primary }) =>
      primary ? "" : "var(--primary-color)"};
    color: ${({ primary }) => (primary ? "" : "var(--white)")};
  }
`;
