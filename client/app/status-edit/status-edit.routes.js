'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('status-edit', {
      url: '/status/:id/edit',
      template: '<status-edit></status-edit>'
    });
}
