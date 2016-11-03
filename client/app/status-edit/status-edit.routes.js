'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('status-edit', {
      url: '/status/:id',
      template: '<status-edit></status-edit>'
    });
}
