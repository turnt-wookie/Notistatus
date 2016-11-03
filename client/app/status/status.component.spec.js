'use strict';

describe('Component: StatusComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.status'));

  var StatusComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    StatusComponent = $componentController('status', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
