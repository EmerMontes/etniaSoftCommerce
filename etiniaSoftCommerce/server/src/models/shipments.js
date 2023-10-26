const {DataTypes} = require("sequelize");

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
            model: 'User', 
            key: 'id', 
        },
      },
      id_factura:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Factura', 
            key: 'id', 
        },
      },
      id_transportadora:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Transportadora', 
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