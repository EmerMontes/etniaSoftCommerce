const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Purchase",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      id_article:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Articles', 
            key: 'id', 
        },
      },
      id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User', 
            key: 'id', 
        },
      },
      date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      method_pay:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {timestamps: false}
  );
};