import Button from "@components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { tablet } from "@global/responsive";
import { useAppDispatch, useAppSelector } from "app/hooks";
import type { InitialState } from "features/cartSlice";
import {
  removeItem,
  decrementQuantity,
  incrementQuantity,
} from "features/cartSlice";
import { getTotal } from "lib/utils/getTotal";

interface Props {}
const Cart = (props: Props) => {
  const [count, setCount] = useState(1);
  const { cart } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const onIncrement = (item: InitialState) => {
    console.log("clicked");
    dispatch(incrementQuantity(item));
  };
  const onDecrement = (item: InitialState) => {
    dispatch(decrementQuantity(item));
  };

  const handleClickDelete = (item: InitialState) => {
    dispatch(removeItem(item));
  };

  return (
    <Container>
      <h4>
        장바구니 <span>{getTotal(cart).totalQuantity || 0}</span>
      </h4>

      <CartWrapper>
        {cart.map((item) => (
          <CartItem key={item.id}>
            <div className="img-wrapper">
              <Link to="/shop/abc">
                <img src={item.thumbnail} alt={item.title} />
              </Link>
            </div>
            <DetailWrapper>
              <div className="price-detail">
                <p>{item.title}</p>
                <BtnWrapper>
                  <button
                    type="button"
                    onClick={() => onDecrement(item)}
                    // disabled={count === 1}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button type="button" onClick={() => onIncrement(item)}>
                    +
                  </button>
                </BtnWrapper>
                <div>{item.price}</div>
              </div>
              <div>
                <DeleteBtn type="button">
                  <MdClose />
                </DeleteBtn>
                <button
                  className="delete-btn-pc"
                  type="button"
                  onClick={() => handleClickDelete(item)}
                >
                  삭제하기
                </button>
              </div>
            </DetailWrapper>
          </CartItem>
        ))}
      </CartWrapper>
      <Total>
        <div>합계</div>
        <div>{getTotal(cart).totalPrice.toLocaleString()} 원</div>
      </Total>
      <Link to="/purchase/cart">
        <Button>주문하기</Button>
      </Link>
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

const CartWrapper = styled.ul`
  margin: 1.5rem 0;
  border-top: 1px solid;
`;

const CartItem = styled.li`
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
