// api 요청 함수 만들기
import type { AxiosResponse } from "axios";
import { instance } from "./core/api";

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
export const singup: AuthFn = async (
  email,
  password,
  displayName,
  profileImgBase64,
) => {
  try {
    const res = await instance("/auth/signup", {
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
    console.log(error);
    return false;
  }
};

export const login: AuthFn = async (email, password) => {
  const res = await instance("/auth/login", {
    method: "post",
    data: {
      email,
      password,
    },
  });
  console.log(res.data);
  return res.data;
};
