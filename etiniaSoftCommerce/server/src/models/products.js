const  {DataTypes}  = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Products",{
      id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.JSONB,
        allowNull: false
      },
       quantity: {
         type: DataTypes.INTEGER,
        allowNull: false,
       },
    },
    {timestamps: false},
    {paranoid: true}
  );
};