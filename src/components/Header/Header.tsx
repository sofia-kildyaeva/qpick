import { Link } from "react-router-dom";
import { getCart } from "../../utils/cartStorage";
import "./Header.css";

const Header = () => {
  const count = getCart().length;

  return (
    <header className="header">
      <Link to="/" className="logo">QPICK</Link>

      <Link to="/cart" className="cart">
        🛒 <span>{count}</span>
      </Link>
    </header>
  );
};

export default Header;