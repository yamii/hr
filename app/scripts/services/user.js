'use strict';

/**
 * @ngdoc service
 * @name ifritApp.User
 * @description
 * # User
 * Factory in the ifritApp.
 */
angular.module('ifritApp')
  .factory('User', function ($resource) {
    return $resource('https://api.mongolab.com/api/1/databases/resto/collections/item/:id',
    {
    	apiKey : "nsAN6PXLfvsWgqrIFcziVcKBl1Pm4BDP"
    } );
  });
