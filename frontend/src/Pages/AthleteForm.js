// File: UploadForm.js
import React, { useState } from 'react';

const AthleteForm = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [description, setDescription] = useState('');
  const [insta, setInsta] = useState('');
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);

  const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dvgnpeias/upload';
  const cloudinaryPreset = 'CaliArmy';
  const [firstImageUrl, setFirstImageUrl] = useState(null);
  const [secondImageUrl, setSecondImageUrl] = useState(null);

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

      const postResponse = await fetch('http://localhost:4000/api/athletes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(athleteData),
      });

      if (postResponse.ok) {
        console.log('Athlete added successfully!');
      } else {
        console.error('Error adding athlete:', postResponse.statusText);
      }
    } catch (error) {
      console.error('Error uploading images:', error.message);
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
    <div className="flex flex-col items-center justify-center h-full bg-black text-white">
    <h1 className="text-3xl mb-6">Athlete Upload Form</h1>
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
        Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
    </div>
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="specialty" className="block text-sm font-medium text-white mb-2">
        Specialty:
      </label>
      <input
        type="text"
        id="specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
    </div>
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
        Description:
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
        className="bg-red-500 text-white p-3 rounded w-full"
      ></textarea>
    </div>
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="insta" className="block text-sm font-medium text-white mb-2">
        Instagram:
      </label>
      <input
        type="text"
        id="insta"
        value={insta}
        onChange={(e) => setInsta(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
    </div>
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="firstImage" className="block text-sm font-medium text-white mb-2">
        First Image:
      </label>
      <input
        type="file"
        id="firstImage"
        accept="image/*"
        onChange={(e) => handleImageChange(e, setFirstImage, setFirstImageUrl)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {firstImageUrl && <img src={firstImageUrl} alt="First Image" className="mt-4 w-full h-full object-cover" />}
    </div>
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="secondImage" className="block text-sm font-medium text-white mb-2">
        Second Image:
      </label>
      <input
        type="file"
        id="secondImage"
        accept="image/*"
        onChange={(e) => handleImageChange(e, setSecondImage, setSecondImageUrl)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {secondImageUrl && <img src={secondImageUrl} alt="Second Image" className="mt-4 w-full h-full object-cover" />}
    </div>
    <button onClick={handleUpload} className="bg-red-500 text-white p-3 rounded">
      Add Athlete
    </button>
  </div>
  );
};

export default AthleteForm;
