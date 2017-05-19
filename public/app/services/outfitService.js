angular.module('outfitService', [])


.factory('Outfit', function($http) {

	var outfitFactory = {};

	outfitFactory.getTopwears = function(sex) {
		return $http({
			url: '/api/topwear_get',
			method: 'GET'
		})
	}

	outfitFactory.getTopwearByName = function(name) {
		return $http({
			url: '/api/topwear_getbyname',
			method: 'GET',
			params: {
				'name': name
			}
		})
	}

	outfitFactory.getOutfitByTopwear = function(topwear) {
		return $http({
			url: '/api/outfit_getbytopwear',
			method: 'GET',
			params: {
				'topwear': topwear
			}
		})
	}



	return outfitFactory;

});