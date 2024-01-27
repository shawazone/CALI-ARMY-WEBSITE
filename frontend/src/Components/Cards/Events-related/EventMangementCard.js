import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const EventMangementCard = ({ event }) => {

    const deleteEvent= async (id) => {   
        const response = await fetch(`http://localhost:4000/api/events/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
         
        })
        const json = await response.json()
        if (response.ok) {
            // dispatch({ type: 'DELETE_ATHLETE', payload: json });

            console.log('Event deleted successfully!');
            toast.warning('event  deleted successfully!');
            }
        }


  return (
    <div className="border p-4 m-4 max-w-80 h-auto transition-transform transform-gpu hover:scale-105">
          <div className="flex justify-between items-center mb-2">
        {/* <h2 className="text-xl font-bold">{Event.name}</h2> */}
        <div className="flex space-x-2">
        <Link to={`/admin/eventsManegement/${event._id}`}>
        
          <button className="bg-blue-500 text-white p-2 rounded">
           Update
          </button>
            </Link>
          <button onClick={() => deleteEvent(event._id)} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </div>
      </div>
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

export default EventMangementCard;
