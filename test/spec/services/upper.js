'use strict';

describe('Service: Upper', function () {

  // load the service's module
  beforeEach(module('ifritApp'));

  // instantiate service
  var Upper;
  beforeEach(inject(function (_Upper_) {
    Upper = _Upper_;
  }));

  it('should do something', function () {
    expect(!!Upper).toBe(true);
  });

});
