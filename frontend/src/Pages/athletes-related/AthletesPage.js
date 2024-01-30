// AthletePage.js

import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import AthleteCard from '../../Components/Cards/Athletes-related/AthleteCard';
// import { Link } from 'react-router-dom';

const AthletePage = () => {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    const fetchAthletes = async () => {
      const response = await fetch('http://localhost:4000/api/athletes/')
      const json = await response.json()
     
      if (response.ok) {
      
        setAthletes(json)
        // dispatch({type:'SET_WORKOUTS', payload:json})
      } }

    fetchAthletes()
  },[])


  return (
    <div className="flex flex-wrap justify-center ">
    {athletes.length === 0 ? (
      <p className="text-xl font-bold">There are no athletes.</p>
    ) : (
      athletes.map((athlete) => (
        // <Link to={`/athletes/${athlete._id}`} key={athlete._id} state={{ athlete }}>
          <AthleteCard  c key={athlete._id}  athlete={athlete} />
        // </Link>
      ))
    )}
    
  </div>
  );
}




export default AthletePage;
