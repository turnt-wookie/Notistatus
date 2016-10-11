'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var statusCtrlStub = {
  index: 'statusCtrl.index',
  show: 'statusCtrl.show',
  create: 'statusCtrl.create',
  upsert: 'statusCtrl.upsert',
  patch: 'statusCtrl.patch',
  destroy: 'statusCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var statusIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './status.controller': statusCtrlStub
});

describe('Status API Router:', function() {
  it('should return an express router instance', function() {
    statusIndex.should.equal(routerStub);
  });

  describe('GET /api/statuses', function() {
    it('should route to status.controller.index', function() {
      routerStub.get
        .withArgs('/', 'statusCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/statuses/:id', function() {
    it('should route to status.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'statusCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/statuses', function() {
    it('should route to status.controller.create', function() {
      routerStub.post
        .withArgs('/', 'statusCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/statuses/:id', function() {
    it('should route to status.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'statusCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/statuses/:id', function() {
    it('should route to status.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'statusCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/statuses/:id', function() {
    it('should route to status.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'statusCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
