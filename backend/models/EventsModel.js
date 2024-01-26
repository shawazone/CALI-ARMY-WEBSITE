const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
    eventLocation: {
        type: String,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
    eventImages: [{
        type: String,
        // required: true,
    }],
},{timestamps: true});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;