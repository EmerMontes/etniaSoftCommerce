const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PaymentMethod",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      paymentMethod:{
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {timestamps: false},
    {paranoid: true}
  );
};