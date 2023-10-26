const { DataTypes } = require('sequelize');
const User = require('./users');

module.exports = (sequelize) => {
  sequelize.define("Complaints",{
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
  {timestamps: false }
);
}