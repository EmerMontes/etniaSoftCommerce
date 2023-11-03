const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Shipments",{
  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    {timestamps: false},
    {paranoid: true}
  );
};