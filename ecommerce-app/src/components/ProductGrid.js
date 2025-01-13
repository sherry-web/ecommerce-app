import React from "react";
import ProductCard from "./ProductCard"; // Ensure correct path
import '../styles/ProductGrid.css';

const ProductGrid = ({ products, addToCart }) => { // Props passed to ProductGrid
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available.</p>; // Adding a fallback in case products is empty
  }

  return (
    <section id="products" className="product-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </section>
  );
};

export default ProductGrid;
