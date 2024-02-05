const Athlete = require('../models/AthletesModel');
const mongoose = require('mongoose');

// 👇 this controller is ordered by 👇
// 1. Get all athletes
// 2. Get a specific athlete by ID
// 3. Create a new athlete
// 4. Update an athlete by ID
// 5. Delete an athlete by ID



// Get all athletes with pagination
// 5 elements per page
// 1. Get the page number from the query
// 2. Get the page size from the query
// 3. Calculate the total number of athletes
// 4. Calculate the total number of pages
// 5. Get the athletes from the database
// 6. Send the athletes and the total number of pages to the client
const getAllAthletes = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  try {
    const totalAthletes = await Athlete.countDocuments({});
    const totalPages = Math.ceil(totalAthletes / pageSize);

    const athletes = await Athlete.find({})
      .sort({ createdAt: 1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({ athletes, totalPages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all athletes
// const getAllAthletes = async (req, res) => {
//   try {
//     const athletes = await Athlete.find({}).sort({createdAt: 1}); //sorts by most recent
//     res.status(200).json(athletes);
  
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



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
// Added validation for empty fields
const createAthlete = async (req, res) => {
  // const athlete = new Athlete(req.body);
  const {name, specialty, description,insta,images} = req.body

  let emptyFields = []
  
  if (!name) {
      emptyFields.push('name')
  
  }
  if (!specialty) {
      emptyFields.push('specialty')
  
  }
  if (!description) {
      emptyFields.push('description')
  
  }
  if (!insta) {
    emptyFields.push('insta')
  
  }
  if (!images || images.length === 0) {
    emptyFields.push('images');
  }
  if (emptyFields.length > 0) {
     return res.status(400).json({error: 'please fill in the following fields', emptyFields})
  }


  try {
    const athlete = await Athlete.create({name, specialty, description,insta,images})
    res.status(200).json(athlete)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};



// Update an athlete by ID
// Added validation for empty fields
const updateAthleteById = async (req, res) => {
  const {id} = req.params
  const {name, specialty, description,insta,images} = req.body

  let emptyFields = []
  
  if (!name) {
      emptyFields.push('name')
  
  }
  if (!specialty) {
      emptyFields.push('specialty')
  
  }
  if (!description) {
      emptyFields.push('description')
  
  }
  if (!insta) {
    emptyFields.push('insta')
  
  }
  if (!images || images.length === 0) {
    emptyFields.push('images');
  }
  if (emptyFields.length > 0) {
     return res.status(400).json({error: 'please fill in the following fields', emptyFields})
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'Invalid ID'})
  }
  try {
    const updatedAthlete = await Athlete.findByIdAndUpdate(id, {name, specialty, description,insta,images}, { new: true });
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
