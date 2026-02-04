
import type { Product } from "../types/product";
import type { CartItem } from "../types/cartItem";

const CART_KEY = "cart";

export const getCart = (): CartItem[] => {
  const data = sessionStorage.getItem(CART_KEY);
  if (!data) return [];

  const products: Product[] = JSON.parse(data);
  const grouped: Record<number, CartItem> = {};

  products.forEach((product) => {
    if (grouped[product.id]) {
      grouped[product.id].quantity += 1;
    } else {
      grouped[product.id] = { ...product, quantity: 1 };
    }
  });

  return Object.values(grouped);
};

export const setCart = (items: CartItem[]) => {
  const products: Product[] = [];

  items.forEach((item) => {
    for (let i = 0; i < item.quantity; i++) {
      products.push(item);
    }
  });

  sessionStorage.setItem(CART_KEY, JSON.stringify(products));
};