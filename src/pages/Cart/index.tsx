import Button from "@components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "@global/responsive";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { resetCart } from "features/cartSlice";
import { getTotal } from "lib/utils/getTotal";
import CartItem from "@components/Cart/CartItem";

const Cart = () => {
  const { cart } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleClickReset = () => dispatch(resetCart());

  return (
    <Container>
      <div className="cart-top">
        <h4>
          장바구니 <span>{getTotal(cart).totalQuantity || 0}</span>
        </h4>

        <button type="button" onClick={handleClickReset}>
          비우기
        </button>
      </div>

      <CartWrapper>
        {cart.length ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <h4>장바구니가 비었습니다.</h4>
        )}
      </CartWrapper>
      <Total>
        <div>합계</div>
        <div>{getTotal(cart).totalPrice.toLocaleString()} 원</div>
      </Total>
      <Link to="/purchase/cart">
        <Button disabled={!cart.length}>주문하기</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1rem 2.25rem;

  h4 {
    font-size: 1.5rem;
  }

  ${tablet({
    maxWidth: "750px",
    marginInline: "auto",
  })}

  .cart-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.5rem;
  }
`;

const CartWrapper = styled.ul`
  margin: 1.5rem 0;
  border-top: 1px solid;

  h4 {
    text-align: center;
    padding: 3rem 0;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.75rem;
  font-weight: 600;
`;

export default Cart;
