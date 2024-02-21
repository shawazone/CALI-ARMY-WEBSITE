// routes/protectedRoute.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

router.get('/protected', verifyToken, (req, res) => {
  // Access the decoded user information attached to the request object
  console.log('User:', req.user);

  // Your protected route logic here
  res.json({ message: 'Protected route accessed successfully' });
});

module.exports = router;
