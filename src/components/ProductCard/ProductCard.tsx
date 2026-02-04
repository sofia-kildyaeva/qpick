import type { Product } from "../../types/product";
import "./ProductCard.css";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const handleBuy = () => {
    const data = sessionStorage.getItem("cart");
    const cart: Product[] = data ? JSON.parse(data) : [];

    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));

    window.location.reload();
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <div className="info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>

        <div className="bottom">
          <span className="price">{product.price} ₽</span>
          <button onClick={handleBuy}>Купить</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;