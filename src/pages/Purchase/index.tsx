import Button from "@components/Button";
import { tablet } from "@global/responsive";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Purchase = () => {
  return (
    <Container>
      <h4>
        주문 목록 <span>몇 개</span>
      </h4>

      <PurchaseWrapper>
        <PurchaseItem>
          <div className="img-wrapper">
            <Link to="/shop/abc">
              <img
                src="https://w.namu.la/s/ce183abef5e87594e9b0c182844ef87ad1679448ae06239ae8e4db1004c577a9dd67d3048532f18f13937fe4ef96e487abb8166b7afa7d4c07ff9eb8cbec249ce620af833f563f63dacfd0fd04228027"
                alt="이미지"
              />{" "}
            </Link>
          </div>
          <DetailWrapper>
            <div className="price-detail">
              <p />
              <BtnWrapper>
                <p>몇개</p>
              </BtnWrapper>
              <div>얼마</div>
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
        </PurchaseItem>
      </PurchaseWrapper>

      <ShippingContainer>
        <h4>배송지 정보</h4>
        <div>
          <label htmlFor="name">수령인</label>
          <input type="text" id="name" placeholder="수령인" />
        </div>
        <div>
          <label htmlFor="address">배송지</label>
          <input type="text" id="address" placeholder="배송지" />
        </div>
        <div>
          <label htmlFor="mobile">연락처</label>
          <input type="text" id="mobile" placeholder="연락처" />
        </div>
      </ShippingContainer>
      <Button> 총 얼마 주문하기</Button>
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
  margin-bottom: 20px;
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
