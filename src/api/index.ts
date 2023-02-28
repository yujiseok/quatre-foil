// api 요청 함수 만들기
import { AxiosError } from "axios";
import { request } from "./core/api";

// 인증
interface AuthFn {
  (
    email?: string,
    password?: string,
    displayName?: string,
    profileImgBase64?: string,
    accessToken?: string,
  ): Promise<ResponseValue>;
}

interface EditAuthFn {
  (
    displayName?: string,
    profileImgBase64?: string,
    oldPassword?: string,
    newPassword?: string,
    accessToken?: string,
  ): Promise<User>;
}

interface User {
  email: string;
  displayName: string;
  profileImg: string | null;
}

interface ResponseValue {
  // response: any;
  user: User;
  accessToken: string;
  error: {
    response: {
      data: string;
    };
  };
}

// 회원가입
export const signUp: AuthFn = async (
  email,
  password,
  displayName,
  profileImgBase64,
) => {
  const res = await request("/auth/signup", {
    method: "post",
    data: {
      email,
      password,
      displayName,
      profileImgBase64,
    },
  });
  return res.data;
};

// 로그인
export const login: AuthFn = async (email, password) => {
  try {
    const res = await request("/auth/login", {
      method: "post",
      data: {
        email,
        password,
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

// 로그아웃
export const logout: AuthFn = async (token) => {
  try {
    const res = await request("/auth/logout", {
      method: "post",
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

// 정보 수정
export const editInfo: EditAuthFn = async (
  displayName,
  profileImgBase64,
  oldPassword,
  newPassword,
  token,
) => {
  try {
    const res = await request("/auth/user", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        displayName,
        profileImgBase64,
        oldPassword,
        newPassword,
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

// 계좌

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

interface AccountValue {
  totalBalance: number;
  accounts: Bank[];
}

interface Bank {
  // 사용자 계좌 정보
  id: string; // 계좌 ID
  bankName: string; // 은행 이름
  bankCode: string; // 은행 코드
  accountNumber: string; // 계좌 번호
  balance: number; // 계좌 잔액
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
    const res = await request("/account/banks", {
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
    const res = await request("/api/account", {
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
  try {
    const res = await request("/api/account", {
      method: "POST",
      data: {
        bankCode,
        accountNumber,
        phoneNumber,
        signature,
      },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
  return false;
};
