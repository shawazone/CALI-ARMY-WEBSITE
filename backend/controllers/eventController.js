const Event = require('../models/EventsModel');
const mongoose = require('mongoose');

// 👇 this controller is ordered by 👇
// 1. Get all events
// 2. Get a specific event by ID
// 3. Create a new event
// 4. Update an event by ID
// 5. Delete an event by ID


// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({createdAt: 1}); //sorts by most recent
    res.status(200).json(events);
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific event by ID

const getEventById = async (req, res) => {
      const {id} = req.params
  try {

      if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({error: 'Invalid ID'})
    }

    const event = await Event.findById(id);
    if (!event) {
      return res.status(400).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new event
// Added validation for empty fields
const createEvent = async (req, res) => {
  // const event = new Event(req.body);
  const {eventName, eventDate, eventTime, eventLocation, eventDescription, eventImages} = req.body

  let emptyFields = []
  
  if (!eventName) {
      emptyFields.push('eventName')
  
  }
  if (!eventDate) {
      emptyFields.push('eventDate')
  
  }
  if (!eventTime) {
      emptyFields.push('eventTime')
  
  }
  if (!eventLocation) {
      emptyFields.push('eventLocation')
  
  }
  if (!eventDescription) {
      emptyFields.push('eventDescription')
  
  }
  if (!eventImages || eventImages.length === 0)  {
      emptyFields.push('eventImages')
  
  }
  if (emptyFields.length > 0) {
      return res.status(400).json({error: 'The following fields are missing:' ,emptyFields})
  }

  try {
    const event = await Event.create({eventName, eventDate, eventTime, eventLocation, eventDescription, eventImages});
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an event by ID
// Added validation for empty fields
const updateEventById = async (req, res) => {
  const {id} = req.params
  const {eventName, eventDate, eventTime, eventLocation, eventDescription, eventImages} = req.body

  let emptyFields = []
  
  if (!eventName) {
      emptyFields.push('eventName')
  
  }
  if (!eventDate) {
      emptyFields.push('eventDate')
  
  }
  if (!eventTime) {
      emptyFields.push('eventTime')
  
  }
  if (!eventLocation) {
      emptyFields.push('eventLocation')
  
  }
  if (!eventDescription) {
      emptyFields.push('eventDescription')
  
  }
  if (!eventImages || eventImages.length === 0)  {
    emptyFields.push('eventImages')

}
  if (emptyFields.length > 0) {
      return res.status(400).json({error: `The following fields are missing: ${emptyFields.join(', ')}`})
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({error: 'Invalid ID'})
    }
    const event = await Event.findByIdAndUpdate(id, {eventName, eventDate, eventTime, eventLocation, eventDescription, eventImages}, {new: true});
    if (!event) {
      return res.status(400).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete an event by ID
const deleteEventById = async (req, res) => {
  const {id} = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({error: 'Invalid ID'})
    }
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(400).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById
};
