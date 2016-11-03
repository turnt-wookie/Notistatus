'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './client-edit.routes';

export class ClientEditComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('notistatusApp.client-edit', [uiRouter])
  .config(routes)
  .component('clientEdit', {
    template: require('./client-edit.pug'),
    controller: ClientEditComponent,
    controllerAs: 'clientEditCtrl'
  })
  .name;
