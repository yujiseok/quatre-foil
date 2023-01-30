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
  user: User;
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
