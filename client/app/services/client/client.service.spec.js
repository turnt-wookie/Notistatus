'use strict';

describe('Service: client', function() {
  // load the service's module
  beforeEach(module('notistatusApp'));

  // instantiate service
  var client;
  beforeEach(inject(function(_client_) {
    client = _client_;
  }));

  it('should do something', function() {
    !!client.should.be.true;
  });
});
