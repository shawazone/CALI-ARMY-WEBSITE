// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border shadow-md rounded-md p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p><span className="font-bold">Description:</span> {product.description}</p>
      <p><span className="font-bold">Price:</span> {product.price}</p>
      <p><span className="font-bold">Quantity:</span> {product.quantity}</p>
      <img src={product.image} alt={`${product.name}`} className="mt-4 w-60 h-80 object-contain shadow-md" />
      <Link to={`/products/${product._id}`} className="text-blue-500 block mt-2">View Details</Link>
    </div>
  );
};

export default ProductCard;
