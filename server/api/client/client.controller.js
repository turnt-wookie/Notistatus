/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/clients              ->  index
 * POST    /api/clients              ->  create
 * GET     /api/clients/:id          ->  show
 * PUT     /api/clients/:id          ->  upsert
 * PATCH   /api/clients/:id          ->  patch
 * DELETE  /api/clients/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import twilio from 'twilio';
import {Client} from '../../sqldb';
import {Status} from '../../sqldb';

function message(client, status){

  var accountSid, authToken, accountNumber;

  var twilio_client = new twilio.RestClient(accountSid, authToken);

  var clientp = Client.findOne({where: {_id : client}});
  var statusp = Status.findOne({where: {_id : status}});

  Promise.all([clientp, statusp]).then((result) =>{

    twilio_client.messages.create({
      body: result[1].info,
      to: result[0].phone,  // Text this number
      from: accountNumber // From a valid Twilio number
    }, function(err, message) {
      res.status(200).json(message)
    });
  });




  
}

function extend(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    return target;
}


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {

  return function(entity) {
    return entity.updateAttributes(patches)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    console.error(err)
    console.error(err.stack)
    res.status(statusCode).send(err);
  };
}

// Gets a list of Clients
export function index(req, res) {
  return Client.findAll(req.options)
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Client from the DB
export function show(req, res) {
  var options = extend({ where: { _id: req.params.id } }, req.options);

  return Client.find(options)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Client in the DB
export function create(req, res) {
  return Client.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Client in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }

  var options = extend({ where: { _id: req.params.id } }, req.options);

  return Client.upsert(req.body, options)
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Client in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }

  return Client.find({ where: { _id: req.params.id } })
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Client from the DB
export function destroy(req, res) {
  var options = extend({ where: { _id: req.params.id } }, req.options);
  
  return Client.find(options)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
