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


    images: [{
      type: String,
      required: true,
    }],
  },{timestamps: true});//timestamps will automatically create a createdAt and updatedAt field for us

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;