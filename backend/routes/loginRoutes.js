// routes/login.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const router = express.Router();
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Password is valid, authentication successful
    // Generate JWT
    const token = jwt.sign({ userId: user._id,username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token to client
    res.status(200).json({ message: 'Login successfull', token ,username, userId: user._id});
    

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;