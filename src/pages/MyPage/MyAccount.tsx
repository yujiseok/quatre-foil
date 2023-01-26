import styled from "styled-components";
import Button from "@components/Button";

const MyAccount = () => {
  return (
    <Container>
      <h2>계좌 관리</h2>
      <p>계좌 총 잔액 :</p>
      <BtnContainer>
        <Button>계좌 추가</Button>
      </BtnContainer>
    </Container>
  );
};
export default MyAccount;

const Container = styled.div`
  padding: 1.875rem 1rem;
  max-width: 450px;
  margin: 1.875rem auto 0;
  h2 {
    margin-bottom: 0.875rem;
  }
`;

const BtnContainer = styled.div`
  max-width: 250px;
  margin: 2.5rem auto 0;
`;
