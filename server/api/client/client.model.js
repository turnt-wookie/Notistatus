'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Client', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    info: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  });
}
