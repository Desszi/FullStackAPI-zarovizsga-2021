const mongoose = require('mongoose');

const RaceSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    teams: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        default: true
    },
    city: {
        type: String,
        default: true
    },
    country: {
        type: String,
        default: 'Hungary'
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('race', RaceSchema);
