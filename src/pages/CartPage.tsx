import { useState } from "react";
import Header from "../components/Header/Header";
import CartItem from "../components/CartItem/CartItem";
import { getCart, setCart } from "../utils/cartStorage";
import type { CartItem as Item } from "../types/cartItem";

const CartPage = () => {
  const [items, setItems] = useState<Item[]>(getCart());

  const increase = (id: number) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updated);
    setCart(updated);
  };

  const decrease = (id: number) => {
    const updated = items
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setItems(updated);
    setCart(updated);
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="cart">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => increase(item.id)}
            onDecrease={() => decrease(item.id)}
          />
        ))}

        <h2>Итого: {totalPrice} ₽</h2>
      </div>
    </>
  );
};

export default CartPage;