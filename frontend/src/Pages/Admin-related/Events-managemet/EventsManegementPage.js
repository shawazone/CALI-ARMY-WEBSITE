import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventMangementCard from '../../../Components/Cards/Events-related/EventMangementCard';
import { Link } from 'react-router-dom';
import { useEventsContext } from '../../../hooks/useEventsContext'

export default function EventsManegementPage() {
  
    // const [events, setEvents] = useState([]);
    const {events, dispatch}= useEventsContext()

  useEffect(() => {
    // Fetch products from the API
    axios.get('http://localhost:4000/api/events/')
      .then(response => {
        // setEvents(response.data);
        dispatch({type:'SET_EVENT', payload:response.data})
      })
      .catch(error => {
        console.error('Error fetching event:', error);
      });
  }, []);

  return (
    // <div className="flex flex-wrap justify-center">
    <>
          <div className='flex justify-center items-start mt-4 mb-14 w-full lg:w-2/3 xl:w-1/2 mx-auto'>
      <Link to="/admin/eventsManegement/newEvent">
        <button className="bg-red-500 text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
          Add a new event
        </button>
      </Link>
    </div>
      {/* {events.length === 0 ? (
        <p className="text-xl font-bold">There are no event.</p>
      ) : (
        events.map(event => (
          <EventMangementCard key={event._id} event={event} />
         
        ))
      )} */}
      <div className='flex flex-wrap justify-center'>
      {events && Array.isArray(events) && events.length > 0 ? (
          events.map((event) => (
            <EventMangementCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events available</p>
        )}
        </div>
        </>
    // </div>
  );
  
}
