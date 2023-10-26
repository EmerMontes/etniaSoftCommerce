const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
    shippingPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {timestamps: false }
);
}
