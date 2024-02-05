import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AthleteCard from '../Components/Cards/Athletes-related/AthleteCard';
const HomePage = () => {

    const [athletes, setAthletes] = useState([]);

    const [events, setEvents] = useState([]);
    const [nearestEvent, setNearestEvent] = useState(null);
    
    useEffect(() => {
      const fetchAthletes = async () => {
        try {
          const response = await fetch(`http://localhost:4000/api/athletes/?page=1&pageSize=3`);
          if (response.ok) {
            const json = await response.json();
            setAthletes(json.athletes);
          }
        } catch (error) {
          console.error('Error fetching athletes:', error);
        }
      };
    
      fetchAthletes();
    
      const fetchEvents = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/events');
          if (response.ok) {
            const json = await response.json();
            setEvents(json);
  
            // Find the nearest event by sorting based on eventDate
            const sortedEvents = json.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));
            setNearestEvent(sortedEvents[0]); // The first event after sorting is the nearest one
          }
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
      fetchEvents();
    }, []);

  return (
    <>
    
    <div className="relative">
    <img
      src="homePics/Bars2.png"  
      alt="Description of the "
      className="w-full h-1/5 object-cover"
    />
  
    {/* <div className="absolute bottom-2/4 right-2/4  text-white text-shadow-black p-4 bg-black ">
      <h2 className="text-2xl font-bold mb-2">Get to know us in person</h2>
    </div> */}
 <div className="absolute top-3/4 right-4 text-white text-shadow-black ">
 <Link to="/aboutus" className="bg-red-500 hover:bg-white text-white  hover:text-red-500 px-3 lg-5  rounded sm:px-2 sm:py-2  sm:text-sm md:text-sm md:px-10 md:py-4 lg:px-20 lg:py-5" > <button >
    More About Us
  </button>
  </Link>
</div>
  </div>
<img
  src="homePics/baki-planche2.png" 
  alt="Description of the "
  className="w-full h-1/5 my-3"
  

/>
<div>
 
    <h1 className="text-2xl font-bold mb-2 text-center">Our Team</h1>
    <p className="text-center text-xl mx-10">We are a team of a athletes who are passionate about sharing our knowledge with others. We are dedicated to helping you reach your goals and achieve your dreams.</p>

<div className="flex flex-wrap justify-center">

  {athletes.length === 0 ? (
    <p className="text-xl font-bold">There are no athletes.</p>
  ) : (
    athletes.map((athlete) => (
        <AthleteCard athlete={athlete} />
    ))
  )}
</div>
<div className='flex justify-center mb-3'>
<button>
<Link to="/athletes" className=" flex justify-center items-center text-white bg-red-500 hover:bg-black hover:text-red-500 px-5 lg-5  rounded sm:px-4 sm:py-4 md:px-10 md:py-4 lg:px-15 lg:py-5">
ALL ATHLETES
</Link>
</button>

</div>
<div className="relative">
    <img
      src={process.env.PUBLIC_URL + '/homePics/SteelHandStand.png'} 
      alt="Description of the "
      className="w-full h-1/5 object-cover"
    />
  
    {/* <div className="absolute bottom-2/4 right-2/4  text-white text-shadow-black p-4 bg-black ">
      <h2 className="text-2xl font-bold mb-2">Get to know us in person</h2>
    </div> */}
 <div className="absolute top-3/4 right-4   text-white text-shadow-black ">
  <button className="bg-red-500 hover:bg-white text-white  hover:text-red-500 px-5 lg-5  rounded sm:px-4 sm:py-2 md:px-15 md:py-4 lg:px-20 lg:py-5">
  <Link to="/blogs">
  Check Blog
  </Link>
  </button>
</div>
  </div>
<div className='flex  flex-col justify-center  items-center mb-3  border-t-2 border-zinc-600'>
      <h1 className="text-4xl font-bold m-4 text-center">Upcoming Events</h1>

      {nearestEvent ? (
        <div className="border p-4 m-4    hover:scale-105 ">
           <h2 className="text-xl text-center font-bold mb-2">{nearestEvent.eventName}</h2>
          <img src={nearestEvent.eventImages && nearestEvent.eventImages.length > 0 ? nearestEvent.eventImages[0] : 'placeholder-image-url'} alt={`${nearestEvent.eventName}`} className="mt-4 w-full  object-contain" />
         
          <Link to={`/events/${nearestEvent._id}`} className="text-blue-500 block mt-2">View Details</Link>
        </div>
      ) : (
        <p className="text-xl font-bold">There are no upcoming events.</p>
      )}
 </div>
 <div className='flex justify-center mb-3'>
<button>
<Link to="/events" className=" flex justify-center items-center text-white bg-red-500 hover:bg-black hover:text-red-500 px-5 lg-5  rounded sm:px-4 sm:py-4 md:px-10 md:py-4 lg:px-15 lg:py-5">
 Check All Events
</Link>
</button>

</div>

</div>



<div className="relative">
    <img
      src={process.env.PUBLIC_URL + '/homePics/Rings2.2.png'} 
      alt="Description of the "
      className="w-full h-1/5 object-cover"
    />
  
    {/* <div className="absolute bottom-2/4 right-2/4  text-white text-shadow-black p-4 bg-black ">
      <h2 className="text-2xl font-bold mb-2">Get to know us in person</h2>
    </div> */}
 <div className="absolute top-3/4 right-1/4 text-white text-shadow-black ">
  <button className="bg-red-500 hover:bg-white text-white  hover:text-red-500 px-5 lg-5  rounded sm:px-2 sm:py-1   md:px-15 md:py-4 lg:px-20 lg:py-5">
  <Link to="/blogs">
  Check Blog
  </Link>
  </button>
</div>
</div>


   </>
  )
}

export default HomePage
