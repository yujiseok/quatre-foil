import styled from "styled-components";
import Button from "@components/Button";
import AccountModal from "@components/AccountModal";
import { useState } from "react";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <Container>
      <h2>계좌 관리</h2>
      <Lists>
        <h3>잔액</h3>
        <BankList>
          <p>신한은행</p>
          <div>1,000,000원</div>
        </BankList>
      </Lists>
      <BtnContainer>
        <Button onClick={onClickButton}>계좌 추가</Button>
        {isOpen && (
          <AccountModal
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </BtnContainer>
    </Container>
  );
};
export default MyAccount;

const Container = styled.ul`
  max-width: 750px;
  padding: 1.875rem 1rem;
  margin: 1.875rem auto 0;
  h2 {
    margin-bottom: 0.875rem;
    margin-left: 150px;
  }
`;

const Lists = styled.ul`
  padding-top: 0.625rem;
  h3 {
    margin-bottom: 20px;
  }
`;

const BankList = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  div {
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
    color: var(--white);
    padding: 4px 8px;
    /* border-radius: 4px; */
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: var(--black-50);
  }
`;

const BtnContainer = styled.div`
  max-width: 250px;
  margin: 4rem auto 0;
  Button {
    &:hover {
      background-color: var(--primary-color);
      color: var(--white);
      transition: 0.1s;
    }
  }
`;
