import axiosInstance from "./axiosInstance";
import { AuthResponse } from "../types/auth";

export async function getItems({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  try {
    const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    const { data } = await axiosInstance.get(`products?${query}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getBestProducts() {
  try {
    const { data } = await axiosInstance.get("/products?orderBy=favorite");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProductDetail(params: string) {
  try {
    const { data } = await axiosInstance.get(`products/${params}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getComments(params: string) {
  try {
    const query = 3;
    const { data } = await axiosInstance.get(
      `products/${params}/comments?limit=${query}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function signIn(...rest: AuthResponse[]) {
  try {
    const { data } = await axiosInstance.post(`auth/signin`, ...rest);
    console.log("singin", data)
    return data;
  } catch (error) {
    throw error;
  }
}

export async function signUp(...rest: AuthResponse[]) {
  try {
    const { data } = await axiosInstance.post(`auth/signup`, ...rest);
    console.log("signup", data)
    return data;
  } catch (error) {
    throw error;
  } 
}