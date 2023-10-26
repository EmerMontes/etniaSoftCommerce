const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Complaints",{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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