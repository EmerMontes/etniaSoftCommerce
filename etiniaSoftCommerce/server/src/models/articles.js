const  {DataTypes}  = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Articles",{
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
      brand:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      img:{
        type: DataTypes.STRING,
            allowNull: false,
      },
      video:{
        type: DataTypes.STRING,
            allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        isEmail: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
    },
    {timestamps: false}
  );
};