import styled from "styled-components";

const MyOrder = () => {
  return (
    <Container>
      <h2>주문 내역</h2>
      <ItemContainer>
        <h3>결제 완료</h3>
        <ItemInfoWrapper>
          <img
            src="https://w.namu.la/s/ce183abef5e87594e9b0c182844ef87ad1679448ae06239ae8e4db1004c577a9dd67d3048532f18f13937fe4ef96e487abb8166b7afa7d4c07ff9eb8cbec249ce620af833f563f63dacfd0fd04228027"
            alt="상품이미지"
          />
          <ItemInfoContainer>
            <p>2021.12.24 구매</p>
            <span>도라에몽 인형</span>
            <span>5,000원</span>
          </ItemInfoContainer>
        </ItemInfoWrapper>
        <ConfirmOrderContainer>
          <Cfmbtn type="button">구매확정</Cfmbtn>
          <Cfmbtn type="button">구매취소</Cfmbtn>
        </ConfirmOrderContainer>
      </ItemContainer>
    </Container>
  );
};
export default MyOrder;

const Container = styled.ul`
  max-width: 750px;
  padding: 1.875rem 1rem;
  margin: 1.875rem auto 0;
  h2 {
    margin-bottom: 0.875rem;
    margin-left: 150px;
  }
`;

const ItemContainer = styled.li`
  /* border: 1px solid var(--black-20); */
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.08), 1px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  img {
    max-width: 100px;
  }
`;

const ItemInfoContainer = styled.div`
  display: inline-block;
  margin-left: 20px;
  p {
    color: var(--black-30);
    font-size: 14px;
    line-height: 2;
  }
  span {
    display: block;
  }
`;

const ConfirmOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const Cfmbtn = styled.button`
  border: 1px solid var(--black-20);
  width: 280px;
  border-radius: 5px;
  padding: 5px 0;
`;
