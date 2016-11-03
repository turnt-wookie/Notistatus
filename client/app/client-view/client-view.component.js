'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './client-view.routes';

export class ClientViewComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('notistatusApp.client-view', [uiRouter])
  .config(routes)
  .component('clientView', {
    template: require('./client-view.pug'),
    controller: ClientViewComponent,
    controllerAs: 'clientViewCtrl'
  })
  .name;
