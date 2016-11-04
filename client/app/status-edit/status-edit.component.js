'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './status-edit.routes';

export class StatusEditComponent {
  /*@ngInject*/
  constructor(Status, $stateParams) {
    this.status = Status.get($stateParams);
  }
  save(){
    this.status.$save(() => {
      this.$state.go('status');
    });
  }
}

StatusEditComponent.$inject = ['Status', '$stateParams'];

export default angular.module('notistatusApp.status-edit', [uiRouter])
  .config(routes)
  .component('statusEdit', {
    template: require('./status-edit.pug'),
    controller: StatusEditComponent,
    controllerAs: 'ctrl'
  })
  .name;
