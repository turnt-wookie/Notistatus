'use strict';

describe('Component: ClientComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.client'));

  var ClientComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientComponent = $componentController('client', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
