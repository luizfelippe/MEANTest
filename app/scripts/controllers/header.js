'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HeaderCtrl', function (
  	$scope,
    $location
	) {
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  });
