'use strict';

describe('Controller: MainmapCtrl', function () {

  // load the controller's module
  beforeEach(module('shophotoApp'));

  var MainmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainmapCtrl = $controller('MainmapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
