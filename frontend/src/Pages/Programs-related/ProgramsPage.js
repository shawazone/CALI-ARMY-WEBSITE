import React from 'react'

import ImageSlider from '../../Components/ImageSlider';

export default function ProgramsPage() {
  const images = [
    '/homePics/Bars2.png',
    '/homePics/baki-planche.jpg',
    '/homePics/big-team-transformed.jpeg',
    // Add more image URLs as needed
  ];


  return (
    <div className="mt-8 w-full flex justify-center items-center  flex-col">
      <h2 className="text-2xl font-bold mb-4">Image Slider</h2>
      <ImageSlider images={images} />
    </div>
  );
};
