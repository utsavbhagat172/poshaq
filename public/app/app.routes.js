angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/topwear/:id', {
			templateUrl: 'app/views/pages/topwear.html'			
		})

	$locationProvider.html5Mode(true);

})