'use strict';

describe('Filter: momentfilter', function () {

  // load the filter's module
  beforeEach(module('ifritApp'));

  // initialize a new instance of the filter before each test
  var momentfilter;
  beforeEach(inject(function ($filter) {
    momentfilter = $filter('momentfilter');
  }));

  it('should return the input prefixed with "momentfilter filter:"', function () {
    var text = 'angularjs';
    expect(momentfilter(text)).toBe('momentfilter filter: ' + text);
  });

});
