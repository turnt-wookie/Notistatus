'use strict';
const angular = require('angular');

/*@ngInject*/
export function clientService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('notistatusApp', [])
  .service('client', clientService)
  .name;
