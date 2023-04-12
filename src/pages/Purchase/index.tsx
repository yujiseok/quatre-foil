import Button from "@components/Button";
import { tablet } from "@global/responsive";
import { MdClose } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "app/hooks";
import { getTotal } from "lib/utils/getTotal";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProduct, purchaseItem } from "api/product";
import type { AccountValue } from "api/account";
import { getAccountInfo } from "api/account";
import { toast, ToastContainer } from "react-toastify";

const Purchase = () => {
  const queryClient = useQueryClient();
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const { cart } = useAppSelector((state) => state);
  const { purchase } = useAppSelector((state) => state);
  const { productId } = useParams();
  const [accountLists, setAccountLists] = useState<AccountValue>({
    totalBalance: 0,
    accounts: [],
  });
  const navigate = useNavigate();

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`
            주소: ${data.address},
            우편번호: ${data.zonecode}
        `);
      setZipcode(data.zonecode);
      setAddress(data.address);
      setOpenPostcode(false);
    },
  };

  // 모달 오버레이에서 스크롤 방지
  useEffect(() => {
    if (openPostcode) {
      document.body.style.cssText = `
      overflow:hidden;
      `;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [openPostcode]);

  // const availableAccount = async () => {
  //   const accountData = await getAccountInfo();
  //   setAccountLists(accountData);
  // };
  // availableAccount();

  const handlePurchase = async () => {
    const res = await purchaseItem(
      "WRiNDYA5jwXCmGZ9GpIW",
      "oaYvcXEXdZRfDqHPKoGu",
    );
    if (res.data) {
      toast.success("구매에 성공하였습니다", {
        onClose: () => {
          navigate("/mypage/order");
        },
      });
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

      <ShippingContainer>
        <h4>배송지 정보</h4>
        <div>
          <label htmlFor="name">수령인</label>
          <input type="text" id="name" placeholder="수령인" />
        </div>

        <div>
          <label htmlFor="mobile">연락처</label>
          <input type="text" id="mobile" placeholder="연락처" />
        </div>
        <div>
          <label htmlFor="address">배송지</label>
          <AddressWrapper>
            <input
              type="text"
              id="address"
              placeholder="우편번호"
              value={zipcode}
              readOnly
            />
            <AddressBtn type="button" onClick={handle.clickButton}>
              검색하기
            </AddressBtn>
          </AddressWrapper>
          <AddressWrapper>
            <input
              type="text"
              id="address"
              placeholder="주소"
              value={address}
              readOnly
            />
            <input
              type="text"
              id="address"
              placeholder="상세주소를 직접 입력해주세요"
            />
          </AddressWrapper>

          {openPostcode && (
            <Overlay>
              <ModalWrap ref={modalRef}>
                <DaumPostcode
                  onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                  autoClose // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                  // defaultQuery="서울특별시 강남구 역삼동 826-21" // 팝업을 열때 기본적으로 입력되는 검색어
                />
                <Button
                  type="button"
                  onClick={() => {
                    setOpenPostcode(false);
                  }}
                >
                  취소하기
                </Button>
              </ModalWrap>
            </Overlay>
          )}
        </div>
      </ShippingContainer>

      <ShippingContainer>
        <h4>결제 정보</h4>
        {/* <div>{accounts?.account.map((item) => console.log(item))}</div> */}
      </ShippingContainer>
      <Button onClick={handlePurchase}>
        총{" "}
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

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: grid;
  place-items: center;
`;

const ModalWrap = styled.div`
  width: 400px;
  height: fit-content;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  button {
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
    width: 400px;
    border: none;
    background-color: var(--primary-color);
    color: white;
  }
`;

const AddressWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  input {
    gap: 10px;
  }
`;
const AddressBtn = styled.button`
  border: 1px solid var(--primary-color);
  width: 200px;
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
