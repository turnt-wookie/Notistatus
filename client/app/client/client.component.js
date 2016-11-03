'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './client.routes';

export class ClientComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('notistatusApp.client', [uiRouter])
  .config(routes)
  .component('client', {
    template: require('./client.pug'),
    controller: ClientComponent,
    controllerAs: 'clientCtrl'
  })
  .name;
