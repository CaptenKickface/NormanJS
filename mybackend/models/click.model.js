const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clickSchema = new Schema({
    time: { type: Number, required: true },
    object: {type: String, required: true},
    correct: {type: Boolean, required: true},
}, {
    timestamps: true,
});

const Click = mongoose.model('Click', clickSchema)

module.exports = Click;