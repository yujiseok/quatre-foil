import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import Button from "@components/Button";

const Shipping = () => {
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

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

  return (
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
  );
};

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

export default Shipping;
