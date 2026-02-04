import { Link } from "react-router-dom";
import "./Header.css";

interface Props {
  cartCount: number;
}

const Header = ({ cartCount }: Props) => {
  return (
    <header className="header">
      <Link to="/" className="logo">QPICK</Link>

      <Link to="/cart" className="cart">
        <img src="../../../public/images/Vector.svg" alt="" />
        <span>{cartCount}</span>
      </Link>
    </header>
  );
};

export default Header;