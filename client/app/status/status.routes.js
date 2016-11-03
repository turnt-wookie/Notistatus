'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('status', {
      url: '/status',
      template: '<status></status>'
    });
}
