// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid'; 
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Sofa', description: 'Comfortable sofa for your living room', price: 500, image: '/assets/sofa.png' },
    { id: 2, name: 'Dining Table', description: 'Stylish dining table for family meals', price: 350, image: '/assets/table.png' },
    { id: 3, name: 'Chair', description: 'Ergonomic chair for the home office', price: 150, image: '/assets/chair.png' },
  ];

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductGrid products={products} addToCart={addToCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
