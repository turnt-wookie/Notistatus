'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './status.routes';

export class StatusComponent {
  /*@ngInject*/
  constructor(Status) {
    this.statuses = Status.all();
  }
}

StatusComponent.$inject = ['Status'];

export default angular.module('notistatusApp.status', [uiRouter])
  .config(routes)
  .component('status', {
    template: require('./status.pug'),
    controller: StatusComponent,
    controllerAs: 'ctrl'
  })
  .name;
