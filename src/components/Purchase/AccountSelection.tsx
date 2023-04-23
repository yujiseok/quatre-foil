import useGetAccountsQuery from "lib/hooks/useGetAccountsQuery";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const AccountSelection = ({
  setAccountId,
}: {
  setAccountId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { accountList } = useGetAccountsQuery();

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setAccountId(e.target.value);
  };
  return (
    <ShippingContainer>
      <h4>결제 정보</h4>
      <label htmlFor="account-select">결제 수단</label>
      <CustomSelect
        name="pets"
        id="account-select"
        onChange={handleChangeSelect}
      >
        <option value="none">계좌를 선택하세요</option>
        {accountList?.accounts.map((account) => {
          return (
            <option value={account.id} key={account.id}>
              {account.bankName} - {account.balance?.toLocaleString()}원
            </option>
          );
        })}
      </CustomSelect>
    </ShippingContainer>
  );
};

const ShippingContainer = styled.form`
  margin-bottom: 3.5rem;
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

const CustomSelect = styled.select`
  display: block;
  border: 1px solid var(--primary-color);
  width: 100%;
  line-height: 10px;
  padding: 0.625rem 0.9375rem;
  color: var(--primary-color);
`;

export default AccountSelection;
