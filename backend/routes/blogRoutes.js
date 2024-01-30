const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// Get all blogs
router.get('/blogs', blogController.getAllBlogs);

// Get a specific blog by ID
router.get('/blogs/:id', blogController.getBlogById);

// Create a new blog
router.post('/blogs', blogController.createBlog);

// Update a blog by ID
router.patch('/blogs/:id', blogController.updateBlog);

// Delete a blog by ID
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;
