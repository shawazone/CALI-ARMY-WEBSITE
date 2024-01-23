import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AthleteCard = ({ athlete }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Assuming `images` is an array and you want to access the first and second images
  const firstImage = athlete.images && athlete.images.length > 0 ? athlete.images[0] : null;
  const secondImage = athlete.images && athlete.images.length > 1 ? athlete.images[1] : null;

  return (
    <div
      className="border p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>uwu</p>
      <h2 className="text-xl font-bold mb-2">{athlete.name}</h2>
      <p><span className="font-bold">Specialty:</span> {athlete.specialty}</p>
      <p><span className="font-bold">Description:</span> {athlete.description}</p>
      <Link to={athlete.insta}><span className="font-bold">Instagram:</span></Link>
      {isHovered && secondImage ? (
        <img
          src={secondImage}
          alt={`${athlete.name}'s Second Image`}
          className="mt-4 w-60 h-80 object-cover "
        />
      ) : (
        <img
          src={firstImage}
          alt={`${athlete.name}'s First Image`}
          className="mt-4 w-60 h-80 object-cover "
        />
      )}
    </div>
  );
};

export default AthleteCard;
