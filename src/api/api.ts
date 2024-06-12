import axiosInstance from "../utils/axiosInstance";
import { Product } from "../types";

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
