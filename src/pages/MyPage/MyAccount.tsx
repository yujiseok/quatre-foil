import styled from "styled-components";
import Button from "@components/Button";
import AccountModal from "@components/AccountModal";
import { useEffect, useState } from "react";
import { colors } from "constants/color";
import { HiOutlineXMark } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import type { AccountValue } from "api/account";
import { delAccount, getAccountInfo } from "api/account";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountLists, setAccountLists] = useState<AccountValue>({
    totalBalance: 0,
    accounts: [],
  });
  const onClickButton = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    const account = async () => {
      const res = await getAccountInfo();
      setAccountLists(res);
    };
    account();
  }, []);

  const delMyAccount = async (id: string, boolean: boolean) => {
    const res = await delAccount(id, boolean);
    console.log(res);
    if (res) {
      alert("삭제되었어요!!!!!");
    }
    const accountData = await getAccountInfo();
    setAccountLists(accountData);
  };

  return (
    <Container>
      {accountLists?.accounts?.map((account) => {
        return (
          <BankList key={account.bankCode}>
            <BankName>
              <img src={`/assets/${account.bankCode}.svg`} alt="신한" />
              <p>&nbsp;{account.bankName}</p>
            </BankName>
            <p>{account.balance?.toLocaleString("en")}원</p>
            <DeleteBtn
              type="button"
              onClick={() => {
                delMyAccount(account?.id as string, true);
              }}
            >
              <HiOutlineXMark />
            </DeleteBtn>
          </BankList>
        );
      })}
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
            setAccountLists={setAccountLists}
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
    flex: 0.5;
    padding: 4px 8px;
  }
  p {
    flex: 0.5;
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
