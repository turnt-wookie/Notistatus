'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './send-message.routes';

export class SendMessageComponent {
  /*@ngInject*/
  constructor($state, $stateParams, Client, Status) {
    this.client = Client.get($stateParams);
    this.statuses = Status.all();
  }

  sendMessage(){
    Client.send({client_id: this.client._id,status_id: this.status._id })
  }
}

SendMessageComponent.$inject = ['$state', '$stateParams', 'Client', 'Status'];

export default angular.module('notistatusApp.send-message', [uiRouter])
  .config(routes)
  .component('sendMessage', {
    template: require('./send-message.pug'),
    controller: SendMessageComponent,
    controllerAs: 'ctrl'
  })
  .name;
