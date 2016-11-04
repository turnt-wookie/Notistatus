'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './status-new.routes';

export class StatusNewComponent {
  /*@ngInject*/
  constructor(Status, $stateParams, $state) {
    this.$state = $state;
    this.status = new Status();
  }

  save(){
    this.status.$save(() => {
      this.$state.go('status');
    });
  }
}

StatusNewComponent.$inject = ['Status', '$stateParams', '$state'];


export default angular.module('notistatusApp.status-new', [uiRouter])
  .config(routes)
  .component('statusNew', {
    template: require('./status-new.pug'),
    controller: StatusNewComponent,
    controllerAs: 'ctrl'
  })
  .name;
