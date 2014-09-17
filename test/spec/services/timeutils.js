'use strict';

describe('Service: Timeutils', function () {

  // load the service's module
  beforeEach(module('ifritApp'));

  // instantiate service
  var Timeutils;
  beforeEach(inject(function (_Timeutils_) {
    Timeutils = _Timeutils_;
  }));

  it('should do something', function () {
    expect(!!Timeutils).toBe(true);
  });

});
