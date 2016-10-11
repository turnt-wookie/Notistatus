'use strict';
const angular = require('angular');

/*@ngInject*/
export function statusController() {
  this.message = 'Hello';
}

export default angular.module('notistatusApp.status', [])
  .controller('StatusController', statusController)
  .name;
