'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieViewCtrl', function (
  	$scope,
  	$routeParams, // the URL params
  	Movie
	) {
    
  	$scope.viewMovie = true;
  	$scope.movie = Movie.one($routeParams.id).get().$object;

  });
