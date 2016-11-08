'use strict';

import {Router} from 'express';

import * as controller from './client.controller';

import * as auth from '../../auth/auth.service';
import * as policies from '../../config/filters';

var router = new Router();

router.get('/', auth.isAuthenticated(), policies.isOwner, controller.index);
router.get('/:id', auth.isAuthenticated(), policies.isOwner, controller.show);
router.post('/', auth.isAuthenticated(), policies.appendUser, controller.create);
router.put('/:id', auth.isAuthenticated(), policies.appendUser, controller.upsert);
router.patch('/:id', auth.isAuthenticated(), policies.appendUser, controller.patch);
router.delete('/:id', auth.isAuthenticated(), policies.isOwner, controller.destroy);


router.post('/send_message', auth.isAuthenticated(), controller.sendMessage);

module.exports = router;
