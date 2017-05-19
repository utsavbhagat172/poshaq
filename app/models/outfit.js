var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var OutfitSchema = new Schema({

    topwear: 		{ type: Schema.Types.ObjectId, ref:'Topwear' },
    bottomwear: 	{ type: Schema.Types.ObjectId, ref:'Bottomwear' },
    footwear: 		{ type: Schema.Types.ObjectId, ref:'Footwear' },
    accessory: 		{ type: Schema.Types.ObjectId, ref:'Accessory' },
	created: 		{ type: Date, default: Date.now}

});

module.exports = mongoose.model('Outfit', OutfitSchema);