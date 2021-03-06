var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Review = require('./review');

var RestroomSchema = new Schema({
    location: String,
    locationName: String, 
    type: String,
    cleanliness: Number,
    neighborhood: String,
    review: String
});


var Restroom = mongoose.model('Restroom', RestroomSchema);

module.exports = Restroom;