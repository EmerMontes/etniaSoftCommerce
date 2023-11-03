const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Company",{
  
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_of_person: {
      type: DataTypes.ENUM('natural', 'legal'),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps: false, },
  {paranoid: true}
);
}
