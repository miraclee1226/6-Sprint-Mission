import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

type AxiosDispatcher = <T>(options: AxiosRequestConfig<T>) => Promise<AxiosResponse<T>>;

export const axiosRequester: AxiosDispatcher = async (options) => {
  const client = await axiosInstance({ ...options });
  
  return client;
};
