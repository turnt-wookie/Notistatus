'use strict';

describe('Component: ClientEditComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.client-edit'));

  var ClientEditComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientEditComponent = $componentController('client-edit', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
