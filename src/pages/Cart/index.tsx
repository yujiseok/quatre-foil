import Button from "@components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { tablet } from "@global/responsive";

interface Props {}
const Cart = (props: Props) => {
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
    <Container>
      <h4>
        장바구니 <span>{count}</span>
      </h4>

      <CartWrapper>
        <CartItem>
          <div className="img-wrapper">
            <Link to="/shop/abc">
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt=""
              />
            </Link>
          </div>
          <DetailWrapper>
            <div className="price-detail">
              <p>어쩌구 저쩌구 - 이불 세트</p>
              <BtnWrapper>
                <button
                  type="button"
                  onClick={onDecrement}
                  // disabled={count === 1}
                >
                  -
                </button>
                <p>{count}</p>
                <button type="button" onClick={onIncrement}>
                  +
                </button>
              </BtnWrapper>
              <div>가격</div>
            </div>
            <div>
              <DeleteBtn type="button">
                <MdClose />
              </DeleteBtn>
              <button className="delete-btn-pc" type="button">
                삭제하기
              </button>
            </div>
          </DetailWrapper>
        </CartItem>
      </CartWrapper>
      <Total>
        <div>합계</div>
        <div>금액</div>
      </Total>
      <Button>주문하기</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1rem 2.25rem;

  h4 {
    font-size: 1.5rem;
    margin-top: 3.5rem;
  }

  ${tablet({
    maxWidth: "750px",
    marginInline: "auto",
  })}
`;

const CartWrapper = styled.div`
  margin: 1.5rem 0;
  border-top: 1px solid;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  /* gap: 1.25rem; */
  position: relative;
  .img-wrapper {
    width: 30%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .price-detail {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;

    ${tablet({
      flexDirection: "row",
      alignItems: "center",
      gap: "1.25rem",
    })}
  }
  .delete-btn-pc {
    font-family: inherit;
    display: none;
    font-weight: 600;
    ${tablet({
      display: "block",
    })}
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  ${tablet({
    flexDirection: "column",
    gap: "1rem",
  })}
`;

const DeleteBtn = styled.button`
  position: absolute;
  /* display: flex;
  align-items: start; */
  height: 100%;
  top: -42px;
  right: 0;
  ${tablet({
    display: "none",
  })}
`;

const BtnWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid;
  button {
    padding: 0.25rem;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:disabled {
      cursor: not-allowed;
    }
  }
  p {
    padding: 0.5rem;
    width: 28px;
    height: 28px;
    text-align: center;
    border-right: 1px solid;
    border-left: 1px solid;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.75rem;
  font-weight: 600;
`;

export default Cart;
