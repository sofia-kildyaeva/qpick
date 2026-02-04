import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import type { Product } from "./types/product";

const App = () => {
  const [cartCount, setCartCount] = useState<number>(() => {
    const data = sessionStorage.getItem("cart");
    return data ? JSON.parse(data).length : 0;
  });

  const addToCart = (product: Product) => {
    const data = sessionStorage.getItem("cart");
    const cart: Product[] = data ? JSON.parse(data) : [];

    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CatalogPage
              cartCount={cartCount}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cartCount={cartCount} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;