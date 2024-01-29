

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { useAthletesContext } from '../../../hooks/useAthletesContext';
import { Link } from 'react-router-dom';
import ProductMangementCard from '../../../Components/Cards/Products-related/ProductMangementCard';
import { useProductsContext } from '../../../hooks/useProductsContext';


const ProductMangementPage = () => {
  // const [athletes, setAthletes] = useState([]);
//   const {athletes, dispatch}= useAthletesContext() 
// const [products, setProducts] = useState([]);
const {products, dispatch}= useProductsContext()

 
useEffect(() => {
  // Fetch products from the API
  axios.get('http://localhost:4000/api/products/')
    .then(response => {
      // setEvents(response.data);
      dispatch({type:'SET_PRODUCT', payload:response.data})
    })
    .catch(error => {
      console.error('Error fetching product:', error);
    });
}, []);

  return (
    <>
    <div className='flex justify-center items-start mt-4 mb-14 w-full lg:w-2/3 xl:w-1/2 mx-auto'>
      <Link to="/admin/productsManagement/newProduct">
        <button className="bg-red-500 text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
          Add a new Product
        </button>
      </Link>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* {athletes.length === 0 ? (
        <p className="text-xl font-bold">There are no athletes.</p>
      ) : (
        athletes.map((athlete) => (
          <AthleteManagmentCard key={athlete._id} athlete={athlete} />
        ))
      )} */}
       {products && Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <ProductMangementCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
    </div>
  </>

  );
};

export default ProductMangementPage;
