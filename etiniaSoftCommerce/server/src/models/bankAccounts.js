const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "BankAccounts",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      accountNumber:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      bank:{
        type: DataTypes.STRING,
        allowNull: false
      },
      typeOfAccount:{
        type: DataTypes.STRING,
        allowNull: false
      },
      clientName:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {paranoid: true}
  );
};