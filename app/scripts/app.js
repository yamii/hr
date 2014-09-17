'use strict';

/**
 * @ngdoc overview
 * @name ifritApp
 * @description
 * # ifritApp
 *
 * Main module of the application.
 */
angular
  .module('ifritApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-momentjs'
  ])
  .config(function ($routeProvider, $momentProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/yami', {
        templateUrl: 'views/yami.html',
        controller: 'YamiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $momentProvider
      .asyncLoading( false )
      .scriptUrl( 'bower_components/angular-momentjs/angular-momentjs.js' );
  });
