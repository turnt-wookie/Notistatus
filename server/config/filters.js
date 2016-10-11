'use strict';

import config from '../config/environment';

export function filterUserUnlessAdmin(req, res, next) {

	if(config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf('admin')) {
		req.user.isAdmin = true;
    	return next();
    } 

	if(!req.options) req.options = {};
	if(!req.options.where) req.options.where = {};
	req.options.where.UserId = req.user._id;

	next();

}

export function appendUser(req, res, next) {
	if(!req.body) next();
	req.body.UserId = req.user._id;
	// valid request
	next();
}
