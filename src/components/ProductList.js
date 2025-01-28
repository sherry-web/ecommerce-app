import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';  // Ensure this path is correct

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
