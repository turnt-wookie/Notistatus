'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('status-new', {
      url: '/status/new',
      template: '<status-new></status-new>'
    });
}
