'use strict';
const angular = require('angular');

/*@ngInject*/
export function statusService($resource) {
	return $resource('/api/status/:id/:controller', {}, {
        all: { method: 'GET', isArray: true },
        get: { method: 'GET', isArray: false},
        create: { method: 'POST' },
        update: { method: 'PUT' },
        delete: { method: 'DELETE' }
    });
}

export default angular.module('notistatusApp', [])
  .service('status', statusService)
  .name;
