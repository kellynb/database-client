const mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
    abv: Number,
    ibu: Number
  });

const Stout = mongoose.model('Stout', BeerSchema);
module.exports = Stout;