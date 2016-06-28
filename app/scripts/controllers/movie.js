'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieCtrl', function (
    $scope,
    Movie
  ) {
  	$scope.movieWindowActive = true;
    $scope.movies = Movie.getList().$object;
  });
