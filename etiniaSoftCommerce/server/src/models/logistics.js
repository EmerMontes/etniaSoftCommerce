const { DataTypes } = require('sequelize');

cmodule.exports = (sequelize) => {
  sequelize.define("Logistics",{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipping_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {timestamps: false }
);
}
