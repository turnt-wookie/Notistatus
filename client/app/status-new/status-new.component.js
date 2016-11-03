'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './status-new.routes';

export class StatusNewComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('notistatusApp.status-new', [uiRouter])
  .config(routes)
  .component('statusNew', {
    template: require('./status-new.pug'),
    controller: StatusNewComponent,
    controllerAs: 'statusNewCtrl'
  })
  .name;
