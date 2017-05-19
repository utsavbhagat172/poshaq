angular.module('topwearCtrl', [])


.controller('TopwearController', function($rootScope, $location, Outfit, $scope, $routeParams) {

	var vm = this;
	vm.topwearname = $routeParams.id;

	vm.getTopwearByName = function() {
		Outfit.getTopwearByName(vm.topwearname).then(function(data){
			console.log('------',data.data);
			vm.topwear = data.data;
			vm.getOutfitByTopwear();
		})
	}

	vm.getTopwearByName();
	
	vm.getOutfitByTopwear = function() {
		Outfit.getOutfitByTopwear(vm.topwear._id).then(function(data){
			console.log(data.data);
			vm.outfits = data.data;
		})
	}

});