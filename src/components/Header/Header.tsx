import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        QPICK
      </Link>

      <Link to="/cart" className="cart">
        🛒 <span>0</span>
      </Link>
    </header>
  );
};

export default Header;