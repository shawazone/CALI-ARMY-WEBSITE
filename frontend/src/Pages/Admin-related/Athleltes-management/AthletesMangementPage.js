// AthletePage.js

import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import { useAthletesContext } from '../../../hooks/useAthletesContext';

import { Link } from 'react-router-dom';
import AthleteManagmentCard from '../../../Components/Cards/Athletes-related/AthleteMangementCard';

const AthletePage = () => {
  // const [athletes, setAthletes] = useState([]);
  const {athletes, dispatch}= useAthletesContext() 

  useEffect(() => {
    const fetchAthletes = async () => {
      const response = await fetch('http://localhost:4000/api/athletes/')
      const json = await response.json()
      
     
      if (response.ok) {
        //  console.log(json)
        //  setAthletes(json)
        dispatch({type:'SET_ATHLETES', payload:json})
      
        // dispatch({type:'SET_WORKOUTS', payload:json})
      }else{
        console.log("error")
      }
     }

    fetchAthletes()
  },[])

  console.log(athletes);
  return (
    <>
    <div className='flex justify-center items-start mt-4 mb-14 w-full lg:w-2/3 xl:w-1/2 mx-auto'>
      <Link to="/admin/athletesManegement/newAthlete">
        <button className="bg-red-500 text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
          Add a new athlete
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
       {athletes && Array.isArray(athletes) && athletes.length > 0 ? (
          athletes.map((athlete) => (
            <AthleteManagmentCard key={athlete.id} athlete={athlete} />
          ))
        ) : (
          <p>No athletes available</p>
        )}
    </div>
  </>

  );
};

export default AthletePage;
