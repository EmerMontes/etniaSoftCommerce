const {DataTypes} = require("sequelize");
const User = require('./users');

module.exports = (sequelize) => {
  sequelize.define(
    "Bank_Accounts",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, 
            key: 'id', 
        },
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