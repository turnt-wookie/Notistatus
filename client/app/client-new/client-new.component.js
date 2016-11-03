'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './client-new.routes';

export class ClientNewComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('notistatusApp.client-new', [uiRouter])
  .config(routes)
  .component('clientNew', {
    template: require('./client-new.pug'),
    controller: ClientNewComponent,
    controllerAs: 'clientNewCtrl'
  })
  .name;
