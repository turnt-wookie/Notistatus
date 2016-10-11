'use strict';

describe('Controller: StatusCtrl', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.status'));

  var StatusCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    StatusCtrl = $controller('StatusCtrl', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
