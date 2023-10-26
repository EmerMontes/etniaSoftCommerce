const {DataTypes} = require("sequelize");
const User = require("./users")
const Logistics = require("./logistics")
const Invoice = require("./invoice")



module.exports = (sequelize) => {
  sequelize.define(
    "Shipments",
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
            model: User, 
            key: 'id', 
        },
      },
      id_factura:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Invoice, 
            key: 'id', 
        },
      },
      id_transportadora:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Logistics, 
            key: 'id', 
        },
      },
      date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      cost:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {timestamps: false}
  );
};