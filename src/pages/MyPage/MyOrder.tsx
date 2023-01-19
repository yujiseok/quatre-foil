import styled from "styled-components";

const MyOrder = () => {
  return (
    <Container>
      <h2>주문 내역</h2>
      <ItemContainer>
        <ItemImageWrapper>
          <img
            src="https://w.namu.la/s/ce183abef5e87594e9b0c182844ef87ad1679448ae06239ae8e4db1004c577a9dd67d3048532f18f13937fe4ef96e487abb8166b7afa7d4c07ff9eb8cbec249ce620af833f563f63dacfd0fd04228027"
            alt="상품이미지"
          />
        </ItemImageWrapper>
        <ItemInfoContainer>
          <p>상품명</p>
          <span>상품 가격</span>
          <OrderDate> | 상품 구매 일자</OrderDate>
          <ConfirmOrderContainer>
            <Cfmbtn type="button">구매확정</Cfmbtn>
            <Cfmbtn type="button">구매취소</Cfmbtn>
          </ConfirmOrderContainer>
        </ItemInfoContainer>
      </ItemContainer>
    </Container>
  );
};
export default MyOrder;

const Container = styled.div`
  padding: 1.875rem 1rem;
  margin: 1.875rem auto 0;
  max-width: 450px;
  h2 {
    margin-bottom: 0.875rem;
  }
`;

const ItemContainer = styled.div`
  border: 1px solid var(--black-20);
  display: flex;
  padding: 10px;
`;

const ItemImageWrapper = styled.div`
  img {
    max-width: 150px;
  }
`;

const ItemInfoContainer = styled.div`
  display: inline-block;
  padding: 10px;
`;

const OrderDate = styled.span``;

const ConfirmOrderContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Cfmbtn = styled.button`
  border: 1px solid var(--primary-color);
`;
