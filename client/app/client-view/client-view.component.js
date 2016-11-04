'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './client-view.routes';

export class ClientViewComponent {
  /*@ngInject*/
  constructor(Client, $stateParams) {
    this.client = Client.get($stateParams);
  }
}

ClientViewComponent.$inject = ['Client', '$stateParams'];

export default angular.module('notistatusApp.client-view', [uiRouter])
  .config(routes)
  .component('clientView', {
    template: require('./client-view.pug'),
    controller: ClientViewComponent,
    controllerAs: 'ctrl'
  })
  .name;
