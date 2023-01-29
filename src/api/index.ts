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
  ): Promise<ResponseValue>;
}

interface ResponseValue {
  user: {
    email: string;
    displayName: string;
    profileImg: string | null;
  };
  accessToken: string;
}

// 회원가입
export const signUp: AuthFn = async (
  email,
  password,
  displayName,
  profileImgBase64,
) => {
  try {
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
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return false;
  }
};

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
