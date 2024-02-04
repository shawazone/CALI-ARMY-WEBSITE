import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../../Components/Cards/Events-related/EventCard';


export default function EventsPage() {
  
    const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('http://localhost:4000/api/events/')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching event:', error);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {events.length === 0 ? (
        <p className="text-xl font-bold">fetching events.</p>
      ) : (
        events.map(event => (
          <EventCard key={event._id} event={event} />
         
        ))
      )}
    </div>
  );
  
}
