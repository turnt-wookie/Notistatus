'use strict';

var app = require('../..');
import request from 'supertest';

var newStatus;

describe('Status API:', function() {
  describe('GET /api/statuses', function() {
    var statuss;

    beforeEach(function(done) {
      request(app)
        .get('/api/statuses')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          statuss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      statuss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/statuses', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/statuses')
        .send({
          name: 'New Status',
          info: 'This is the brand new status!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newStatus = res.body;
          done();
        });
    });

    it('should respond with the newly created status', function() {
      newStatus.name.should.equal('New Status');
      newStatus.info.should.equal('This is the brand new status!!!');
    });
  });

  describe('GET /api/statuses/:id', function() {
    var status;

    beforeEach(function(done) {
      request(app)
        .get(`/api/statuses/${newStatus._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          status = res.body;
          done();
        });
    });

    afterEach(function() {
      status = {};
    });

    it('should respond with the requested status', function() {
      status.name.should.equal('New Status');
      status.info.should.equal('This is the brand new status!!!');
    });
  });

  describe('PUT /api/statuses/:id', function() {
    var updatedStatus;

    beforeEach(function(done) {
      request(app)
        .put(`/api/statuses/${newStatus._id}`)
        .send({
          name: 'Updated Status',
          info: 'This is the updated status!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedStatus = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedStatus = {};
    });

    it('should respond with the original status', function() {
      updatedStatus.name.should.equal('New Status');
      updatedStatus.info.should.equal('This is the brand new status!!!');
    });

    it('should respond with the updated status on a subsequent GET', function(done) {
      request(app)
        .get(`/api/statuses/${newStatus._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let status = res.body;

          status.name.should.equal('Updated Status');
          status.info.should.equal('This is the updated status!!!');

          done();
        });
    });
  });

  describe('PATCH /api/statuses/:id', function() {
    var patchedStatus;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/statuses/${newStatus._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Status' },
          { op: 'replace', path: '/info', value: 'This is the patched status!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedStatus = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedStatus = {};
    });

    it('should respond with the patched status', function() {
      patchedStatus.name.should.equal('Patched Status');
      patchedStatus.info.should.equal('This is the patched status!!!');
    });
  });

  describe('DELETE /api/statuses/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/statuses/${newStatus._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when status does not exist', function(done) {
      request(app)
        .delete(`/api/statuses/${newStatus._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
