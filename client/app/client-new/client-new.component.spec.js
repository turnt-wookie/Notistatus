'use strict';

describe('Component: ClientNewComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.client-new'));

  var ClientNewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClientNewComponent = $componentController('client-new', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
