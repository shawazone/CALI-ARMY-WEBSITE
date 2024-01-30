// File: UploadForm.js
import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const EventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState(null);
  const [eventFirstImage, setEventFirstImage] = useState(null);
  // const [eventSecondImage, setEventSecondImage] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const [firstImageUrl, setFirstImageUrl] = useState(null);



  const navigate = useNavigate();

  const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dvgnpeias/upload";
  const cloudinaryPreset = "CaliArmy";
  // const [secondImageUrl, setSecondImageUrl] = useState(null);

  const handleImageChange = (event, setImage, setImageUrl) => {
    const file = event.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    // Upload images to Cloudinary
    try {
      // Upload first image
      const firstImageUrl = await uploadImage(eventFirstImage);

      // Upload second image
      // const secondImageUrl = await uploadImage(secondImage);

      // Now, send the event data along with the Cloudinary URLs to your server
      const eventData = {
        eventName,
        eventDate,
        eventTime,
        eventLocation,
        eventDescription,
        eventImages: [firstImageUrl],
      
      };

      const postResponse = await fetch("http://localhost:4000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
      const json = await postResponse.json();

      if (postResponse.ok) {
        console.log("event was added successfully!");
        toast.success('event was added successfully!');
        navigate('/admin/eventsManegement');

        
        
      } else {
        setEmptyFields(json.emptyFields);
        console.log("the empty field are", json.emptyFields);
        console.log("the empty field aree", emptyFields);
        toast.error('Error adding event!');
      }
    } catch (error) {
      console.error("Error uploading images:", error.message);
      toast.warning('Error uploading images!');
    }
  };

  const uploadImage = async (image) => {
    if (!image) return null;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", cloudinaryPreset);

    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const cloudinaryData = await response.json();
      return cloudinaryData.secure_url;

    } else {
      throw new Error("Image upload failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white p-4">
    <h1 className="text-3xl mb-6">Event Upload Form</h1>
  
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="eventName" className="block text-sm font-medium text-white mb-2">
        Event Name:
      </label>
      <input
        type="text"
        id="eventName"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {emptyFields.includes("eventName") && (
        <p className="text-red-500 text-sm mt-1">Event Name is required.</p>
      )}
    </div>
  
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="eventDate" className="block text-sm font-medium text-white mb-2">
        Event Date:
      </label>
      <input
        type="text"
        id="eventDate"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {emptyFields.includes("eventDate") && (
        <p className="text-red-500 text-sm mt-1">Event Date is required.</p>
      )}
    </div>
  
    {/* Repeat similar code for other fields (eventTime, eventLocation, eventDescription, eventFirstImage) */}
  


     {/* ... (previous code) */}

<div className="mb-4 w-full max-w-md">
  <label htmlFor="eventTime" className="block text-sm font-medium text-white mb-2">
    Event Time:
  </label>
  <input
    type="text"
    id="eventTime"
    value={eventTime}
    onChange={(e) => setEventTime(e.target.value)}
    className="bg-red-500 text-white p-3 rounded w-full"
  />
  {emptyFields.includes("eventTime") && (
    <p className="text-red-500 text-sm mt-1">Event Time is required.</p>
  )}
</div>

<div className="mb-4 w-full max-w-md">
  <label htmlFor="eventLocation" className="block text-sm font-medium text-white mb-2">
    Event Location:
  </label>
  <input
    type="text"
    id="eventLocation"
    value={eventLocation}
    onChange={(e) => setEventLocation(e.target.value)}
    className="bg-red-500 text-white p-3 rounded w-full"
  />
  {emptyFields.includes("eventLocation") && (
    <p className="text-red-500 text-sm mt-1">Event Location is required.</p>
  )}
</div>

<div className="mb-4 w-full max-w-md">
  <label htmlFor="eventDescription" className="block text-sm font-medium text-white mb-2">
    Event Description:
  </label>
  <textarea
    id="eventDescription"
    value={eventDescription}
    onChange={(e) => setEventDescription(e.target.value)}
    rows="3"
    className="bg-red-500 text-white p-3 rounded w-full"
  ></textarea>
  {emptyFields.includes("eventDescription") && (
    <p className="text-red-500 text-sm mt-1">Event Description is required.</p>
  )}
</div>

<div className="mb-4 w-full max-w-md">
  <label htmlFor="eventFirstImage" className="block text-sm font-medium text-white mb-2">
    Event First Image:
  </label>
  <input
    type="file"
    id="eventFirstImage"
    accept="image/*"
    onChange={(e) => handleImageChange(e, setEventFirstImage,setFirstImageUrl)}
    className="bg-red-500 text-white p-3 rounded w-full"
  />
  {eventFirstImage && (
    <img
      src={URL.createObjectURL(eventFirstImage)}
      alt="Event First Image"
      className="mt-4 w-full h-full object-cover"
    />
  )}
</div>

 {/* ... (remaining code) */}





    {/* <div className="mb-4 w-full max-w-md">
      <label htmlFor="eventFirstImage" className="block text-sm font-medium text-white mb-2">
        Event First Image:
      </label>
      <input
        type="file"
        id="eventFirstImage"
        accept="image/*"
        onChange={handleImageChange}
        className="bg-red-500 text-white p-3 rounded w-full"
      />
      {eventFirstImage && (
        <img
          src={URL.createObjectURL(eventFirstImage)}
          alt="Event First Image"
          className="mt-4 w-full h-full object-cover"
        />
      )}
    </div> */}
  
    <button onClick={handleUpload} className="bg-red-500 text-white p-3 rounded">
      Add Event
    </button>
  </div>
  

  );
};

export default EventForm;
