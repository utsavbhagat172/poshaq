angular.module('mainCtrl', [])


.controller('MainController', function($rootScope, $location, Outfit, $scope) {

	var vm = this;
	vm.colorfilters = [];
	vm.getTopwears = function() {
		Outfit.getTopwears().then(function(data){
			console.log('------',data.data);
			vm.topwears = data.data;
			angular.forEach(data.data, function(e){
				if (vm.colorfilters.indexOf(e.color) == -1) {
					vm.colorfilters.push(e.color);
				}
			})
		})
	}

	vm.getTopwears();
	
	$scope.showAllColors = true;
	$scope.checkColorChange = function() {
		for(t in vm.color){
			if(vm.color[t].on){
				$scope.showAllColors = false;
				return;
			}
		}
		$scope.showAllColors = true;
	};

	/*vm.getOutfitByTopwear = function() {
		Outfit.getOutfitByTopwear(vm.topwear).then(function(data){
			console.log(data.data);
			vm.outfits = data.data;
		})
	}*/

});