import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems = [] }) => { // Default to an empty array
  const totalPrice = cartItems.reduce((total, item) => total + (Number(item.price) || 0), 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name} - {`ZAR ${(Number(item.price) || 0).toFixed(2)}`}</li> 
          ))}
        </ul>
      )}
      <h3>Total: {`ZAR ${totalPrice}`}</h3> {/* Total price */}
    </div>
  );
};

export default Cart;
