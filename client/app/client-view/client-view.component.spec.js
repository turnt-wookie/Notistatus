'use strict';

describe('Component: ClientViewComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.client-view'));

  var ClientViewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientViewComponent = $componentController('client-view', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
