import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ cartItems = [] }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-summary">
      <Link to="/cart">
        <span>Cart: {totalItems} items</span>
      </Link>
    </div>
  );
};

export default CartSummary;
