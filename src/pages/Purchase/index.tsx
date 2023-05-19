import Button from "@components/Button";
import { tablet } from "@global/responsive";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getTotal } from "lib/utils/getTotal";
import { ToastContainer } from "react-toastify";
import usePurchaseItem from "lib/hooks/usePurchaseItem";
import Shipping from "@components/Purchase/Shipping";
import AccountSelection from "@components/Purchase/AccountSelection";
import { useState } from "react";
import { removeItem } from "features/cartSlice";

const Purchase = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state);
  const { purchase } = useAppSelector((state) => state);
  const { productId } = useParams();
  const { purchaseMutation } = usePurchaseItem();
  const [accountId, setAccountId] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handlePurchase = async () => {
    if (productId === "cart") {
      cart.forEach((product) => {
        const productId = product.id;
        purchaseMutation({ productId, accountId });
        dispatch(removeItem(product));
      });
      alert("성공적으로 구매하였습니다");
      navigate("/mypage/order");
    } else if (productId) {
      purchaseMutation({ productId, accountId });
      alert("성공적으로 구매하였습니다");
      navigate("/mypage/order");
    }
  };

  return (
    <Container>
      <h4>
        주문 목록
        <span>{productId === "cart" ? getTotal(cart).totalQuantity : "1"}</span>
      </h4>

      <PurchaseWrapper>
        {productId === "cart" ? (
          // 카트에서 주문하기 눌렀을 때
          cart.map((item) => (
            <PurchaseItem key={item.id}>
              <div className="img-wrapper">
                <Link to={`/shop/${item.id}`}>
                  <img src={item.thumbnail} alt={item.title} />
                </Link>
              </div>
              <DetailWrapper>
                <div className="price-detail">
                  <p>{item.title}</p>
                  <BtnWrapper>
                    <p>{item.quantity}</p>
                  </BtnWrapper>
                  <div>{item.price.toLocaleString()} 원</div>
                </div>
              </DetailWrapper>
            </PurchaseItem>
          ))
        ) : (
          // 개별 주문 할 때
          <PurchaseItem>
            <div className="img-wrapper">
              <Link to={`/shop/${purchase.id}`}>
                <img src={purchase.thumbnail} alt={purchase.title} />
              </Link>
            </div>
            <DetailWrapper>
              <div className="price-detail">
                <p>{purchase.title}</p>
                <BtnWrapper>
                  <p>{purchase.quantity}</p>
                </BtnWrapper>
                <div>{purchase.price.toLocaleString()} 원</div>
              </div>
            </DetailWrapper>
          </PurchaseItem>
        )}
      </PurchaseWrapper>

      <Shipping
        zipcode={zipcode}
        setZipcode={setZipcode}
        address={address}
        setAddress={setAddress}
        openPostcode={openPostcode}
        setOpenPostcode={setOpenPostcode}
      />

      <AccountSelection setAccountId={setAccountId} />

      <Button
        type="button"
        onClick={handlePurchase}
        disabled={!zipcode || !address || !accountId}
      >
        총
        {productId === "cart"
          ? getTotal(cart).totalPrice.toLocaleString()
          : (purchase.price * purchase.quantity).toLocaleString()}
        원 주문하기
      </Button>

      <ToastContainer
        position="top-center"
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

const PurchaseWrapper = styled.ul`
  margin: 1.5rem 0;
  border-top: 1px solid;
`;

const PurchaseItem = styled.li`
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

const BtnWrapper = styled.div`
  align-items: center;
  padding: 0.5rem;
  /* width: 28px;
  height: 28px; */
  text-align: center;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Purchase;
