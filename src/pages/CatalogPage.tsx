import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products";
import type { Product } from "../types/product";

interface Props {
  cartCount: number;
  addToCart: (product: Product) => void;
}

const CatalogPage = ({ cartCount, addToCart }: Props) => {
  return (
    <>
      <Header cartCount={cartCount} />

      <div className="container">
        <div className="catalog">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;