'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('client-view', {
      url: '/client/:id',
      template: '<client-view></client-view>'
    });
}
