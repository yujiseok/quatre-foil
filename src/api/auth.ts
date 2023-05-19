// api 요청 함수 만들기
import { AxiosError } from "axios";
import { client, clientNoAuth } from "./core/api";

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
  try {
    const res = await client("/auth/signup", {
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

export const login = (email: string, password: string) => {
  const res = clientNoAuth({
    method: "post",
    url: "/auth/login",
    data: {
      email,
      password,
    },
  });

  return res;
};

export const logout = () => {
  const res = client({
    method: "post",
    url: "/auth/logout",
  });
  return res;
};

// 정보 수정
export const editInfo: EditAuthFn = async (
  displayName,
  profileImgBase64,
  oldPassword,
  newPassword,
) => {
  try {
    const res = await client("/auth/user", {
      method: "PUT",
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
