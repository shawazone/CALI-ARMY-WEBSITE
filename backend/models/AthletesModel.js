const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    insta: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Assuming you store the image URL as a string
      required: true,
    },
  });

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;