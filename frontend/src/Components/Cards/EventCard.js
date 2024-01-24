import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="border p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105">
      <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
      <p><span className="font-bold">Date:</span> {new Date(event.eventDate).toLocaleString()}</p>
      <p><span className="font-bold">Time:</span> {event.eventTime}</p>
      <p><span className="font-bold">Location:</span> {event.eventLocation}</p>
      <p><span className="font-bold">Description:</span> {event.eventDescription}</p>
      {event.eventImages && event.eventImages.length > 0 && (
        <img src={event.eventImages[0]} alt={`${event.eventName}`} className="mt-4 w-60 h-80 object-cover" />
      )}
      <Link to={`/events/${event._id}`} className="text-blue-500 block mt-2">View Details</Link>
    </div>
  );
};

export default EventCard;
