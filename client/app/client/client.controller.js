'use strict';
const angular = require('angular');

/*@ngInject*/
export function clientController() {
  this.message = 'Hello';
}

export default angular.module('notistatusApp.client', [])
  .controller('ClientController', clientController)
  .name;
