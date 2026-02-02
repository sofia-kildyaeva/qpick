import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <div className="catalog">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default CatalogPage;