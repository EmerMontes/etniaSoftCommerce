const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone_number:{
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      confirmationToken:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      isVerify:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      admin:{
        type: DataTypes.BOOLEAN,
            allowNull: true,
      },
      employee:{
        type: DataTypes.BOOLEAN,
            allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        is: [/\d/],
      },
    },
    {timestamps: false},
    {paranoid: true}
  );
};