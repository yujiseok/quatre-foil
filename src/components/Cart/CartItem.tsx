import { tablet } from "@global/responsive";
import { useAppDispatch } from "app/hooks";
import type { InitialState } from "features/cartSlice";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "features/cartSlice";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartItem = ({ item }: { item: InitialState }) => {
  const dispatch = useAppDispatch();

  const onIncrement = (item: InitialState) => {
    dispatch(incrementQuantity(item));
  };
  const onDecrement = (item: InitialState) => {
    dispatch(decrementQuantity(item));
  };

  const handleClickDelete = (item: InitialState) => {
    dispatch(removeItem(item));
  };

  return (
    <Item key={item.id}>
      <div className="img-wrapper">
        <Link to="/shop/abc">
          <img src={item.thumbnail} alt={item.title} />
        </Link>
      </div>
      <DetailWrapper>
        <div className="price-detail">
          <p>{item.title}</p>
          <BtnWrapper>
            <button type="button" onClick={() => onDecrement(item)}>
              -
            </button>
            <p>{item.quantity}</p>
            <button
              type="button"
              disabled={item.quantity >= 5}
              onClick={() => onIncrement(item)}
            >
              +
            </button>
          </BtnWrapper>
          <div>{item.price.toLocaleString()}</div>
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
    </Item>
  );
};

const Item = styled.li`
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

    p {
      max-width: 10rem;
    }
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

export default CartItem;
