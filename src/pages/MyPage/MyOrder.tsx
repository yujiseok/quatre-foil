import styled from "styled-components";
import { mobile, desktop, tablet } from "../../global/responsive";

const MyOrder = () => {
  return (
    <Container>
      <ItemContainer>
        <TitleContainer>
          <h3>결제 완료&nbsp;·&nbsp;</h3>
          <span>확정 대기</span>
        </TitleContainer>
        <Wrapper>
          <ItemInfoWrapper>
            <div className="img-wrapper">
              <img
                src="https://w.namu.la/s/ce183abef5e87594e9b0c182844ef87ad1679448ae06239ae8e4db1004c577a9dd67d3048532f18f13937fe4ef96e487abb8166b7afa7d4c07ff9eb8cbec249ce620af833f563f63dacfd0fd04228027"
                alt="상품이미지"
              />
            </div>
            <ItemInfoContainer>
              <p>2021.12.24 구매</p>
              <span>도라에몽의 어디로든 문</span>
              <span>5,000원</span>
            </ItemInfoContainer>
          </ItemInfoWrapper>

          <ConfirmOrderContainer>
            <Cfmbtn type="button">확정</Cfmbtn>
            <Cfmbtn type="button">취소</Cfmbtn>
          </ConfirmOrderContainer>
        </Wrapper>
      </ItemContainer>
    </Container>
  );
};
export default MyOrder;

const Container = styled.div`
  max-width: 750px;
  margin: 1.875rem auto 0;
`;

const ItemContainer = styled.div`
  border: 1px solid var(--black-20);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: var(--black-80);
  }
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  .img-wrapper {
    max-width: 100px;
    ${tablet({
      maxWidth: "170px",
    })}
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  ${tablet({
    display: "flex",
    flexDirection: "column",
  })};
`;

const ItemInfoContainer = styled.div`
  display: inline-block;
  margin-left: 1.25rem;
  p {
    color: var(--black-30);
    font-size: 12px;
    line-height: 2;
    ${tablet({
      fontSize: "16px",
    })}
  }
  span {
    font-size: 16px;
    display: block;
    color: var(--black-90);
    ${tablet({
      fontSize: "20px",
    })}
  }
`;

const ConfirmOrderContainer = styled.div`
  color: var(--black-90);
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${tablet({
    display: "flex",
    flexDirection: "row",
  })};
`;

const Cfmbtn = styled.button`
  border: 1px solid var(--black-20);
  min-width: 60px;
  flex: 1;
  :hover {
    color: var(--primary-color);
    border: 1.5px solid var(--primary-color);
  }
  ${tablet({
    padding: "6px 14px",
  })}
`;
