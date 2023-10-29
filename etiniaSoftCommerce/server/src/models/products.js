const  {DataTypes}  = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Products",{
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
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
      },
      size: {
        type: DataTypes.ENUM("XS", "S", "M", "L", "XL", "XXL"),
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sale:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      category:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      img:{
        type: DataTypes.TEXT,
      defaultValue: "https://www.latercera.com/resizer/DQq-BF-ulL7eY2IK1V9CdfW4SJI=/arc-anglerfish-arc2-prod-copesa/public/JRVRFF65PNAJ5PU4JCRHYFJRP4.jpeg"
      
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        
      },
    },
    {timestamps: false}
  );
};