import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AthleteCard from '../Components/AthleteCard';
const HomePage = () => {

    const [athletes, setAthletes] = useState([]);

    useEffect(() => {
      const fetchAthletes = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/athletes/');
          if (response.ok) {
            const json = await response.json();
            const firstThreeAthletes = json.slice(0, 3);
            setAthletes(firstThreeAthletes);
          }
        } catch (error) {
          console.error('Error fetching athletes:', error);
        }
      };
  
      fetchAthletes();
    }, []);

  return (
    <>
    <div className="relative">
    <img
      src="homePics/group-pic.jpeg"  // Replace with your actual image source
      alt="Description of the image"
      className="w-full h-1/5 object-cover"
    />
  
    {/* <div className="absolute bottom-2/4 right-2/4  text-white text-shadow-black p-4 bg-black ">
      <h2 className="text-2xl font-bold mb-2">Get to know us in person</h2>
    </div> */}
 <div className="absolute top-3/4 right-3/4 text-white text-shadow-black ">
  <button className="bg-red-500 hover:bg-white text-white  hover:text-red-500 px-5 lg-5  rounded sm:px-5 sm:py-3 md:px-15 md:py-4 lg:px-20 lg:py-5">
    Enroll
  </button>
</div>
  </div>
<img
  src="homePics/baki-planche.jpg"  // Replace with your actual image source
  alt="Description of the image"
  className="w-full h-1/5 my-3"
  
/>
<div>
    <h1 className="text-2xl font-bold mb-2 text-center">Our Mission</h1>
    <p className="text-center">We are a team of professional athletes who are passionate about teaching and sharing our knowledge with others. We are dedicated to helping you reach your goals and achieve your dreams.</p>
<div className="flex flex-wrap justify-center">

  {athletes.length === 0 ? (
    <p className="text-xl font-bold">There are no athletes.</p>
  ) : (
    athletes.map((athlete) => (
      <Link to={`/athletes/${athlete._id}`} key={athlete._id} state={{ athlete }}>
        <AthleteCard athlete={athlete} />
      </Link>
    ))
  )}
</div>
</div>


   </>
  )
}

export default HomePage
