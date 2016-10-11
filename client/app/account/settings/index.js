'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('notistatusApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
