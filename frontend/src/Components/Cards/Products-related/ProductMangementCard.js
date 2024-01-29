// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProductMangementCard = ({ product }) => {
  return (
    <div className="border p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105">
              <div className="flex justify-between items-center mb-2">
        {/* <h2 className="text-xl font-bold">{Event.name}</h2> */}
        <div className="flex space-x-2">
        <Link to={`/admin/eventsManegement/${event._id}`}>
        
          <button className="bg-blue-500 text-white p-2 rounded">
           Update
          </button>
            </Link>
          <button onClick={() => deleteEvent(event._id)} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p><span className="font-bold">Description:</span> {product.description}</p>
      <p><span className="font-bold">Price:</span> {product.price}</p>
      <p><span className="font-bold">Quantity:</span> {product.quantity}</p>
      <img src={product.image} alt={`${product.name}`} className="mt-4 w-60 h-80 object-cover" />
      <Link to={`/products/${product._id}`} className="text-blue-500 block mt-2">View Details</Link>
    </div>
  );
};

export default ProductMangementCard;
