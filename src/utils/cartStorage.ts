
import type { Product } from "../types/product";

const CART_KEY = "cart";

export const getCart = (): Product[] => {
  const data = sessionStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const setCart = (cart: Product[]) => {
  sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
};