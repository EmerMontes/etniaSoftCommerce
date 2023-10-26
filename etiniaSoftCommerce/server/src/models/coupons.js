const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Coupon",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      state:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      discount:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {timestamps: false}
  );
};