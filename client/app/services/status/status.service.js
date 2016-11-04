'use strict';
const angular = require('angular');

/*@ngInject*/
export function statusService($resource) {
	return $resource('/api/statuses/:id/:controller', {}, {
        all: { method: 'GET', isArray: true },
        get: { method: 'GET', isArray: false},
        create: { method: 'POST' },
        update: { method: 'PATCH' },
        delete: { method: 'DELETE' }
    });
}

export default angular.module('notistatusApp.statuses', [])
  .service('Status', statusService)
  .name;
