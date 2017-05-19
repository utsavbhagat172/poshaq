var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var FootwearSchema = new Schema({

	name: 		{ type: String },
	brand: 		{ type: String },
	price: 		{ type: String },
	color: 		{ type: String },
	category: 	{ type: String },
	sex: 		{ type: String },
	imgURL: 	{ type: String }

});

module.exports = mongoose.model('Footwear', FootwearSchema);