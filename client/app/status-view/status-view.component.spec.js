'use strict';

describe('Component: StatusViewComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.status-view'));

  var StatusViewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    StatusViewComponent = $componentController('status-view', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
