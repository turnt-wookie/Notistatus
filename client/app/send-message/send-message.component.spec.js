'use strict';

describe('Component: SendMessageComponent', function() {
  // load the controller's module
  beforeEach(module('notistatusApp.send-message'));

  var SendMessageComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SendMessageComponent = $componentController('send-message', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
