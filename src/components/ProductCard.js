const ProductCard = ({ product, addToCart }) => {
  const getProductImage = (productName) => {
    switch (productName.toLowerCase()) {
      case 'chair':
        return require('../assets/chair.png');
      case 'sofa':
        return require('../assets/sofa.png');
      case 'dining table':
        return require('../assets/table.png');
      default:
        console.error('Image not found for:', productName);
        return product.image;
    }
  };

  const imageSrc = getProductImage(product.name);

  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{`ZAR ${product.price.toFixed(2)}`}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
