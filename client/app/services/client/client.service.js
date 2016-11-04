'use strict';
const angular = require('angular');

/*@ngInject*/
export function clientService($resource) {
	return $resource('/api/clients/:id/:controller', {id:'@_id'}, {
        all: { method: 'GET', isArray: true },
        get: { method: 'GET', isArray: false},
        create: { method: 'POST' },
        update: { method: 'PATCH' },
        delete: { method: 'DELETE' }
    });
}

export default angular.module('notistatusApp.clients', [])
  .service('Client', clientService)
  .name;
