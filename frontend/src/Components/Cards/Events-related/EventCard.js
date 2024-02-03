import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="border p-4 m-6  w-auto  h-auto  hover:scale-105 flex flex-col">
       {event.eventImages && event.eventImages.length > 0 && (
        <img src={event.eventImages[0]} alt={`${event.eventName}`} className="mt-4 w-auto h-auto object-contain" />
      )}
      {/* <div className='flex flex-col m-auto'> */}
      <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
      <p><span className="font-bold">Date:</span> {new Date(event.eventDate).toLocaleString()}</p>
      <p><span className="font-bold">Time:</span> {event.eventTime}</p>
      <p><span className="font-bold">Location:</span> {event.eventLocation}</p>
      <p><span className="font-bold">Description:</span> {event.eventDescription}</p>
     
      <Link to={`/events/${event._id}`} className="text-blue-500 block mt-2">View Details</Link>
      {/* </div> */}
    </div>
  );
};

export default EventCard;
