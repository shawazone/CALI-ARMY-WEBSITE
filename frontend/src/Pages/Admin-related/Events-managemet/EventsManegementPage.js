import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventMangementCard from '../../../Components/Cards/Events-related/EventMangementCard';

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
    <div className="flex flex-wrap justify-center">
      {/* {events.length === 0 ? (
        <p className="text-xl font-bold">There are no event.</p>
      ) : (
        events.map(event => (
          <EventMangementCard key={event._id} event={event} />
         
        ))
      )} */}
      {events && Array.isArray(events) && events.length > 0 ? (
          events.map((event) => (
            <EventMangementCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events available</p>
        )}
    </div>
  );
  
}
