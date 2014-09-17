'use strict';

/**
 * @ngdoc function
 * @name ifritApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ifritApp
 */
angular.module('ifritApp')
  .controller('MainCtrl', function ($scope, punches, $moment ) {
    $scope.punches = punches;
} );
