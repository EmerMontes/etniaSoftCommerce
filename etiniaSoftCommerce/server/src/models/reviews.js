const { DataTypes } = require('sequelize');
const Articles = require('./articles');
const User = require('./user');
const Company = require('./company');

module.exports = (sequelize) => {
  sequelize.define(
    "Reviews",
    {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Articles,
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
        key: 'id',
      },
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calification: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {timestamps: false }
)
}

