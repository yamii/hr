'use strict';

describe('Service: punches', function () {

  // load the service's module
  beforeEach(module('ifritApp'));

  // instantiate service
  var punches;
  beforeEach(inject(function (_punches_) {
    punches = _punches_;
  }));

  it('should do something', function () {
    expect(!!punches).toBe(true);
  });

});
