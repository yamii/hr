'use strict';

/**
 * @ngdoc filter
 * @name ifritApp.filter:momentfilter
 * @function
 * @description
 * # momentfilter
 * Filter in the ifritApp.
 */
angular.module('ifritApp')
  .filter('moment', function ( $moment ) {
    return function( dateString, format ) {
        return $moment( dateString ).format( format );
    };
  });
