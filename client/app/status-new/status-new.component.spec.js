'use strict';

describe('Component: StatusNewComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.status-new'));

  var StatusNewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    StatusNewComponent = $componentController('status-new', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
