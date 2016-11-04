'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('client-edit', {
      url: '/client/:id/edit',
      template: '<client-edit></client-edit>'
    });
}
