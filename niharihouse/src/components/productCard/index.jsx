import React from 'react';


const ProductCard = (props) => {
  console.log(props)
  return (
    <div className="product-card">
      <img src={props.image} alt={props.title} className="product-image" />

      <div className="product-info">
        <h2 className="product-title">{props.title}</h2>
        <p className="product-price">Rs{props.price}</p>
        <button className="product-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
