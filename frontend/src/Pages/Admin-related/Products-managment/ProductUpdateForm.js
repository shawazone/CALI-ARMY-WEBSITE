// File: UploadForm.js
import React, { useState, useEffect } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ProductUpdateForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [firstImage, setFirstImage] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  // const [specialty, setSpecialty] = useState("");
  // const [insta, setInsta] = useState("");
  // const [firstImage, setFirstImage] = useState(null);
  // const [secondImage, setSecondImage] = useState(null);
  // const [emptyFields, setEmptyFields] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams(); // Use the useParams hook to get the eventId from the URL

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:4000/api/products/${id}`)
      const json = await response.json()
      
     
      if (response.ok) {
         console.log(json)

        // dispatch({type:'SET_ATHLETES', payload:json})
        setName(json.name)
        setDescription(json.description)
        setPrice(json.price)
        setQuantity(json.quantity)
        setFirstImageUrl(json.image)
        setFirstImage(json.image)

      }else{
        console.log("error")
      }
     }

    fetchProduct()
  },[])




  const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dvgnpeias/upload";
  const cloudinaryPreset = "CaliArmy";
  const [firstImageUrl, setFirstImageUrl] = useState(null);
  // const [secondImageUrl, setSecondImageUrl] = useState(null);

  const handleImageChange = (event, setImage, setImageUrl) => {
    const file = event.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    // Upload images to Cloudinary
    try {
      // Upload first image
      const firstImageUrl = await uploadImage(firstImage);

      // Upload second image
      // const secondImageUrl = await uploadImage(secondImage);

      // Now, send the athlete data along with the Cloudinary URLs to your server
      const productData = {
        name,
        description,
        price,
        quantity,
        image: firstImageUrl,
      };

      const postResponse = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const json = await postResponse.json();

      if (postResponse.ok) {
        console.log("Product updated successfully!");
        toast.success('Product updated successfully!');
    
        navigate('/admin/productsManagement');
        
      } else {
        setEmptyFields(json.emptyFields);
        console.error("Error adding product:", postResponse.statusText);
        console.log("the empty field aree", emptyFields);
        toast.error('Error adding product!');
      }
    } catch (error) {
      console.error("Error uploading images:", error.message);
      toast.warning('Error uploading images!');
    }
  };

  const uploadImage = async (image) => {
    if (!image) return null;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", cloudinaryPreset);

    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const cloudinaryData = await response.json();
      return cloudinaryData.secure_url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white p-4">

    <h1 className="text-3xl mb-6">Product Update Form</h1>
  
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {emptyFields.includes("name") && (
        <p className="text-red-500 text-sm mt-1">Name is required.</p>
      )}
    </div>
  
          
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="description" className="block text-sm font-medium text-white mb-2">description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
        className="bg-red-500 text-white p-3 rounded w-full"
      ></textarea>
      {emptyFields.includes('description') && (
        <p className="text-red-500 text-sm mt-1">Description is required.</p>
      )}
    </div>
        

    <div className="mb-4 w-full max-w-md">
      <label htmlFor="price" className="block text-sm font-medium text-white mb-2">price:</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {emptyFields.includes("price") && (
        <p className="text-red-500 text-sm mt-1">Price is required.</p>
      )}
    </div>

  
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="quantity" className="block text-sm font-medium text-white mb-2">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {emptyFields.includes('quantity') && (
        <p className="text-red-500 text-sm mt-1">Quantity is required.</p>
      )}
    </div>
  
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="firstImage" className="block text-sm font-medium text-white mb-2">First Image:</label>
      <input
        type="file"
        id="firstImage"
        accept="image/*"
        onChange={(e) => handleImageChange(e, setFirstImage, setFirstImageUrl)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {firstImageUrl && (
        <img
          src={firstImageUrl}
          alt="First Image"
          className="mt-4 w-full h-full object-cover"
        />
      )}
    </div>
  
    {/* <div className="mb-4 w-full max-w-md">
      <label htmlFor="secondImage" className="block text-sm font-medium text-white mb-2">Second Image:</label>
      <input
        type="file"
        id="secondImage"
        accept="image/*"
        onChange={(e) => handleImageChange(e, setSecondImage, setSecondImageUrl)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {secondImageUrl && (
        <img
          src={secondImageUrl}
          alt="Second Image"
          className="mt-4 w-full h-full object-cover"
        />
      )}
    </div> */}
  
    <button onClick={handleUpload} className="bg-red-500 text-white p-3 rounded">
      Update Product
    </button>
  </div>

  );
};

export default ProductUpdateForm;
