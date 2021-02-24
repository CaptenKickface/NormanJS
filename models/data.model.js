const mongoose = require('mongoose');

const Schema = mongoose.Schema

const dataSchema = new Schema({
    data: {
        type: String,
        required: true,
        unique: true,        
    }
}, {
    timestamps: true,
});

const Data = mongoose.model('Data', dataSchema)

module.exports = Data;