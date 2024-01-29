

import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import { useAthletesContext } from '../../../hooks/useAthletesContext';

import { Link } from 'react-router-dom';
import ProductMangementCard from '../../../Components/Cards/Products-related/ProductMangementCard';


const ProductMangementPage = () => {
  // const [athletes, setAthletes] = useState([]);
//   const {athletes, dispatch}= useAthletesContext() 
const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/api/products/')
      const json = await response.json()
      
     
      if (response.ok) {
        //  console.log(json)
      
        // dispatch({type:'SET_ATHLETES', payload:json})
        setProducts(json)
        
      }else{
        console.log("error")
      }
     }

    fetchProducts()
  },[])

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
