'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './client.routes';

export class ClientComponent {
  /*@ngInject*/
  constructor(Client) {
    this.clients = Client.query();
  }

  delete(client) {
    client.$remove();
    this.clients.splice(this.clients.indexOf(client), 1);
  }
}

ClientComponent.$inject = ['Client'];

export default angular.module('notistatusApp.client', [uiRouter])
  .config(routes)
  .component('client', {
    template: require('./client.pug'),
    controller: ClientComponent,
    controllerAs: 'ctrl'
  })
  .name;
