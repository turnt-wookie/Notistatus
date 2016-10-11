'use strict';

var app = require('../..');
import request from 'supertest';

var newClient;

describe('Client API:', function() {
  describe('GET /api/clients', function() {
    var clients;

    beforeEach(function(done) {
      request(app)
        .get('/api/clients')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          clients = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      clients.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/clients', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/clients')
        .send({
          name: 'New Client',
          info: 'This is the brand new client!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newClient = res.body;
          done();
        });
    });

    it('should respond with the newly created client', function() {
      newClient.name.should.equal('New Client');
      newClient.info.should.equal('This is the brand new client!!!');
    });
  });

  describe('GET /api/clients/:id', function() {
    var client;

    beforeEach(function(done) {
      request(app)
        .get(`/api/clients/${newClient._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          client = res.body;
          done();
        });
    });

    afterEach(function() {
      client = {};
    });

    it('should respond with the requested client', function() {
      client.name.should.equal('New Client');
      client.info.should.equal('This is the brand new client!!!');
    });
  });

  describe('PUT /api/clients/:id', function() {
    var updatedClient;

    beforeEach(function(done) {
      request(app)
        .put(`/api/clients/${newClient._id}`)
        .send({
          name: 'Updated Client',
          info: 'This is the updated client!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedClient = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedClient = {};
    });

    it('should respond with the original client', function() {
      updatedClient.name.should.equal('New Client');
      updatedClient.info.should.equal('This is the brand new client!!!');
    });

    it('should respond with the updated client on a subsequent GET', function(done) {
      request(app)
        .get(`/api/clients/${newClient._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let client = res.body;

          client.name.should.equal('Updated Client');
          client.info.should.equal('This is the updated client!!!');

          done();
        });
    });
  });

  describe('PATCH /api/clients/:id', function() {
    var patchedClient;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/clients/${newClient._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Client' },
          { op: 'replace', path: '/info', value: 'This is the patched client!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedClient = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedClient = {};
    });

    it('should respond with the patched client', function() {
      patchedClient.name.should.equal('Patched Client');
      patchedClient.info.should.equal('This is the patched client!!!');
    });
  });

  describe('DELETE /api/clients/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/clients/${newClient._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when client does not exist', function(done) {
      request(app)
        .delete(`/api/clients/${newClient._id}`)
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
