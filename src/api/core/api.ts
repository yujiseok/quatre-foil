import axios from "axios";

export const instance = axios.create({
  baseURL: "https://asia-northeast3-heropy-api.cloudfunctions.net/api ",
  headers: {
    "content-type": "application/json",
    apiKey: import.meta.env.VITE_API_KEY,
    username: import.meta.env.VITE_API_USERNAME,
    masterKey: true,
  },
});
