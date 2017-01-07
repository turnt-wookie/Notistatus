'use strict';

import {Router} from 'express';

import * as controller from './client.controller';

import * as auth from '../../auth/auth.service';
import * as policies from '../../config/filters';

var router = new Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.upsert);
router.patch('/:id', auth.isAuthenticated(), controller.patch);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);


router.post('/send_message', auth.isAuthenticated(), controller.sendMessage);

module.exports = router;
