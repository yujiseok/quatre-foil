import Button from "@components/Button";
import { tablet } from "@global/responsive";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "app/hooks";
import { getTotal } from "lib/utils/getTotal";
import { ToastContainer } from "react-toastify";
import usePurchaseItem from "lib/hooks/usePurchaseItem";
import useGetAccountsQuery from "lib/hooks/useGetAccountsQuery";
import Shipping from "@components/Purchase/Shipping";

const Purchase = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state);
  const { purchase } = useAppSelector((state) => state);
  const { productId } = useParams();
  const { accountList } = useGetAccountsQuery();
  const [accountId, setAccountId] = useState("");
  const { purchaseMutation } = usePurchaseItem();

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setAccountId(e.target.value);
  };

  const handlePurchase = async () => {
    if (!productId) {
      alert("상품을 선택해 주세요");
    } else if (productId === "cart") {
      alert("카트입니다");
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

      <Shipping />

      <ShippingContainer>
        <h4>결제 정보</h4>
        <label htmlFor="account-select">결제 수단</label>
        <CustomSelect
          name="pets"
          id="account-select"
          onChange={handleChangeSelect}
        >
          <option value="none">계좌를 선택하세요</option>
          {accountList?.accounts.map((account) => {
            return (
              <option value={account.id} key={account.id}>
                {account.bankName} - {account.balance?.toLocaleString()}원
              </option>
            );
          })}
        </CustomSelect>
      </ShippingContainer>

      <Button onClick={handlePurchase}>
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

const CustomSelect = styled.select`
  display: block;
  border: 1px solid var(--primary-color);
  width: 100%;
  line-height: 10px;
  padding: 0.625rem 0.9375rem;
  color: var(--primary-color);
`;

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

const ShippingContainer = styled.form`
  margin-bottom: 3.5rem;
  label {
    line-height: 2.5rem;
  }
  input {
    display: block;
    border: 1px solid var(--primary-color);
    width: 100%;
    line-height: 10px;
    padding: 0.625rem 0.9375rem;
    color: var(--primary-color);
  }
  p {
    color: red;
    font-size: 10px;
    margin-top: 0.25rem;
  }
`;

export default Purchase;
