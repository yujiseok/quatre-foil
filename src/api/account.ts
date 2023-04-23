// 계좌

import { AxiosError } from "axios";
import { client } from "./core/api";

interface BankFn {
  (
    name?: string,
    code?: string,
    digits?: number[],
    disabled?: boolean,
  ): Promise<BankValue>;
}

interface AccountFn {
  (
    id?: string,
    bankName?: string,
    bankCode?: string,
    accountNumber?: string,
    balance?: number,
  ): Promise<AccountValue>;
}

interface AddAccountFn {
  (
    bankCode?: string,
    accountNumber?: string,
    phoneNumber?: string,
    signature?: boolean,
  ): Promise<MyAccountValue>;
}

interface BankValue {
  bank: [];
}

export interface AccountValue {
  totalBalance: number;
  accounts: Bank[];
}

interface Bank {
  // 사용자 계좌 정보
  id?: string; // 계좌 ID
  bankName?: string; // 은행 이름
  bankCode?: string; // 은행 코드
  accountNumber?: string; // 계좌 번호
  balance?: number; // 계좌 잔액
}

interface MyAccountValue {
  id: string;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  balance: number;
}

// 선택 가능한 은행 목록 조회
export const getBankInfo: BankFn = async (token) => {
  try {
    const res = await client("/account/banks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return false;
  }
};

// 계좌 목록 및 잔액 조회
export const getAccountInfo: AccountFn = async (token) => {
  try {
    const res = await client("/account", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
  return false;
};

// 계좌 연결
export const addAccount: AddAccountFn = async (
  bankCode,
  accountNumber,
  phoneNumber,
  signature,
) => {
  const res = await client("/account", {
    method: "POST",
    data: {
      bankCode,
      accountNumber,
      phoneNumber,
      signature,
    },
  });
  return res.data;
};

// 계좌 해지
export const delAccount = async (accountId: string, signature: boolean) => {
  try {
    const res = await client("/account", {
      method: "DELETE",
      data: {
        accountId,
        signature,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
  return false;
};
