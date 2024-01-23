import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleProductPage() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/${id}`);
        const productData = await response.json();

        if (response.ok) {
          setName(productData.name);
          setDescription(productData.description);
          setPrice(productData.price);
          setQuantity(productData.quantity);
          setImage(productData.image);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="border p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p><span className="font-bold">Description:</span> {description}</p>
      <p><span className="font-bold">Price:</span> {price}</p>
      <p><span className="font-bold">Quantity:</span> {quantity}</p>
      <img src={image} alt={`${name}'s Image`} className="mt-4 w-60 h-80 object-cover" />
      <Link to="/products" className="text-blue-500 block mt-2">Back to Products</Link>
    </div>
  );
}
