'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('client-edit', {
      url: '/client-edit',
      template: '<client-edit></client-edit>'
    });
}
