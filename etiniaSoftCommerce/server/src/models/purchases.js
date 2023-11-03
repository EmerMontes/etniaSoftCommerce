const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Purchases",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {paranoid: true}
  );
};