import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AthleteManagmentCard = ({ athlete, onDelete, onUpdate }) => {
  const [isHovered, setIsHovered] = useState(false);

  const firstPic = athlete.images && athlete.images.length > 0 ? athlete.images[0] : null;
  const secondPic = athlete.images && athlete.images.length > 1 ? athlete.images[1] : null;

    const deleteAthlete = async (id) => {   
    const response = await fetch(`http://localhost:4000/api/athletes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
        
        console.log('Athlete deleted successfully!');
        }
    }




  return (
    <div
      className="border p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{athlete.name}</h2>
        <div className="flex space-x-2">
        <Link to={`/admin/athletesManegement/${athlete._id}`}>
          <button className="bg-blue-500 text-white p-2 rounded">
           Update
          </button>
            </Link>
          <button onClick={() => deleteAthlete(athlete._id)} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </div>
      </div>
      <p>
        <span className="font-bold">Specialty:</span> {athlete.specialty}
      </p>
      <p>
        <span className="font-bold">Description:</span> {athlete.description}
      </p>
      <Link to={athlete.insta}>
        <img
          src={process.env.PUBLIC_URL + '/instagram.png'}
          alt="Instagram Logo"
          className="w-10 h-10 object-cover bg-red-500 border-2 hover:bg-red-400 border-red-600 hover:border-red-400 rounded-md mt-4"
        />
      </Link>
      {isHovered && secondPic ? (
        <img src={secondPic} alt={`${athlete.name}'s Second element`} className="mt-4 w-60 h-80 object-cover" />
      ) : (
        <img src={firstPic} alt={`${athlete.name}'s First element`} className="mt-4 w-60 h-80 object-cover" />
      )}
      <Link to={`/athletes/${athlete._id}`} className="text-red-500 block mt-2">
        View Details
      </Link>
    </div>
  );
};

export default AthleteManagmentCard;
