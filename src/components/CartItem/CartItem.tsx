import type { CartItem as Item } from "../../types/cartItem";
import "./CartItem.css";

interface Props {
  item: Item;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem = ({ item, onIncrease, onDecrease }: Props) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div className="info">
        <h3>{item.title}</h3>
        <p>{item.price} ₽</p>
      </div>

      <div className="controls">
        <button onClick={onDecrease}>−</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default CartItem;