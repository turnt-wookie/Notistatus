'use strict';

describe('Component: StatusEditComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.status-edit'));

  var StatusEditComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    StatusEditComponent = $componentController('status-edit', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
