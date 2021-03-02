const mongoose = require('mongoose');

const Schema = mongoose.Schema

const dataSchema = new Schema({
    
        demographic: { type: String, required: true },
        timeOne: {type: Number, required: true},
        clickOne: {type: Array, required: true},
        timeTwo: {type: Number, required: true},
        clickTwo: {type: Array, required: true},
        timeThree: {type: Number, required: true}, 
        clickThree: {type: Array, required: true}, 
        complete: {type: Boolean, required: true},
    
}, {
    timestamps: true,
});

const Data = mongoose.model('Data', dataSchema)

module.exports = Data;