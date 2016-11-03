'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('client-view', {
      url: '/client-view',
      template: '<client-view></client-view>'
    });
}
