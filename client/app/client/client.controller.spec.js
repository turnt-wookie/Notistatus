'use strict';

describe('Controller: ClientCtrl', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.client'));

  var ClientCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    ClientCtrl = $controller('ClientCtrl', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
