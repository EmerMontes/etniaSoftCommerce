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
      id_purchase:{ type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Purchase', 
            key: 'id', 
        }
      },
      id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User', 
            key: 'id', 
        },
      },
      id_company:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Company',
            key: 'id'
        }
      },
      id_payment_method:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Payment_Method', 
            key: 'id', 
        }
      },
      date:{
        type: DataTypes.date,
            allowNull: false,
      }, 
    },
  );
};