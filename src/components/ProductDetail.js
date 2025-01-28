import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{`ZAR ${product.price.toFixed(2)}`}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;