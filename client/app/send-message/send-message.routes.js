'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('send-message', {
      url: '/client/:id/message',
      template: '<send-message></send-message>'
    });
}
