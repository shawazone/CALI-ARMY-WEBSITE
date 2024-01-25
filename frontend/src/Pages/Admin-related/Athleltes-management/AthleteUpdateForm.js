// File: UploadForm.js
import React, { useState ,useEffect} from 'react';

import {  useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

const AthleteUpdateForm = () => {
  const { id } = useParams(); // Use the useParams hook to get the blogId from the URL  
  
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [description, setDescription] = useState('');
  const [insta, setInsta] = useState('');
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const navigate = useNavigate();

  const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dvgnpeias/upload';
  const cloudinaryPreset = 'CaliArmy';
  const [firstImageUrl, setFirstImageUrl] = useState(null);
  const [secondImageUrl, setSecondImageUrl] = useState(null);

  useEffect(() => {
    const fetchAthletes = async () => {
      const response = await fetch(`http://localhost:4000/api/athletes/${id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
     
      const json = await response.json()
     
      if (response.ok) {
         console.log(json)
         setName(json.name)
         setSpecialty(json.specialty)
         setDescription(json.description)
         setInsta(json.insta)
         setFirstImageUrl(json.images[0])
         setFirstImage(json.images[0])
         setSecondImageUrl(json.images[1])
         setSecondImage(json.images[1])
        // dispatch({type:'SET_WORKOUTS', payload:json})
      } }

    fetchAthletes()
  },[])





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
      const secondImageUrl = await uploadImage(secondImage);

      // Now, send the athlete data along with the Cloudinary URLs to your server
      const athleteData = {
        name,
        specialty,
        description,
        insta,
        images: [firstImageUrl, secondImageUrl],
      };

      const postResponse = await fetch(`http://localhost:4000/api/athletes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(athleteData),
        
      });
      const json = await postResponse.json();
      if (postResponse.ok) {
        console.log('Athlete Updated successfully!');
         toast.success('Athlete Updated successfully!');
        setName('');
        setSpecialty('');
        setDescription('');
        setInsta('');
        setFirstImage(null);
        setSecondImage(null);
        setFirstImageUrl(null);
        setSecondImageUrl(null);
        setEmptyFields([])

        navigate('/admin/athletesManegement')
      } else {
        setEmptyFields(json.emptyFields);
        console.error('Error adding athlete:', postResponse.statusText);
        toast.error('Error adding athlete');
      }
    } catch (error) {
      console.error('Error uploading images:', error.message);
      toast.warning('Error uploading images');
    }
  };

  const uploadImage = async (image) => {
    if (!image) return null;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', cloudinaryPreset);

    const response = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const cloudinaryData = await response.json();
      return cloudinaryData.secure_url;
    } else {
      throw new Error('Image upload failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white p-4">

    <h1 className="text-3xl mb-6">Athlete Upload Form</h1>
  
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
      <label htmlFor="specialty" className="block text-sm font-medium text-white mb-2">Specialty:</label>
      <input
        type="text"
        id="specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {emptyFields.includes("specialty") && (
        <p className="text-red-500 text-sm mt-1">Specialty is required.</p>
      )}
    </div>
  
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="description" className="block text-sm font-medium text-white mb-2">Description:</label>
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
      <label htmlFor="insta" className="block text-sm font-medium text-white mb-2">Instagram:</label>
      <input
        type="text"
        id="insta"
        value={insta}
        onChange={(e) => setInsta(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {emptyFields.includes('insta') && (
        <p className="text-red-500 text-sm mt-1">Instagram is required.</p>
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
  
    <div className="mb-4 w-full max-w-md">
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
    </div>
  
    <button onClick={handleUpload} className="bg-red-500 text-white p-3 rounded">
      Update Athlete
    </button>
  </div>

  );
};
  
export default AthleteUpdateForm;
