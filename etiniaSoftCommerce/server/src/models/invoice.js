const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Invoice",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      date:{
        type: DataTypes.DATEONLY,
            allowNull: false,
      },       
    },
    {timestamps: false},
    {paranoid: true}
  );
};