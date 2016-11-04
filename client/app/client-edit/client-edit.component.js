'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './client-edit.routes';

export class ClientEditComponent {
  /*@ngInject*/
  constructor($state, Client, $stateParams) {
    this.$state = $state;
    this.client = Client.get($stateParams);
  }

  save(){
    this.client.id = this.client._id;
    this.client.$update(() => {
      this.$state.go('client');
    });
  }
}

ClientEditComponent.$inject = ['$state', 'Client', '$stateParams'];

export default angular.module('notistatusApp.client-edit', [uiRouter])
  .config(routes)
  .component('clientEdit', {
    template: require('./client-edit.pug'),
    controller: ClientEditComponent,
    controllerAs: 'ctrl'
  })
  .name;
