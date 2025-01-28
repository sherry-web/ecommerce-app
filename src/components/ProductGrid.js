import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../styles/ProductGrid.css";

const ProductGrid = ({ products, addToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseQuery)
      )
    );
  };

  return (
    <div className="product-grid-container">
      <SearchBar onSearch={handleSearch} />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">ZAR {product.price.toFixed(2)}</p> {/* ZAR Price */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
