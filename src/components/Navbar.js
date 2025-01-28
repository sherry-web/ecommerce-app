import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import CartSummary from "./CartSummary";

const Navbar = ({ cartItems }) => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">E-Commerce Store</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>
            <CartSummary cartItems={cartItems} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
