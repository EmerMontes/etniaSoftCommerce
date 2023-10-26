const { Model, DataTypes } = require('sequelize');
const { connection } = require('../config/connection');
const User = require('./user');

class Complaints extends Model {}

Complaints.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    complaint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'attended'),
      allowNull: false,
      defaultValue: 'pending',
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'complaints',
  }
);

module.exports = Complaints;