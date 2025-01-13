import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  // State to store items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Sample products for the product grid
  const products = [
    { id: 1, name: 'Sofa', description: 'Comfortable sofa for your living room', price: 500, image: '/assets/sofa.png' },
    { id: 2, name: 'Dining Table', description: 'Stylish dining table for family meals', price: 350, image: '/assets/table.png' },
    { id: 3, name: 'Chair', description: 'Ergonomic chair for the home office', price: 150, image: '/assets/chair.png' },
  ];
  
  // Function to add products to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <Router>
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
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
