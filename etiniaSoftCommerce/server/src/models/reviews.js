const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Reviews",
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calification: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {timestamps: false },
  {paranoid: true}
)
}