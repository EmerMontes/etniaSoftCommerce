const {DataTypes} = require("sequelize-oracle");

module.exports = (sequelize) => {
  sequelize.define(
    "Payment_Method",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id:{ type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
      },
      payment_method:{
        type: DataTypes.ENUM("Credit", "Debit", "Cash"),
        allowNull: false
      },
    },
  );
};