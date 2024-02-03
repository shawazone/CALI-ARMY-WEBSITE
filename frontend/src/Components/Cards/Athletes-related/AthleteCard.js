import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AthleteCard = ({ athlete }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Assuming is an array and you want to access the first and second element
  const firstPic = athlete.images && athlete.images.length > 0 ? athlete.images[0] : null;
  const secondPic = athlete.images && athlete.images.length > 1 ? athlete.images[1] : null;
  return (
    <div
      className="border shadow-md rounded-md p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <h2 className="text-xl font-bold mb-2">{athlete.name}</h2>
      <p><span className="font-bold">Specialty:</span> {athlete.specialty}</p>
      <p><span className="font-bold">Description:</span> {athlete.description}</p>
      <Link to={athlete.insta}>
        <img
          src={process.env.PUBLIC_URL + '/instagram.png'} 
          className="w-10 h-10 object-cover bg-red-500 border-2 hover:bg-red-400 border-red-600 hover:border-red-400 rounded-md mt-4"
      >
        </img></Link>

      {isHovered && secondPic ? (
        <img
          src={secondPic}
          alt={`${athlete.name}'s Second element`}
          className="mt-4 w-full h-80 object-cover rounded-md shadow-md"
        />
      ) : (
        <img
          src={firstPic}
          alt={`${athlete.name}'s First element`}
          className="mt-4 w-full h-80 object-cover rounded-md shadow-md"
        />
      )}
       <Link to={`/athletes/${athlete._id}`} className="text-red-500 block mt-2">View Details</Link>
    </div>
  );
};

export default AthleteCard;
