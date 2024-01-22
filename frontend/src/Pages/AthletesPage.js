// AthletePage.js

import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import AthleteCard from '../Components/AthleteCard';

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
    <div className="flex flex-wrap justify-around">
    {athletes.length === 0 ? (
      <p className="text-xl font-bold">There are no athletes.</p>
    ) : (
      athletes.map((athlete) => (
        <AthleteCard key={athlete._id} athlete={athlete} />
      ))
    )}
  </div>
  );
};

export default AthletePage;
