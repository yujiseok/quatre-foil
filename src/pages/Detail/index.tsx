import { tablet } from "@global/responsive";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { addToCart } from "features/cartSlice";
import { useState } from "react";
import styled from "styled-components";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);

  const onIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const dispatch = useAppDispatch();

  const handleClickCart = () => {
    dispatch(
      addToCart({
        id: "1213",
        price: 1000,
        quantity,
        thumbnail:
          "http://blesswebshop.com/1108-2574-large/n69-lost-in-contemplation-variation-bedsheets-saturnia.jpg",
        title: "쿠키",
      }),
    );
  };

  return (
    <Section>
      <ItemWrapper>
        <ImgWrapper>
          <img
            src="http://blesswebshop.com/1108-2574-large/n69-lost-in-contemplation-variation-bedsheets-saturnia.jpg"
            alt="d"
          />
        </ImgWrapper>
        <ItemDescription>
          <h4>쿠키</h4>
          <p>가격</p>
          <p>설명 주저리</p>
          <div>
            <p>수량</p>
            <BtnWrapper>
              <button
                type="button"
                onClick={onDecrement}
                disabled={quantity === 1}
              >
                -
              </button>
              <p>{quantity}</p>
              <button type="button" onClick={onIncrement}>
                +
              </button>
            </BtnWrapper>
          </div>
          <PriceWrapper>
            <Text>
              <div>주문 수량</div>
              <div>{quantity}개</div>
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
            <Button type="button" onClick={handleClickCart}>
              장바구니에 담기
            </Button>
          </BuyBtnWrapper>
        </ItemDescription>
      </ItemWrapper>

      <DescWrapper>
        <h4>상세설명</h4>
        <div>설명들 </div>
        <div className="desc-footer">
          <p>&nbsp;</p>

          <p>&nbsp;</p>

          <p>
            <span>
              <strong>배송안내</strong>
            </span>
          </p>

          <p>&nbsp;</p>

          <p>
            <span>
              <strong>배송 업체 ㅣ&nbsp;</strong>CJ 대한통운 (1588-1255)
            </span>
          </p>

          <p>
            <span>
              <strong>배송 지역 ㅣ&nbsp;</strong>대한민국 전지역
            </span>
          </p>

          <p>
            <span>
              <strong>배송 기간 ㅣ&nbsp;</strong>주말·공휴일 제외 2일 ~ 5일
            </span>
          </p>

          <p>&nbsp;</p>

          <p>
            <span>
              <strong>유의 사항</strong>
            </span>
          </p>

          <p>
            <span>
              -&nbsp;주문폭주 및 공급 사정으로 인하여 지연 및 품절이 발생될 수
              있습니다.&nbsp;
            </span>
          </p>

          <p>
            <span>
              - 기본 배송기간 이상 소요되는 상품이거나, 품절 상품은 개별 연락을
              드립니다.
            </span>
          </p>

          <p>&nbsp;</p>

          <p>&nbsp;</p>

          <p>
            <span>
              <strong>교환 및 반품안내</strong>
            </span>
          </p>

          <p>&nbsp;</p>

          <p>
            <span>
              <strong>신청 방법 ㅣ&nbsp;</strong>상품을 수령하신 날로부터 7일
              이내로 콜센터(1234-1234)&nbsp;및 홈페이지 Q&amp;A 게시판을
              통해&nbsp;접수
            </span>
          </p>

          <p>
            <span>
              <strong>배송 비용 ㅣ</strong>&nbsp;단순 변심은 왕복&nbsp;택배비
              5,000원 (반품 상품을 제외한 나머지 금액이 50,000원 이상일 경우에는
              2,500원)
            </span>
          </p>

          <p>
            <span>
              <strong>반품 주소 ㅣ&nbsp;</strong>서울특별시 서초구 강남대로
            </span>
          </p>

          <p>&nbsp;</p>

          <p>
            <span>
              <strong>유의 사항</strong>
            </span>
          </p>

          <p>
            <span>
              - 단순 변심의 경우 수령일로부터 7일 이내까지&nbsp;교환∙반품이
              가능합니다. (교환/반품비 고객님 부담)
            </span>
          </p>

          <p>
            <span>
              - 상품 하자, 오배송의 경우 수령일로부터 7일 이내 고객센터 접수
              후&nbsp;교환∙반품이 가능합니다. (교환/반품비 무료)
            </span>
          </p>

          <p>
            <span>
              - 제품 특성상 단순 변심, 부주의에 의한 제품 손상 및 파손, 사용 및
              개봉한 경우 교환/반품이 불가합니다.
            </span>
          </p>

          <p>
            <span>
              - 네이버페이 결제 주문은 동일 상품 / 동일 옵션 교환만 가능합니다.
            </span>
          </p>
        </div>
      </DescWrapper>
    </Section>
  );
};
export default Detail;

const Section = styled.section`
  padding: 3.25rem 1rem;

  ${tablet({
    maxWidth: 1024,
    marginInline: "auto",
  })}
`;

const ItemWrapper = styled.div`
  ${tablet({
    display: "flex",
    gap: "1rem",
  })}
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${tablet({
    flex: 0.5,
  })}
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
  ${tablet({
    flex: 0.5,
    justifyContent: "center",
    borderBottom: "none",
  })}

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
  margin-top: 1rem;
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

const DescWrapper = styled.div`
  margin-top: 4rem;

  h4 {
    text-align: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid;
    margin-bottom: 1.25rem;
  }

  .desc-footer {
    font-size: 14px;
    word-break: keep-all;
  }
`;
