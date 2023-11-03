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
        allowNull: false,
      },
      last_name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number:{
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin:{
        type: DataTypes.BOOLEAN,
            allowNull: false,
      },
      employee:{
        type: DataTypes.BOOLEAN,
            allowNull: false,
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