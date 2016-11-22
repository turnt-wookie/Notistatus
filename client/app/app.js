'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import ngSweetAlert from 'oitozero.ngSweetAlert';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import StatusService from './services/status/status.service';
import StatusComponent from './status/status.component';
import StatusNewComponent from './status-new/status-new.component';
import StatusEditComponent from './status-edit/status-edit.component';
import StatusViewComponent from './status-view/status-view.component';

import ClientService from './services/client/client.service';
import ClientComponent from './client/client.component';
import ClientNewComponent from './client-new/client-new.component';
import ClientEditComponent from './client-edit/client-edit.component';
import ClientViewComponent from './client-view/client-view.component';

import SendMessageComponent from './send-message/send-message.component';


import './app.less';

angular.module('notistatusApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, _Auth,
    account, admin, navbar, footer, main, constants, util,
    StatusService,
    StatusComponent,
    StatusNewComponent,
    StatusEditComponent,
    StatusViewComponent,
    ClientService,
    ClientComponent,
    ClientNewComponent,
    ClientEditComponent,
    ClientViewComponent,
    SendMessageComponent,
    ngSweetAlert
  ])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['notistatusApp'], {
      strictDi: true
    });
  });
