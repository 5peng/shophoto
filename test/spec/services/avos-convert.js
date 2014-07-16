'use strict';

describe('Service: avosConvert', function () {

  // load the service's module
  beforeEach(module('shophotoApp'));

  // instantiate service
  var avosConvert;
  beforeEach(inject(function (_avosConvert_) {
    avosConvert = _avosConvert_;
  }));

  it('should do something', function () {
    expect(!!avosConvert).toBe(true);
  });

});
