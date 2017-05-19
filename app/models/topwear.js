var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var TopwearSchema = new Schema({

	name: 		{ type: String , index : { unique: true } },
	brand: 		{ type: String },
	price: 		{ type: String },
	color: 		{ type: String },
	category: 	{ type: String },
	sex: 		{ type: String },
	imgURL: 	{ type: String }

});

module.exports = mongoose.model('Topwear', TopwearSchema);