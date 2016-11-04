'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './status-view.routes';

export class StatusViewComponent {
  /*@ngInject*/
  constructor(Status, $stateParams) {
    this.status = Status.get($stateParams);
  }
}

StatusViewComponent.$inject = ['Status', '$stateParams'];

export default angular.module('notistatusApp.status-view', [uiRouter])
  .config(routes)
  .component('statusView', {
    template: require('./status-view.pug'),
    controller: StatusViewComponent,
    controllerAs: 'ctrl'
  })
  .name;
