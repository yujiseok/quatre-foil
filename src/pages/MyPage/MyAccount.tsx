import styled from "styled-components";
import Button from "@components/Button";
import { useEffect, useState } from "react";
import { colors } from "constants/color";
import { HiOutlineXMark } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import type { AccountValue } from "api/account";
import { delAccount, getAccountInfo } from "api/account";
import AccountModal from "@components/MyPage/AccountModal";
import useGetAccountsQuery from "lib/hooks/useGetAccountsQuery";

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { accountList } = useGetAccountsQuery();

  const onClickButton = () => {
    setIsOpen(true);
  };

  const delMyAccount = async (id: string, boolean: boolean) => {
    const res = await delAccount(id, boolean);
    if (res) {
      alert("삭제되었어요!");
    }
  };

  return (
    <Container>
      {accountList?.accounts?.map((account) => {
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
      {accountList?.accounts.length === 0 ? (
        <NoAccountContainter>⚠️ 등록된 계좌가 없습니다.</NoAccountContainter>
      ) : null}
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

const NoAccountContainter = styled.div`
  text-align: center;
  color: var(--black-40);
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
