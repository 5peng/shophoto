'use strict';

describe('Service: userLogin', function () {

  // load the service's module
  beforeEach(module('shophotoApp'));

  // instantiate service
  var userLogin;
  beforeEach(inject(function (_userLogin_) {
    userLogin = _userLogin_;
  }));

  it('should do something', function () {
    expect(!!userLogin).toBe(true);
  });

});
