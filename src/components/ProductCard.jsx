import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-author">{product.author}</p>
            <div className="product-pricing">
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount">({product.discount}%)</span>
            </div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
