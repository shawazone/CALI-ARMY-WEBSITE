import React from 'react';
import { Link } from 'react-router-dom';

const AthleteCard = ({ athlete }) => {
  return (
    <div className="border p-4 m-4 max-w-80">
        <p>uwu</p>
      <h2 className="text-xl font-bold mb-2">{athlete.name}</h2>
      <p><span className="font-bold">Specialty:</span> {athlete.specialty}</p>
      <p><span className="font-bold">Description:</span> {athlete.description}</p>
      <Link to={athlete.insta}><span className="font-bold">Instagram:</span> </Link>
      <img src={athlete.image} alt={`${athlete.name}'s Image`} className="mt-4 w-60 h-160" />
    </div>
  );
};

export default AthleteCard;