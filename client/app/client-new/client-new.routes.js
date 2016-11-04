'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('client-new', {
      url: '/client/new',
      template: '<client-new></client-new>'
    });
}
