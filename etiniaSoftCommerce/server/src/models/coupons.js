const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Coupon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    {timestamps: false},
    {paranoid: true}
  );
};