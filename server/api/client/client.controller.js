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
import {Client} from '../../sqldb';

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
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
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

  var options = extend({ where: { _id: req.params.id } }, req.options);

  return Client.find(options)
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
