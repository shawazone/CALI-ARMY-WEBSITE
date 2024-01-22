const Athlete = require('../models/AthletesModel');
const mongoose = require('mongoose');

// Get all athletes
const getAllAthletes = async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.json(athletes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific athlete by ID
const getAthleteById = async (req, res) => {
  try {
    const athlete = await Athlete.findById(req.params.id);
    if (!athlete) {
      return res.status(404).json({ message: 'Athlete not found' });
    }
    res.json(athlete);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Create a new athlete
const createAthlete = async (req, res) => {
  const athlete = new Athlete(req.body);

  try {
    const newAthlete = await athlete.save();
    res.status(201).json(newAthlete);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an athlete by ID
const updateAthleteById = async (req, res) => {
  try {
    const updatedAthlete = await Athlete.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAthlete);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete an athlete by ID
const deleteAthleteById = async (req, res) => {
  const {id} = req.params
   if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({error: 'Invalid ID'})
  }
  const deletedAthlete = await Athlete.findByIdAndDelete(id)
  if (!deletedAthlete) {
      res.status(400).json({error: 'Athlete not found'})
  }
  res.status(200).json(deletedAthlete)
}

module.exports = {
  getAllAthletes,
  getAthleteById,
  createAthlete,
  updateAthleteById,
  deleteAthleteById,
};
