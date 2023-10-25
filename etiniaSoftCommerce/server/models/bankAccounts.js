const {DataTypes} = require("sequelize-oracle");

module.exports = (sequelize) => {
  sequelize.define(
    "Bank Accounts",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id:{ 
      },
      account_number:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      bank:{
        type: DataTypes.STRING,
        allowNull: false
      },
      type_of_account:{
        type: DataTypes.STRING,
        allowNull: false
      },
      client_name:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
  );
};