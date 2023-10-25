const {DataTypes} = require("sequelize-oracle");

module.exports = (sequelize) => {
  sequelize.define(
    "Invoice",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      purchase_id:{ 
      },
      user_id:{
      },
      company_id:{
      },
      payment_method_id:{
      },
      date:{
        type: DataTypes.date,
            allowNull: false,
      }, 
    },
  );
};