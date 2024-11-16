import React from 'react';
import ProductCard from '../components/ProductCard.jsx';
import products from '../db/products.json'; // Static JSON file for now

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Mystery</h2>
      <p>Showing {products.length} books</p>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
