'use strict';

import * as auth from '../auth/auth.service';
import config from './environment';
import compose from 'composable-middleware';
import * as sqldb from '../sqldb';

/**
 * Checks if the user role meets the minimum requirements of the route
 */
export function isOwner(model) {

  //var model = req.options.model || req.options.controller;
  if (!model) throw new Error('No "model" specified in route options.');

  var Model = sqldb[model];

  var id = 0;

  return function meetsRequirements(req, res, next) {

    Model.findOne({
        where: {
          _id: id
        }
      })
      .then(result => {
        if(!result) return res.notFound("No item found").end();
        if(result.userId !== req.user._id) return res.forbidden();

        next();
      })
      .catch(err => next(err));
  };

};


/**
 * Appends userId to the insert/update query
 */
export function appendUser(req, res, next) {

  // filter admin
  if(config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf('admin')) return next();


  if(!req.body) req.body = {};
  req.body.user_id = req.user._id;
  next();
}


/**
 *  Adds userId to the query
 */
export function filterUser(req, res, next) {

  // filter admin
  if(config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf('admin')) return next();

  if(!req.options) req.options = {};
  if(!req.options.where) req.options.where = {};

  req.options.where.user_id = req.user._id;

  next();

};
