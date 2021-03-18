const mongoose = require('mongoose');

const Schema = mongoose.Schema

const dataSchema = new Schema({
    
        demographic: { type: String, required: true },
        timeOne: {type: Number, required: true},
        wrongOne: {type: Array, required: true},
        timeTwo: {type: Number, required: true},
        wrongTwo: {type: Array, required: true},
        timeThree: {type: Number, required: true}, 
        wrongThree: {type: Array, required: true}, 
        complete: {type: Boolean, required: true},
    
}, {
    timestamps: true,
});

const DataClass = mongoose.model('Data', dataSchema)

module.exports = DataClass;