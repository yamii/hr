'use strict';

/**
 * @ngdoc function
 * @name ifritApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ifritApp
 */
angular.module('ifritApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
