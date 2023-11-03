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
        type: DataTypes.ENUM("Credit", "Debit", "Cash"),
        allowNull: false
      },
    },
    {timestamps: false},
    {paranoid: true}
  );
};