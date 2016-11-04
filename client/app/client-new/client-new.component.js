'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './client-new.routes';

export class ClientNewComponent {
  /*@ngInject*/
  constructor(Client, $state) {
    this.$state = $state;
    this.client = new Client();
  }

  save(){
    this.client.$save(() => {
      this.$state.go('client');
    });
  }
}

ClientNewComponent.$inject = ['Client', '$state'];

export default angular.module('notistatusApp.client-new', [uiRouter])
  .config(routes)
  .component('clientNew', {
    template: require('./client-new.pug'),
    controller: ClientNewComponent,
    controllerAs: 'ctrl'
  })
  .name;
