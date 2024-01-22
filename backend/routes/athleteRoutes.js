const express = require('express');
const athleteController = require('../controllers/athleteController');
const router = express.Router();

// Get all athletes
router.get('/athletes', athleteController.getAllAthletes);

// Get a specific athlete by ID
router.get('/athletes/:id', athleteController.getAthleteById);

// Create a new athlete 
router.post('/athletes', athleteController.createAthlete);

// Update an athlete by ID
router.patch('/athletes/:id', athleteController.updateAthleteById);

// Delete an athlete by ID
router.delete('/athletes/:id', athleteController.deleteAthleteById);

module.exports = router;
