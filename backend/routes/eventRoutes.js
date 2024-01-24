const exress = require('express');
const eventController = require('../controllers/eventController');
const router = exress.Router();

// Get all events
router.get('/events', eventController.getAllEvents);

// Get a specific event by ID
router.get('/events/:id', eventController.getEventById);

// Create a new event
router.post('/events', eventController.createEvent);

// Update an event by ID
router.patch('/events/:id', eventController.updateEventById);

// Delete an event by ID
router.delete('/events/:id', eventController.deleteEventById);

module.exports = router;

