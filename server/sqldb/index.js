/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Status = db.sequelize.import('../api/status/status.model');
db.Client = db.sequelize.import('../api/client/client.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');

db.User.hasMany(db.Status);
db.User.hasMany(db.Client);
db.Status.hasMany(db.Client);
db.Status.belongsTo(db.User);
db.Client.belongsTo(db.Status);
db.Client.belongsTo(db.User);



module.exports = db;
