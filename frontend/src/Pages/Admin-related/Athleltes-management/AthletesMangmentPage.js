// AthletePage.js

import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import { Link } from 'react-router-dom';
import AthleteManagmentCard from '../../../Components/Cards/AthleteMangmentCard';

const AthletePage = () => {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/athletes/')
      const json = await response.json()
     
      if (response.ok) {
         console.log(json)
        setAthletes(json)
        // dispatch({type:'SET_WORKOUTS', payload:json})
      } }

    fetchWorkouts()
  },[])

  console.log(athletes);
  return (
    <>
    <div className='flex justify-center items-start mt-4 mb-14 w-full lg:w-2/3 xl:w-1/2 mx-auto'>
      <Link to="/admin/athletesManagment/newAthlete">
        <button className="bg-red-500 text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
          Add a new athlete
        </button>
      </Link>
    </div>
    <div className="flex flex-wrap justify-center">
      {athletes.length === 0 ? (
        <p className="text-xl font-bold">There are no athletes.</p>
      ) : (
        athletes.map((athlete) => (
          <AthleteManagmentCard key={athlete._id} athlete={athlete} />
        ))
      )}
    </div>
  </>

  );
};

export default AthletePage;
