'use strict';

/**
 * @ngdoc service
 * @name ifritApp.punches
 * @description
 * # punches
 * Factory in the ifritApp.
 */
angular.module('ifritApp')
  .factory('punches', function ( $moment ) {
    // Public API here
    var now = new Date();
    return [ {
      'date' : {
        'month' : $moment( now ).format( 'MMM' ),
        'year'  : $moment( now ).format( 'YY' ),
        'day'   : $moment( now ).format( 'DD' ),
      },
      'punchin'  : now,
      'lunchout' : new Date( now.getTime() + ( 80 * 60 * 1000 ) ),
      'lunchin'  : new Date( now.getTime() + ( 150 * 60 * 1000 ) ),
      'punchout' : new Date( now.getTime() + ( 200 * 60 * 1000 ) ),
      'total'    : 0,
      'overtime' : 0
    }, {
      'date' : {
        'month' : $moment( now ).format( 'MMM' ),
        'year'  : $moment( now ).format( 'YY' ),
        'day'   : $moment( now ).format( 'DD' ),
      },
      'punchin'  : new Date( now.getTime() + ( 18 * 60 * 1000 ) ),
      'lunchout' : new Date( now.getTime() + ( 75 * 60 * 1000 ) ),
      'lunchin'  : new Date( now.getTime() + ( 158 * 60 * 1000 ) ),
      'punchout' : new Date( now.getTime() + ( 300 * 60 * 1000 ) ),
      'total'    : 0,
      'overtime' : 0
    }, {
      'date' : {
        'month' : $moment( now ).format( 'MMM' ),
        'year'  : $moment( now ).format( 'YY' ),
        'day'   : $moment( now ).format( 'DD' ),
      },
      'punchin'  : new Date( now.getTime() + ( 35 * 60 * 1000 ) ),
      'lunchout' : new Date( now.getTime() + ( 86 * 60 * 1000 ) ),
      'lunchin'  : new Date( now.getTime() + ( 150 * 60 * 1000 ) ),
      'punchout' : new Date( now.getTime() + ( 123 * 60 * 1000 ) ),
      'total'    : 0,
      'overtime' : 0
    }, {
      'date' : {
        'month' : $moment( now ).format( 'MMM' ),
        'year'  : $moment( now ).format( 'YY' ),
        'day'   : $moment( now ).format( 'DD' ),
      },
      'punchin'  : now,
      'lunchout' : 0,
      'lunchin'  : 0,
      'punchout' : 0,
      'total'    : 0,
      'overtime' : 0
    }, {
      'date' : {
        'month' : $moment( now ).format( 'MMM' ),
        'year'  : $moment( now ).format( 'YY' ),
        'day'   : $moment( now ).format( 'DD' ),
      },
      'punchin'  : now,
      'lunchout' : 0,
      'lunchin'  : 0,
      'punchout' : 0,
      'total'    : 0,
      'overtime' : 0
    } ];
  });
