import styled from "styled-components";
import Button from "@components/Button";
import AccountModal from "@components/AccountModal";
import { useState } from "react";
import { colors } from "constants/color";
import { HiOutlineXMark } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import shinhan from "../../assets/shinhan.svg";
import kookmin from "../../assets/kookmin.svg";
import woori from "../../assets/woori.svg";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <Container>
      {/* <h3>연결된 잔액</h3> */}
      <BankList>
        <BankName>
          <img src={shinhan} alt="신한" />
          <p>&nbsp;신한은행</p>
        </BankName>
        <p>1,000,000원</p>
        <DeleteBtn>
          <HiOutlineXMark />
        </DeleteBtn>
      </BankList>

      <BankList>
        <BankName>
          <img src={shinhan} alt="신한" />
          <p>&nbsp;신한은행</p>
        </BankName>
        <p>40,000원</p>
        <DeleteBtn>
          <HiOutlineXMark />
        </DeleteBtn>
      </BankList>

      <BtnContainer>
        <Button onClick={onClickButton}>
          <AiOutlinePlus />
          계좌 연결
        </Button>
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

const Container = styled.div`
  max-width: 750px;
  margin: 1.875rem auto 0;
`;

const BankList = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--black-20);
  margin-top: 1rem;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  align-items: center;
  div {
    padding: 4px 8px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: var(--black-50);
  }
`;

const BankName = styled.div`
  align-items: center;
  img {
    width: 30px;
  }
  p {
    color: ${colors.black90};
    font-weight: 500;
  }
  display: flex;
`;

const BtnContainer = styled.div`
  align-items: center;
  margin: 1.5rem auto 1.25rem;
  Button {
    display: flex;
    border: none;
    justify-content: center;
  }
`;

const DeleteBtn = styled.button`
  color: ${colors.black80};
  :hover {
    color: ${colors.secondary};
  }
`;
