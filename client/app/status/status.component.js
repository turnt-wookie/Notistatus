'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './status.routes';

export class StatusComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('notistatusApp.status', [uiRouter])
  .config(routes)
  .component('status', {
    template: require('./status.pug'),
    controller: StatusComponent,
    controllerAs: 'statusCtrl'
  })
  .name;
