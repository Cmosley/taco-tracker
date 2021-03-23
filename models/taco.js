const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tacoSchema = new Schema({
    name: String,
    tasty: Boolean
}, {
    timestamps:true
})

module.exports = mongoose.model('Taco', tacoSchema);