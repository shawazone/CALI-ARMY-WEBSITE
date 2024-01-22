const Athlete = require('../models/AthletesModel');
const mongoose = require('mongoose');

// 👇 this controller is ordered by 👇
// 1. Get all athletes
// 2. Get a specific athlete by ID
// 3. Create a new athlete
// 4. Update an athlete by ID
// 5. Delete an athlete by ID




// Get all athletes
const getAllAthletes = async (req, res) => {
  try {
    const athletes = await Athlete.find({}).sort({createdAt: -1}); //sorts by most recent
    res.status(200).json(athletes);
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get a specific athlete by ID
const getAthleteById = async (req, res) => {
      const {id} = req.params
  try {

      if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({error: 'Invalid ID'})
    }

    const athlete = await Athlete.findById(id);
    if (!athlete) {
      return res.status(400).json({ message: 'Athlete not found' });
    }
    res.status(200).json(athlete);
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Create a new athlete
const createAthlete = async (req, res) => {
  // const athlete = new Athlete(req.body);
  const {name, specialty, description,insta,image} = req.body

  let emtyFields = []
  
  if (!name) {
      emtyFields.push('name')
  
  }
  if (!specialty) {
      emtyFields.push('specialty')
  
  }
  if (!description) {
      emtyFields.push('description')
  
  }
  if (!insta) {
    emtyFields.push('insta')
  
  }
  if (!image) {
    emtyFields.push('image')
  
  }
  if (emtyFields.length > 0) {
     return res.status(400).json({error: 'please fill in the following fields', emtyFields})
  }


  try {
    const athlete = await Athlete.create({name, specialty, description,insta,image})
    res.status(200).json(athlete)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};



// Update an athlete by ID
const updateAthleteById = async (req, res) => {
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'Invalid ID'})
  }
  try {
    const updatedAthlete = await Athlete.findByIdAndUpdate(id, req.body, { new: true });
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
