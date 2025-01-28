import React from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
          ))}
        </ul>
      )}
      <h3>Total: {`ZAR ${totalPrice}`}</h3>
    </div>
  );
};

export default Cart;