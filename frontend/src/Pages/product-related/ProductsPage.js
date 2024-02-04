import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../Components/Cards/Products-related/ProductCard';

export default function ProductsPage() {
  
    const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('http://localhost:4000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center shadow-md ">
  {products.length === 0 ? (
    <p className="text-xl font-bold">fetching products.</p>
  ) : (
    products.map((product) => (
      <div key={product._id} className="relative m-4">
        {/* Product Card */}
        <ProductCard product={product} />

        {/* Coming Soon Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70 rounded-md">
          <p className="text-white text-2xl font-bold">COMING SOON</p>
        </div>
      </div>
    ))
  )}
</div>

  );
  
}
