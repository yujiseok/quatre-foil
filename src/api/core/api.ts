import type { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import axios from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://asia-northeast3-heropy-api.cloudfunctions.net/api",
  headers: {
    "Content-type": "application/json",
    apiKey: import.meta.env.VITE_API_KEY,
    username: import.meta.env.VITE_API_USERNAME,
  },
};

export const clientNoAuth = axios.create(axiosConfig);
export const client = axios.create(axiosConfig);

client.interceptors.request.use((config) => {
  const { accessToken } = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root") as string)?.auth,
  );
  if (!config.headers) return config;

  if (accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

client.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const { status } = error;

    if (status === 401) {
      localStorage.removeItem("persist:root");
      alert("토큰이 만료되었습니다.");

      window.location.replace("https://quatre-foil.netlify.app/login");
    }

    return Promise.reject(error);
  },
);
