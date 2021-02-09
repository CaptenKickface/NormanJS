const mongoose = require('mongoose');

const Schema = mongoose.Schema

const demogSchema = new Schema({
    demographic: {
        type: String,
        required: true,
        unique: true,        
    }
}, {
    timestamps: true,
});

const Demog = mongoose.model('Demog', demogSchema)

module.exports = Demog;