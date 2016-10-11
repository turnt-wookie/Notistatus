'use strict';

import {Router} from 'express';

import * as controller from './thing.controller';

import * as auth from '../../auth/auth.service';
import * as filters from '../../config/filters';

var router = new Router();

router.get('/', auth.isAuthenticated(), filters.filterUserUnlessAdmin, filters.appendUser, controller.index);
router.get('/:id', auth.isAuthenticated(), filters.filterUserUnlessAdmin, filters.appendUser, controller.show);
router.post('/', auth.isAuthenticated(), filters.filterUserUnlessAdmin, filters.appendUser, controller.create);
router.put('/:id', auth.isAuthenticated(), filters.filterUserUnlessAdmin, filters.appendUser, controller.upsert);
router.patch('/:id', auth.isAuthenticated(), filters.filterUserUnlessAdmin, filters.appendUser, controller.patch);
router.delete('/:id', auth.isAuthenticated(), filters.filterUserUnlessAdmin, filters.appendUser, controller.destroy);

module.exports = router;
