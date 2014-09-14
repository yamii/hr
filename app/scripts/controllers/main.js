'use strict';

/**
 * @ngdoc function
 * @name ifritApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ifritApp
 */
angular.module('ifritApp')
  .controller('MainCtrl', function ($scope, User) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	var user = User.get({ id: '540251b9e4b0807389860a8f' }, function() {
		console.log(user);
	});
  });
