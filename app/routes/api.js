var Outfit = require('../models/outfit');
var Topwear = require('../models/topwear');
var Bottomwear = require('../models/bottomwear');
var Footwear = require('../models/footwear');
var Accessory = require('../models/accessory');

var config = require('../../config');

var secretKey = config.secretKey;



module.exports = function(app, express, io) {


	var api = express.Router();

//============================================= 	ADDING TO DATABSE ==================================================
	api.post('/topwear_add', function(req, res) {

		var topwear = new Topwear({
			name:  			req.body.name,
			brand: 			req.body.brand,
			price: 			req.body.price,
			color: 			req.body.color,
			category: 		req.body.category,
			sex: 			req.body.sex,
			imgURL: 		req.body.imgURL
		});
		topwear.save(function(err) {
			if(err) {
				res.send(err);
				return;
			}
			res.json({ 
				success: true,
				message: 'Successfully added topwear'
			});
		});
	});

	api.post('/bottomwear_add', function(req, res) {

		var bottomwear = new Bottomwear({
			name:  			req.body.name,
			brand: 			req.body.brand,
			price: 			req.body.price,
			color: 			req.body.color,
			category: 		req.body.category,
			sex: 			req.body.sex,
			imgURL: 		req.body.imgURL
		});
		bottomwear.save(function(err) {
			if(err) {
				res.send(err);
				return;
			}
			res.json({ 
				success: true,
				message: 'Successfully added bottomwear'
			});
		});
	});

	api.post('/footwear_add', function(req, res) {

		var footwear = new Footwear({
			name:  			req.body.name,
			brand: 			req.body.brand,
			price: 			req.body.price,
			color: 			req.body.color,
			category: 		req.body.category,
			sex: 			req.body.sex,
			imgURL: 		req.body.imgURL
		});
		footwear.save(function(err) {
			if(err) {
				res.send(err);
				return;
			}
			res.json({ 
				success: true,
				message: 'Successfully added footwear'
			});
		});
	});

	api.post('/accessory_add', function(req, res) {

		var accessory = new Accessory({
			name:  			req.body.name,
			brand: 			req.body.brand,
			price: 			req.body.price,
			color: 			req.body.color,
			category: 		req.body.category,
			sex: 			req.body.sex,
			imgURL: 		req.body.imgURL
		});
		accessory.save(function(err) {
			if(err) {
				res.send(err);
				return;
			}
			res.json({ 
				success: true,
				message: 'Successfully added accessory'
			});
		});
	});


	api.post('/outfit_add', function(req, res) {

		var outfit = new Outfit({
			topwear:  			req.body.topwear,
			bottomwear: 		req.body.bottomwear,
			footwear: 			req.body.footwear,
			accessory: 			req.body.accessory
		});
		outfit.save(function(err) {
			if(err) {
				res.send(err);
				return;
			}
			res.json({ 
				success: true,
				message: 'Successfully added outfit'
			});
		});
	});

//=================================================================================================================

//==================================== 		GET FROM DATABASE =====================================================
	api.get('/topwear_get', function(req, res) {
		Topwear.find({}, function(err, results){
			if(err){
				res.send(err);
				return;
			}
			else{
				res.json(results);
			}
		})
	});

	api.get('/topwear_getbyname', function(req, res) {
		Topwear.findOne({"name":req.query.name}, function(err, result){
			if(err){
				res.send(err);
				return;
			}
			else{
				res.json(result);
			}
		})
	});

	api.get('/outfit_getbytopwear', function(req, res) {
		Outfit.find({"topwear":req.query.topwear}).populate('topwear bottomwear footwear accessory').exec(function(err, results){
			if(err){
				res.send(err);
				return;
			}
			else{
				res.json(results);
			}
		})
	});

//==================================================================================================================

	return api;

}