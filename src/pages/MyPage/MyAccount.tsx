import styled from "styled-components";
import { useState } from "react";

const MyAccount = () => {
  return (
    <Container>
      <h2>계좌 관리</h2>
      <p>계좌 총 잔액 :</p>
      <Button type="button">계좌 추가</Button>
    </Container>
  );
};
export default MyAccount;

const Container = styled.div`
  padding: 1.875rem 1rem;
  max-width: 400px;
  margin: 1.875rem auto 0;
  h2 {
    margin-bottom: 0.875rem;
  }
`;

const Button = styled.button`
  margin-bottom: 0.625rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--white);
`;
