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
    <div className="flex flex-wrap justify-center">
      {products.length === 0 ? (
        <p className="text-xl font-bold">There are no products.</p>
      ) : (
        products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
  
}
