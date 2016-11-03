'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('status-view', {
      url: '/status/:id',
      template: '<status-view></status-view>'
    });
}
