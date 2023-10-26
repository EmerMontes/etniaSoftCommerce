const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Coupon",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User', 
            key: 'id', 
        },
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
    {timestamps: false}
  );
};